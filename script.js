document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.querySelector(".scramble_glitch__UNrqu");
    if (!textElement) return; // Prevent errors if element is missing

    const originalText = textElement.innerText;
    const chars = "!@#$%^&*ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let index = 0;

    function glitchNextLetter() {
        if (index >= originalText.length) return; // Stop when all letters are done

        let glitchedText = originalText.split("");

        // Replace the current character with a random one
        glitchedText[index] = chars[Math.floor(Math.random() * chars.length)];
        textElement.innerText = glitchedText.join("");

        // Restore the original character after a short glitch
        setTimeout(() => {
            glitchedText[index] = originalText[index]; // Restore character
            textElement.innerText = glitchedText.join("");
            index++; // Move to the next character

            // Delay the next glitch effect smoothly
            setTimeout(glitchNextLetter, 100); // Slight pause before next letter glitches
        }, 300); // Adjusted the glitch duration to be longer for more visible effect
    }

    setTimeout(glitchNextLetter, 300); // Start after a short delay
});
