// @ts-nocheck
const { default: axios } = require("axios");
const EventEmitter = require("events");
const { snakeCase, camelCase, stringifyQuery } = require("./util");

/**
 * @typedef Update This object represents an incoming update. At most one of the optional parameters can be present in any given update.
 * @property {Integer} updateId 	The update's unique identifier. Update identifiers start from a certain positive number and increase sequentially. This ID becomes especially handy if you're using Webhooks, since it allows you to ignore repeated updates or to restore the correct update sequence, should they get out of order. If there are no new updates for at least a week, then identifier of the next update will be chosen randomly instead of sequentially.
 * @property {Message} [message] 	 	Optional. New incoming message of any kind — text, photo, sticker, etc.
 * @property {Message} [editedMessage] 	 	Optional. New version of a message that is known to the bot and was edited
 * @property {Message} [channelPost] 	 	Optional. New incoming channel post of any kind — text, photo, sticker, etc.
 * @property {Message} [editedChannelPost]  	Optional. New version of a channel post that is known to the bot and was edited
 * @property {InlineQuery} [inlineQuery] 	 	Optional. New incoming inline query
 * @property {ChosenInlineResult} [chosenInlineResult] Optional. The result of an inline query that was chosen by a user and sent to their chat partner. Please see our documentation on the feedback collecting for details on how to enable these updates for your bot.
 * @property {CallbackQuery} [callbackQuery] 	 	Optional. New incoming callback query
 * @property {ShippingQuery} [shippingQuery] 	 	Optional. New incoming shipping query. Only for invoices with flexible price
 * @property {PreCheckoutQuery} [preCheckoutQuery] 	 	Optional. New incoming pre-checkout query. Contains full information about checkout
 * @property {Poll} [poll] 	 	Optional. New poll state. Bots receive only updates about stopped polls and polls, which are sent by the bot
 * @property {PollAnswer} [pollAnswer] 	 	Optional. A user changed their answer in a non-anonymous poll. Bots receive new votes only in polls that were sent by the bot itself.
 * @property {ChatMemberUpdated} [myChatMember] 	 	Optional. The bot's chat member status was updated in a chat. For private chats, this update is received only when the bot is blocked or unblocked by the user.
 * @property {ChatMemberUpdated} [chatMember] 	 	Optional. A chat member's status was updated in a chat. The bot must be an administrator in the chat and must explicitly specify “chat_member” in the list of allowed_updates to receive these updates.
 */
/**
 *
 */
/**
 * @typedef {Number} Integer
 *
 */
/**
 * @typedef {Number} Float
 *
 */
/**
 * @typedef {Boolean} True
 *
 */
/**
 * @typedef {Object} InputFile
 *
 */
/**
 * @typedef {InlineQueryResultArticle | InlineQueryResultAudio| InlineQueryResultCachedAudio| InlineQueryResultCachedDocument | InlineQueryResultCachedGif | InlineQueryResultArticle | InlineQueryResultPhoto | InlineQueryResultGif | InlineQueryResultMpeg4Gif | InlineQueryResultAudio | InlineQueryResultVoice | InlineQueryResultDocument | InlineQueryResultLocation | InlineQueryResultVenue | InlineQueryResultContact | InlineQueryResultGame| InlineQueryResultCachedPhoto| InlineQueryResultCachedGif| InlineQueryResultCachedMpeg4Gif| InlineQueryResultCachedSticker| InlineQueryResultCachedDocument| InlineQueryResultCachedVideo| InlineQueryResultCachedVoice| InlineQueryResultCachedAudio} InlineQueryResult
 *
 */
/**
 * @typedef {InputTextMessageContent | InputLocationMessageContent | InputVenueMessageContent | InputContactMessageContent | InputInvoiceMessageContent} InputMessageContent
 *
 */
/**
 * @typedef {InputMediaAnimation | InputMediaDocument | InputMediaAudio | InputMediaPhoto | InputMediaVideo } InputMedia
 *
 */
/**
 * @typedef {Object} VoiceChatStarted
 *
 */
/**
 * @typedef {Object} LoginUrl
 * @property {String} url An HTTP URL to be opened with user authorization data added to the query string when the button is pressed. If the user refuses to provide authorization data, the original URL without information about the user will be opened. The data added is the same as described in Receiving authorization data. NOTE: You must always check the hash of the received data to verify the authentication and the integrity of the data as described in Checking authorization.
 * @property {String} [forwardText] Optional. New text of the button in forwarded messages.
 * @property {String} [botUsername] Optional. Username of a bot, which will be used for user authorization. See Setting up a bot for more details. If not specified, the current bot's username will be assumed. The url's domain must be the same as the domain linked with the bot. See Linking your domain to the bot for more details.
 *
 */
/**
 * @typedef {Object} CallbackGame
 *
 *
 */
/**
 * @typedef {Object} User This object represents a Telegram user or bot.
 * @property {Integer} id Unique identifier for this user or bot. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier.
 * @property {Boolean} isBot True, if this user is a bot
 * @property {String} firstName User's or bot's first name
 * @property {String} [lastName] Optional. User's or bot's last name
 * @property {String} [username] Optional. User's or bot's username
 * @property {String} [languageCode] Optional. IETF language tag of the user's language
 * @property {Boolean} [canJoinGroups] Optional. True, if the bot can be invited to groups. Returned only in getMe.
 * @property {Boolean} [canReadAllGroupMessages] Optional. True, if privacy mode is disabled for the bot. Returned only in getMe.
 * @property {Boolean} [supportsInlineQueries] Optional. True, if the bot supports inline queries. Returned only in getMe.
 *
 */
/**
 * @typedef {Object} Chat This object represents a chat.
 * @property {Integer} id Unique identifier for this chat. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier.
 * @property {String} type Type of chat, can be either “private”, “group”, “supergroup” or “channel”
 * @property {String} [title] Optional. Title, for supergroups, channels and group chats
 * @property {String} [username] Optional. Username, for private chats, supergroups and channels if available
 * @property {String} [firstName] Optional. First name of the other party in a private chat
 * @property {String} [lastName] Optional. Last name of the other party in a private chat
 * @property {ChatPhoto} [photo] Optional. Chat photo. Returned only in getChat.
 * @property {String} [bio] Optional. Bio of the other party in a private chat. Returned only in getChat.
 * @property {String} [description] Optional. Description, for groups, supergroups and channel chats. Returned only in getChat.
 * @property {String} [inviteLink] Optional. Primary invite link, for groups, supergroups and channel chats. Returned only in getChat.
 * @property {Message} [pinnedMessage] Optional. The most recent pinned message (by sending date). Returned only in getChat.
 * @property {ChatPermissions} [permissions] Optional. Default chat member permissions, for groups and supergroups. Returned only in getChat.
 * @property {Integer} [slowModeDelay] Optional. For supergroups, the minimum allowed delay between consecutive messages sent by each unpriviledged user. Returned only in getChat.
 * @property {Integer} [messageAutoDeleteTime] Optional. The time after which all messages sent to the chat will be automatically deleted; in seconds. Returned only in getChat.
 * @property {String} [stickerSetName] Optional. For supergroups, name of group sticker set. Returned only in getChat.
 * @property {Boolean} [canSetStickerSet] Optional. True, if the bot can change the group sticker set. Returned only in getChat.
 * @property {Integer} [linkedChatId] Optional. Unique identifier for the linked chat, i.e. the discussion group identifier for a channel and vice versa; for supergroups and channel chats. This identifier may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier. Returned only in getChat.
 * @property {ChatLocation} [location] Optional. For supergroups, the location to which the supergroup is connected. Returned only in getChat.
 *
 */
/**
 * @typedef {Object} Message This object represents a message.
 * @property {Integer} messageId Unique message identifier inside this chat
 * @property {User} [from] Optional. Sender, empty for messages sent to channels
 * @property {Chat} [senderChat] Optional. Sender of the message, sent on behalf of a chat. The channel itself for channel messages. The supergroup itself for messages from anonymous group administrators. The linked channel for messages automatically forwarded to the discussion group
 * @property {Integer} date Date the message was sent in Unix time
 * @property {Chat} chat Conversation the message belongs to
 * @property {User} [forwardFrom] Optional. For forwarded messages, sender of the original message
 * @property {Chat} [forwardFromChat] Optional. For messages forwarded from channels or from anonymous administrators, information about the original sender chat
 * @property {Integer} [forwardFromMessageId] Optional. For messages forwarded from channels, identifier of the original message in the channel
 * @property {String} [forwardSignature] Optional. For messages forwarded from channels, signature of the post author if present
 * @property {String} [forwardSenderName] Optional. Sender's name for messages forwarded from users who disallow adding a link to their account in forwarded messages
 * @property {Integer} [forwardDate] Optional. For forwarded messages, date the original message was sent in Unix time
 * @property {Message} [replyToMessage] Optional. For replies, the original message. Note that the Message object in this field will not contain further reply_to_message fields even if it itself is a reply.
 * @property {User} [viaBot] Optional. Bot through which the message was sent
 * @property {Integer} [editDate] Optional. Date the message was last edited in Unix time
 * @property {String} [mediaGroupId] Optional. The unique identifier of a media message group this message belongs to
 * @property {String} [authorSignature] Optional. Signature of the post author for messages in channels, or the custom title of an anonymous group administrator
 * @property {String} [text] Optional. For text messages, the actual UTF-8 text of the message, 0-4096 characters
 * @property {MessageEntity[]} [entities] Optional. For text messages, special entities like usernames, URLs, bot commands, etc. that appear in the text
 * @property {TelegramAnimation} [animation] Optional. Message is an animation, information about the animation. For backward compatibility, when this field is set, the document field will also be set
 * @property {Audio} [audio] Optional. Message is an audio file, information about the file
 * @property {TelegramDocument} [document] Optional. Message is a general file, information about the file
 * @property {PhotoSize[]} [photo] Optional. Message is a photo, available sizes of the photo
 * @property {Sticker} [sticker] Optional. Message is a sticker, information about the sticker
 * @property {Video} [video] Optional. Message is a video, information about the video
 * @property {VideoNote} [videoNote] Optional. Message is a video note, information about the video message
 * @property {Voice} [voice] Optional. Message is a voice message, information about the file
 * @property {String} [caption] Optional. Caption for the animation, audio, document, photo, video or voice, 0-1024 characters
 * @property {MessageEntity[]} [captionEntities] Optional. For messages with a caption, special entities like usernames, URLs, bot commands, etc. that appear in the caption
 * @property {Contact} [contact] Optional. Message is a shared contact, information about the contact
 * @property {Dice} [dice] Optional. Message is a dice with random value
 * @property {Game} [game] Optional. Message is a game, information about the game. More about games »
 * @property {Poll} [poll] Optional. Message is a native poll, information about the poll
 * @property {Venue} [venue] Optional. Message is a venue, information about the venue. For backward compatibility, when this field is set, the location field will also be set
 * @property {TelegramLocation} [location] Optional. Message is a shared location, information about the location
 * @property {User[]} [newChatMembers] Optional. New members that were added to the group or supergroup and information about them (the bot itself may be one of these members)
 * @property {User} [leftChatMember] Optional. A member was removed from the group, information about them (this member may be the bot itself)
 * @property {String} [newChatTitle] Optional. A chat title was changed to this value
 * @property {PhotoSize[]} [newChatPhoto] Optional. A chat photo was change to this value
 * @property {True} [deleteChatPhoto] Optional. Service message: the chat photo was deleted
 * @property {True} [groupChatCreated] Optional. Service message: the group has been created
 * @property {True} [supergroupChatCreated] Optional. Service message: the supergroup has been created. This field can't be received in a message coming through updates, because bot can't be a member of a supergroup when it is created. It can only be found in reply_to_message if someone replies to a very first message in a directly created supergroup.
 * @property {True} [channelChatCreated] Optional. Service message: the channel has been created. This field can't be received in a message coming through updates, because bot can't be a member of a channel when it is created. It can only be found in reply_to_message if someone replies to a very first message in a channel.
 * @property {MessageAutoDeleteTimerChanged} [messageAutoDeleteTimerChanged] Optional. Service message: auto-delete timer settings changed in the chat
 * @property {Integer} [migrateToChatId] Optional. The group has been migrated to a supergroup with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier.
 * @property {Integer} [migrateFromChatId] Optional. The supergroup has been migrated from a group with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier.
 * @property {Message} [pinnedMessage] Optional. Specified message was pinned. Note that the Message object in this field will not contain further reply_to_message fields even if it is itself a reply.
 * @property {Invoice} [invoice] Optional. Message is an invoice for a payment, information about the invoice. More about payments »
 * @property {SuccessfulPayment} [successfulPayment] Optional. Message is a service message about a successful payment, information about the payment. More about payments »
 * @property {String} [connectedWebsite] Optional. The domain name of the website on which the user has logged in. More about Telegram Login »
 * @property {PassportData} [passportData] Optional. Telegram Passport data
 * @property {ProximityAlertTriggered} [proximityAlertTriggered] Optional. Service message. A user in the chat triggered another user's proximity alert while sharing Live TelegramLocation.
 * @property {VoiceChatScheduled} [voiceChatScheduled] Optional. Service message: voice chat scheduled
 * @property {VoiceChatStarted} [voiceChatStarted] Optional. Service message: voice chat started
 * @property {VoiceChatEnded} [voiceChatEnded] Optional. Service message: voice chat ended
 * @property {VoiceChatParticipantsInvited} [voiceChatParticipantsInvited] Optional. Service message: new participants invited to a voice chat
 * @property {InlineKeyboardMarkup} [replyMarkup] Optional. Inline keyboard attached to the message. login_url buttons are represented as ordinary url buttons.
 *
 */
