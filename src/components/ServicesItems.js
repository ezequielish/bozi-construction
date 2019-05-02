import React from 'react';

const ServicesItems = (props) => {
    const { data } = props

    return (
        <div className="Services__category_items">
            <figure>
                <img src={data.img} alt={data.tag} width='100%' height='100%' />
            </figure>
            <div className='Services__category_items_title'>
                <h3>{data.description}</h3>
            </div>
        </div>
    )
}

export default ServicesItems;
