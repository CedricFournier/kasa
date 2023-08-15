import PropTypes from 'prop-types'

function Banner(props) {
    
    return (
            <div className='divbanner'>
                <img src={props.imgsrc} alt={props.altbanner} />
                <h1>{props.titreh1}</h1>
            </div>
    )
  }
  
  Banner.propTypes = {
    imgsrc: PropTypes.string,
    altbanner: PropTypes.string,
    titreh1: PropTypes.string,
}

export default Banner