/**
 * @typedef {Object} MessageId This object represents a unique message identifier.
 * @property {Integer} messageId Unique message identifier
 *
 */
/**
 * @typedef {Object} MessageEntity This object represents one special entity in a text message. For example, hashtags, usernames, URLs, etc.
 * @property {String} type Type of the entity. Can be “mention” (@username), “hashtag” (#hashtag), “cashtag” ($USD), “bot_command” (/start@jobs_bot), “url” (https://telegram.org), “email” (do-not-reply@telegram.org), “phone_number” (+1-212-555-0123), “bold” (bold text), “italic” (italic text), “underline” (underlined text), “strikethrough” (strikethrough text), “code” (monowidth string), “pre” (monowidth block), “text_link” (for clickable text URLs), “text_mention” (for users without usernames)
 * @property {Integer} offset Offset in UTF-16 code units to the start of the entity
 * @property {Integer} length Length of the entity in UTF-16 code units
 * @property {String} [url] Optional. For “text_link” only, url that will be opened after user taps on the text
 * @property {User} [user] Optional. For “text_mention” only, the mentioned user
 * @property {String} [language] Optional. For “pre” only, the programming language of the entity text
 *
 */
/**
 * @typedef {Object} PhotoSize This object represents one size of a photo or a file / sticker thumbnail.
 * @property {String} fileId Identifier for this file, which can be used to download or reuse the file
 * @property {String} fileUniqueId Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
 * @property {Integer} width Photo width
 * @property {Integer} height Photo height
 * @property {Integer} [fileSize] Optional. File size
 *
 */
/**
 * @typedef {Object} TelegramAnimation This object represents an animation file (GIF or H.264/MPEG-4 AVC video without sound).
 * @property {String} fileId Identifier for this file, which can be used to download or reuse the file
 * @property {String} fileUniqueId Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
 * @property {Integer} width Video width as defined by sender
 * @property {Integer} height Video height as defined by sender
 * @property {Integer} duration Duration of the video in seconds as defined by sender
 * @property {PhotoSize} [thumb] Optional. TelegramAnimation thumbnail as defined by sender
 * @property {String} [fileName] Optional. Original animation filename as defined by sender
 * @property {String} [mimeType] Optional. MIME type of the file as defined by sender
 * @property {Integer} [fileSize] Optional. File size
 *
 */
/**
 * @typedef {Object} Audio This object represents an audio file to be treated as music by the Telegram clients.
 * @property {String} fileId Identifier for this file, which can be used to download or reuse the file
 * @property {String} fileUniqueId Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
 * @property {Integer} duration Duration of the audio in seconds as defined by sender
 * @property {String} [performer] Optional. Performer of the audio as defined by sender or by audio tags
 * @property {String} [title] Optional. Title of the audio as defined by sender or by audio tags
 * @property {String} [fileName] Optional. Original filename as defined by sender
 * @property {String} [mimeType] Optional. MIME type of the file as defined by sender
 * @property {Integer} [fileSize] Optional. File size
 * @property {PhotoSize} [thumb] Optional. Thumbnail of the album cover to which the music file belongs
 *
 */
/**
 * @typedef {Object} TelegramDocument This object represents a general file (as opposed to photos, voice messages and audio files).
 * @property {String} fileId Identifier for this file, which can be used to download or reuse the file
 * @property {String} fileUniqueId Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
 * @property {PhotoSize} [thumb] Optional. TelegramDocument thumbnail as defined by sender
 * @property {String} [fileName] Optional. Original filename as defined by sender
 * @property {String} [mimeType] Optional. MIME type of the file as defined by sender
 * @property {Integer} [fileSize] Optional. File size
 *
 */
/**
 * @typedef {Object} Video This object represents a video file.
 * @property {String} fileId Identifier for this file, which can be used to download or reuse the file
 * @property {String} fileUniqueId Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
 * @property {Integer} width Video width as defined by sender
 * @property {Integer} height Video height as defined by sender
 * @property {Integer} duration Duration of the video in seconds as defined by sender
 * @property {PhotoSize} [thumb] Optional. Video thumbnail
 * @property {String} [fileName] Optional. Original filename as defined by sender
 * @property {String} [mimeType] Optional. Mime type of a file as defined by sender
 * @property {Integer} [fileSize] Optional. File size
 *
 */
/**
 * @typedef {Object} VideoNote This object represents a video message (available in Telegram apps as of v.4.0).
 * @property {String} fileId Identifier for this file, which can be used to download or reuse the file
 * @property {String} fileUniqueId Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
 * @property {Integer} length Video width and height (diameter of the video message) as defined by sender
 * @property {Integer} duration Duration of the video in seconds as defined by sender
 * @property {PhotoSize} [thumb] Optional. Video thumbnail
 * @property {Integer} [fileSize] Optional. File size
 *
 */
/**
 * @typedef {Object} Voice This object represents a voice note.
 * @property {String} fileId Identifier for this file, which can be used to download or reuse the file
 * @property {String} fileUniqueId Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
 * @property {Integer} duration Duration of the audio in seconds as defined by sender
 * @property {String} [mimeType] Optional. MIME type of the file as defined by sender
 * @property {Integer} [fileSize] Optional. File size
 *
 */
/**
 * @typedef {Object} Contact This object represents a phone contact.
 * @property {String} phoneNumber Contact's phone number
 * @property {String} firstName Contact's first name
 * @property {String} [lastName] Optional. Contact's last name
 * @property {Integer} [userId] Optional. Contact's user identifier in Telegram. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier.
 * @property {String} [vcard] Optional. Additional data about the contact in the form of a vCard
 *
 */
/**
 * @typedef {Object} Dice This object represents an animated emoji that displays a random value.
 * @property {String} emoji Emoji on which the dice throw animation is based
 * @property {Integer} value Value of the dice, 1-6 for “”, “” and “” base emoji, 1-5 for “” and “” base emoji, 1-64 for “” base emoji
 *
 */
/**
 * @typedef {Object} PollOption This object contains information about one answer option in a poll.
 * @property {String} text Option text, 1-100 characters
 * @property {Integer} voterCount Number of users that voted for this option
 *
 */
/**
 * @typedef {Object} PollAnswer This object represents an answer of a user in a non-anonymous poll.
 * @property {String} pollId Unique poll identifier
 * @property {User} user The user, who changed the answer to the poll
 * @property {Integer[]} optionIds 0-based identifiers of answer options, chosen by the user. May be empty if the user retracted their vote.
 *
 */
/**
 * @typedef {Object} Poll This object contains information about a poll.
 * @property {String} id Unique poll identifier
 * @property {String} question Poll question, 1-300 characters
 * @property {PollOption[]} options List of poll options
 * @property {Integer} totalVoterCount Total number of users that voted in the poll
 * @property {Boolean} isClosed True, if the poll is closed
 * @property {Boolean} isAnonymous True, if the poll is anonymous
 * @property {String} type Poll type, currently can be “regular” or “quiz”
 * @property {Boolean} allowsMultipleAnswers True, if the poll allows multiple answers
 * @property {Integer} [correctOptionId] Optional. 0-based identifier of the correct answer option. Available only for polls in the quiz mode, which are closed, or was sent (not forwarded) by the bot or to the private chat with the bot.
 * @property {String} [explanation] Optional. Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters
 * @property {MessageEntity[]} [explanationEntities] Optional. Special entities like usernames, URLs, bot commands, etc. that appear in the explanation
 * @property {Integer} [openPeriod] Optional. Amount of time in seconds the poll will be active after creation
 * @property {Integer} [closeDate] Optional. Point in time (Unix timestamp) when the poll will be automatically closed
 *
 */
