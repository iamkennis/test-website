import {useState} from 'react'
import ServiceData  from "../../Utils/ServiceData.json"
// import { Col, Row, Card } from 'react-bootstrap'
import Card from '../../components/Card/Card'
import './Service.css'

function ServiceSection (props) {
    // const {text,title} = props
    const [service] = useState(ServiceData)
    return (
        <div >
                <h1 className='service-h1'>Service Offer</h1>
            <div className='service-list'>
                {service.map((tx) => (
			<Card title={tx.title} text={tx.text} />
		))}
              </div>
            <button className='service-btn'>Work with me</button>
        </div>
    );
}

export default ServiceSection