import CardHeader from "./cardHeader";
import CardBody from "./cardBody";

const Card: React.FunctionComponent = () =>{
    return <div className="flex flex-col bg-zinc-800 gap-4 rounded-lg p-4">
        <CardHeader />
        <CardBody />
    </div>
}

export default Card;
