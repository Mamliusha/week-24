import { useState } from 'react';
import './tarif.css'

function Tariff() {
  const[pressed1, setPressed1] = useState(false);
  const[pressed2, setPressed2] = useState(false);
  const[pressed3, setPressed3] = useState(false);
  const[pressed4, setPressed4] = useState(false);

  const clickIt1 = () => {
    setPressed1(!pressed1)
  }
  const clickIt2 = () => {
    setPressed2(!pressed2)
  }
  const clickIt3 = () => {
    setPressed3(!pressed3)
  }
  const clickIt4 = () => {
    setPressed4(!pressed4)
  }

  const containerClassName1 = pressed1 ? 'tar pressed' : 'tar';
  const containerClassName2 = pressed2 ? 'tar pressed' : 'tar';
  const containerClassName3 = pressed3 ? 'tar pressed' : 'tar';
  const containerClassName4 = pressed4 ? 'tar pressed' : 'tar';
  return (
  <div className='tariffs'>
    <div className={containerClassName1} onClick={clickIt1} id='tar1'>

    <div className='tar1'>Безлимитный 300</div>
    <div className='tar2'>300 руб./мес.</div>
    <div className='tar3'>До 10 Мбит/с.Объем включенного трафика неограничен.</div>  
    
    </div>
    <div className={containerClassName2} onClick={clickIt2} id='tar2'>
    <div className='tar1'>Безлимитный 450</div>
    <div className='tar2'>450 руб./мес.</div>
    <div className='tar3'>До 50 Мбит/с.
    Объем включенного трафика неограничен.</div>  
    </div>
    <div className={containerClassName3} onClick={clickIt3} id='tar3'>
    <div className='tar1'>Безлимитный 550</div>
    <div className='tar2'>550 руб./мес.</div>
    <div className='tar3'>До 100 Мбит/с.
    Объем включенного трафика неограничен.</div>  
    </div>
    <div className={containerClassName4} onClick={clickIt4} id='tar4'>    
    <div className='tar1'>Безлимитный 1000</div>
    <div className='tar2'>1000 руб./мес.</div>
    <div className='tar3'>До 200 Мбит/с.
    Объем включенного трафика неограничен.</div></div></div>  
  );
}

export default Tariff;
