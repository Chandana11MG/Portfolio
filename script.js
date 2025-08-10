// Function to toggle the sidebar
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
}

// Function to toggle dark mode
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

// Smooth scrolling to the top
function scrollTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Scroll to top button visibility
const scrollTopBtn = document.getElementById("scrollTopbtn");
window.onscroll = function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};