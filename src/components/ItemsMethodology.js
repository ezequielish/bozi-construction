import React from 'react';


const ItemsMethodology = (props) => {
    const { data: item } = props;
    return (
        <div className='Methodology__items'>
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