interface CardButtonProps {
    children: string;
    link: string;
}
const CardButton = ({
    children, 
    link
}: CardButtonProps)=>{
        return <button onClick={()=>{
        window.open(link)
    }} className="bg-zinc-600 hover:bg-green-400
        hover:text-zinc-800 text-white font-bold w-full py-2 rounded-md">
        {children}
    </button>
}

export default CardButton
