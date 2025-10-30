const searchBtn = document.getElementById("search-btn");
const overlay = document.getElementById("apple-search-overlay");
const closeSearch = document.getElementById("close-apple-search");
const searchBox = document.getElementById("apple-search-box");
const suggestions = document.getElementById("apple-search-suggestions");
const searchInput = document.getElementById("apple-search-input");

// 🔹 Mostrar overlay
function openSearch() {
  overlay.classList.remove("hidden");
  overlay.classList.add("flex");

  setTimeout(() => {
    overlay.classList.remove("opacity-0");
    searchBox.classList.remove("opacity-0", "translate-y-[-20px]");
    suggestions.classList.remove("opacity-0", "translate-y-4");
  }, 10);

  searchInput.focus();
}

// 🔹 Cerrar overlay
function closeOverlay() {
  searchBox.classList.add("opacity-0", "translate-y-[-20px]");
  suggestions.classList.add("opacity-0", "translate-y-4");
  overlay.classList.add("opacity-0");

  setTimeout(() => {
    overlay.classList.remove("flex");
    overlay.classList.add("hidden");
  }, 400);
}

// Eventos
searchBtn.addEventListener("click", openSearch);
closeSearch.addEventListener("click", closeOverlay);

// Cerrar al hacer click fuera
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closeOverlay();
});

// Cerrar con tecla Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeOverlay();
});
