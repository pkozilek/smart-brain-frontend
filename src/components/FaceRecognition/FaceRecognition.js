import React from 'react'
import Boxes from '../Boxes/Boxes'

const FaceRecognition = ({imageUrl, box}) => {
    return(
        <div className = 'center'>
            <div className='absolute mt2'>
                <img id = 'input_image' src={imageUrl} alt='' width='500px' height='auto'/>
                <Boxes box={box}/>
            </div>
        </div>
    )
}

export default FaceRecognition;