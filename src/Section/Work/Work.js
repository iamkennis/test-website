import './Work.css'
import { Nav, Navbar } from 'react-bootstrap'
import WorkData from '../../Utils/WorkData.json'
import ImageCard from '../../components/ImageCard/ImageCard'

function WorkSection () {
    return (
        <div>
            <div>
                <h1 className='work-text' >My Work</h1>
            </div>
            <Navbar className="justify-content-center work-nav">
                { WorkData.map((item, index) => {
                return ( 
                        <Nav.Link as='a' key={ index } to={ item.path } className='work-nav-link'>
                            <span>{ item.title }</span>
                        </Nav.Link>    
                )
            }) }
            </Navbar>
            
            <div>
                <ImageCard/>
            </div>
        </div>
    )
}

export default WorkSection