const audio = document.getElementById('audio');
const image = document.querySelector('.img');
const song = document.querySelector('.song');
const artist = document.querySelector('.artist');
const prevButton = document.querySelector('.prev-btn');
const playButton = document.querySelector('.play-btn');
const nextButton = document.querySelector('.next-btn');


const mySongs = [
    {
        key: 1,
        image: "assets/images/dojaCat.png",
        song: "In Your Eyes",
        artist: "The Weekend",
        audio: "assets/music/inYourEyes.mp3",
    },
    {
        key: 2,
        image: "assets/images/bmo.jpg",
        song: "BMO",
        artist: "Ari Lennox",
        audio: "",
    },
    {
        key: 3,
        image: "assets/images/sweetner.png",
        song: "Sweetner",
        artist: "Ariana Grande",
        audio: "",
    },
    {
        key: 4,
        image: "assets/images/kyle.jpg",
        song: "Brown",
        artist: "Kyle Dion",
        audio: "",
    },
    {
        key: 5,
        image: "assets/images/gonnabeme.jpeg",
        song: "It's Gonna Be Me",
        artist: "*NSYNC",
        audio: ""
    }
]

let next = 0;
//initilize code 
init = () => {
    audio.src = mySongs[next].audio;
    console.log(audio.src);
    image.src = mySongs[next].image;
    song.textContent = mySongs[next].song;
    artist.textContent = mySongs[next].artist;
};

init();

nextSong = () => {
    if(next === mySongs.length){
        next = 0;      
    }
    audio.src = mySongs[next].audio;
    image.src = mySongs[next].image;
    song.textContent = mySongs[next].song;
    artist.textContent = mySongs[next].artist;
    next++;          
}

prevSong = () => {
    if(next < 0){
        next = mySongs.length -1;
    }
    audio.src = mySongs[next].audio;
    image.src = mySongs[next].image;
    song.textContent = mySongs[next].song;
    artist.textContent = mySongs[next].artist;
    next--;
      
}
let isPlaying = false;

playSong = () => {
   
   audio.paused ? audio.play() : audio.pause();
}

prevButton.addEventListener('click', () => prevSong());
nextButton.addEventListener('click', () => nextSong());  
playButton.addEventListener('click', () => playSong()); 
    

