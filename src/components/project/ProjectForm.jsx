import { useEffect, useState } from "react"
import Input from "../form/Input"
import Select from "../form/Select"
import SubmitButton from "../form/SubmitButton"

export default function ProjectForm (props){

    const {handleSubmit, projectData} = props

    const [categories, setCategories] = useState ([])
    const [project, setProject] = useState(projectData || {})

    useEffect( () => {
        fetch ("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setCategories(data)
        })
        .catch((err) => console.log(err))
    }, [])


    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value})
    }

    function handleCategory(e){
        setProject({ ...project, category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        },
    })
}
    return(
    <div className="grid justify-center pt-[60px] h-[60vh] ">
        <h1 className="font-bold text-[180%]">Criar Projeto</h1>
        <p className="">Crie seu projeto para depois adicionar os serviços</p>
        <form  onSubmit={submit}>
            <Input
            type="text"
            text="Nome do projeto"
            name="name"
            placeholder="Insira o nome do projeto"
            handleOnChange={handleChange}
            value={project.name ? project.name : ""}
            />
            <Input
            type="number"
            text="Orçamento do projeto"
            name="budget"
            placeholder="Inira o orçamento do projeto"
            handleOnChange={handleChange}
            value={project.budget ? project.budget : ""}
            />
            <Select 
            name="category_id"
            text="Selecione a categoria" 
            options={categories}
            handleOnChange={handleCategory}
            value={project.category ? project.category.id : ""}
           />
            <SubmitButton text="Criar Projeto" />
        </form>
    </div>
)}

   