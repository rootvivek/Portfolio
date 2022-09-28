import React from 'react'
import Intro from './Intro'
import CardMain from './CardMain'
// import { Parallax, ParallaxLayer } from '../../../node_modules/@react-spring/'

function Home() {
  return (
    <>
     {/* <Parallax pages={2} style={{ top: '0', left: '0' }}>
      <ParallaxLayer
        offset={0}
        speed={2.5}
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}></ParallaxLayer> */}
          <Intro />
          <CardMain />
      {/* </Parallax> */}
    </>
  )
}

export default Home;