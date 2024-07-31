document.addEventListener('DOMContentLoaded', function() {
    const posts = document.querySelectorAll('.post');
    posts.forEach(post => {
        post.addEventListener('mouseenter', () => {
            post.style.transform = 'scale(1.05)';
        });
        post.addEventListener('mouseleave', () => {
            post.style.transform = 'scale(1)';
        });
    });
});
