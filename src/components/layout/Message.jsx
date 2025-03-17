import { useEffect, useState } from "react"

export default function Message ({type, msg}){

    const [visible, setVisible] = useState(true)

    useEffect(() =>{
        if(!msg){
            setVisible(false)
            return
        }
        setVisible(true)

        const timer = setTimeout(()=>{
            setVisible(false)
        }, 3000)        

        return() => clearTimeout(timer)
    }, [msg])


    
    return(
    <div>{visible && msg && <p className={`${styles.message} ${styles[type] || ""}`}>{msg}</p>}</div>
    )
}