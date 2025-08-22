import { useState, useEffect } from "react"

export function useCatimage ({fact}){
    const [imageUrl, setImageUrl] = useState()
    //para recuperar la imagen cada que tenemos una cita nueva
    useEffect(() =>{
        if(!fact) return
        
        const firstWord = fact.split(' ', 3).join(' ')

        fetch(`https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`)
            .then(Response => Response.json())
            .then(Response => {
                const { url } = Response
                setImageUrl(url)
            })
    },[fact])
    return ({imageUrl})
}