/**
 * @typedef {Object} TelegramLocation This object represents a point on the map.
 * @property {Float} longitude Longitude as defined by sender
 * @property {Float} latitude Latitude as defined by sender
 * @property {Float} [horizontalAccuracy] Optional. The radius of uncertainty for the location, measured in meters; 0-1500
 * @property {Integer} [livePeriod] Optional. Time relative to the message sending date, during which the location can be updated, in seconds. For active live locations only.
 * @property {Integer} [heading] Optional. The direction in which user is moving, in degrees; 1-360. For active live locations only.
 * @property {Integer} [proximityAlertRadius] Optional. Maximum distance for proximity alerts about approaching another chat member, in meters. For sent live locations only.
 *
 */
/**
 * @typedef {Object} Venue This object represents a venue.
 * @property {TelegramLocation} location Venue location. Can't be a live location
 * @property {String} title Name of the venue
 * @property {String} address Address of the venue
 * @property {String} [foursquareId] Optional. Foursquare identifier of the venue
 * @property {String} [foursquareType] Optional. Foursquare type of the venue. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.)
 * @property {String} [googlePlaceId] Optional. Google Places identifier of the venue
 * @property {String} [googlePlaceType] Optional. Google Places type of the venue. (See supported types.)
 *
 */
/**
 * @typedef {Object} ProximityAlertTriggered This object represents the content of a service message, sent whenever a user in the chat triggers a proximity alert set by another user.
 * @property {User} traveler User that triggered the alert
 * @property {User} watcher User that set the alert
 * @property {Integer} distance The distance between the users
 *
 */
/**
 * @typedef {Object} MessageAutoDeleteTimerChanged This object represents a service message about a change in auto-delete timer settings.
 * @property {Integer} messageAutoDeleteTime New auto-delete time for messages in the chat
 *
 */
/**
 * @typedef {Object} VoiceChatScheduled This object represents a service message about a voice chat scheduled in the chat.
 * @property {Integer} startDate Point in time (Unix timestamp) when the voice chat is supposed to be started by a chat administrator
 *
 */
/**
 * @typedef {Object} VoiceChatEnded This object represents a service message about a voice chat ended in the chat.
 * @property {Integer} duration Voice chat duration; in seconds
 *
 */
/**
 * @typedef {Object} VoiceChatParticipantsInvited This object represents a service message about new members invited to a voice chat.
 * @property {User[]} [users] Optional. New members that were invited to the voice chat
 *
 */
/**
 * @typedef {Object} UserProfilePhotos This object represent a user's profile pictures.
 * @property {Integer} totalCount Total number of profile pictures the target user has
 * @property {PhotoSize[][] } photos Requested profile pictures (in up to 4 sizes each)
 *
 */
/**
 * @typedef {Object} ReplyKeyboardMarkup This object represents a custom keyboard with reply options (see Introduction to bots for details and examples).
 * @property {KeyboardButton[][] } keyboard button[] rows, each represented by an KeyboardButton[] objects
 * @property {Boolean} [resizeKeyboard] Optional. Requests clients to resize the keyboard vertically for optimal fit (e.g., make the keyboard smaller if there are just two rows of buttons). Defaults to false, in which case the custom keyboard is always of the same height as the app's standard keyboard.
 * @property {Boolean} [oneTimeKeyboard] Optional. Requests clients to hide the keyboard as soon as it's been used. The keyboard will still be available, but clients will automatically display the usual letter-keyboard in the chat – the user can press a special button in the input field to see the custom keyboard again. Defaults to false.
 * @property {Boolean} [selective] Optional. Use this parameter if you want to show the keyboard to specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply (has reply_to_message_id), sender of the original message. Example: A user requests to change the bot's language, bot replies to the request with a keyboard to select the new language. Other users in the group don't see the keyboard.
 *
 */
/**
 * @typedef {Object} KeyboardButton This object represents one button of the reply keyboard. For simple text buttons String can be used instead of this object to specify text of the button. Optional fields request_contact, request_location, and request_poll are mutually exclusive.
 * @property {String} text Text of the button. If none of the optional fields are used, it will be sent as a message when the button is pressed
 * @property {Boolean} [requestContact] Optional. If True, the user's phone number will be sent as a contact when the button is pressed. Available in private chats only
 * @property {Boolean} [requestLocation] Optional. If True, the user's current location will be sent when the button is pressed. Available in private chats only
 * @property {KeyboardButtonPollType} [requestPoll] Optional. If specified, the user will be asked to create a poll and send it to the bot when the button is pressed. Available in private chats only
 *
 */
/**
 * @typedef {Object} KeyboardButtonPollType This object represents type of a poll, which is allowed to be created and sent when the corresponding button is pressed.
 * @property {String} [type] Optional. If quiz is passed, the user will be allowed to create only polls in the quiz mode. If regular is passed, only regular polls will be allowed. Otherwise, the user will be allowed to create a poll of any type.
 *
 */
/**
 * @typedef {Object} ReplyKeyboardRemove Upon receiving a message with this object, Telegram clients will remove the current custom keyboard and display the default letter-keyboard. By default, custom keyboards are displayed until a new keyboard is sent by a bot. An exception is made for one-time keyboards that are hidden immediately after the user presses a button (see ReplyKeyboardMarkup).
 * @property {True} removeKeyboard Requests clients to remove the custom keyboard (user will not be able to summon this keyboard; if you want to hide the keyboard from sight but keep it accessible, use one_time_keyboard in ReplyKeyboardMarkup)
 * @property {Boolean} [selective] Optional. Use this parameter if you want to remove the keyboard for specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply (has reply_to_message_id), sender of the original message.

Example: A user votes in a poll, bot returns confirmation message in reply to the vote and removes the keyboard for that user, while still showing the keyboard with poll options to users who haven't voted yet.
 *
  */
/**
 * @typedef {Object} InlineKeyboardMarkup This object represents an inline keyboard that appears right next to the message it belongs to.
 * @property {InlineKeyboardButton[][]} inlineKeyboard button[] rows, each represented by an InlineKeyboardButton[] objects
 *
 */
/**
 * @typedef {Object} InlineKeyboardButton This object represents one button of an inline keyboard. You must use exactly one of the optional fields.
 * @property {String} text Label text on the button
 * @property {String} [url] Optional. HTTP or tg:// url to be opened when button is pressed
 * @property {LoginUrl} [loginUrl] Optional. An HTTP URL used to automatically authorize the user. Can be used as a replacement for the Telegram Login Widget.
 * @property {String} [callbackData] Optional. Data to be sent in a callback query to the bot when button is pressed, 1-64 bytes
 * @property {String} [switchInlineQuery] Optional. If set, pressing the button will prompt the user to select one of their chats, open that chat and insert the bot's username and the specified inline query in the input field. Can be empty, in which case just the bot's username will be inserted.

Note: This offers an easy way for users to start using your bot in inline mode when they are currently in a private chat with it. Especially useful when combined with switch_pm… actions – in this case the user will be automatically returned to the chat they switched from, skipping the chat selection screen.
 * @property {String} [switchInlineQueryCurrentChat] Optional. If set, pressing the button will insert the bot's username and the specified inline query in the current chat's input field. Can be empty, in which case only the bot's username will be inserted.

This offers a quick way for the user to open your bot in inline mode in the same chat – good for selecting something from multiple options.
 * @property {CallbackGame} [callbackGame] Optional. Description of the game that will be launched when the user presses the button.

NOTE: This type of button must always be the first button in the first row.
 * @property {Boolean} [pay] Optional. Specify True, to send a Pay button.

NOTE: This type of button must always be the first button in the first row.
 *
  */
/**
 * @typedef {Object} CallbackQuery This object represents an incoming callback query from a callback button in an inline keyboard. If the button that originated the query was attached to a message sent by the bot, the field message will be present. If the button was attached to a message sent via the bot (in inline mode), the field inline_message_id will be present. Exactly one of the fields data or game_short_name will be present.
 * @property {String} id Unique identifier for this query
 * @property {User} from Sender
 * @property {Message} [message] Optional. Message with the callback button that originated the query. Note that message content and message date will not be available if the message is too old
 * @property {String} [inlineMessageId] Optional. Identifier of the message sent via the bot in inline mode, that originated the query.
 * @property {String} chatInstance Global identifier, uniquely corresponding to the chat to which the message with the callback button was sent. Useful for high scores in games.
 * @property {String} [data] Optional. Data associated with the callback button. Be aware that a bad client can send arbitrary data in this field.
 * @property {String} [gameShortName] Optional. Short name of a Game to be returned, serves as the unique identifier for the game
 *
 */
/**
 * @typedef {Object} ForceReply Upon receiving a message with this object, Telegram clients will display a reply interface to the user (act as if the user has selected the bot's message and tapped 'Reply'). This can be extremely useful if you want to create user-friendly step-by-step interfaces without having to sacrifice privacy mode.
 * @property {True} forceReply Shows reply interface to the user, as if they manually selected the bot's message and tapped 'Reply'
 * @property {Boolean} [selective] Optional. Use this parameter if you want to force reply from specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply (has reply_to_message_id), sender of the original message.
 *
 */
/**
 * @typedef {Object} ChatPhoto This object represents a chat photo.
 * @property {String} smallFileId File identifier of small (160x160) chat photo. This file_id can be used only for photo download and only for as long as the photo is not changed.
 * @property {String} smallFileUniqueId Unique file identifier of small (160x160) chat photo, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
 * @property {String} bigFileId File identifier of big (640x640) chat photo. This file_id can be used only for photo download and only for as long as the photo is not changed.
 * @property {String} bigFileUniqueId Unique file identifier of big (640x640) chat photo, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
 *
 */
/**
 * @typedef {Object} ChatInviteLink Represents an invite link for a chat.
 * @property {String} inviteLink The invite link. If the link was created by another chat administrator, then the second part of the link will be replaced with “…”.
 * @property {User} creator Creator of the link
 * @property {Boolean} isPrimary True, if the link is primary
 * @property {Boolean} isRevoked True, if the link is revoked
 * @property {Integer} [expireDate] Optional. Point in time (Unix timestamp) when the link will expire or has been expired
 * @property {Integer} [memberLimit] Optional. Maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999
 *
 */
