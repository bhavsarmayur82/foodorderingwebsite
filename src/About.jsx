import React from 'react'
import AboutPic from './Images/masala.jpg'
import './About.css'

const About = () => {
  return (
    <div className='about'>
    <div className='aboutTop' style={{backgroundImage:`url(${AboutPic})`}}></div>
    <div className='aboutBottom'>
        <h1>About Us</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
        Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, 
        in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
        per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut 
        vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
        Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat 
        faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc. 
        Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis. 
        Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus, 
        non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.
        </p>
    </div>
    </div>
  )
}

export default About
