export default function SubmitButton ({text}){
    return(
        <div>
            <button className="bg-zinc-900 duration-300 hover:bg-yellow-600 w-[30%] h-10 text-white hover:text-black hover:font-semibold cursor-pointer">{text}</button>
        </div>
    )
}