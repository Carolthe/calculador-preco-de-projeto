import { useNavigate } from "react-router-dom";
import ProjectForm from "../project/ProjectForm";

export default function NewProject (){

    const navigate = useNavigate()

    function createPost (project){

        project.cost = 0
        project.services = []

        fetch("http://localhost:5000/projects",{
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) =>{

            console.log(data)

            const state = { message: "Projeto criado com sucesso!" };
            navigate("/projects", {state});
            
        })
        .catch((err) => console.log(err))
    }

    return(
        <div className="h-[80vh]">
            <ProjectForm handleSubmit={createPost} />
        </div>
    )
}