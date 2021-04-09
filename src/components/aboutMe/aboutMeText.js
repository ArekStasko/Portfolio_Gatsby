import React from "react"
import "./aboutMe.css"


const AboutMeText = () => {
  return (
    <div className="text_wrapper">
      <h1>Hello in about me section</h1>
    <p>
        CSS został stworzony w celu odseparowania struktury dokumentu od formy
        jego prezentacji. Separacja ta zwiększa zakres dostępności witryny,
        zmniejsza zawiłość dokumentu, ułatwia wprowadzanie zmian w strukturze
    </p>
    <p>
        dokumentu. CSS ułatwia także zmiany w renderowaniu strony w zależności
        od obsługiwanego medium (ekran, palmtop, dokument w druku, czytnik
        ekranowy). Stosowanie zewnętrznych arkuszy CSS daje możliwość zmiany
    </p>
    <p>
        wyglądu wielu stron naraz bez ingerowania w sam kod (X)HTML, ponieważ
        arkusze mogą być wspólne dla wielu dokumentów.
    </p>
      
    </div>
  )
}

export default AboutMeText
