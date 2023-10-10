import * as THREE from 'three';
import {
  OrbitControls
} from 'three/addons/controls/OrbitControls.js';

// 创建3D场景对象Scene
const scene = new THREE.Scene();

//创建一个长方体几何对象Geometry
const geometry = new THREE.BoxGeometry(100, 100, 100);

//创建球几何对象
const 球 = new THREE.SphereGeometry(80);


//创建一个材质对象Material
const material = new THREE.MeshLambertMaterial({
  color: 'red',
  //0xff0000设置材质颜色为红色
  transparent: true, //开启透明
  opacity: 0.8, //设置透明度
});

// 模拟镜面反射，产生一个高光效果
const 高光材质 = new THREE.MeshPhongMaterial({
  transparent: true,
  opacity: 0.8,
  color: 'gold',
  shininess: 30, //高光部分的亮度，默认30
  specular: 'gold', //高光部分的颜色
});

const 金材质 = new THREE.MeshPhysicalMaterial({
  color: 'gold',
  metalness: 1.0, //金属度属性
  roughness: 0.5, //表面粗糙度
})

// 线材质对象
const 线材质 = new THREE.LineBasicMaterial({
  color: 'gold', //线条颜色
  metalness: 1.0,
  roughness: 0.5,
});

// 创建线模型对象
const line = new THREE.Line(球, 金材质);
scene.add(line);

//网格模型对象Mesh
//两个参数分别为几何体geometry、材质material
const mesh = new THREE.Mesh(geometry, material);

const 球模型 = new THREE.Mesh(球, 高光材质);

//把网格模型mesh添加到三维场景scene中。
scene.add(mesh);
scene.add(球模型);

//设置网格模型在三维空间中的位置坐标，默认是坐标原点
mesh.position.set(0, 0, 0);
球模型.position.set(50, 150, 50);

//环境光:没有特定方向，整体改变场景的光照明暗
const ambient = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambient);

// 平行光
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
// 设置光源的方向：通过光源position属性和目标指向对象的position属性计算
directionalLight.position.set(100, 100, 100);
// 方向光指向对象网格模型mesh，可以不设置，默认的位置是0,0,0
directionalLight.target = mesh;
scene.add(directionalLight);
/*
//点光源：两个参数分别表示光源颜色和光照强度
// 参数1：0xffffff是纯白光,表示光源颜色
// 参数2：1.0,表示光照强度，可以根据需要调整
const pointLight = new THREE.PointLight(0xffffff, 1, 0, 0);
pointLight.position.set(360, 500, 650);
//点光源放在x轴上
scene.add(pointLight); //点光源添加到场景中
*/
// AxesHelper：辅助观察的坐标系
const axesHelper = new THREE.AxesHelper(500);
scene.add(axesHelper);

// 定义相机输出画布的尺寸(单位:像素px)
const width = window.innerWidth; //宽度
const height = window.innerHeight; //高度

// 视场角度, width / height
//Canvas画布宽高比, 1:近裁截面, 3000：远裁截面
const camera = new THREE.PerspectiveCamera(30, width / height, 1, 3000)

// 实例化一个透视投影相机对象

//相机在Three.js三维坐标系中的位置
// 根据需要设置相机位置具体值
camera.position.set(350, 360, 600);

//相机观察目标指向Threejs 3D空间中某个位置
camera.lookAt(0, 0, 0);
//默认是坐标原点


// 创建渲染器对象
const renderer = new THREE.WebGLRenderer({
  antialias: true
});

//设置three.js渲染区域的尺寸(像素px)
renderer.setSize(width, height);

// 获取你屏幕对应的设备像素比.devicePixelRatio告诉threejs,以免渲染模糊问题
renderer.setPixelRatio(window.devicePixelRatio);

renderer.setClearColor('black', 1); //设置背景颜色

//执行渲染操作
renderer.render(scene, camera);
//document.body.appendChild(renderer.domElement);
const canvas = document.getElementById('WebGL');
canvas.appendChild(renderer.domElement);

// 设置相机控件轨道控制器OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
// 如果OrbitControls改变了相机参数，重新调用渲染器渲染三维场景
controls.addEventListener('change', function () {
    renderer.render(scene, camera); //执行渲染操作
});//监听鼠标、键盘事件





