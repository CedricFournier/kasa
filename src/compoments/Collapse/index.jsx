import { useState } from 'react'
import arrowtop from '../../assets/arrow_top.svg'

function Collapse(props) {
    const [open, setOpen] = useState(false)
    const toggle = () => {
        setOpen(!open);
      };

    return (
        <article>
            <div className='closecollapse'>
                <p>{props.titre}</p>
                <button onClick={toggle}>
                    <img src={arrowtop} alt="Fléche haut" />
                </button>
            </div>
            {open && (<div className='toggle'>
                <p>{props.content}</p>
            </div>
            )}    
        </article>
    )
  }
  
  export default Collapse