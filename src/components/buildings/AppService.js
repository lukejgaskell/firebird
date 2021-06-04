import * as React from "react"

import * as THREE from "three"
import { useLoader } from "@react-three/fiber"
import { useSphere, useBox } from "@react-three/cannon"

export function AppService(props) {
  const radius = 0.5
  const spherePosition = [
    props.position[0],
    props.position[1] + 0.5,
    props.position[2],
  ]
  const textPosition = [
    props.position[0] - 0.8,
    props.position[1] + 1.35,
    props.position[2],
  ]
  const [sphereRef] = useSphere(() => ({
    ...props,
    type: "Static",
    position: spherePosition,
    args: radius,
  }))

  const [textRef] = useBox(() => ({
    type: "Static",
    position: textPosition,
  }))

  const font = useLoader(
    THREE.FontLoader,
    "/fonts/helvetiker_regular.typeface.json"
  )

  const textOptions = {
    font,
    size: 0.15,
    height: 0.1,
  }

  return (
    <>
      <mesh ref={sphereRef} scale={1.5}>
        <sphereGeometry args={[radius, 32, 32]} />
        <meshLambertMaterial color="#4AC7E8" />
      </mesh>
      <mesh ref={textRef} scale={1.5}>
        <textGeometry args={["App Service", textOptions]} />
        <meshLambertMaterial />
      </mesh>
    </>
  )
}
