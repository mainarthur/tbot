/// <reference path="typedefs.js" />

const { default: axios } = require("axios");
const EventEmitter = require("events");
const { snakeCase, camelCase, stringifyQuery } = require("./util");

/**
 * @class
 */
class TelegramBot extends EventEmitter {
  baseApiUrl = "https://api.telegram.org";
  /**
   *
   * @param {String} token
   * @param {Object} [options]
   */
  constructor(token, options) {
    super();
    this.token = token;
    this.options = options;
    this.axios = axios.create();

    this.axios.interceptors.response.use(
      (value) => {
        const { ok, result, description } = value.data;

        if (ok) return camelCase(result);

        throw new Error(description);
      },
      (error) => {
        /**
         * @type {import("axios").AxiosResponse}
         */
        const response = error?.response;

        if (response) {
          const { ok, description } = response?.data ?? { ok: true };
          if (!ok) throw new Error(description);
        }
      }
    );

    this.axios;

    this.axios.interceptors.request.use((value) => {
      const { formData, queryOptions } = value.data;
      value.data = formData;
      value.url += `?${stringifyQuery(snakeCase(queryOptions))}`;
      return value;
    });
  }

  static messageEvents = Object.freeze([
    "replyToMessage",
    "text",
    "animation",
    "audio",
    "document",
    "photo",
    "sticker",
    "video",
    "videoNote",
    "voice",
    "contact",
    "dice",
    "game",
    "poll",
    "venue",
    "location",
    "newChatMembers",
    "leftChatMember",
    "newChatTitle",
    "newChatPhoto",
    "messageAutoDeleteTimerChanged",
    "pinnedMessage",
    "invoice",
    "successfulPayment",
    "passportData",
    "voiceChatScheduled",
    "voiceChatStarted",
    "voiceChatEnded",
  ]);

  /**
   * @type {readonly String[]} List of all events
   */
  static events = Object.freeze([
    "message",
    "editedMessage",
    "channelPost",
    "editedChannelPost",
    "inlineQuery",
    "chosenInlineResult",
    "callbackQuery",
    "shippingQuery",
    "preCheckoutQuery",
    "poll",
    "pollAnswer",
    "myChatMember",
    "chatMember",
    ...TelegramBot.messageEvents,
  ]);

  /**
   *
   * @param {Update} update
   */
  handleUpdate(update) {
    const { updateId, ...rest } = update;

    const updateTypes = Object.keys(rest);

    this.emit("update", update);

    updateTypes.forEach((updateType) => {
      this.emit(updateType, update[updateType]);

      if (updateType === "message") {
        /**
         * @type {Message}
         */
        const message = update[updateType];
        TelegramBot.messageEvents.forEach(
          (messageEvent) =>
            messageEvent in message && this.emit(messageEvent, message)
        );
      }
    });
  }

  /**
   * Builds url to request
   * @private
   * @param {String} method Telegram Method name
   * @returns {String}
   */
  _buildUrl(method) {
    return `${this.baseApiUrl}/bot${this.token}/${method}`;
  }

