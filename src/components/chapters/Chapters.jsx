import React from 'react';
import { useState } from 'react';

const Chapters = ({ chapters, chapterHandler }) => {
  const [activeId, setActiveId] = useState('');

  return (
    <div className='min-vh-100 shadow-lg p-3 pb-6 pt-10 overflow-hidden pb-6'>
      <h1 className='fs-5 fw-bold text-center'>Chapters</h1> 
      <hr />
      <ul className='list-group text-end'>
        {chapters && chapters.length > 0 ? (
          chapters.map((chapter) => (
            <div key={chapter.id}>
              <li
                onClick={(e) => {
                  chapterHandler(chapter);
                  setActiveId(chapter.id);
                }}
                className={`list-group-item bg-transparent border-0 text-black py-0 d-flex justify-content-between cursor ${
                  chapter.id === activeId && 'active'
                }`}
              >
                <span style={{ fontSize: '1.25rem' }}>{chapter.id} - </span> 
                <span style={{ fontSize: '1.25rem' }}>{chapter.name_arabic}</span>
              </li>
              <hr />
            </div>
          ))
        ) : (
          <div className='text-center'>
            <span className='spinner-border'></span>
          </div>
        )}
      </ul>
    </div>
  );
}

export default Chapters;
