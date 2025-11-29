"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Line, Points, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

type AttackType =
  | "ransomware"
  | "phishing"
  | "ddos"
  | "data-breach"
  | "malware"
  | "apt"
  | "insider-threat";

type AttackLocation = {
  lat: number;
  lng: number;
  intensity: number;
  type: AttackType;
};

type SecurityCenter = {
  lat: number;
  lng: number;
  name: string;
};

const attackLocations: AttackLocation[] = [
  { lat: 40.7, lng: -74.0, intensity: 0.9, type: "ransomware" }, // NYC
  { lat: 51.5, lng: -0.1, intensity: 0.8, type: "phishing" }, // London
  { lat: 35.7, lng: 139.8, intensity: 0.7, type: "ddos" }, // Tokyo
  { lat: 51.7, lng: 149.8, intensity: 0.9, type: "ddos" }, // Pacific
  { lat: 37.8, lng: -122.4, intensity: 0.9, type: "data-breach" }, // SF
  { lat: 1.3, lng: 103.8, intensity: 0.6, type: "malware" }, // Singapore
  { lat: 55.8, lng: 37.6, intensity: 0.5, type: "apt" }, // Moscow
  { lat: 52.5, lng: 13.4, intensity: 0.7, type: "insider-threat" }, // Berlin
];

const securityCenters: SecurityCenter[] = [
  { lat: 34.1, lng: -118.2, name: "SOC West" }, // LA
  { lat: 50.1, lng: 8.7, name: "SOC Europe" }, // Frankfurt
  { lat: 1.3, lng: 103.8, name: "SOC Asia" }, // Singapore
];

function latLngToVector3(lat: number, lng: number, radius = 1.5) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

/* ---------------- Threat Pulses ---------------- */

function ThreatPulses() {
  const pulsesRef = useRef<THREE.Group | null>(null);

  useFrame(() => {
    if (pulsesRef.current) {
      pulsesRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={pulsesRef}>
      {attackLocations.map((attack, index) => (
        <ThreatPulse key={index} attack={attack} index={index} />
      ))}
    </group>
  );
}

type ThreatPulseProps = {
  attack: AttackLocation;
  index: number;
};

function ThreatPulse({ attack, index }: ThreatPulseProps) {
  const meshRef = useRef<THREE.Mesh | null>(null);
  const position = latLngToVector3(attack.lat, attack.lng, 1.52);

  useFrame((state) => {
    if (
      meshRef.current &&
      meshRef.current.material instanceof THREE.MeshBasicMaterial
    ) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2 + index) * 0.3;
      meshRef.current.scale.set(scale, scale, scale);
      meshRef.current.material.opacity =
        0.6 + Math.sin(state.clock.elapsedTime * 3) * 0.3;
    }
  });

  const getThreatColor = (type: AttackType) => {
    switch (type) {
      case "ransomware":
        return "#ff6b6b";
      case "phishing":
        return "#ffa726";
      case "ddos":
        return "#ab47bc";
      case "data-breach":
        return "#26c6da";
      case "malware":
        return "#ff8a65";
      case "apt":
        return "#7e57c2";
      case "insider-threat":
      default:
        return "#ff6b6b";
    }
  };

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.04, 8, 8]} />
      <meshBasicMaterial
        color={getThreatColor(attack.type)}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
}

/* ---------------- Attack Vectors ---------------- */

type VisibleVector = AttackLocation & {
  visible: boolean;
  target: SecurityCenter;
};

