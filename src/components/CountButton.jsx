import { useState } from "react";

function CountButton() {
  const [count, setCount] = useState(0)

  const increment = () => setCount(prevCount => prevCount + 1)

  return (
    <div>
      <p>Wow, you've clicked that button: {count} times</p>
      <button onClick={increment}>Click here!</button>
    </div>
  )
}

export default CountButton