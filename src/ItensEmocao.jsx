import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid} from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular} from '@fortawesome/free-regular-svg-icons';
// import { faStar as faStarRegular} from '@fortawesome/free-regular-svg-icons';
 
const ItemEmocao = ({titulo, img, cor}) => {
  const [fav,setFav] = useState();
  const handFavClick = () => {
    const newFav = !fav;
    setFav(newFav);
  }
  
 
    return(
        <div className='card-emocao'>
          <div className='titulo-card'>
             <h3>{titulo}</h3>
            <img src={img} alt={titulo}  className='img-card'/>
            {
              fav == true
                ? <FontAwesomeIcon icon= {faHeartSolid} className='fa-Heart' onClick={handFavClick} style={{color:cor}}/>
                : <FontAwesomeIcon icon= {faHeartRegular} className='fa-Heart' onClick={handFavClick}/>
            }
          
          </div>
        </div>
    )
}
 
export default ItemEmocao;