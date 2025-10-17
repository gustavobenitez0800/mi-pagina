document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("accept-cookies");
  const declineBtn = document.getElementById("decline-cookies");

  const userChoice = localStorage.getItem("veltronik_cookies");

  if (!userChoice) {
    banner.style.display = "flex";
  } else {
    banner.style.display = "none";
  }

  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("veltronik_cookies", "accepted");
    banner.style.display = "none";
    console.log("✅ Cookies aceptadas");
  });

  declineBtn.addEventListener("click", () => {
    localStorage.setItem("veltronik_cookies", "declined");
    banner.style.display = "none";
    console.log("❌ Cookies rechazadas");
  });
});
