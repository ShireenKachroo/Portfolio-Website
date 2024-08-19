window.onload = function() {
    alert("Welcome to Shireen's Personal Portfolio Website!");
    // Call the function to display date and time
    displayDateTime();
    // Call the function to change about me text
    changeAboutMeText();
};

// Example displayDateTime function (you should define your actual logic)
function displayDateTime() {
    console.log(new Date().toLocaleString());
}

function changeAboutMeText() {
    const aboutMeTexts = ["Passionate B-Tech CSE student seeking opportunities to innovate the tech world"];
    const typingSpeed = 100;
    const eraseSpeed = 50;
    const pauseTime = 1500;
    const aboutMeEle = document.querySelector('.about-mee'); // Ensure this element exists
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = aboutMeTexts[textIndex];

        // Typing
        if (!isDeleting && charIndex < currentText.length) {
            aboutMeEle.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            setTimeout(type, typingSpeed);
        }
        // Erasing
        else if (isDeleting && charIndex > 0) {
            aboutMeEle.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(type, eraseSpeed);
        }
        // Switching between typing and deleting process
        else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                textIndex = (textIndex + 1) % aboutMeTexts.length;
            }
            setTimeout(type, pauseTime);
        }
    }

    // Start the typing animation
    type();
}
