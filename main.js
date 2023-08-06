function getTime() {
  var time = new Date();
  var hour = time.getHours();
  var minute = time.getMinutes();
  var second = time.getSeconds();

  return `${hour}:${minute}:${second}`;
}

function getDate() {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();

  return `${day}-${month}-${year}`;
}
document.getElementById("date").innerHTML = getDate();
setInterval(function() {
  document.getElementById("time").innerHTML = getTime();
}, 1000);
console.log("Welcome to Spotify");
  //initial variable
let songIndex=0;
const audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('progressbar');
let gif = document.getElementById('gif');
let songlists = Array.from(document.getElementsByClassName('songlist'));
let mastersongname = document.getElementById('mastersongname');
let songs = [
  {songName: "Warriyo - Mortals", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
  {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
  {songName: "DEAF KEV - Invincible", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
  {songName: "Different Heaven & EH!DE", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
  {songName: "Janji-Heroes-Tonight", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
  {songName: "Rabba", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
  {songName: "Sakhiyaan", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
  {songName: "Bhula Dena", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
  {songName: "Tumhari Kasam", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
  {songName: "Na Jaana", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
]

songlists.forEach((element, i)=>{
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("name")[0].innerText = songs[i].songName;
})


masterPlay.addEventListener('click', ()=>{
  if ( audioElement.paused || audioElement<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
  }
  else{
    audioElement.pause();
    masterPlay.classList.remove('fa-circle-pause');
    masterPlay.classList.add('fa-circle-play');
    gif.style.opacity = 0;
   }
})

//progress-bar update

audioElement.addEventListener('timeupdate',()=>{
  progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    progressBar.value = progress;
  })

progressBar.addEventListener('change',()=>{
  audioElement.currentTime = (progressBar.value*audioElement.duration)/100;
})
const makeAllPlay = ()=>{
  Array.from(document.getElementsByClassName('songitem')).forEach(element => {
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
  })
}
Array.from(document.getElementsByClassName('songitem')).forEach(element => {
  element.addEventListener('click',(e)=>{
    console.log(e.target);
    songIndex = parseInt(e.target.id);
    makeAllPlay();
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    mastersongname.innerText = songs[songIndex].songName;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;

  })  
})


document.getElementById('forward').addEventListener('click',()=>{
  if(songIndex >=9){
    songIndex = 0;
  }
  else{
    songIndex +=1;
  }
  audioElement.src = `songs/${songIndex+1}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  mastersongname.innerText = songs[songIndex].songName;
  masterPlay.classList.remove('fa-circle-play');
  masterPlay.classList.add('fa-circle-pause');
  gif.style.opacity = 1;
})

document.getElementById('previous').addEventListener('click',()=>{
  if(songIndex<=0){
    songIndex = 9;
  }
  else{
    songIndex -=1;
  }
  audioElement.src = `songs/${songIndex+1}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  mastersongname.innerText = songs[songIndex].songName;
  masterPlay.classList.remove('fa-circle-play');
  masterPlay.classList.add('fa-circle-pause');
  gif.style.opacity = 1;
})
    