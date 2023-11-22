import React from 'react'
import './Section.css'
import Card from 'react-bootstrap/Card';

function Section2() {
  return (
 <div className='bg-dark'>
        <div style={{paddingLeft:'100px'}} className='d-flex bg-dark justify-content-between '>
            <h2 style={{color:'white',marginTop:'60px'}}>Recomended for you <i style={{fontSize:'20px'}} class="fa-solid fa-gear"></i></h2>
    <div style={{marginTop:'60px'}} >
                    <button style={{width:'40px',backgroundColor:'yellowgreen'}}> <i class="fa-solid fa-chevron-left"></i> </button>
                    <button style={{marginRight:'100px',width:'40px',backgroundColor:'yellowgreen'}}> <i class="fa-solid fa-chevron-right"></i> </button>
    </div>
    
        </div>
            <div className='slider d-flex justify-content-evenly p-5'>
            <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/geforce-rtx-turing/overview/shop-2080-ti-300@2x.jpg"  height={'200px'} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
    
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://cdn1.smartprix.com/rx-ilnrihxGy-w1200-h1200/lnrihxGy.jpg" height={'200px'} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
    
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://cdn.cloudflare.steamstatic.com/steam/apps/730/capsule_616x353.jpg?t=1698860631" height={'200px'}  />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
    
    
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://www.tpstech.in/cdn/shop/products/ASUSROGSTRIXRTX3050OCEdition8GBGraphicsCard-FromTPSTech-01_800x.jpg?v=1643284540" height={'200px'} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

    
       
    
        </div>
 </div>
  )
}

export default Section2