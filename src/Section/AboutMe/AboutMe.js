import aboutImage from '../../assets/aboutImage.png'
import './AboutMe.css'


function AboutMeSection () {
    return (
        <div className='about'>
            <img className='about-image' src={ aboutImage } alt='AboutImage' />
            <div>
                <h1 className='about-h1'>About Me</h1>
                <p className='about-p'>An award-winning chef with over 12 years experience Morbi porta turpis ac risus tempor mattis. Nulla vestibulum a lorem non luctus. Aliquam ut neque est. Sed tortor neque, rutrum dapibusviverra sit amet, tristique sed justo. Nulla maximus venenatis ligula quis cursus. Nullam laoreet luctus urna at mattis. </p>
            </div>
        </div>
    )
}

export default AboutMeSection