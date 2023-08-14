import tablogement from '../../datas/listelogement.json';

function Listelogement() {


    return (
        <section className='sectionitemlog'>
            {tablogement.map((logement) => (
                <article key={logement.id}>{logement.title}</article>
            ))}
        </section>
    )
}

export default Listelogement;