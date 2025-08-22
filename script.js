// Exhibition list accordion
document.querySelectorAll('.accordion_header').forEach(button => {
    button.addEventListener('click', () => {
        const expanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', !expanded);
  
        const icon = button.querySelector('.accordion_icon');
        icon.textContent = expanded ? '+' : '–';
  
        const content = button.nextElementSibling;
        content.style.display = expanded ? 'none' : 'block';
    });
});