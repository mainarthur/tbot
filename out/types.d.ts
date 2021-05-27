/**
 * @property updateId - The update's unique identifier. Update identifiers start from a certain positive number and increase sequentially. This ID becomes especially handy if you're using Webhooks, since it allows you to ignore repeated updates or to restore the correct update sequence, should they get out of order. If there are no new updates for at least a week, then identifier of the next update will be chosen randomly instead of sequentially.
 * @property [message] - Optional. New incoming message of any kind — text, photo, sticker, etc.
 * @property [editedMessage] - Optional. New version of a message that is known to the bot and was edited
 * @property [channelPost] - Optional. New incoming channel post of any kind — text, photo, sticker, etc.
 * @property [editedChannelPost] - Optional. New version of a channel post that is known to the bot and was edited
 * @property [inlineQuery] - Optional. New incoming inline query
 * @property [chosenInlineResult] - Optional. The result of an inline query that was chosen by a user and sent to their chat partner. Please see our documentation on the feedback collecting for details on how to enable these updates for your bot.
 * @property [callbackQuery] - Optional. New incoming callback query
 * @property [shippingQuery] - Optional. New incoming shipping query. Only for invoices with flexible price
 * @property [preCheckoutQuery] - Optional. New incoming pre-checkout query. Contains full information about checkout
 * @property [poll] - Optional. New poll state. Bots receive only updates about stopped polls and polls, which are sent by the bot
 * @property [pollAnswer] - Optional. A user changed their answer in a non-anonymous poll. Bots receive new votes only in polls that were sent by the bot itself.
 * @property [myChatMember] - Optional. The bot's chat member status was updated in a chat. For private chats, this update is received only when the bot is blocked or unblocked by the user.
 * @property [chatMember] - Optional. A chat member's status was updated in a chat. The bot must be an administrator in the chat and must explicitly specify “chat_member” in the list of allowed_updates to receive these updates.
 */
declare type Update = {
    updateId: Integer;
    message?: Message;
    editedMessage?: Message;
    channelPost?: Message;
    editedChannelPost?: Message;
    inlineQuery?: InlineQuery;
    chosenInlineResult?: ChosenInlineResult;
    callbackQuery?: CallbackQuery;
    shippingQuery?: ShippingQuery;
    preCheckoutQuery?: PreCheckoutQuery;
    poll?: Poll;
    pollAnswer?: PollAnswer;
    myChatMember?: ChatMemberUpdated;
    chatMember?: ChatMemberUpdated;
};

declare type Integer = number;

declare type Float = number;

declare type True = boolean;

declare type InputFile = any;

declare type InlineQueryResult = InlineQueryResultArticle | InlineQueryResultAudio | InlineQueryResultCachedAudio | InlineQueryResultCachedDocument | InlineQueryResultCachedGif | InlineQueryResultArticle | InlineQueryResultPhoto | InlineQueryResultGif | InlineQueryResultMpeg4Gif | InlineQueryResultAudio | InlineQueryResultVoice | InlineQueryResultDocument | InlineQueryResultLocation | InlineQueryResultVenue | InlineQueryResultContact | InlineQueryResultGame | InlineQueryResultCachedPhoto | InlineQueryResultCachedGif | InlineQueryResultCachedMpeg4Gif | InlineQueryResultCachedSticker | InlineQueryResultCachedDocument | InlineQueryResultCachedVideo | InlineQueryResultCachedVoice | InlineQueryResultCachedAudio;

declare type InputMessageContent = InputTextMessageContent | InputLocationMessageContent | InputVenueMessageContent | InputContactMessageContent | InputInvoiceMessageContent;

declare type InputMedia = InputMediaAnimation | InputMediaDocument | InputMediaAudio | InputMediaPhoto | InputMediaVideo;

declare type VoiceChatStarted = any;

/**
 * @property url - An HTTP URL to be opened with user authorization data added to the query string when the button is pressed. If the user refuses to provide authorization data, the original URL without information about the user will be opened. The data added is the same as described in Receiving authorization data. NOTE: You must always check the hash of the received data to verify the authentication and the integrity of the data as described in Checking authorization.
 * @property [forwardText] - Optional. New text of the button in forwarded messages.
 * @property [botUsername] - Optional. Username of a bot, which will be used for user authorization. See Setting up a bot for more details. If not specified, the current bot's username will be assumed. The url's domain must be the same as the domain linked with the bot. See Linking your domain to the bot for more details.
 */
declare type LoginUrl = {
    url: string;
    forwardText?: string;
    botUsername?: string;
};

declare type CallbackGame = any;

/**
 * This object represents a Telegram user or bot.
 * @property id - Unique identifier for this user or bot. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier.
 * @property isBot - True, if this user is a bot
 * @property firstName - User's or bot's first name
 * @property [lastName] - Optional. User's or bot's last name
 * @property [username] - Optional. User's or bot's username
 * @property [languageCode] - Optional. IETF language tag of the user's language
 * @property [canJoinGroups] - Optional. True, if the bot can be invited to groups. Returned only in getMe.
 * @property [canReadAllGroupMessages] - Optional. True, if privacy mode is disabled for the bot. Returned only in getMe.
 * @property [supportsInlineQueries] - Optional. True, if the bot supports inline queries. Returned only in getMe.
 */
declare type User = {
    id: Integer;
    isBot: boolean;
    firstName: string;
    lastName?: string;
    username?: string;
    languageCode?: string;
    canJoinGroups?: boolean;
    canReadAllGroupMessages?: boolean;
    supportsInlineQueries?: boolean;
};

/**
 * This object represents a chat.
 * @property id - Unique identifier for this chat. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier.
 * @property type - Type of chat, can be either “private”, “group”, “supergroup” or “channel”
 * @property [title] - Optional. Title, for supergroups, channels and group chats
 * @property [username] - Optional. Username, for private chats, supergroups and channels if available
 * @property [firstName] - Optional. First name of the other party in a private chat
 * @property [lastName] - Optional. Last name of the other party in a private chat
 * @property [photo] - Optional. Chat photo. Returned only in getChat.
 * @property [bio] - Optional. Bio of the other party in a private chat. Returned only in getChat.
 * @property [description] - Optional. Description, for groups, supergroups and channel chats. Returned only in getChat.
 * @property [inviteLink] - Optional. Primary invite link, for groups, supergroups and channel chats. Returned only in getChat.
 * @property [pinnedMessage] - Optional. The most recent pinned message (by sending date). Returned only in getChat.
 * @property [permissions] - Optional. Default chat member permissions, for groups and supergroups. Returned only in getChat.
 * @property [slowModeDelay] - Optional. For supergroups, the minimum allowed delay between consecutive messages sent by each unpriviledged user. Returned only in getChat.
 * @property [messageAutoDeleteTime] - Optional. The time after which all messages sent to the chat will be automatically deleted; in seconds. Returned only in getChat.
 * @property [stickerSetName] - Optional. For supergroups, name of group sticker set. Returned only in getChat.
 * @property [canSetStickerSet] - Optional. True, if the bot can change the group sticker set. Returned only in getChat.
 * @property [linkedChatId] - Optional. Unique identifier for the linked chat, i.e. the discussion group identifier for a channel and vice versa; for supergroups and channel chats. This identifier may be greater than 32 bits and some programming languages may have difficulty/silent defects in interpreting it. But it is smaller than 52 bits, so a signed 64 bit integer or double-precision float type are safe for storing this identifier. Returned only in getChat.
 * @property [location] - Optional. For supergroups, the location to which the supergroup is connected. Returned only in getChat.
 */
declare type Chat = {
    id: Integer;
    type: string;
    title?: string;
    username?: string;
    firstName?: string;
    lastName?: string;
    photo?: ChatPhoto;
    bio?: string;
    description?: string;
    inviteLink?: string;
    pinnedMessage?: Message;
    permissions?: ChatPermissions;
    slowModeDelay?: Integer;
    messageAutoDeleteTime?: Integer;
    stickerSetName?: string;
    canSetStickerSet?: boolean;
    linkedChatId?: Integer;
    location?: ChatLocation;
};

/**
 * This object represents a message.
 * @property messageId - Unique message identifier inside this chat
 * @property [from] - Optional. Sender, empty for messages sent to channels
 * @property [senderChat] - Optional. Sender of the message, sent on behalf of a chat. The channel itself for channel messages. The supergroup itself for messages from anonymous group administrators. The linked channel for messages automatically forwarded to the discussion group
 * @property date - Date the message was sent in Unix time
 * @property chat - Conversation the message belongs to
 * @property [forwardFrom] - Optional. For forwarded messages, sender of the original message
 * @property [forwardFromChat] - Optional. For messages forwarded from channels or from anonymous administrators, information about the original sender chat
 * @property [forwardFromMessageId] - Optional. For messages forwarded from channels, identifier of the original message in the channel
 * @property [forwardSignature] - Optional. For messages forwarded from channels, signature of the post author if present
 * @property [forwardSenderName] - Optional. Sender's name for messages forwarded from users who disallow adding a link to their account in forwarded messages
 * @property [forwardDate] - Optional. For forwarded messages, date the original message was sent in Unix time
 * @property [replyToMessage] - Optional. For replies, the original message. Note that the Message object in this field will not contain further reply_to_message fields even if it itself is a reply.
 * @property [viaBot] - Optional. Bot through which the message was sent
 * @property [editDate] - Optional. Date the message was last edited in Unix time
 * @property [mediaGroupId] - Optional. The unique identifier of a media message group this message belongs to
 * @property [authorSignature] - Optional. Signature of the post author for messages in channels, or the custom title of an anonymous group administrator
 * @property [text] - Optional. For text messages, the actual UTF-8 text of the message, 0-4096 characters
 * @property [entities] - Optional. For text messages, special entities like usernames, URLs, bot commands, etc. that appear in the text
 * @property [animation] - Optional. Message is an animation, information about the animation. For backward compatibility, when this field is set, the document field will also be set
 * @property [audio] - Optional. Message is an audio file, information about the file
 * @property [document] - Optional. Message is a general file, information about the file
 * @property [photo] - Optional. Message is a photo, available sizes of the photo
 * @property [sticker] - Optional. Message is a sticker, information about the sticker
 * @property [video] - Optional. Message is a video, information about the video
 * @property [videoNote] - Optional. Message is a video note, information about the video message
 * @property [voice] - Optional. Message is a voice message, information about the file
 * @property [caption] - Optional. Caption for the animation, audio, document, photo, video or voice, 0-1024 characters
 * @property [captionEntities] - Optional. For messages with a caption, special entities like usernames, URLs, bot commands, etc. that appear in the caption
 * @property [contact] - Optional. Message is a shared contact, information about the contact
 * @property [dice] - Optional. Message is a dice with random value
 * @property [game] - Optional. Message is a game, information about the game. More about games »
 * @property [poll] - Optional. Message is a native poll, information about the poll
 * @property [venue] - Optional. Message is a venue, information about the venue. For backward compatibility, when this field is set, the location field will also be set
 * @property [location] - Optional. Message is a shared location, information about the location
 * @property [newChatMembers] - Optional. New members that were added to the group or supergroup and information about them (the bot itself may be one of these members)
 * @property [leftChatMember] - Optional. A member was removed from the group, information about them (this member may be the bot itself)
 * @property [newChatTitle] - Optional. A chat title was changed to this value
 * @property [newChatPhoto] - Optional. A chat photo was change to this value
 * @property [deleteChatPhoto] - Optional. Service message: the chat photo was deleted
 * @property [groupChatCreated] - Optional. Service message: the group has been created
 * @property [supergroupChatCreated] - Optional. Service message: the supergroup has been created. This field can't be received in a message coming through updates, because bot can't be a member of a supergroup when it is created. It can only be found in reply_to_message if someone replies to a very first message in a directly created supergroup.
 * @property [channelChatCreated] - Optional. Service message: the channel has been created. This field can't be received in a message coming through updates, because bot can't be a member of a channel when it is created. It can only be found in reply_to_message if someone replies to a very first message in a channel.
 * @property [messageAutoDeleteTimerChanged] - Optional. Service message: auto-delete timer settings changed in the chat
 * @property [migrateToChatId] - Optional. The group has been migrated to a supergroup with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier.
 * @property [migrateFromChatId] - Optional. The supergroup has been migrated from a group with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier.
 * @property [pinnedMessage] - Optional. Specified message was pinned. Note that the Message object in this field will not contain further reply_to_message fields even if it is itself a reply.
 * @property [invoice] - Optional. Message is an invoice for a payment, information about the invoice. More about payments »
 * @property [successfulPayment] - Optional. Message is a service message about a successful payment, information about the payment. More about payments »
 * @property [connectedWebsite] - Optional. The domain name of the website on which the user has logged in. More about Telegram Login »
 * @property [passportData] - Optional. Telegram Passport data
 * @property [proximityAlertTriggered] - Optional. Service message. A user in the chat triggered another user's proximity alert while sharing Live TelegramLocation.
 * @property [voiceChatScheduled] - Optional. Service message: voice chat scheduled
 * @property [voiceChatStarted] - Optional. Service message: voice chat started
 * @property [voiceChatEnded] - Optional. Service message: voice chat ended
 * @property [voiceChatParticipantsInvited] - Optional. Service message: new participants invited to a voice chat
 * @property [replyMarkup] - Optional. Inline keyboard attached to the message. login_url buttons are represented as ordinary url buttons.
 */
declare type Message = {
    messageId: Integer;
    from?: User;
    senderChat?: Chat;
    date: Integer;
    chat: Chat;
    forwardFrom?: User;
    forwardFromChat?: Chat;
    forwardFromMessageId?: Integer;
    forwardSignature?: string;
    forwardSenderName?: string;
    forwardDate?: Integer;
    replyToMessage?: Message;
    viaBot?: User;
    editDate?: Integer;
    mediaGroupId?: string;
    authorSignature?: string;
    text?: string;
    entities?: MessageEntity[];
    animation?: TelegramAnimation;
    audio?: Audio;
    document?: TelegramDocument;
    photo?: PhotoSize[];
    sticker?: Sticker;
    video?: Video;
    videoNote?: VideoNote;
    voice?: Voice;
    caption?: string;
    captionEntities?: MessageEntity[];
    contact?: Contact;
    dice?: Dice;
    game?: Game;
    poll?: Poll;
    venue?: Venue;
    location?: TelegramLocation;
    newChatMembers?: User[];
    leftChatMember?: User;
    newChatTitle?: string;
    newChatPhoto?: PhotoSize[];
    deleteChatPhoto?: True;
    groupChatCreated?: True;
    supergroupChatCreated?: True;
    channelChatCreated?: True;
    messageAutoDeleteTimerChanged?: MessageAutoDeleteTimerChanged;
    migrateToChatId?: Integer;
    migrateFromChatId?: Integer;
    pinnedMessage?: Message;
    invoice?: Invoice;
    successfulPayment?: SuccessfulPayment;
    connectedWebsite?: string;
    passportData?: PassportData;
    proximityAlertTriggered?: ProximityAlertTriggered;
    voiceChatScheduled?: VoiceChatScheduled;
    voiceChatStarted?: VoiceChatStarted;
    voiceChatEnded?: VoiceChatEnded;
    voiceChatParticipantsInvited?: VoiceChatParticipantsInvited;
    replyMarkup?: InlineKeyboardMarkup;
};

/**
 * This object represents a unique message identifier.
 * @property messageId - Unique message identifier
 */
declare type MessageId = {
    messageId: Integer;
};

/**
 * This object represents one special entity in a text message. For example, hashtags, usernames, URLs, etc.
 * @property type - Type of the entity. Can be “mention” (@username), “hashtag” (#hashtag), “cashtag” ($USD), “bot_command” (/start@jobs_bot), “url” (https://telegram.org), “email” (do-not-reply@telegram.org), “phone_number” (+1-212-555-0123), “bold” (bold text), “italic” (italic text), “underline” (underlined text), “strikethrough” (strikethrough text), “code” (monowidth string), “pre” (monowidth block), “text_link” (for clickable text URLs), “text_mention” (for users without usernames)
 * @property offset - Offset in UTF-16 code units to the start of the entity
 * @property length - Length of the entity in UTF-16 code units
 * @property [url] - Optional. For “text_link” only, url that will be opened after user taps on the text
 * @property [user] - Optional. For “text_mention” only, the mentioned user
 * @property [language] - Optional. For “pre” only, the programming language of the entity text
 */
declare type MessageEntity = {
    type: string;
    offset: Integer;
    length: Integer;
    url?: string;
    user?: User;
    language?: string;
};

/**
 * This object represents one size of a photo or a file / sticker thumbnail.
 * @property fileId - Identifier for this file, which can be used to download or reuse the file
 * @property fileUniqueId - Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
 * @property width - Photo width
 * @property height - Photo height
 * @property [fileSize] - Optional. File size
 */
declare type PhotoSize = {
    fileId: string;
    fileUniqueId: string;
    width: Integer;
    height: Integer;
    fileSize?: Integer;
};

/**
 * This object represents an animation file (GIF or H.264/MPEG-4 AVC video without sound).
 * @property fileId - Identifier for this file, which can be used to download or reuse the file
 * @property fileUniqueId - Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
 * @property width - Video width as defined by sender
 * @property height - Video height as defined by sender
 * @property duration - Duration of the video in seconds as defined by sender
 * @property [thumb] - Optional. TelegramAnimation thumbnail as defined by sender
 * @property [fileName] - Optional. Original animation filename as defined by sender
 * @property [mimeType] - Optional. MIME type of the file as defined by sender
 * @property [fileSize] - Optional. File size
 */
declare type TelegramAnimation = {
    fileId: string;
    fileUniqueId: string;
    width: Integer;
    height: Integer;
    duration: Integer;
    thumb?: PhotoSize;
    fileName?: string;
    mimeType?: string;
    fileSize?: Integer;
};