/**
 * @typedef {Object} ChatMember This object contains information about one member of a chat.
 * @property {User} user Information about the user
 * @property {String} status The member's status in the chat. Can be “creator”, “administrator”, “member”, “restricted”, “left” or “kicked”
 * @property {String} [customTitle] Optional. Owner and administrators only. Custom title for this user
 * @property {Boolean} [isAnonymous] Optional. Owner and administrators only. True, if the user's presence in the chat is hidden
 * @property {Boolean} [canBeEdited] Optional. Administrators only. True, if the bot is allowed to edit administrator privileges of that user
 * @property {Boolean} [canManageChat] Optional. Administrators only. True, if the administrator can access the chat event log, chat statistics, message statistics in channels, see channel members, see anonymous administrators in supergroups and ignore slow mode. Implied by any other administrator privilege
 * @property {Boolean} [canPostMessages] Optional. Administrators only. True, if the administrator can post in the channel; channels only
 * @property {Boolean} [canEditMessages] Optional. Administrators only. True, if the administrator can edit messages of other users and can pin messages; channels only
 * @property {Boolean} [canDeleteMessages] Optional. Administrators only. True, if the administrator can delete messages of other users
 * @property {Boolean} [canManageVoiceChats] Optional. Administrators only. True, if the administrator can manage voice chats
 * @property {Boolean} [canRestrictMembers] Optional. Administrators only. True, if the administrator can restrict, ban or unban chat members
 * @property {Boolean} [canPromoteMembers] Optional. Administrators only. True, if the administrator can add new administrators with a subset of their own privileges or demote administrators that he has promoted, directly or indirectly (promoted by administrators that were appointed by the user)
 * @property {Boolean} [canChangeInfo] Optional. Administrators and restricted only. True, if the user is allowed to change the chat title, photo and other settings
 * @property {Boolean} [canInviteUsers] Optional. Administrators and restricted only. True, if the user is allowed to invite new users to the chat
 * @property {Boolean} [canPinMessages] Optional. Administrators and restricted only. True, if the user is allowed to pin messages; groups and supergroups only
 * @property {Boolean} [isMember] Optional. Restricted only. True, if the user is a member of the chat at the moment of the request
 * @property {Boolean} [canSendMessages] Optional. Restricted only. True, if the user is allowed to send text messages, contacts, locations and venues
 * @property {Boolean} [canSendMediaMessages] Optional. Restricted only. True, if the user is allowed to send audios, documents, photos, videos, video notes and voice notes
 * @property {Boolean} [canSendPolls] Optional. Restricted only. True, if the user is allowed to send polls
 * @property {Boolean} [canSendOtherMessages] Optional. Restricted only. True, if the user is allowed to send animations, games, stickers and use inline bots
 * @property {Boolean} [canAddWebPagePreviews] Optional. Restricted only. True, if the user is allowed to add web page previews to their messages
 * @property {Integer} [untilDate] Optional. Restricted and kicked only. Date when restrictions will be lifted for this user; unix time
 *
 */
/**
 * @typedef {Object} ChatMemberUpdated This object represents changes in the status of a chat member.
 * @property {Chat} chat Chat the user belongs to
 * @property {User} from Performer of the action, which resulted in the change
 * @property {Integer} date Date the change was done in Unix time
 * @property {ChatMember} oldChatMember Previous information about the chat member
 * @property {ChatMember} newChatMember New information about the chat member
 * @property {ChatInviteLink} [inviteLink] Optional. Chat invite link, which was used by the user to join the chat; for joining by invite link events only.
 *
 */
/**
 * @typedef {Object} ChatPermissions Describes actions that a non-administrator user is allowed to take in a chat.
 * @property {Boolean} [canSendMessages] Optional. True, if the user is allowed to send text messages, contacts, locations and venues
 * @property {Boolean} [canSendMediaMessages] Optional. True, if the user is allowed to send audios, documents, photos, videos, video notes and voice notes, implies can_send_messages
 * @property {Boolean} [canSendPolls] Optional. True, if the user is allowed to send polls, implies can_send_messages
 * @property {Boolean} [canSendOtherMessages] Optional. True, if the user is allowed to send animations, games, stickers and use inline bots, implies can_send_media_messages
 * @property {Boolean} [canAddWebPagePreviews] Optional. True, if the user is allowed to add web page previews to their messages, implies can_send_media_messages
 * @property {Boolean} [canChangeInfo] Optional. True, if the user is allowed to change the chat title, photo and other settings. Ignored in public supergroups
 * @property {Boolean} [canInviteUsers] Optional. True, if the user is allowed to invite new users to the chat
 * @property {Boolean} [canPinMessages] Optional. True, if the user is allowed to pin messages. Ignored in public supergroups
 *
 */
/**
 * @typedef {Object} ChatLocation Represents a location to which a chat is connected.
 * @property {TelegramLocation} location The location to which the supergroup is connected. Can't be a live location.
 * @property {String} address TelegramLocation address; 1-64 characters, as defined by the chat owner
 *
 */
/**
 * @typedef {Object} BotCommand This object represents a bot command.
 * @property {String} command Text of the command, 1-32 characters. Can contain only lowercase English letters, digits and underscores.
 * @property {String} description Description of the command, 3-256 characters.
 *
 */
/**
 * @typedef {Object} ResponseParameters Contains information about why a request was unsuccessful.
 * @property {Integer} [migrateToChatId] Optional. The group has been migrated to a supergroup with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier.
 * @property {Integer} [retryAfter] Optional. In case of exceeding flood control, the number of seconds left to wait before the request can be repeated
 *
 */
/**
 * @typedef {Object} InputMediaPhoto Represents a photo to be sent.
 * @property {String} type Type of the result, must be photo
 * @property {String} media File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://” to upload a new one using multipart/form-data under  name. More info on Sending Files »
 * @property {String} [caption] Optional. Caption of the photo to be sent, 0-1024 characters after entities parsing
 * @property {String} [parseMode] Optional. Mode for parsing entities in the photo caption. See formatting options for more details.
 * @property {MessageEntity[]} [captionEntities] Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
 *
 */
/**
 * @typedef {Object} InputMediaVideo Represents a video to be sent.
 * @property {String} type Type of the result, must be video
 * @property {String} media File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://” to upload a new one using multipart/form-data under  name. More info on Sending Files »
 * @property {InputFile|String} [thumb] Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://” if the thumbnail was uploaded using multipart/form-data under . More info on Sending Files »
 * @property {String} [caption] Optional. Caption of the video to be sent, 0-1024 characters after entities parsing
 * @property {String} [parseMode] Optional. Mode for parsing entities in the video caption. See formatting options for more details.
 * @property {MessageEntity[]} [captionEntities] Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property {Integer} [width] Optional. Video width
 * @property {Integer} [height] Optional. Video height
 * @property {Integer} [duration] Optional. Video duration
 * @property {Boolean} [supportsStreaming] Optional. Pass True, if the uploaded video is suitable for streaming
 *
 */
/**
 * @typedef {Object} InputMediaAnimation Represents an animation file (GIF or H.264/MPEG-4 AVC video without sound) to be sent.
 * @property {String} type Type of the result, must be animation
 * @property {String} media File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://” to upload a new one using multipart/form-data under  name. More info on Sending Files »
 * @property {InputFile | String} [thumb] Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://” if the thumbnail was uploaded using multipart/form-data under . More info on Sending Files »
 * @property {String} [caption] Optional. Caption of the animation to be sent, 0-1024 characters after entities parsing
 * @property {String} [parseMode] Optional. Mode for parsing entities in the animation caption. See formatting options for more details.
 * @property {MessageEntity[]} [captionEntities] Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property {Integer} [width] Optional. TelegramAnimation width
 * @property {Integer} [height] Optional. TelegramAnimation height
 * @property {Integer} [duration] Optional. TelegramAnimation duration
 *
 */
/**
 * @typedef {Object} InputMediaAudio Represents an audio file to be treated as music to be sent.
 * @property {String} type Type of the result, must be audio
 * @property {String} media File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://” to upload a new one using multipart/form-data under  name. More info on Sending Files »
 * @property {InputFile | String} [thumb] Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://” if the thumbnail was uploaded using multipart/form-data under . More info on Sending Files »
 * @property {String} [caption] Optional. Caption of the audio to be sent, 0-1024 characters after entities parsing
 * @property {String} [parseMode] Optional. Mode for parsing entities in the audio caption. See formatting options for more details.
 * @property {MessageEntity[]} [captionEntities] Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property {Integer} [duration] Optional. Duration of the audio in seconds
 * @property {String} [performer] Optional. Performer of the audio
 * @property {String} [title] Optional. Title of the audio
 *
 */
/**
 * @typedef {Object} InputMediaDocument Represents a general file to be sent.
 * @property {String} type Type of the result, must be document
 * @property {String} media File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://” to upload a new one using multipart/form-data under  name. More info on Sending Files »
 * @property {InputFile | String} [thumb] Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://” if the thumbnail was uploaded using multipart/form-data under . More info on Sending Files »
 * @property {String} [caption] Optional. Caption of the document to be sent, 0-1024 characters after entities parsing
 * @property {String} [parseMode] Optional. Mode for parsing entities in the document caption. See formatting options for more details.
 * @property {MessageEntity[]} [captionEntities] Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property {Boolean} [disableContentTypeDetection] Optional. Disables automatic server-side content type detection for files uploaded using multipart/form-data. Always true, if the document is sent as part of an album.
 *
 */
/**
 * @typedef {Object} Sticker This object represents a sticker.
 * @property {String} fileId Identifier for this file, which can be used to download or reuse the file
 * @property {String} fileUniqueId Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
 * @property {Integer} width Sticker width
 * @property {Integer} height Sticker height
 * @property {Boolean} isAnimated True, if the sticker is animated
 * @property {PhotoSize} [thumb] Optional. Sticker thumbnail in the .WEBP or .JPG format
 * @property {String} [emoji] Optional. Emoji associated with the sticker
 * @property {String} [setName] Optional. Name of the sticker set to which the sticker belongs
 * @property {MaskPosition} [maskPosition] Optional. For mask stickers, the position where the mask should be placed
 * @property {Integer} [fileSize] Optional. File size
 *
 */
/**
 * @typedef {Object} StickerSet This object represents a sticker set.
 * @property {String} name Sticker set name
 * @property {String} title Sticker set title
 * @property {Boolean} isAnimated True, if the sticker set contains animated stickers
 * @property {Boolean} containsMasks True, if the sticker set contains masks
 * @property {Sticker[]} stickers List of all set stickers
 * @property {PhotoSize} [thumb] Optional. Sticker set thumbnail in the .WEBP or .TGS format
 *
 */
/**
 * @typedef {Object} MaskPosition This object describes the position on faces where a mask should be placed by default.
 * @property {String} point The part of the face relative to which the mask should be placed. One of “forehead”, “eyes”, “mouth”, or “chin”.
 * @property {Float} xShift Shift by X-axis measured in widths of the mask scaled to the face size, from left to right. For example, choosing -1.0 will place mask just to the left of the default mask position.
 * @property {Float} yShift Shift by Y-axis measured in heights of the mask scaled to the face size, from top to bottom. For example, 1.0 will place the mask just below the default mask position.
 * @property {Float} scale Mask scaling coefficient. For example, 2.0 means double size.
 *
 */
/**
 * @typedef {Object} InlineQuery This object represents an incoming inline query. When the user sends an empty query, your bot could return some default or trending results.
 * @property {String} id Unique identifier for this query
 * @property {User} from Sender
 * @property {String} query Text of the query (up to 256 characters)
 * @property {String} offset Offset of the results to be returned, can be controlled by the bot
 * @property {String} [chatType] Optional. Type of the chat, from which the inline query was sent. Can be either “sender” for a private chat with the inline query sender, “private”, “group”, “supergroup”, or “channel”. The chat type should be always known for requests sent from official clients and most third-party clients, unless the request was sent from a secret chat
 * @property {TelegramLocation} [location] Optional. Sender location, only for bots that request user location
 *
 */
