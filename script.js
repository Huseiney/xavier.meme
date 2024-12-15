// Animate Logo Colors
document.addEventListener("DOMContentLoaded", () => {
    const logo = document.getElementById("animatedLogo");
    let colors = ["#F472B6", "#3B82F6", "#FBBF24", "#A855F7"];
    let index = 0;

    setInterval(() => {
        logo.style.borderColor = colors[index];
        index = (index + 1) % colors.length;
    }, 1000);
});
