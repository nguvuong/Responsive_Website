
// rafce 
import React from 'react'
import { Header, Topics, Blog, Footer, Info, Testimonials } from './components'


const App = () => {
  return (
    // this is react fragments which allow to return multiple components 
    <>
      <Header />
      <Topics />
      <Info />
      <Blog />
      <Testimonials />
      <Footer />
    </>

  )
}

export default App