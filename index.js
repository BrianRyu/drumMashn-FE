
const container3d = document.querySelector('#container')
//SCene
var scene = new THREE.Scene();

//camera
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
//renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
container3d.appendChild( renderer.domElement );


function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

///Start building geomatry///////
let geometry = new THREE.SphereGeometry(10,10,10)
let material = new THREE.MeshNormalMaterial({wireframe: true})

//Create 8 spheres for each pad
let sphere1 = new THREE.Mesh(geometry, material)
scene.add(sphere1)

let sphere2 = new THREE.Mesh(geometry, material)
scene.add(sphere2)

let sphere3 = new THREE.Mesh(geometry, material)
scene.add(sphere3)

let sphere4 = new THREE.Mesh(geometry, material)
scene.add(sphere4)
let sphere5 = new THREE.Mesh(geometry, material)
scene.add(sphere5)
let sphere6 = new THREE.Mesh(geometry, material)
scene.add(sphere6)
let sphere7 = new THREE.Mesh(geometry, material)
scene.add(sphere7)
let sphere8 = new THREE.Mesh(geometry, material)
scene.add(sphere8)



camera.position.z = 500;






let controls = new THREE.OrbitControls(camera, renderer.domElement)
controls.minDistance = 1
controls.maxDistance = 1000
var t1 =0
var t2 =0
var t3 =0
var t4 =0
var t5 =0
var t6 =0
var t7 =0
var t8 =0
///////////////////////////
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
};
//////////////////////////
var animate = function () {

    requestAnimationFrame( animate );

    t1 += 0.0052;  
    sphere1.rotation.x += 0.01
    sphere1.rotation.z += 0.02
    sphere1.position.x = 20*Math.cos(t1) + 0;
    sphere1.position.z = 20*Math.sin(t1) + 0; // These to strings make it work
    t2 += -0.0052
    sphere2.rotation.x += 0.001
    sphere2.rotation.z += 0.02
    // sphere2.position.x = 40*Math.cos(t2) + 0;
    // sphere2.position.z = 40*Math.sin(t2) + 0; // These to strings make it work
    t3 += 0.0059
    sphere3.rotation.x += 0.002
    sphere3.rotation.z += 0.02
    // sphere3.position.x = 10*Math.cos(t3) + 0;
    // sphere3.position.z = 12*Math.sin(t3) + 0; // These to strings make it work
    t4 += 0.0053
    sphere4.rotation.x += 0.001
    sphere4.rotation.z += 0.02
    // sphere4.position.x = 20*Math.cos(t4) + 0;
    // sphere4.position.z = 20*Math.sin(t4) + 0; // These to strings make it work
    t5 += -0.0057
    sphere5.rotation.x += 0.002
    sphere5.rotation.z += 0.02
    // sphere5.position.x = 20*Math.cos(t5) + 0;
    // sphere5.position.z = 20*Math.sin(t5) + 0; // These to strings make it work
    t6 += -0.0055
    sphere6.rotation.x += 0.001
    sphere6.rotation.z += 0.02
    // sphere6.position.x = 20*Math.cos(t6) + 0;
    // sphere6.position.z = 20*Math.sin(t6) + 0; // These to strings make it work
    t7 += -0.0054
    sphere7.rotation.x += 0.002
    sphere7.rotation.z += 0.02
    // sphere7.position.x = 20*Math.cos(t7) + 0;
    // sphere7.position.z = 20*Math.sin(t7) + 0; // These to strings make it work
    t8 += -0.058
    sphere8.rotation.x += 0.001
    sphere8.rotation.z += 0.02
    // sphere8.position.x = 20*Math.cos(t8) + 0;
    // sphere8.position.z = 20*Math.sin(t8) + 0; // These to strings make it work
    
camera.position.z = 10;

        
        // var randomPositionValue = getRandomArbitrary(-2, 2);

  //start shrinking spheres
    // sphere1.scale.x += 0.001
    // sphere1.scale.y += 0.001
    // sphere1.scale.z += 0.001
    //     sphere2.scale.x -= 0.001
    // sphere2.scale.y -= 0.001
    // sphere2.scale.z -= 0.001
    //     sphere3.scale.x -= 0.001
    // sphere3.scale.y -= 0.001
    // sphere3.scale.z -= 0.001
    //     sphere4.scale.x -= 0.001
    // sphere4.scale.y -= 0.001
    // sphere4.scale.z -= 0.001
    //     sphere5.scale.x -= 0.001
    // sphere5.scale.y -= 0.001
    // sphere5.scale.z -= 0.001
    //     sphere6.scale.x -= 0.001
    // sphere6.scale.y -= 0.001
    // sphere6.scale.z -= 0.001
    //     sphere7.scale.x -= 0.001
    // sphere7.scale.y -= 0.001
    // sphere7.scale.z -= 0.001
    //     sphere8.scale.x -= 0.001
    // sphere8.scale.y -= 0.0001
    // sphere8.scale.z -= 0.001
   
    controls.update()

    renderer.render( scene, camera );
};






