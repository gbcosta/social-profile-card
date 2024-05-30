import CardHeader from "./cardHeader";
import CardBody from "./cardBody";
import image from "../assets/img.png";

const Card: React.FunctionComponent = () =>{
    return <div className="flex flex-col bg-zinc-800 gap-4 rounded-lg p-8">
        <img src={image} className="w-32 rounded-full self-center"/>
        <CardHeader />
        <CardBody />
    </div>
}

export default Card;
