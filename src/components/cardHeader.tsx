import image from "../assets/img.png";

const CardHeader: React.FunctionComponent = () =>{
    return <div className="text-center flex flex-col items-center">
        <img src={image} className="w-32 rounded-full"/>
        <h1 className="text-white font-bold text-xl">Gabriel Santos</h1>
        <h2 className="text-green-400 font-bold text-lg">Brazil</h2>
        <p className="text-white">Full Stack Developer and vim user</p>
    </div>
}

export default CardHeader;
