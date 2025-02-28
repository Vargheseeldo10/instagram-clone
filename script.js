// Wait for DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Heart/like button functionality for posts
    const heartButtons = document.querySelectorAll('.post-action-btn:first-child');
    
    heartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const icon = this.querySelector('i');
            
            if (icon.classList.contains('ri-heart-line')) {
                icon.classList.remove('ri-heart-line');
                icon.classList.add('ri-heart-fill');
                icon.style.color = '#ed4956';
                
                // Increment like count (you can customize this part)
                const likesElement = this.closest
