import React,{useEffect, useRef} from 'react'
import pdf from '../pdf/Lokendra Singh.pdf'
import hero from './Data/hero.json'
import Typed from 'typed.js'

const Home = () => {
  const typedRef=useRef(null)
  useEffect(()=> {
    const options={
      strings: ["Welcome to my profile","My name is Lokendra Singh","I'm a Software developor","Django developor"],
      typeSpeed: 50,
      nackSpeed: 50,
      loop: true
    }
    const typed=new Typed(typedRef.current, options)

    return ()=>{
      typed.destroy()
    }

  },[])


  return (
    <>
      <div className="container home" id="home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedRef}></h1>
          <a href={pdf} download="Resume" className="btn btn-outline-warning my-3">Download Resume</a>
        </div>
        <div className="right">
        <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
        <img src={`/assets/${hero.imgSrc}`} alt="hero" />
        </div>
          </div>
      </div>
    </>
  )
}

export default Home

