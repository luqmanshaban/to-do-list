var color = ['#e8eded','#f8f2fc','#e9f7f7', "#d5e3e6"];

document.querySelector('.main').addEventListener('mouseover', function(){
    document.querySelector('.main').style.background = color[Math.floor(Math.random()*color.length)];
})
