import * as THREE from "https://cdn.skypack.dev/three@0.152.2";

var scene,
  sceneLight,
  portalLight,
  cam,
  renderer,
  // clock,
  portalParticles = [],
  smokeParticles = [],
  FOV,
  FAR;

function initScene() {
  scene = new THREE.Scene();

  // let ambient = new THREE.AmbientLight(0x8f84ad);
  // scene.add(ambient);

  // sceneLight = new THREE.DirectionalLight(0xffffff);
  // sceneLight.position.set(0, 0, 1);
  // scene.add(sceneLight);

  portalLight = new THREE.PointLight(0x1d2f51, 50, 600, 1.7);
  portalLight.position.set(0, 0, 250);
  scene.add(portalLight);

  // Mobile camera
  if (window.innerWidth <= 768) {
    FOV = 120;
    FAR = 1000;
    // 769px - 1080px screen width camera
  } else {
    FOV = 80;
    FAR = 800;
  }

  cam = new THREE.PerspectiveCamera(
    FOV,
    window.innerWidth / window.innerHeight,
    1,
    FAR
  );
  cam.position.z = 700;
  scene.add(cam);

  renderer = new THREE.WebGLRenderer({
    antialias: false,
  });
  renderer.setClearColor(0x000000, 1);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // let directionalLight = new THREE.DirectionalLight(0xfb8500);
  // directionalLight.position.set(0, 0, 1);
  // scene.add(directionalLight);

  let lightPurpleLight = new THREE.PointLight(0xd48fd4, 8, 1100);
  lightPurpleLight.position.set(-100, -100, 150);
  scene.add(lightPurpleLight);
  window.addEventListener("resize", onWindowResize, false);

  let blueLight = new THREE.PointLight(0xa9abdc, 8, 1100);
  blueLight.position.set(100, 100, 150);
  scene.add(blueLight);

  // const bg_loader = new THREE.TextureLoader();
  // bg_loader.load("assets/eye.webp", function (texture) {
  //   scene.background = texture;
  // });

  let loader = new THREE.TextureLoader();

  loader.load("./assets/smoke2.png", function (texture) {
    let portalGeo = new THREE.PlaneGeometry(350, 350);
    let portalMaterial = new THREE.MeshLambertMaterial({
      map: texture,
      transparent: true,
    });
    let smokeGeo = new THREE.PlaneGeometry(900, 600);
    let smokeMaterial = new THREE.MeshLambertMaterial({
      map: texture,
      transparent: true,
    });

    for (let p = 880; p > 250; p--) {
      let particle = new THREE.Mesh(portalGeo, portalMaterial);
      particle.position.set(
        0.5 * p * Math.cos((4 * p * Math.PI) / 180),
        0.5 * p * Math.sin((4 * p * Math.PI) / 180),
        0.1 * p
      );
      particle.rotation.z = Math.random() * 360;
      portalParticles.push(particle);
      scene.add(particle);
    }

    // for (let p = 0; p < 40; p++) {
    //   let particle = new THREE.Mesh(smokeGeo, smokeMaterial);
    //   particle.position.set(
    //     Math.random() * 850 - 500,
    //     Math.random() * 400 - 200,
    //     25
    //   );
    //   particle.rotation.z = Math.random() * 360;
    //   particle.material.opacity = 0.6;
    //   portalParticles.push(particle);
    //   scene.add(particle);
    // }
    // clock = new THREE.Clock();

    update();
  });
}

// function particleSetup() {}

function onWindowResize() {
  cam.aspect = window.innerWidth / window.innerHeight;
  cam.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener("load", () => {
  console.clear();

  const loading = document.getElementById("loading");
  loading.classList.add("loaded");

  initScene();
});

// function animate() {
//   let delta = clock.getDelta();
//   portalParticles.forEach((p) => {
//     p.rotation.z -= 0.01 * 0.9;
//   });
//   smokeParticles.forEach((p) => {
//     p.rotation.z -= 0.01 * 0.8;
//   });
//   renderer.render(scene, cam);
//   requestAnimationFrame(animate);
// }

let clock = new THREE.Clock();
let delta = 0;
// 30 fps
let interval = 1 / 30;

function update() {
  requestAnimationFrame(update);
  delta += clock.getDelta();

  if (delta > interval) {
    // The draw or time dependent code are here
    portalParticles.forEach((p) => {
      p.rotation.z -= 0.06 * 0.1;
    });
    // smokeParticles.forEach((p) => {
    //   p.rotation.z -= 0.00000000001;
    // });

    if (Math.random() > 0.9) {
      portalLight.power = 350 + Math.random() * 500;
    }
    renderer.render(scene, cam);

    delta = delta % interval;
  }
}
