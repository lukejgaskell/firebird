import * as React from 'react'

import { Building } from '../components/objects/Building'
import { Canvas } from '@react-three/fiber'
import { Ground } from '../components/objects/Ground'
import { Hud } from '../components/objects/Hud'
import { Physics } from '@react-three/cannon'
import { Player } from '../components/objects/Player'
import { Sky } from '@react-three/drei'

const IndexPage = () => {
  return (
    <Canvas style={{ height: '100vh', width: '100vw' }}>
      <React.Suspense fallback={null}>
        <Sky sunPosition={[100, 20, 100]} />
        <ambientLight intensity={0.25} />
        <pointLight position={[10, 10, 10]} />
        <Hud position={[0, 0, -2]} />
        <Physics gravity={[0, -30, 0]}>
          <Ground position={[0, -1, 0]} />
          <Player position={[0, 2, 10]} />

          <Building position={[-2.2, 0, 0]} />
          <Building buildingIndex={1} position={[2.2, 0, 0]} />
          <Building position={[-5.2, 0, 0]} />
          <Building broken position={[5.2, 0, 0]} />

          <Building position={[-11.2, 0, -20]} />
          <Building buildingIndex={1} position={[11.2, 0, -20]} />
          <Building position={[-8.2, 0, -10]} />
          <Building position={[8.2, 0, -10]} />
        </Physics>
      </React.Suspense>
    </Canvas>
  )
}

export default IndexPage
