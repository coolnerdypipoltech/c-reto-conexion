import { useState } from 'react';

import './EmbajadorItem.css';

import tiktok from "../../assets/mainPage/embajadores/desktop/embajadores-tiktok.svg"
import fb from "../../assets/mainPage/embajadores/desktop/embajadores-fb.svg"
import insta from "../../assets/mainPage/embajadores/desktop/embajadores-insta.svg"
import yt from "../../assets/mainPage/embajadores/desktop/embajadores-yt.svg"

import { useViewport } from '../../context/ViewportContext';

const EmbajadorItem = ({ slideDir, image, link1, link2}) => {

  let imageHolder1 = tiktok;
  let imageHolder2 = tiktok;

  if(link1.includes("facebook")){
    imageHolder1 = fb;
  } else if(link1.includes("instagram")){
    imageHolder1 = insta;
  } else if(link1.includes("youtube")){
    imageHolder1 = yt;
  }

  if(link2.includes("facebook")){
    imageHolder2 = fb;
  } else if(link2.includes("instagram")){
    imageHolder2 = insta;
  } else if(link2.includes("youtube")){
    imageHolder2 = yt;
  }

  return (
    <div className={`embajador-item ${slideDir === 'left' ? 'embajador-item--slide-left' : 'embajador-item--slide-right'}`}>
      <img src={image} alt="Embajador" className="embajador-item__image" />
      <div className="embajador-item__links">
        <a href={link1} target="_blank" rel="noopener noreferrer">
          <img src={imageHolder1} alt="Link 1" />
        </a>
        <a href={link2} target="_blank" rel="noopener noreferrer">
          <img src={imageHolder2} alt="Link 2" />
        </a>
      </div>
    </div>
  );
};

export default EmbajadorItem;
