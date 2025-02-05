document.querySelectorAll('input[name="valentine"]').forEach((checkbox) => {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            document.querySelectorAll('input[name="valentine"]').forEach((otherCheckbox) => {
                if (otherCheckbox !== this) {
                    otherCheckbox.checked = false;
                }
            });

            if (this.value === "yes") {
                // Trigger confetti
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 }
                });

                setTimeout(() => {
                    confetti.reset();
                    // Remove the question
                    const questionElement = document.querySelector('.css-valentine');
                    if (questionElement) {
                        questionElement.remove();
                    }
                    // Display the message
                    const message = document.createElement('div');
                    message.textContent = 'See you on February 14, 2025 mylove, I love you so much and Happy 4th Monthsarry';
                    message.style.position = 'absolute';
                    message.style.top = '50%';
                    message.style.left = '50%';
                    message.style.width = '60%';
                    message.style.transform = 'translate(-50%, -50%)';
                    message.style.backgroundColor = 'white';
                    message.style.padding = '20px';
                    message.style.border = '2px solid black';
                    message.style.textAlign = 'center';
                    document.body.appendChild(message);

                    // Create hearts
                    setInterval(createHearts, 1000);
                }, 3000);
            }
        }
    });

    if (checkbox.value === "no") {
        let noClickCount = 0;

        checkbox.addEventListener('click', function(event) {
            const bruhMeme = document.getElementById('bruh-meme');
            const dieMeme = document.getElementById('die-meme');
            const forceMeme = document.getElementById('force-meme');

            noClickCount++;

            if (noClickCount >= 3) {
                bruhMeme.style.display = 'none';
                dieMeme.style.display = 'none';
                forceMeme.style.display = 'block';

                setTimeout(() => {
                    forceMeme.style.display = 'none';

                    const yesCheckbox = document.querySelector('input[name="valentine"][value="yes"]');
                    const noCheckbox = this;

                    const yesRect = yesCheckbox.getBoundingClientRect();
                    const noRect = noCheckbox.getBoundingClientRect();

                    const deltaX = yesRect.left - noRect.left;
                    const deltaY = yesRect.top - noRect.top;

                    noCheckbox.style.transition = 'transform 1s';
                    noCheckbox.style.transform = `translate(${deltaX}px, ${deltaY}px)`;

                    setTimeout(() => {
                        noCheckbox.style.transform = '';
                        noCheckbox.checked = false;
                        yesCheckbox.checked = true;

                        // Trigger confetti
                        confetti({
                            particleCount: 100,
                            spread: 70,
                            origin: { y: 0.6 }
                        });

                        setTimeout(() => {
                            confetti.reset();
                            // Disable the "no" checkbox
                            noCheckbox.disabled = true;

                            // Remove the question
                            const questionElement = document.querySelector('.css-valentine');
                            if (questionElement) {
                                questionElement.remove();
                            }

                            // Display the message
                            const message = document.createElement('div');
                            message.textContent = 'See you on February 14, 2025 mylove, I love you so much and Happy 4th Monthsarry';
                            message.style.position = 'absolute';
                            message.style.top = '50%';
                            message.style.left = '50%';
                            message.style.transform = 'translate(-50%, -50%)';
                            message.style.backgroundColor = 'white';
                            message.style.padding = '20px';
                            message.style.border = '2px solid black';
                            message.style.textAlign = 'center';
                            document.body.appendChild(message);

                            // Create hearts
                            setInterval(createHearts, 1000);
                        }, 3000);

                        // Add click event to "yes" checkbox to display the message again
                        yesCheckbox.addEventListener('click', function() {
                            const message = document.createElement('div');
                            message.textContent = 'See you on February 14, 2025 mylove, I love you so much and Happy 4th Monthsarry';
                            message.style.position = 'absolute';
                            message.style.top = '50%';
                            message.style.left = '50%';
                            message.style.transform = 'translate(-50%, -50%)';
                            message.style.backgroundColor = 'white';
                            message.style.padding = '20px';
                            message.style.border = '2px solid black';
                            message.style.textAlign = 'center';
                            document.body.appendChild(message);

                            // Create hearts
                            setInterval(createHearts, 1000);
                        });
                    }, 1000);
                }, 5000);

                // Add mouseover event to move the "no" checkbox
                checkbox.addEventListener('mouseover', function() {
                    const randomX = Math.random() * (window.innerWidth - checkbox.offsetWidth);
                    const randomY = Math.random() * (window.innerHeight - checkbox.offsetHeight);
                    checkbox.style.position = 'absolute';
                    checkbox.style.left = `${randomX}px`;
                    checkbox.style.top = `${randomY}px`;
                });

                // Prevent default click action and move the checkbox
                checkbox.addEventListener('click', function(event) {
                    event.preventDefault();
                    const randomX = Math.random() * (window.innerWidth - checkbox.offsetWidth);
                    const randomY = Math.random() * (window.innerHeight - checkbox.offsetHeight);
                    checkbox.style.position = 'absolute';
                    checkbox.style.left = `${randomX}px`;
                    checkbox.style.top = `${randomY}px`;
                });
            } else if (noClickCount % 2 === 0) {
                bruhMeme.style.display = 'none';
                dieMeme.style.display = 'block';
            } else {
                bruhMeme.style.display = 'block';
                dieMeme.style.display = 'none';
            }

            if (noClickCount < 3) {
                setTimeout(() => {
                    bruhMeme.style.display = 'none';
                    dieMeme.style.display = 'none';

                    const yesCheckbox = document.querySelector('input[name="valentine"][value="yes"]');
                    const noCheckbox = this;

                    const yesRect = yesCheckbox.getBoundingClientRect();
                    const noRect = noCheckbox.getBoundingClientRect();

                    const deltaX = yesRect.left - noRect.left;
                    const deltaY = yesRect.top - noRect.top;

                    noCheckbox.style.transition = 'transform 1s';
                    noCheckbox.style.transform = `translate(${deltaX}px, ${deltaY}px)`;

                    setTimeout(() => {
                        noCheckbox.style.transform = '';
                        noCheckbox.checked = false;
                        yesCheckbox.checked = true;
                    }, 1000);
                }, 500);
            }
        });
    }
});

function createHearts() {
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('i');
        heart.className = 'fa-solid fa-heart heart';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.top = `${Math.random() * 100}%`;
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}