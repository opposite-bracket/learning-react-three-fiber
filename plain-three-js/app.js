import * as THREE from './three.module.js'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75, // FOV
    window.innerWidth / window.innerHeight, // aspect
    0.1, // near cliping plane
    1000,  // far cliping plane
);

const renderer = new THREE.WebGLRenderer();
// size of canvas
renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({
    color: 'blue',
});

// move the camera backwards, otherwise,
// both the object and the camera will in the same position
camera.position.z = 5;

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// attach renderer to body of html
document.body.appendChild(
    renderer.domElement
);

const animate = () => {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
    // update canvas size when window resizes
    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );
    // update the ratio of the camera, otherwise,
    // the canvas will shrink with the screen.
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
})

animate();