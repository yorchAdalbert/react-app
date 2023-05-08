function Button() {
  const logger = param => console.log(param)

  return <button onClick={logger}>Logger</button>
}

export default Button