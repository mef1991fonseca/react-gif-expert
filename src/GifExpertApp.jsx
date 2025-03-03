import { useState } from "react"
import { AddCategory, GifGrid } from "./components"


export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'One Punch' ])
    //console.log(categories)

    const onAddCategory = ( newCategory ) => {
        console.log(newCategory)
        //console.log(newCategory)
        //1° Forma de Agregar valores al arreglo
        //setCategories([...categories, 'Pokemon'])
        //2° Forma de Agregar valores al arreglo
        //setCategories(cat => [...cat, 'Pokemon'])
        if ( categories.includes(newCategory) ) return;
        //3° Forma de Agregar valores al arreglo al inicio 
        setCategories([ newCategory, ...categories ])
        //console.log('Pokemon')
    }
    
    return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory onNewCategory={ onAddCategory } />

        {/* setCategories = { setCategories }  */}

        {/* Listado de Gif */}
        {/* <ol> */}
        { 
            categories.map( (category) => (
                <GifGrid 
                    key={ category } 
                    category={ category } 
                />  
            ))  
        }
        
        {/* </ol> */}

        {/* <button onClick={ onAddCategory }>
            Agregar
        </button> */}

        {/* Gif Item */}
    
    </>
    
  )
}
