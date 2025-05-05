const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');

const videoList = [video1, video2, video3];


// sidebar elements //
const sidebar = document.querySelector('.sidebar'); 
const menu = document.querySelector('.menu-icon');





videoList.forEach(function(video){
    video.addEventListener('mouseover',function(){
        video.play()
    })
    video.addEventListener('mouseout',function(){
        video.pause()
    })
})

// sidebar elements //
menu.addEventListener("click", function(){ 
    sideBar.classList.add("open-sidebar") 
    })
    
    