/**
 * @typedef {Object} InlineQueryResultArticle Represents a link to an article or web page.
 * @property {String} type Type of the result, must be article
 * @property {String} id Unique identifier for this result, 1-64 Bytes
 * @property {String} title Title of the result
 * @property {InputMessageContent} inputMessageContent Content of the message to be sent
 * @property {InlineKeyboardMarkup} [replyMarkup] Optional. Inline keyboard attached to the message
 * @property {String} [url] Optional. URL of the result
 * @property {Boolean} [hideUrl] Optional. Pass True, if you don't want the URL to be shown in the message
 * @property {String} [description] Optional. Short description of the result
 * @property {String} [thumbUrl] Optional. Url of the thumbnail for the result
 * @property {Integer} [thumbWidth] Optional. Thumbnail width
 * @property {Integer} [thumbHeight] Optional. Thumbnail height
 *
 */
/**
 * @typedef {Object} InlineQueryResultPhoto Represents a link to a photo. By default, this photo will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the photo.
 * @property {String} type Type of the result, must be photo
 * @property {String} id Unique identifier for this result, 1-64 bytes
 * @property {String} photoUrl A valid URL of the photo. Photo must be in jpeg format. Photo size must not exceed 5MB
 * @property {String} thumbUrl URL of the thumbnail for the photo
 * @property {Integer} [photoWidth] Optional. Width of the photo
 * @property {Integer} [photoHeight] Optional. Height of the photo
 * @property {String} [title] Optional. Title for the result
 * @property {String} [description] Optional. Short description of the result
 * @property {String} [caption] Optional. Caption of the photo to be sent, 0-1024 characters after entities parsing
 * @property {String} [parseMode] Optional. Mode for parsing entities in the photo caption. See formatting options for more details.
 * @property {MessageEntity[]} [captionEntities] Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property {InlineKeyboardMarkup} [replyMarkup] Optional. Inline keyboard attached to the message
 * @property {InputMessageContent} [inputMessageContent] Optional. Content of the message to be sent instead of the photo
 *
 */
/**
 * @typedef {Object} InlineQueryResultGif Represents a link to an animated GIF file. By default, this animated GIF file will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation.
 * @property {String} type Type of the result, must be gif
 * @property {String} id Unique identifier for this result, 1-64 bytes
 * @property {String} gifUrl A valid URL for the GIF file. File size must not exceed 1MB
 * @property {Integer} [gifWidth] Optional. Width of the GIF
 * @property {Integer} [gifHeight] Optional. Height of the GIF
 * @property {Integer} [gifDuration] Optional. Duration of the GIF
 * @property {String} thumbUrl URL of the static (JPEG or GIF) or animated (MPEG4) thumbnail for the result
 * @property {String} [thumbMimeType] Optional. MIME type of the thumbnail, must be one of “image/jpeg”, “image/gif”, or “video/mp4”. Defaults to “image/jpeg”
 * @property {String} [title] Optional. Title for the result
 * @property {String} [caption] Optional. Caption of the GIF file to be sent, 0-1024 characters after entities parsing
 * @property {String} [parseMode] Optional. Mode for parsing entities in the caption. See formatting options for more details.
 * @property {MessageEntity[]} [captionEntities] Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property {InlineKeyboardMarkup} [replyMarkup] Optional. Inline keyboard attached to the message
 * @property {InputMessageContent} [inputMessageContent] Optional. Content of the message to be sent instead of the GIF animation
 *
 */
/**
 * @typedef {Object} InlineQueryResultMpeg4Gif Represents a link to a video animation (H.264/MPEG-4 AVC video without sound). By default, this animated MPEG-4 file will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation.
 * @property {String} type Type of the result, must be mpeg4_gif
 * @property {String} id Unique identifier for this result, 1-64 bytes
 * @property {String} mpeg4Url A valid URL for the MP4 file. File size must not exceed 1MB
 * @property {Integer} [mpeg4Width] Optional. Video width
 * @property {Integer} [mpeg4Height] Optional. Video height
 * @property {Integer} [mpeg4Duration] Optional. Video duration
 * @property {String} thumbUrl URL of the static (JPEG or GIF) or animated (MPEG4) thumbnail for the result
 * @property {String} [thumbMimeType] Optional. MIME type of the thumbnail, must be one of “image/jpeg”, “image/gif”, or “video/mp4”. Defaults to “image/jpeg”
 * @property {String} [title] Optional. Title for the result
 * @property {String} [caption] Optional. Caption of the MPEG-4 file to be sent, 0-1024 characters after entities parsing
 * @property {String} [parseMode] Optional. Mode for parsing entities in the caption. See formatting options for more details.
 * @property {MessageEntity[]} [captionEntities] Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property {InlineKeyboardMarkup} [replyMarkup] Optional. Inline keyboard attached to the message
 * @property {InputMessageContent} [inputMessageContent] Optional. Content of the message to be sent instead of the video animation
 *
 */
/**
 * @typedef {Object} InlineQueryResultAudio Represents a link to an MP3 audio file. By default, this audio file will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the audio.
 * @property {String} type Type of the result, must be audio
 * @property {String} id Unique identifier for this result, 1-64 bytes
 * @property {String} audioUrl A valid URL for the audio file
 * @property {String} title Title
 * @property {String} [caption] Optional. Caption, 0-1024 characters after entities parsing
 * @property {String} [parseMode] Optional. Mode for parsing entities in the audio caption. See formatting options for more details.
 * @property {MessageEntity[]} [captionEntities] Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property {String} [performer] Optional. Performer
 * @property {Integer} [audioDuration] Optional. Audio duration in seconds
 * @property {InlineKeyboardMarkup} [replyMarkup] Optional. Inline keyboard attached to the message
 * @property {InputMessageContent} [inputMessageContent] Optional. Content of the message to be sent instead of the audio
 *
 */
/**
 * @typedef {Object} InlineQueryResultVoice Represents a link to a voice recording in an .OGG container encoded with OPUS. By default, this voice recording will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the the voice message.
 * @property {String} type Type of the result, must be voice
 * @property {String} id Unique identifier for this result, 1-64 bytes
 * @property {String} voiceUrl A valid URL for the voice recording
 * @property {String} title Recording title
 * @property {String} [caption] Optional. Caption, 0-1024 characters after entities parsing
 * @property {String} [parseMode] Optional. Mode for parsing entities in the voice message caption. See formatting options for more details.
 * @property {MessageEntity[]} [captionEntities] Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property {Integer} [voiceDuration] Optional. Recording duration in seconds
 * @property {InlineKeyboardMarkup} [replyMarkup] Optional. Inline keyboard attached to the message
 * @property {InputMessageContent} [inputMessageContent] Optional. Content of the message to be sent instead of the voice recording
 *
 */
/**
 * @typedef {Object} InlineQueryResultDocument Represents a link to a file. By default, this file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the file. Currently, only .PDF and .ZIP files can be sent using this method.
 * @property {String} type Type of the result, must be document
 * @property {String} id Unique identifier for this result, 1-64 bytes
 * @property {String} title Title for the result
 * @property {String} [caption] Optional. Caption of the document to be sent, 0-1024 characters after entities parsing
 * @property {String} [parseMode] Optional. Mode for parsing entities in the document caption. See formatting options for more details.
 * @property {MessageEntity[]} [captionEntities] Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property {String} documentUrl A valid URL for the file
 * @property {String} mimeType Mime type of the content of the file, either “application/pdf” or “application/zip”
 * @property {String} [description] Optional. Short description of the result
 * @property {InlineKeyboardMarkup} [replyMarkup] Optional. Inline keyboard attached to the message
 * @property {InputMessageContent} [inputMessageContent] Optional. Content of the message to be sent instead of the file
 * @property {String} [thumbUrl] Optional. URL of the thumbnail (jpeg only) for the file
 * @property {Integer} [thumbWidth] Optional. Thumbnail width
 * @property {Integer} [thumbHeight] Optional. Thumbnail height
 *
 */
/**
 * @typedef {Object} InlineQueryResultLocation Represents a location on a map. By default, the location will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the location.
 * @property {String} type Type of the result, must be location
 * @property {String} id Unique identifier for this result, 1-64 Bytes
 * @property {Float} latitude TelegramLocation latitude in degrees
 * @property {Float} longitude TelegramLocation longitude in degrees
 * @property {String} title TelegramLocation title
 * @property {Float} [horizontalAccuracy] Optional. The radius of uncertainty for the location, measured in meters; 0-1500
 * @property {Integer} [livePeriod] Optional. Period in seconds for which the location can be updated, should be between 60 and 86400.
 * @property {Integer} [heading] Optional. For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.
 * @property {Integer} [proximityAlertRadius] Optional. For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.
 * @property {InlineKeyboardMarkup} [replyMarkup] Optional. Inline keyboard attached to the message
 * @property {InputMessageContent} [inputMessageContent] Optional. Content of the message to be sent instead of the location
 * @property {String} [thumbUrl] Optional. Url of the thumbnail for the result
 * @property {Integer} [thumbWidth] Optional. Thumbnail width
 * @property {Integer} [thumbHeight] Optional. Thumbnail height
 *
 */
/**
 * @typedef {Object} InlineQueryResultVenue Represents a venue. By default, the venue will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the venue.
 * @property {String} type Type of the result, must be venue
 * @property {String} id Unique identifier for this result, 1-64 Bytes
 * @property {Float} latitude Latitude of the venue location in degrees
 * @property {Float} longitude Longitude of the venue location in degrees
 * @property {String} title Title of the venue
 * @property {String} address Address of the venue
 * @property {String} [foursquareId] Optional. Foursquare identifier of the venue if known
 * @property {String} [foursquareType] Optional. Foursquare type of the venue, if known. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.)
 * @property {String} [googlePlaceId] Optional. Google Places identifier of the venue
 * @property {String} [googlePlaceType] Optional. Google Places type of the venue. (See supported types.)
 * @property {InlineKeyboardMarkup} [replyMarkup] Optional. Inline keyboard attached to the message
 * @property {InputMessageContent} [inputMessageContent] Optional. Content of the message to be sent instead of the venue
 * @property {String} [thumbUrl] Optional. Url of the thumbnail for the result
 * @property {Integer} [thumbWidth] Optional. Thumbnail width
 * @property {Integer} [thumbHeight] Optional. Thumbnail height
 *
 */
