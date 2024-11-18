export default function input({type, text, name, placeholder, handleOnChange, value}){
    return(
        <div>
            <label className="font-bold text-[120%]" 
            htmlFor={name}> {text} </label>
            <input className="w-[135%] h-[38px] pl-2 my-5 rounded-sm hover:border-slate-950  hover:border-[2px]"  
            type={type}
            name={name} 
            id={name} 
            placeholder={placeholder} 
            onChange={handleOnChange} 
            value={value} />
        </div>
    )
}