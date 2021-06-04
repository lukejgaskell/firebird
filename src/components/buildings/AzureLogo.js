import * as React from "react"

import * as THREE from "three"
import { useLoader } from "@react-three/fiber"
// import { TextureLoader } from "three/src/loaders/TextureLoader.js";
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
// import { Svg } from ''
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader'
import { useSphere } from "@react-three/cannon"

export function AzureLogo(props) {
    
  const radius = 0.5

  const args = [0.5, 0.5, 2, 32, 32]
  const [sphereRef] = useSphere(() => ({
    type: "Static",
    position: props.position,
    args,
  }))

  const meshComponents = [];

  const svg = useLoader(SVGLoader, "/textures/API_Management.svg")

const paths = svg.paths;

const group = new THREE.Group();
group.scale.multiplyScalar( 0.25 );
group.position.x = - 70;
group.position.y = 70;
group.rotation.z = Math.PI;
group.scale.y *= - 1;

console.log(paths)

for ( let i = 0; i < paths.length; i ++ ) {

    const path = paths[ i ];

    const fillColor = path.userData.style.fill;

    const sumLetters = str => {
        let sum = 0;
        for (let char of str) {
          sum += +char;
        }
        return sum
      };

    if ( fillColor !== undefined && fillColor !== 'none' ) {

        // const colorSum = sumLetters(fillColor);

        // console.log(colorSum)

        // const color = '#' + Math.floor((Math.abs(Math.sin() * 16777215)) % 16777215).toString(16);

        // let mat = new THREE.LineBasicMaterial({ color: "black", linewidth: 10 });

        const material = new THREE.MeshBasicMaterial( {
            color: new THREE.Color().setStyle( 'lightblue' ),
            opacity: 1,
            transparent: false,
            side: THREE.DoubleSide,
            depthWrite: false,
            // wireframe: true
        } );

        const shapes = SVGLoader.createShapes( path );

        for ( let j = 0; j < shapes.length; j ++ ) {

            const shape = shapes[ j ];

            const geometry = new THREE.ExtrudeGeometry(shape, {
                depth: 5,
                bevelEnabled: false
            });

            // const geometry = new THREE.ShapeGeometry( shape );
            const mesh = new THREE.Mesh( geometry, material );

            mesh.scale.y = -1;

            const meshComponent = <mesh {...mesh} />

            meshComponents.push(meshComponent);

            group.add( mesh );

        }

    }

    // if ( fillColor !== undefined && fillColor !== 'none' ) {

    //     // const colorSum = sumLetters(fillColor);

    //     // console.log(colorSum)

    //     // const color = '#' + Math.floor((Math.abs(Math.sin() * 16777215)) % 16777215).toString(16);

    //     // let mat = new THREE.LineBasicMaterial({ color: "black", linewidth: 10 });

    //     const material = new THREE.MeshBasicMaterial( {
    //         color: new THREE.Color().setStyle( '#00FFFF' ),
    //         opacity: 1,
    //         transparent: false,
    //         side: THREE.DoubleSide,
    //         depthWrite: false,
    //         wireframe: true
    //     } );

    //     const shapes = SVGLoader.createShapes( path );

    //     for ( let j = 0; j < shapes.length; j ++ ) {

    //         const shape = shapes[ j ];

    //         const geometry = new THREE.ExtrudeGeometry(shape, {
    //             depth: 5,
    //             bevelEnabled: false
    //         });

    //         // const geometry = new THREE.ShapeGeometry( shape );
    //         const mesh = new THREE.Mesh( geometry, material );

    //         mesh.scale.y = -1;

    //         const meshComponent = <mesh {...mesh} />

    //         meshComponents.push(meshComponent);

    //         group.add( mesh );

    //     }

    // }


    // const strokeColor = path.userData.style.stroke;

    // if ( strokeColor !== undefined && strokeColor !== 'none' ) {

    //     const material = new THREE.MeshBasicMaterial( {
    //         color: new THREE.Color().setStyle( 'white' ),
    //         opacity: path.userData.style.strokeOpacity,
    //         transparent: path.userData.style.strokeOpacity < 1,
    //         side: THREE.DoubleSide,
    //         depthWrite: false
    //     } );

    //     for ( let j = 0, jl = path.subPaths.length; j < jl; j ++ ) {

    //         const subPath = path.subPaths[ j ];

    //         const geometry = SVGLoader.pointsToStroke( subPath.getPoints(), path.userData.style );

    //         if ( geometry ) {

    //             const mesh = new THREE.Mesh( geometry, material );

    //             const meshComponent = <mesh {...mesh} />

    //             meshComponents.push(meshComponent);

    //             group.add( mesh );

    //         }

    //     }

    // }

}


const font = useLoader(
    THREE.FontLoader,
    "/fonts/helvetiker_regular.typeface.json"
  )

  const textOptions = {
    font,
    size: 0.15,
    height: 0.1,
  }

    // const material = new THREE.MeshNormalMaterial();

    // svg.paths.forEach((path, i) => {

    //     const shapes = path.toShapes(true);
      
    //     // Each path has array of shapes
    //     shapes.forEach((shape, j) => {
    //       // Finally we can take each shape and extrude it
    //       const geometry = new THREE.ExtrudeGeometry(shape, {
    //         depth: 20,
    //         bevelEnabled: false
    //       });

    //       const fillColor = path.userData.style.fill;

    //       const color = fillColor !== undefined && fillColor !== 'none' ? new THREE.Color().setStyle(fillColor) : undefined;

    //       console.log(color)

    //       const material = new THREE.MeshBasicMaterial( {
    //             color: color,
    //             opacity: path.userData.style.fillOpacity,
	// 			transparent: path.userData.style.fillOpacity < 1,
    //             side: THREE.DoubleSide,
    //             depthWrite: false
    //         } );

      
    //       // Create a mesh and add it to the group
    //       const mesh = new THREE.Mesh(geometry, material);

    //     //   const meshComponent = (<mesh ref={sphereRef} scale={1.5}>
    //     //         <sphereGeometry args={[radius, 32, 32]} />
    //     //         <meshLambertMaterial color="#4AC7E8" />
    //     //     </mesh>)

    //       const meshComponent = <mesh {...mesh} {...props} />
      
    //       meshComponents.push(meshComponent);

    //       svgGroup.add(mesh);
    //     });
    //   });

  // const texture = useLoader(THREE.TextureLoader, "/textures/App_Service.png")

//   React.useEffect(async () => {
//     const loader = new STLLoader();
//     const model = await loader.loadAsync("/models/App_Service_Logo.stl");
//     logoRef.current.geometry = model;
//   }, [])

const position = [
    props.position[0],
    props.position[1] + 2,
    props.position[2],
  ]

console.log(meshComponents.length)
console.log(props)

  return (
    <>
        <group position={position} scale={.1}>
            {meshComponents.map(c => {
                return c;
            })}   
        </group>
        <mesh position={[position.x, position.y + .5, position.z]}>
            <textGeometry args={["SQL Database", textOptions]} />
        </mesh>
       {/* <mesh {...props} ref={logoRef} scale={.5}>
        <meshStandardMaterial map={texture} attachArray="material" />
        <meshStandardMaterial map={texture} attachArray="material" />
        <meshStandardMaterial map={texture} attachArray="material" />
        <meshStandardMaterial map={texture} attachArray="material" />
        <meshStandardMaterial map={texture} attachArray="material" />
        <meshStandardMaterial map={texture} attachArray="material" />
        <meshLambertMaterial color="#4AC7E8" />
      </mesh>
        <Svg isBasic url="/textures/App_Service.svg" {...props} /> */}
    </>
  )
}
