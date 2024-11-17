import savings from '../../img/savings.png'
import LinkButton from '../layout/LinkButton'

export default function Home (){
    return(
        <section className='flex flex-col items-center justify-center h-[80vh] '>
            <h1 className='sm:text-[40px] font-bold'>Bem-vindo ao <span className='text-yellow-400 bg-zinc-900 px-1'>Costs</span></h1>
            <p className='text-zinc-500 my-5'>Comece a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton to="/newproject" text="Criar Projeto" />
            <img className='sm:w-[22%]' src={savings} alt="Costs" />
        </section>
    )
}