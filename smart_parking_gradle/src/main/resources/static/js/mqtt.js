// WebSocket connection ke Spring Boot
const ws = new WebSocket("ws://localhost:8080/ws/parking");

ws.onmessage = (event) => {
    const data = JSON.parse(event.data);

    // Topic format: ged9/b1/a1
    const parts = data.topic.split("/");

    const gedung = parts[0];  // ged9 atau ppag
    const lantai  = parts[1]; // b1 / b2 / b3
    const slotKey = parts[2]; // a1, b2, c3

    // Payload format: A1:isi
    const [slotName, status] = data.mqtt.split(":");

    // Query elemen HTML yg cocok
    const selector =
        `[data-gedung="${gedung}"][data-lantai="${lantai}"][data-slot="${slotKey}"]`;

    const el = document.querySelector(selector);
    if (!el) return;

    // Reset class lama
    el.classList.remove("occupied", "available", "empty");

    // Update status slot
    if (status === "isi") {
        el.classList.add("occupied");
    } else if (status === "kosong") {
        el.classList.add("available");
    }
};
