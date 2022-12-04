var color = ['#84f0ba','#a5f2dc','#16f2dc']


document.querySelector('#main').addEventListener('mouseover', function(){
    document.querySelector('#main').style.background = color[Math.floor(Math.random() * color.length)]
})

