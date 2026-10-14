document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const plan = urlParams.get('plan') || 'Basic';
    const price = urlParams.get('price') || '500';

    const planNameElement = document.getElementById('plan-name');
    const planPriceElement = document.getElementById('plan-price');

    if (planNameElement) planNameElement.textContent = plan;
    if (planPriceElement) planPriceElement.textContent = price;
});