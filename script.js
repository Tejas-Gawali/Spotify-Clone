console.log("Welcome to Spotify")
let songindex=1
let audioElement= new Audio('songs/1.mp3');
let masterplay=  document.getElementById('masterplay');
let myProgressbar = document.getElementById('myProgressbar');
let gif = document.getElementById('gif');
let songsItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName: "1", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "2", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "3", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "4", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "5", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "6", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "7", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "8", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "9", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "10", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
]
songsItems.forEach((element, i)=>{
    
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
})


masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity= 1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity= 0;
    }
})
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myProgressbar.value = progress;
})
myProgressbar.addEventListener('change', ()=>{
    audioElement.currentTime= myProgressbar.value* audioElement.duration /100;
})

const makeAllPlays = ()=>{
    
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songindex = parseInt(e.target.id);
        console.log(songindex);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songindex}.mp3`;
        audioElement.currentTime =0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songindex>9){
        songindex=1;
    }else{
        songindex +=1;
    }
    audioElement.src = `songs/${songindex}.mp3`;
    audioElement.currentTime =0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songindex<1){
        songindex=1;
    }else{
        songindex -=1;
    }
    audioElement.src = `songs/${songindex}.mp3`;
    audioElement.currentTime =0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    
})