import * as React from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { Building } from "../components/objects/building/Building"
import { Ground } from '../components/objects/ground/Ground'

const IndexPage = () => {

  return (
    <Canvas style={{ height: "100vh", width: "100vw" }}>
      <React.Suspense fallback={null}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Building position={[-1.2, 0, 0]} />
        <Building buildingIndex={1} position={[1.2, 0, 0]} />
        <Building position={[-3.2, 0, 0]} />
        <Building broken position={[3.2, 0, 0]} />

        <Building position={[-11.2, 0, -20]} />
        <Building buildingIndex={1} position={[11.2, 0, -20]} />
        <Building position={[-3.2, 0, -10]} />
        <Building position={[3.2, 0, -10]} />
        <Ground />
      <OrbitControls/>
      </React.Suspense>
    </Canvas>
  )
}

export default IndexPage
