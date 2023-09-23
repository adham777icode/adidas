// HandWriteing Effect

let letters = "adidas, Egypt New Collection";
let title = document.getElementById("title");
let i = 0;
setInterval(() => {
    if (i < letters.length) {
        title.append(letters[i]);
        i++;
    }
},100);

// Responsive Menu

let res_menu = document.getElementById("res-menu");
let menu = document.getElementById("menu");
let is_clicked = false;

res_menu.addEventListener('click', () => {
    if (is_clicked === false) {
        is_clicked = true;
        res_menu.children[0].classList.add("fir");
        res_menu.children[1].classList.add("mid");
        res_menu.children[2].classList.add("las");
        menu.style.transform = "scaleX(1)";
    } else if (is_clicked === true) {
        is_clicked = false;
        res_menu.children[0].classList.remove("fir");
        res_menu.children[1].classList.remove("mid");
        res_menu.children[2].classList.remove("las");
        menu.style.transform = "scaleX(0)";
    }
});