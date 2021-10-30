import Rec1 from '../../assets/Rec1.png'
import Rec2 from '../../assets/Rec2.png'
import Rec3 from '../../assets/Rec3.png'
import Rec4 from '../../assets/Rec4.png'
import Rec5 from '../../assets/Rec5.png'
import Rec6 from '../../assets/Rec6.png'
import Rec7 from '../../assets/Rec7.png'

import './ImageCard.css'

function ImageCard () {
    return (
        <div className='card-img'>
                <img src={ Rec1 } alt='' />
                <img src={ Rec2 } alt='' />
                <img src={ Rec3 } alt='' />
                <img src={ Rec4 } alt='' />
                <img src={ Rec5 } alt='' />
                <img src={ Rec6 } alt='' />
                <img src={Rec7} alt='' />
        </div>
        
    )
}

export default ImageCard