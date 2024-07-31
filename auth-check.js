(function() {
    const loginPage = '/d/'; // Adjust if needed
    const protectedPaths =' /d/success' ; // Add more paths if needed

    function checkAuthentication() {
        if (protectedPaths.includes(window.location.pathname) && sessionStorage.getItem('loggedIn') !== 'true') {
            window.location.href = loginPage;
        }
    }

    function handleLogin() {
        // Simulate login for demonstration purposes
        // In a real application, this would be handled through your login form
        sessionStorage.setItem('loggedIn', 'true');
        window.location.href = '/d/success'; // Redirect to a protected page
    }

    function handleLogout() {
        // Clear session storage and redirect to login page
        sessionStorage.removeItem('loggedIn');
        window.location.href = loginPage;
    }

    // Check authentication status when the page loads
    document.addEventListener('DOMContentLoaded', checkAuthentication);

    // Expose functions for manual testing
    window.handleLogin = handleLogin;
    window.handleLogout = handleLogout;
})();
