import logo from '../img/logo.png'
import './Logo.css';



const Logo = () => {
  return (

    <div >
        <img src={logo}  className='img-estilo' alt='Logo da Netflix' ></img>
    </div>
  )
}

export default Logo