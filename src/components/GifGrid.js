import React  from 'react'
// import { useState } from 'react'
import { getGifs } from '../helpers/getGifs'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'


export const GifGrid = ({category}) => {

   //  const [Images, setImages] = useState([])
   
   //  useEffect(()=>{
   //     getGifs(category).
   //     then(setImages)
   //  },[])

      const {data:images,loading}= useFetchGifs(category);



    return (
       
       <>
        <h3>{category}</h3>

        

       <div className="card-grid">
         
           

           {loading && <p>Cargando...</p> }
            
               
               {
                   images.map(img=><GifGridItem 
                    key={img.id}
                    {...img}/>)
               }
              
            
        </div>
       </>
       
    )
}
