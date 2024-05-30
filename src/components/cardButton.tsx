interface CardButtonProps {
    children: string
}
const CardButton = (props: CardButtonProps)=>{
    return <button className="bg-zinc-600 text-white font-bold w-full py-2 rounded-full">
        {props.children}
    </button>
}

export default CardButton
