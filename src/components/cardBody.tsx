import CardButton from "./cardButton";

const CardBody: React.FunctionComponent = () =>{
    return <div className="flex flex-col gap-2">
        <CardButton>Github</CardButton>
        <CardButton>Linkedin</CardButton>
        <CardButton>Twitter</CardButton>
    </div>
}

export default CardBody;
