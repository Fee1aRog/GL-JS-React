// export default function Button(props) 
export default function Button({ragacaClass, text, onClick})
{
    return (
        // <button className={"btn" + " " + props.ragacaClass} style={{backgroundcolor: 'yellow'}}> {props.text}</button>
        <button 
            onClick={onClick}
            className={`btn ${ragacaClass ? ragacaClass : ""}`}>
            {text}
        </button>
    )
}