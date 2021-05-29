import * as React from 'react'

import { TextureLoader } from 'three/src/loaders/TextureLoader.js'
import { useBox } from '@react-three/cannon'
import { useLoader } from '@react-three/fiber'

export function Building(props) {
  // This reference will give us direct access to the THREE.Mesh object
  // Set up state for the hovered and active state
  const [hovered, setHover] = React.useState(false)
  const hoveredRef = React.useRef(hovered)
  hoveredRef.current = hovered

  const [ref] = useBox(() => ({
    type: 'Static',
    position: props.position,
  }))

  React.useEffect(() => {
    const timer = setInterval(() => {
      setHover(!hoveredRef.current)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const buildingTextures = ['textures/building_texture.jpg', 'textures/building_texture_2.jpg']

  const texture_1 = useLoader(TextureLoader, buildingTextures[props.buildingIndex || 0])

  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh {...props} ref={ref} scale={1.5}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial map={texture_1} attachArray="material" />
      <meshStandardMaterial map={texture_1} attachArray="material" />
      <meshStandardMaterial color={hovered ? (props.broken ? 'red' : 'lightgreen') : 'white'} attachArray="material" />
      <meshStandardMaterial map={texture_1} attachArray="material" />
      <meshStandardMaterial map={texture_1} attachArray="material" />
      <meshStandardMaterial map={texture_1} attachArray="material" />
    </mesh>
  )
}
