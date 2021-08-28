import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import './App.css'

const Box = () => {
  
  // ref.current is actual mesh object (Box)
  const ref = useRef();

  useFrame(state => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.z += 0.01;
  });

  return (
    <mesh ref={ref}>
      <boxBufferGeometry />
      <meshBasicMaterial color='blue' />
    </mesh>
  );
}

const App = () => {
  return (
    <div style={{height: '100vh', width: '100vw'}}>
      <Canvas style={{backgroundColor: 'black'}}>
        <Box />
      </Canvas>
    </div>
  );
}

export default App;
