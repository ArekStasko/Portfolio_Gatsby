import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import './whatsMatter.css'

const WhatsMatter = () => {

    return(
        <div className='main_info-container'>
           <div className='main_info-wrapper'>
<h1>JavaScript Przewodniki</h1>
<p>JavaScript (JS) to skryptowy (interpretowany lub kompilowany metodą JIT) język programowania, w którym funkcje są "obywatelami pierwszej kategorii" - 
    obiektami, które można przechowywać w zmiennych jako referencje i przekazywać jak każde inne obiekty. Chociaż JavaScript jest najbardziej znany jako 
    język skryptowy dla stron internetowych, używa go również wiele środowisk poza przeglądarką, takich jak Node.js, Apache CouchDB czy Adobe Acrobat. 
    JavaScript jest językiem opartym na prototypach, wielu paradygmatach
    dynamicznej składni, zorientowanym obiektowo, o stylu imperatywnym i deklaratywnym (np. programowanie funkcyjne). </p>
    <div className='btn-wrapper'>
<div>Live</div>
<div>Github</div>
    </div>
           </div>
           <div className='main_image-wrapper'>
<StaticImage
            layout="constrained"
            placeholder="tracedSVG"
            quality="100"
            width={500}
            src="../../../../assets/images/whats_matter.png"
            alt="animated-image"
          />

<StaticImage
            layout="constrained"
            placeholder="tracedSVG"
            quality="100"
            width={500}
            src="../../../../assets/images/whats_matter-login.png"
            alt="animated-image"
          />

<StaticImage
            layout="constrained"
            placeholder="tracedSVG"
            quality="100"
            width={500}
            src="../../../../assets/images/whats_matter-post.png"
            alt="animated-image"
          />
           </div>
        </div>

    )
}

export default WhatsMatter