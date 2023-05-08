function ButtonAlert() {

  const clickedButton = () => alert('Clicked button!')

  return <button onClick={clickedButton}>click me</button>

}

export default ButtonAlert;