/**
 * This object represents an audio file to be treated as music by the Telegram clients.
 * @property fileId - Identifier for this file, which can be used to download or reuse the file
 * @property fileUniqueId - Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
 * @property duration - Duration of the audio in seconds as defined by sender
 * @property [performer] - Optional. Performer of the audio as defined by sender or by audio tags
 * @property [title] - Optional. Title of the audio as defined by sender or by audio tags
 * @property [fileName] - Optional. Original filename as defined by sender
 * @property [mimeType] - Optional. MIME type of the file as defined by sender
 * @property [fileSize] - Optional. File size
 * @property [thumb] - Optional. Thumbnail of the album cover to which the music file belongs
 */
declare type Audio = {
    fileId: string;
    fileUniqueId: string;
    duration: Integer;
    performer?: string;
    title?: string;
    fileName?: string;
    mimeType?: string;
    fileSize?: Integer;
    thumb?: PhotoSize;
};

/**
 * This object represents a general file (as opposed to photos, voice messages and audio files).
 * @property fileId - Identifier for this file, which can be used to download or reuse the file
 * @property fileUniqueId - Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
 * @property [thumb] - Optional. TelegramDocument thumbnail as defined by sender
 * @property [fileName] - Optional. Original filename as defined by sender
 * @property [mimeType] - Optional. MIME type of the file as defined by sender
 * @property [fileSize] - Optional. File size
 */
declare type TelegramDocument = {
    fileId: string;
    fileUniqueId: string;
    thumb?: PhotoSize;
    fileName?: string;
    mimeType?: string;
    fileSize?: Integer;
};

/**
 * This object represents a video file.
 * @property fileId - Identifier for this file, which can be used to download or reuse the file
 * @property fileUniqueId - Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
 * @property width - Video width as defined by sender
 * @property height - Video height as defined by sender
 * @property duration - Duration of the video in seconds as defined by sender
 * @property [thumb] - Optional. Video thumbnail
 * @property [fileName] - Optional. Original filename as defined by sender
 * @property [mimeType] - Optional. Mime type of a file as defined by sender
 * @property [fileSize] - Optional. File size
 */
declare type Video = {
    fileId: string;
    fileUniqueId: string;
    width: Integer;
    height: Integer;
    duration: Integer;
    thumb?: PhotoSize;
    fileName?: string;
    mimeType?: string;
    fileSize?: Integer;
};

/**
 * This object represents a video message (available in Telegram apps as of v.4.0).
 * @property fileId - Identifier for this file, which can be used to download or reuse the file
 * @property fileUniqueId - Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
 * @property length - Video width and height (diameter of the video message) as defined by sender
 * @property duration - Duration of the video in seconds as defined by sender
 * @property [thumb] - Optional. Video thumbnail
 * @property [fileSize] - Optional. File size
 */
declare type VideoNote = {
    fileId: string;
    fileUniqueId: string;
    length: Integer;
    duration: Integer;
    thumb?: PhotoSize;
    fileSize?: Integer;
};

/**
 * This object represents a voice note.
 * @property fileId - Identifier for this file, which can be used to download or reuse the file
 * @property fileUniqueId - Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
 * @property duration - Duration of the audio in seconds as defined by sender
 * @property [mimeType] - Optional. MIME type of the file as defined by sender
 * @property [fileSize] - Optional. File size
 */
declare type Voice = {
    fileId: string;
    fileUniqueId: string;
    duration: Integer;
    mimeType?: string;
    fileSize?: Integer;
};

/**
 * This object represents a phone contact.
 * @property phoneNumber - Contact's phone number
 * @property firstName - Contact's first name
 * @property [lastName] - Optional. Contact's last name
 * @property [userId] - Optional. Contact's user identifier in Telegram. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier.
 * @property [vcard] - Optional. Additional data about the contact in the form of a vCard
 */
declare type Contact = {
    phoneNumber: string;
    firstName: string;
    lastName?: string;
    userId?: Integer;
    vcard?: string;
};

/**
 * This object represents an animated emoji that displays a random value.
 * @property emoji - Emoji on which the dice throw animation is based
 * @property value - Value of the dice, 1-6 for “”, “” and “” base emoji, 1-5 for “” and “” base emoji, 1-64 for “” base emoji
 */
declare type Dice = {
    emoji: string;
    value: Integer;
};

/**
 * This object contains information about one answer option in a poll.
 * @property text - Option text, 1-100 characters
 * @property voterCount - Number of users that voted for this option
 */
declare type PollOption = {
    text: string;
    voterCount: Integer;
};

/**
 * This object represents an answer of a user in a non-anonymous poll.
 * @property pollId - Unique poll identifier
 * @property user - The user, who changed the answer to the poll
 * @property optionIds - 0-based identifiers of answer options, chosen by the user. May be empty if the user retracted their vote.
 */
declare type PollAnswer = {
    pollId: string;
    user: User;
    optionIds: Integer[];
};

/**
 * This object contains information about a poll.
 * @property id - Unique poll identifier
 * @property question - Poll question, 1-300 characters
 * @property options - List of poll options
 * @property totalVoterCount - Total number of users that voted in the poll
 * @property isClosed - True, if the poll is closed
 * @property isAnonymous - True, if the poll is anonymous
 * @property type - Poll type, currently can be “regular” or “quiz”
 * @property allowsMultipleAnswers - True, if the poll allows multiple answers
 * @property [correctOptionId] - Optional. 0-based identifier of the correct answer option. Available only for polls in the quiz mode, which are closed, or was sent (not forwarded) by the bot or to the private chat with the bot.
 * @property [explanation] - Optional. Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters
 * @property [explanationEntities] - Optional. Special entities like usernames, URLs, bot commands, etc. that appear in the explanation
 * @property [openPeriod] - Optional. Amount of time in seconds the poll will be active after creation
 * @property [closeDate] - Optional. Point in time (Unix timestamp) when the poll will be automatically closed
 */
declare type Poll = {
    id: string;
    question: string;
    options: PollOption[];
    totalVoterCount: Integer;
    isClosed: boolean;
    isAnonymous: boolean;
    type: string;
    allowsMultipleAnswers: boolean;
    correctOptionId?: Integer;
    explanation?: string;
    explanationEntities?: MessageEntity[];
    openPeriod?: Integer;
    closeDate?: Integer;
};

/**
 * This object represents a point on the map.
 * @property longitude - Longitude as defined by sender
 * @property latitude - Latitude as defined by sender
 * @property [horizontalAccuracy] - Optional. The radius of uncertainty for the location, measured in meters; 0-1500
 * @property [livePeriod] - Optional. Time relative to the message sending date, during which the location can be updated, in seconds. For active live locations only.
 * @property [heading] - Optional. The direction in which user is moving, in degrees; 1-360. For active live locations only.
 * @property [proximityAlertRadius] - Optional. Maximum distance for proximity alerts about approaching another chat member, in meters. For sent live locations only.
 */
declare type TelegramLocation = {
    longitude: Float;
    latitude: Float;
    horizontalAccuracy?: Float;
    livePeriod?: Integer;
    heading?: Integer;
    proximityAlertRadius?: Integer;
};

/**
 * This object represents a venue.
 * @property location - Venue location. Can't be a live location
 * @property title - Name of the venue
 * @property address - Address of the venue
 * @property [foursquareId] - Optional. Foursquare identifier of the venue
 * @property [foursquareType] - Optional. Foursquare type of the venue. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.)
 * @property [googlePlaceId] - Optional. Google Places identifier of the venue
 * @property [googlePlaceType] - Optional. Google Places type of the venue. (See supported types.)
 */
declare type Venue = {
    location: TelegramLocation;
    title: string;
    address: string;
    foursquareId?: string;
    foursquareType?: string;
    googlePlaceId?: string;
    googlePlaceType?: string;
};

/**
 * This object represents the content of a service message, sent whenever a user in the chat triggers a proximity alert set by another user.
 * @property traveler - User that triggered the alert
 * @property watcher - User that set the alert
 * @property distance - The distance between the users
 */
declare type ProximityAlertTriggered = {
    traveler: User;
    watcher: User;
    distance: Integer;
};

/**
 * This object represents a service message about a change in auto-delete timer settings.
 * @property messageAutoDeleteTime - New auto-delete time for messages in the chat
 */
declare type MessageAutoDeleteTimerChanged = {
    messageAutoDeleteTime: Integer;
};

/**
 * This object represents a service message about a voice chat scheduled in the chat.
 * @property startDate - Point in time (Unix timestamp) when the voice chat is supposed to be started by a chat administrator
 */
declare type VoiceChatScheduled = {
    startDate: Integer;
};

/**
 * This object represents a service message about a voice chat ended in the chat.
 * @property duration - Voice chat duration; in seconds
 */
declare type VoiceChatEnded = {
    duration: Integer;
};

/**
 * This object represents a service message about new members invited to a voice chat.
 * @property [users] - Optional. New members that were invited to the voice chat
 */
declare type VoiceChatParticipantsInvited = {
    users?: User[];
};

/**
 * This object represent a user's profile pictures.
 * @property totalCount - Total number of profile pictures the target user has
 * @property photos - Requested profile pictures (in up to 4 sizes each)
 */
declare type UserProfilePhotos = {
    totalCount: Integer;
    photos: PhotoSize[][];
};

/**
 * This object represents a custom keyboard with reply options (see Introduction to bots for details and examples).
 * @property keyboard - button[] rows, each represented by an KeyboardButton[] objects
 * @property [resizeKeyboard] - Optional. Requests clients to resize the keyboard vertically for optimal fit (e.g., make the keyboard smaller if there are just two rows of buttons). Defaults to false, in which case the custom keyboard is always of the same height as the app's standard keyboard.
 * @property [oneTimeKeyboard] - Optional. Requests clients to hide the keyboard as soon as it's been used. The keyboard will still be available, but clients will automatically display the usual letter-keyboard in the chat – the user can press a special button in the input field to see the custom keyboard again. Defaults to false.
 * @property [selective] - Optional. Use this parameter if you want to show the keyboard to specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply (has reply_to_message_id), sender of the original message. Example: A user requests to change the bot's language, bot replies to the request with a keyboard to select the new language. Other users in the group don't see the keyboard.
 */
declare type ReplyKeyboardMarkup = {
    keyboard: KeyboardButton[][];
    resizeKeyboard?: boolean;
    oneTimeKeyboard?: boolean;
    selective?: boolean;
};

/**
 * This object represents one button of the reply keyboard. For simple text buttons String can be used instead of this object to specify text of the button. Optional fields request_contact, request_location, and request_poll are mutually exclusive.
 * @property text - Text of the button. If none of the optional fields are used, it will be sent as a message when the button is pressed
 * @property [requestContact] - Optional. If True, the user's phone number will be sent as a contact when the button is pressed. Available in private chats only
 * @property [requestLocation] - Optional. If True, the user's current location will be sent when the button is pressed. Available in private chats only
 * @property [requestPoll] - Optional. If specified, the user will be asked to create a poll and send it to the bot when the button is pressed. Available in private chats only
 */
declare type KeyboardButton = {
    text: string;
    requestContact?: boolean;
    requestLocation?: boolean;
    requestPoll?: KeyboardButtonPollType;
};

/**
 * This object represents type of a poll, which is allowed to be created and sent when the corresponding button is pressed.
 * @property [type] - Optional. If quiz is passed, the user will be allowed to create only polls in the quiz mode. If regular is passed, only regular polls will be allowed. Otherwise, the user will be allowed to create a poll of any type.
 */
declare type KeyboardButtonPollType = {
    type?: string;
};

/**
 * Upon receiving a message with this object, Telegram clients will remove the current custom keyboard and display the default letter-keyboard. By default, custom keyboards are displayed until a new keyboard is sent by a bot. An exception is made for one-time keyboards that are hidden immediately after the user presses a button (see ReplyKeyboardMarkup).
 * @property removeKeyboard - Requests clients to remove the custom keyboard (user will not be able to summon this keyboard; if you want to hide the keyboard from sight but keep it accessible, use one_time_keyboard in ReplyKeyboardMarkup)
 * @property [selective] - Optional. Use this parameter if you want to remove the keyboard for specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply (has reply_to_message_id), sender of the original message.
 *
 * Example: A user votes in a poll, bot returns confirmation message in reply to the vote and removes the keyboard for that user, while still showing the keyboard with poll options to users who haven't voted yet.
 */
declare type ReplyKeyboardRemove = {
    removeKeyboard: True;
    selective?: boolean;
};

/**
 * This object represents an inline keyboard that appears right next to the message it belongs to.
 * @property inlineKeyboard - button[] rows, each represented by an InlineKeyboardButton[] objects
 */
declare type InlineKeyboardMarkup = {
    inlineKeyboard: InlineKeyboardButton[][];
};

/**
 * This object represents one button of an inline keyboard. You must use exactly one of the optional fields.
 * @property text - Label text on the button
 * @property [url] - Optional. HTTP or tg:// url to be opened when button is pressed
 * @property [loginUrl] - Optional. An HTTP URL used to automatically authorize the user. Can be used as a replacement for the Telegram Login Widget.
 * @property [callbackData] - Optional. Data to be sent in a callback query to the bot when button is pressed, 1-64 bytes
 * @property [switchInlineQuery] - Optional. If set, pressing the button will prompt the user to select one of their chats, open that chat and insert the bot's username and the specified inline query in the input field. Can be empty, in which case just the bot's username will be inserted.
 *
 * Note: This offers an easy way for users to start using your bot in inline mode when they are currently in a private chat with it. Especially useful when combined with switch_pm… actions – in this case the user will be automatically returned to the chat they switched from, skipping the chat selection screen.
 * @property [switchInlineQueryCurrentChat] - Optional. If set, pressing the button will insert the bot's username and the specified inline query in the current chat's input field. Can be empty, in which case only the bot's username will be inserted.
 *
 * This offers a quick way for the user to open your bot in inline mode in the same chat – good for selecting something from multiple options.
 * @property [callbackGame] - Optional. Description of the game that will be launched when the user presses the button.
 *
 * NOTE: This type of button must always be the first button in the first row.
 * @property [pay] - Optional. Specify True, to send a Pay button.
 *
 * NOTE: This type of button must always be the first button in the first row.
 */
declare type InlineKeyboardButton = {
    text: string;
    url?: string;
    loginUrl?: LoginUrl;
    callbackData?: string;
    switchInlineQuery?: string;
    switchInlineQueryCurrentChat?: string;
    callbackGame?: CallbackGame;
    pay?: boolean;
};

/**
 * This object represents an incoming callback query from a callback button in an inline keyboard. If the button that originated the query was attached to a message sent by the bot, the field message will be present. If the button was attached to a message sent via the bot (in inline mode), the field inline_message_id will be present. Exactly one of the fields data or game_short_name will be present.
 * @property id - Unique identifier for this query
 * @property from - Sender
 * @property [message] - Optional. Message with the callback button that originated the query. Note that message content and message date will not be available if the message is too old
 * @property [inlineMessageId] - Optional. Identifier of the message sent via the bot in inline mode, that originated the query.
 * @property chatInstance - Global identifier, uniquely corresponding to the chat to which the message with the callback button was sent. Useful for high scores in games.
 * @property [data] - Optional. Data associated with the callback button. Be aware that a bad client can send arbitrary data in this field.
 * @property [gameShortName] - Optional. Short name of a Game to be returned, serves as the unique identifier for the game
 */
declare type CallbackQuery = {
    id: string;
    from: User;
    message?: Message;
    inlineMessageId?: string;
    chatInstance: string;
    data?: string;
    gameShortName?: string;
};

/**
 * Upon receiving a message with this object, Telegram clients will display a reply interface to the user (act as if the user has selected the bot's message and tapped 'Reply'). This can be extremely useful if you want to create user-friendly step-by-step interfaces without having to sacrifice privacy mode.
 * @property forceReply - Shows reply interface to the user, as if they manually selected the bot's message and tapped 'Reply'
 * @property [selective] - Optional. Use this parameter if you want to force reply from specific users only. Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply (has reply_to_message_id), sender of the original message.
 */
declare type ForceReply = {
    forceReply: True;
    selective?: boolean;
};

/**
 * This object represents a chat photo.
 * @property smallFileId - File identifier of small (160x160) chat photo. This file_id can be used only for photo download and only for as long as the photo is not changed.
 * @property smallFileUniqueId - Unique file identifier of small (160x160) chat photo, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
 * @property bigFileId - File identifier of big (640x640) chat photo. This file_id can be used only for photo download and only for as long as the photo is not changed.
 * @property bigFileUniqueId - Unique file identifier of big (640x640) chat photo, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
 */
declare type ChatPhoto = {
    smallFileId: string;
    smallFileUniqueId: string;
    bigFileId: string;
    bigFileUniqueId: string;
};

/**
 * Represents an invite link for a chat.
 * @property inviteLink - The invite link. If the link was created by another chat administrator, then the second part of the link will be replaced with “…”.
 * @property creator - Creator of the link
 * @property isPrimary - True, if the link is primary
 * @property isRevoked - True, if the link is revoked
 * @property [expireDate] - Optional. Point in time (Unix timestamp) when the link will expire or has been expired
 * @property [memberLimit] - Optional. Maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999
 */
declare type ChatInviteLink = {
    inviteLink: string;
    creator: User;
    isPrimary: boolean;
    isRevoked: boolean;
    expireDate?: Integer;
    memberLimit?: Integer;
};

