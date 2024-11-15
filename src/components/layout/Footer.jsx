import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

export default function Footer (){
    return(
        <div className='bg-zinc-900 grid h-[155px] py-7 justify-center items-center '>
        <div className='flex justify-center gap-5 text-white'>
            <FaFacebook className='hover:text-yellow-400'/>
            <FaInstagram className='hover:text-yellow-400'/>
            <FaLinkedin className='hover:text-yellow-400'/>
        </div>
        <p className='text-white text-sm'><span className='text-yellow-400 font-bold'>Costs</span> &copy; 2024 </p>
        </div>
    )
}