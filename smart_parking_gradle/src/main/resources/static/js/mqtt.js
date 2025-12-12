// WebSocket connection ke Spring Boot
const ws = new WebSocket("ws://localhost:8080/ws/parking");

ws.onmessage = (event) => {
    const data = JSON.parse(event.data);

    // Topic format: ged9/b1/a1
    const parts = data.topic.split("/");

    const gedung = parts[0];  // ged9 atau ppag
    const lantai = parts[1]; // b1 / b2 / b3
    const slotKey = parts[2]; // a1, b2, c3

    // Payload is the distance
    const distance = parseInt(data.mqtt, 10);

    // Query elemen HTML yg cocok
    const selector =
        `[data-gedung="${gedung}"][data-lantai="${lantai}"][data-slot="${slotKey}"]`;

    const el = document.querySelector(selector);
    if (!el) return;

    // Reset class lama
    el.classList.remove("occupied", "empty");

    // Update status slot based on distance
    if (distance < 200) {
        el.classList.add("occupied");
    } else {
        el.classList.add("empty");
    }
};
