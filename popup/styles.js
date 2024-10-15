const buttons = document.querySelectorAll(".tab_btn");
const content = document.querySelectorAll(".content");


buttons.forEach((button, index) => {
    button.addEventListener('click',(e) => {
        buttons.forEach(btn => {btn.classList.remove('active')});
        button.classList.add("active");

        var line = document.querySelector(".line");
        line.style.width = e.target.offsetWidth + "px";
        line.style.left = e.target.offsetLeft + "px";


        content.forEach((con) => {con.classList.remove("active")});
        content[index].classList.add("active");
    });
})