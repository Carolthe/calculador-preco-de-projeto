import { Link } from 'react-router-dom'


export default function LinkButton ({to, text}){
    return(
        <div  >
            <Link className='bg-zinc-900 text-white w-[120px] h-9 hover:text-yellow-400 flex justify-center items-center ' to={to} >
            {text}
            </Link>
        </div>
    )
}