import './Work.css'
import { Nav, Navbar } from 'react-bootstrap'
import WorkData from '../../Utils/WorkData.json'
import {Tabs,Tab,Box} from '@mui/material'


function WorkSection () {
    return (
        <div>
            <div>
                <h1 className='work-text' >My Work</h1>
            </div>
            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
            <Tabs value={value} onChange={handleChange} className="work-nav">
                { WorkData.map((item, index) => {
                return ( 
                        <Nav.Link as='a' key={ index } to={ item.path } className='work-nav-link'>
                            <span>{ item.title }</span>
                        </Nav.Link>    
                )
            }) }
             </Tabs>
                </Box>
        </div>
    )
}

export default WorkSection