/**
 * @typedef {Object} InlineQueryResultContact Represents a contact with a phone number. By default, this contact will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the contact.
 * @property {String} type Type of the result, must be contact
 * @property {String} id Unique identifier for this result, 1-64 Bytes
 * @property {String} phoneNumber Contact's phone number
 * @property {String} firstName Contact's first name
 * @property {String} [lastName] Optional. Contact's last name
 * @property {String} [vcard] Optional. Additional data about the contact in the form of a vCard, 0-2048 bytes
 * @property {InlineKeyboardMarkup} [replyMarkup] Optional. Inline keyboard attached to the message
 * @property {InputMessageContent} [inputMessageContent] Optional. Content of the message to be sent instead of the contact
 * @property {String} [thumbUrl] Optional. Url of the thumbnail for the result
 * @property {Integer} [thumbWidth] Optional. Thumbnail width
 * @property {Integer} [thumbHeight] Optional. Thumbnail height
 *
 */
/**
 * @typedef {Object} InlineQueryResultGame Represents a Game.
 * @property {String} type Type of the result, must be game
 * @property {String} id Unique identifier for this result, 1-64 bytes
 * @property {String} gameShortName Short name of the game
 * @property {InlineKeyboardMarkup} [replyMarkup] Optional. Inline keyboard attached to the message
 *
 */
/**
 * @typedef {Object} InlineQueryResultCachedPhoto Represents a link to a photo stored on the Telegram servers. By default, this photo will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the photo.
 * @property {String} type Type of the result, must be photo
 * @property {String} id Unique identifier for this result, 1-64 bytes
 * @property {String} photoFileId A valid file identifier of the photo
 * @property {String} [title] Optional. Title for the result
 * @property {String} [description] Optional. Short description of the result
 * @property {String} [caption] Optional. Caption of the photo to be sent, 0-1024 characters after entities parsing
 * @property {String} [parseMode] Optional. Mode for parsing entities in the photo caption. See formatting options for more details.
 * @property {MessageEntity[]} [captionEntities] Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property {InlineKeyboardMarkup} [replyMarkup] Optional. Inline keyboard attached to the message
 * @property {InputMessageContent} [inputMessageContent] Optional. Content of the message to be sent instead of the photo
 *
 */
/**
 * @typedef {Object} InlineQueryResultCachedGif Represents a link to an animated GIF file stored on the Telegram servers. By default, this animated GIF file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with specified content instead of the animation.
 * @property {String} type Type of the result, must be gif
 * @property {String} id Unique identifier for this result, 1-64 bytes
 * @property {String} gifFileId A valid file identifier for the GIF file
 * @property {String} [title] Optional. Title for the result
 * @property {String} [caption] Optional. Caption of the GIF file to be sent, 0-1024 characters after entities parsing
 * @property {String} [parseMode] Optional. Mode for parsing entities in the caption. See formatting options for more details.
 * @property {MessageEntity[]} [captionEntities] Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property {InlineKeyboardMarkup} [replyMarkup] Optional. Inline keyboard attached to the message
 * @property {InputMessageContent} [inputMessageContent] Optional. Content of the message to be sent instead of the GIF animation
 *
 */
/**
 * @typedef {Object} InlineQueryResultCachedMpeg4Gif Represents a link to a video animation (H.264/MPEG-4 AVC video without sound) stored on the Telegram servers. By default, this animated MPEG-4 file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation.
 * @property {String} type Type of the result, must be mpeg4_gif
 * @property {String} id Unique identifier for this result, 1-64 bytes
 * @property {String} mpeg4FileId A valid file identifier for the MP4 file
 * @property {String} [title] Optional. Title for the result
 * @property {String} [caption] Optional. Caption of the MPEG-4 file to be sent, 0-1024 characters after entities parsing
 * @property {String} [parseMode] Optional. Mode for parsing entities in the caption. See formatting options for more details.
 * @property {MessageEntity[]} [captionEntities] Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property {InlineKeyboardMarkup} [replyMarkup] Optional. Inline keyboard attached to the message
 * @property {InputMessageContent} [inputMessageContent] Optional. Content of the message to be sent instead of the video animation
 *
 */
/**
 * @typedef {Object} InlineQueryResultCachedSticker Represents a link to a sticker stored on the Telegram servers. By default, this sticker will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the sticker.
 * @property {String} type Type of the result, must be sticker
 * @property {String} id Unique identifier for this result, 1-64 bytes
 * @property {String} stickerFileId A valid file identifier of the sticker
 * @property {InlineKeyboardMarkup} [replyMarkup] Optional. Inline keyboard attached to the message
 * @property {InputMessageContent} [inputMessageContent] Optional. Content of the message to be sent instead of the sticker
 *
 */
/**
 * @typedef {Object} InlineQueryResultCachedDocument Represents a link to a file stored on the Telegram servers. By default, this file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the file.
 * @property {String} type Type of the result, must be document
 * @property {String} id Unique identifier for this result, 1-64 bytes
 * @property {String} title Title for the result
 * @property {String} documentFileId A valid file identifier for the file
 * @property {String} [description] Optional. Short description of the result
 * @property {String} [caption] Optional. Caption of the document to be sent, 0-1024 characters after entities parsing
 * @property {String} [parseMode] Optional. Mode for parsing entities in the document caption. See formatting options for more details.
 * @property {MessageEntity[]} [captionEntities] Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property {InlineKeyboardMarkup} [replyMarkup] Optional. Inline keyboard attached to the message
 * @property {InputMessageContent} [inputMessageContent] Optional. Content of the message to be sent instead of the file
 *
 */
/**
 * @typedef {Object} InlineQueryResultCachedVideo Represents a link to a video file stored on the Telegram servers. By default, this video file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the video.
 * @property {String} type Type of the result, must be video
 * @property {String} id Unique identifier for this result, 1-64 bytes
 * @property {String} videoFileId A valid file identifier for the video file
 * @property {String} title Title for the result
 * @property {String} [description] Optional. Short description of the result
 * @property {String} [caption] Optional. Caption of the video to be sent, 0-1024 characters after entities parsing
 * @property {String} [parseMode] Optional. Mode for parsing entities in the video caption. See formatting options for more details.
 * @property {MessageEntity[]} [captionEntities] Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property {InlineKeyboardMarkup} [replyMarkup] Optional. Inline keyboard attached to the message
 * @property {InputMessageContent} [inputMessageContent] Optional. Content of the message to be sent instead of the video
 *
 */
/**
 * @typedef {Object} InlineQueryResultCachedVoice Represents a link to a voice message stored on the Telegram servers. By default, this voice message will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the voice message.
 * @property {String} type Type of the result, must be voice
 * @property {String} id Unique identifier for this result, 1-64 bytes
 * @property {String} voiceFileId A valid file identifier for the voice message
 * @property {String} title Voice message title
 * @property {String} [caption] Optional. Caption, 0-1024 characters after entities parsing
 * @property {String} [parseMode] Optional. Mode for parsing entities in the voice message caption. See formatting options for more details.
 * @property {MessageEntity[]} [captionEntities] Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property {InlineKeyboardMarkup} [replyMarkup] Optional. Inline keyboard attached to the message
 * @property {InputMessageContent} [inputMessageContent] Optional. Content of the message to be sent instead of the voice message
 *
 */
/**
 * @typedef {Object} InlineQueryResultCachedAudio Represents a link to an MP3 audio file stored on the Telegram servers. By default, this audio file will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the audio.
 * @property {String} type Type of the result, must be audio
 * @property {String} id Unique identifier for this result, 1-64 bytes
 * @property {String} audioFileId A valid file identifier for the audio file
 * @property {String} [caption] Optional. Caption, 0-1024 characters after entities parsing
 * @property {String} [parseMode] Optional. Mode for parsing entities in the audio caption. See formatting options for more details.
 * @property {MessageEntity[]} [captionEntities] Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property {InlineKeyboardMarkup} [replyMarkup] Optional. Inline keyboard attached to the message
 * @property {InputMessageContent} [inputMessageContent] Optional. Content of the message to be sent instead of the audio
 *
 */
/**
 * @typedef {Object} InputTextMessageContent Represents the content of a text message to be sent as the result of an inline query.
 * @property {String} messageText Text of the message to be sent, 1-4096 characters
 * @property {String} [parseMode] Optional. Mode for parsing entities in the message text. See formatting options for more details.
 * @property {MessageEntity[]} [entities] Optional. List of special entities that appear in message text, which can be specified instead of parse_mode
 * @property {Boolean} [disableWebPagePreview] Optional. Disables link previews for links in the sent message
 *
 */
/**
 * @typedef {Object} InputLocationMessageContent Represents the content of a location message to be sent as the result of an inline query.
 * @property {Float} latitude Latitude of the location in degrees
 * @property {Float} longitude Longitude of the location in degrees
 * @property {Float} [horizontalAccuracy] Optional. The radius of uncertainty for the location, measured in meters; 0-1500
 * @property {Integer} [livePeriod] Optional. Period in seconds for which the location can be updated, should be between 60 and 86400.
 * @property {Integer} [heading] Optional. For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.
 * @property {Integer} [proximityAlertRadius] Optional. For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.
 *
 */
/**
 * @typedef {Object} InputVenueMessageContent Represents the content of a venue message to be sent as the result of an inline query.
 * @property {Float} latitude Latitude of the venue in degrees
 * @property {Float} longitude Longitude of the venue in degrees
 * @property {String} title Name of the venue
 * @property {String} address Address of the venue
 * @property {String} [foursquareId] Optional. Foursquare identifier of the venue, if known
 * @property {String} [foursquareType] Optional. Foursquare type of the venue, if known. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.)
 * @property {String} [googlePlaceId] Optional. Google Places identifier of the venue
 * @property {String} [googlePlaceType] Optional. Google Places type of the venue. (See supported types.)
 *
 */
/**
 * @typedef {Object} InputContactMessageContent Represents the content of a contact message to be sent as the result of an inline query.
 * @property {String} phoneNumber Contact's phone number
 * @property {String} firstName Contact's first name
 * @property {String} [lastName] Optional. Contact's last name
 * @property {String} [vcard] Optional. Additional data about the contact in the form of a vCard, 0-2048 bytes
 *
 */
