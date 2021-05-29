import React, { useEffect, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'

export const Hud = ({ position }) => {
  const { camera } = useThree()
  const [hudState, setHudState] = useState(() => ({
    position: camera.position,
    rotation: [0, 0, 0],
    opacity: 0,
  }))
  const [hudVisible, setHudVisible] = useState(false)
  useFrame(() => {
    const { x, y, z } = camera.position
    const { x: rotX, y: rotY, z: rotZ } = camera.rotation
    setHudState({
      position: [x, y, z],
      rotation: [rotX, rotY, rotZ],
      opacity: hudVisible ? 1 : 0,
    })
  })

  useEffect(() => {
    setHudVisible(true)
    const hudVisibilityTimeout = setTimeout(() => {
      setHudVisible(false)
    }, 2000)
    return () => {
      clearTimeout(hudVisibilityTimeout)
    }
  }, [setHudVisible])
  return (
    hudVisible && (
      <group position={hudState.position} rotation={hudState.rotation}>
        <group position={position}></group>
      </group>
    )
  )
}
