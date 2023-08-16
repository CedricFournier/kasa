import { useParams } from 'react-router-dom'
import Carrousel from '../../compoments/Carrousel';

function Logement() {
  const { id } = useParams()
  return  <main>
            <p>Logement</p>
            
            <Carrousel id={ id }/>
          </main>
}
  
  export default Logement