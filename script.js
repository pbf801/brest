// Solicitar permisos de notificación y enviar una notificación
document.addEventListener("DOMContentLoaded", () => {
    if (Notification.permission !== "granted") {
        Notification.requestPermission();
    } else {
        sendNotification();
    }
});

// Función para enviar la notificación
function sendNotification() {
    const lastUpdate = "Última actualización: 03/10/2024 15:30 - En Proceso";
    
    if (Notification.permission === "granted") {
        new Notification("Brest", {
            body: lastUpdate,
            icon: "https://via.placeholder.com/150", // Aquí puedes cambiar la URL del ícono
        });
    }
}
