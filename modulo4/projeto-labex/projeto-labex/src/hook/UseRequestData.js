import { useEffect, useState } from "react"
import axios from "axios"

const useRequestData=(url, headers)=>{

    const [data, setData] = useState(undefined)
    const [isLoading, setIsLoading] = useState(undefined)
    const [erro, setErro] = useState(undefined)

    useEffect(()=>{
        setIsLoading(true)
        axios.get(url, headers).then(response=>{
            setIsLoading(false)
            setData(response.data)
        }).catch(error =>{
            setIsLoading(false)
            setErro(error)
        })
    },[])

    return [data, isLoading, erro]
}

export default useRequestData;