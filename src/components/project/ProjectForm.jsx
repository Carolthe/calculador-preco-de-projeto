import Input from "../form/Input"
import Select from "../form/Select"
import SubmitButton from "../form/SubmitButton"



export default function ProjectForm (){
    return(
    <div className="grid justify-center pt-[60px] h-[60vh] ">
        <h1 className="font-bold text-[180%]">Criar Projeto</h1>
        <p className="">Crie seu projeto para depois adicionar os serviços</p>
        <form>
            <Input
            type="text"
            text="Nome do projeto"
            name="name"
            placeholder="Insira o nome do projeto" />
            <Input
            type="number"
            text="Orçamento do projeto"
            name="budget"
            placeholder="Inira o orçamento do projeto" />
            <Select 
            name="category_id"
            text="Selecione a categoria" />
            <SubmitButton text="Criar Projeto" />
        </form>
    </div>
)}