function AttackVectors() {
  const vectorsRef = useRef<THREE.Group | null>(null);
  const [visibleVectors, setVisibleVectors] = useState<VisibleVector[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newVectors: VisibleVector[] = attackLocations.map((attack) => ({
        ...attack,
        visible: Math.random() > 0.5,
        target:
          securityCenters[Math.floor(Math.random() * securityCenters.length)],
      }));
      setVisibleVectors(newVectors);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useFrame(() => {
    if (vectorsRef.current) {
      vectorsRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={vectorsRef}>
      {visibleVectors.map(
        (vector, index) =>
          vector.visible && (
            <AttackVector
              key={`${vector.lat}-${vector.lng}-${index}`}
              from={vector}
              to={vector.target}
              index={index}
            />
          )
      )}
    </group>
  );
}

type AttackVectorProps = {
  from: AttackLocation;
  to: SecurityCenter;
  index: number;
};

function AttackVector({ from, to, index }: AttackVectorProps) {
  const materialRef = useRef<THREE.LineBasicMaterial | null>(null);

  const fromPos = latLngToVector3(from.lat, from.lng, 1.53);
  const toPos = latLngToVector3(to.lat, to.lng, 1.53);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.opacity =
        0.4 + Math.sin(state.clock.elapsedTime * 4 + index) * 0.3;
    }
  });

  return (
    <Line points={[fromPos, toPos]} transparent opacity={0.6} dashed>
      <lineBasicMaterial
        ref={materialRef}
        attach="material"
        color="#ff6b6b"
        transparent
        opacity={0.6}
      />
    </Line>
  );
}

/* ---------------- Data Breach Particles ---------------- */
function DataBreachParticles() {
  const particlesRef = useRef<THREE.Points | null>(null);
  const particleCount = 120;

  // ✅ Generate random data once per mount, safely
  const [particlesPosition] = useState(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const radius = 1.6 + Math.random() * 0.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.cos(phi);
      positions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);

      const threatTypes = [0xff6b6b, 0xffa726, 0xab47bc, 0x26c6da, 0x66bb6a];
      const color = threatTypes[Math.floor(Math.random() * threatTypes.length)];

      colors[i * 3] = ((color >> 16) & 255) / 255;
      colors[i * 3 + 1] = ((color >> 8) & 255) / 255;
      colors[i * 3 + 2] = (color & 255) / 255;
    }

    return { positions, colors };
  });

  useFrame((state) => {
    if (
      particlesRef.current &&
      particlesRef.current.material instanceof THREE.PointsMaterial
    ) {
      particlesRef.current.rotation.y += 0.001;
      particlesRef.current.material.opacity =
        0.6 + Math.sin(state.clock.elapsedTime * 2) * 0.3;
    }
  });

  return (
    <Points
      ref={particlesRef}
      positions={particlesPosition.positions}
      colors={particlesPosition.colors}
      stride={3}
    >
      <pointsMaterial
        transparent
        size={0.012}
        sizeAttenuation
        opacity={0.8}
        vertexColors
      />
    </Points>
  );
}

/* ---------------- Defense Shields ---------------- */

function DefenseShields() {
  const shieldsRef = useRef<THREE.Group | null>(null);

  useFrame(() => {
    if (shieldsRef.current) {
      shieldsRef.current.rotation.y += 0.001;
      shieldsRef.current.rotation.z += 0.0005;
    }
  });

  return (
    <group ref={shieldsRef}>
      {securityCenters.map((center, index) => (
        <DefenseShield key={center.name} center={center} index={index} />
      ))}
    </group>
  );
}

type DefenseShieldProps = {
  center: SecurityCenter;
  index: number;
};

