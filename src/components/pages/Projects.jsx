import Message from "../layout/Message";
import { useNavigate } from "react-router-dom";

export default function Projects (){
    const location = useNavigate()
    let message = ""
    if(location.state)(
        message = location.state.message
    )

    return(
        <div className="h-[80vh]">
            <h1>Meus Projetos</h1>
            {message &&
           <Message type="success"  msg={message} />}
        </div>
    )
}