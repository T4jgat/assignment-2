function sendFeedback() {
    const sound = new Audio();
    sound.src = "./js/achievement-bell-600.wav";
    sound.play();

    setTimeout(() => alert("Customer service has received your message!"), 1000);
}

