let btn = document.getElementsByClassName("btn");
let slide = document.getElementById("slide");

btn[0].onclick = function() {
    slide.style.transform = "translateY(0px)";
    for(let i = 0; i < btn.length; i++) {
        btn[i].classList.remove("active");
    }
    this.classList.add("active");
}

btn[1].onclick = function() {
    slide.style.transform = "translateY(-490px)";
    for(let i = 0; i < btn.length; i++) {
        btn[i].classList.remove("active");
    }
    this.classList.add("active");
}

btn[2].onclick = function() {
    slide.style.transform = "translateY(-980px)";
    for(let i = 0; i < btn.length; i++) {
        btn[i].classList.remove("active");
    }
    this.classList.add("active");
}

btn[3].onclick = function() {
    slide.style.transform = "translateY(-1514px)";
    for(let i = 0; i < btn.length; i++) {
        btn[i].classList.remove("active");
    }
    this.classList.add("active");
}

btn[4].onclick = function() {
    slide.style.transform = "translateY(-2004px)";
    for(let i = 0; i < btn.length; i++) {
        btn[i].classList.remove("active");
    }
    this.classList.add("active");
}

btn[5].onclick = function() {
    slide.style.transform = "translateY(-2484px)";
    for(let i = 0; i < btn.length; i++) {
        btn[i].classList.remove("active");
    }
    this.classList.add("active");
}