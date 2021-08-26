
import { useState } from "react";
import AddCategory from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GiftExpertApp= ()=>{
 
    // const categories= ['One punch','samurai x', 'dragon ball']

   const [categories, setCategories] = useState(['butterlfies'])

//    const handleAdd= ()=>{
        
//         setCategories([...categories,'HunterxHunter']);
//    }
    
    return(<>
        <h2>
            GiftExpertAPP
        </h2>
        <AddCategory setCategories={setCategories}/>
        
        <hr/>

        {
        <ol>
           {
                categories.map(category=> 
                    <GifGrid 
                    category={category}
                    key={category}/>
                )
           }
        </ol>
        
     }

        </>)
    
}

export default GiftExpertApp;