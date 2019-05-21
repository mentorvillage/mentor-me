const images = document.querySelectorAll('.content-img');
// console.log(images);

images.forEach((image, i) => {
    image.addEventListener("mouseover", () => {
        image.style.borderColor = '#FFC966';
        event.preventDefault();

        setTimeout( () => {
            image.style.borderColor = "#3C42E5";
        }, 500);
    }, false);
});



const links = document.querySelectorAll('.nav-links');
// console.log(images);

links.forEach((link, i) => {
    link.addEventListener("mouseover", () => {
        link.style.color = '#FFC966';
        event.preventDefault();

        setTimeout( () => {
            link.style.color = "#FFFFFF";
        }, 500);
    }, false);
});
