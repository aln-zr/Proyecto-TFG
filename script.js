document.addEventListener("DOMContentLoaded", () => {
    function applyGlitchEffect(elementId) {
        const textElement = document.getElementById(elementId);
        if (!textElement) return; // Stop if element doesn't exist

        const originalText = textElement.innerText; // Store the original text
        const chars = "!@#$%^&*ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; // Glitch characters

        // Convert original text to an array to work with individual characters
        let glitchedText = originalText.split('');
        let index = 0; // Keeps track of the current character

        // Function to apply the glitch effect one character at a time
        function glitchEffect() {
            if (index >= originalText.length) return; // Stop if we've processed all characters

            const currentChar = originalText[index]; // Get the original character

            // Glitch the current character by replacing it with a random character
            glitchedText[index] = chars[Math.floor(Math.random() * chars.length)];
            textElement.innerText = glitchedText.join(''); // Update the element with glitched text

            // Restore the original character after 0.5 seconds
            setTimeout(() => {
                glitchedText[index] = currentChar; // Restore the original character
                textElement.innerText = glitchedText.join(''); // Update the element with the restored text
            }, 500); // 0.5 seconds delay for glitch

            // Move to the next character after 0.5 seconds
            index++;

            // Continue glitching the next character after the same delay
            setTimeout(glitchEffect, 500);
        }

        // Start the glitch effect
        glitchEffect();
    }

    // Apply glitch effect to the target elements
    applyGlitchEffect("glitch-text-hero");
    applyGlitchEffect("glitch-text-about");
});