function DefenseShield({ center, index }: DefenseShieldProps) {
  const ringRef = useRef<THREE.Mesh | null>(null);
  const position = latLngToVector3(center.lat, center.lng, 1.55);

  useFrame((state) => {
    if (ringRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2 + index) * 0.2;
      ringRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group position={position}>
      <mesh ref={ringRef}>
        <ringGeometry args={[0.08, 0.12, 32]} />
        <meshBasicMaterial
          color="#66bb6a"
          transparent
          opacity={0.7}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

/* ---------------- Security Grid ---------------- */

function SecurityGrid() {
  const gridRef = useRef<THREE.Points | null>(null);

  useFrame(() => {
    if (gridRef.current) {
      gridRef.current.rotation.y += 0.0005;
    }
  });

  const gridPoints = useMemo(() => {
    const points: THREE.Vector3[] = [];
    for (let i = 0; i <= 24; i++) {
      const lon = (i / 24) * Math.PI * 2;
      for (let j = 0; j <= 12; j++) {
        const lat = (j / 12) * Math.PI - Math.PI / 2;
        const radius = 1.57;
        points.push(
          new THREE.Vector3(
            Math.cos(lat) * Math.cos(lon) * radius,
            Math.sin(lat) * radius,
            Math.cos(lat) * Math.sin(lon) * radius
          )
        );
      }
    }
    return points;
  }, []);

  const positions = useMemo(
    () => new Float32Array(gridPoints.flatMap((p) => [p.x, p.y, p.z])),
    [gridPoints]
  );

  return (
    <Points ref={gridRef} positions={positions}>
      <pointsMaterial color="#42a5f5" size={0.006} transparent opacity={0.4} />
    </Points>
  );
}

/* ---------------- Orbital Rings ---------------- */

function OrbitalRings() {
  const ringsRef = useRef<THREE.Group | null>(null);

  useFrame(() => {
    if (ringsRef.current) {
      ringsRef.current.rotation.z += 0.003;
      ringsRef.current.rotation.x += 0.001;
    }
  });

  const ringPoints = useMemo(() => {
    const points: THREE.Vector3[] = [];
    for (let i = 0; i <= 64; i++) {
      const angle = (i / 64) * Math.PI * 2;
      points.push(
        new THREE.Vector3(Math.cos(angle) * 2.2, Math.sin(angle) * 2.2, 0)
      );
    }
    return points;
  }, []);

  const ringPoints2 = useMemo(() => {
    const points: THREE.Vector3[] = [];
    for (let i = 0; i <= 64; i++) {
      const angle = (i / 64) * Math.PI * 2;
      points.push(
        new THREE.Vector3(Math.cos(angle) * 2.5, 0, Math.sin(angle) * 2.5)
      );
    }
    return points;
  }, []);

  return (
    <group ref={ringsRef}>
      <Line
        points={ringPoints}
        color="#42a5f5"
        lineWidth={1}
        transparent
        opacity={0.4}
      />
      <Line
        points={ringPoints2}
        color="#66bb6a"
        lineWidth={0.8}
        transparent
        opacity={0.3}
      />
    </group>
  );
}

/* ---------------- CyberSecurityGlobe ---------------- */

function CyberSecurityGlobe() {
  const globeRef = useRef<THREE.Mesh | null>(null);
  const innerGlobeRef = useRef<THREE.Mesh | null>(null);

  useFrame((state) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.002;
      globeRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.0005) * 0.1;
    }
    if (innerGlobeRef.current) {
      innerGlobeRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group>
      {/* Base Globe */}
      <Sphere args={[1.5, 64, 64]} ref={globeRef}>
        <meshPhongMaterial
          color="#e3f2fd"
          transparent
          opacity={0.95}
          shininess={30}
          specular="#ffffff"
        />
      </Sphere>

      {/* Oceans */}
      <Sphere args={[1.49, 64, 64]} ref={innerGlobeRef}>
        <meshBasicMaterial color="#bbdefb" transparent opacity={0.3} />
      </Sphere>

      <SecurityGrid />
      <ThreatPulses />
      <AttackVectors />
      <DataBreachParticles />
      <DefenseShields />
      <OrbitalRings />
    </group>
  );
}

/* ---------------- Main GlobeCanvas ---------------- */

export default function GlobeCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 60 }}
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
      }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
    >
      {/* Soft lighting */}
      <ambientLight intensity={0.6} color="#1278e6" />
      <pointLight position={[5, 5, 5]} intensity={0.5} color="#42a5f5" />
      <pointLight position={[-5, -5, 5]} intensity={0.4} color="#66bb6a" />
      <pointLight position={[0, 0, 5]} intensity={0.3} color="#ffa726" />

      <CyberSecurityGlobe />

      <OrbitControls enableZoom={false} enablePan={false} />

      <fog attach="fog" args={["#e3f2fd", 4, 15]} />
    </Canvas>
  );
}
