
import React from 'react';
import './Boxes.css';

const calculateFaceLocation = (data) => {
    const clarifaiFace = data
    const image = document.getElementById('input_image')
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

const Boxes = ({box}) => {
    var box_i = {}
    box_i=box
    var boxes_div = []
    if (Object.keys(box).length > 0){
        var i;
        for (i = 0; i < Object.keys(box).length; i++){
            box_i = calculateFaceLocation(box.outputs[0].data.regions[i].region_info.bounding_box)
            boxes_div.push({
                style: {
                    top:box_i.topRow, 
                    right: box_i.rightCol, 
                    left: box_i.leftCol, 
                    bottom:box_i.bottomRow
                }
            })
        }
    }
    return(
        <div>
            {boxes_div.map(div_i => <div style = {div_i.style} className = 'bounding-box' ></div>)}
        </div>
    )
} 

export default Boxes;