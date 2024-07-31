(function() {
    const loginPage = '/d/'; // Adjust if needed
    const protectedPaths = ['/d/success']; // No leading spaces

    function checkAuthentication() {
        if (protectedPaths.includes(window.location.pathname) && sessionStorage.getItem('loggedIn') !== 'true') {
            window.location.href = loginPage;
        }
    }

    function handleLogin() {
        sessionStorage.setItem('loggedIn', 'true');
        window.location.href = '/d/success'; // Redirect to a protected page
    }

    function handleLogout() {
        sessionStorage.removeItem('loggedIn');
        window.location.href = loginPage;
    }

    document.addEventListener('DOMContentLoaded', checkAuthentication);

    window.handleLogin = handleLogin;
    window.handleLogout = handleLogout;
})();
