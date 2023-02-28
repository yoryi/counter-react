import { useState } from 'react';
import './styles.css'
function Header() {
  const [counter, setCounter] = useState(0);
  const handleIncrement = () => {
    setCounter(counter + 1)
  }

  return (
    <div className='😀'>
      <p>Númer de click: {counter}</p>
      <button onClick={handleIncrement}>
        Click me
      </button>
    </div>
  );
}
export default Header;