/**
 * @typedef {Object} InputInvoiceMessageContent Represents the content of an invoice message to be sent as the result of an inline query.
 * @property {String} title Product name, 1-32 characters
 * @property {String} description Product description, 1-255 characters
 * @property {String} payload Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use for your internal processes.
 * @property {String} providerToken Payment provider token, obtained via Botfather
 * @property {String} currency Three-letter ISO 4217 currency code, see more on currencies
 * @property {LabeledPrice[]} prices Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.)
 * @property {Integer} [maxTipAmount] Optional. The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double). For example, for a maximum tip of US$ 1.45 pass max_tip_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0
 * @property {Integer[]} [suggestedTipAmounts] Optional. A JSON-serialized suggested[] amounts of tip in the smallest units of the currency (integer, not float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max_tip_amount.
 * @property {String} [providerData] Optional. A JSON-serialized object for data about the invoice, which will be shared with the payment provider. A detailed description of the required fields should be provided by the payment provider.
 * @property {String} [photoUrl] Optional. URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service. People like it better when they see what they are paying for.
 * @property {Integer} [photoSize] Optional. Photo size
 * @property {Integer} [photoWidth] Optional. Photo width
 * @property {Integer} [photoHeight] Optional. Photo height
 * @property {Boolean} [needName] Optional. Pass True, if you require the user's full name to complete the order
 * @property {Boolean} [needPhoneNumber] Optional. Pass True, if you require the user's phone number to complete the order
 * @property {Boolean} [needEmail] Optional. Pass True, if you require the user's email address to complete the order
 * @property {Boolean} [needShippingAddress] Optional. Pass True, if you require the user's shipping address to complete the order
 * @property {Boolean} [sendPhoneNumberToProvider] Optional. Pass True, if user's phone number should be sent to provider
 * @property {Boolean} [sendEmailToProvider] Optional. Pass True, if user's email address should be sent to provider
 * @property {Boolean} [isFlexible] Optional. Pass True, if the final price depends on the shipping method
 *
 */
/**
 * @typedef {Object} ChosenInlineResult Represents a result of an inline query that was chosen by the user and sent to their chat partner.
 * @property {String} resultId The unique identifier for the result that was chosen
 * @property {User} from The user that chose the result
 * @property {TelegramLocation} [location] Optional. Sender location, only for bots that require user location
 * @property {String} [inlineMessageId] Optional. Identifier of the sent inline message. Available only if there is an inline keyboard attached to the message. Will be also received in callback queries and can be used to edit the message.
 * @property {String} query The query that was used to obtain the result
 *
 */
/**
 * @typedef {Object} LabeledPrice This object represents a portion of the price for goods or services.
 * @property {String} label Portion label
 * @property {Integer} amount Price of the product in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).
 *
 */
/**
 * @typedef {Object} Invoice This object contains basic information about an invoice.
 * @property {String} title Product name
 * @property {String} description Product description
 * @property {String} startParameter Unique bot deep-linking parameter that can be used to generate this invoice
 * @property {String} currency Three-letter ISO 4217 currency code
 * @property {Integer} totalAmount Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).
 *
 */
/**
 * @typedef {Object} ShippingAddress This object represents a shipping address.
 * @property {String} countryCode ISO 3166-1 alpha-2 country code
 * @property {String} state State, if applicable
 * @property {String} city City
 * @property {String} streetLine1 First line for the address
 * @property {String} streetLine2 Second line for the address
 * @property {String} postCode Address post code
 *
 */
/**
 * @typedef {Object} OrderInfo This object represents information about an order.
 * @property {String} [name] Optional. User name
 * @property {String} [phoneNumber] Optional. User's phone number
 * @property {String} [email] Optional. User email
 * @property {ShippingAddress} [shippingAddress] Optional. User shipping address
 *
 */
/**
 * @typedef {Object} ShippingOption This object represents one shipping option.
 * @property {String} id Shipping option identifier
 * @property {String} title Option title
 * @property {LabeledPrice[]} prices List of price portions
 *
 */
/**
 * @typedef {Object} SuccessfulPayment This object contains basic information about a successful payment.
 * @property {String} currency Three-letter ISO 4217 currency code
 * @property {Integer} totalAmount Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).
 * @property {String} invoicePayload Bot specified invoice payload
 * @property {String} [shippingOptionId] Optional. Identifier of the shipping option chosen by the user
 * @property {OrderInfo} [orderInfo] Optional. Order info provided by the user
 * @property {String} telegramPaymentChargeId Telegram payment identifier
 * @property {String} providerPaymentChargeId Provider payment identifier
 *
 */
/**
 * @typedef {Object} ShippingQuery This object contains information about an incoming shipping query.
 * @property {String} id Unique query identifier
 * @property {User} from User who sent the query
 * @property {String} invoicePayload Bot specified invoice payload
 * @property {ShippingAddress} shippingAddress User specified shipping address
 *
 */
/**
 * @typedef {Object} PreCheckoutQuery This object contains information about an incoming pre-checkout query.
 * @property {String} id Unique query identifier
 * @property {User} from User who sent the query
 * @property {String} currency Three-letter ISO 4217 currency code
 * @property {Integer} totalAmount Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).
 * @property {String} invoicePayload Bot specified invoice payload
 * @property {String} [shippingOptionId] Optional. Identifier of the shipping option chosen by the user
 * @property {OrderInfo} [orderInfo] Optional. Order info provided by the user
 *
 */
/**
 * @typedef {Object} PassportData Contains information about Telegram Passport data shared with the bot by the user.
 * @property {EncryptedPassportElement[]} data Array with information about documents and other Telegram Passport elements that was shared with the bot
 * @property {EncryptedCredentials} credentials Encrypted credentials required to decrypt the data
 *
 */
/**
 * @typedef {Object} PassportFile This object represents a file uploaded to Telegram Passport. Currently all Telegram Passport files are in JPEG format when decrypted and don't exceed 10MB.
 * @property {String} fileId Identifier for this file, which can be used to download or reuse the file
 * @property {String} fileUniqueId Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
 * @property {Integer} fileSize File size
 * @property {Integer} fileDate Unix time when the file was uploaded
 *
 */
/**
 * @typedef {Object} EncryptedPassportElement Contains information about documents or other Telegram Passport elements shared with the bot by the user.
 * @property {String} type Element type. One of “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport”, “address”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”, “phone_number”, “email”.
 * @property {String} [data] Optional. Base64-encoded encrypted Telegram Passport element data provided by the user, available for “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport” and “address” types. Can be decrypted and verified using the accompanying EncryptedCredentials.
 * @property {String} [phoneNumber] Optional. User's verified phone number, available only for “phone_number” type
 * @property {String} [email] Optional. User's verified email address, available only for “email” type
 * @property {PassportFile[]} [files] Optional. encrypted[] files with documents provided by the user, available for “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration” and “temporary_registration” types. Files can be decrypted and verified using the accompanying EncryptedCredentials.
 * @property {PassportFile} [frontSide] Optional. Encrypted file with the front side of the document, provided by the user. Available for “passport”, “driver_license”, “identity_card” and “internal_passport”. The file can be decrypted and verified using the accompanying EncryptedCredentials.
 * @property {PassportFile} [reverseSide] Optional. Encrypted file with the reverse side of the document, provided by the user. Available for “driver_license” and “identity_card”. The file can be decrypted and verified using the accompanying EncryptedCredentials.
 * @property {PassportFile} [selfie] Optional. Encrypted file with the selfie of the user holding a document, provided by the user; available for “passport”, “driver_license”, “identity_card” and “internal_passport”. The file can be decrypted and verified using the accompanying EncryptedCredentials.
 * @property {PassportFile[]} [translation] Optional. encrypted[] files with translated versions of documents provided by the user. Available if requested for “passport”, “driver_license”, “identity_card”, “internal_passport”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration” and “temporary_registration” types. Files can be decrypted and verified using the accompanying EncryptedCredentials.
 * @property {String} hash Base64-encoded element hash for using in PassportElementErrorUnspecified
 *
 */
/**
 * @typedef {Object} EncryptedCredentials Contains data required for decrypting and authenticating EncryptedPassportElement. See the Telegram Passport Documentation for a complete description of the data decryption and authentication processes.
 * @property {String} data Base64-encoded encrypted JSON-serialized data with unique user's payload, data hashes and secrets required for EncryptedPassportElement decryption and authentication
 * @property {String} hash Base64-encoded data hash for data authentication
 * @property {String} secret Base64-encoded secret, encrypted with the bot's public RSA key, required for data decryption
 *
 */
/**
 * @typedef {Object} PassportElementErrorDataField Represents an issue in one of the data fields that was provided by the user. The error is considered resolved when the field's value changes.
 * @property {String} source Error source, must be data
 * @property {String} type The section of the user's Telegram Passport which has the error, one of “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport”, “address”
 * @property {String} fieldName Name of the data field which has the error
 * @property {String} dataHash Base64-encoded data hash
 * @property {String} message Error message
 *
 */
/**
 * @typedef {Object} PassportElementErrorFrontSide Represents an issue with the front side of a document. The error is considered resolved when the file with the front side of the document changes.
 * @property {String} source Error source, must be front_side
 * @property {String} type The section of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport”
 * @property {String} fileHash Base64-encoded hash of the file with the front side of the document
 * @property {String} message Error message
 *
 */
/**
 * @typedef {Object} PassportElementErrorReverseSide Represents an issue with the reverse side of a document. The error is considered resolved when the file with reverse side of the document changes.
 * @property {String} source Error source, must be reverse_side
 * @property {String} type The section of the user's Telegram Passport which has the issue, one of “driver_license”, “identity_card”
 * @property {String} fileHash Base64-encoded hash of the file with the reverse side of the document
 * @property {String} message Error message
 *
 */
/**
 * @typedef {Object} PassportElementErrorSelfie Represents an issue with the selfie with a document. The error is considered resolved when the file with the selfie changes.
 * @property {String} source Error source, must be selfie
 * @property {String} type The section of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport”
 * @property {String} fileHash Base64-encoded hash of the file with the selfie
 * @property {String} message Error message
 *
 */
/**
 * @typedef {Object} PassportElementErrorFile Represents an issue with a document scan. The error is considered resolved when the file with the document scan changes.
 * @property {String} source Error source, must be file
 * @property {String} type The section of the user's Telegram Passport which has the issue, one of “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”
 * @property {String} fileHash Base64-encoded file hash
 * @property {String} message Error message
 *
 */
/**
 * @typedef {Object} PassportElementErrorFiles Represents an issue with a list of scans. The error is considered resolved when the list of files containing the scans changes.
 * @property {String} source Error source, must be files
 * @property {String} type The section of the user's Telegram Passport which has the issue, one of “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”
 * @property {String[]} fileHashes List of base64-encoded file hashes
 * @property {String} message Error message
 *
 */
/**
 * @typedef {Object} PassportElementErrorTranslationFile Represents an issue with one of the files that constitute the translation of a document. The error is considered resolved when the file changes.
 * @property {String} source Error source, must be translation_file
 * @property {String} type Type of element of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”
 * @property {String} fileHash Base64-encoded file hash
 * @property {String} message Error message
 *
 */
/**
 * @typedef {Object} PassportElementErrorTranslationFiles Represents an issue with the translated version of a document. The error is considered resolved when a file with the document translation change.
 * @property {String} source Error source, must be translation_files
 * @property {String} type Type of element of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”
 * @property {String[]} fileHashes List of base64-encoded file hashes
 * @property {String} message Error message
 *
 */
