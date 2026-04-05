"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";

export function ThreeHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const cloudMeshesRef = useRef<THREE.Mesh[]>([]);
  const raycasterRef = useRef(new THREE.Raycaster());
  const mouseRef2 = useRef({ x: 0, y: 0 });
  const draggedCloudRef = useRef<THREE.Mesh | null>(null);
  const cloudNoiseRef = useRef<{ [key: number]: { noiseX: number; noiseY: number; noiseZ: number } }>({});

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0b140b);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    
    // Apply heavy blur filter for fluffy cloud effect
    renderer.domElement.style.filter = "blur(3px)";
    
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x00ff6a, 1, 100);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Create fluffy, blurry clouds using large soft spheres
    const cloudCount = 40;
    const cloudGroup = new THREE.Group();
    const cloudMeshes: THREE.Mesh[] = [];
    const cloudVelocities: { x: number; y: number; z: number }[] = [];

    // Large sphere geometry for fluffy clouds
    const cloudGeometry = new THREE.SphereGeometry(1, 16, 16);

    for (let i = 0; i < cloudCount; i++) {
      // Create multiple overlapping spheres per cloud for fluffiness
      const cloudSubGroup = new THREE.Group();

      for (let j = 0; j < 3; j++) {
        const cloudMaterial = new THREE.MeshStandardMaterial({
          color: 0xffffff,
          metalness: 0,
          roughness: 1,
          transparent: true,
          opacity: 0.15 + Math.random() * 0.1,
          emissive: 0xcccccc,
          emissiveIntensity: 0.3,
          side: THREE.DoubleSide,
        });

        const mesh = new THREE.Mesh(cloudGeometry, cloudMaterial);
        mesh.position.set(
          (Math.random() - 0.5) * 2,
          (Math.random() - 0.5) * 2,
          (Math.random() - 0.5) * 2
        );
        mesh.scale.set(
          0.8 + Math.random() * 0.6,
          0.8 + Math.random() * 0.6,
          0.8 + Math.random() * 0.6
        );
        cloudSubGroup.add(mesh);
      }

      cloudSubGroup.position.set(
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 15
      );

      cloudGroup.add(cloudSubGroup);
      cloudMeshes.push(cloudSubGroup as any);
      cloudVelocities.push({
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.01,
        z: (Math.random() - 0.5) * 0.02,
      });
      
      // Initialize Perlin noise offsets for each cloud
      cloudNoiseRef.current[i] = {
        noiseX: Math.random() * 1000,
        noiseY: Math.random() * 1000,
        noiseZ: Math.random() * 1000,
      };
    }

    scene.add(cloudGroup);
    cloudMeshesRef.current = cloudMeshes;

    // Text is now rendered in HTML layer, not in Three.js

    // Mouse tracking and dragging
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
      mouseRef2.current.x = e.clientX;
      mouseRef2.current.y = e.clientY;

      // Drag cloud if one is selected
      if (draggedCloudRef.current) {
        const raycaster = raycasterRef.current;
        const mouseVec = new THREE.Vector2(mouseRef.current.x, mouseRef.current.y);
        raycaster.setFromCamera(mouseVec, cameraRef.current!);
        
        // Move dragged cloud along the plane
        const planeZ = draggedCloudRef.current.position.z;
        const distance = (planeZ - cameraRef.current!.position.z) / raycaster.ray.direction.z;
        draggedCloudRef.current.position.x = raycaster.ray.origin.x + raycaster.ray.direction.x * distance;
        draggedCloudRef.current.position.y = raycaster.ray.origin.y + raycaster.ray.direction.y * distance;
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      const raycaster = raycasterRef.current;
      const mouseVec = new THREE.Vector2(mouseRef.current.x, mouseRef.current.y);
      raycaster.setFromCamera(mouseVec, cameraRef.current!);
      const intersects = raycaster.intersectObjects(cloudMeshesRef.current, true);
      
      if (intersects.length > 0) {
        let parent = intersects[0].object.parent;
        while (parent && !cloudMeshesRef.current.includes(parent as any)) {
          parent = parent.parent;
        }
        if (parent && cloudMeshesRef.current.includes(parent as any)) {
          draggedCloudRef.current = parent as THREE.Mesh;
        }
      }
    };

    const handleMouseUp = () => {
      draggedCloudRef.current = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Simple Perlin-like noise function
    const noise = (x: number) => {
      const n = Math.sin(x) * 43758.5453;
      return n - Math.floor(n);
    };

    let time = 0;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.008;

      // Update cloud positions
      if (cloudMeshesRef.current && cloudMeshesRef.current.length > 0) {
        for (let i = 0; i < cloudMeshesRef.current.length; i++) {
          const cloud = cloudMeshesRef.current[i];
          const vel = cloudVelocities[i];
          const noiseOffsets = cloudNoiseRef.current[i];

          // Only apply drift if cloud is not being dragged
          if (draggedCloudRef.current !== cloud) {
            // Use Perlin-like noise for smooth random drift with lower frequency
            const noiseX = noise(noiseOffsets.noiseX + time * 0.3) * 2 - 1;
            const noiseY = noise(noiseOffsets.noiseY + time * 0.25) * 2 - 1;
            const noiseZ = noise(noiseOffsets.noiseZ + time * 0.28) * 2 - 1;

            // Apply noise-based velocity with smooth, larger movements
            vel.x = noiseX * 0.08;
            vel.y = noiseY * 0.06;
            vel.z = noiseZ * 0.06;

            // Update position
            cloud.position.x += vel.x;
            cloud.position.y += vel.y;
            cloud.position.z += vel.z;

            // Wrap around with larger bounds to prevent bunching
            if (cloud.position.x > 20) cloud.position.x = -20;
            if (cloud.position.x < -20) cloud.position.x = 20;
            if (cloud.position.y > 15) cloud.position.y = -15;
            if (cloud.position.y < -15) cloud.position.y = 15;
            if (cloud.position.z > 12) cloud.position.z = -12;
            if (cloud.position.z < -12) cloud.position.z = 12;
          }

          // Gentle rotation
          cloud.rotation.x += 0.00015;
          cloud.rotation.y += 0.00025;
          cloud.rotation.z += 0.0001;
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: "none", zIndex: 0 }}
    />
  );
}
