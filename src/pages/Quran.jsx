import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Reciters from '../components/Reciters/Reciters';
import Chapters from '../components/chapters/Chapters';
import Player from '../components/players/Players';

const Quran = () => {
  const [reciters, setReciters] = useState([]);
  const [chapters, setChapters] = useState([]);
  const [chapterDetail, setChapterDetail] = useState(null);
  const [reciterDetail, setReciterDetail] = useState(null);

  // Get All Reciters with Audio
  useEffect(() => {
    async function fetchData() {
      const {
        data: { reciters },
      } = await axios.get(`https://mp3quran.net/api/_english.php`);
      
      // Exclude the reciters at index 4, 12, and 17
      const excludedIndices = [ 12, 17];
      const filteredReciters = reciters.filter((_, index) => !excludedIndices.includes(index));

      // Limit the reciters from 10 to 20
      const limitedReciters = filteredReciters.slice(8, 20);
      setReciters(limitedReciters);
    }

    fetchData();
  }, []);

  // Get All Chapters
  useEffect(() => {
    async function fetchData() {
      const {
        data: { chapters },
      } = await axios.get(`https://api.quran.com/api/v4/chapters`)

      setChapters(chapters)
    }
    reciters && reciters.length > 0 && fetchData()
  }, [reciters,chapters])

  const reciterHandler = (reciter) => {
    setReciterDetail(reciter)
  }
  const chapterHandler = (chapter) => {
    setChapterDetail(chapter)
  }

  return (
    <div>
       
        <div className='row p-5 home-body '>
    <div className='col-lg-4 col-md-4 col-sm-12 col-12 scroll'>
      <Reciters reciters={reciters} reciterHandler={reciterHandler} />
    </div>
    <div className='col-lg-4 col-md-4 col-sm-12 col-12 scroll '>
      <Chapters chapters={chapters} chapterHandler={chapterHandler} />
    </div>
    <div className='col-lg-4 col-md-4 col-sm-12 col-12 '>
      <Player
        reciterDetail={reciterDetail}
        chapterDetail={chapterDetail}
      />
    </div>
  </div>
 
    </div>
  )
}

export default Quran
