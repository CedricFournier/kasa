/* eslint-disable jsx-a11y/img-redundant-alt */

import { useState } from 'react'
import tablogement from '../../datas/listelogement.json';
import arrowleft from '../../assets/arrow_left.svg';
import arrowright from '../../assets/arrow_right.svg';

function Carrousel(props) {
    const logementitem = tablogement.find((item) => item.id === props.id)
    const lengarray = logementitem.pictures.length

    const [count, setCount] = useState(1)

    return (
      <div className='divcarrousel'>
        <img src={logementitem.pictures[0]} alt = "Photo de l'appartement" />
        <img className='imgleft' src={arrowleft} alt='Fléche gauche' />
        <img className='imgright' src={arrowright} alt='Fléche droite' />
        <p className='counter'>{count}/{lengarray}</p>
      </div>
    )
  }
  
  export default Carrousel