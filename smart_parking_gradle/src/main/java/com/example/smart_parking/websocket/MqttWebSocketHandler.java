package com.example.smart_parking.websocket;

import org.springframework.stereotype.Component;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.io.IOException;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;

@Component
public class MqttWebSocketHandler extends TextWebSocketHandler {

    private final Set<WebSocketSession> sessions = ConcurrentHashMap.newKeySet();

    @Override
    public void afterConnectionEstablished(WebSocketSession session) {
        sessions.add(session);
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session,
            org.springframework.web.socket.CloseStatus status) {
        sessions.remove(session);
    }

    public void broadcast(String topic, String payload) {
        String json = """
                {
                    "topic": "%s",
                    "mqtt": "%s"
                }
                """.formatted(topic, payload);

        for (WebSocketSession session : sessions) {
            try {
                session.sendMessage(new TextMessage(json));
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
