import * as React from "react"
import { useLoader } from "@react-three/fiber"
import { Plane } from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";
import { RepeatWrapping } from 'three';

export const Ground = () => {

  const ground_texture = useLoader(TextureLoader, "textures/grass.jpg");
  ground_texture.wrapS = RepeatWrapping;
  ground_texture.wrapT = RepeatWrapping;
  ground_texture.repeat.x = 10;
  ground_texture.repeat.y = 10;
  

  return (
    <Plane args={[1000, 1000]} position={[0, -.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="grey" />
    </Plane>
  )
}
