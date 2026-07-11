const menubtn=document.querySelector(".menu-btn");
const sidebar=document.querySelector(".sidebar");
const closeBtn=document.querySelector(".close-btn");
menubtn.addEventListener("click",()=>{
    sidebar.classList.add("active");
});
closeBtn.addEventListener("click",()=>{
    sidebar.classList.remove("active");
});
document.querySelectorAll(".sidebar a").forEach(link=>{
    link.addEventListener("click",()=>{
        sidebar.classList.remove("active");
    });
});
window.addEventListener("load",()=>{
    const loader=document.getElementById("loader");
    setTimeout(() => {
        loader.style.opacity="0";
        setTimeout(() => {
    loader.style.display = "none";
    document.querySelector("#home").classList.add("show");
}, 500);
},1200);
});
const sections=document.querySelectorAll("section");
window.addEventListener("scroll",()=>{
    sections.forEach(section=>{
        const top=window.scrollY;
        const offset=section.offsetTop-300;
        if(top>=offset){
            section.classList.add("show");
        }
    });
});
const navLink=document.querySelectorAll(".sidebar a");
window.addEventListener("scroll",()=>{
    let current="";
    sections.forEach(section=>{
        const sectionTop=section.offsetTop-150;
        if(window.scrollY >= sectionTop){
            current=section.getAttribute("id");
        }
    });
    navLink.forEach(link=>{
        link.classList.remove("active");
        if(link.getAttribute("href")==="#"+current){
            link.classList.add("active");
        }
    });
});
window.addEventListener("scroll",()=>{
    const header=document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY>50);
});
const topBtn=document.createElement("div");
topBtn.innerHTML="↑";
topBtn.className="top-btn";
document.body.appendChild(topBtn);
window.addEventListener("scroll",()=>{
    if(window.scrollY>500){
        topBtn.classList.add("show");
    }else{
        topBtn.classList.remove("show");
    }
});
topBtn.onclick=()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
};
document.getElementById("contact-form".addEventListener)
"submit",function(e){
    e.preventDefault();
    emailjs.sendForm(
        "service_wllsxoe",
        "template_ozqqxp7",
        this
    ).then(function(){
        alert("Messge Sent Successfully!");
        document.getElementById("contact-form").reset();
    },function(error){
        alert("Failed to send message!");
        console.log(error);
    });
};
document.getElementById("openCertificates").onclick = function () {
    document.getElementById("certificateModal").style.display = "block";
};

document.getElementById("closeCertificates").onclick = function () {
    document.getElementById("certificateModal").style.display = "none";
};

window.onclick = function (event) {
    if (event.target == document.getElementById("certificateModal")) {
        document.getElementById("certificateModal").style.display = "none";
    }
};
const card = document.querySelector(".internship-card");
card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 20;
    const rotateX = ((y / rect.height) - 0.5) * -20;
    card.style.transform = `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.03)
    `;
});
card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
});
// ===== Circular Skills Animation =====

const circles = document.querySelectorAll(".circle");

circles.forEach(circle => {

    const progress = circle.querySelector(".progress");
    const number = circle.querySelector(".number h3");

    const percent = circle.getAttribute("data-percent");

    const radius = 60;
    const circumference = 2 * Math.PI * radius;

    progress.style.strokeDasharray = circumference;

    const offset = circumference - (percent / 100) * circumference;

    setTimeout(() => {
        progress.style.strokeDashoffset = offset;
    }, 300);

    let count = 0;

    const interval = setInterval(() => {

        if (count >= percent) {
            clearInterval(interval);
        } else {
            count++;
            number.textContent = count + "%";
        }

    }, 20);

});


