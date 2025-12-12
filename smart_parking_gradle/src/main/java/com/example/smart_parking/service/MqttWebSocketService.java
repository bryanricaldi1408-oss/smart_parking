package com.example.smart_parking.service;

import com.example.smart_parking.websocket.MqttWebSocketHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MqttWebSocketService {

    @Autowired
    private MqttWebSocketHandler webSocketHandler;

    public void broadcast(String topic, String payload) {
        webSocketHandler.broadcast(topic, payload);
    }
}
