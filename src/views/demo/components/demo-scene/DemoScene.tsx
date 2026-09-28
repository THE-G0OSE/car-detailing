"use client";

import { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Color, Mesh, MeshStandardMaterial, PMREMGenerator } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { withBasePath } from "@/shared/lib/basePath";
import { SuspensionId } from "@/views/demo/model/types";

interface IProps {
    color: string;
    suspension: SuspensionId;
    tinted: boolean;
}

const CAR_MODEL_URL = withBasePath("/models/sedan.glb");

// Body offset from the stock ride height; the model supports −0.06…+0.10 m.
const SUSPENSION_OFFSET: Record<SuspensionId, number> = {
    low: -0.06,
    std: 0,
    high: 0.1,
};

const TINTED_GLASS_COLOR = new Color("#111418");
const TINTED_GLASS_OPACITY = 0.85;

interface IGlassDefaults {
    color: Color;
    opacity: number;
}

const CameraControls = () => {
    const camera = useThree((state) => state.camera);
    const domElement = useThree((state) => state.gl.domElement);
    const getState = useThree((state) => state.get);
    const controlsRef = useRef<OrbitControls | null>(null);

    useEffect(() => {
        const controls = new OrbitControls(camera, domElement);
        controls.target.set(0, 0.6, 0);

        const { width, height } = getState().size;
        const distanceFactor = Math.max(1, 2 / (width / height));
        camera.position.sub(controls.target).multiplyScalar(distanceFactor).add(controls.target);

        controls.enableDamping = true;
        controls.enablePan = false;
        controls.minDistance = 4.5;
        controls.maxDistance = 12;
        controls.maxPolarAngle = Math.PI / 2 - 0.05;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.6;
        controlsRef.current = controls;
        return () => controls.dispose();
    }, [camera, domElement, getState]);

    useFrame(() => controlsRef.current?.update());

    return null;
};

const StudioEnvironment = () => {
    const gl = useThree((state) => state.gl);
    const scene = useThree((state) => state.scene);

    useEffect(() => {
        const pmrem = new PMREMGenerator(gl);
        const environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
        scene.environment = environment;
        scene.environmentIntensity = 0.7;
        return () => {
            scene.environment = null;
            environment.dispose();
            pmrem.dispose();
        };
    }, [gl, scene]);

    return null;
};

const CarModel: React.FC<IProps> = ({ color, suspension, tinted }) => {
    const gltf = useLoader(GLTFLoader, CAR_MODEL_URL);
    const paintTarget = useRef(new Color(color));
    const initialized = useRef(false);

    const parts = useMemo(() => {
        const materials: Record<string, MeshStandardMaterial> = {};
        gltf.scene.traverse((object) => {
            if (object instanceof Mesh) {
                object.castShadow = true;
                object.receiveShadow = true;
                const material = object.material as MeshStandardMaterial;
                materials[material.name] = material;
            }
        });

        const glass = materials.Glass;
        // useLoader caches the parsed model across visits, so keep the factory glass values on the material itself.
        glass.userData.defaults ??= { color: glass.color.clone(), opacity: glass.opacity } satisfies IGlassDefaults;

        return {
            body: gltf.scene.getObjectByName("Body"),
            paint: materials.Paint,
            glass,
            glassDefaults: glass.userData.defaults as IGlassDefaults,
        };
    }, [gltf]);

    useEffect(() => {
        paintTarget.current.set(color);
    }, [color]);

    useFrame((_, delta) => {
        const t = initialized.current ? Math.min(1, delta * 6) : 1;
        initialized.current = true;

        parts.paint.color.lerp(paintTarget.current, t);

        const glassColor = tinted ? TINTED_GLASS_COLOR : parts.glassDefaults.color;
        const glassOpacity = tinted ? TINTED_GLASS_OPACITY : parts.glassDefaults.opacity;
        parts.glass.color.lerp(glassColor, t);
        parts.glass.opacity += (glassOpacity - parts.glass.opacity) * t;

        if (parts.body) {
            parts.body.position.y += (SUSPENSION_OFFSET[suspension] - parts.body.position.y) * t;
        }
    });

    return <primitive object={gltf.scene} />;
};

export const DemoScene: React.FC<IProps> = (props) => {
    return (
        <Canvas shadows="percentage" dpr={[1, 2]} camera={{ position: [4.2, 1.9, 5], fov: 40 }}>
            <color attach="background" args={["#050708"]} />
            <fog attach="fog" args={["#050708", 11, 26]} />

            <StudioEnvironment />
            <hemisphereLight args={["#ffffff", "#1c1f25", 0.4]} />
            <directionalLight position={[4, 7, 5]} intensity={2.4} castShadow shadow-mapSize={[2048, 2048]} />
            <directionalLight position={[-3, 3, 5]} intensity={0.8} />
            <pointLight position={[-5, 2.5, -4]} color="#FF1B2D" intensity={40} distance={14} />

            <Suspense fallback={null}>
                <CarModel {...props} />
            </Suspense>

            <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                <planeGeometry args={[40, 40]} />
                <shadowMaterial opacity={0.45} />
            </mesh>
            <gridHelper args={[24, 24, "#3a0c12", "#1c1f25"]} position={[0, 0.001, 0]} />

            <CameraControls />
        </Canvas>
    );
};
