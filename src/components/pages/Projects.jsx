import Message from "../layout/Message";
import {useLocation } from 'react-router-dom'

export default function Projects (){
    const location = useLocation()
    let message = ""
    if(location.state)(
        message = location.state.message
    )

    return(
        <div className="h-[80vh]">
            <h1>Meus Projetos</h1>
            {message &&
           <Message  msg="Alguma mensagem" />}
        </div>
    )
}