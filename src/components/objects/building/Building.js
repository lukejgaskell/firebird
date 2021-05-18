import * as React from "react"
import { useLoader } from "@react-three/fiber"
import { TextureLoader } from "three/src/loaders/TextureLoader.js";


export function Building(props) {
    // This reference will give us direct access to the THREE.Mesh object
    const mesh = React.useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = React.useState(false)
    const hoveredRef = React.useRef(hovered);
    hoveredRef.current = hovered;

    React.useEffect(() => {
        const timer = setInterval(() => {
            console.log(hoveredRef.current);
            setHover(!hoveredRef.current);
        }, 1000)
        return () => clearInterval(timer);
      }, []);

    const buildingTextures = ["textures/building_texture.jpg", "textures/building_texture_2.jpg"]

    const texture_1 = useLoader(TextureLoader, buildingTextures[props.buildingIndex || 0]);

    // Subscribe this component to the render-loop, rotate the mesh every frame
    // useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
    // Return the view, these are regular Threejs elements expressed in JSX
    return (
            <mesh
            {...props}
            ref={mesh}
            scale={1.5}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial map={texture_1} attachArray="material" />
            <meshStandardMaterial map={texture_1} attachArray="material" />
            <meshStandardMaterial color={hovered ? props.broken ? "red" : "lightgreen" : "white"} attachArray="material" />
            <meshStandardMaterial map={texture_1} attachArray="material" />
            <meshStandardMaterial map={texture_1} attachArray="material" />
            <meshStandardMaterial map={texture_1} attachArray="material" />
        </mesh>
      
    )
  }