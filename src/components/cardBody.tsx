import CardButton from "./cardButton";

const CardBody: React.FunctionComponent = () =>{
    return <div className="flex flex-col gap-4">
        <CardButton link="https://github.com/gbcosta">Github</CardButton>
        <CardButton link="https://www.linkedin.com/in/gbcostasantos/">Linkedin</CardButton>
        <CardButton link="https://twitter.com/____Koda____">Twitter</CardButton>
    </div>
}

export default CardBody;
