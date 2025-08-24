document.addEventListener(
    "DOMContentLoaded",
    function () {
      var days = document.querySelector(".days span");
      var hour = document.querySelector(".hour");
      var min = document.querySelector(".min");
      var second = document.querySelector(".second");
      var d= new Date();
      var startDate = new Date(2023, 03, 23);
      var startDate1 = new Date(d.getFullYear(),d.getMonth()+1, d.getDate());
      days.innerText = Math.floor((startDate1 - startDate) / 86400000);
      countTime();
  
      function countTime() {
        
        let today = new Date();
        let ms = (today - startDate) % 86400000;
        hour.innerText = Math.floor(ms / 3600000);
        min.innerText = Math.floor((ms % 3600000) / 60000);
        second.innerText = Math.floor(((ms % 3600000) % 60000) / 1000);
      }
  
      setInterval(countTime, 1000);
    },
    false
  );

  // Tạo ra một mảng các hạt mưa tuyết
let snowflakes = [];

// Thiết lập tốc độ và số lượng hạt mưa tuyết
const numFlakes = 100;
const speed = 2;

const card = document.querySelector(".card");

document.addEventListener("mousemove", (e) => {
  let x = (window.innerWidth / 2 - e.pageX) / 25;
  let y = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

document.addEventListener("mouseleave", () => {
  card.style.transform = "rotateY(0deg) rotateX(0deg)";
});