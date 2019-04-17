
///////////////////////
////BEGIN 3D scene creation
///////////////////////
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

//Create some particles
//////////////////////
var tex = new THREE.TextureLoader().load("https://static.wixstatic.com/media/6641d6_b083a3071334433f809d9daf8bba0fcb~mv2.png");
  // load the texture
var partGeom
var particleSystem
var particles = 100000;
var radius = 500;
var positions = [];
var colors = [];
var sizes = [];
partGeom = new THREE.BufferGeometry();
var color = new THREE.Color();
var shaderMaterial = new THREE.PointsMaterial( { 
    size: 3,
    sizeAttenuation: false,
    alphaTest: 0.5, 
    transparent: true,
    map: tex  } );

for ( var i = 0; i < particles; i ++ ) {
            positions.push( ( Math.random() * 2 - 1 ) * radius );
            positions.push( ( Math.random() * 2 - 1 ) * radius );
            positions.push( ( Math.random() * 2 - 1 ) * radius );
            color.setHSL( i / particles, 1.0, 0.5 );
            colors.push( color.r, color.g, color.b );
            sizes.push( 200 );
        }

partGeom.addAttribute( 'position', new THREE.Float32BufferAttribute( positions, 3 ) );
partGeom.addAttribute( 'color', new THREE.Float32BufferAttribute( colors, 3 ) );
partGeom.addAttribute( 'size', new THREE.Float32BufferAttribute( sizes, 4 ).setDynamic( true ) );

particleSystem = new THREE.Points( partGeom, shaderMaterial );
scene.add( particleSystem );
//////////////////////

camera.position.z = -70;
camera.position.y = 0;
camera.position.x = 0;


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
    //PUT any movement you want in here
    while (camera.position.x >= 400 ){
    camera.position.x = -100
}
camera.position.x += 0.1
//THIS makes the camera move every millisecond


    controls.update()

    renderer.render( scene, camera );
};

animate()
//CREATE A '#container' div for the 3D world to render inside of, place all your web page inside that container
//<div id="container"> </div>
/////////////////////////////////////////////ADD THESE SCRIPTS FOR THIS ALL TO WORK
/////<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
  // <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/103/three.js"></script>
  // <script src="https://threejs.org/examples/js/controls/OrbitControls.js"></script>
  // <script src='https://rawgit.com/jeromeetienne/threex.domevents/master/threex.domevents.js'>
