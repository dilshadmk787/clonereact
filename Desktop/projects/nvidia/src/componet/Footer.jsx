import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{height:'600px',backgroundColor:'black'}} className='d-flex justify-content-center align-items-space-between w-100 flex-column'>
      <Row style={{color:'greenyellow'}}>
        <Col xs={12} md={1}></Col>
        <Col xs={12} md={4}>
          <ul style={{listStyle:'none'}}>
            <li><h3 style={{color:'white'}}>Corporate Information</h3></li>
            <hr style={{color:'white'}} />
            <li>About Us</li>
            <li>Corporate Overview</li>
            <li>Technologies</li>
            <li>Research</li>
            <li>Investors</li>
            <li>Social Responsibility</li>
            <li>NVIDIA Foundation</li>
          </ul>
        </Col>
        <Col xs={12} md={3} >
        <ul style={{listStyle:'none'}}>
        <li><h3 style={{ color: 'white' }}>Get Involved</h3></li>
        <hr style={{color:'white'}} />
        <li>Forums</li>
        <li>Careers</li>
        <li>Developer Home</li>
        <li>Join the Developer Program</li>
        <li>NVIDIA Partner Network</li>
        <li>Startups and VCs</li>
        <li>Technical Training</li>
        <li>Professional Services for Data Science</li>
          </ul>
        </Col>
        <Col xs={12} md={3}>
        <ul style={{listStyle:'none'}}>
        <li><h3 style={{ color: 'white' }}>Get Involved</h3></li>
        <hr style={{color:'white'}} />
        <li>Forums</li>
        <li>Careers</li>
        <li>Developer Home</li>
        <li>Join the Developer Program</li>
        <li>NVIDIA Partner Network</li>
        <li>Startups and VCs</li>
        <li>Technical Training</li>
        <li>Professional Services for Data Science</li>
          </ul>
        </Col>
        <Col xs={12} md={1}></Col>


        <div className='d-flex text-align-center justify-content-evenly'> 
<div>
          <i className='' class="fa-regular fa-envelope" style={{color:'greenyellow',fontSize:'60px'}}></i>
  
</div><div className='d-flex justify-content-evenly '>
          <h3 style={{color:'white'}}>sign up NVIDIA news</h3>
          <button className='btn ms-2' style={{backgroundColor:'yellowgreen'}}>subscribe</button>
</div>
<div className='d-flex justify-content-space-between'>
          <h5 style={{color:'gray'}}>follow NVIDIA</h5>
                 <Link to={'/'} style={{textDecoration:'none',color:'gray'}} ><i class ="fa-brands fa-twitter fa-2x" ></i></Link>
        <Link to={'/'} style={{textDecoration:'none',color:'gray'}} ><i class ="fa-brands fa-instagram fa-2x" ></i></Link>
        <Link to={'/'} style={{textDecoration:'none',color:'gray'}} ><i class ="fa-brands fa-linkedin fa-2x" ></i></Link>
        <Link to={'/'} style={{textDecoration:'none',color:'gray'}} ><i class ="fa-brands fa-facebook fa-2x" ></i></Link>
        <Link to={'/'} style={{textDecoration:'none',color:'gray'}} ><i class ="fa-brands fa-youtube fa-2x" ></i></Link>
</div>
</div>

      </Row>
    </div>
  )
}

export default Footer