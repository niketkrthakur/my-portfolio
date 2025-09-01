// Settings menu toggle
const settingsIcon = document.getElementById("settingsIcon");
const settingsMenu = document.getElementById("settingsMenu");

settingsIcon.addEventListener("click", () => {
  settingsMenu.style.display =
    settingsMenu.style.display === "block" ? "none" : "block";
});

// Theme toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});

// Music toggle
const music = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");

musicToggle.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    musicToggle.innerHTML = '<i class="fas fa-music"></i> Toggle Music';
  } else {
    music.pause();
    musicToggle.innerHTML = '<i class="fas fa-volume-mute"></i> Music Muted';
  }
});

// Hamburger menu toggle
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");

  // Change icon (bars ↔ close)
  const icon = menuToggle.querySelector("i");
  if (navMenu.classList.contains("show")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
});

// Let's Talk button toggle
const talkBtn = document.getElementById("talkBtn");
const talkMenu = document.getElementById("talkMenu");

talkBtn.addEventListener("click", () => {
  talkMenu.classList.toggle("show");
});

// Close Talk Menu if clicked outside
document.addEventListener("click", (e) => {
  if (!talkBtn.contains(e.target) && !talkMenu.contains(e.target)) {
    talkMenu.classList.remove("show");
  }
});

