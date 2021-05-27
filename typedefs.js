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