/**
 * This object contains information about one member of a chat.
 * @property user - Information about the user
 * @property status - The member's status in the chat. Can be “creator”, “administrator”, “member”, “restricted”, “left” or “kicked”
 * @property [customTitle] - Optional. Owner and administrators only. Custom title for this user
 * @property [isAnonymous] - Optional. Owner and administrators only. True, if the user's presence in the chat is hidden
 * @property [canBeEdited] - Optional. Administrators only. True, if the bot is allowed to edit administrator privileges of that user
 * @property [canManageChat] - Optional. Administrators only. True, if the administrator can access the chat event log, chat statistics, message statistics in channels, see channel members, see anonymous administrators in supergroups and ignore slow mode. Implied by any other administrator privilege
 * @property [canPostMessages] - Optional. Administrators only. True, if the administrator can post in the channel; channels only
 * @property [canEditMessages] - Optional. Administrators only. True, if the administrator can edit messages of other users and can pin messages; channels only
 * @property [canDeleteMessages] - Optional. Administrators only. True, if the administrator can delete messages of other users
 * @property [canManageVoiceChats] - Optional. Administrators only. True, if the administrator can manage voice chats
 * @property [canRestrictMembers] - Optional. Administrators only. True, if the administrator can restrict, ban or unban chat members
 * @property [canPromoteMembers] - Optional. Administrators only. True, if the administrator can add new administrators with a subset of their own privileges or demote administrators that he has promoted, directly or indirectly (promoted by administrators that were appointed by the user)
 * @property [canChangeInfo] - Optional. Administrators and restricted only. True, if the user is allowed to change the chat title, photo and other settings
 * @property [canInviteUsers] - Optional. Administrators and restricted only. True, if the user is allowed to invite new users to the chat
 * @property [canPinMessages] - Optional. Administrators and restricted only. True, if the user is allowed to pin messages; groups and supergroups only
 * @property [isMember] - Optional. Restricted only. True, if the user is a member of the chat at the moment of the request
 * @property [canSendMessages] - Optional. Restricted only. True, if the user is allowed to send text messages, contacts, locations and venues
 * @property [canSendMediaMessages] - Optional. Restricted only. True, if the user is allowed to send audios, documents, photos, videos, video notes and voice notes
 * @property [canSendPolls] - Optional. Restricted only. True, if the user is allowed to send polls
 * @property [canSendOtherMessages] - Optional. Restricted only. True, if the user is allowed to send animations, games, stickers and use inline bots
 * @property [canAddWebPagePreviews] - Optional. Restricted only. True, if the user is allowed to add web page previews to their messages
 * @property [untilDate] - Optional. Restricted and kicked only. Date when restrictions will be lifted for this user; unix time
 */
declare type ChatMember = {
    user: User;
    status: string;
    customTitle?: string;
    isAnonymous?: boolean;
    canBeEdited?: boolean;
    canManageChat?: boolean;
    canPostMessages?: boolean;
    canEditMessages?: boolean;
    canDeleteMessages?: boolean;
    canManageVoiceChats?: boolean;
    canRestrictMembers?: boolean;
    canPromoteMembers?: boolean;
    canChangeInfo?: boolean;
    canInviteUsers?: boolean;
    canPinMessages?: boolean;
    isMember?: boolean;
    canSendMessages?: boolean;
    canSendMediaMessages?: boolean;
    canSendPolls?: boolean;
    canSendOtherMessages?: boolean;
    canAddWebPagePreviews?: boolean;
    untilDate?: Integer;
};

/**
 * This object represents changes in the status of a chat member.
 * @property chat - Chat the user belongs to
 * @property from - Performer of the action, which resulted in the change
 * @property date - Date the change was done in Unix time
 * @property oldChatMember - Previous information about the chat member
 * @property newChatMember - New information about the chat member
 * @property [inviteLink] - Optional. Chat invite link, which was used by the user to join the chat; for joining by invite link events only.
 */
declare type ChatMemberUpdated = {
    chat: Chat;
    from: User;
    date: Integer;
    oldChatMember: ChatMember;
    newChatMember: ChatMember;
    inviteLink?: ChatInviteLink;
};

/**
 * Describes actions that a non-administrator user is allowed to take in a chat.
 * @property [canSendMessages] - Optional. True, if the user is allowed to send text messages, contacts, locations and venues
 * @property [canSendMediaMessages] - Optional. True, if the user is allowed to send audios, documents, photos, videos, video notes and voice notes, implies can_send_messages
 * @property [canSendPolls] - Optional. True, if the user is allowed to send polls, implies can_send_messages
 * @property [canSendOtherMessages] - Optional. True, if the user is allowed to send animations, games, stickers and use inline bots, implies can_send_media_messages
 * @property [canAddWebPagePreviews] - Optional. True, if the user is allowed to add web page previews to their messages, implies can_send_media_messages
 * @property [canChangeInfo] - Optional. True, if the user is allowed to change the chat title, photo and other settings. Ignored in public supergroups
 * @property [canInviteUsers] - Optional. True, if the user is allowed to invite new users to the chat
 * @property [canPinMessages] - Optional. True, if the user is allowed to pin messages. Ignored in public supergroups
 */
declare type ChatPermissions = {
    canSendMessages?: boolean;
    canSendMediaMessages?: boolean;
    canSendPolls?: boolean;
    canSendOtherMessages?: boolean;
    canAddWebPagePreviews?: boolean;
    canChangeInfo?: boolean;
    canInviteUsers?: boolean;
    canPinMessages?: boolean;
};

/**
 * Represents a location to which a chat is connected.
 * @property location - The location to which the supergroup is connected. Can't be a live location.
 * @property address - TelegramLocation address; 1-64 characters, as defined by the chat owner
 */
declare type ChatLocation = {
    location: TelegramLocation;
    address: string;
};

/**
 * This object represents a bot command.
 * @property command - Text of the command, 1-32 characters. Can contain only lowercase English letters, digits and underscores.
 * @property description - Description of the command, 3-256 characters.
 */
declare type BotCommand = {
    command: string;
    description: string;
};

/**
 * Contains information about why a request was unsuccessful.
 * @property [migrateToChatId] - Optional. The group has been migrated to a supergroup with the specified identifier. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier.
 * @property [retryAfter] - Optional. In case of exceeding flood control, the number of seconds left to wait before the request can be repeated
 */
declare type ResponseParameters = {
    migrateToChatId?: Integer;
    retryAfter?: Integer;
};

/**
 * Represents a photo to be sent.
 * @property type - Type of the result, must be photo
 * @property media - File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://” to upload a new one using multipart/form-data under  name. More info on Sending Files »
 * @property [caption] - Optional. Caption of the photo to be sent, 0-1024 characters after entities parsing
 * @property [parseMode] - Optional. Mode for parsing entities in the photo caption. See formatting options for more details.
 * @property [captionEntities] - Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
 */
declare type InputMediaPhoto = {
    type: string;
    media: string;
    caption?: string;
    parseMode?: string;
    captionEntities?: MessageEntity[];
};

/**
 * Represents a video to be sent.
 * @property type - Type of the result, must be video
 * @property media - File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://” to upload a new one using multipart/form-data under  name. More info on Sending Files »
 * @property [thumb] - Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://” if the thumbnail was uploaded using multipart/form-data under . More info on Sending Files »
 * @property [caption] - Optional. Caption of the video to be sent, 0-1024 characters after entities parsing
 * @property [parseMode] - Optional. Mode for parsing entities in the video caption. See formatting options for more details.
 * @property [captionEntities] - Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property [width] - Optional. Video width
 * @property [height] - Optional. Video height
 * @property [duration] - Optional. Video duration
 * @property [supportsStreaming] - Optional. Pass True, if the uploaded video is suitable for streaming
 */
declare type InputMediaVideo = {
    type: string;
    media: string;
    thumb?: InputFile | string;
    caption?: string;
    parseMode?: string;
    captionEntities?: MessageEntity[];
    width?: Integer;
    height?: Integer;
    duration?: Integer;
    supportsStreaming?: boolean;
};

/**
 * Represents an animation file (GIF or H.264/MPEG-4 AVC video without sound) to be sent.
 * @property type - Type of the result, must be animation
 * @property media - File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://” to upload a new one using multipart/form-data under  name. More info on Sending Files »
 * @property [thumb] - Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://” if the thumbnail was uploaded using multipart/form-data under . More info on Sending Files »
 * @property [caption] - Optional. Caption of the animation to be sent, 0-1024 characters after entities parsing
 * @property [parseMode] - Optional. Mode for parsing entities in the animation caption. See formatting options for more details.
 * @property [captionEntities] - Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property [width] - Optional. TelegramAnimation width
 * @property [height] - Optional. TelegramAnimation height
 * @property [duration] - Optional. TelegramAnimation duration
 */
declare type InputMediaAnimation = {
    type: string;
    media: string;
    thumb?: InputFile | string;
    caption?: string;
    parseMode?: string;
    captionEntities?: MessageEntity[];
    width?: Integer;
    height?: Integer;
    duration?: Integer;
};

/**
 * Represents an audio file to be treated as music to be sent.
 * @property type - Type of the result, must be audio
 * @property media - File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://” to upload a new one using multipart/form-data under  name. More info on Sending Files »
 * @property [thumb] - Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://” if the thumbnail was uploaded using multipart/form-data under . More info on Sending Files »
 * @property [caption] - Optional. Caption of the audio to be sent, 0-1024 characters after entities parsing
 * @property [parseMode] - Optional. Mode for parsing entities in the audio caption. See formatting options for more details.
 * @property [captionEntities] - Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property [duration] - Optional. Duration of the audio in seconds
 * @property [performer] - Optional. Performer of the audio
 * @property [title] - Optional. Title of the audio
 */
declare type InputMediaAudio = {
    type: string;
    media: string;
    thumb?: InputFile | string;
    caption?: string;
    parseMode?: string;
    captionEntities?: MessageEntity[];
    duration?: Integer;
    performer?: string;
    title?: string;
};

/**
 * Represents a general file to be sent.
 * @property type - Type of the result, must be document
 * @property media - File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass “attach://” to upload a new one using multipart/form-data under  name. More info on Sending Files »
 * @property [thumb] - Optional. Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://” if the thumbnail was uploaded using multipart/form-data under . More info on Sending Files »
 * @property [caption] - Optional. Caption of the document to be sent, 0-1024 characters after entities parsing
 * @property [parseMode] - Optional. Mode for parsing entities in the document caption. See formatting options for more details.
 * @property [captionEntities] - Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property [disableContentTypeDetection] - Optional. Disables automatic server-side content type detection for files uploaded using multipart/form-data. Always true, if the document is sent as part of an album.
 */
declare type InputMediaDocument = {
    type: string;
    media: string;
    thumb?: InputFile | string;
    caption?: string;
    parseMode?: string;
    captionEntities?: MessageEntity[];
    disableContentTypeDetection?: boolean;
};

/**
 * This object represents a sticker.
 * @property fileId - Identifier for this file, which can be used to download or reuse the file
 * @property fileUniqueId - Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
 * @property width - Sticker width
 * @property height - Sticker height
 * @property isAnimated - True, if the sticker is animated
 * @property [thumb] - Optional. Sticker thumbnail in the .WEBP or .JPG format
 * @property [emoji] - Optional. Emoji associated with the sticker
 * @property [setName] - Optional. Name of the sticker set to which the sticker belongs
 * @property [maskPosition] - Optional. For mask stickers, the position where the mask should be placed
 * @property [fileSize] - Optional. File size
 */
declare type Sticker = {
    fileId: string;
    fileUniqueId: string;
    width: Integer;
    height: Integer;
    isAnimated: boolean;
    thumb?: PhotoSize;
    emoji?: string;
    setName?: string;
    maskPosition?: MaskPosition;
    fileSize?: Integer;
};

/**
 * This object represents a sticker set.
 * @property name - Sticker set name
 * @property title - Sticker set title
 * @property isAnimated - True, if the sticker set contains animated stickers
 * @property containsMasks - True, if the sticker set contains masks
 * @property stickers - List of all set stickers
 * @property [thumb] - Optional. Sticker set thumbnail in the .WEBP or .TGS format
 */
declare type StickerSet = {
    name: string;
    title: string;
    isAnimated: boolean;
    containsMasks: boolean;
    stickers: Sticker[];
    thumb?: PhotoSize;
};

/**
 * This object describes the position on faces where a mask should be placed by default.
 * @property point - The part of the face relative to which the mask should be placed. One of “forehead”, “eyes”, “mouth”, or “chin”.
 * @property xShift - Shift by X-axis measured in widths of the mask scaled to the face size, from left to right. For example, choosing -1.0 will place mask just to the left of the default mask position.
 * @property yShift - Shift by Y-axis measured in heights of the mask scaled to the face size, from top to bottom. For example, 1.0 will place the mask just below the default mask position.
 * @property scale - Mask scaling coefficient. For example, 2.0 means double size.
 */
declare type MaskPosition = {
    point: string;
    xShift: Float;
    yShift: Float;
    scale: Float;
};

/**
 * This object represents an incoming inline query. When the user sends an empty query, your bot could return some default or trending results.
 * @property id - Unique identifier for this query
 * @property from - Sender
 * @property query - Text of the query (up to 256 characters)
 * @property offset - Offset of the results to be returned, can be controlled by the bot
 * @property [chatType] - Optional. Type of the chat, from which the inline query was sent. Can be either “sender” for a private chat with the inline query sender, “private”, “group”, “supergroup”, or “channel”. The chat type should be always known for requests sent from official clients and most third-party clients, unless the request was sent from a secret chat
 * @property [location] - Optional. Sender location, only for bots that request user location
 */
declare type InlineQuery = {
    id: string;
    from: User;
    query: string;
    offset: string;
    chatType?: string;
    location?: TelegramLocation;
};

/**
 * Represents a link to an article or web page.
 * @property type - Type of the result, must be article
 * @property id - Unique identifier for this result, 1-64 Bytes
 * @property title - Title of the result
 * @property inputMessageContent - Content of the message to be sent
 * @property [replyMarkup] - Optional. Inline keyboard attached to the message
 * @property [url] - Optional. URL of the result
 * @property [hideUrl] - Optional. Pass True, if you don't want the URL to be shown in the message
 * @property [description] - Optional. Short description of the result
 * @property [thumbUrl] - Optional. Url of the thumbnail for the result
 * @property [thumbWidth] - Optional. Thumbnail width
 * @property [thumbHeight] - Optional. Thumbnail height
 */
declare type InlineQueryResultArticle = {
    type: string;
    id: string;
    title: string;
    inputMessageContent: InputMessageContent;
    replyMarkup?: InlineKeyboardMarkup;
    url?: string;
    hideUrl?: boolean;
    description?: string;
    thumbUrl?: string;
    thumbWidth?: Integer;
    thumbHeight?: Integer;
};

/**
 * Represents a link to a photo. By default, this photo will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the photo.
 * @property type - Type of the result, must be photo
 * @property id - Unique identifier for this result, 1-64 bytes
 * @property photoUrl - A valid URL of the photo. Photo must be in jpeg format. Photo size must not exceed 5MB
 * @property thumbUrl - URL of the thumbnail for the photo
 * @property [photoWidth] - Optional. Width of the photo
 * @property [photoHeight] - Optional. Height of the photo
 * @property [title] - Optional. Title for the result
 * @property [description] - Optional. Short description of the result
 * @property [caption] - Optional. Caption of the photo to be sent, 0-1024 characters after entities parsing
 * @property [parseMode] - Optional. Mode for parsing entities in the photo caption. See formatting options for more details.
 * @property [captionEntities] - Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property [replyMarkup] - Optional. Inline keyboard attached to the message
 * @property [inputMessageContent] - Optional. Content of the message to be sent instead of the photo
 */
declare type InlineQueryResultPhoto = {
    type: string;
    id: string;
    photoUrl: string;
    thumbUrl: string;
    photoWidth?: Integer;
    photoHeight?: Integer;
    title?: string;
    description?: string;
    caption?: string;
    parseMode?: string;
    captionEntities?: MessageEntity[];
    replyMarkup?: InlineKeyboardMarkup;
    inputMessageContent?: InputMessageContent;
};

/**
 * Represents a link to an animated GIF file. By default, this animated GIF file will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation.
 * @property type - Type of the result, must be gif
 * @property id - Unique identifier for this result, 1-64 bytes
 * @property gifUrl - A valid URL for the GIF file. File size must not exceed 1MB
 * @property [gifWidth] - Optional. Width of the GIF
 * @property [gifHeight] - Optional. Height of the GIF
 * @property [gifDuration] - Optional. Duration of the GIF
 * @property thumbUrl - URL of the static (JPEG or GIF) or animated (MPEG4) thumbnail for the result
 * @property [thumbMimeType] - Optional. MIME type of the thumbnail, must be one of “image/jpeg”, “image/gif”, or “video/mp4”. Defaults to “image/jpeg”
 * @property [title] - Optional. Title for the result
 * @property [caption] - Optional. Caption of the GIF file to be sent, 0-1024 characters after entities parsing
 * @property [parseMode] - Optional. Mode for parsing entities in the caption. See formatting options for more details.
 * @property [captionEntities] - Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property [replyMarkup] - Optional. Inline keyboard attached to the message
 * @property [inputMessageContent] - Optional. Content of the message to be sent instead of the GIF animation
 */
declare type InlineQueryResultGif = {
    type: string;
    id: string;
    gifUrl: string;
    gifWidth?: Integer;
    gifHeight?: Integer;
    gifDuration?: Integer;
    thumbUrl: string;
    thumbMimeType?: string;
    title?: string;
    caption?: string;
    parseMode?: string;
    captionEntities?: MessageEntity[];
    replyMarkup?: InlineKeyboardMarkup;
    inputMessageContent?: InputMessageContent;
};

