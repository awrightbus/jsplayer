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
        audio: "assets/music/bmo.mp3",
    },
    {
        key: 3,
        image: "assets/images/sweetner.png",
        song: "Sweetner",
        artist: "Ariana Grande",
        audio: "assets/music/sweetner.mp3",
    },
    {
        key: 4,
        image: "assets/images/kyle.jpg",
        song: "Brown",
        artist: "Kyle Dion",
        audio: "assets/music/brown.mp3",
    },
    {
        key: 5,
        image: "assets/images/gonnabeme.jpeg",
        song: "It's Gonna Be Me",
        artist: "*NSYNC",
        audio: "assets/music/nsync.mp3"
    }
]

let next = 0;
//initilize code 
init = () => {
    audio.src = mySongs[next].audio;
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

pauseSong = () => {
    audio.pause();
    const playButton = document.getElementById('pause-btn').src='assets/images/play.png';
}

playSong = () => {

   if(audio.paused){
       audio.play();
       const pauseButton = document.getElementById('pause-btn').src='assets/images/pause.png';
       
   }else{
       
       pauseSong();
       
   }

}



prevButton.addEventListener('click', () => prevSong());
nextButton.addEventListener('click', () => nextSong());  
playButton.addEventListener('click', () => playSong()); 
 

