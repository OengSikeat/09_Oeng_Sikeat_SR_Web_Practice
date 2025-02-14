const warriorInput = document.getElementById("warrior-input");
const warriorSelect = document.getElementById("warrior-select");
const catImage = document.getElementById("catImage");
const catName = document.getElementById("cat-name");
const catDescription = document.getElementById("cat-description");
const searchButton = document.getElementById("search-button");
const searchForm = document.getElementById("search-form");
const info = document.getElementById("info");
const error = document.getElementById("errornotice");

warriorSelect.addEventListener("change", () => {
  if (warriorSelect.value === "none") {
    warriorInput.disabled = true;
    warriorInput.value = "";
  } else {
    warriorInput.disabled = false;
  }

  if (warriorSelect.value === "id") {
    warriorInput.type = "number";
    warriorInput.placeholder = "Enter the ID of the warrior";
  } else {
    warriorInput.type = "text";
    warriorInput.placeholder = "Enter the name of the warrior";
  }
  warriorInput.style.color = "black";
});

warriorInput.addEventListener("click", () => {
  info.classList.add("hidden");
  warriorInput.value = "";
  catImage.src = "";
});

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const search = warriorInput.value.trim();
  const contentElement = document.querySelector(".hidden, .warrior-content");

  if (warriorSelect.value === "id") {
    if (Number(search) === 1) {
      contentElement?.classList.remove("hidden");
      error.innerHTML = "";
      updateCat(
        "https://pbs.twimg.com/media/GFdyZG8X0AADOZb.jpg",
        "Khalid",
        "Khalid is a cat warrior who is a master of the sword and the bow."
      );
    } else if (Number(search) === 2) {
      contentElement?.classList.remove("hidden");
      error.innerHTML = "";
      updateCat(
        "https://us-tuna-sounds-images.voicemod.net/088e1aac-5559-4ed7-a563-1e66829610b6-1710041068109.png",
        "Usman",
        "Usman is a cat warrior who is a master of the sword and the bow."
      );
    } else if (Number(search) === 3) {
      error.innerHTML = "";
      contentElement?.classList.remove("hidden");
      updateCat(
        "https://i.ytimg.com/vi/O08XTXJSOtI/maxresdefault.jpg",
        "Muhammad",
        "Muhammad is a cat warrior who is a master of the sword and the bow."
      );
    } else {
      console.log("object");
      error.innerHTML = "enter a valid number";
      info.classList.add("hidden");
      warriorInput.value = "";
      catImage.src = "";
    }
  } else if (warriorSelect.value === "name") {
    if (search.toLowerCase() === "khalid") {
      error.innerHTML = "";
      contentElement?.classList.remove("hidden");
      updateCat(
        "https://pbs.twimg.com/media/GFdyZG8X0AADOZb.jpg",
        "Khalid",
        "Khalid is a cat warrior who is a master of the sword and the bow."
      );
    } else if (search.toLowerCase() === "usman") {
      error.innerHTML = "";
      contentElement?.classList.remove("hidden");
      updateCat(
        "https://us-tuna-sounds-images.voicemod.net/088e1aac-5559-4ed7-a563-1e66829610b6-1710041068109.png",
        "Usman",
        "Usman is a cat warrior who is a master of the sword and the bow."
      );
    } else if (search.toLowerCase() === "muhammad") {
      error.innerHTML = "";
      contentElement?.classList.remove("hidden");
      updateCat(
        "https://i.ytimg.com/vi/O08XTXJSOtI/maxresdefault.jpg",
        "Muhammad",
        "Muhammad is a cat warrior who is a master of the sword and the bow."
      );
    } else {
      error.innerHTML = "enter the correct name";
      info.classList.add("hidden");
      warriorInput.value = "";
      catImage.src = "";
      contentElement;
    }
  }
});

function updateCat(imageSrc, name, description) {
  catImage.src = imageSrc;
  catName.textContent = name;
  catDescription.textContent = description;
}