/**
 * Represents a link to a video animation (H.264/MPEG-4 AVC video without sound). By default, this animated MPEG-4 file will be sent by the user with optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation.
 * @property type - Type of the result, must be mpeg4_gif
 * @property id - Unique identifier for this result, 1-64 bytes
 * @property mpeg4Url - A valid URL for the MP4 file. File size must not exceed 1MB
 * @property [mpeg4Width] - Optional. Video width
 * @property [mpeg4Height] - Optional. Video height
 * @property [mpeg4Duration] - Optional. Video duration
 * @property thumbUrl - URL of the static (JPEG or GIF) or animated (MPEG4) thumbnail for the result
 * @property [thumbMimeType] - Optional. MIME type of the thumbnail, must be one of “image/jpeg”, “image/gif”, or “video/mp4”. Defaults to “image/jpeg”
 * @property [title] - Optional. Title for the result
 * @property [caption] - Optional. Caption of the MPEG-4 file to be sent, 0-1024 characters after entities parsing
 * @property [parseMode] - Optional. Mode for parsing entities in the caption. See formatting options for more details.
 * @property [captionEntities] - Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property [replyMarkup] - Optional. Inline keyboard attached to the message
 * @property [inputMessageContent] - Optional. Content of the message to be sent instead of the video animation
 */
declare type InlineQueryResultMpeg4Gif = {
    type: string;
    id: string;
    mpeg4Url: string;
    mpeg4Width?: Integer;
    mpeg4Height?: Integer;
    mpeg4Duration?: Integer;
    thumbUrl: string;
    thumbMimeType?: string;
    title?: string;
    caption?: string;
    parseMode?: string;
    captionEntities?: MessageEntity[];
    replyMarkup?: InlineKeyboardMarkup;
    inputMessageContent?: InputMessageContent;
};

/**
 * Represents a link to an MP3 audio file. By default, this audio file will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the audio.
 * @property type - Type of the result, must be audio
 * @property id - Unique identifier for this result, 1-64 bytes
 * @property audioUrl - A valid URL for the audio file
 * @property title - Title
 * @property [caption] - Optional. Caption, 0-1024 characters after entities parsing
 * @property [parseMode] - Optional. Mode for parsing entities in the audio caption. See formatting options for more details.
 * @property [captionEntities] - Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property [performer] - Optional. Performer
 * @property [audioDuration] - Optional. Audio duration in seconds
 * @property [replyMarkup] - Optional. Inline keyboard attached to the message
 * @property [inputMessageContent] - Optional. Content of the message to be sent instead of the audio
 */
declare type InlineQueryResultAudio = {
    type: string;
    id: string;
    audioUrl: string;
    title: string;
    caption?: string;
    parseMode?: string;
    captionEntities?: MessageEntity[];
    performer?: string;
    audioDuration?: Integer;
    replyMarkup?: InlineKeyboardMarkup;
    inputMessageContent?: InputMessageContent;
};

/**
 * Represents a link to a voice recording in an .OGG container encoded with OPUS. By default, this voice recording will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the the voice message.
 * @property type - Type of the result, must be voice
 * @property id - Unique identifier for this result, 1-64 bytes
 * @property voiceUrl - A valid URL for the voice recording
 * @property title - Recording title
 * @property [caption] - Optional. Caption, 0-1024 characters after entities parsing
 * @property [parseMode] - Optional. Mode for parsing entities in the voice message caption. See formatting options for more details.
 * @property [captionEntities] - Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property [voiceDuration] - Optional. Recording duration in seconds
 * @property [replyMarkup] - Optional. Inline keyboard attached to the message
 * @property [inputMessageContent] - Optional. Content of the message to be sent instead of the voice recording
 */
declare type InlineQueryResultVoice = {
    type: string;
    id: string;
    voiceUrl: string;
    title: string;
    caption?: string;
    parseMode?: string;
    captionEntities?: MessageEntity[];
    voiceDuration?: Integer;
    replyMarkup?: InlineKeyboardMarkup;
    inputMessageContent?: InputMessageContent;
};

/**
 * Represents a link to a file. By default, this file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the file. Currently, only .PDF and .ZIP files can be sent using this method.
 * @property type - Type of the result, must be document
 * @property id - Unique identifier for this result, 1-64 bytes
 * @property title - Title for the result
 * @property [caption] - Optional. Caption of the document to be sent, 0-1024 characters after entities parsing
 * @property [parseMode] - Optional. Mode for parsing entities in the document caption. See formatting options for more details.
 * @property [captionEntities] - Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property documentUrl - A valid URL for the file
 * @property mimeType - Mime type of the content of the file, either “application/pdf” or “application/zip”
 * @property [description] - Optional. Short description of the result
 * @property [replyMarkup] - Optional. Inline keyboard attached to the message
 * @property [inputMessageContent] - Optional. Content of the message to be sent instead of the file
 * @property [thumbUrl] - Optional. URL of the thumbnail (jpeg only) for the file
 * @property [thumbWidth] - Optional. Thumbnail width
 * @property [thumbHeight] - Optional. Thumbnail height
 */
declare type InlineQueryResultDocument = {
    type: string;
    id: string;
    title: string;
    caption?: string;
    parseMode?: string;
    captionEntities?: MessageEntity[];
    documentUrl: string;
    mimeType: string;
    description?: string;
    replyMarkup?: InlineKeyboardMarkup;
    inputMessageContent?: InputMessageContent;
    thumbUrl?: string;
    thumbWidth?: Integer;
    thumbHeight?: Integer;
};

/**
 * Represents a location on a map. By default, the location will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the location.
 * @property type - Type of the result, must be location
 * @property id - Unique identifier for this result, 1-64 Bytes
 * @property latitude - TelegramLocation latitude in degrees
 * @property longitude - TelegramLocation longitude in degrees
 * @property title - TelegramLocation title
 * @property [horizontalAccuracy] - Optional. The radius of uncertainty for the location, measured in meters; 0-1500
 * @property [livePeriod] - Optional. Period in seconds for which the location can be updated, should be between 60 and 86400.
 * @property [heading] - Optional. For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.
 * @property [proximityAlertRadius] - Optional. For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.
 * @property [replyMarkup] - Optional. Inline keyboard attached to the message
 * @property [inputMessageContent] - Optional. Content of the message to be sent instead of the location
 * @property [thumbUrl] - Optional. Url of the thumbnail for the result
 * @property [thumbWidth] - Optional. Thumbnail width
 * @property [thumbHeight] - Optional. Thumbnail height
 */
declare type InlineQueryResultLocation = {
    type: string;
    id: string;
    latitude: Float;
    longitude: Float;
    title: string;
    horizontalAccuracy?: Float;
    livePeriod?: Integer;
    heading?: Integer;
    proximityAlertRadius?: Integer;
    replyMarkup?: InlineKeyboardMarkup;
    inputMessageContent?: InputMessageContent;
    thumbUrl?: string;
    thumbWidth?: Integer;
    thumbHeight?: Integer;
};

/**
 * Represents a venue. By default, the venue will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the venue.
 * @property type - Type of the result, must be venue
 * @property id - Unique identifier for this result, 1-64 Bytes
 * @property latitude - Latitude of the venue location in degrees
 * @property longitude - Longitude of the venue location in degrees
 * @property title - Title of the venue
 * @property address - Address of the venue
 * @property [foursquareId] - Optional. Foursquare identifier of the venue if known
 * @property [foursquareType] - Optional. Foursquare type of the venue, if known. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.)
 * @property [googlePlaceId] - Optional. Google Places identifier of the venue
 * @property [googlePlaceType] - Optional. Google Places type of the venue. (See supported types.)
 * @property [replyMarkup] - Optional. Inline keyboard attached to the message
 * @property [inputMessageContent] - Optional. Content of the message to be sent instead of the venue
 * @property [thumbUrl] - Optional. Url of the thumbnail for the result
 * @property [thumbWidth] - Optional. Thumbnail width
 * @property [thumbHeight] - Optional. Thumbnail height
 */
declare type InlineQueryResultVenue = {
    type: string;
    id: string;
    latitude: Float;
    longitude: Float;
    title: string;
    address: string;
    foursquareId?: string;
    foursquareType?: string;
    googlePlaceId?: string;
    googlePlaceType?: string;
    replyMarkup?: InlineKeyboardMarkup;
    inputMessageContent?: InputMessageContent;
    thumbUrl?: string;
    thumbWidth?: Integer;
    thumbHeight?: Integer;
};

/**
 * Represents a contact with a phone number. By default, this contact will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the contact.
 * @property type - Type of the result, must be contact
 * @property id - Unique identifier for this result, 1-64 Bytes
 * @property phoneNumber - Contact's phone number
 * @property firstName - Contact's first name
 * @property [lastName] - Optional. Contact's last name
 * @property [vcard] - Optional. Additional data about the contact in the form of a vCard, 0-2048 bytes
 * @property [replyMarkup] - Optional. Inline keyboard attached to the message
 * @property [inputMessageContent] - Optional. Content of the message to be sent instead of the contact
 * @property [thumbUrl] - Optional. Url of the thumbnail for the result
 * @property [thumbWidth] - Optional. Thumbnail width
 * @property [thumbHeight] - Optional. Thumbnail height
 */
declare type InlineQueryResultContact = {
    type: string;
    id: string;
    phoneNumber: string;
    firstName: string;
    lastName?: string;
    vcard?: string;
    replyMarkup?: InlineKeyboardMarkup;
    inputMessageContent?: InputMessageContent;
    thumbUrl?: string;
    thumbWidth?: Integer;
    thumbHeight?: Integer;
};

/**
 * Represents a Game.
 * @property type - Type of the result, must be game
 * @property id - Unique identifier for this result, 1-64 bytes
 * @property gameShortName - Short name of the game
 * @property [replyMarkup] - Optional. Inline keyboard attached to the message
 */
declare type InlineQueryResultGame = {
    type: string;
    id: string;
    gameShortName: string;
    replyMarkup?: InlineKeyboardMarkup;
};

/**
 * Represents a link to a photo stored on the Telegram servers. By default, this photo will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the photo.
 * @property type - Type of the result, must be photo
 * @property id - Unique identifier for this result, 1-64 bytes
 * @property photoFileId - A valid file identifier of the photo
 * @property [title] - Optional. Title for the result
 * @property [description] - Optional. Short description of the result
 * @property [caption] - Optional. Caption of the photo to be sent, 0-1024 characters after entities parsing
 * @property [parseMode] - Optional. Mode for parsing entities in the photo caption. See formatting options for more details.
 * @property [captionEntities] - Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property [replyMarkup] - Optional. Inline keyboard attached to the message
 * @property [inputMessageContent] - Optional. Content of the message to be sent instead of the photo
 */
declare type InlineQueryResultCachedPhoto = {
    type: string;
    id: string;
    photoFileId: string;
    title?: string;
    description?: string;
    caption?: string;
    parseMode?: string;
    captionEntities?: MessageEntity[];
    replyMarkup?: InlineKeyboardMarkup;
    inputMessageContent?: InputMessageContent;
};

/**
 * Represents a link to an animated GIF file stored on the Telegram servers. By default, this animated GIF file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with specified content instead of the animation.
 * @property type - Type of the result, must be gif
 * @property id - Unique identifier for this result, 1-64 bytes
 * @property gifFileId - A valid file identifier for the GIF file
 * @property [title] - Optional. Title for the result
 * @property [caption] - Optional. Caption of the GIF file to be sent, 0-1024 characters after entities parsing
 * @property [parseMode] - Optional. Mode for parsing entities in the caption. See formatting options for more details.
 * @property [captionEntities] - Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property [replyMarkup] - Optional. Inline keyboard attached to the message
 * @property [inputMessageContent] - Optional. Content of the message to be sent instead of the GIF animation
 */
declare type InlineQueryResultCachedGif = {
    type: string;
    id: string;
    gifFileId: string;
    title?: string;
    caption?: string;
    parseMode?: string;
    captionEntities?: MessageEntity[];
    replyMarkup?: InlineKeyboardMarkup;
    inputMessageContent?: InputMessageContent;
};

/**
 * Represents a link to a video animation (H.264/MPEG-4 AVC video without sound) stored on the Telegram servers. By default, this animated MPEG-4 file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the animation.
 * @property type - Type of the result, must be mpeg4_gif
 * @property id - Unique identifier for this result, 1-64 bytes
 * @property mpeg4FileId - A valid file identifier for the MP4 file
 * @property [title] - Optional. Title for the result
 * @property [caption] - Optional. Caption of the MPEG-4 file to be sent, 0-1024 characters after entities parsing
 * @property [parseMode] - Optional. Mode for parsing entities in the caption. See formatting options for more details.
 * @property [captionEntities] - Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property [replyMarkup] - Optional. Inline keyboard attached to the message
 * @property [inputMessageContent] - Optional. Content of the message to be sent instead of the video animation
 */
declare type InlineQueryResultCachedMpeg4Gif = {
    type: string;
    id: string;
    mpeg4FileId: string;
    title?: string;
    caption?: string;
    parseMode?: string;
    captionEntities?: MessageEntity[];
    replyMarkup?: InlineKeyboardMarkup;
    inputMessageContent?: InputMessageContent;
};

/**
 * Represents a link to a sticker stored on the Telegram servers. By default, this sticker will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the sticker.
 * @property type - Type of the result, must be sticker
 * @property id - Unique identifier for this result, 1-64 bytes
 * @property stickerFileId - A valid file identifier of the sticker
 * @property [replyMarkup] - Optional. Inline keyboard attached to the message
 * @property [inputMessageContent] - Optional. Content of the message to be sent instead of the sticker
 */
declare type InlineQueryResultCachedSticker = {
    type: string;
    id: string;
    stickerFileId: string;
    replyMarkup?: InlineKeyboardMarkup;
    inputMessageContent?: InputMessageContent;
};

/**
 * Represents a link to a file stored on the Telegram servers. By default, this file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the file.
 * @property type - Type of the result, must be document
 * @property id - Unique identifier for this result, 1-64 bytes
 * @property title - Title for the result
 * @property documentFileId - A valid file identifier for the file
 * @property [description] - Optional. Short description of the result
 * @property [caption] - Optional. Caption of the document to be sent, 0-1024 characters after entities parsing
 * @property [parseMode] - Optional. Mode for parsing entities in the document caption. See formatting options for more details.
 * @property [captionEntities] - Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property [replyMarkup] - Optional. Inline keyboard attached to the message
 * @property [inputMessageContent] - Optional. Content of the message to be sent instead of the file
 */
declare type InlineQueryResultCachedDocument = {
    type: string;
    id: string;
    title: string;
    documentFileId: string;
    description?: string;
    caption?: string;
    parseMode?: string;
    captionEntities?: MessageEntity[];
    replyMarkup?: InlineKeyboardMarkup;
    inputMessageContent?: InputMessageContent;
};

/**
 * Represents a link to a video file stored on the Telegram servers. By default, this video file will be sent by the user with an optional caption. Alternatively, you can use input_message_content to send a message with the specified content instead of the video.
 * @property type - Type of the result, must be video
 * @property id - Unique identifier for this result, 1-64 bytes
 * @property videoFileId - A valid file identifier for the video file
 * @property title - Title for the result
 * @property [description] - Optional. Short description of the result
 * @property [caption] - Optional. Caption of the video to be sent, 0-1024 characters after entities parsing
 * @property [parseMode] - Optional. Mode for parsing entities in the video caption. See formatting options for more details.
 * @property [captionEntities] - Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property [replyMarkup] - Optional. Inline keyboard attached to the message
 * @property [inputMessageContent] - Optional. Content of the message to be sent instead of the video
 */
declare type InlineQueryResultCachedVideo = {
    type: string;
    id: string;
    videoFileId: string;
    title: string;
    description?: string;
    caption?: string;
    parseMode?: string;
    captionEntities?: MessageEntity[];
    replyMarkup?: InlineKeyboardMarkup;
    inputMessageContent?: InputMessageContent;
};

/**
 * Represents a link to a voice message stored on the Telegram servers. By default, this voice message will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the voice message.
 * @property type - Type of the result, must be voice
 * @property id - Unique identifier for this result, 1-64 bytes
 * @property voiceFileId - A valid file identifier for the voice message
 * @property title - Voice message title
 * @property [caption] - Optional. Caption, 0-1024 characters after entities parsing
 * @property [parseMode] - Optional. Mode for parsing entities in the voice message caption. See formatting options for more details.
 * @property [captionEntities] - Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property [replyMarkup] - Optional. Inline keyboard attached to the message
 * @property [inputMessageContent] - Optional. Content of the message to be sent instead of the voice message
 */
declare type InlineQueryResultCachedVoice = {
    type: string;
    id: string;
    voiceFileId: string;
    title: string;
    caption?: string;
    parseMode?: string;
    captionEntities?: MessageEntity[];
    replyMarkup?: InlineKeyboardMarkup;
    inputMessageContent?: InputMessageContent;
};

/**
 * Represents a link to an MP3 audio file stored on the Telegram servers. By default, this audio file will be sent by the user. Alternatively, you can use input_message_content to send a message with the specified content instead of the audio.
 * @property type - Type of the result, must be audio
 * @property id - Unique identifier for this result, 1-64 bytes
 * @property audioFileId - A valid file identifier for the audio file
 * @property [caption] - Optional. Caption, 0-1024 characters after entities parsing
 * @property [parseMode] - Optional. Mode for parsing entities in the audio caption. See formatting options for more details.
 * @property [captionEntities] - Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode
 * @property [replyMarkup] - Optional. Inline keyboard attached to the message
 * @property [inputMessageContent] - Optional. Content of the message to be sent instead of the audio
 */
declare type InlineQueryResultCachedAudio = {
    type: string;
    id: string;
    audioFileId: string;
    caption?: string;
    parseMode?: string;
    captionEntities?: MessageEntity[];
    replyMarkup?: InlineKeyboardMarkup;
    inputMessageContent?: InputMessageContent;
};

/**
 * Represents the content of a text message to be sent as the result of an inline query.
 * @property messageText - Text of the message to be sent, 1-4096 characters
 * @property [parseMode] - Optional. Mode for parsing entities in the message text. See formatting options for more details.
 * @property [entities] - Optional. List of special entities that appear in message text, which can be specified instead of parse_mode
 * @property [disableWebPagePreview] - Optional. Disables link previews for links in the sent message
 */
