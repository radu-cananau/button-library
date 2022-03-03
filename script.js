const btns = document.querySelectorAll('.btn');

const para = document.createElement("p");
const node = document.createTextNode("I've been clicked!");
para.appendChild(node);

btns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        const clicked = e.currentTarget;
        clicked.after(para);
    })
});