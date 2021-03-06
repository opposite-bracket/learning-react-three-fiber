import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const Box = () => {
  
  // ref.current is actual mesh object (Box)
  const ref = useRef();

  useFrame(state => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.z += 0.01;
  });

  return (
    <Canvas style={{backgroundColor: 'black'}}>
      <mesh ref={ref}>
        <boxBufferGeometry />
        <meshBasicMaterial color='blue' />
      </mesh>
    </Canvas>
  );
}

export default Box;
