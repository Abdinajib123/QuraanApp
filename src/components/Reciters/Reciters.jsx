import React from 'react';
import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';

const Reciters = ({ reciters, reciterHandler }) => {
  const [activeId, setActiveId] = useState('');

  return (
    <div className='min-vh-100 shadow-lg p-3 pt-10 overflow-hidden'>
      <h1 className='fs-5 fw-bold text-center py-2'>Reciters</h1>
      <hr />
      {reciters && reciters.length > 0 ? (
        reciters.map((reciter) => (
          <div key={reciter.id}>
            <div
              onClick={(e) => {
                reciterHandler(reciter);
                setActiveId(reciter.id);
              }}
              className={`d-flex align-items-center p-8 py-0 cursor ${
                reciter.id === activeId && 'active'
              }`}
            >
              <FaUserCircle className='fs-3' />
              <span className='py-2 px-2' style={{ fontSize: '1.25rem' }}>{reciter.name}</span>
              <br />
            </div>
            <hr />
          </div>
        ))
      ) : (
        <div className='text-center'>
          <span className='spinner-border'></span>
        </div>
      )}
    </div>
  );
}

export default Reciters;
