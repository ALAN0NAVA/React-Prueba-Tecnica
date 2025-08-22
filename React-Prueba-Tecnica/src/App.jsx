import { useEffect, useState } from "react"
import "./App.css"
import { getRandomFact } from './Services/facts.js'
import { useCatimage } from "./Hooks/useCatImage.js"


export function App () {
    const [fact, setFact] = useState()
    const {imageUrl} = useCatimage({fact})
    //para recuperar la cita al ccargar la imagen
    useEffect(() => {
        getRandomFact().then(setFact)
    }, [])

    const handleClick = async () =>{
        const newFact = await getRandomFact()
        setFact(newFact)
    }

    return(
        <main>
            <h1>App de gatitos</h1>
            <button onClick={handleClick}>Get new fact</button>
            <section>
                {fact && <p>{fact}</p>}
                {imageUrl && <img src={imageUrl} alt="cat" />}
            </section>
        </main>
        

    )
}