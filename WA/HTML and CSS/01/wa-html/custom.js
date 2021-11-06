const obj_dados = {
    curso: "CRIAÇÃO COM HTML E CSS",
    escola: "World Academy"
}

// make all links open in blank window
var links = document.querySelectorAll("a");
links.forEach(blankIt);
function blankIt(item, index) {
    item.target = "_blank";
}

// update all dom references of .js-curso
const dom_curso = document.querySelectorAll(".js-curso");
for (const item of dom_curso) {
    item.innerHTML = obj_dados.curso;
}

// update all dom references of .js-date
const dom_date = document.querySelectorAll(".js-date");
for (const item of dom_date) {
    item.textContent = getYear();
}

// Course and teacher ID
var div1 = document.createElement('div');
var div2 = document.createElement('div');

div1.textContent = obj_dados.curso;
div2.innerHTML = `<strong>Formador:</strong> Paulo Figueiredo | ${obj_dados.escola} ${getYear()}`;

div1.classList.add("autor", "autor-top", "hide");
div2.classList.add("autor", "autor-bottom", "hide");

document.body.appendChild(div1);
document.body.appendChild(div2);
console.log(div1, 'poop');

Reveal.addEventListener('slidechanged', function (event) {
    // event.previousSlide, event.currentSlide, event.indexh, event.indexv
    if (event.indexh == 0 && event.indexv == 0) {
        div1.classList.add('hide');
        div2.classList.add('hide');
    } else {
        div1.classList.remove('hide');
        div2.classList.remove('hide');
    }
});

// get current year
function getYear() {
    var d = new Date();
    var n = d.getFullYear();
    return n;
}