console.log("Welcome to SnowyPlay")

//Initialize the Variables

let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressBar = document.getElementById('myprogressBar');
let gif = document.getElementById('gif');
let masterName = document.getElementById('masterName');
let songList = Array.from(document.getElementsByClassName("songs-list"));


let songs = [
    {songName: "Look What you made me do" , filePath: "1.mp3"},
    {songName: "Forever and Always" , filePath: "2.mp3"},
    {songName: "Haunted" , filePath: "3.mp3"},
    {songName: "Dress" , filePath: "4.mp3"},
    {songName: "Safe & Sound" , filePath: "5.mp3"},
    {songName: "You'are on your own,Kid" , filePath: "6.mp3"},
    {songName: "Maroon" , filePath: "7.mp3"},
    {songName: "I wish you would" , filePath: "8.mp3"},
    {songName: "Exile" , filePath: "9.mp3"},
    {songName: "Welcome to New York" , filePath: "10.mp3"},
    {songName: "Daylight" , filePath: "11.mp3"},
    {songName: "Lavender Haze" , filePath: "12.mp3"},
    {songName: "Gorgeous" , filePath: "13.mp3"},
    {songName: "Mean" , filePath: "14.mp3"},
    {songName: "Blank Space" , filePath: "15.mp3"},
    {songName: "Delicate" , filePath: "16.mp3"},
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

    audioElement.src = `${songIndex+1}.mp3`;
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

    audioElement.src = `${songIndex+1}.mp3`;
    masterName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})