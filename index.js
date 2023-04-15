const shareButton = document.querySelector(".main__container_content__social_shareButton");
const shareBox = document.querySelector(".main__container_content__social_socialBox")

shareButton.addEventListener("click", () => {
    shareBox.classList.toggle("hidden");
})