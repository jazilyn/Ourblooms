import image from '../assets/hero/Image.png'; 
import image1 from '../assets/Hero/Image-1.png';
import image2 from '../assets/Hero/Image-2.png'; 

import logo1 from '../assets/Logo/Logo Image.png';
import logo2 from '../assets/Logo/Logo Image-1.png';
import logo3 from   '../assets/Logo/Logo Image-2.png';



function Hero(){
    return(
        <>
        <picture>
            <source media = "(min-width:1200px)" srcSet={logo1}/> 
            <source media = "(min-width:800px)" srcSet={logo2}/>   
            <img src = {logo3} alt = "Ourblooms Logo"/> 
        </picture>


        <picture>
            <source media = "(min-width:1200px)" srcSet={image}/> 
            <source media = "(min-width:800px)" srcSet={image1}/>   
            <img src = {image2} alt = "Ourblooms Logo"/> 
        </picture>

        
        </>
    )
}

export default Hero;