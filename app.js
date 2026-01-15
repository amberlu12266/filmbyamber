const container = document.querySelector(".container");

// Current filter state
let currentFilter = "all";
let filteredPhotos = [...photos];

// Filter photos by year
function filterPhotos(filter) {
  currentFilter = filter;
  if (filter === "all") {
    filteredPhotos = [...photos];
  } else {
    filteredPhotos = photos.filter(photo => photo.tags && photo.tags.includes(filter));
  }
  refreshGrid();
}

// Refresh the grid with current filtered photos
function refreshGrid() {
  if (window.innerWidth < 600) {
    generateMasonryGrid(1, filteredPhotos);
  } else if (window.innerWidth >= 600 && window.innerWidth < 1000) {
    generateMasonryGrid(2, filteredPhotos);
  } else if (window.innerWidth >= 1000 && window.innerWidth < 1740) {
    generateMasonryGrid(3, filteredPhotos);
  } else {
    generateMasonryGrid(4, filteredPhotos);
  }
}

// Filter button event listeners
document.querySelectorAll(".filter-item").forEach(item => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".filter-item").forEach(i => i.classList.remove("active"));
    item.classList.add("active");
    filterPhotos(item.dataset.filter);
  });
});

// Lightbox elements
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxLocation = document.getElementById("lightbox-location");
const lightboxYear = document.getElementById("lightbox-year");
const lightboxClose = document.getElementById("lightbox-close");

// Open lightbox with photo data
function openLightbox(photo) {
  lightboxImage.src = photo.image;

  // Extract location and year from tags
  if (photo.tags && photo.tags.length > 0) {
    // First tag is usually location (e.g., "Taipei 2025", "Taiwan", "amalfi")
    const location = photo.tags[0];
    // Second tag is usually just the year
    const year = photo.tags[1] || "";

    lightboxLocation.textContent = location;
    lightboxYear.textContent = year;
  } else {
    lightboxLocation.textContent = "";
    lightboxYear.textContent = "";
  }

  lightbox.classList.add("active");
  document.body.style.overflow = "hidden";
}

// Close lightbox
function closeLightbox() {
  lightbox.classList.remove("active");
  document.body.style.overflow = "";
}

// Close on X button click
lightboxClose.addEventListener("click", closeLightbox);

// Close on clicking outside the image
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

// Close on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && lightbox.classList.contains("active")) {
    closeLightbox();
  }
});

function generateMasonryGrid(columns, photos) {
  container.innerHTML = "";

  //store all column arrays which contain the relevant photos//
  let columnWrappers = {};

  // create column item array and add this to columnwrapper object
  for (let i = 0; i < columns; i++) {
    columnWrappers[`column${i}`] = [];
  }

  // for photos to go left to right instead of top to bottom
  for (let i = 0; i < photos.length; i++) {
    const column = i % columns;
    columnWrappers[`column${column}`].push(photos[i]);
  }

  for (let i = 0; i < columns; i++) {
    let columnPhotos = columnWrappers[`column${i}`];
    let column = document.createElement("div");
    column.classList.add("column");

    columnPhotos.forEach((photo) => {
      let photoDiv = document.createElement("div");
      photoDiv.classList.add("photo");
      let image = document.createElement("img");
      image.src = photo.image;
      let hoverDiv = document.createElement("div");
      hoverDiv.classList.add("overlay");

      // Add click event to open lightbox
      photoDiv.addEventListener("click", () => openLightbox(photo));

      photoDiv.append(image, hoverDiv);
      column.appendChild(photoDiv);
    });
    container.appendChild(column);
  }
}

let previousScreenSize = window.innerWidth;

window.addEventListener("resize", () => {
  imageIndex = 0;

  if (window.innerWidth < 600 && previousScreenSize >= 600) {
    generateMasonryGrid(1, filteredPhotos);
  } else if (
    window.innerWidth >= 600 &&
    window.innerWidth < 1000 &&
    (previousScreenSize < 600 || previousScreenSize >= 1000)
  ) {
    generateMasonryGrid(2, filteredPhotos);
  } else if (
    window.innerWidth >= 1000 &&
    window.innerWidth < 1740 &&
    (previousScreenSize < 1000 || previousScreenSize >= 1740)
  ) {
    generateMasonryGrid(3, filteredPhotos);
  } else if (window.innerWidth >= 1740 && previousScreenSize < 1740) {
    generateMasonryGrid(4, filteredPhotos);
  }

  previousScreenSize = window.innerWidth;
});

// Initial load
if (previousScreenSize < 600) {
  generateMasonryGrid(1, filteredPhotos);
} else if (previousScreenSize >= 600 && previousScreenSize < 1000) {
  generateMasonryGrid(2, filteredPhotos);
} else if (previousScreenSize >= 1000 && previousScreenSize < 1740) {
  generateMasonryGrid(3, filteredPhotos);
} else {
  generateMasonryGrid(4, filteredPhotos);
}
