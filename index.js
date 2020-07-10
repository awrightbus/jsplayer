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
        audio: "",
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

//logic for what to do when it goes past the last element
let next = 0;

nextSong = () => {
    image.src = mySongs[next].image;
    song.textContent = mySongs[next].song;
    artist.textContent = mySongs[next].artist;
    console.log(next,"forward");
    next++;
    
}
    
prevSong = () => {
    image.src = mySongs[next].image;
    song.textContent = mySongs[next].song;
    artist.textContent = mySongs[next].artist;
    next--;
    console.log(next,"back");
    
}
       




prevButton.addEventListener('click', () => prevSong());
nextButton.addEventListener('click', () => nextSong());  

    

