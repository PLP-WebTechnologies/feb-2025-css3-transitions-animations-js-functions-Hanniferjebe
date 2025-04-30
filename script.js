// Function to trigger the animation
document.getElementById("animate-btn").addEventListener("click", function () {
    const box = document.getElementById("animated-box");
    const statusMessage = document.getElementById("status-message");
    const animationType = document.getElementById("animation-selector").value;
  
    // Show the box if it's hidden
    box.style.display = "block";
  
    // Apply the selected animation
    box.style.animation = `${animationType} 1s ease-in-out`;
  
    // Save animation state and type to localStorage
    localStorage.setItem("animationPlayed", "true");
    localStorage.setItem("animationType", animationType);
  
    // Reset animation after it finishes
    setTimeout(() => {
        box.style.animation = ""; // Clear animation to allow replay
        statusMessage.textContent = `Animation (${animationType}) completed!`;
    }, 1000);
  });
  
  // Reset preferences
  document.getElementById("reset-btn").addEventListener("click", function () {
    localStorage.clear();
    location.reload(); // Reload the page to reset everything
  });
  
  // Retrieve animation state when the page loads
  window.onload = function () {
    const box = document.getElementById("animated-box");
    const statusMessage = document.getElementById("status-message");
    const animationSelector = document.getElementById("animation-selector");
  
    const animationPlayed = localStorage.getItem("animationPlayed");
    const animationType = localStorage.getItem("animationType");
  
    if (animationPlayed === "true") {
        // Set the dropdown to the saved animation type
        animationSelector.value = animationType;
  
        // Show the box and display a message
        box.style.display = "block";
        statusMessage.textContent = `Welcome back! The last animation (${animationType}) was previously played.`;
    } else {
        statusMessage.textContent = "Choose an animation and click the button to play it.";
    }
  };