  /**
   * @private
   * @param {String} method Telegram Bot Api method name
   * @param {Object} [options] Request Options
   * @param {FormData} [options.formData] Request FormData
   * @param {Object} [options.queryOptions] Request query options
   *
   * @returns {Promise<Object>}
   */
  _request(method, options = {}) {
    const url = this._buildUrl(method);

    return this.axios.post(url, options, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  /** Use this method to receive incoming updates using long polling (wiki). An Update[] objects is returned.
   *
   * @param {Object} [options]
   * @param {Integer} [options.offset] Identifier of the first update to be returned. Must be greater by one than the highest among the identifiers of previously received updates. By default, updates starting with the earliest unconfirmed update are returned. An update is considered confirmed as soon as getUpdates is called with an offset higher than its update_id. The negative offset can be specified to retrieve updates starting from -offset update from the end of the updates queue. All previous updates will forgotten.
   * @param {Integer} [options.limit] Limits the number of updates to be retrieved. Values between 1-100 are accepted. Defaults to 100.
   * @param {Integer} [options.timeout] Timeout in seconds for long polling. Defaults to 0, i.e. usual short polling. Should be positive, short polling should be used for testing purposes only.
   * @param {String[]} [options.allowedUpdates] A JSON-serialized list of the update types you want your bot to receive. For example, specify [“message”, “edited_channel_post”, “callback_query”] to only receive updates of these types. See Update for a complete list of available update types. Specify an empty list to receive all update types except chat_member (default). If not specified, the previous setting will be used.
   *
   *Please note that this parameter doesn't affect updates created before the call to the getUpdates, so unwanted updates may be received for a short period of time.
   * @returns {Promise<Update[]>}
   */
  async getUpdates(options = {}) {
    return this._request("getUpdates", { queryOptions: { ...options } });
  }

  /** Use this method to remove webhook integration if you decide to switch back to getUpdates. Returns True on success.
   *
   * @param {Object} [options]
   * @param {Boolean} [options.dropPendingUpdates] Pass True to drop all pending updates
   * @returns {Promise<boolean>}
   */
  async deleteWebhook(options = {}) {
    return this._request("deleteWebhook", { queryOptions: { ...options } });
  }

  /** Use this method to send text messages. On success, the sent Message is returned.
   * @param {Integer | String} chatId Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
   * @param {String} text Text of the message to be sent, 1-4096 characters after entities parsing
   * @param {Object} [options]
   * @param {String} [options.parseMode] Mode for parsing entities in the message text. See formatting options for more details.
   * @param {MessageEntity[]} [options.entities] List of special entities that appear in message text, which can be specified instead of parse_mode
   * @param {Boolean} [options.disableWebPagePreview] Disables link previews for links in this message
   * @param {Boolean} [options.disableNotification] Sends the message silently. Users will receive a notification with no sound.
   * @param {Integer} [options.replyToMessageId] If the message is a reply, ID of the original message
   * @param {Boolean} [options.allowSendingWithoutReply] Pass True, if the message should be sent even if the specified replied-to message is not found
   * @param {InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply} [options.replyMarkup] Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
   * @returns {Promise<Message>}
   */
  async sendMessage(chatId, text, options = {}) {
    return this._request("sendMessage", {
      queryOptions: { chatId, text, ...options },
    });
  }

  /** Use this method to forward messages of any kind. Service messages can't be forwarded. On success, the sent Message is returned.
   * @param {Integer | String} chatId Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
   * @param {Integer | String} fromChatId Unique identifier for the chat where the original message was sent (or channel username in the forma* @channelusername)
   * @param {Integer} messageId Message identifier in the chat specified in from_chat_id
   * @param {Object} [options]
   * @param {Boolean} [options.disableNotification] Sends the message silently. Users will receive a notification with no sound.
   * @returns {Promise<Message>}
   */
  async forwardMessage(chatId, fromChatId, messageId, options = {}) {
    return this._request("forwardMessage", {
      queryOptions: { chatId, fromChatId, messageId, ...options },
    });
  }

  /** Use this method to copy messages of any kind. Service messages and invoice messages can't be copied. The method is analogous to the method forwardMessage, but the copied message doesn't have a link to the original message. Returns the MessageId of the sent message on success.
   * @param {Integer | String} chatId Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
   * @param {Integer | String} fromChatId Unique identifier for the chat where the original message was sent (or channel username in the forma* @channelusername)
   * @param {Integer} messageId Message identifier in the chat specified in from_chat_id
   * @param {Object} [options]
   * @param {String} [options.caption] New caption for media, 0-1024 characters after entities parsing. If not specified, the original caption is kept
   * @param {String} [options.parseMode] Mode for parsing entities in the new caption. See formatting options for more details.
   * @param {MessageEntity[]} [options.captionEntities] List of special entities that appear in the new caption, which can be specified instead of parse_mode
   * @param {Boolean} [options.disableNotification] Sends the message silently. Users will receive a notification with no sound.
   * @param {Integer} [options.replyToMessageId] If the message is a reply, ID of the original message
   * @param {Boolean} [options.allowSendingWithoutReply] Pass True, if the message should be sent even if the specified replied-to message is not found
   * @param {InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply} [options.replyMarkup] Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
   * @returns {Promise<Message>}
   */
  async copyMessage(chatId, fromChatId, messageId, options = {}) {
    return this._request("copyMessage", {
      queryOptions: { chatId, fromChatId, messageId, ...options },
    });
  }

  /** Use this method to send photos. On success, the sent Message is returned.
   * @param {Integer | String} chatId Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
   * @param {InputFile | String} photo Photo to send. Pass a file_id as String to send a photo that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a photo from the Internet, or upload a new photo using multipart/form-data. The photo must be at most 10 MB in size. The photo's width and height must not exceed 10000 in total. Width and height ratio must be at most 20. More info on Sending Files »
   * @param {Object} [options]
   * @param {String} [options.caption] Photo caption (may also be used when resending photos by file_id), 0-1024 characters after entities parsing
   * @param {String} [options.parseMode] Mode for parsing entities in the photo caption. See formatting options for more details.
   * @param {MessageEntity[]} [options.captionEntities] List of special entities that appear in the caption, which can be specified instead of parse_mode
   * @param {Boolean} [options.disableNotification] Sends the message silently. Users will receive a notification with no sound.
   * @param {Integer} [options.replyToMessageId] If the message is a reply, ID of the original message
   * @param {Boolean} [options.allowSendingWithoutReply] Pass True, if the message should be sent even if the specified replied-to message is not found
   * @param {InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply} [options.replyMarkup] Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
   * @returns {Promise<Message>}
   */
  async sendPhoto(chatId, photo, options = {}) {
    // TODO: FILE SENDING
    return this._request("sendPhoto", {
      queryOptions: { chatId, ...options },
    });
  }

  /** Use this method to send general files. On success, the sent Message is returned. Bots can currently send files of any type of up to 50 MB in size, this limit may be changed in the future.
   * @param {Integer | String} chatId Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
   * @param {InputFile | String} document File to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More info on Sending Files »
   * @param {Object} [options]
   * @param {InputFile | String} [options.thumb] Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More info on Sending Files »
   * @param {String} [options.caption] Document caption (may also be used when resending documents by file_id), 0-1024 characters after entities parsing
   * @param {String} [options.parseMode] Mode for parsing entities in the document caption. See formatting options for more details.
   * @param {MessageEntity[]} [options.captionEntities] List of special entities that appear in the caption, which can be specified instead of parse_mode
   * @param {Boolean} [options.disableContentTypeDetection] Disables automatic server-side content type detection for files uploaded using multipart/form-data
   * @param {Boolean} [options.disableNotification] Sends the message silently. Users will receive a notification with no sound.
   * @param {Integer} [options.replyToMessageId] If the message is a reply, ID of the original message
   * @param {Boolean} [options.allowSendingWithoutReply] Pass True, if the message should be sent even if the specified replied-to message is not found
   * @param {InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply} [options.replyMarkup] Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
   * @returns {Promise<Message>}
   */
  async sendDocument(chatId, document, options = {}) {
    return this._request("sendDocument", {
      queryOptions: { chatId, document, ...options },
    });
  }

  /** Use this method to send video files, Telegram clients support mp4 videos (other formats may be sent as Document). On success, the sent Message is returned. Bots can currently send video files of up to 50 MB in size, this limit may be changed in the future.
   * @param {Integer | String} chatId Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
   * @param {InputFile | String} video Video to send. Pass a file_id as String to send a video that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a video from the Internet, or upload a new video using multipart/form-data. More info on Sending Files »
   * @param {Object} [options]
   * @param {Integer} [options.duration] Duration of sent video in seconds
   * @param {Integer} [options.width] Video width
   * @param {Integer} [options.height] Video height
   * @param {InputFile | String} [options.thumb] Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More info on Sending Files »
   * @param {String} [options.caption] Video caption (may also be used when resending videos by file_id), 0-1024 characters after entities parsing
   * @param {String} [options.parseMode] Mode for parsing entities in the video caption. See formatting options for more details.
   * @param {MessageEntity[]} [options.captionEntities] List of special entities that appear in the caption, which can be specified instead of parse_mode
   * @param {Boolean} [options.supportsStreaming] Pass True, if the uploaded video is suitable for streaming
   * @param {Boolean} [options.disableNotification] Sends the message silently. Users will receive a notification with no sound.
   * @param {Integer} [options.replyToMessageId] If the message is a reply, ID of the original message
   * @param {Boolean} [options.allowSendingWithoutReply] Pass True, if the message should be sent even if the specified replied-to message is not found
   * @param {InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply} [options.replyMarkup] Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
   * @returns {Promise<Message>}
   */
  async sendVideo(chatId, video, options = {}) {
    return this._request("sendVideo", {
      queryOptions: { chatId, video, ...options },
    });
  }

  /** Use this method to send animation files (GIF or H.264/MPEG-4 AVC video without sound). On success, the sent Message is returned. Bots can currently send animation files of up to 50 MB in size, this limit may be changed in the future.
   * @param {Integer | String} chatId Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
   * @param {InputFile | String} animation Animation to send. Pass a file_id as String to send an animation that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an animation from the Internet, or upload a new animation using multipart/form-data. More info on Sending Files »
   * @param {Object} [options]
   * @param {Integer} [options.duration] Duration of sent animation in seconds
   * @param {Integer} [options.width] Animation width
   * @param {Integer} [options.height] Animation height
   * @param {InputFile | String} [options.thumb] Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More info on Sending Files »
   * @param {String} [options.caption] Animation caption (may also be used when resending animation by file_id), 0-1024 characters after entities parsing
   * @param {String} [options.parseMode] Mode for parsing entities in the animation caption. See formatting options for more details.
   * @param {MessageEntity[]} [options.captionEntities] List of special entities that appear in the caption, which can be specified instead of parse_mode
   * @param {Boolean} [options.disableNotification] Sends the message silently. Users will receive a notification with no sound.
   * @param {Integer} [options.replyToMessageId] If the message is a reply, ID of the original message
   * @param {Boolean} [options.allowSendingWithoutReply] Pass True, if the message should be sent even if the specified replied-to message is not found
   * @param {InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply} [options.replyMarkup] Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
   * @returns {Promise<Message>}
   */
  async sendAnimation(chatId, animation, options = {}) {
    return this._request("sendAnimation", {
      queryOptions: { chatId, animation, ...options },
    });
  }

  /** Use this method to send audio files, if you want Telegram clients to display the file as a playable voice message. For this to work, your audio must be in an .OGG file encoded with OPUS (other formats may be sent as Audio or Document). On success, the sent Message is returned. Bots can currently send voice messages of up to 50 MB in size, this limit may be changed in the future.
   * @param {Integer | String} chatId Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
   * @param {InputFile | String} voice Audio file to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More info on Sending Files »
   * @param {Object} [options]
   * @param {String} [options.caption] Voice message caption, 0-1024 characters after entities parsing
   * @param {String} [options.parseMode] Mode for parsing entities in the voice message caption. See formatting options for more details.
   * @param {MessageEntity[]} [options.captionEntities] List of special entities that appear in the caption, which can be specified instead of parse_mode
   * @param {Integer} [options.duration] Duration of the voice message in seconds
   * @param {Boolean} [options.disableNotification] Sends the message silently. Users will receive a notification with no sound.
   * @param {Integer} [options.replyToMessageId] If the message is a reply, ID of the original message
   * @param {Boolean} [options.allowSendingWithoutReply] Pass True, if the message should be sent even if the specified replied-to message is not found
   * @param {InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply} [options.replyMarkup] Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
   * @returns {Promise<Message>}
   */
  async sendVoice(chatId, voice, options = {}) {
    return this._request("sendVoice", {
      queryOptions: { chatId, voice, ...options },
    });
  }

  /** As of v.4.0, Telegram clients support rounded square mp4 videos of up to 1 minute long. Use this method to send video messages. On success, the sent Message is returned.
   * @param {Integer | String} chatId Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
   * @param {InputFile | String} videoNote Video note to send. Pass a file_id as String to send a video note that exists on the Telegram servers (recommended) or upload a new video using multipart/form-data. More info on Sending Files ». Sending video notes by a URL is currently unsupported
   * @param {Object} [options]
   * @param {Integer} [options.duration] Duration of sent video in seconds
   * @param {Integer} [options.length] Video width and height, i.e. diameter of the video message
   * @param {InputFile | String} [options.thumb] Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More info on Sending Files »
   * @param {Boolean} [options.disableNotification] Sends the message silently. Users will receive a notification with no sound.
   * @param {Integer} [options.replyToMessageId] If the message is a reply, ID of the original message
   * @param {Boolean} [options.allowSendingWithoutReply] Pass True, if the message should be sent even if the specified replied-to message is not found
   * @param {InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply} [options.replyMarkup] Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
   * @returns {Promise<Message>}
   */
  async sendVideoNote(chatId, videoNote, options = {}) {
    return this._request("sendVideoNote", {
      queryOptions: { chatId, videoNote, ...options },
    });
  }

  /** Use this method to send a group of photos, videos, documents or audios as an album. Documents and audio files can be only grouped in an album with messages of the same type. On success, an array of Messages that were sent is returned.
   * @param {Integer | String} chatId Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
   * @param {InputMedia[]} media A JSON-serialized array describing messages to be sent, must include 2-10 items
   * @param {Object} [options]
   * @param {Boolean} [options.disableNotification] Sends messages silently. Users will receive a notification with no sound.
   * @param {Integer} [options.replyToMessageId] If the messages are a reply, ID of the original message
   * @param {Boolean} [options.allowSendingWithoutReply] Pass True, if the message should be sent even if the specified replied-to message is not found
   * @returns {Promise<Message[]>}
   */
  async sendMediaGroup(chatId, media, options = {}) {
    return this._request("sendMediaGroup", {
      queryOptions: { chatId, media, ...options },
    });
  }

  /** Use this method to send point on the map. On success, the sent Message is returned.
   * @param {Integer | String} chatId Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
   * @param {Float} latitude Latitude of the location
   * @param {Float} longitude Longitude of the location
   * @param {Object} [options]
   * @param {Float} [options.horizontalAccuracy] The radius of uncertainty for the location, measured in meters; 0-1500
   * @param {Integer} [options.livePeriod] Period in seconds for which the location will be updated (see Live Locations, should be between 60 and 86400.
   * @param {Integer} [options.heading] For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.
   * @param {Integer} [options.proximityAlertRadius] For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.
   * @param {Boolean} [options.disableNotification] Sends the message silently. Users will receive a notification with no sound.
   * @param {Integer} [options.replyToMessageId] If the message is a reply, ID of the original message
   * @param {Boolean} [options.allowSendingWithoutReply] Pass True, if the message should be sent even if the specified replied-to message is not found
   * @param {InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply} [options.replyMarkup] Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
   * @returns {Promise<Message>}
   */
  async sendLocation(chatId, latitude, longitude, options = {}) {
    return this._request("sendLocation", {
      queryOptions: { chatId, latitude, longitude, ...options },
    });
  }

  /** Use this method to edit live location messages. A location can be edited until its live_period expires or editing is explicitly disabled by a call to stopMessageLiveLocation. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
   * @param {Float} latitude Latitude of new location
   * @param {Float} longitude Longitude of new location
   *
   * @param {object} [options]
   * @param {Integer} [options.messageId] Required if inline_message_id is not specified. Identifier of the message to edit
   * @param {String} [options.inlineMessageId] Required if chat_id and message_id are not specified. Identifier of the inline message
   * @param {Float} [options.horizontalAccuracy] The radius of uncertainty for the location, measured in meters; 0-1500
   * @param {Integer} [options.heading] Direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.
   * @param {Integer} [options.proximityAlertRadius] Maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.
   * @param {InlineKeyboardMarkup} [options.replyMarkup] A JSON-serialized object for a new inline keyboard.
   * @param {Integer | String} [options.chatId] Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
   *
   * @returns {Promise<Message | boolean>}
   */
  async editMessageLiveLocation(latitude, longitude, options = {}) {
    return this._request("editMessageLiveLocation", {
      queryOptions: { latitude, longitude, ...options },
    });
  }

  /** Use this method to stop updating a live location message before live_period expires. On success, if the message was sent by the bot, the sent Message is returned, otherwise True is returned.
   * @param {Object} [options]
   * @param {Integer} [options.messageId] Required if inline_message_id is not specified. Identifier of the message with live location to stop
   * @param {String} [options.inlineMessageId] Required if chat_id and message_id are not specified. Identifier of the inline message
   * @param {InlineKeyboardMarkup} [options.replyMarkup] A JSON-serialized object for a new inline keyboard.
   * @param {Integer | String} [options.chatId] Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
   * @returns {Promise<Message | boolean>}
   */
  async stopMessageLiveLocation(options = {}) {
    return this._request("stopMessageLiveLocation", {
      queryOptions: { ...options },
    });
  }

  /** Use this method to send information about a venue. On success, the sent Message is returned.
   * @param {Integer | String} chatId Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
   * @param {Float} latitude Latitude of the venue
   * @param {Float} longitude Longitude of the venue
   * @param {String} title Name of the venue
   * @param {String} address Address of the venue
   * @param {Object} [options]
   * @param {String} [options.foursquareId] Foursquare identifier of the venue
   * @param {String} [options.foursquareType] Foursquare type of the venue, if known. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.)
   * @param {String} [options.googlePlaceId] Google Places identifier of the venue
   * @param {String} [options.googlePlaceType] Google Places type of the venue. (See supported types.)
   * @param {Boolean} [options.disableNotification] Sends the message silently. Users will receive a notification with no sound.
   * @param {Integer} [options.replyToMessageId] If the message is a reply, ID of the original message
   * @param {Boolean} [options.allowSendingWithoutReply] Pass True, if the message should be sent even if the specified replied-to message is not found
   * @param {InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply} [options.replyMarkup] Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
   * @returns {Promise<Message>}
   */
  async sendVenue(chatId, latitude, longitude, title, address, options = {}) {
    return this._request("sendVenue", {
      queryOptions: { chatId, latitude, longitude, title, address, ...options },
    });
  }

  /** Use this method to send phone contacts. On success, the sent Message is returned.
   * @param {Integer | String} chatId Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
   * @param {String} phoneNumber Contact's phone number
   * @param {String} firstName Contact's first name
   * @param {Object} [options]
   * @param {String} [options.lastName] Contact's last name
   * @param {String} [options.vcard] Additional data about the contact in the form of a vCard, 0-2048 bytes
   * @param {Boolean} [options.disableNotification] Sends the message silently. Users will receive a notification with no sound.
   * @param {Integer} [options.replyToMessageId] If the message is a reply, ID of the original message
   * @param {Boolean} [options.allowSendingWithoutReply] Pass True, if the message should be sent even if the specified replied-to message is not found
   * @param {InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply} [options.replyMarkup] Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove keyboard or to force a reply from the user.
   * @returns {Promise<Message>}
   */
  async sendContact(chatId, phoneNumber, firstName, options = {}) {
    return this._request("sendContact", {
      queryOptions: { chatId, phoneNumber, firstName, ...options },
    });
  }

  /** Use this method to send a native poll. On success, the sent Message is returned.
   * @param {Integer | String} chatId Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
   * @param {String} question Poll question, 1-300 characters
   * @param {String[]} options A JSON-serialized list of answer options, 2-10 strings 1-100 characters each
   * @param {Object} [extra]
   * @param {Boolean} [extra.isAnonymous] True, if the poll needs to be anonymous, defaults to True
   * @param {String} [extra.type] Poll type, “quiz” or “regular”, defaults to “regular”
   * @param {Boolean} [extra.allowsMultipleAnswers] True, if the poll allows multiple answers, ignored for polls in quiz mode, defaults to False
   * @param {Integer} [extra.correctOptionId] 0-based identifier of the correct answer option, required for polls in quiz mode
   * @param {String} [extra.explanation] Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters with at most 2 line feeds after entities parsing
   * @param {String} [extra.explanationParseMode] Mode for parsing entities in the explanation. See formatting options for more details.
   * @param {MessageEntity[]} [extra.explanationEntities] List of special entities that appear in the poll explanation, which can be specified instead of parse_mode
   * @param {Integer} [extra.openPeriod] Amount of time in seconds the poll will be active after creation, 5-600. Can't be used together with close_date.
   * @param {Integer} [extra.closeDate] Point in time (Unix timestamp) when the poll will be automatically closed. Must be at least 5 and no more than 600 seconds in the future. Can't be used together with open_period.
   * @param {Boolean} [extra.isClosed] Pass True, if the poll needs to be immediately closed. This can be useful for poll preview.
   * @param {Boolean} [extra.disableNotification] Sends the message silently. Users will receive a notification with no sound.
   * @param {Integer} [extra.replyToMessageId] If the message is a reply, ID of the original message
   * @param {Boolean} [extra.allowSendingWithoutReply] Pass True, if the message should be sent even if the specified replied-to message is not found
   * @param {InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply} [extra.replyMarkup] Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
   * @returns {Promise<Message>}
   */
  async sendPoll(chatId, question, options, extra = {}) {
    return this._request("sendPoll", {
      queryOptions: { chatId, question, options, ...extra },
    });
  }

  /** Use this method to send an animated emoji that will display a random value. On success, the sent Message is returned.
   * @param {Integer | String} chatId Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
   * @param {Object} [options]
   * @param {String} [options.emoji] Emoji on which the dice throw animation is based. Currently, must be one of “”, “”, “”, “”, “”, or “”. Dice can have values 1-6 for “”, “” and “”, values 1-5 for “” and “”, and values 1-64 for “”. Defaults to “”
   * @param {Boolean} [options.disableNotification] Sends the message silently. Users will receive a notification with no sound.
   * @param {Integer} [options.replyToMessageId] If the message is a reply, ID of the original message
   * @param {Boolean} [options.allowSendingWithoutReply] Pass True, if the message should be sent even if the specified replied-to message is not found
   * @param {InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply} [options.replyMarkup] Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
   * @returns {Promise<Message>}
   */
  async sendDice(chatId, options = {}) {
    return this._request("sendDice", { queryOptions: { chatId, ...options } });
  }

  /** Use this method to get a list of profile pictures for a user. Returns a UserProfilePhotos object.
   * @param {Integer} userId Unique identifier of the target user
   * @param {Object} [options]
   * @param {Integer} [options.offset] Sequential number of the first photo to be returned. By default, all photos are returned.
   * @param {Integer} [options.limit] Limits the number of photos to be retrieved. Values between 1-100 are accepted. Defaults to 100.
   * @returns {Promise<UserProfilePhotos>}
   */
  async getUserProfilePhotos(userId, options = {}) {
    return this._request("getUserProfilePhotos", {
      queryOptions: { userId, ...options },
    });
  }

  /** Use this method to get basic info about a file and prepare it for downloading. For the moment, bots can download files of up to 20MB in size. On success, a File object is returned. The file can then be downloaded via the link https://api.telegram.org/file/bot<token>/<file_path>, where <file_path> is taken from the response. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling getFile again.
   * @param {String} fileId File identifier to get info about
   * @param {Object} [options]
   *
   * @returns {Promise<Object>}
   */
  async getFile(fileId, options = {}) {
    return this._request("getFile", { queryOptions: { fileId, ...options } });
  }

  /** Use this method to kick a user from a group, a supergroup or a channel. In the case of supergroups and channels, the user will not be able to return to the chat on their own using invite links, etc., unless unbanned first. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns True on success.
   * @param {Integer | String} chatId Unique identifier for the target group or username of the target supergroup or channel (in the forma* @channelusername)
   * @param {Integer} userId Unique identifier of the target user
   * @param {Object} [options]
   * @param {Integer} [options.untilDate] Date when the user will be unbanned, unix time. If user is banned for more than 366 days or less than 30 seconds from the current time they are considered to be banned forever. Applied for supergroups and channels only.
   * @param {Boolean} [options.revokeMessages] Pass True to delete all messages from the chat for the user that is being removed. If False, the user will be able to see messages in the group that were sent before the user was removed. Always True for supergroups and channels.
   * @returns {Promise<boolean>}
   */
  async kickChatMember(chatId, userId, options = {}) {
    return this._request("kickChatMember", {
      queryOptions: { chatId, userId, ...options },
    });
  }

  /** Use this method to unban a previously kicked user in a supergroup or channel. The user will not return to the group or channel automatically, but will be able to join via link, etc. The bot must be an administrator for this to work. By default, this method guarantees that after the call the user is not a member of the chat, but will be able to join it. So if the user is a member of the chat they will also be removed from the chat. If you don't want this, use the parameter only_if_banned. Returns True on success.
   * @param {Integer | String} chatId Unique identifier for the target group or username of the target supergroup or channel (in the forma* @username)
   * @param {Integer} userId Unique identifier of the target user
   * @param {Object} [options]
   * @param {Boolean} [options.onlyIfBanned] Do nothing if the user is not banned
   * @returns {Promise<boolean>}
   */
  async unbanChatMember(chatId, userId, options = {}) {
    return this._request("unbanChatMember", {
      queryOptions: { chatId, userId, ...options },
    });
  }

  /** Use this method to restrict a user in a supergroup. The bot must be an administrator in the supergroup for this to work and must have the appropriate admin rights. Pass True for all permissions to lift restrictions from a user. Returns True on success.
   * @param {Integer | String} chatId Unique identifier for the target chat or username of the target supergroup (in the forma* @supergroupusername)
   * @param {Integer} userId Unique identifier of the target user
   * @param {ChatPermissions} permissions A JSON-serialized object for new user permissions
   * @param {Object} [options]
   * @param {Integer} [options.untilDate] Date when restrictions will be lifted for the user, unix time. If user is restricted for more than 366 days or less than 30 seconds from the current time, they are considered to be restricted forever
   * @returns {Promise<boolean>}
   */
  async restrictChatMember(chatId, userId, permissions, options = {}) {
    return this._request("restrictChatMember", {
      queryOptions: { chatId, userId, permissions, ...options },
    });
  }

  /** Use this method to promote or demote a user in a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Pass False for all boolean parameters to demote a user. Returns True on success.
   * @param {Integer | String} chatId Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
   * @param {Integer} userId Unique identifier of the target user
   * @param {Object} [options]
   * @param {Boolean} [options.isAnonymous] Pass True, if the administrator's presence in the chat is hidden
   * @param {Boolean} [options.canManageChat] Pass True, if the administrator can access the chat event log, chat statistics, message statistics in channels, see channel members, see anonymous administrators in supergroups and ignore slow mode. Implied by any other administrator privilege
   * @param {Boolean} [options.canPostMessages] Pass True, if the administrator can create channel posts, channels only
   * @param {Boolean} [options.canEditMessages] Pass True, if the administrator can edit messages of other users and can pin messages, channels only
   * @param {Boolean} [options.canDeleteMessages] Pass True, if the administrator can delete messages of other users
   * @param {Boolean} [options.canManageVoiceChats] Pass True, if the administrator can manage voice chats
   * @param {Boolean} [options.canRestrictMembers] Pass True, if the administrator can restrict, ban or unban chat members
   * @param {Boolean} [options.canPromoteMembers] Pass True, if the administrator can add new administrators with a subset of their own privileges or demote administrators that he has promoted, directly or indirectly (promoted by administrators that were appointed by him)
   * @param {Boolean} [options.canChangeInfo] Pass True, if the administrator can change chat title, photo and other settings
   * @param {Boolean} [options.canInviteUsers] Pass True, if the administrator can invite new users to the chat
   * @param {Boolean} [options.canPinMessages] Pass True, if the administrator can pin messages, supergroups only
   * @returns {Promise<boolean>}
   */
  async promoteChatMember(chatId, userId, options = {}) {
    return this._request("promoteChatMember", {
      queryOptions: { chatId, userId, ...options },
    });
  }

  /** Use this method to set a custom title for an administrator in a supergroup promoted by the bot. Returns True on success.
   * @param {Integer | String} chatId Unique identifier for the target chat or username of the target supergroup (in the forma* @supergroupusername)
   * @param {Integer} userId Unique identifier of the target user
   * @param {String} customTitle New custom title for the administrator; 0-16 characters, emoji are not allowed
   * @param {Object} [options]
   *
   * @returns {Promise<boolean>}
   */
  async setChatAdministratorCustomTitle(
    chatId,
    userId,
    customTitle,
    options = {}
  ) {
    return this._request("setChatAdministratorCustomTitle", {
      queryOptions: { chatId, userId, customTitle, ...options },
    });
  }

  /** Use this method to set default chat permissions for all members. The bot must be an administrator in the group or a supergroup for this to work and must have the can_restrict_members admin rights. Returns True on success.
   * @param {Integer | String} chatId Unique identifier for the target chat or username of the target supergroup (in the forma* @supergroupusername)
   * @param {ChatPermissions} permissions New default chat permissions
   * @param {Object} [options]
   *
   * @returns {Promise<boolean>}
   */
  async setChatPermissions(chatId, permissions, options = {}) {
    return this._request("setChatPermissions", {
      queryOptions: { chatId, permissions, ...options },
    });
  }

  /** Use this method to generate a new primary invite link for a chat; any previously generated primary link is revoked. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns the new invite link as String on success.
   * @param {Integer | String} chatId Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
   * @param {Object} [options]
   *
   * @returns {Promise<string>}
   */
  async exportChatInviteLink(chatId, options = {}) {
    return this._request("exportChatInviteLink", {
      queryOptions: { chatId, ...options },
    });
  }

  /** Use this method to create an additional invite link for a chat. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. The link can be revoked using the method revokeChatInviteLink. Returns the new invite link as ChatInviteLink object.
   * @param {Integer | String} chatId Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
   * @param {Object} [options]
   * @param {Integer} [options.expireDate] Point in time (Unix timestamp) when the link will expire
   * @param {Integer} [options.memberLimit] Maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999
   * @returns {Promise<ChatInviteLink>}
   */
  async createChatInviteLink(chatId, options = {}) {
    return this._request("createChatInviteLink", {
      queryOptions: { chatId, ...options },
    });
  }

  /** Use this method to edit a non-primary invite link created by the bot. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns the edited invite link as a ChatInviteLink object.
   * @param {Integer | String} chatId Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
   * @param {String} inviteLink The invite link to edit
   * @param {Object} [options]
   * @param {Integer} [options.expireDate] Point in time (Unix timestamp) when the link will expire
   * @param {Integer} [options.memberLimit] Maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999
   * @returns {Promise<ChatInviteLink>}
   */
  async editChatInviteLink(chatId, inviteLink, options = {}) {
    return this._request("editChatInviteLink", {
      queryOptions: { chatId, inviteLink, ...options },
    });
  }

  /** Use this method to revoke an invite link created by the bot. If the primary link is revoked, a new link is automatically generated. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns the revoked invite link as ChatInviteLink object.
   * @param {Integer | String} chatId Unique identifier of the target chat or username of the target channel (in the forma* @channelusername)
   * @param {String} inviteLink The invite link to revoke
   * @param {Object} [options]
   *
   * @returns {Promise<ChatInviteLink>}
   */
  async revokeChatInviteLink(chatId, inviteLink, options = {}) {
    return this._request("revokeChatInviteLink", {
      queryOptions: { chatId, inviteLink, ...options },
    });
  }

  /** Use this method to set a new profile photo for the chat. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns True on success.
   * @param {Integer | String} chatId Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
   * @param {InputFile} photo New chat photo, uploaded using multipart/form-data
   * @param {Object} [options]
   *
   * @returns {Promise<boolean>}
   */
  async setChatPhoto(chatId, photo, options = {}) {
    return this._request("setChatPhoto", {
      queryOptions: { chatId, photo, ...options },
    });
  }

  /** Use this method to delete a chat photo. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns True on success.
   * @param {Integer | String} chatId Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
   * @param {Object} [options]
   *
   * @returns {Promise<boolean>}
   */
  async deleteChatPhoto(chatId, options = {}) {
    return this._request("deleteChatPhoto", {
      queryOptions: { chatId, ...options },
    });
  }

  /** Use this method to change the title of a chat. Titles can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns True on success.
   * @param {Integer | String} chatId Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
   * @param {String} title New chat title, 1-255 characters
   * @param {Object} [options]
   *
   * @returns {Promise<boolean>}
   */
  async setChatTitle(chatId, title, options = {}) {
    return this._request("setChatTitle", {
      queryOptions: { chatId, title, ...options },
    });
  }

  /** Use this method to change the description of a group, a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns True on success.
   * @param {Integer | String} chatId Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
   * @param {Object} [options]
   * @param {String} [options.description] New chat description, 0-255 characters
   * @returns {Promise<boolean>}
   */
  async setChatDescription(chatId, options = {}) {
    return this._request("setChatDescription", {
      queryOptions: { chatId, ...options },
    });
  }

  /** Use this method to add a message to the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' admin right in a supergroup or 'can_edit_messages' admin right in a channel. Returns True on success.
   * @param {Integer | String} chatId Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
   * @param {Integer} messageId Identifier of a message to pin
   * @param {Object} [options]
   * @param {Boolean} [options.disableNotification] Pass True, if it is not necessary to send a notification to all chat members about the new pinned message. Notifications are always disabled in channels and private chats.
   * @returns {Promise<boolean>}
   */
  async pinChatMessage(chatId, messageId, options = {}) {
    return this._request("pinChatMessage", {
      queryOptions: { chatId, messageId, ...options },
    });
  }

  /** Use this method to remove a message from the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' admin right in a supergroup or 'can_edit_messages' admin right in a channel. Returns True on success.
   * @param {Integer | String} chatId Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
   * @param {Object} [options]
   * @param {Integer} [options.messageId] Identifier of a message to unpin. If not specified, the most recent pinned message (by sending date) will be unpinned.
   * @returns {Promise<boolean>}
   */
  async unpinChatMessage(chatId, options = {}) {
    return this._request("unpinChatMessage", {
      queryOptions: { chatId, ...options },
    });
  }

  /** Use this method to clear the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' admin right in a supergroup or 'can_edit_messages' admin right in a channel. Returns True on success.
   * @param {Integer | String} chatId Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
   * @param {Object} [options]
   *
   * @returns {Promise<boolean>}
   */
  async unpinAllChatMessages(chatId, options = {}) {
    return this._request("unpinAllChatMessages", {
      queryOptions: { chatId, ...options },
    });
  }

  /** Use this method for your bot to leave a group, supergroup or channel. Returns True on success.
   * @param {Integer | String} chatId Unique identifier for the target chat or username of the target supergroup or channel (in the forma* @channelusername)
   * @param {Object} [options]
   *
   * @returns {Promise<boolean>}
   */
  async leaveChat(chatId, options = {}) {
    return this._request("leaveChat", { queryOptions: { chatId, ...options } });
  }

  /** Use this method to get up to date information about the chat (current name of the user for one-on-one conversations, current username of a user, group or channel, etc.). Returns a Chat object on success.
   * @param {Integer | String} chatId Unique identifier for the target chat or username of the target supergroup or channel (in the forma* @channelusername)
   * @param {Object} [options]
   *
   * @returns {Promise<Chat>}
   */
  async getChat(chatId, options = {}) {
    return this._request("getChat", { queryOptions: { chatId, ...options } });
  }

  /** Use this method to get a list of administrators in a chat. On success, returns an ChatMember[] objects that contains information about all chat administrators except other bots. If the chat is a group or a supergroup and no administrators were appointed, only the creator will be returned.
   * @param {Integer | String} chatId Unique identifier for the target chat or username of the target supergroup or channel (in the forma* @channelusername)
   * @param {Object} [options]
   *
   * @returns {Promise<ChatMember[]>}
   */
  async getChatAdministrators(chatId, options = {}) {
    return this._request("getChatAdministrators", {
      queryOptions: { chatId, ...options },
    });
  }

  /** Use this method to get the number of members in a chat. Returns Int on success.
   * @param {Integer | String} chatId Unique identifier for the target chat or username of the target supergroup or channel (in the forma* @channelusername)
   * @param {Object} [options]
   *
   * @returns {Promise<Integer>}
   */
  async getChatMembersCount(chatId, options = {}) {
    return this._request("getChatMembersCount", {
      queryOptions: { chatId, ...options },
    });
  }

  /** Use this method to get information about a member of a chat. Returns a ChatMember object on success.
   * @param {Integer | String} chatId Unique identifier for the target chat or username of the target supergroup or channel (in the forma* @channelusername)
   * @param {Integer} userId Unique identifier of the target user
   * @param {Object} [options]
   *
   * @returns {Promise<ChatMember>}
   */
  async getChatMember(chatId, userId, options = {}) {
    return this._request("getChatMember", {
      queryOptions: { chatId, userId, ...options },
    });
  }

  /** Use this method to set a new group sticker set for a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method. Returns True on success.
   * @param {Integer | String} chatId Unique identifier for the target chat or username of the target supergroup (in the forma* @supergroupusername)
   * @param {String} stickerSetName Name of the sticker set to be set as the group sticker set
   * @param {Object} [options]
   *
   * @returns {Promise<Boolean>}
   */
  async setChatStickerSet(chatId, stickerSetName, options = {}) {
    return this._request("setChatStickerSet", {
      queryOptions: { chatId, stickerSetName, ...options },
    });
  }

  /** Use this method to delete a group sticker set from a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method. Returns True on success.
   * @param {Integer | String} chatId Unique identifier for the target chat or username of the target supergroup (in the forma* @supergroupusername)
   * @param {Object} [options]
   *
   * @returns {Promise<boolean>}
   */
  async deleteChatStickerSet(chatId, options = {}) {
    return this._request("deleteChatStickerSet", {
      queryOptions: { chatId, ...options },
    });
  }

  /** Use this method to change the list of the bot's commands. Returns True on success.
   * @param {BotCommand[]} commands A JSON-serialized list of bot commands to be set as the list of the bot's commands. At most 100 commands can be specified.
   * @param {Object} [options]
   *
   * @returns {Promise<Boolean>}
   */
  async setMyCommands(commands, options = {}) {
    return this._request("setMyCommands", {
      queryOptions: { commands, ...options },
    });
  }

  /** Use this method to edit text and game messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
   * @param {String} text New text of the message, 1-4096 characters after entities parsing
   * @param {Object} [options]
   * @param {Integer} [options.messageId] Required if inline_message_id is not specified. Identifier of the message to edit
   * @param {String} [options.inlineMessageId] Required if chat_id and message_id are not specified. Identifier of the inline message
   * @param {String} [options.parseMode] Mode for parsing entities in the message text. See formatting options for more details.
   * @param {MessageEntity[]} [options.entities] List of special entities that appear in message text, which can be specified instead of parse_mode
   * @param {Boolean} [options.disableWebPagePreview] Disables link previews for links in this message
   * @param {InlineKeyboardMarkup} [options.replyMarkup] A JSON-serialized object for an inline keyboard.
   * @param {Integer | String} [options.chatId] Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
   * @returns {Promise<Message | boolean>}
   */
  async editMessageText(text, options = {}) {
    return this._request("editMessageText", {
      queryOptions: { text, ...options },
    });
  }

  /** Use this method to edit captions of messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
   * @param {Object} [options]
   * @param {Integer} [options.messageId] Required if inline_message_id is not specified. Identifier of the message to edit
   * @param {String} [options.inlineMessageId] Required if chat_id and message_id are not specified. Identifier of the inline message
   * @param {String} [options.caption] New caption of the message, 0-1024 characters after entities parsing
   * @param {String} [options.parseMode] Mode for parsing entities in the message caption. See formatting options for more details.
   * @param {MessageEntity[]} [options.captionEntities] List of special entities that appear in the caption, which can be specified instead of parse_mode
   * @param {InlineKeyboardMarkup} [options.replyMarkup] A JSON-serialized object for an inline keyboard.
   * @param {Integer | String} [options.chatId] Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
   * @returns {Promise<Message | boolean>}
   */
  async editMessageCaption(options = {}) {
    return this._request("editMessageCaption", {
      queryOptions: { ...options },
    });
  }

  /** Use this method to edit animation, audio, document, photo, or video messages. If a message is part of a message album, then it can be edited only to an audio for audio albums, only to a document for document albums and to a photo or a video otherwise. When an inline message is edited, a new file can't be uploaded. Use a previously uploaded file via its file_id or specify a URL. On success, if the edited message was sent by the bot, the edited Message is returned, otherwise True is returned.
   * @param {InputMedia} media A JSON-serialized object for a new media content of the message
   * @param {Object} [options]
   * @param {Integer} [options.messageId] Required if inline_message_id is not specified. Identifier of the message to edit
   * @param {String} [options.inlineMessageId] Required if chat_id and message_id are not specified. Identifier of the inline message
   * @param {InlineKeyboardMarkup} [options.replyMarkup] A JSON-serialized object for a new inline keyboard.
   * @param {Integer | String} [options.chatId] Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
   * @returns {Promise<Message | boolean>}
   */
  async editMessageMedia(media, options = {}) {
    return this._request("editMessageMedia", {
      queryOptions: { media, ...options },
    });
  }

  /** Use this method to edit only the reply markup of messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
   * @param {Object} [options]
   * @param {Integer} [options.messageId] Required if inline_message_id is not specified. Identifier of the message to edit
   * @param {String} [options.inlineMessageId] Required if chat_id and message_id are not specified. Identifier of the inline message
   * @param {InlineKeyboardMarkup} [options.replyMarkup] A JSON-serialized object for an inline keyboard.
   * @param {Integer | String} [options.chatId] Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
   * @returns {Promise<Message |boolean >}
   */
  async editMessageReplyMarkup(options = {}) {
    return this._request("editMessageReplyMarkup", {
      queryOptions: { ...options },
    });
  }

  /** Use this method to stop a poll which was sent by the bot. On success, the stopped Poll with the final results is returned.
   * @param {Integer | String} chatId Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
   * @param {Integer} messageId Identifier of the original message with the poll
   * @param {Object} [options]
   * @param {InlineKeyboardMarkup} [options.replyMarkup] A JSON-serialized object for a new message inline keyboard.
   * @returns {Promise<Poll>}
   */
  async stopPoll(chatId, messageId, options = {}) {
    return this._request("stopPoll", {
      queryOptions: { chatId, messageId, ...options },
    });
  }

  /** Use this method to delete a message, including service messages, with the following limitations:
   * - A message can only be deleted if it was sent less than 48 hours ago.
   * - A dice message in a private chat can only be deleted if it was sent more than 24 hours ago.
   * - Bots can delete outgoing messages in private chats, groups, and supergroups.
   * - Bots can delete incoming messages in private chats.
   * - Bots granted can_post_messages permissions can delete outgoing messages in channels.
   * - If the bot is an administrator of a group, it can delete any message there.
   * - If the bot has can_delete_messages permission in a supergroup or a channel, it can delete any message there.
   * Returns True on success.
   * @param {Integer | String} chatId Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
   * @param {Integer} messageId Identifier of the message to delete
   * @param {Object} [options]
   *
   * @returns {Promise<boolean>}
   */
  async deleteMessage(chatId, messageId, options = {}) {
    return this._request("deleteMessage", {
      queryOptions: { chatId, messageId, ...options },
    });
  }

  /** Use this method to send static .WEBP or animated .TGS stickers. On success, the sent Message is returned.
   * @param {Integer | String} chatId Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
   * @param {InputFile | String} sticker Sticker to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a .WEBP file from the Internet, or upload a new one using multipart/form-data. More info on Sending Files »
   * @param {Object} [options]
   * @param {Boolean} [options.disableNotification] Sends the message silently. Users will receive a notification with no sound.
   * @param {Integer} [options.replyToMessageId] If the message is a reply, ID of the original message
   * @param {Boolean} [options.allowSendingWithoutReply] Pass True, if the message should be sent even if the specified replied-to message is not found
   * @param {InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply} [options.replyMarkup] Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
   * @returns {Promise<Message>}
   */
  async sendSticker(chatId, sticker, options = {}) {
    return this._request("sendSticker", {
      queryOptions: { chatId, sticker, ...options },
    });
  }

  /** Use this method to get a sticker set. On success, a StickerSet object is returned.
   * @param {String} name Name of the sticker set
   * @param {Object} [options]
   *
   * @returns {Promise<StickerSet>}
   */
  async getStickerSet(name, options = {}) {
    return this._request("getStickerSet", {
      queryOptions: { name, ...options },
    });
  }

  /** Use this method to upload a .PNG file with a sticker for later use in createNewStickerSet and addStickerToSet methods (can be used multiple times). Returns the uploaded File on success.
   * @param {Integer} userId User identifier of sticker file owner
   * @param {InputFile} pngSticker PNG image with the sticker, must be up to 512 kilobytes in size, dimensions must not exceed 512px, and either width or height must be exactly 512px. More info on Sending Files »
   * @param {Object} [options]
   *
   * @returns {Promise<File>}
   */
  async uploadStickerFile(userId, pngSticker, options = {}) {
    return this._request("uploadStickerFile", {
      queryOptions: { userId, pngSticker, ...options },
    });
  }

  /** Use this method to create a new sticker set owned by a user. The bot will be able to edit the sticker set thus created. You must use exactly one of the fields png_sticker or tgs_sticker. Returns True on success.
   * @param {Integer} userId User identifier of created sticker set owner
   * @param {String} name Short name of sticker set, to be used in t.me/addstickers/ URLs (e.g., animals). Can contain only english letters, digits and underscores. Must begin with a letter, can't contain consecutive underscores and must end in “_by_<bot username>”. <bot_username> is case insensitive. 1-64 characters.
   * @param {String} title Sticker set title, 1-64 characters
   * @param {String} emojis One or more emoji corresponding to the sticker
   * @param {Object} [options]
   * @param {InputFile | String} [options.pngSticker] PNG image with the sticker, must be up to 512 kilobytes in size, dimensions must not exceed 512px, and either width or height must be exactly 512px. Pass a file_id as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More info on Sending Files »
   * @param {InputFile} [options.tgsSticker] TGS animation with the sticker, uploaded using multipart/form-data. See https://core.telegram.org/animated_stickers#technical-requirements for technical requirements
   * @param {Boolean} [options.containsMasks] Pass True, if a set of mask stickers should be created
   * @param {MaskPosition} [options.maskPosition] A JSON-serialized object for position where the mask should be placed on faces
   * @returns {Promise<boolean>}
   */
  async createNewStickerSet(userId, name, title, emojis, options = {}) {
    return this._request("createNewStickerSet", {
      queryOptions: { userId, name, title, emojis, ...options },
    });
  }

  /** Use this method to add a new sticker to a set created by the bot. You must use exactly one of the fields png_sticker or tgs_sticker. Animated stickers can be added to animated sticker sets and only to them. Animated sticker sets can have up to 50 stickers. Static sticker sets can have up to 120 stickers. Returns True on success.
   * @param {Integer} userId User identifier of sticker set owner
   * @param {String} name Sticker set name
   * @param {String} emojis One or more emoji corresponding to the sticker
   * @param {Object} [options]
   * @param {InputFile | String} [options.pngSticker] PNG image with the sticker, must be up to 512 kilobytes in size, dimensions must not exceed 512px, and either width or height must be exactly 512px. Pass a file_id as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More info on Sending Files »
   * @param {InputFile} [options.tgsSticker] TGS animation with the sticker, uploaded using multipart/form-data. See https://core.telegram.org/animated_stickers#technical-requirements for technical requirements
   * @param {MaskPosition} [options.maskPosition] A JSON-serialized object for position where the mask should be placed on faces
   * @returns {Promise<boolean>}
   */
  async addStickerToSet(userId, name, emojis, options = {}) {
    return this._request("addStickerToSet", {
      queryOptions: { userId, name, emojis, ...options },
    });
  }

  /** Use this method to move a sticker in a set created by the bot to a specific position. Returns True on success.
   * @param {String} sticker File identifier of the sticker
   * @param {Integer} position New sticker position in the set, zero-based
   * @param {Object} [options]
   *
   * @returns {Promise<boolean>}
   */
  async setStickerPositionInSet(sticker, position, options = {}) {
    return this._request("setStickerPositionInSet", {
      queryOptions: { sticker, position, ...options },
    });
  }

  /** Use this method to delete a sticker from a set created by the bot. Returns True on success.
   * @param {String} sticker File identifier of the sticker
   *@param {Object} [options]
   *
   * @returns {Promise<boolean>}
   */
  async deleteStickerFromSet(sticker, options = {}) {
    return this._request("deleteStickerFromSet", {
      queryOptions: { sticker, ...options },
    });
  }

  /** Use this method to set the thumbnail of a sticker set. Animated thumbnails can be set for animated sticker sets only. Returns True on success.
   * @param {String} name Sticker set name
   * @param {Integer} userId User identifier of the sticker set owner
   * @param {Object} [options]
   * @param {InputFile | String} [options.thumb] A PNG image with the thumbnail, must be up to 128 kilobytes in size and have width and height exactly 100px, or a TGS animation with the thumbnail up to 32 kilobytes in size; see https://core.telegram.org/animated_stickers#technical-requirements for animated sticker technical requirements. Pass a file_id as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More info on Sending Files ». Animated sticker set thumbnail can't be uploaded via HTTP URL.
   * @returns {Promise<boolean>}
   */
  async setStickerSetThumb(name, userId, options = {}) {
    return this._request("setStickerSetThumb", {
      queryOptions: { name, userId, ...options },
    });
  }

  /** Use this method to send answers to an inline query. On success, True is returned.
   * No more than 50 results per query are allowed.
   * @param {String} inlineQueryId Unique identifier for the answered query
   * @param {InlineQueryResult[]} results A JSON-serialized array of results for the inline query
   * @param {Object} [options]
   * @param {Integer} [options.cacheTime] The maximum amount of time in seconds that the result of the inline query may be cached on the server. Defaults to 300.
   * @param {Boolean} [options.isPersonal] Pass True, if results may be cached on the server side only for the user that sent the query. By default, results may be returned to any user who sends the same query
   * @param {String} [options.nextOffset] Pass the offset that a client should send in the next query with the same text to receive more results. Pass an empty string if there are no more results or if you don't support pagination. Offset length can't exceed 64 bytes.
   * @param {String} [options.switchPmText] If passed, clients will display a button with specified text that switches the user to a private chat with the bot and sends the bot a start message with the parameter switch_pm_parameter
   * @param {String} [options.switchPmParameter] Deep-linking parameter for the /start message sent to the bot when user presses the switch button. 1-64 characters, only A-Z, a-z, 0-9, _ and - are allowed. Example: An inline bot that sends YouTube videos can ask the user to connect the bot to their YouTube account to adapt search results accordingly. To do this, it displays a 'Connect your YouTube account' button above the results, or even before showing any. The user presses the button, switches to a private chat with the bot and, in doing so, passes a start parameter that instructs the bot to return an oauth link. Once done, the bot can offer a switch_inline button so that the user can easily return to the chat where they wanted to use the bot's inline capabilities.
   * @returns {Promise<boolean>}
   */
  async answerInlineQuery(inlineQueryId, results, options = {}) {
    return this._request("answerInlineQuery", {
      queryOptions: { inlineQueryId, results, ...options },
    });
  }

  /** Use this method to send invoices. On success, the sent Message is returned.
   * @param {Integer | String} chatId Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
   * @param {String} title Product name, 1-32 characters
   * @param {String} description Product description, 1-255 characters
   * @param {String} payload Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use for your internal processes.
   * @param {String} providerToken Payments provider token, obtained via Botfather
   * @param {String} currency Three-letter ISO 4217 currency code, see more on currencies
   * @param {LabeledPrice[]} prices Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.)
   * @param {Object} [options]
   * @param {Integer} [options.maxTipAmount] The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double). For example, for a maximum tip of US$ 1.45 pass max_tip_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0
   * @param {Integer[]} [options.suggestedTipAmounts] A JSON-serialized array of suggested amounts of tips in the smallest units of the currency (integer, not float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max_tip_amount.
   * @param {String} [options.startParameter] Unique deep-linking parameter. If left empty, forwarded copies of the sent message will have a Pay button, allowing multiple users to pay directly from the forwarded message, using the same invoice. If non-empty, forwarded copies of the sent message will have a URL button with a deep link to the bot (instead of a Pay button), with the value used as the start parameter
   * @param {String} [options.providerData] A JSON-serialized data about the invoice, which will be shared with the payment provider. A detailed description of required fields should be provided by the payment provider.
   * @param {String} [options.photoUrl] URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service. People like it better when they see what they are paying for.
   * @param {Integer} [options.photoSize] Photo size
   * @param {Integer} [options.photoWidth] Photo width
   * @param {Integer} [options.photoHeight] Photo height
   * @param {Boolean} [options.needName] Pass True, if you require the user's full name to complete the order
   * @param {Boolean} [options.needPhoneNumber] Pass True, if you require the user's phone number to complete the order
   * @param {Boolean} [options.needEmail] Pass True, if you require the user's email address to complete the order
   * @param {Boolean} [options.needShippingAddress] Pass True, if you require the user's shipping address to complete the order
   * @param {Boolean} [options.sendPhoneNumberToProvider] Pass True, if user's phone number should be sent to provider
   * @param {Boolean} [options.sendEmailToProvider] Pass True, if user's email address should be sent to provider
   * @param {Boolean} [options.isFlexible] Pass True, if the final price depends on the shipping method
   * @param {Boolean} [options.disableNotification] Sends the message silently. Users will receive a notification with no sound.
   * @param {Integer} [options.replyToMessageId] If the message is a reply, ID of the original message
   * @param {Boolean} [options.allowSendingWithoutReply] Pass True, if the message should be sent even if the specified replied-to message is not found
   * @param {InlineKeyboardMarkup} [options.replyMarkup] A JSON-serialized object for an inline keyboard. If empty, one 'Pay total price' button will be shown. If not empty, the first button must be a Pay button.
   * @returns {Promise<Message>}
   */
  async sendInvoice(
    chatId,
    title,
    description,
    payload,
    providerToken,
    currency,
    prices,
    options = {}
  ) {
    return this._request("sendInvoice", {
      queryOptions: {
        chatId,
        title,
        description,
        payload,
        providerToken,
        currency,
        prices,
        ...options,
      },
    });
  }

  /** If you sent an invoice requesting a shipping address and the parameter is_flexible was specified, the Bot API will send an Update with a shipping_query field to the bot. Use this method to reply to shipping queries. On success, True is returned.
   * @param {String} shippingQueryId Unique identifier for the query to be answered
   * @param {Boolean} ok Specify True if delivery to the specified address is possible and False if there are any problems (for example, if delivery to the specified address is not possible)
   * @param {Object} [options]
   * @param {ShippingOption[]} [options.shippingOptions] Required if ok is True. A JSON-serialized array of available shipping options.
   * @param {String} [options.errorMessage] Required if ok is False. Error message in human readable form that explains why it is impossible to complete the order (e.g. "Sorry, delivery to your desired address is unavailable'). Telegram will display this message to the user.
   * @returns {Promise<boolean>}
   */
  async answerShippingQuery(shippingQueryId, ok, options = {}) {
    return this._request("answerShippingQuery", {
      queryOptions: { shippingQueryId, ok, ...options },
    });
  }

  /** Once the user has confirmed their payment and shipping details, the Bot API sends the final confirmation in the form of an Update with the field pre_checkout_query. Use this method to respond to such pre-checkout queries. On success, True is returned. Note: The Bot API must receive an answer within 10 seconds after the pre-checkout query was sent.
   * @param {String} preCheckoutQueryId Unique identifier for the query to be answered
   * @param {Boolean} ok Specify True if everything is alright (goods are available, etc.) and the bot is ready to proceed with the order. Use False if there are any problems.
   * @param {Object} [options]
   * @param {String} [options.errorMessage] Required if ok is False. Error message in human readable form that explains the reason for failure to proceed with the checkout (e.g. "Sorry, somebody just bought the last of our amazing black T-shirts while you were busy filling out your payment details. Please choose a different color or garment!"). Telegram will display this message to the user.
   * @returns {Promise<boolean>}
   */
  async answerPreCheckoutQuery(preCheckoutQueryId, ok, options = {}) {
    return this._request("answerPreCheckoutQuery", {
      queryOptions: { preCheckoutQueryId, ok, ...options },
    });
  }

  /** Use this method to send a game. On success, the sent Message is returned.
   * @param {Integer} chatId Unique identifier for the target chat
   * @param {String} gameShortName Short name of the game, serves as the unique identifier for the game. Set up your games via Botfather.
   * @param {Object} [options]
   * @param {Boolean} [options.disableNotification] Sends the message silently. Users will receive a notification with no sound.
   * @param {Integer} [options.replyToMessageId] If the message is a reply, ID of the original message
   * @param {Boolean} [options.allowSendingWithoutReply] Pass True, if the message should be sent even if the specified replied-to message is not found
   * @param {InlineKeyboardMarkup} [options.replyMarkup] A JSON-serialized object for an inline keyboard. If empty, one 'Play game_title' button will be shown. If not empty, the first button must launch the game.
   * @returns {Promise<Message>}
   */
  async sendGame(chatId, gameShortName, options = {}) {
    return this._request("sendGame", {
      queryOptions: { chatId, gameShortName, ...options },
    });
  }

  /** Use this method to set the score of the specified user in a game. On success, if the message was sent by the bot, returns the edited Message, otherwise returns True. Returns an error, if the new score is not greater than the user's current score in the chat and force is False.
   * @param {Integer} userId User identifier
   * @param {Integer} score New score, must be non-negative
   * @param {Object} [options]
   * @param {Boolean} [options.force] Pass True, if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters
   * @param {Boolean} [options.disableEditMessage] Pass True, if the game message should not be automatically edited to include the current scoreboard
   * @param {Integer} [options.chatId] Required if inline_message_id is not specified. Unique identifier for the target chat
   * @param {Integer} [options.messageId] Required if inline_message_id is not specified. Identifier of the sent message
   * @param {String} [options.inlineMessageId] Required if chat_id and message_id are not specified. Identifier of the inline message
   * @returns {Promise<Message | boolean>}
   */
  async setGameScore(userId, score, options = {}) {
    return this._request("setGameScore", {
      queryOptions: { userId, score, ...options },
    });
  }
}

module.exports = TelegramBot;
