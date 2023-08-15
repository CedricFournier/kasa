import tablogement from '../../datas/listelogement.json';
import { Link } from 'react-router-dom'

function Listelogement() {


    return (
        <section className='sectionitemlog'>
            {tablogement.map((logement) => (
                <article key={logement.id}>
                    <Link to={`/Logement/${logement.id}`}>{logement.title}</Link>
                </article>
            ))}
        </section>
    )
}

export default Listelogement;