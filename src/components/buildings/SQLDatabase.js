import * as React from "react"

import * as THREE from "three"
import { useLoader } from "@react-three/fiber"
import { useCylinder, useBox } from "@react-three/cannon"

export function SQLDatabase(props) {
  const args = [0.5, 0.5, 2, 32, 32]
  const [cylinderRef] = useCylinder(() => ({
    type: "Static",
    position: props.position,
    args,
  }))
  const textPosition = [
    props.position[0] - 1,
    props.position[1] + 1.7,
    props.position[2],
  ]

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
      <mesh {...props} ref={cylinderRef} scale={1.5}>
        <cylinderGeometry args={args} />
        <meshLambertMaterial color="#2F7AB2" />
      </mesh>
      <mesh ref={textRef} scale={1.5}>
        <textGeometry args={["SQL Database", textOptions]} />
        <meshLambertMaterial />
      </mesh>
    </>
  )
}
