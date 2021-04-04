import React, {useRef, useState, useEffect} from 'react'
import Scrambler from 'scrambling-text'
import "../../assets/styles/mainPage.css"

const ScrambledText = () => {
    const [text, setText] = useState('FRONTEND');
    const scramblerRef = useRef(new Scrambler());

    useEffect(() => {
        scramblerRef.current.scramble(text, setText);
      }, []);

    return(
        <div className='side_sentence'>
          <h2 className='side_text'>{text}</h2>
        </div>
    )
}

export default ScrambledText;