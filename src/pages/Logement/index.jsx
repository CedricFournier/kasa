import { useParams } from 'react-router-dom'
import Carrousel from '../../compoments/Carrousel';
import Infologement from '../../compoments/Infologement';

function Logement() {
  const { id } = useParams()
  return  <main>
            <Carrousel id={ id } />
            <Infologement id={ id } />
          </main>
}
  
  export default Logement