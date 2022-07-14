// Query Selectors

const body = document.querySelector('body');
const wrapper = document.querySelector('.wrapper');
const container = document.querySelector('.container');
const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('button').forEach(item => {
    item.addEventListener('click', event => {
        console.log(item.value);
    });
});

buttons;

// for (let i = 0; i < buttons; i++) {
//     buttons[i].addEventListener('click', () => {
//         console.log(buttons[i].value);
//     });
// }
