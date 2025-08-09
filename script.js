// Cuenta regresiva
let targetDate = new Date("2025-12-25").getTime();

let countdown = setInterval(function() {
    let now = new Date().getTime();
    let distance = targetDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = 
        `${days} días ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("timer").innerHTML = "¡Ya nos vemos! 💕";
    }
}, 1000);