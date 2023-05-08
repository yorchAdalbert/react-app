import { useState } from 'react'

const colorNames = [
  'Aquamarine', 'BlueViolet', 'Chartreuse', 'CornflowerBlue', 'Thistle', 
  'SpringGreen', 'SaddleBrown', 'PapayaWhip', 'MistyRose'
];

function ColorBox() {
  const [color, setColor] = useState('Tomato')

  const divStyle = {backgroundColor: color, hight: '500px'}

  return (
    <div style={divStyle}>
      <h2>The color is {color}</h2>
      { colorNames.map(colorName => <button onClick={() => setColor(colorName)} key={colorName}>{colorName}</button>) }
    </div>
  )
}

export default ColorBox