const image = document.querySelector('.img');
const song = document.querySelector('.song');
const artist = document.querySelector('.artist');
const prevButton = document.querySelector('.prev-btn');
const playButton = document.querySelector('.play-btn');
const nextButton = document.querySelector('.next-btn');


const mySongs = [
    {
        id: 1,
        image: "assets/images/dojaCat.png",
        song: "In Your Eyes",
        artist: "The Weekend",
        audio: "",
    },
    {
        id: 2,
        image: "assets/images/bmo.jpg",
        song: "BMO",
        artist: "Ari Lennox",
        audio: "",
    },
    {
        id: 3,
        image: "assets/images/sweetner.png",
        song: "Sweetner",
        artist: "Ariana Grande",
        audio: "",
    },
    {
        id: 4,
        image: "assets/images/kyle.jpg",
        song: "Brown",
        artist: "Kyle Dion",
        audio: "",
    },
    {
        id: 5,
        image: "assets/images/gonnabeme.jpeg",
        song: "It's Gonna Be Me",
        artist: "*NSYNC",
        audio: ""
    }
]

let songs = mySongs;
let i = 0;



nextSong = () => {
    
    image.src = songs[i].image;
    song.textContent = songs[i].song;
    artist.textContent = songs[i].artist;
    i++;
    
};

prevSong = () => {
    
    image.src = songs[i].image;
    song.textContent = songs[i].song;
    artist.textContent = songs[i].artist;
    i--;
    
};
    

prevButton.addEventListener('click', () => prevSong());
nextButton.addEventListener('click', () => nextSong());  

    

