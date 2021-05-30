import './index.css'

import * as React from 'react'

import { Building } from '../components/objects/Building'
import { Canvas } from '@react-three/fiber'
import { Ground } from '../components/objects/Ground'
import { Hud } from '../components/objects/Hud'
import { Physics } from '@react-three/cannon'
import { Player } from '../components/objects/Player'
import { Sky } from '@react-three/drei'

const IndexPage = () => {
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [buildings, setBuildings] = React.useState([])

  React.useEffect(() => {
    const numberOfBuildings = Math.floor(Math.random() * 50) + 50
    const buildings = []
    for (let i = 0; i < numberOfBuildings; i++) {
      const x = Math.floor(Math.random() * 100) - 50
      const y = 0
      const z = Math.floor(Math.random() * 100) - 50
      buildings.push(<Building position={[x, y, z]} />)
    }

    setBuildings(buildings)
  }, [])

  function renderHomeScene() {
    return buildings
  }

  function renderCloudScene() {
    return (
      <>
        <Player position={[0, 2, 10]} />
        {buildings}
      </>
    )
  }

  return (
    <>
      {!isPlaying && (
        <div className="container">
          <h1 className="welcome-text">Welcome to Firebird</h1>
          <button className="enter-button" onClick={() => setIsPlaying(true)}>
            Enter The Cloud
          </button>
        </div>
      )}
      <Canvas style={{ height: '100vh', width: '100vw' }} camera={{ fov: 75, position: [0, 5, 20] }}>
        <React.Suspense fallback={null}>
          <Sky sunPosition={[100, 20, 100]} />
          <ambientLight intensity={0.25} />
          <pointLight position={[10, 10, 10]} />
          <Hud position={[0, 0, -2]} />
          <Physics gravity={[0, -30, 0]}>
            <Ground position={[0, -1, 0]} />
            {isPlaying ? renderCloudScene() : renderHomeScene()}
          </Physics>
        </React.Suspense>
      </Canvas>
    </>
  )
}

export default IndexPage
