package com.example.smart_parking.service;

import org.springframework.stereotype.Service;
import org.springframework.web.socket.TextMessage;
import com.example.smart_parking.websocket.MqttWebSocketHandler;

@Service
public class MqttWebSocketService {

    public void broadcast(String topic, String payload) {

        String json = """
                {
                    "topic": "%s",
                    "mqtt": "%s"
                }
                """.formatted(topic, payload);

        MqttWebSocketHandler.sessions.forEach(session -> {
            try {
                session.sendMessage(new TextMessage(json));
            } catch (Exception ignored) {
            }
        });
    }
}
