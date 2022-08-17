import { useState } from "react"

export function UseForm(logar){
    
    const [form, setForm]=useState(logar)
    
    const onChange = (event) => {
        const { name, value } = event.target
        setForm({ ...form, [name]: value })
    }

    const clear=()=>{
        setForm(logar)
    }

    return [form, onChange, clear]
}