import * as THREE from "https://cdn.skypack.dev/three@0.152.2";

var scene,
  sceneLight,
  portalLight,
  cam,
  renderer,
  clock,
  portalParticles = [],
  smokeParticles = [];

function initScene() {
  scene = new THREE.Scene();

  //Basic White Light For Scene

  sceneLight = new THREE.DirectionalLight(0xffffff, 0.04);
  sceneLight.position.set(0, 0, 1);
  scene.add(sceneLight);

  //Light in the Center of the Portal

  portalLight = new THREE.PointLight(0x062d89, 30, 600, 1.7);
  portalLight.position.set(0, 0, 250);
  scene.add(portalLight);

  cam = new THREE.PerspectiveCamera(
    80,
    window.innerWidth / window.innerHeight,
    1,
    10000
  );
  cam.position.z = 1000;
  scene.add(cam);

  renderer = new THREE.WebGLRenderer();
  renderer.setClearColor(0x000000, 1);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  particleSetup();
}
function particleSetup() {
  let loader = new THREE.TextureLoader();

  // https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzIzMjEyNDM&ixlib=rb-4.0.3&q=80
  loader.load(
    "https://images.unsplash.com/photo-1608311821539-57a58f13b074?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzIzMjEwODg&ixlib=rb-4.0.3&q=80",
    function (texture) {
      let portalGeo = new THREE.PlaneGeometry(350, 350);
      let portalMaterial = new THREE.MeshStandardMaterial({
        map: texture,
        transparent: true
      });
      let smokeGeo = new THREE.PlaneGeometry(1000, 1000);
      let smokeMaterial = new THREE.MeshStandardMaterial({
        map: texture,
        transparent: true
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

      for (let p = 0; p < 100; p++) {
        let particle = new THREE.Mesh(smokeGeo, smokeMaterial);
        particle.position.set(
          Math.random() * 1000 - 500,
          Math.random() * 400 - 200,
          25
        );
        particle.rotation.z = Math.random() * 360;
        particle.material.opacity = 0.4;
        portalParticles.push(particle);
        scene.add(particle);
      }
      clock = new THREE.Clock();
      animate();
    }
  );
}
function animate() {
  let delta = clock.getDelta();
  portalParticles.forEach((p) => {
    p.rotation.z -= delta * 0.1;
  });
  smokeParticles.forEach((p) => {
    p.rotation.z -= delta * 0.3;
  });
  if (Math.random() > 0.9) {
    portalLight.power = 350 + Math.random() * 700;
  }
  renderer.render(scene, cam);
  requestAnimationFrame(animate);
}
initScene();
