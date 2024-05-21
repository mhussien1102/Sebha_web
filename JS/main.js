const countBtn = document.getElementById("count-btn");
const counter = document.getElementById("counter");
const head = document.querySelector("h2");
const rb = document.getElementById("reset-count");
let c = 0;

countBtn.addEventListener('click', () => {
    c++;
    counter.textContent = c;

    if (c > 33 && c <= 66) {
        head.textContent = "الحمد الله";
    }
    else if (c > 66 && c <= 99) {
        head.textContent = "الله اكبر";
    }
    if (c == 100) {
        head.textContent = "لا اله اللي انت سبحانك اني كنت من الظالمين";
    }

    if (c > 100) {
        c = 0;
        c++;
        head.textContent = "سبحان الله ";

        counter.textContent = c;
    }

})




rb.addEventListener('click', () => {
    c = 0;
    counter.textContent = c;
    head.textContent = "سبحان الله";
})


function toggleDarkMode() {
    const bodyElement = document.body;
    bodyElement.classList.toggle("dark-mode");
}