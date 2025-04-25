function showToast(message, type = "info") {
  const toast = document.getElementById("toast");

  const bgColors = {
    success: "bg-green-600",
    error: "bg-red-600",
    info: "bg-blue-600",
  };

  toast.textContent = message;
  toast.className = `fixed top-5 right-5 z-50 p-4 text-white rounded-lg shadow-lg transition-opacity duration-300 ${bgColors[type]}`;
  toast.classList.remove("hidden");
  toast.classList.add("opacity-100");

  setTimeout(() => {
    toast.classList.add("opacity-0");
    setTimeout(() => toast.classList.add("hidden"), 300);
  }, 3000);
}
