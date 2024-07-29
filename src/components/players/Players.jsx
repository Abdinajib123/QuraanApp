import React from 'react';
import { useEffect } from 'react';
import ReactPlayer from 'react-player';

const Players = ({ reciterDetail, chapterDetail }) => {
  const audiLink = (reciter, number) =>
    reciter + '/' + ('00' + number).slice(-3) + '.mp3';

  useEffect(() => {}, [chapterDetail, reciterDetail]);

  const largeFontStyle = { fontSize: '1.25rem' };

  return (
    <div className='h-100 shadow-lg p-6 '>
      <h1 className='fs-5 fw-bold text-center py-2'>Player</h1>
      <hr />
      {reciterDetail !== null && chapterDetail !== null ? (
        <ul className='list-group text-end'>
          <div>
            <li
              className='list-group-item bg-transparent border-0 text-black py-2 d-flex justify-content-between'
            >
              <span className='fw-bold' style={largeFontStyle}>Reciter: </span>
              <span style={largeFontStyle}>{reciterDetail.name}</span>
            </li>
            <hr />
            <li
              className='list-group-item bg-transparent border-0 text-black py-2 d-flex justify-content-between'
            >
              <span className='fw-bold' style={largeFontStyle}>Chapter In Arabic: </span>
              <span style={largeFontStyle}>{chapterDetail.name_arabic}</span>
            </li>
            <hr />
            <li
              className='list-group-item bg-transparent border-0 text-black py-2 d-flex justify-content-between'
            >
              <span className='fw-bold' style={largeFontStyle}>Chapter In English: </span>
              <span style={largeFontStyle}>{chapterDetail.name_complex}</span>
            </li>
            <hr />
            <li
              className='list-group-item bg-transparent border-0 text-black py-2 d-flex justify-content-between'
            >
              <span className='fw-bold' style={largeFontStyle}>Revelation Place: </span>
              <span style={largeFontStyle}>{chapterDetail.revelation_place}</span>
            </li>
            <hr />
            <li
              className='list-group-item bg-transparent border-0 text-black py-2 d-flex justify-content-between'
            >
              <span className='fw-bold' style={largeFontStyle}>Translated Name: </span>
              <span style={largeFontStyle}>{chapterDetail.translated_name.name}</span>
            </li>
            <hr />
            <div className='div'>
              <ReactPlayer
                url={audiLink(reciterDetail.Server, chapterDetail.id)}
                controls={true}
                playing={true}
                width='100%'
                height='60px'
              />
            </div>
          </div>
        </ul>
      ) : (
        <div className='text-center'>
          <span className='spinner-border'></span>
        </div>
      )}
    </div>
  );
}

export default Players;
