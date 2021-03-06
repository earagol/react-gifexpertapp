import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';
// import { getGifts } from '../helpers/getGifts'

const GiftGrid = ({ category }) => {

    // const [images, setImages] = useState([]);

    // useEffect( () => {
    //     getGifts( category )
    //         .then( setImages );
    // }, [ category ])

    const { data:images, loading } = useFetchGifs( category );

    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{ category }</h3> 

            { loading && <p className='animate__animated animate__flash'>Loading</p> }

            <div className="card-grid">
                    {
                        images.map( image => (
                            <GifGridItem 
                                key={ image.id }
                                { ...image } 
                            />
                        ))
                    }
            </div>
        </>
    )
}

export default GiftGrid;
