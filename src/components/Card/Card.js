import './Card.css'

function Card (props) {
    return (
        <div className='card-container'>
        <h4 className='card-text-h4'>{ props.title}</h4>
        <p className='card-text-p'>{props.text}</p>
    </div>
   )
}

export default Card