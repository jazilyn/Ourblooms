import img1 from '../assets/footerimg/Image.png';
import img2 from '../assets/footerimg/Image-1.png';
import img3 from '../assets/footerimg/Image-2.png';
import styles from '../styles/Footer.module.css';

function Footer(){ 
    return(
<>
<div className = {styles.footer}> 
<picture>
            <source media = "(min-width:1200px)" srcSet={img1}/> 
            <source media = "(min-width:800px)" srcSet={img2}/>   
            <img src = {img3} alt = "Ourblooms Logo"/> 
        </picture>
        </div>

</>
    )
}

export default Footer;  