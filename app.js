const container = document.querySelector(".container");

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
      // let title = document.createElement('h3');
      // title.innerText = photo.title;

      // hoverDiv.appendChild(title);
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
    generateMasonryGrid(1, photos);
  } else if (
    window.innerWidth >= 600 &&
    window.innerWidth < 1000 &&
    (previousScreenSize < 600 || previousScreenSize >= 1000)
  ) {
    generateMasonryGrid(2, photos);
  } else if (window.innerWidth >= 1000 && previousScreenSize < 1000) {
    generateMasonryGrid(4, photos);
  }
  previousScreenSize = window.innerWidth;
});

if (previousScreenSize < 600) {
  generateMasonryGrid(1, photos);
} else if (previousScreenSize >= 600 && previousScreenSize < 1000) {
  generateMasonryGrid(2, photos);
} else {
  generateMasonryGrid(4, photos);
}
