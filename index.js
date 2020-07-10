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

let next = 0;
//initilize code 
init = () => {
    image.src = mySongs[next].image;
    song.textContent = mySongs[next].song;
    artist.textContent = mySongs[next].artist;
};

init();


nextSong = () => {

    if(next === mySongs.length ){
        next = 0;
    }

    image.src = mySongs[next].image;
    song.textContent = mySongs[next].song;
    artist.textContent = mySongs[next].artist;
    next++;
    console.log(next,"for index");
    console.log(mySongs.length,"song length");
        
}


prevSong = () => {

    if(next === mySongs.length ){
        next = 5;
    }

    image.src = mySongs[next].image;
    song.textContent = mySongs[next].song;
    artist.textContent = mySongs[next].artist;
    console.log(next,"for index");
    console.log(mySongs.length,"song length");
    next--;  
}
       


prevButton.addEventListener('click', () => prevSong());
nextButton.addEventListener('click', () => nextSong());  

    

