import Header from '../../layout/Header/Header'
import AboutMeSection from '../../Section/AboutMe/AboutMe'
import ServiceSection from '../../Section/Services/Service'
import ExperienceSection from '../../Section/Experience/Experience'
import WorkSection from '../../Section/Work/Work'

function HomePage () {
    return (
        <div className='home'>
            <Header />
            <AboutMeSection />
            <ServiceSection />
            <ExperienceSection />
            <WorkSection/>
        </div>
    );
}

export default HomePage