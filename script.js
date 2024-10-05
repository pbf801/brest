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
    const lastUpdate = "Última actualización: Se han recibido 3/5 videos.";
    
    if (Notification.permission === "granted") {
        new Notification("Brest", {
            body: lastUpdate,
            icon: "https://media.tenor.com/IuABkwIwrUUAAAAM/loading-yellow.gif", // Aquí puedes cambiar la URL del ícono
        });
    }
}
