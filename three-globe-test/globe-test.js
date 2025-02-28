import * as THREE from 'three';
import ThreeGlobe from 'three-globe';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOMContentLoaded event fired for ThreeGlobe test (with logging)."); // Log start

    const globeContainer = document.getElementById('globeContainer');
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    globeContainer.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#ADD8E6');

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 200; // Adjust camera position for globe

    let globe;
    try {
        console.log("Attempting to instantiate ThreeGlobe..."); // Log before instantiation
        globe = new ThreeGlobe(); // Minimal ThreeGlobe instantiation
        console.log("ThreeGlobe instance created successfully:", globe); // Log if successful
    } catch (error) {
        console.error("Error during ThreeGlobe instantiation:", error); // Log error if instantiation fails
        return; // Stop execution if ThreeGlobe instantiation fails
    }

    scene.add(globe);

    const controls = new OrbitControls(camera, renderer.domElement);

    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    }
    animate();

    console.log("ThreeGlobe rendering setup completed (if instantiation was successful)."); // Log if setup completes
});