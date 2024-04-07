const texts = ["Job Opportunities and Internships.", "Exciting Career Opportunities."];
let index = 0;

// Function to update the text
function updateText() {
    document.getElementById("dynamicText").textContent = texts[index];
    index = (index + 1) % texts.length; // Move to the next text, loop back to the start if at the end
}

// Initial update
updateText();

// Update text every 3 seconds (3000 milliseconds)
setInterval(updateText, 3000);