import tablogement from '../../datas/listelogement.json';
import Collapse from '../Collapse';
import Rating from '../Rating';

function Infologement(props) {
    const logementitem = tablogement.find((item) => item.id === props.id)

    return (
        <section>
            <div>
                <h1>{logementitem.title}</h1>
                <p>{logementitem.location}</p>
                {logementitem.tags.map((tags, index) => (
                    <p key={index}>{tags}</p>
                ))}
                <p>{logementitem.host.name}</p>
                <img src={logementitem.host.picture} alt="Propriétaire" />
                <Rating rating={logementitem.rating} />

            </div>
            <div>
                <Collapse titre="Description" content={logementitem.description} />
                <Collapse titre="Équipements" content={logementitem.equipments.map((equipement, index) => (
                    <p key={index}>{equipement}</p>
                ))} />
            </div>
        </section>
    )
}

export default Infologement;