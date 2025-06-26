document.getElementById("resume").addEventListener("click", function () {
  window.open("./Documents/Perseverance-Molefe-Resume.pdf", "_blank");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("check").checked = false;
  });
});
