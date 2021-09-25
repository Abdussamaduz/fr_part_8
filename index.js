// Scene, Camera, Render

let render = new THREE.WebGLRenderer();
let secene = new THREE.Scene();
let aspect = window.innerWidth / window.innerHeight;
let camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 1500);
let cameraRotation = 0;
let cameraRotationSpeed = 0.001;
let cameraAutoRotation = true;
let orbitControls = new THREE.orbitControls(camera);


// Lights
let spotLight = new THREE.SpotLight(0xffffff, 1.0, 10, 2);

// Texture Loader
let textureLoader = new THREE.TextureLoader();

// Planet Proto
let plaetProto = {
    sphere: function (size) {
        let sphere = new THREE.SphereGeometry(size, 32, 32);

        return sphere;
    },

    material: function (options) {
        let materials = new THREE.MeshPhongMaterial();
        if(options) {
            for(var property in options) {
                material[property] = options[property];
            }
        }
        return materials;
    }
}