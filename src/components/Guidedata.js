import "./guide.css";
function Guidedata(props){
return (
<div classNmae="g-card">
    <div classNmae="g-image">
        <img src={props.image} alt="image"></img>
    </div>
    <h4>{props.heading}</h4>
    <p>{props.text}</p>
</div>
);
}
export default Guidedata;