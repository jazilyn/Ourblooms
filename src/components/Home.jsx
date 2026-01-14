import c from '../assets/Carousel/c.png'
import c1 from '../assets/Carousel/c1.png'
import c2 from '../assets/Carousel/c2.png'
import c3 from '../assets/Carousel/c3.png'
import c4 from '../assets/Carousel/c4.png'
import sec1 from '../assets/section_images/sec1.png'
import sec2 from '../assets/section_images/sec2.png'
import sec3 from '../assets/section_images/sec3.png'
import Footer from './Footer'
import midsec from '../assets/mid_sec/Image.png'
import midsec1 from '../assets/mid_sec/Image-1.png'
import midsec2 from '../assets/mid_sec/Image-2.png'  
import Hero from './Hero' 
import WorkWithUs from './WorkWithUs'



function Home(){ 
    return(
        <>
            <Hero/>
            <div> 
      <div className = "content"> 
      <p className = 'caption1'> WHO WE ARE </p>
      <p className = 'heading2'> We're Our Blooms® and we're here to help you find your floral story. </p> 
    <button className = "button_danger caption1"> About Us </button>

      </div>

      <div className ='Carousel'> 
        <img src={c} alt="Carousel Image 1" className='carousel-image' />
        <img src={c1} alt="Carousel Image 2" className='carousel-image' />
        <img src={c2} alt="Carousel Image 3" className='carousel-image' />
        <img src={c3} alt="Carousel Image 4" className='carousel-image' />
        <img src={c4} alt="Carousel Image 5" className='carousel-image' />
        </div> 
      <div className = 'what_we_do'>
      <p className = 'heading1'> What we do </p>
      <p className = 'paragraph1'> We bring a touch of that simple magic into your world. </p>
</div> 
<hr/> 
<div className = 'section1'>  
  <p className = 'heading1'> 1 </p>
  <img src = {sec1} alt = "Section Image 1"/>
  <p className = 'heading1'>FLORAL INSTALLATIONS </p>
  <p classame = 'paragraph1'> Living art for homes, businesses and events. </p> 
<hr/>
</div> 
  <div className = 'section1'>  
  <p className = 'heading1'> 2 </p>
  <img src = {sec2} alt = "Section Image 1"/>
  <p className = 'heading1'>  NATIVE PLANT ARRANGEMENT </p>
  <p classame = 'paragraph1'>Whether it’s a private retreat or a public space, we craft floral experiences that bloom beyond expectations.... </p> 

  <hr/> 

  </div> 
  <div className = 'section1'>  
  <p className = 'heading1'> 3 </p>
  <img src = {sec3} alt = "Section Image 1"/>
  <p className = 'heading1'> CUSTOM FLORAL CONCEPTS </p>
  <p classame = 'paragraph1'>Your vision, our blooms. We build arrangements that are both personal and exquisitely simple. Whether it’s a private retreat or a public space, we craft floral experiences that bloom beyond expectations. </p> 

  <hr/> 

  </div> 
<picture> 
  <source media="(min-width: 1200px)" srcSet={midsec} />
  <source media="(min-width: 800px)" srcSet={midsec1} />
  <img src={midsec2} alt="Mid Section Image" />
</picture>







<WorkWithUs/>

      </div> <Footer/>

        </>
    )
}
export default Home; 

