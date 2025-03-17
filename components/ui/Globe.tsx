'use client'

import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import ThreeGlobe from 'three-globe'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export default function Globe() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    if (!containerRef.current) return
    
    // Store reference to the container element to avoid the ESLint warning
    const container = containerRef.current
    
    // Initialize renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(container.clientWidth, container.clientHeight)
    container.appendChild(renderer.domElement)
    
    // Create scene with dark background
    const scene = new THREE.Scene()
    scene.background = new THREE.Color('#07081f') // Slightly lighter dark blue background
    
    // Configure camera
    const camera = new THREE.PerspectiveCamera(
      75, 
      container.clientWidth / container.clientHeight, 
      0.1, 
      1000
    )
    camera.position.z = 200
    
    // Create data for towers
    const gData = Array(100).fill(0).map(() => ({
      lat: (Math.random() - 0.5) * 180,
      lng: (Math.random() - 0.5) * 360,
      height: Math.random() * 0.15 + 0.05,
      color: '#5effc7', // Lime green color
      size: Math.random() * 2 + 1,
    }));
    
    // Create data for satellite dots
    const satelliteDots = Array(50).fill(0).map(() => ({
      lat: (Math.random() - 0.5) * 180,
      lng: (Math.random() - 0.5) * 360,
      alt: 0.25 + Math.random() * 0.1,
      radius: 0.25 + Math.random() * 0.25,
      color: ['#ffffff', '#4c83ff', '#fb44ff'][Math.floor(Math.random() * 3)],
    }));
    
    // Create globe
    const globe = new ThreeGlobe()
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
      .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
      .hexPolygonsData(gData)
      .hexPolygonColor('color')
      .hexPolygonAltitude('height')
      .hexPolygonMargin(0.05)
      .hexPolygonResolution(3)
      .hexPolygonCurvatureResolution(5)

    
    // Add glowing atmosphere
    const atmosphereGeometry = new THREE.SphereGeometry(1.025, 32, 32);
    const atmosphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x0066ff,
      transparent: true,
      opacity: 0.08,
      side: THREE.BackSide
    });
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    globe.add(atmosphere);
    
    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)
    
    const directionalLight = new THREE.DirectionalLight(0x4c83ff, 1.0)
    directionalLight.position.set(1, 1, 1)
    scene.add(directionalLight)
    
    const secondLight = new THREE.DirectionalLight(0xfb44ff, 0.7)
    secondLight.position.set(-1, -1, -1)
    scene.add(secondLight)
    
    // Add globe to scene
    scene.add(globe)
    
    // Create orbit controls but disable user interaction
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableZoom = false
    controls.enablePan = false
    controls.enableRotate = false
    
    // Position and rotate globe
    globe.rotation.y = Math.PI * 1.5 // Start position
    globe.rotation.x = Math.PI * 0.1 // Slight tilt
    
    // Auto-rotation function
    const autoRotate = () => {
      globe.rotation.y += 0.001 // Very slow rotation speed
    }
    
    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    }
    
    window.addEventListener('resize', handleResize)
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)
      autoRotate()
      controls.update()
      renderer.render(scene, camera)
    }
    
    animate()
    
    // Cleanup
    return () => {
      if (container) {
        try {
          container.removeChild(renderer.domElement)
        } catch (e) {
          console.warn('Error removing renderer from DOM:', e)
        }
      }
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  
  return (
    <div 
      ref={containerRef} 
      style={{ 
        width: '100%', 
        height: '100%', 
        minHeight: '300px'
      }}
    />
  )
}