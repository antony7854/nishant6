document.querySelectorAll('.readMore').forEach(button => {
    button.addEventListener('click', function() {
        const fullText = this.nextElementSibling;
        const isVisible = fullText.style.display === 'block';

        // Toggle the display of the full text
        fullText.style.display = isVisible ? 'none' : 'block';
        this.textContent = isVisible ? 'Read More' : 'Read Less';
    });
});
