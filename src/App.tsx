import { useCallback, useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleIncreaceCount = useCallback(() => {
    setCount(count + 1)
  }, [count])
  const handleDecreaseCount = useCallback(() => {
    if (count) {
      setCount(count - 1)
    }
  }, [count])

  return (
    <div className="App">
      <div className="card">
        <button onClick={handleDecreaseCount}>-</button>
        <span className="count">{count}</span>
        <button onClick={handleIncreaceCount}>+</button>
      </div>
    </div>
  )
}

export default App
