import { useParams } from 'react-router-dom'
import tablogement from '../../datas/listelogement.json';

function Logement() {
  const { id } = useParams()
  const logementitem = tablogement.find((item) => item.id === id)
  return  <main>
            <p>Logement</p>
            <p>{logementitem.title}</p>
          </main>
}
  
  export default Logement