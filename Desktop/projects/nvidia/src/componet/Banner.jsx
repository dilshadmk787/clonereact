import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Banner.css'



function Banner() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
      };

  return (
    <div>

<Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src="https://pbs.twimg.com/media/FrHZljOaAAUjASY?format=jpg&name=900x900"  width={'100%'}  height={'700rem'}   alt="" text="First slide" />
        <Carousel.Caption className='carosel'>
          <h3 className='w-50'>Generative AI Foundry Service on Microsoft Azure</h3>
          <p className='w-50'>New cloud cluster with 1,000 NVIDIA H100 Tensor Core GPUs and NVIDIA AI Enterprise software to speed LLM and generative AI development.</p>
          <button className='btn' style={{backgroundColor:'yellowgreen'}}>learn-more</button>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://s3.amazonaws.com/cms.ipressroom.com/219/files/202310/65522eff3d633283d25a5199_jupiter-supercomputer/jupiter-supercomputer_mid.jpg" width={'100%'}   height={'700rem'}alt="" text="First slide"  />
        <Carousel.Caption className='carosel'>
          <h3 className='w-50'>NVIDIA and Scaleway to Accelerate AI Adoption</h3>
          <p className='w-50'>NVIDIA announces an AI foundry service to supercharge the development and tuning of custom generative AI applications for enterprises and startups.</p>
          <button className='btn' style={{backgroundColor:'yellowgreen'}}>learn-more</button>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://en.xiaomitoday.it/ezoimgfmt/www.xiaomitoday.it/wp-content/uploads/2023/05/nvidia-ai-servicenow.jpeg?ezimgfmt=ng:webp/ngcb1"  width={'100%'}  height={'700rem'}  alt="" text="First slide"  />
        <Carousel.Caption className='carosel'>
          <h3 className='w-50'>New NVIDIA Ethernet Networking Platform for AI Available Soon</h3>
          <p className='w-50'>
          Powered by the NVIDIA GH200 Grace Hopper™ Superchip, JUPITER will define a new class of supercomputers to propel AI for scientific discovery.          </p>
          <button className='btn' style={{backgroundColor:'yellowgreen'}}>learn-more</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Banner