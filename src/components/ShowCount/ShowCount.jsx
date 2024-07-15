import "./ShowCount.css";

const ShowCount = (props) => {
 return (
    <div className="Show Count">
    <h2>Tu has clickeado aqui {props.contar} {props.contar === 1 ? "vez" : "veces"}</h2>
    </div>
 )
}

export default ShowCount;
