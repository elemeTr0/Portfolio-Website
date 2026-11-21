const projects = [
    {
        name: "HOP - LIVE CHAT",
        img1: "./project-pics/p1/pic3.png",
        img2: "./project-pics/p1/pic1.png",
        img3: "./project-pics/p1/pic2.png",
        desc: "A functional chatting app",
    },
    {
        name: "PROJECT MANAGER",
        img1: "",
        img2: "",
        img3: "",
        desc: "",
    },
    {
        name: "E-COMMERCE APP",
        img1: "",
        img2: "",
        img3: "",
        desc: "",
    },
];

const title = document.getElementById("project-title");
const desc = document.getElementById("project-desc");

const leftImage = document.getElementById("leftImage");
const mainImage = document.getElementById("mainImage");
const rightImage = document.getElementById("rightImage");

const curr = 0;

title.textContent = projects[curr].name;
desc.textContent = projects[curr].desc;

leftImage.src = projects[curr].img1;
mainImage.src = projects[curr].img2;
rightImage.src = projects[curr].img3;