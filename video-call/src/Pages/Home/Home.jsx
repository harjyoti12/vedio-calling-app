import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'
import them from '../../assets/download.png'
const Home = () => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const handelJoin = useCallback(() => {
    navigate(`/room/${value}`);
  }, [navigate, value]);

  return (
    <div className='container'>
      <div className='left'>
        <img src={them} alt="" />
      </div>
    <div className='home'>
      <input type="text" onChange={(e) => setValue(e.target.value)} placeholder='Generate Room Code' />
      <button onClick={handelJoin}>Create</button>
    </div>
    </div>
  );
}

export default Home;
