(function() {
    const loginPage = '/index.html'; // Adjust if needed
    const protectedPaths = ['/d/success']; // Add more paths if needed

    function checkAuthentication() {
        if (protectedPaths.includes(window.location.pathname) && localStorage.getItem('loggedIn') !== 'true') {
            window.location.href = loginPage;
        }
    }

    document.addEventListener('DOMContentLoaded', checkAuthentication);
})();
