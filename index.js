const divSkinTag = document.querySelector('.my-skin')
const skinUrl = 'http://localhost:3000/api/v1/skin'
fetch(skinUrl)
.then( res => res.json() )
.then( skin => {
divSkinTag.innerHTML += `<img src=${skin[0].skin_url}>` 
} )
//drop down box with select genre


const padClassTag = document.querySelector('.pad')
const padUrl = 'http://localhost:3000/api/v1/sounds'
fetch(padUrl)
.then( res => res.json() )
.then( skin => {
skin = skin.find( id => id.id === 1);
pad1 = skin['pad_1']
pad2 = skin['pad_2']
pad3 = skin['pad_3']
pad4 = skin['pad_4']
pad5 = skin['pad_5']
pad6 = skin['pad_6']
pad7 = skin['pad_7']
pad8 = skin['pad_8']
let padArray = []
let x = 1
padArray.push(pad1,pad2,pad3,pad4,pad5,pad6,pad7,pad8)
padArray.forEach((url) => {

padClassTag.innerHTML += `<div class="box pad-${x}">${x}
<input type="button" value="PLAY"  onclick="play('audio${x}')">
<audio id="audio${x}" src="${url}" ></audio>

</button></div>`
 x++ }  )
} )
 function play(value){
       var audio = document.getElementById(`${value}`);
       audio.play();
                 }

/////////////////////////

// const AudioContext = window.AudioContext || window.webkitAudioContext;

// const audioContext = new AudioContext();

// // get the audio element
// const audioElement = document.querySelector('audio');

// // pass it into the audio context
// const track = audioContext.createMediaElementSource(audioElement);
