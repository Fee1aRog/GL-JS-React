// export default function Button(props) 
export default function Button({ragacaClass, text})
{
    return (
        // <button className={"btn" + " " + props.ragacaClass} style={{backgroundcolor: 'yellow'}}> {props.text}</button>
        <button className={`btn ${ragacaClass ? ragacaClass : ""}`}>{text}</button>
    )
}