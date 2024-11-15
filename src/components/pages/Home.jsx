import savings from '../../img/savings.png'

export default function Home (){
    return(
        <section className='grid justify-items-center items-center my-[88px]'>
            <h1 className='sm:text-[40px] font-bold'>Bem-vindo ao <span className='text-yellow-400 bg-zinc-900 px-1'>Costs</span></h1>
            <p className='text-zinc-500 my-6'>Comece a gerenciar os seus projetos agora mesmo!</p>
            <a href="/" className='underline text-purple-800 hover:text-purple-600'>Criar Projeto</a>
            <img className='sm:w-[400px]' src={savings} alt="Costs" />
        </section>
    )
}