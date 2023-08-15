
import arrowtop from '../../assets/arrow_top.svg'
import tabapropos from '../../datas/data_apropos.json'

function Collapse() {
    return (
      <div>
        {tabapropos.map((propos, index) => (
            <article key={index}>
                <div>
                    <p>{propos.title}</p>
                    <button>
                        <img src={arrowtop} alt="Fléche haut" />
                    </button>
                </div>
                <div>
                    <p>{propos.content}</p>
                </div>
            </article>
        ))}
      </div>
    )
  }
  
  export default Collapse