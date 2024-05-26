console.log("Welcome to SnowyPlay")

//Initialize the Variables

let songIndex = 0;
let audioElement = new Audio('arjit/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressBar = document.getElementById('myprogressBar');
let gif = document.getElementById('gif');
let masterName = document.getElementById('masterName');
let songList = Array.from(document.getElementsByClassName("songs-list"));


let songs = [
    {songName: "Kabhi Jo Badal Barse" , filePath: "arjit/1.mp3"},
    {songName: "Tere Sang Ishq" , filePath: "arjit/2.mp3"},
    {songName: "Herriye" , filePath: "arjit/3.mp3"},
    {songName: "Channa Mereya" , filePath: "arjit/4.mp3"},
    {songName: "Halka Halka Sa" , filePath: "arjit/5.mp3"},
    {songName: "Tu Har Lamha" , filePath: "arjit/6.mp3"},
    {songName: "Adha Tera Ishq" , filePath: "arjit/7.mp3"},
    {songName: "O Mahi" , filePath: "arjit/8.mp3"},
    {songName: "Tu Mohabbat Hai" , filePath: "arjit/9.mp3"},
    {songName: "Tenu Ishq Main" , filePath: "arjit/10.mp3"},
]




//Handle Play/Pause Click

masterPlay.addEventListener('click', () =>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
}
)
// Listen To Events

audioElement.addEventListener('timeupdate', () => {

    //Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
    myprogressBar.value = progress;
})

myprogressBar.addEventListener('change', () =>{
    audioElement.currentTime = myprogressBar.value * audioElement.duration/100;
})


//Next 

document.getElementById('next').addEventListener('click', () => {
    if(songIndex>=16){
        songIndex = 0
    } else {
        songIndex += 1;
    }

    audioElement.src = `arjit/${songIndex+1}.mp3`;
    masterName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})


//Previous

document.getElementById('previous').addEventListener('click', () => {
    if(songIndex<= 0){
        songIndex = 0
    } else {
        songIndex -= 1;
    }

    audioElement.src = `arjit/${songIndex+1}.mp3`;
    masterName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})