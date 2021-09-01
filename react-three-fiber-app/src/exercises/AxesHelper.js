import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import { OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls })

const Orbit = () => {

  // gives access of the three universe once
  const {camera, gl} = useThree();

  return (
    <orbitControls args={[camera, gl.domElement]} />
  );
}

const Box = props => {
  
  // ref.current is actual mesh object (Box)
  const ref = useRef();

  // gives access of the three universe
  // on each frame rendered
  useFrame(state => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.z += 0.01;
  });

  return (
    <mesh ref={ref} {...props}>
      <boxBufferGeometry />
      <Orbit />
      <meshBasicMaterial color='blue' />
    </mesh>
  );
}

const AxesHelper = () => {
  return (
    <Canvas style={{backgroundColor: 'black'}} camera={{position: [3,3,3]}}>
      <Box position={[0,0,0]} />
      <axesHelper args={[5]} />
    </Canvas>
  )
}

export default AxesHelper;
