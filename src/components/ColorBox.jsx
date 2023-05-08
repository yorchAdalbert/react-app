import { useState } from 'react'

function ColorBox() {
  const [color, setColor] = useState('Blue')

  const divStyle = {backgroundColor: color, hight: '500px'}

  return (
    <div style={divStyle}>
      <h2>The color is {color}</h2>
      <button onClick={() => setColor('Aquamarine')}>Aquamarine</button>
      <button onClick={() => setColor('BlueViolet')}>BlueViolet</button>
      <button onClick={() => setColor('Chartreuse')}>Chartreuse</button>
      <button onClick={() => setColor('CornflowerBlue')}>CornflowerBlue</button>
    </div>
  )
}

export default ColorBox