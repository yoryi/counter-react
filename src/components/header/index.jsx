import { useState } from 'react';
import './styles.css'
function Header() {
  const [counter, setCounter] = useState(0);
  const handleIncrement = () => {
    setCounter(counter + 1)
  }
  const handleDecrement = () => {
    setCounter(counter - 1)
  }

  return (
    <div className='😀'>
      <button onClick={handleDecrement}>
        -
      </button>
      <p>Número de click: {counter}</p>
      <button onClick={handleIncrement}>
        +
      </button>
    </div>
  );
}
export default Header;
