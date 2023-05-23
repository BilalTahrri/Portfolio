
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            // Unobserve the element to prevent further intersection events
            observer.unobserve(entry.target);
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
const text = document.querySelectorAll(".sec-text");

const textload = () =>{
    setTimeout(() => {
        text.textcontent = "web developer"

    },0);
    setTimeout(() => {
        text.textcontent = "Blogger"

    },4000);
    setTimeout(() => {
        text.textcontent = "Youtuber"

    },8000);
}
textload()







