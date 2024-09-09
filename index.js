"use strict";
const imgEl = document.getElementById("bg_img");
const imgCoverEl = document.getElementById("cover");
const musicTitleEl = document.getElementById("music_title");
const musicArtistEl = document.getElementById("music_artist");
const playerProgressEl = document.getElementById("player_progress");
const progressEl = document.getElementById("progress");
const currentTimeEl = document.getElementById("current_time");
const durationEl = document.getElementById("duration");
const prevBtnEl = document.getElementById("prev");
const playvBtnEl = document.getElementById("play");
const nextvBtnEl = document.getElementById("next");

const shuffleBtnEl = document.getElementById("shuffle");
let isShuffle = false;

// Toggle Shuffle Mode
function toggleShuffle() {
  isShuffle = !isShuffle;
  shuffleBtnEl.classList.toggle("active");
  console.log("Shuffle mode:", isShuffle);  // Check if this is being printed
}

// Modify the changeMusic function to handle shuffle mode
function changeMusic(direction) {
  if (isShuffle) {
    const previousIndex = musicIndex;
    while (previousIndex === musicIndex) {
      musicIndex = Math.floor(Math.random() * songs.length);  // Pick a random song ensuring it's not the same song
    }
  } else {
    musicIndex = (musicIndex + direction + songs.length) % songs.length;  // Normal next/previous song
  }
  loadMusic(songs[musicIndex]);
  playMusic();
}

// Add event listener for the shuffle button
shuffleBtnEl.addEventListener("click", toggleShuffle);

// Ensure other buttons work
playvBtnEl.addEventListener("click", togglePlay);
nextvBtnEl.addEventListener("click", () => changeMusic(1));
prevBtnEl.addEventListener("click", () => changeMusic(-1));



const songs = [
  {
    path: "music/Animals.mp3",
    displayName: "ANIMALS",
    cover: "images/animals.jpg",
    artist: "MAROON5",
  },
  {
    path: "music/baby_Dont_Hurt_Me.mp3",
    displayName: "BABY DON'T HURT ME",
    cover: "images/david_guetta.jpg",
    artist: "Bebe rexha",
  },
  {
    path: "music/Sing_for_the_moment.mp3",
    displayName: "SING FOR THE MOMENT",
    cover: "images/eminem.jpg",
    artist: "eminem",
  },
  {
    path: "music/Hey_ma.mp3",
    displayName: "HEY MA(SPANISH)",
    cover: "images/hey_ma.jpg",
    artist: "Camila cabello",
  },
  {
    path: "music/Kun_Faaya_kun.mp3",
    displayName: "ROCKSTAR",
    cover: "images/rockstar.jpg",
    artist: "MOHIT CHAUHAN",
  },
  {
    path: "music/Zaroorat .mp3",
    displayName: "EK VILLAIN",
    cover: "images/villain.jfif",
    artist: "MOHIT CHAUHAN",
  },
  {
    path: "music/Adheeraa.mp3",
    displayName: "ADHEERA",
    cover: "images/adheera.jpg",
    artist: "COBRA",
  },
];

const music = new Audio();
let musicIndex = 0;
let isPlaying = false;

//================== Play Song  True or False====================
function togglePlay() {
  if (isPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
}

//================== Play Music====================
function playMusic() {
  isPlaying = true;
  playvBtnEl.classList.replace("fa-play", "fa-pause");
  playvBtnEl.setAttribute("title", "pause");
  music.play();
}

//================== Pause Music====================
function pauseMusic() {
  isPlaying = false;
  playvBtnEl.classList.replace("fa-pause", "fa-play");
  playvBtnEl.setAttribute("title", "play");
  music.pause();
}

//================== Load Songs ====================
function loadMusic(song) {
  music.src = song.path;
  musicTitleEl.textContent = song.displayName;
  musicArtistEl.textContent = song.artist;
  imgCoverEl.src = song.cover;
  imgEl.src = song.cover;
}

//================== Change Music ====================
function changeMusic(direction) {
  musicIndex = (musicIndex + direction + songs.length) % songs.length;
  loadMusic(songs[musicIndex]);
  playMusic();
}

//================== Set Progress ====================
function setProgressBar(e) {
  const width = playerProgressEl.clientWidth;
  const xValue = e.offsetX;
  music.currentTime = (xValue / width) * music.duration;
}

// random_bg_color();


// function random_bg_color() {
//   let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
//   let a;

//   function populate(a) {
//       for (let i = 0; i < 6; i++) {
//           let x = Math.round(Math.random() * 14);
//           let y = hex[x];
//           a += y;
//       }
//       return a;
//   }

//   let Color1 = populate('#');
//   let Color2 = populate('#');
//   let angle = 'to right';

//   let gradient = 'linear-gradient(' + angle + ',' + Color1 + ', ' + Color2 + ")";
//   document.body.style.background = gradient;
// }

//================== Update Progress Bar ====================
function updateProgressBar() {
  const { duration, currentTime } = music;
  const progressPercent = (currentTime / duration) * 100;
  progressEl.style.width = `${progressPercent}%`;
  
  const formatTime = (time) => String(Math.floor(time)).padStart(2, "0");
  
  if (duration) {
    durationEl.textContent = `${formatTime(duration / 60)}:${formatTime(duration % 60)}`;
  }
  currentTimeEl.textContent = `${formatTime(currentTime / 60)}:${formatTime(currentTime % 60)}`;
}

//================= Button Events========================
const btnEvents = () => {
  playvBtnEl.addEventListener("click", togglePlay);
  nextvBtnEl.addEventListener("click", () => changeMusic(1));
  prevBtnEl.addEventListener("click", () => changeMusic(-1));

  //========= Progress Bar===========================
  music.addEventListener("ended", () => changeMusic(1));
  music.addEventListener("timeupdate", updateProgressBar);
  playerProgressEl.addEventListener("click", setProgressBar);
};

//================= DOM Content Loaded Event ========================
document.addEventListener("DOMContentLoaded", btnEvents);

//============ Calling Load Music
loadMusic(songs[musicIndex]);
