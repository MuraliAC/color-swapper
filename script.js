const images = document.querySelectorAll('.image');

function handleClick(event) {
    event.target.parentElement.prepend(event.target);
}

images.forEach(image => {
    image.addEventListener('click', handleClick);
});
