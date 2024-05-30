import CardHeader from "./cardHeader";
import CardBody from "./cardBody";

const Card: React.FunctionComponent = () =>{
    return <div className="flex flex-col">
        <CardHeader />
        <CardBody />
    </div>
}

export default Card;