/////////////////////////
///AUDIO 
//////////


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
     
      <audio id="audio${x}" src="${url}" ></audio>

      </div>`
      x++ 
      
      })
})
})




 function play(value){
       var audio = document.getElementById(`${value}`);
       audio.play();
                 }

//////////////
/////END AUDIO
/////////////////
var randomScaleValue = getRandomArbitrary(-0.1, 0.1);
animate()
padClassTag.addEventListener('click', (event) => {
    // debugger
   switch (event.target.innerText) {
    case '1':
    console.log("pad 1 pressed")
    play(event.target.lastElementChild.id)
   
    sphere1.scale.x += randomScaleValue
    sphere1.scale.y += randomScaleValue
    sphere1.scale.z += randomScaleValue
    break;
    case '2':
    console.log("pad 2 pressed")
    play(event.target.lastElementChild.id)
   
    sphere2.scale.x += randomScaleValue
    sphere2.scale.y += randomScaleValue
    sphere2.scale.z += randomScaleValue
    break;
    case '3':
    console.log("pad 3 pressed")
    play(event.target.lastElementChild.id)
    
    sphere3.scale.x += randomScaleValue
    sphere3.scale.y += randomScaleValue
    sphere3.scale.z += randomScaleValue
    break;
    case '4':
    console.log("pad 4 pressed")
    play(event.target.lastElementChild.id)
   
    sphere4.scale.x += randomScaleValue
    sphere4.scale.y += randomScaleValue
    sphere4.scale.z += randomScaleValue
    break;
    case '5':
    console.log("pad 5 pressed")
    play(event.target.lastElementChild.id)
  
    sphere5.scale.x += randomScaleValue
    sphere5.scale.y += randomScaleValue
    sphere5.scale.z += randomScaleValue
    break;
    case '6':
    console.log("pad 6 pressed")
    play(event.target.lastElementChild.id)

    sphere6.scale.x += randomScaleValue
    sphere6.scale.y += randomScaleValue
    sphere6.scale.z += randomScaleValue
    break;
    case '7':
    console.log("pad 7 pressed")
    play(event.target.lastElementChild.id)
 
    sphere7.scale.x += randomScaleValue
    sphere7.scale.y += randomScaleValue
    sphere7.scale.z += randomScaleValue
    break;
    case '8':
    console.log("pad 8 pressed")
    play(event.target.lastElementChild.id)

    sphere8.scale.x += randomScaleValue
    sphere8.scale.y += randomScaleValue
    sphere8.scale.z += randomScaleValue
    break;
   }
})
//Work on adding key listeners

// pads appear on skin logic end ----



document.addEventListener('keypress', function (e) {
	debugger
    if (e.key === '1') {
    console.log("1 key pressed")
    document.getElementById('audio1').load()
    document.getElementById('audio1').play()
    sphere1.scale = {x: 1, y: 1, z: 1}
    sphere1.scale.x += randomScaleValue
    sphere1.scale.y += randomScaleValue
    sphere1.scale.z += randomScaleValue
    }
    if (e.key === '2') {
    console.log("2 key pressed")
    document.getElementById('audio2').load()
    document.getElementById('audio2').play()
    sphere2.scale = {x: 1, y: 1, z: 1}
    sphere2.scale.x += randomScaleValue
    sphere2.scale.y += randomScaleValue
    sphere2.scale.z += randomScaleValue
    }
    if (e.key === '3') {
    console.log("3 key pressed")
    document.getElementById('audio3').load()
    document.getElementById('audio3').play()
    sphere3.scale = {x: 1, y: 1, z: 1}
    sphere3.scale.x += randomScaleValue
    sphere3.scale.y += randomScaleValue
    sphere3.scale.z += randomScaleValue
    }
        if (e.key === '4') {
    console.log("4 key pressed")
    document.getElementById('audio4').load()
    document.getElementById('audio4').play()
    sphere4.scale = {x: 1, y: 1, z: 1}
    sphere4.scale.x += randomScaleValue
    sphere4.scale.y += randomScaleValue
    sphere4.scale.z += randomScaleValue
    }
        if (e.key === '5') {
    console.log("5 key pressed")
    document.getElementById('audio5').load()
    document.getElementById('audio5').play()
    sphere5.scale = {x: 1, y: 1, z: 1}
    sphere5.scale.x += randomScaleValue
    sphere5.scale.y += randomScaleValue
    sphere5.scale.z += randomScaleValue
    }
        if (e.key === '6') {
    console.log("6 key pressed")
    document.getElementById('audio6').load()
    document.getElementById('audio6').play()
    sphere6.scale = {x: 1, y: 1, z: 1}
    sphere6.scale.x += randomScaleValue
    sphere6.scale.y += randomScaleValue
    sphere6.scale.z += randomScaleValue
    }
        if (e.key === '7') {
    console.log("7 key pressed")
    document.getElementById('audio7').load()
    document.getElementById('audio7').play()
    sphere7.scale = {x: 1, y: 1, z: 1}
    sphere7.scale.x += randomScaleValue
    sphere7.scale.y += randomScaleValue
    sphere7.scale.z += randomScaleValue
    }
        if (e.key === '8') {
    console.log("8 key pressed")
    document.getElementById('audio8').load()
    document.getElementById('audio8').play()
    sphere8.scale = {x: 1, y: 1, z: 1}
    sphere8.scale.x += randomScaleValue
    sphere8.scale.y += randomScaleValue
    sphere8.scale.z += randomScaleValue
    }
});

