// let darkmode = document.getElementById('js-dark');

// darkmode.addEventListener('click', function () {
//     darkmode.classList.toggle('darkmode');
// });

// class Darkmode {
//     constructor(element) {
//         this.element = element;
//         this.button = this.element.querySelector('.darkmode');
//         this.button.addEventListener('click', () => { this.toggleButton()})
//     }

//     toggleButton() {
//         this.content.classList.toggle('body');
//     }
// }

// let darkmode = document.querySelectorAll('.darkmode').forEach(dark => new Darkmode(dark));


class DarkMode {
    constructor(element) {
        this.element = element;
        console.log(element);
        // this.darkButton = this.element.querySelector('.darkmode');
        // this.darkButton.addEventListener('click', () => { this.darkModeButton() });
    }
    // darkModeButton() {
    //     this.element.classList.roggle('darkmode');
    // }
}

let darkmode = document.querySelectorAll('.darkmode').forEach(dark => {
    new DarkMode(dark);
});

// darkmode.addEventListener('click', function () {
//     darkmode.classList.toggle('darkmode');
// });