declare type InputTextMessageContent = {
    messageText: string;
    parseMode?: string;
    entities?: MessageEntity[];
    disableWebPagePreview?: boolean;
};

/**
 * Represents the content of a location message to be sent as the result of an inline query.
 * @property latitude - Latitude of the location in degrees
 * @property longitude - Longitude of the location in degrees
 * @property [horizontalAccuracy] - Optional. The radius of uncertainty for the location, measured in meters; 0-1500
 * @property [livePeriod] - Optional. Period in seconds for which the location can be updated, should be between 60 and 86400.
 * @property [heading] - Optional. For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.
 * @property [proximityAlertRadius] - Optional. For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.
 */
declare type InputLocationMessageContent = {
    latitude: Float;
    longitude: Float;
    horizontalAccuracy?: Float;
    livePeriod?: Integer;
    heading?: Integer;
    proximityAlertRadius?: Integer;
};

/**
 * Represents the content of a venue message to be sent as the result of an inline query.
 * @property latitude - Latitude of the venue in degrees
 * @property longitude - Longitude of the venue in degrees
 * @property title - Name of the venue
 * @property address - Address of the venue
 * @property [foursquareId] - Optional. Foursquare identifier of the venue, if known
 * @property [foursquareType] - Optional. Foursquare type of the venue, if known. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.)
 * @property [googlePlaceId] - Optional. Google Places identifier of the venue
 * @property [googlePlaceType] - Optional. Google Places type of the venue. (See supported types.)
 */
declare type InputVenueMessageContent = {
    latitude: Float;
    longitude: Float;
    title: string;
    address: string;
    foursquareId?: string;
    foursquareType?: string;
    googlePlaceId?: string;
    googlePlaceType?: string;
};

/**
 * Represents the content of a contact message to be sent as the result of an inline query.
 * @property phoneNumber - Contact's phone number
 * @property firstName - Contact's first name
 * @property [lastName] - Optional. Contact's last name
 * @property [vcard] - Optional. Additional data about the contact in the form of a vCard, 0-2048 bytes
 */
declare type InputContactMessageContent = {
    phoneNumber: string;
    firstName: string;
    lastName?: string;
    vcard?: string;
};

/**
 * Represents the content of an invoice message to be sent as the result of an inline query.
 * @property title - Product name, 1-32 characters
 * @property description - Product description, 1-255 characters
 * @property payload - Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use for your internal processes.
 * @property providerToken - Payment provider token, obtained via Botfather
 * @property currency - Three-letter ISO 4217 currency code, see more on currencies
 * @property prices - Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.)
 * @property [maxTipAmount] - Optional. The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double). For example, for a maximum tip of US$ 1.45 pass max_tip_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0
 * @property [suggestedTipAmounts] - Optional. A JSON-serialized suggested[] amounts of tip in the smallest units of the currency (integer, not float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max_tip_amount.
 * @property [providerData] - Optional. A JSON-serialized object for data about the invoice, which will be shared with the payment provider. A detailed description of the required fields should be provided by the payment provider.
 * @property [photoUrl] - Optional. URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service. People like it better when they see what they are paying for.
 * @property [photoSize] - Optional. Photo size
 * @property [photoWidth] - Optional. Photo width
 * @property [photoHeight] - Optional. Photo height
 * @property [needName] - Optional. Pass True, if you require the user's full name to complete the order
 * @property [needPhoneNumber] - Optional. Pass True, if you require the user's phone number to complete the order
 * @property [needEmail] - Optional. Pass True, if you require the user's email address to complete the order
 * @property [needShippingAddress] - Optional. Pass True, if you require the user's shipping address to complete the order
 * @property [sendPhoneNumberToProvider] - Optional. Pass True, if user's phone number should be sent to provider
 * @property [sendEmailToProvider] - Optional. Pass True, if user's email address should be sent to provider
 * @property [isFlexible] - Optional. Pass True, if the final price depends on the shipping method
 */
declare type InputInvoiceMessageContent = {
    title: string;
    description: string;
    payload: string;
    providerToken: string;
    currency: string;
    prices: LabeledPrice[];
    maxTipAmount?: Integer;
    suggestedTipAmounts?: Integer[];
    providerData?: string;
    photoUrl?: string;
    photoSize?: Integer;
    photoWidth?: Integer;
    photoHeight?: Integer;
    needName?: boolean;
    needPhoneNumber?: boolean;
    needEmail?: boolean;
    needShippingAddress?: boolean;
    sendPhoneNumberToProvider?: boolean;
    sendEmailToProvider?: boolean;
    isFlexible?: boolean;
};

/**
 * Represents a result of an inline query that was chosen by the user and sent to their chat partner.
 * @property resultId - The unique identifier for the result that was chosen
 * @property from - The user that chose the result
 * @property [location] - Optional. Sender location, only for bots that require user location
 * @property [inlineMessageId] - Optional. Identifier of the sent inline message. Available only if there is an inline keyboard attached to the message. Will be also received in callback queries and can be used to edit the message.
 * @property query - The query that was used to obtain the result
 */
declare type ChosenInlineResult = {
    resultId: string;
    from: User;
    location?: TelegramLocation;
    inlineMessageId?: string;
    query: string;
};

/**
 * This object represents a portion of the price for goods or services.
 * @property label - Portion label
 * @property amount - Price of the product in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).
 */
declare type LabeledPrice = {
    label: string;
    amount: Integer;
};

/**
 * This object contains basic information about an invoice.
 * @property title - Product name
 * @property description - Product description
 * @property startParameter - Unique bot deep-linking parameter that can be used to generate this invoice
 * @property currency - Three-letter ISO 4217 currency code
 * @property totalAmount - Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).
 */
declare type Invoice = {
    title: string;
    description: string;
    startParameter: string;
    currency: string;
    totalAmount: Integer;
};

/**
 * This object represents a shipping address.
 * @property countryCode - ISO 3166-1 alpha-2 country code
 * @property state - State, if applicable
 * @property city - City
 * @property streetLine1 - First line for the address
 * @property streetLine2 - Second line for the address
 * @property postCode - Address post code
 */
declare type ShippingAddress = {
    countryCode: string;
    state: string;
    city: string;
    streetLine1: string;
    streetLine2: string;
    postCode: string;
};

/**
 * This object represents information about an order.
 * @property [name] - Optional. User name
 * @property [phoneNumber] - Optional. User's phone number
 * @property [email] - Optional. User email
 * @property [shippingAddress] - Optional. User shipping address
 */
declare type OrderInfo = {
    name?: string;
    phoneNumber?: string;
    email?: string;
    shippingAddress?: ShippingAddress;
};

/**
 * This object represents one shipping option.
 * @property id - Shipping option identifier
 * @property title - Option title
 * @property prices - List of price portions
 */
declare type ShippingOption = {
    id: string;
    title: string;
    prices: LabeledPrice[];
};

/**
 * This object contains basic information about a successful payment.
 * @property currency - Three-letter ISO 4217 currency code
 * @property totalAmount - Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).
 * @property invoicePayload - Bot specified invoice payload
 * @property [shippingOptionId] - Optional. Identifier of the shipping option chosen by the user
 * @property [orderInfo] - Optional. Order info provided by the user
 * @property telegramPaymentChargeId - Telegram payment identifier
 * @property providerPaymentChargeId - Provider payment identifier
 */
declare type SuccessfulPayment = {
    currency: string;
    totalAmount: Integer;
    invoicePayload: string;
    shippingOptionId?: string;
    orderInfo?: OrderInfo;
    telegramPaymentChargeId: string;
    providerPaymentChargeId: string;
};

/**
 * This object contains information about an incoming shipping query.
 * @property id - Unique query identifier
 * @property from - User who sent the query
 * @property invoicePayload - Bot specified invoice payload
 * @property shippingAddress - User specified shipping address
 */
declare type ShippingQuery = {
    id: string;
    from: User;
    invoicePayload: string;
    shippingAddress: ShippingAddress;
};

/**
 * This object contains information about an incoming pre-checkout query.
 * @property id - Unique query identifier
 * @property from - User who sent the query
 * @property currency - Three-letter ISO 4217 currency code
 * @property totalAmount - Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).
 * @property invoicePayload - Bot specified invoice payload
 * @property [shippingOptionId] - Optional. Identifier of the shipping option chosen by the user
 * @property [orderInfo] - Optional. Order info provided by the user
 */
declare type PreCheckoutQuery = {
    id: string;
    from: User;
    currency: string;
    totalAmount: Integer;
    invoicePayload: string;
    shippingOptionId?: string;
    orderInfo?: OrderInfo;
};

/**
 * Contains information about Telegram Passport data shared with the bot by the user.
 * @property data - Array with information about documents and other Telegram Passport elements that was shared with the bot
 * @property credentials - Encrypted credentials required to decrypt the data
 */
declare type PassportData = {
    data: EncryptedPassportElement[];
    credentials: EncryptedCredentials;
};

/**
 * This object represents a file uploaded to Telegram Passport. Currently all Telegram Passport files are in JPEG format when decrypted and don't exceed 10MB.
 * @property fileId - Identifier for this file, which can be used to download or reuse the file
 * @property fileUniqueId - Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
 * @property fileSize - File size
 * @property fileDate - Unix time when the file was uploaded
 */
declare type PassportFile = {
    fileId: string;
    fileUniqueId: string;
    fileSize: Integer;
    fileDate: Integer;
};

/**
 * Contains information about documents or other Telegram Passport elements shared with the bot by the user.
 * @property type - Element type. One of “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport”, “address”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”, “phone_number”, “email”.
 * @property [data] - Optional. Base64-encoded encrypted Telegram Passport element data provided by the user, available for “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport” and “address” types. Can be decrypted and verified using the accompanying EncryptedCredentials.
 * @property [phoneNumber] - Optional. User's verified phone number, available only for “phone_number” type
 * @property [email] - Optional. User's verified email address, available only for “email” type
 * @property [files] - Optional. encrypted[] files with documents provided by the user, available for “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration” and “temporary_registration” types. Files can be decrypted and verified using the accompanying EncryptedCredentials.
 * @property [frontSide] - Optional. Encrypted file with the front side of the document, provided by the user. Available for “passport”, “driver_license”, “identity_card” and “internal_passport”. The file can be decrypted and verified using the accompanying EncryptedCredentials.
 * @property [reverseSide] - Optional. Encrypted file with the reverse side of the document, provided by the user. Available for “driver_license” and “identity_card”. The file can be decrypted and verified using the accompanying EncryptedCredentials.
 * @property [selfie] - Optional. Encrypted file with the selfie of the user holding a document, provided by the user; available for “passport”, “driver_license”, “identity_card” and “internal_passport”. The file can be decrypted and verified using the accompanying EncryptedCredentials.
 * @property [translation] - Optional. encrypted[] files with translated versions of documents provided by the user. Available if requested for “passport”, “driver_license”, “identity_card”, “internal_passport”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration” and “temporary_registration” types. Files can be decrypted and verified using the accompanying EncryptedCredentials.
 * @property hash - Base64-encoded element hash for using in PassportElementErrorUnspecified
 */
declare type EncryptedPassportElement = {
    type: string;
    data?: string;
    phoneNumber?: string;
    email?: string;
    files?: PassportFile[];
    frontSide?: PassportFile;
    reverseSide?: PassportFile;
    selfie?: PassportFile;
    translation?: PassportFile[];
    hash: string;
};

/**
 * Contains data required for decrypting and authenticating EncryptedPassportElement. See the Telegram Passport Documentation for a complete description of the data decryption and authentication processes.
 * @property data - Base64-encoded encrypted JSON-serialized data with unique user's payload, data hashes and secrets required for EncryptedPassportElement decryption and authentication
 * @property hash - Base64-encoded data hash for data authentication
 * @property secret - Base64-encoded secret, encrypted with the bot's public RSA key, required for data decryption
 */
declare type EncryptedCredentials = {
    data: string;
    hash: string;
    secret: string;
};

/**
 * Represents an issue in one of the data fields that was provided by the user. The error is considered resolved when the field's value changes.
 * @property source - Error source, must be data
 * @property type - The section of the user's Telegram Passport which has the error, one of “personal_details”, “passport”, “driver_license”, “identity_card”, “internal_passport”, “address”
 * @property fieldName - Name of the data field which has the error
 * @property dataHash - Base64-encoded data hash
 * @property message - Error message
 */
declare type PassportElementErrorDataField = {
    source: string;
    type: string;
    fieldName: string;
    dataHash: string;
    message: string;
};

/**
 * Represents an issue with the front side of a document. The error is considered resolved when the file with the front side of the document changes.
 * @property source - Error source, must be front_side
 * @property type - The section of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport”
 * @property fileHash - Base64-encoded hash of the file with the front side of the document
 * @property message - Error message
 */
declare type PassportElementErrorFrontSide = {
    source: string;
    type: string;
    fileHash: string;
    message: string;
};

/**
 * Represents an issue with the reverse side of a document. The error is considered resolved when the file with reverse side of the document changes.
 * @property source - Error source, must be reverse_side
 * @property type - The section of the user's Telegram Passport which has the issue, one of “driver_license”, “identity_card”
 * @property fileHash - Base64-encoded hash of the file with the reverse side of the document
 * @property message - Error message
 */
declare type PassportElementErrorReverseSide = {
    source: string;
    type: string;
    fileHash: string;
    message: string;
};

/**
 * Represents an issue with the selfie with a document. The error is considered resolved when the file with the selfie changes.
 * @property source - Error source, must be selfie
 * @property type - The section of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport”
 * @property fileHash - Base64-encoded hash of the file with the selfie
 * @property message - Error message
 */
declare type PassportElementErrorSelfie = {
    source: string;
    type: string;
    fileHash: string;
    message: string;
};

/**
 * Represents an issue with a document scan. The error is considered resolved when the file with the document scan changes.
 * @property source - Error source, must be file
 * @property type - The section of the user's Telegram Passport which has the issue, one of “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”
 * @property fileHash - Base64-encoded file hash
 * @property message - Error message
 */
declare type PassportElementErrorFile = {
    source: string;
    type: string;
    fileHash: string;
    message: string;
};

/**
 * Represents an issue with a list of scans. The error is considered resolved when the list of files containing the scans changes.
 * @property source - Error source, must be files
 * @property type - The section of the user's Telegram Passport which has the issue, one of “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”
 * @property fileHashes - List of base64-encoded file hashes
 * @property message - Error message
 */
declare type PassportElementErrorFiles = {
    source: string;
    type: string;
    fileHashes: String[];
    message: string;
};

/**
 * Represents an issue with one of the files that constitute the translation of a document. The error is considered resolved when the file changes.
 * @property source - Error source, must be translation_file
 * @property type - Type of element of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”
 * @property fileHash - Base64-encoded file hash
 * @property message - Error message
 */
declare type PassportElementErrorTranslationFile = {
    source: string;
    type: string;
    fileHash: string;
    message: string;
};

/**
 * Represents an issue with the translated version of a document. The error is considered resolved when a file with the document translation change.
 * @property source - Error source, must be translation_files
 * @property type - Type of element of the user's Telegram Passport which has the issue, one of “passport”, “driver_license”, “identity_card”, “internal_passport”, “utility_bill”, “bank_statement”, “rental_agreement”, “passport_registration”, “temporary_registration”
 * @property fileHashes - List of base64-encoded file hashes
 * @property message - Error message
 */
declare type PassportElementErrorTranslationFiles = {
    source: string;
    type: string;
    fileHashes: String[];
    message: string;
};

/**
 * Represents an issue in an unspecified place. The error is considered resolved when new data is added.
 * @property source - Error source, must be unspecified
 * @property type - Type of element of the user's Telegram Passport which has the issue
 * @property elementHash - Base64-encoded element hash
 * @property message - Error message
 */
declare type PassportElementErrorUnspecified = {
    source: string;
    type: string;
    elementHash: string;
    message: string;
};

/**
 * This object represents a game. Use BotFather to create and edit games, their short names will act as unique identifiers.
 * @property title - Title of the game
 * @property description - Description of the game
 * @property photo - Photo that will be displayed in the game message in chats.
 * @property [text] - Optional. Brief description of the game or high scores included in the game message. Can be automatically edited to include current high scores for the game when the bot calls setGameScore, or manually edited using editMessageText. 0-4096 characters.
 * @property [textEntities] - Optional. Special entities that appear in text, such as usernames, URLs, bot commands, etc.
 * @property [animation] - Optional. TelegramAnimation that will be displayed in the game message in chats. Upload via BotFather
 */
declare type Game = {
    title: string;
    description: string;
    photo: PhotoSize[];
    text?: string;
    textEntities?: MessageEntity[];
    animation?: TelegramAnimation;
};

/**
 * This object represents one row of the high scores table for a game.
 * @property position - Position in high score table for the game
 * @property user - User
 * @property score - Score
 */
declare type GameHighScore = {
    position: Integer;
    user: User;
    score: Integer;
};

