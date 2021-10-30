import './Experience.css'
import Line from '../../components/Line/line'
import lineOne from '../../assets/lineOne.png'

function ExperienceSection (props) {
    return (
        <div>
            <h1 className='exp-h1'>Experience</h1>
            <div>
                <p className='exp-text'>JT Spice, CEO</p>
                <p className='exp-text-date'>2016 - Present</p>
                <p className='exp-text-dec'>Morbi porta turpis ac risus tempor mattis. Nulla
                    vestibulum a lorem non luctus. Aliquam ut
                    neque est. Sed tortor neque, rutrum dapibus
                    viverra sit amet, tristique sed justo. Nulla
                    maximus venenatis ligula quis cursus. Nullam
                    laoreet luctus urna at mattis.</p>
                <div className='exp-hr2'>
                    <Line />
                    <img className='img-line-1' src={ lineOne } alt='lineOne' />
                </div>
            </div>
            <div className='exp-hr5'>
                <div className='exp-col-5'>
                    <p className='exp-text-right'>Kentucky Fried Chicken, Chief Cook</p>
                    <p className='exp-text-date-right'>2012-2016</p>
                    <p className='exp-text-dec-right'>Morbi porta turpis ac risus tempor mattis. Nulla
                        vestibulum a lorem non luctus. Aliquam ut
                        neque est. Sed tortor neque, rutrum dapibus
                        viverra sit amet, tristique sed justo. Nulla
                        maximus venenatis ligula quis cursus. Nullam
                        laoreet luctus urna at mattis. </p>
                </div>
                <div className='exp-hr2'>
                    <Line />
                    <img className='img-line-1' src={ lineOne } alt='lineOne' />
                </div>
            </div>
            <div>
                <div className='exp-col-3'>
                    <p className='exp-text'>Chillspot, Assistant Chef</p>
                    <p className='exp-text-date'>2012-2016</p>
                    <p className='exp-text-dec'>Morbi porta turpis ac risus tempor mattis. Nulla
                        vestibulum a lorem non luctus. Aliquam ut
                        neque est. Sed tortor neque, rutrum dapibus
                        viverra sit amet, tristique sed justo. Nulla
                        maximus venenatis ligula quis cursus. Nullam
                        laoreet luctus urna at mattis. </p>
                </div>
               
                <div className='exp-hr2'>
                    <Line />
                    <img className='img-line-1' src={ lineOne } alt='lineOne' />
                </div>
            </div>
            <div>
                <div className='exp-hr4'>
                    <div className='exp-col-4'>
                        <p className='exp-text-right'>Dallas Delight, Chief Cook</p>
                        <p className='exp-text-date-right'>2012-2016</p>
                        <p className='exp-text-dec-right'>Morbi porta turpis ac risus tempor mattis. Nulla
                            vestibulum a lorem non luctus. Aliquam ut
                            neque est. Sed tortor neque, rutrum dapibus
                            viverra sit amet, tristique sed justo. Nulla
                            maximus venenatis ligula quis cursus. Nullam
                            laoreet luctus urna at mattis. </p>
                    </div>
                    <div className='exp-hr2'>
                        <Line />
                        <img className='img-line-1' src={ lineOne } alt='lineOne' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExperienceSection