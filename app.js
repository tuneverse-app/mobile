const songs = [

{
title:"LUNA",
artist:"Feid",
file:"assets/songs/luna.mp3",
cover:"assets/covers/luna.jpg"
},

{
title:"Q U E V A S H A C E R H O Y ?",
artist:"Omar Courtz, De La Rose",
file:"assets/songs/qvao.mp3",
cover:"assets/covers/qvao.jpg"
},

{
title:"Cuando No Era Cantante",
artist:"El Bogueto, Yung Beef",
file:"assets/songs/cuando_no_era_cantante.mp3",
cover:"assets/covers/cuando_no_era_cantante.jpg"
},

{
title:"Es Un Secreto",
artist:"Plan B",
file:"assets/songs/es_un_secreto.mp3",
cover:"assets/covers/es_un_secreto.jpg"
}

];

const container = document.getElementById("songsContainer");
const audio = document.getElementById("audio");

const cover = document.getElementById("cover");
const songTitle = document.getElementById("songTitle");
const artistName = document.getElementById("artistName");

const playBtn = document.getElementById("playBtn");

const miniPlayer = document.getElementById("miniPlayer");
const fullPlayer = document.getElementById("fullPlayer");
const closePlayer = document.getElementById("closePlayer");

const fullCover = document.getElementById("fullCover");
const fullTitle = document.getElementById("fullTitle");
const fullArtist = document.getElementById("fullArtist");

const fullPlayBtn = document.getElementById("fullPlayBtn");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const progress = document.getElementById("progress");
const progressBar = document.getElementById("progressBar");

const currentTimeText =
document.getElementById("currentTime");

const durationText =
document.getElementById("duration");

let currentSong = 0;

function formatTime(seconds){

const mins =
Math.floor(seconds / 60);

const secs =
Math.floor(seconds % 60);

return `${mins}:${secs
.toString()
.padStart(2,"0")}`;

}

function renderSongs(){

container.innerHTML = "";

songs.forEach((song,index)=>{

container.innerHTML += `

<div
class="card"
onclick="loadSong(${index})">

<img src="${song.cover}">

<div class="info">

<h4>${song.title}</h4>

<p>${song.artist}</p>

</div>

</div>

`;

});

}

function loadSong(index){

currentSong = index;

audio.src =
songs[index].file;

cover.src =
songs[index].cover;

fullCover.src =
songs[index].cover;

songTitle.textContent =
songs[index].title;

artistName.textContent =
songs[index].artist;

fullTitle.textContent =
songs[index].title;

fullArtist.textContent =
songs[index].artist;

audio.play();

playBtn.textContent = "⏸";
fullPlayBtn.textContent = "⏸";

}

playBtn.addEventListener(
"click",
()=>{

if(audio.paused){

audio.play();

playBtn.textContent = "⏸";
fullPlayBtn.textContent = "⏸";

}else{

audio.pause();

playBtn.textContent = "▶";
fullPlayBtn.textContent = "▶";

}

}
);

fullPlayBtn.addEventListener(
"click",
()=>{

if(audio.paused){

audio.play();

playBtn.textContent = "⏸";
fullPlayBtn.textContent = "⏸";

}else{

audio.pause();

playBtn.textContent = "▶";
fullPlayBtn.textContent = "▶";

}

}
);

miniPlayer.addEventListener(
"click",
()=>{

fullPlayer.classList.add(
"active"
);

}
);

closePlayer.addEventListener(
"click",
()=>{

fullPlayer.classList.remove(
"active"
);

}
);

prevBtn.addEventListener(
"click",
()=>{

currentSong--;

if(currentSong < 0){

currentSong =
songs.length - 1;

}

loadSong(currentSong);

}
);

nextBtn.addEventListener(
"click",
()=>{

currentSong++;

if(currentSong >= songs.length){

currentSong = 0;

}

loadSong(currentSong);

}
);

audio.addEventListener(
"timeupdate",
()=>{

if(audio.duration){

const percent =
(audio.currentTime /
audio.duration) * 100;

progress.style.width =
percent + "%";

currentTimeText.textContent =
formatTime(
audio.currentTime
);

durationText.textContent =
formatTime(
audio.duration
);

}

}
);

progressBar.addEventListener(
"click",
(e)=>{

const width =
progressBar.clientWidth;

const clickX =
e.offsetX;

audio.currentTime =
(clickX / width)
* audio.duration;

}
);

audio.addEventListener(
"ended",
()=>{

currentSong++;

if(currentSong >= songs.length){

currentSong = 0;

}

loadSong(currentSong);

}
);

renderSongs();
let likedSongs =
JSON.parse(
localStorage.getItem(
"likedSongs"
)
) || [];

likeBtn.addEventListener(
"click",
()=>{

const song =
songs[currentSong].title;

if(
likedSongs.includes(song)
){

likedSongs =
likedSongs.filter(
s => s !== song
);

likeBtn.textContent =
"🤍";

}else{

likedSongs.push(song);

likeBtn.textContent =
"❤️";

}

localStorage.setItem(
"likedSongs",
JSON.stringify(
likedSongs
)
);

}
);

playlistBtn.addEventListener(
"click",
()=>{

alert(
"Playlists próximamente 🚀"
);

}
);