/**
 * @typedef {Object} PassportElementErrorUnspecified Represents an issue in an unspecified place. The error is considered resolved when new data is added.
 * @property {String} source Error source, must be unspecified
 * @property {String} type Type of element of the user's Telegram Passport which has the issue
 * @property {String} elementHash Base64-encoded element hash
 * @property {String} message Error message
 *
 */
/**
 * @typedef {Object} Game This object represents a game. Use BotFather to create and edit games, their short names will act as unique identifiers.
 * @property {String} title Title of the game
 * @property {String} description Description of the game
 * @property {PhotoSize[]} photo Photo that will be displayed in the game message in chats.
 * @property {String} [text] Optional. Brief description of the game or high scores included in the game message. Can be automatically edited to include current high scores for the game when the bot calls setGameScore, or manually edited using editMessageText. 0-4096 characters.
 * @property {MessageEntity[]} [textEntities] Optional. Special entities that appear in text, such as usernames, URLs, bot commands, etc.
 * @property {TelegramAnimation} [animation] Optional. TelegramAnimation that will be displayed in the game message in chats. Upload via BotFather
 *
 */
/**
 * @typedef {Object} GameHighScore This object represents one row of the high scores table for a game.
 * @property {Integer} position Position in high score table for the game
 * @property {User} user User
 * @property {Integer} score Score
 *
 */

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
   * @type {String[]} List of all events
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
    ...this.messageEvents,
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
        messageEvents.forEach(
          (messageEvent) =>
            messageEvents in message && this.emit(messageEvent, message)
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
   * @returns {Promise<Object>}
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
   * @returns {Promise<Object>}
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
   * @returns {Promise<Object>}
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
   * @returns {Promise<Object>}
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
   * @returns {Promise<Object>}
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
   * @returns {Promise<Object>}
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
   * @returns {Promise<Object>}
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
   * @returns {Promise<Object>}
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
   * @returns {Promise<Object>}
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
   * @returns {Promise<Object>}
   */
  async sendLocation(chatId, latitude, longitude, options = {}) {
    return this._request("sendLocation", {
      queryOptions: { chatId, latitude, longitude, ...options },
    });
  }

  /** Use this method to edit live location messages. A location can be edited until its live_period expires or editing is explicitly disabled by a call to stopMessageLiveLocation. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
   * @param {Float} latitude Latitude of new location
   * @param {Float} longitude Longitude of new location
   * @param {object} [options]
   * @param {Integer | String} [options.chatId] Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
   * @param {Integer} [options.messageId] Required if inline_message_id is not specified. Identifier of the message to edit
   * @param {String} [options.inlineMessageId] Required if chat_id and message_id are not specified. Identifier of the inline message
   * @param {Float} [options.horizontalAccuracy] The radius of uncertainty for the location, measured in meters; 0-1500
   * @param {Integer} [options.heading] Direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.
   * @param {Integer} [options.proximityAlertRadius] Maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.
   * @param {InlineKeyboardMarkup} [options.replyMarkup] A JSON-serialized object for a new inline keyboard.
   * @returns {Promise<Object>}
   */
  async editMessageLiveLocation(latitude, longitude, options = {}) {
    return this._request("editMessageLiveLocation", {
      queryOptions: { latitude, longitude, ...options },
    });
  }

  /** Use this method to stop updating a live location message before live_period expires. On success, if the message was sent by the bot, the sent Message is returned, otherwise True is returned.
   * @param {Object} [options]
   * @param {Integer | String} [options.chatId] Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
   * @param {Integer} [options.messageId] Required if inline_message_id is not specified. Identifier of the message with live location to stop
   * @param {String} [options.inlineMessageId] Required if chat_id and message_id are not specified. Identifier of the inline message
   * @param {InlineKeyboardMarkup} [options.replyMarkup] A JSON-serialized object for a new inline keyboard.
   * @returns {Promise<Object>}
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
   * @returns {Promise<Object>}
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
   * @returns {Promise<Object>}
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
   * @returns {Promise<Object>}
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
   * @returns {Promise<Object>}
   */
  async sendDice(chatId, options = {}) {
    return this._request("sendDice", { queryOptions: { chatId, ...options } });
  }

  /** Use this method to get a list of profile pictures for a user. Returns a UserProfilePhotos object.
   * @param {Integer} userId Unique identifier of the target user
   * @param {Object} [options]
   * @param {Integer} [options.offset] Sequential number of the first photo to be returned. By default, all photos are returned.
   * @param {Integer} [options.limit] Limits the number of photos to be retrieved. Values between 1-100 are accepted. Defaults to 100.
   * @returns {Promise<Object>}
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
   * @returns {Promise<Object>}
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
   * @returns {Promise<Object>}
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
   * @returns {Promise<Object>}
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
   * @returns {Promise<Object>}
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
   * @returns {Promise<Object>}
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
   * @returns {Promise<Object>}
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
   * @returns {Promise<Object>}
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
   * @returns {Promise<Object>}
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
   * @returns {Promise<Object>}
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
   * @returns {Promise<Object>}
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
   * @returns {Promise<Object>}
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
   * @returns {Promise<Object>}
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
   * @returns {Promise<Object>}
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
   * @returns {Promise<Object>}
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
   * @returns {Promise<Object>}
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
   * @returns {Promise<Object>}
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
   * @returns {Promise<Object>}
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
   * @returns {Promise<Object>}
   */
  async leaveChat(chatId, options = {}) {
    return this._request("leaveChat", { queryOptions: { chatId, ...options } });
  }

  /** Use this method to get up to date information about the chat (current name of the user for one-on-one conversations, current username of a user, group or channel, etc.). Returns a Chat object on success.
   * @param {Integer | String} chatId Unique identifier for the target chat or username of the target supergroup or channel (in the forma* @channelusername)
   * @param {Object} [options]
   *
   * @returns {Promise<Object>}
   */
  async getChat(chatId, options = {}) {
    return this._request("getChat", { queryOptions: { chatId, ...options } });
  }

  /** Use this method to get a list of administrators in a chat. On success, returns an ChatMember[] objects that contains information about all chat administrators except other bots. If the chat is a group or a supergroup and no administrators were appointed, only the creator will be returned.
   * @param {Integer | String} chatId Unique identifier for the target chat or username of the target supergroup or channel (in the forma* @channelusername)
   * @param {Object} [options]
   *
   * @returns {Promise<Object>}
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
   * @returns {Promise<Object>}
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
   * @returns {Promise<Object>}
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
   * @returns {Promise<Object>}
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
   * @returns {Promise<Object>}
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
   * @returns {Promise<Object>}
   */
  async setMyCommands(commands, options = {}) {
    return this._request("setMyCommands", {
      queryOptions: { commands, ...options },
    });
  }

  /** Use this method to edit text and game messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
   * @param {String} text New text of the message, 1-4096 characters after entities parsing
   * @param {Object} [options]
   * @param {Integer | String} [options.chatId] Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
   * @param {Integer} [options.messageId] Required if inline_message_id is not specified. Identifier of the message to edit
   * @param {String} [options.inlineMessageId] Required if chat_id and message_id are not specified. Identifier of the inline message
   * @param {String} [options.parseMode] Mode for parsing entities in the message text. See formatting options for more details.
   * @param {MessageEntity[]} [options.entities] List of special entities that appear in message text, which can be specified instead of parse_mode
   * @param {Boolean} [options.disableWebPagePreview] Disables link previews for links in this message
   * @param {InlineKeyboardMarkup} [options.replyMarkup] A JSON-serialized object for an inline keyboard.
   * @returns {Promise<Object>}
   */
  async editMessageText(text, options = {}) {
    return this._request("editMessageText", {
      queryOptions: { text, ...options },
    });
  }

  /** Use this method to edit captions of messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
   * @param {Object} [options]
   * @param {Integer | String} [options.chatId] Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
   * @param {Integer} [options.messageId] Required if inline_message_id is not specified. Identifier of the message to edit
   * @param {String} [options.inlineMessageId] Required if chat_id and message_id are not specified. Identifier of the inline message
   * @param {String} [options.caption] New caption of the message, 0-1024 characters after entities parsing
   * @param {String} [options.parseMode] Mode for parsing entities in the message caption. See formatting options for more details.
   * @param {MessageEntity[]} [options.captionEntities] List of special entities that appear in the caption, which can be specified instead of parse_mode
   * @param {InlineKeyboardMarkup} [options.replyMarkup] A JSON-serialized object for an inline keyboard.
   * @returns {Promise<Object>}
   */
  async editMessageCaption(options = {}) {
    return this._request("editMessageCaption", {
      queryOptions: { ...options },
    });
  }

  /** Use this method to edit animation, audio, document, photo, or video messages. If a message is part of a message album, then it can be edited only to an audio for audio albums, only to a document for document albums and to a photo or a video otherwise. When an inline message is edited, a new file can't be uploaded. Use a previously uploaded file via its file_id or specify a URL. On success, if the edited message was sent by the bot, the edited Message is returned, otherwise True is returned.
   * @param {InputMedia} media A JSON-serialized object for a new media content of the message
   * @param {Object} [options]
   * @param {Integer | String} [options.chatId] Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
   * @param {Integer} [options.messageId] Required if inline_message_id is not specified. Identifier of the message to edit
   * @param {String} [options.inlineMessageId] Required if chat_id and message_id are not specified. Identifier of the inline message
   * @param {InlineKeyboardMarkup} [options.replyMarkup] A JSON-serialized object for a new inline keyboard.
   * @returns {Promise<Object>}
   */
  async editMessageMedia(media, options = {}) {
    return this._request("editMessageMedia", {
      queryOptions: { media, ...options },
    });
  }

  /** Use this method to edit only the reply markup of messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
   * @param {Object} [options]
   * @param {Integer | String} [options.chatId] Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
   * @param {Integer} [options.messageId] Required if inline_message_id is not specified. Identifier of the message to edit
   * @param {String} [options.inlineMessageId] Required if chat_id and message_id are not specified. Identifier of the inline message
   * @param {InlineKeyboardMarkup} [options.replyMarkup] A JSON-serialized object for an inline keyboard.
   * @returns {Promise<Object>}
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
   * @returns {Promise<Object>}
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
   * @returns {Promise<Object>}
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
   * @returns {Promise<Object>}
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
   * @returns {Promise<Object>}
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
   * @returns {Promise<Object>}
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
   * @returns {Promise<Object>}
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
   * @returns {Promise<Object>}
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
   * @returns {Promise<Object>}
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
   * @returns {Promise<Object>}
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
   * @returns {Promise<Object>}
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
   * @returns {Promise<Object>}
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
   * @returns {Promise<Object>}
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
   * @returns {Promise<Object>}
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
   * @returns {Promise<Object>}
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
   * @returns {Promise<Object>}
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
   * @returns {Promise<Object>}
   */
  async setGameScore(userId, score, options = {}) {
    return this._request("setGameScore", {
      queryOptions: { userId, score, ...options },
    });
  }
}

module.exports = TelegramBot;
