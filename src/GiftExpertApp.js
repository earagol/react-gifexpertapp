import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GiftGrid from './components/GiftGrid';

const GiftExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);

    const handleAdd = () => {

        setCategories( [...categories,'Hombre Araña'] );
        // setCategories( 'Hombre Araña' );

    }

    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            <button onClick={ handleAdd } >Agregar</button>

            <ol>
                {
                    categories.map( category => 
                         <GiftGrid 
                            key={ category }
                            category={ category }
                         />
                    )
                }
            </ol>
        </>
    )
}

export default GiftExpertApp
