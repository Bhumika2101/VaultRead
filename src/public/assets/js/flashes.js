
document.querySelectorAll('.flash-message').forEach(message => {
    let timer;

    const startTimer = () => {
        timer = setTimeout(() => {
            message.remove();
        }, 3000);
    };

    const clearTimer = () => {
        clearTimeout(timer);
    };

    // Start timer initially
    startTimer();

    // Pause on hover
    message.addEventListener('mouseenter', clearTimer);
    message.addEventListener('mouseleave', startTimer);
});


window.addEventListener("load", () => {
    const loader = document.getElementById("loader-overlay");
    loader.style.opacity = "0";
    setTimeout(() => {
        loader.style.display = "none";
    }, 500);
});



