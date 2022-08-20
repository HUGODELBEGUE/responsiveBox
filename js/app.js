/*
let child = [].slice.call(projectsBox.children)
let root = document.createElement('div')
root.setAttribute('class', 'hello')
projectsBox.appendChild(root)
child.forEach((childen) => {
    root.appendChild(childen)
})
console.log(root)
debugger
*/


// Intègre la box au container
const container = document.getElementById('container');
let box = document.createElement('div');
box.setAttribute('id', 'box')
container.appendChild(box);
let b = document.getElementById('box')

// Récupère la largeur et hauteur de la box
let widthBox = b.offsetWidth;
let heigthBox = b.offsetHeight;
let widthContainer = window.innerWidth;
let heigthContainer = window.innerHeight;

// window.addEventListener('resize', () => {
//     let scale = Math.min(
//         widthContainer / heigthContainer,
//         widthBox / heigthBox
//     );
//     b.style.transform = "scale(" + scale + ")";
// })





console.log(widthBox)
console.log(heigthBox)
console.log(widthContainer)
console.log(heigthContainer)
console.log(window.innerWidth)