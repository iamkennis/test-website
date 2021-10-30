import Header from '../../layout/Header/Header'
import AboutMeSection from '../../Section/AboutMe/AboutMe'
import ServiceSection from '../../Section/Services/Service'
import ExperienceSection from '../../Section/Experience/Experience'
import WorkSection from '../../Section/Work/Work'
import FormInput from '../../Section/FormInput/FormInput'


function HomePage () {
    return (
        <div className='home'>
            <Header />
            <AboutMeSection />
            <ServiceSection />
            <ExperienceSection />
            <WorkSection />
            <FormInput/>
        </div>
    );
}

export default HomePage