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

const container =
document.getElementById(
"songsContainer"
);

const audio =
document.getElementById(
"audio"
);

const cover =
document.getElementById(
"cover"
);

const songTitle =
document.getElementById(
"songTitle"
);

const artistName =
document.getElementById(
"artistName"
);

const playBtn =
document.getElementById(
"playBtn"
);

let currentSong = 0;

function renderSongs(){

container.innerHTML="";

songs.forEach(
(song,index)=>{

container.innerHTML += `

<div
class="card"
onclick="loadSong(${index})">

<img
src="${song.cover}">

<div class="info">

<h4>
${song.title}
</h4>

<p>
${song.artist}
</p>

</div>

</div>

`;

});

}

function loadSong(index){

currentSong=index;

audio.src=
songs[index].file;

cover.src=
songs[index].cover;

songTitle.textContent=
songs[index].title;

artistName.textContent=
songs[index].artist;

audio.play();

playBtn.textContent=
"⏸";

}

playBtn.addEventListener(
"click",
()=>{

if(audio.paused){

audio.play();

playBtn.textContent=
"⏸";

}else{

audio.pause();

playBtn.textContent=
"▶";

}

});

renderSongs();
