import * as THREE from './libs/three/three.module.js';
import { OrbitControls } from './libs/three/jsm/OrbitControls.js';

class App
{
constructor()
{
const container = document.createElement( 'div' );
document.body.appendChild( container );

this.camera = new THREE.PerspectiveCamera( 60, window.innerWidth/window.innerHeight, 0.1, 100);
this.camera.position.set(0,0,4);

this.scene = new THREE.Scene();
this.scene.background = new THREE.Color(0xcc00cc);

const light = new THREE.DirectionalLight();
light.position.set(0.1,1,1);
this.scene.add(light);

const ambient = new THREE.HemisphereLight(0xffffff,0xffcc00,0.5);
this.scene.add(ambient);

this.renderer = new THREE.WebGLRenderer( { antialias:true } );
this.renderer.setPixelRatio( window.devicePixelRatio );
this.renderer.setSize( window.innerWidth, window.innerHeight );
container.appendChild( this.renderer.domElement );
this.renderer.setAnimationLoop( this.render.bind(this) );

const geometry = new THREE.CylinderBufferGeometry();
const material = new THREE.MeshStandardMaterial( { color: 0xffcc000 } );
this.mesh = new THREE.Mesh(geometry,material);
this.scene.add(this.mesh);

window.addEventListener( 'resize', this.resize.bind(this) );

const controls = new OrbitControls(this.camera,this.renderer.domElement);



}

resize()
{
 this.camera.aspect = window.innerWidth/window.innerHeight;
 this.camera.updateProjectionMatrix();
 this.renderer.setSize(window.innerWidth,window.innerHeight);
}

render()
{
    this.mesh.rotateY(0.1);
    this.renderer.render(this.scene,this.camera);
}
}

export { App }