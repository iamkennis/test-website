import './Hero.css'
import heroImage from '../../assets/hero-Image.png'

function HeroSection () {
    return (
        <div className='hero-backdrop'>
                <p className='hero-p-text'>Hi There, I'm</p>
                <h1 className='hero-h1-text'>Jaden Tega</h1>
                <p className='hero-text'>An award-winning chef with over 12 years experience.
                    Nulla vestibulum a lorem non luctus. Aliquam ut neque est</p>
            <button className='hero-btn'>Work with me</button>
            <div className='hero-image'>
                 <img src={heroImage} alt='heroimage'
                />
            </div>
        </div>
    );
}

export default HeroSection