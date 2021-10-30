import HeroSection from '../../components/Hero/Hero'
import NavBarSection from '../../components/NavBar/NavBar'


function Header () {
    return (
        <div className='header'>
            <NavBarSection />
            <HeroSection />
        </div>  
    );
}

export default Header