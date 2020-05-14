import React, { useEffect, useRef, useState } from 'react';

const ItemsMethodology = (props) => {
    const el = useRef(null);
    const [showContent, setShowContent] = useState(false)
    const { data: item } = props;
    useEffect(() => {
        const observer = new window.IntersectionObserver(function(entries) {               
            const { isIntersecting } = entries[0]; //sacamos todos los itens que estan en el viewport
    
            if (isIntersecting) {
                setShowContent(true)
                observer.disconnect(); //una vez que se muestre el item ya lo desconectamos
            }
          });
          observer.observe(el.current); // le pasamos el elemento al observe        
    },[])
 
    return (
        <div className={`Methodology__items ${showContent && 'show'}`} ref={el}>
            <div className='Methodology__items_circle'>
                <img src={item.img} width='70%' height='70%' />
            </div>
            <div className='Methodology__items_title'>
                <p>{item.description}</p>
            </div>
        </div>
    )
}
export default ItemsMethodology