import Banner from '../../compoments/Banner'
import Collapse from '../../compoments/Collapse'
import imgmontagne from '../../assets/Imagesource2.png'

function Propos() {
  return  <main>
            <Banner imgsrc={imgmontagne} altbanner="Paysage de montagne"/>
            <Collapse />
          </main>
}
  
  export default Propos