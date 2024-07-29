document.addEventListener('DOMContentLoaded', function() {
    // Welcome screen element
    const welcomeScreen = document.getElementById('welcome-screen');
    const mainContent = document.getElementById('main-content');
    
    // Fade out welcome screen after 3 seconds
    setTimeout(() => {
        welcomeScreen.classList.add('fade-out');
    }, 3000);
    
    // Remove welcome screen and show main content after fade out transition
    welcomeScreen.addEventListener('transitionend', () => {
        welcomeScreen.style.display = 'none';
        mainContent.classList.add('visible');
    });
});
