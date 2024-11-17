export default function Select ({text, name, options, handleOnChange, value}){
    return(
        <div>
            <label className="font-bold text-[120%]" htmlFor={name}> {text}: </label>
            <select className="w-[145%] h-[38px] pl-2 my-5 rounded-sm duration-200 hover:border-slate-950  hover:border-[2px]" name={name} id={name}>
                <option>Selecione uma opção</option>
            </select>
        </div>
    )
}