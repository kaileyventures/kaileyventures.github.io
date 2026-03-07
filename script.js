document.addEventListener("DOMContentLoaded", () => {
    let timeLeft = 10;
    const timerElement = document.getElementById('timer');
    const progressCircle = document.getElementById('progress-circle');
    const redirectURL = "https://kaileyventures.vercel.app";

    // 1. Countdown & Circular Progress
    const countdown = setInterval(() => {
        timeLeft--;
        timerElement.innerText = timeLeft;
        
        // Update circular stroke
        const progress = (timeLeft / 10) * 100;
        progressCircle.setAttribute('stroke-dasharray', `${progress}, 100`);

        if (timeLeft <= 0) {
            clearInterval(countdown);
            window.location.href = redirectURL;
        }
    }, 1000);

    // 2. Subtle Mouse Parallax for Background
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        document.querySelector('.hero').style.transform = `translate(${x * 10}px, ${y * 10}px)`;
    });
});
