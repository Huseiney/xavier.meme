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

// Copy Wallet Address
function copyAddress() {
    const address = document.getElementById("solAddress").textContent;
    navigator.clipboard.writeText(address).then(() => {
        alert("SOL Wallet Address Copied!");
    }).catch(err => {
        console.error("Failed to copy address: ", err);
    });
}
