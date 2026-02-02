import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Stars } from '@react-three/drei';
// @ts-expect-error: maath types are missing
import * as random from 'maath/random/dist/maath-random.esm';
import * as THREE from 'three';

function StarsBackground(props: React.ComponentProps<typeof Points>) {
    const ref = useRef<THREE.Points>(null);
    const [sphere] = useState(() => {
        const data = new Float32Array(5000 * 3);
        return random.inSphere(data, { radius: 1.5 });
    });

    useFrame((_state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#38bdf8"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}

const ThreeBackground = () => {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                <StarsBackground />
            </Canvas>
        </div>
    );
};

export default ThreeBackground;
