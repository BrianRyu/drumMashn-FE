// const divSkinTag = document.querySelector('.my-skin')
// const skinUrl = 'http://localhost:3000/api/v1/skin'
// fetch(skinUrl)
// .then( res => res.json() )
// .then( skin => {
// divSkinTag.innerHTML += `<img src=${skin[0].skin_url}>` 
// } )
//drop down box with select genre
//value of the return will be the value being passed in for skin = skin.find( id => id.id === *1*);

const padClassTag = document.querySelector('.pad')
const padUrl = 'http://localhost:3000/api/v1/sounds'


// dropdown should change id's of each pad
const dropDownSelect = document.querySelector('select.dropdown-content')

const addDropDownSelect = (genre) => {
      return `<option value=${genre.id}> ${genre.name} </option>`
}
fetch(padUrl)
.then((resp) => {
      return resp.json()
}).then((resp) => {
     resp.forEach((sound) => {
           dropDownSelect.innerHTML += addDropDownSelect(sound);
     })
})

// drop down logic complete


// pad appear on skin logic 
const selectTag = document.querySelector('select')
selectTag.addEventListener('change', (event) => {

      let newId = parseInt(event.target.value)
      fetch(padUrl)
      .then( res => res.json() )
      .then( sounds => {
            
      sound = sounds.find(sound => sound.id === newId);
      pad1 = sound['pad_1']
      pad2 = sound['pad_2']
      pad3 = sound['pad_3']
      pad4 = sound['pad_4']
      pad5 = sound['pad_5']
      pad6 = sound['pad_6']
      pad7 = sound['pad_7']
      pad8 = sound['pad_8']
      let padArray = []
      let x = 1
      padArray.push(pad1,pad2,pad3,pad4,pad5,pad6,pad7,pad8)
      padClassTag.innerHTML = ''
      padArray.forEach((url) => {
      padClassTag.innerHTML += `<div class="box pad-${x}">${x}
      <input type="button" value="PLAY"  onclick="play('audio${x}')">
      <audio id="audio${x}" src="${url}" ></audio>

      </button></div>`
      x++ 
      
      })
})
})



 function play(value){
       var audio = document.getElementById(`${value}`);
       audio.play();
                 }
// pads appear on skin logic end ----


/////////////////////////

// const AudioContext = window.AudioContext || window.webkitAudioContext;

// const audioContext = new AudioContext();

// // get the audio element
// const audioElement = document.querySelector('audio');

// // pass it into the audio context
// const track = audioContext.createMediaElementSource(audioElement);

