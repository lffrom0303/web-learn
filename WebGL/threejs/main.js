import * as THREE from "three";
const el = document.getElementById("sceneCanvas");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera({
  fov: 45,
  aspect: window.innerWidth / window.innerHeight,
  near: 0.1,
  far: 1000,
  position: {
    x: 0,
    y: 0,
    z: 10,
  },
});
const renderer = new THREE.WebGLRenderer({
  canvas: el,
  antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
