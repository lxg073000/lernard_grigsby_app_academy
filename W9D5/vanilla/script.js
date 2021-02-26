document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });

  // adding SF places as list items

  const $faveSubmit = document.getElementsByClassName("favorite-submit")[0];

  $faveSubmit.addEventListener("click", (e) => {
    e.preventDefault();

    let $input = document.getElementsByClassName("favorite-input")[0].value;
    const fave = $input;
    document.getElementsByClassName("favorite-input")[0].value = "";
    const $newFave = document.createElement("li");
    $newFave.textContent = fave;
    const $faveUL = document.getElementById("sf-places");
    $faveUL.append($newFave);
  });

  // adding new photos
  const $photoShowbutton = document.getElementsByClassName(
    "photo-show-button"
  )[0];
  $photoShowbutton.addEventListener("click", (e) => {
    // debugger;
    e.preventDefault();
    var $photoForm = document.getElementsByClassName("photo-form-container")[0];
    $photoForm.classList.toggle("hidden");
  });

  const $photoURLSubmit = document.getElementsByClassName(
    "photo-url-submit"
  )[0];
  $photoURLSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    // debugger;

    const $newPhoto = document.createElement("img");
    const $newPhotoInput = document.getElementsByClassName(
      "photo-url-input"
    )[0];
    let $photoSRC = $newPhotoInput.value;
    $newPhoto.src = $photoSRC;
    $newPhotoInput.value = "";

    const $photoLI = document.createElement("li");
    $photoLI.append($newPhoto);
    const $photoUL = document.getElementsByClassName("dog-photos")[0];
    $photoUL.append($photoLI);
  });
});
