package com.ssechat.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ChatMessageDTO {
    private String id;
    private String message;
    private String sender;
    private String channelId;
}
