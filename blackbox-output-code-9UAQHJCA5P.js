// Simple script to add interactivity, e.g., alert on flavor click
document.querySelectorAll('.flavor').forEach(flavor => {
    flavor.addEventListener('click', () => {
        alert(`You selected ${flavor.querySelector('h3').textContent}!`);
    });
});