declare class TelegramBot {
    constructor(token: string, options?: any);
    /**
     * List of all events
     */
    events: String[];
    handleUpdate(update: Update): void;
    /**
     * Use this method to receive incoming updates using long polling (wiki). An Update[] objects is returned.
     * @param [options.offset] - Identifier of the first update to be returned. Must be greater by one than the highest among the identifiers of previously received updates. By default, updates starting with the earliest unconfirmed update are returned. An update is considered confirmed as soon as getUpdates is called with an offset higher than its update_id. The negative offset can be specified to retrieve updates starting from -offset update from the end of the updates queue. All previous updates will forgotten.
     * @param [options.limit] - Limits the number of updates to be retrieved. Values between 1-100 are accepted. Defaults to 100.
     * @param [options.timeout] - Timeout in seconds for long polling. Defaults to 0, i.e. usual short polling. Should be positive, short polling should be used for testing purposes only.
     * @param [options.allowedUpdates] - A JSON-serialized list of the update types you want your bot to receive. For example, specify [“message”, “edited_channel_post”, “callback_query”] to only receive updates of these types. See Update for a complete list of available update types. Specify an empty list to receive all update types except chat_member (default). If not specified, the previous setting will be used.
     *
     * Please note that this parameter doesn't affect updates created before the call to the getUpdates, so unwanted updates may be received for a short period of time.
     */
    getUpdates(options?: {
        offset?: Integer;
        limit?: Integer;
        timeout?: Integer;
        allowedUpdates?: String[];
    }): Promise<Update[]>;
    /**
     * Use this method to remove webhook integration if you decide to switch back to getUpdates. Returns True on success.
     * @param [options.dropPendingUpdates] - Pass True to drop all pending updates
     */
    deleteWebhook(options?: {
        dropPendingUpdates?: boolean;
    }): Promise<object>;
    /**
     * Use this method to send text messages. On success, the sent Message is returned.
     * @param chatId - Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
     * @param text - Text of the message to be sent, 1-4096 characters after entities parsing
     * @param [options.parseMode] - Mode for parsing entities in the message text. See formatting options for more details.
     * @param [options.entities] - List of special entities that appear in message text, which can be specified instead of parse_mode
     * @param [options.disableWebPagePreview] - Disables link previews for links in this message
     * @param [options.disableNotification] - Sends the message silently. Users will receive a notification with no sound.
     * @param [options.replyToMessageId] - If the message is a reply, ID of the original message
     * @param [options.allowSendingWithoutReply] - Pass True, if the message should be sent even if the specified replied-to message is not found
     * @param [options.replyMarkup] - Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
     */
    sendMessage(chatId: Integer | string, text: string, options?: {
        parseMode?: string;
        entities?: MessageEntity[];
        disableWebPagePreview?: boolean;
        disableNotification?: boolean;
        replyToMessageId?: Integer;
        allowSendingWithoutReply?: boolean;
        replyMarkup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
    }): Promise<Message>;
    /**
     * Use this method to forward messages of any kind. Service messages can't be forwarded. On success, the sent Message is returned.
     * @param chatId - Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
     * @param fromChatId - Unique identifier for the chat where the original message was sent (or channel username in the forma* @channelusername)
     * @param messageId - Message identifier in the chat specified in from_chat_id
     * @param [options.disableNotification] - Sends the message silently. Users will receive a notification with no sound.
     */
    forwardMessage(chatId: Integer | string, fromChatId: Integer | string, messageId: Integer, options?: {
        disableNotification?: boolean;
    }): Promise<Message>;
    /**
     * Use this method to copy messages of any kind. Service messages and invoice messages can't be copied. The method is analogous to the method forwardMessage, but the copied message doesn't have a link to the original message. Returns the MessageId of the sent message on success.
     * @param chatId - Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
     * @param fromChatId - Unique identifier for the chat where the original message was sent (or channel username in the forma* @channelusername)
     * @param messageId - Message identifier in the chat specified in from_chat_id
     * @param [options.caption] - New caption for media, 0-1024 characters after entities parsing. If not specified, the original caption is kept
     * @param [options.parseMode] - Mode for parsing entities in the new caption. See formatting options for more details.
     * @param [options.captionEntities] - List of special entities that appear in the new caption, which can be specified instead of parse_mode
     * @param [options.disableNotification] - Sends the message silently. Users will receive a notification with no sound.
     * @param [options.replyToMessageId] - If the message is a reply, ID of the original message
     * @param [options.allowSendingWithoutReply] - Pass True, if the message should be sent even if the specified replied-to message is not found
     * @param [options.replyMarkup] - Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
     */
    copyMessage(chatId: Integer | string, fromChatId: Integer | string, messageId: Integer, options?: {
        caption?: string;
        parseMode?: string;
        captionEntities?: MessageEntity[];
        disableNotification?: boolean;
        replyToMessageId?: Integer;
        allowSendingWithoutReply?: boolean;
        replyMarkup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
    }): Promise<object>;
    /**
     * Use this method to send photos. On success, the sent Message is returned.
     * @param chatId - Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
     * @param photo - Photo to send. Pass a file_id as String to send a photo that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a photo from the Internet, or upload a new photo using multipart/form-data. The photo must be at most 10 MB in size. The photo's width and height must not exceed 10000 in total. Width and height ratio must be at most 20. More info on Sending Files »
     * @param [options.caption] - Photo caption (may also be used when resending photos by file_id), 0-1024 characters after entities parsing
     * @param [options.parseMode] - Mode for parsing entities in the photo caption. See formatting options for more details.
     * @param [options.captionEntities] - List of special entities that appear in the caption, which can be specified instead of parse_mode
     * @param [options.disableNotification] - Sends the message silently. Users will receive a notification with no sound.
     * @param [options.replyToMessageId] - If the message is a reply, ID of the original message
     * @param [options.allowSendingWithoutReply] - Pass True, if the message should be sent even if the specified replied-to message is not found
     * @param [options.replyMarkup] - Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
     */
    sendPhoto(chatId: Integer | string, photo: InputFile | string, options?: {
        caption?: string;
        parseMode?: string;
        captionEntities?: MessageEntity[];
        disableNotification?: boolean;
        replyToMessageId?: Integer;
        allowSendingWithoutReply?: boolean;
        replyMarkup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
    }): Promise<object>;
    /**
     * Use this method to send general files. On success, the sent Message is returned. Bots can currently send files of any type of up to 50 MB in size, this limit may be changed in the future.
     * @param chatId - Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
     * @param document - File to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More info on Sending Files »
     * @param [options.thumb] - Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More info on Sending Files »
     * @param [options.caption] - Document caption (may also be used when resending documents by file_id), 0-1024 characters after entities parsing
     * @param [options.parseMode] - Mode for parsing entities in the document caption. See formatting options for more details.
     * @param [options.captionEntities] - List of special entities that appear in the caption, which can be specified instead of parse_mode
     * @param [options.disableContentTypeDetection] - Disables automatic server-side content type detection for files uploaded using multipart/form-data
     * @param [options.disableNotification] - Sends the message silently. Users will receive a notification with no sound.
     * @param [options.replyToMessageId] - If the message is a reply, ID of the original message
     * @param [options.allowSendingWithoutReply] - Pass True, if the message should be sent even if the specified replied-to message is not found
     * @param [options.replyMarkup] - Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
     */
    sendDocument(chatId: Integer | string, document: InputFile | string, options?: {
        thumb?: InputFile | string;
        caption?: string;
        parseMode?: string;
        captionEntities?: MessageEntity[];
        disableContentTypeDetection?: boolean;
        disableNotification?: boolean;
        replyToMessageId?: Integer;
        allowSendingWithoutReply?: boolean;
        replyMarkup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
    }): Promise<object>;
    /**
     * Use this method to send video files, Telegram clients support mp4 videos (other formats may be sent as Document). On success, the sent Message is returned. Bots can currently send video files of up to 50 MB in size, this limit may be changed in the future.
     * @param chatId - Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
     * @param video - Video to send. Pass a file_id as String to send a video that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a video from the Internet, or upload a new video using multipart/form-data. More info on Sending Files »
     * @param [options.duration] - Duration of sent video in seconds
     * @param [options.width] - Video width
     * @param [options.height] - Video height
     * @param [options.thumb] - Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More info on Sending Files »
     * @param [options.caption] - Video caption (may also be used when resending videos by file_id), 0-1024 characters after entities parsing
     * @param [options.parseMode] - Mode for parsing entities in the video caption. See formatting options for more details.
     * @param [options.captionEntities] - List of special entities that appear in the caption, which can be specified instead of parse_mode
     * @param [options.supportsStreaming] - Pass True, if the uploaded video is suitable for streaming
     * @param [options.disableNotification] - Sends the message silently. Users will receive a notification with no sound.
     * @param [options.replyToMessageId] - If the message is a reply, ID of the original message
     * @param [options.allowSendingWithoutReply] - Pass True, if the message should be sent even if the specified replied-to message is not found
     * @param [options.replyMarkup] - Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
     */
    sendVideo(chatId: Integer | string, video: InputFile | string, options?: {
        duration?: Integer;
        width?: Integer;
        height?: Integer;
        thumb?: InputFile | string;
        caption?: string;
        parseMode?: string;
        captionEntities?: MessageEntity[];
        supportsStreaming?: boolean;
        disableNotification?: boolean;
        replyToMessageId?: Integer;
        allowSendingWithoutReply?: boolean;
        replyMarkup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
    }): Promise<object>;
    /**
     * Use this method to send animation files (GIF or H.264/MPEG-4 AVC video without sound). On success, the sent Message is returned. Bots can currently send animation files of up to 50 MB in size, this limit may be changed in the future.
     * @param chatId - Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
     * @param animation - Animation to send. Pass a file_id as String to send an animation that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an animation from the Internet, or upload a new animation using multipart/form-data. More info on Sending Files »
     * @param [options.duration] - Duration of sent animation in seconds
     * @param [options.width] - Animation width
     * @param [options.height] - Animation height
     * @param [options.thumb] - Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More info on Sending Files »
     * @param [options.caption] - Animation caption (may also be used when resending animation by file_id), 0-1024 characters after entities parsing
     * @param [options.parseMode] - Mode for parsing entities in the animation caption. See formatting options for more details.
     * @param [options.captionEntities] - List of special entities that appear in the caption, which can be specified instead of parse_mode
     * @param [options.disableNotification] - Sends the message silently. Users will receive a notification with no sound.
     * @param [options.replyToMessageId] - If the message is a reply, ID of the original message
     * @param [options.allowSendingWithoutReply] - Pass True, if the message should be sent even if the specified replied-to message is not found
     * @param [options.replyMarkup] - Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
     */
    sendAnimation(chatId: Integer | string, animation: InputFile | string, options?: {
        duration?: Integer;
        width?: Integer;
        height?: Integer;
        thumb?: InputFile | string;
        caption?: string;
        parseMode?: string;
        captionEntities?: MessageEntity[];
        disableNotification?: boolean;
        replyToMessageId?: Integer;
        allowSendingWithoutReply?: boolean;
        replyMarkup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
    }): Promise<object>;
    /**
     * Use this method to send audio files, if you want Telegram clients to display the file as a playable voice message. For this to work, your audio must be in an .OGG file encoded with OPUS (other formats may be sent as Audio or Document). On success, the sent Message is returned. Bots can currently send voice messages of up to 50 MB in size, this limit may be changed in the future.
     * @param chatId - Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
     * @param voice - Audio file to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More info on Sending Files »
     * @param [options.caption] - Voice message caption, 0-1024 characters after entities parsing
     * @param [options.parseMode] - Mode for parsing entities in the voice message caption. See formatting options for more details.
     * @param [options.captionEntities] - List of special entities that appear in the caption, which can be specified instead of parse_mode
     * @param [options.duration] - Duration of the voice message in seconds
     * @param [options.disableNotification] - Sends the message silently. Users will receive a notification with no sound.
     * @param [options.replyToMessageId] - If the message is a reply, ID of the original message
     * @param [options.allowSendingWithoutReply] - Pass True, if the message should be sent even if the specified replied-to message is not found
     * @param [options.replyMarkup] - Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
     */
    sendVoice(chatId: Integer | string, voice: InputFile | string, options?: {
        caption?: string;
        parseMode?: string;
        captionEntities?: MessageEntity[];
        duration?: Integer;
        disableNotification?: boolean;
        replyToMessageId?: Integer;
        allowSendingWithoutReply?: boolean;
        replyMarkup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
    }): Promise<object>;
    /**
     * As of v.4.0, Telegram clients support rounded square mp4 videos of up to 1 minute long. Use this method to send video messages. On success, the sent Message is returned.
     * @param chatId - Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
     * @param videoNote - Video note to send. Pass a file_id as String to send a video note that exists on the Telegram servers (recommended) or upload a new video using multipart/form-data. More info on Sending Files ». Sending video notes by a URL is currently unsupported
     * @param [options.duration] - Duration of sent video in seconds
     * @param [options.length] - Video width and height, i.e. diameter of the video message
     * @param [options.thumb] - Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. More info on Sending Files »
     * @param [options.disableNotification] - Sends the message silently. Users will receive a notification with no sound.
     * @param [options.replyToMessageId] - If the message is a reply, ID of the original message
     * @param [options.allowSendingWithoutReply] - Pass True, if the message should be sent even if the specified replied-to message is not found
     * @param [options.replyMarkup] - Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
     */
    sendVideoNote(chatId: Integer | string, videoNote: InputFile | string, options?: {
        duration?: Integer;
        length?: Integer;
        thumb?: InputFile | string;
        disableNotification?: boolean;
        replyToMessageId?: Integer;
        allowSendingWithoutReply?: boolean;
        replyMarkup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
    }): Promise<object>;
    /**
     * Use this method to send a group of photos, videos, documents or audios as an album. Documents and audio files can be only grouped in an album with messages of the same type. On success, an array of Messages that were sent is returned.
     * @param chatId - Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
     * @param media - A JSON-serialized array describing messages to be sent, must include 2-10 items
     * @param [options.disableNotification] - Sends messages silently. Users will receive a notification with no sound.
     * @param [options.replyToMessageId] - If the messages are a reply, ID of the original message
     * @param [options.allowSendingWithoutReply] - Pass True, if the message should be sent even if the specified replied-to message is not found
     */
    sendMediaGroup(chatId: Integer | string, media: InputMedia[], options?: {
        disableNotification?: boolean;
        replyToMessageId?: Integer;
        allowSendingWithoutReply?: boolean;
    }): Promise<object>;
    /**
     * Use this method to send point on the map. On success, the sent Message is returned.
     * @param chatId - Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
     * @param latitude - Latitude of the location
     * @param longitude - Longitude of the location
     * @param [options.horizontalAccuracy] - The radius of uncertainty for the location, measured in meters; 0-1500
     * @param [options.livePeriod] - Period in seconds for which the location will be updated (see Live Locations, should be between 60 and 86400.
     * @param [options.heading] - For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.
     * @param [options.proximityAlertRadius] - For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.
     * @param [options.disableNotification] - Sends the message silently. Users will receive a notification with no sound.
     * @param [options.replyToMessageId] - If the message is a reply, ID of the original message
     * @param [options.allowSendingWithoutReply] - Pass True, if the message should be sent even if the specified replied-to message is not found
     * @param [options.replyMarkup] - Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
     */
    sendLocation(chatId: Integer | string, latitude: Float, longitude: Float, options?: {
        horizontalAccuracy?: Float;
        livePeriod?: Integer;
        heading?: Integer;
        proximityAlertRadius?: Integer;
        disableNotification?: boolean;
        replyToMessageId?: Integer;
        allowSendingWithoutReply?: boolean;
        replyMarkup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
    }): Promise<object>;
    /**
     * Use this method to edit live location messages. A location can be edited until its live_period expires or editing is explicitly disabled by a call to stopMessageLiveLocation. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
     * @param latitude - Latitude of new location
     * @param longitude - Longitude of new location
     * @param [options.chatId] - Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
     * @param [options.messageId] - Required if inline_message_id is not specified. Identifier of the message to edit
     * @param [options.inlineMessageId] - Required if chat_id and message_id are not specified. Identifier of the inline message
     * @param [options.horizontalAccuracy] - The radius of uncertainty for the location, measured in meters; 0-1500
     * @param [options.heading] - Direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.
     * @param [options.proximityAlertRadius] - Maximum distance for proximity alerts about approaching another chat member, in meters. Must be between 1 and 100000 if specified.
     * @param [options.replyMarkup] - A JSON-serialized object for a new inline keyboard.
     */
    editMessageLiveLocation(latitude: Float, longitude: Float, options?: {
        chatId?: Integer | string;
        messageId?: Integer;
        inlineMessageId?: string;
        horizontalAccuracy?: Float;
        heading?: Integer;
        proximityAlertRadius?: Integer;
        replyMarkup?: InlineKeyboardMarkup;
    }): Promise<object>;
    /**
     * Use this method to stop updating a live location message before live_period expires. On success, if the message was sent by the bot, the sent Message is returned, otherwise True is returned.
     * @param [options.chatId] - Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
     * @param [options.messageId] - Required if inline_message_id is not specified. Identifier of the message with live location to stop
     * @param [options.inlineMessageId] - Required if chat_id and message_id are not specified. Identifier of the inline message
     * @param [options.replyMarkup] - A JSON-serialized object for a new inline keyboard.
     */
    stopMessageLiveLocation(options?: {
        chatId?: Integer | string;
        messageId?: Integer;
        inlineMessageId?: string;
        replyMarkup?: InlineKeyboardMarkup;
    }): Promise<object>;
    /**
     * Use this method to send information about a venue. On success, the sent Message is returned.
     * @param chatId - Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
     * @param latitude - Latitude of the venue
     * @param longitude - Longitude of the venue
     * @param title - Name of the venue
     * @param address - Address of the venue
     * @param [options.foursquareId] - Foursquare identifier of the venue
     * @param [options.foursquareType] - Foursquare type of the venue, if known. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.)
     * @param [options.googlePlaceId] - Google Places identifier of the venue
     * @param [options.googlePlaceType] - Google Places type of the venue. (See supported types.)
     * @param [options.disableNotification] - Sends the message silently. Users will receive a notification with no sound.
     * @param [options.replyToMessageId] - If the message is a reply, ID of the original message
     * @param [options.allowSendingWithoutReply] - Pass True, if the message should be sent even if the specified replied-to message is not found
     * @param [options.replyMarkup] - Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
     */
    sendVenue(chatId: Integer | string, latitude: Float, longitude: Float, title: string, address: string, options?: {
        foursquareId?: string;
        foursquareType?: string;
        googlePlaceId?: string;
        googlePlaceType?: string;
        disableNotification?: boolean;
        replyToMessageId?: Integer;
        allowSendingWithoutReply?: boolean;
        replyMarkup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
    }): Promise<object>;
    /**
     * Use this method to send phone contacts. On success, the sent Message is returned.
     * @param chatId - Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
     * @param phoneNumber - Contact's phone number
     * @param firstName - Contact's first name
     * @param [options.lastName] - Contact's last name
     * @param [options.vcard] - Additional data about the contact in the form of a vCard, 0-2048 bytes
     * @param [options.disableNotification] - Sends the message silently. Users will receive a notification with no sound.
     * @param [options.replyToMessageId] - If the message is a reply, ID of the original message
     * @param [options.allowSendingWithoutReply] - Pass True, if the message should be sent even if the specified replied-to message is not found
     * @param [options.replyMarkup] - Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove keyboard or to force a reply from the user.
     */
    sendContact(chatId: Integer | string, phoneNumber: string, firstName: string, options?: {
        lastName?: string;
        vcard?: string;
        disableNotification?: boolean;
        replyToMessageId?: Integer;
        allowSendingWithoutReply?: boolean;
        replyMarkup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
    }): Promise<object>;
    /**
     * Use this method to send a native poll. On success, the sent Message is returned.
     * @param chatId - Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
     * @param question - Poll question, 1-300 characters
     * @param options - A JSON-serialized list of answer options, 2-10 strings 1-100 characters each
     * @param [extra.isAnonymous] - True, if the poll needs to be anonymous, defaults to True
     * @param [extra.type] - Poll type, “quiz” or “regular”, defaults to “regular”
     * @param [extra.allowsMultipleAnswers] - True, if the poll allows multiple answers, ignored for polls in quiz mode, defaults to False
     * @param [extra.correctOptionId] - 0-based identifier of the correct answer option, required for polls in quiz mode
     * @param [extra.explanation] - Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters with at most 2 line feeds after entities parsing
     * @param [extra.explanationParseMode] - Mode for parsing entities in the explanation. See formatting options for more details.
     * @param [extra.explanationEntities] - List of special entities that appear in the poll explanation, which can be specified instead of parse_mode
     * @param [extra.openPeriod] - Amount of time in seconds the poll will be active after creation, 5-600. Can't be used together with close_date.
     * @param [extra.closeDate] - Point in time (Unix timestamp) when the poll will be automatically closed. Must be at least 5 and no more than 600 seconds in the future. Can't be used together with open_period.
     * @param [extra.isClosed] - Pass True, if the poll needs to be immediately closed. This can be useful for poll preview.
     * @param [extra.disableNotification] - Sends the message silently. Users will receive a notification with no sound.
     * @param [extra.replyToMessageId] - If the message is a reply, ID of the original message
     * @param [extra.allowSendingWithoutReply] - Pass True, if the message should be sent even if the specified replied-to message is not found
     * @param [extra.replyMarkup] - Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
     */
    sendPoll(chatId: Integer | string, question: string, options: String[], extra?: {
        isAnonymous?: boolean;
        type?: string;
        allowsMultipleAnswers?: boolean;
        correctOptionId?: Integer;
        explanation?: string;
        explanationParseMode?: string;
        explanationEntities?: MessageEntity[];
        openPeriod?: Integer;
        closeDate?: Integer;
        isClosed?: boolean;
        disableNotification?: boolean;
        replyToMessageId?: Integer;
        allowSendingWithoutReply?: boolean;
        replyMarkup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
    }): Promise<object>;
    /**
     * Use this method to send an animated emoji that will display a random value. On success, the sent Message is returned.
     * @param chatId - Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
     * @param [options.emoji] - Emoji on which the dice throw animation is based. Currently, must be one of “”, “”, “”, “”, “”, or “”. Dice can have values 1-6 for “”, “” and “”, values 1-5 for “” and “”, and values 1-64 for “”. Defaults to “”
     * @param [options.disableNotification] - Sends the message silently. Users will receive a notification with no sound.
     * @param [options.replyToMessageId] - If the message is a reply, ID of the original message
     * @param [options.allowSendingWithoutReply] - Pass True, if the message should be sent even if the specified replied-to message is not found
     * @param [options.replyMarkup] - Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
     */
    sendDice(chatId: Integer | string, options?: {
        emoji?: string;
        disableNotification?: boolean;
        replyToMessageId?: Integer;
        allowSendingWithoutReply?: boolean;
        replyMarkup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
    }): Promise<object>;
    /**
     * Use this method to get a list of profile pictures for a user. Returns a UserProfilePhotos object.
     * @param userId - Unique identifier of the target user
     * @param [options.offset] - Sequential number of the first photo to be returned. By default, all photos are returned.
     * @param [options.limit] - Limits the number of photos to be retrieved. Values between 1-100 are accepted. Defaults to 100.
     */
    getUserProfilePhotos(userId: Integer, options?: {
        offset?: Integer;
        limit?: Integer;
    }): Promise<object>;
    /**
     * Use this method to get basic info about a file and prepare it for downloading. For the moment, bots can download files of up to 20MB in size. On success, a File object is returned. The file can then be downloaded via the link https://api.telegram.org/file/bot<token>/<file_path>, where <file_path> is taken from the response. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling getFile again.
     * @param fileId - File identifier to get info about
     */
    getFile(fileId: string, options?: any): Promise<object>;
    /**
     * Use this method to kick a user from a group, a supergroup or a channel. In the case of supergroups and channels, the user will not be able to return to the chat on their own using invite links, etc., unless unbanned first. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns True on success.
     * @param chatId - Unique identifier for the target group or username of the target supergroup or channel (in the forma* @channelusername)
     * @param userId - Unique identifier of the target user
     * @param [options.untilDate] - Date when the user will be unbanned, unix time. If user is banned for more than 366 days or less than 30 seconds from the current time they are considered to be banned forever. Applied for supergroups and channels only.
     * @param [options.revokeMessages] - Pass True to delete all messages from the chat for the user that is being removed. If False, the user will be able to see messages in the group that were sent before the user was removed. Always True for supergroups and channels.
     */
    kickChatMember(chatId: Integer | string, userId: Integer, options?: {
        untilDate?: Integer;
        revokeMessages?: boolean;
    }): Promise<object>;
    /**
     * Use this method to unban a previously kicked user in a supergroup or channel. The user will not return to the group or channel automatically, but will be able to join via link, etc. The bot must be an administrator for this to work. By default, this method guarantees that after the call the user is not a member of the chat, but will be able to join it. So if the user is a member of the chat they will also be removed from the chat. If you don't want this, use the parameter only_if_banned. Returns True on success.
     * @param chatId - Unique identifier for the target group or username of the target supergroup or channel (in the forma* @username)
     * @param userId - Unique identifier of the target user
     * @param [options.onlyIfBanned] - Do nothing if the user is not banned
     */
    unbanChatMember(chatId: Integer | string, userId: Integer, options?: {
        onlyIfBanned?: boolean;
    }): Promise<object>;
    /**
     * Use this method to restrict a user in a supergroup. The bot must be an administrator in the supergroup for this to work and must have the appropriate admin rights. Pass True for all permissions to lift restrictions from a user. Returns True on success.
     * @param chatId - Unique identifier for the target chat or username of the target supergroup (in the forma* @supergroupusername)
     * @param userId - Unique identifier of the target user
     * @param permissions - A JSON-serialized object for new user permissions
     * @param [options.untilDate] - Date when restrictions will be lifted for the user, unix time. If user is restricted for more than 366 days or less than 30 seconds from the current time, they are considered to be restricted forever
     */
    restrictChatMember(chatId: Integer | string, userId: Integer, permissions: ChatPermissions, options?: {
        untilDate?: Integer;
    }): Promise<object>;
    /**
     * Use this method to promote or demote a user in a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Pass False for all boolean parameters to demote a user. Returns True on success.
     * @param chatId - Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
     * @param userId - Unique identifier of the target user
     * @param [options.isAnonymous] - Pass True, if the administrator's presence in the chat is hidden
     * @param [options.canManageChat] - Pass True, if the administrator can access the chat event log, chat statistics, message statistics in channels, see channel members, see anonymous administrators in supergroups and ignore slow mode. Implied by any other administrator privilege
     * @param [options.canPostMessages] - Pass True, if the administrator can create channel posts, channels only
     * @param [options.canEditMessages] - Pass True, if the administrator can edit messages of other users and can pin messages, channels only
     * @param [options.canDeleteMessages] - Pass True, if the administrator can delete messages of other users
     * @param [options.canManageVoiceChats] - Pass True, if the administrator can manage voice chats
     * @param [options.canRestrictMembers] - Pass True, if the administrator can restrict, ban or unban chat members
     * @param [options.canPromoteMembers] - Pass True, if the administrator can add new administrators with a subset of their own privileges or demote administrators that he has promoted, directly or indirectly (promoted by administrators that were appointed by him)
     * @param [options.canChangeInfo] - Pass True, if the administrator can change chat title, photo and other settings
     * @param [options.canInviteUsers] - Pass True, if the administrator can invite new users to the chat
     * @param [options.canPinMessages] - Pass True, if the administrator can pin messages, supergroups only
     */
    promoteChatMember(chatId: Integer | string, userId: Integer, options?: {
        isAnonymous?: boolean;
        canManageChat?: boolean;
        canPostMessages?: boolean;
        canEditMessages?: boolean;
        canDeleteMessages?: boolean;
        canManageVoiceChats?: boolean;
        canRestrictMembers?: boolean;
        canPromoteMembers?: boolean;
        canChangeInfo?: boolean;
        canInviteUsers?: boolean;
        canPinMessages?: boolean;
    }): Promise<object>;
    /**
     * Use this method to set a custom title for an administrator in a supergroup promoted by the bot. Returns True on success.
     * @param chatId - Unique identifier for the target chat or username of the target supergroup (in the forma* @supergroupusername)
     * @param userId - Unique identifier of the target user
     * @param customTitle - New custom title for the administrator; 0-16 characters, emoji are not allowed
     */
    setChatAdministratorCustomTitle(chatId: Integer | string, userId: Integer, customTitle: string, options?: any): Promise<object>;
    /**
     * Use this method to set default chat permissions for all members. The bot must be an administrator in the group or a supergroup for this to work and must have the can_restrict_members admin rights. Returns True on success.
     * @param chatId - Unique identifier for the target chat or username of the target supergroup (in the forma* @supergroupusername)
     * @param permissions - New default chat permissions
     */
    setChatPermissions(chatId: Integer | string, permissions: ChatPermissions, options?: any): Promise<object>;
    /**
     * Use this method to generate a new primary invite link for a chat; any previously generated primary link is revoked. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns the new invite link as String on success.
     * @param chatId - Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
     */
    exportChatInviteLink(chatId: Integer | string, options?: any): Promise<object>;
    /**
     * Use this method to create an additional invite link for a chat. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. The link can be revoked using the method revokeChatInviteLink. Returns the new invite link as ChatInviteLink object.
     * @param chatId - Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
     * @param [options.expireDate] - Point in time (Unix timestamp) when the link will expire
     * @param [options.memberLimit] - Maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999
     */
    createChatInviteLink(chatId: Integer | string, options?: {
        expireDate?: Integer;
        memberLimit?: Integer;
    }): Promise<object>;
    /**
     * Use this method to edit a non-primary invite link created by the bot. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns the edited invite link as a ChatInviteLink object.
     * @param chatId - Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
     * @param inviteLink - The invite link to edit
     * @param [options.expireDate] - Point in time (Unix timestamp) when the link will expire
     * @param [options.memberLimit] - Maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999
     */
    editChatInviteLink(chatId: Integer | string, inviteLink: string, options?: {
        expireDate?: Integer;
        memberLimit?: Integer;
    }): Promise<object>;
    /**
     * Use this method to revoke an invite link created by the bot. If the primary link is revoked, a new link is automatically generated. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns the revoked invite link as ChatInviteLink object.
     * @param chatId - Unique identifier of the target chat or username of the target channel (in the forma* @channelusername)
     * @param inviteLink - The invite link to revoke
     */
    revokeChatInviteLink(chatId: Integer | string, inviteLink: string, options?: any): Promise<object>;
    /**
     * Use this method to set a new profile photo for the chat. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns True on success.
     * @param chatId - Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
     * @param photo - New chat photo, uploaded using multipart/form-data
     */
    setChatPhoto(chatId: Integer | string, photo: InputFile, options?: any): Promise<object>;
    /**
     * Use this method to delete a chat photo. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns True on success.
     * @param chatId - Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
     */
    deleteChatPhoto(chatId: Integer | string, options?: any): Promise<object>;
    /**
     * Use this method to change the title of a chat. Titles can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns True on success.
     * @param chatId - Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
     * @param title - New chat title, 1-255 characters
     */
    setChatTitle(chatId: Integer | string, title: string, options?: any): Promise<object>;
    /**
     * Use this method to change the description of a group, a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns True on success.
     * @param chatId - Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
     * @param [options.description] - New chat description, 0-255 characters
     */
    setChatDescription(chatId: Integer | string, options?: {
        description?: string;
    }): Promise<object>;
    /**
     * Use this method to add a message to the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' admin right in a supergroup or 'can_edit_messages' admin right in a channel. Returns True on success.
     * @param chatId - Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
     * @param messageId - Identifier of a message to pin
     * @param [options.disableNotification] - Pass True, if it is not necessary to send a notification to all chat members about the new pinned message. Notifications are always disabled in channels and private chats.
     */
    pinChatMessage(chatId: Integer | string, messageId: Integer, options?: {
        disableNotification?: boolean;
    }): Promise<object>;
    /**
     * Use this method to remove a message from the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' admin right in a supergroup or 'can_edit_messages' admin right in a channel. Returns True on success.
     * @param chatId - Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
     * @param [options.messageId] - Identifier of a message to unpin. If not specified, the most recent pinned message (by sending date) will be unpinned.
     */
    unpinChatMessage(chatId: Integer | string, options?: {
        messageId?: Integer;
    }): Promise<object>;
    /**
     * Use this method to clear the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' admin right in a supergroup or 'can_edit_messages' admin right in a channel. Returns True on success.
     * @param chatId - Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
     */
    unpinAllChatMessages(chatId: Integer | string, options?: any): Promise<object>;
    /**
     * Use this method for your bot to leave a group, supergroup or channel. Returns True on success.
     * @param chatId - Unique identifier for the target chat or username of the target supergroup or channel (in the forma* @channelusername)
     */
    leaveChat(chatId: Integer | string, options?: any): Promise<object>;
    /**
     * Use this method to get up to date information about the chat (current name of the user for one-on-one conversations, current username of a user, group or channel, etc.). Returns a Chat object on success.
     * @param chatId - Unique identifier for the target chat or username of the target supergroup or channel (in the forma* @channelusername)
     */
    getChat(chatId: Integer | string, options?: any): Promise<object>;
    /**
     * Use this method to get a list of administrators in a chat. On success, returns an ChatMember[] objects that contains information about all chat administrators except other bots. If the chat is a group or a supergroup and no administrators were appointed, only the creator will be returned.
     * @param chatId - Unique identifier for the target chat or username of the target supergroup or channel (in the forma* @channelusername)
     */
    getChatAdministrators(chatId: Integer | string, options?: any): Promise<object>;
    /**
     * Use this method to get the number of members in a chat. Returns Int on success.
     * @param chatId - Unique identifier for the target chat or username of the target supergroup or channel (in the forma* @channelusername)
     */
    getChatMembersCount(chatId: Integer | string, options?: any): Promise<object>;
    /**
     * Use this method to get information about a member of a chat. Returns a ChatMember object on success.
     * @param chatId - Unique identifier for the target chat or username of the target supergroup or channel (in the forma* @channelusername)
     * @param userId - Unique identifier of the target user
     */
    getChatMember(chatId: Integer | string, userId: Integer, options?: any): Promise<object>;
    /**
     * Use this method to set a new group sticker set for a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method. Returns True on success.
     * @param chatId - Unique identifier for the target chat or username of the target supergroup (in the forma* @supergroupusername)
     * @param stickerSetName - Name of the sticker set to be set as the group sticker set
     */
    setChatStickerSet(chatId: Integer | string, stickerSetName: string, options?: any): Promise<object>;
    /**
     * Use this method to delete a group sticker set from a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method. Returns True on success.
     * @param chatId - Unique identifier for the target chat or username of the target supergroup (in the forma* @supergroupusername)
     */
    deleteChatStickerSet(chatId: Integer | string, options?: any): Promise<object>;
    /**
     * Use this method to change the list of the bot's commands. Returns True on success.
     * @param commands - A JSON-serialized list of bot commands to be set as the list of the bot's commands. At most 100 commands can be specified.
     */
    setMyCommands(commands: BotCommand[], options?: any): Promise<object>;
    /**
     * Use this method to edit text and game messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
     * @param text - New text of the message, 1-4096 characters after entities parsing
     * @param [options.chatId] - Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
     * @param [options.messageId] - Required if inline_message_id is not specified. Identifier of the message to edit
     * @param [options.inlineMessageId] - Required if chat_id and message_id are not specified. Identifier of the inline message
     * @param [options.parseMode] - Mode for parsing entities in the message text. See formatting options for more details.
     * @param [options.entities] - List of special entities that appear in message text, which can be specified instead of parse_mode
     * @param [options.disableWebPagePreview] - Disables link previews for links in this message
     * @param [options.replyMarkup] - A JSON-serialized object for an inline keyboard.
     */
    editMessageText(text: string, options?: {
        chatId?: Integer | string;
        messageId?: Integer;
        inlineMessageId?: string;
        parseMode?: string;
        entities?: MessageEntity[];
        disableWebPagePreview?: boolean;
        replyMarkup?: InlineKeyboardMarkup;
    }): Promise<object>;
    /**
     * Use this method to edit captions of messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
     * @param [options.chatId] - Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
     * @param [options.messageId] - Required if inline_message_id is not specified. Identifier of the message to edit
     * @param [options.inlineMessageId] - Required if chat_id and message_id are not specified. Identifier of the inline message
     * @param [options.caption] - New caption of the message, 0-1024 characters after entities parsing
     * @param [options.parseMode] - Mode for parsing entities in the message caption. See formatting options for more details.
     * @param [options.captionEntities] - List of special entities that appear in the caption, which can be specified instead of parse_mode
     * @param [options.replyMarkup] - A JSON-serialized object for an inline keyboard.
     */
    editMessageCaption(options?: {
        chatId?: Integer | string;
        messageId?: Integer;
        inlineMessageId?: string;
        caption?: string;
        parseMode?: string;
        captionEntities?: MessageEntity[];
        replyMarkup?: InlineKeyboardMarkup;
    }): Promise<object>;
    /**
     * Use this method to edit animation, audio, document, photo, or video messages. If a message is part of a message album, then it can be edited only to an audio for audio albums, only to a document for document albums and to a photo or a video otherwise. When an inline message is edited, a new file can't be uploaded. Use a previously uploaded file via its file_id or specify a URL. On success, if the edited message was sent by the bot, the edited Message is returned, otherwise True is returned.
     * @param media - A JSON-serialized object for a new media content of the message
     * @param [options.chatId] - Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
     * @param [options.messageId] - Required if inline_message_id is not specified. Identifier of the message to edit
     * @param [options.inlineMessageId] - Required if chat_id and message_id are not specified. Identifier of the inline message
     * @param [options.replyMarkup] - A JSON-serialized object for a new inline keyboard.
     */
    editMessageMedia(media: InputMedia, options?: {
        chatId?: Integer | string;
        messageId?: Integer;
        inlineMessageId?: string;
        replyMarkup?: InlineKeyboardMarkup;
    }): Promise<object>;
    /**
     * Use this method to edit only the reply markup of messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
     * @param [options.chatId] - Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
     * @param [options.messageId] - Required if inline_message_id is not specified. Identifier of the message to edit
     * @param [options.inlineMessageId] - Required if chat_id and message_id are not specified. Identifier of the inline message
     * @param [options.replyMarkup] - A JSON-serialized object for an inline keyboard.
     */
    editMessageReplyMarkup(options?: {
        chatId?: Integer | string;
        messageId?: Integer;
        inlineMessageId?: string;
        replyMarkup?: InlineKeyboardMarkup;
    }): Promise<object>;
    /**
     * Use this method to stop a poll which was sent by the bot. On success, the stopped Poll with the final results is returned.
     * @param chatId - Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
     * @param messageId - Identifier of the original message with the poll
     * @param [options.replyMarkup] - A JSON-serialized object for a new message inline keyboard.
     */
    stopPoll(chatId: Integer | string, messageId: Integer, options?: {
        replyMarkup?: InlineKeyboardMarkup;
    }): Promise<object>;
    /**
     * Use this method to delete a message, including service messages, with the following limitations:
     * - A message can only be deleted if it was sent less than 48 hours ago.
     * - A dice message in a private chat can only be deleted if it was sent more than 24 hours ago.
     * - Bots can delete outgoing messages in private chats, groups, and supergroups.
     * - Bots can delete incoming messages in private chats.
     * - Bots granted can_post_messages permissions can delete outgoing messages in channels.
     * - If the bot is an administrator of a group, it can delete any message there.
     * - If the bot has can_delete_messages permission in a supergroup or a channel, it can delete any message there.
     * Returns True on success.
     * @param chatId - Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
     * @param messageId - Identifier of the message to delete
     */
    deleteMessage(chatId: Integer | string, messageId: Integer, options?: any): Promise<object>;
    /**
     * Use this method to send static .WEBP or animated .TGS stickers. On success, the sent Message is returned.
     * @param chatId - Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
     * @param sticker - Sticker to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a .WEBP file from the Internet, or upload a new one using multipart/form-data. More info on Sending Files »
     * @param [options.disableNotification] - Sends the message silently. Users will receive a notification with no sound.
     * @param [options.replyToMessageId] - If the message is a reply, ID of the original message
     * @param [options.allowSendingWithoutReply] - Pass True, if the message should be sent even if the specified replied-to message is not found
     * @param [options.replyMarkup] - Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
     */
    sendSticker(chatId: Integer | string, sticker: InputFile | string, options?: {
        disableNotification?: boolean;
        replyToMessageId?: Integer;
        allowSendingWithoutReply?: boolean;
        replyMarkup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply;
    }): Promise<object>;
    /**
     * Use this method to get a sticker set. On success, a StickerSet object is returned.
     * @param name - Name of the sticker set
     */
    getStickerSet(name: string, options?: any): Promise<object>;
    /**
     * Use this method to upload a .PNG file with a sticker for later use in createNewStickerSet and addStickerToSet methods (can be used multiple times). Returns the uploaded File on success.
     * @param userId - User identifier of sticker file owner
     * @param pngSticker - PNG image with the sticker, must be up to 512 kilobytes in size, dimensions must not exceed 512px, and either width or height must be exactly 512px. More info on Sending Files »
     */
    uploadStickerFile(userId: Integer, pngSticker: InputFile, options?: any): Promise<object>;
    /**
     * Use this method to create a new sticker set owned by a user. The bot will be able to edit the sticker set thus created. You must use exactly one of the fields png_sticker or tgs_sticker. Returns True on success.
     * @param userId - User identifier of created sticker set owner
     * @param name - Short name of sticker set, to be used in t.me/addstickers/ URLs (e.g., animals). Can contain only english letters, digits and underscores. Must begin with a letter, can't contain consecutive underscores and must end in “_by_<bot username>”. <bot_username> is case insensitive. 1-64 characters.
     * @param title - Sticker set title, 1-64 characters
     * @param emojis - One or more emoji corresponding to the sticker
     * @param [options.pngSticker] - PNG image with the sticker, must be up to 512 kilobytes in size, dimensions must not exceed 512px, and either width or height must be exactly 512px. Pass a file_id as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More info on Sending Files »
     * @param [options.tgsSticker] - TGS animation with the sticker, uploaded using multipart/form-data. See https://core.telegram.org/animated_stickers#technical-requirements for technical requirements
     * @param [options.containsMasks] - Pass True, if a set of mask stickers should be created
     * @param [options.maskPosition] - A JSON-serialized object for position where the mask should be placed on faces
     */
    createNewStickerSet(userId: Integer, name: string, title: string, emojis: string, options?: {
        pngSticker?: InputFile | string;
        tgsSticker?: InputFile;
        containsMasks?: boolean;
        maskPosition?: MaskPosition;
    }): Promise<object>;
    /**
     * Use this method to add a new sticker to a set created by the bot. You must use exactly one of the fields png_sticker or tgs_sticker. Animated stickers can be added to animated sticker sets and only to them. Animated sticker sets can have up to 50 stickers. Static sticker sets can have up to 120 stickers. Returns True on success.
     * @param userId - User identifier of sticker set owner
     * @param name - Sticker set name
     * @param emojis - One or more emoji corresponding to the sticker
     * @param [options.pngSticker] - PNG image with the sticker, must be up to 512 kilobytes in size, dimensions must not exceed 512px, and either width or height must be exactly 512px. Pass a file_id as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More info on Sending Files »
     * @param [options.tgsSticker] - TGS animation with the sticker, uploaded using multipart/form-data. See https://core.telegram.org/animated_stickers#technical-requirements for technical requirements
     * @param [options.maskPosition] - A JSON-serialized object for position where the mask should be placed on faces
     */
    addStickerToSet(userId: Integer, name: string, emojis: string, options?: {
        pngSticker?: InputFile | string;
        tgsSticker?: InputFile;
        maskPosition?: MaskPosition;
    }): Promise<object>;
    /**
     * Use this method to move a sticker in a set created by the bot to a specific position. Returns True on success.
     * @param sticker - File identifier of the sticker
     * @param position - New sticker position in the set, zero-based
     */
    setStickerPositionInSet(sticker: string, position: Integer, options?: any): Promise<object>;
    /**
     * Use this method to delete a sticker from a set created by the bot. Returns True on success.
     * @param sticker - File identifier of the sticker
     */
    deleteStickerFromSet(sticker: string, options?: any): Promise<object>;
    /**
     * Use this method to set the thumbnail of a sticker set. Animated thumbnails can be set for animated sticker sets only. Returns True on success.
     * @param name - Sticker set name
     * @param userId - User identifier of the sticker set owner
     * @param [options.thumb] - A PNG image with the thumbnail, must be up to 128 kilobytes in size and have width and height exactly 100px, or a TGS animation with the thumbnail up to 32 kilobytes in size; see https://core.telegram.org/animated_stickers#technical-requirements for animated sticker technical requirements. Pass a file_id as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More info on Sending Files ». Animated sticker set thumbnail can't be uploaded via HTTP URL.
     */
    setStickerSetThumb(name: string, userId: Integer, options?: {
        thumb?: InputFile | string;
    }): Promise<object>;
    /**
     * Use this method to send answers to an inline query. On success, True is returned.
     * No more than 50 results per query are allowed.
     * @param inlineQueryId - Unique identifier for the answered query
     * @param results - A JSON-serialized array of results for the inline query
     * @param [options.cacheTime] - The maximum amount of time in seconds that the result of the inline query may be cached on the server. Defaults to 300.
     * @param [options.isPersonal] - Pass True, if results may be cached on the server side only for the user that sent the query. By default, results may be returned to any user who sends the same query
     * @param [options.nextOffset] - Pass the offset that a client should send in the next query with the same text to receive more results. Pass an empty string if there are no more results or if you don't support pagination. Offset length can't exceed 64 bytes.
     * @param [options.switchPmText] - If passed, clients will display a button with specified text that switches the user to a private chat with the bot and sends the bot a start message with the parameter switch_pm_parameter
     * @param [options.switchPmParameter] - Deep-linking parameter for the /start message sent to the bot when user presses the switch button. 1-64 characters, only A-Z, a-z, 0-9, _ and - are allowed. Example: An inline bot that sends YouTube videos can ask the user to connect the bot to their YouTube account to adapt search results accordingly. To do this, it displays a 'Connect your YouTube account' button above the results, or even before showing any. The user presses the button, switches to a private chat with the bot and, in doing so, passes a start parameter that instructs the bot to return an oauth link. Once done, the bot can offer a switch_inline button so that the user can easily return to the chat where they wanted to use the bot's inline capabilities.
     */
    answerInlineQuery(inlineQueryId: string, results: InlineQueryResult[], options?: {
        cacheTime?: Integer;
        isPersonal?: boolean;
        nextOffset?: string;
        switchPmText?: string;
        switchPmParameter?: string;
    }): Promise<object>;
    /**
     * Use this method to send invoices. On success, the sent Message is returned.
     * @param chatId - Unique identifier for the target chat or username of the target channel (in the forma* @channelusername)
     * @param title - Product name, 1-32 characters
     * @param description - Product description, 1-255 characters
     * @param payload - Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use for your internal processes.
     * @param providerToken - Payments provider token, obtained via Botfather
     * @param currency - Three-letter ISO 4217 currency code, see more on currencies
     * @param prices - Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.)
     * @param [options.maxTipAmount] - The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double). For example, for a maximum tip of US$ 1.45 pass max_tip_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0
     * @param [options.suggestedTipAmounts] - A JSON-serialized array of suggested amounts of tips in the smallest units of the currency (integer, not float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max_tip_amount.
     * @param [options.startParameter] - Unique deep-linking parameter. If left empty, forwarded copies of the sent message will have a Pay button, allowing multiple users to pay directly from the forwarded message, using the same invoice. If non-empty, forwarded copies of the sent message will have a URL button with a deep link to the bot (instead of a Pay button), with the value used as the start parameter
     * @param [options.providerData] - A JSON-serialized data about the invoice, which will be shared with the payment provider. A detailed description of required fields should be provided by the payment provider.
     * @param [options.photoUrl] - URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service. People like it better when they see what they are paying for.
     * @param [options.photoSize] - Photo size
     * @param [options.photoWidth] - Photo width
     * @param [options.photoHeight] - Photo height
     * @param [options.needName] - Pass True, if you require the user's full name to complete the order
     * @param [options.needPhoneNumber] - Pass True, if you require the user's phone number to complete the order
     * @param [options.needEmail] - Pass True, if you require the user's email address to complete the order
     * @param [options.needShippingAddress] - Pass True, if you require the user's shipping address to complete the order
     * @param [options.sendPhoneNumberToProvider] - Pass True, if user's phone number should be sent to provider
     * @param [options.sendEmailToProvider] - Pass True, if user's email address should be sent to provider
     * @param [options.isFlexible] - Pass True, if the final price depends on the shipping method
     * @param [options.disableNotification] - Sends the message silently. Users will receive a notification with no sound.
     * @param [options.replyToMessageId] - If the message is a reply, ID of the original message
     * @param [options.allowSendingWithoutReply] - Pass True, if the message should be sent even if the specified replied-to message is not found
     * @param [options.replyMarkup] - A JSON-serialized object for an inline keyboard. If empty, one 'Pay total price' button will be shown. If not empty, the first button must be a Pay button.
     */
    sendInvoice(chatId: Integer | string, title: string, description: string, payload: string, providerToken: string, currency: string, prices: LabeledPrice[], options?: {
        maxTipAmount?: Integer;
        suggestedTipAmounts?: Integer[];
        startParameter?: string;
        providerData?: string;
        photoUrl?: string;
        photoSize?: Integer;
        photoWidth?: Integer;
        photoHeight?: Integer;
        needName?: boolean;
        needPhoneNumber?: boolean;
        needEmail?: boolean;
        needShippingAddress?: boolean;
        sendPhoneNumberToProvider?: boolean;
        sendEmailToProvider?: boolean;
        isFlexible?: boolean;
        disableNotification?: boolean;
        replyToMessageId?: Integer;
        allowSendingWithoutReply?: boolean;
        replyMarkup?: InlineKeyboardMarkup;
    }): Promise<object>;
    /**
     * If you sent an invoice requesting a shipping address and the parameter is_flexible was specified, the Bot API will send an Update with a shipping_query field to the bot. Use this method to reply to shipping queries. On success, True is returned.
     * @param shippingQueryId - Unique identifier for the query to be answered
     * @param ok - Specify True if delivery to the specified address is possible and False if there are any problems (for example, if delivery to the specified address is not possible)
     * @param [options.shippingOptions] - Required if ok is True. A JSON-serialized array of available shipping options.
     * @param [options.errorMessage] - Required if ok is False. Error message in human readable form that explains why it is impossible to complete the order (e.g. "Sorry, delivery to your desired address is unavailable'). Telegram will display this message to the user.
     */
    answerShippingQuery(shippingQueryId: string, ok: boolean, options?: {
        shippingOptions?: ShippingOption[];
        errorMessage?: string;
    }): Promise<object>;
    /**
     * Once the user has confirmed their payment and shipping details, the Bot API sends the final confirmation in the form of an Update with the field pre_checkout_query. Use this method to respond to such pre-checkout queries. On success, True is returned. Note: The Bot API must receive an answer within 10 seconds after the pre-checkout query was sent.
     * @param preCheckoutQueryId - Unique identifier for the query to be answered
     * @param ok - Specify True if everything is alright (goods are available, etc.) and the bot is ready to proceed with the order. Use False if there are any problems.
     * @param [options.errorMessage] - Required if ok is False. Error message in human readable form that explains the reason for failure to proceed with the checkout (e.g. "Sorry, somebody just bought the last of our amazing black T-shirts while you were busy filling out your payment details. Please choose a different color or garment!"). Telegram will display this message to the user.
     */
    answerPreCheckoutQuery(preCheckoutQueryId: string, ok: boolean, options?: {
        errorMessage?: string;
    }): Promise<object>;
    /**
     * Use this method to send a game. On success, the sent Message is returned.
     * @param chatId - Unique identifier for the target chat
     * @param gameShortName - Short name of the game, serves as the unique identifier for the game. Set up your games via Botfather.
     * @param [options.disableNotification] - Sends the message silently. Users will receive a notification with no sound.
     * @param [options.replyToMessageId] - If the message is a reply, ID of the original message
     * @param [options.allowSendingWithoutReply] - Pass True, if the message should be sent even if the specified replied-to message is not found
     * @param [options.replyMarkup] - A JSON-serialized object for an inline keyboard. If empty, one 'Play game_title' button will be shown. If not empty, the first button must launch the game.
     */
    sendGame(chatId: Integer, gameShortName: string, options?: {
        disableNotification?: boolean;
        replyToMessageId?: Integer;
        allowSendingWithoutReply?: boolean;
        replyMarkup?: InlineKeyboardMarkup;
    }): Promise<object>;
    /**
     * Use this method to set the score of the specified user in a game. On success, if the message was sent by the bot, returns the edited Message, otherwise returns True. Returns an error, if the new score is not greater than the user's current score in the chat and force is False.
     * @param userId - User identifier
     * @param score - New score, must be non-negative
     * @param [options.force] - Pass True, if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters
     * @param [options.disableEditMessage] - Pass True, if the game message should not be automatically edited to include the current scoreboard
     * @param [options.chatId] - Required if inline_message_id is not specified. Unique identifier for the target chat
     * @param [options.messageId] - Required if inline_message_id is not specified. Identifier of the sent message
     * @param [options.inlineMessageId] - Required if chat_id and message_id are not specified. Identifier of the inline message
     */
    setGameScore(userId: Integer, score: Integer, options?: {
        force?: boolean;
        disableEditMessage?: boolean;
        chatId?: Integer;
        messageId?: Integer;
        inlineMessageId?: string;
    }): Promise<object>;
}

