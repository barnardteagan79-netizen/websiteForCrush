const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
let slides = document.querySelectorAll(".slide");
let index = 0;

nextBtn.onclick = function()
{
    index++;
    DisplaySlide(index);
}

prevBtn.onclick = function()
{
    index--;
    DisplaySlide(index);
}

function DisplaySlide(i)
{
    slides.forEach(slide =>
    {
        slide.classList.remove("Show");
    }
    );
    i = Math.abs(i);
    slides[i%slides.length].classList.add("Show");
}