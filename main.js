
const imageContainer = document.getElementById("image-container")
const imageFilter = document.getElementById("image-filter")

const makeVisible = () => imageFilter.style.visibility = "visible"
const makeInvisible = () => imageFilter.style.visibility = "hidden"

imageContainer.addEventListener("mouseover", makeVisible);
imageContainer.addEventListener("mouseout", makeInvisible);