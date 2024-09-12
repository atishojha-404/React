export default function Jokes(props){
    return(
        <div>
            <blockquote>
                {props.setup && <h3>Setup: {props.setup}</h3>}
                <p>Punchline: {props.punchline}</p>
                <p>Upvotes: {props.upvotes ? props.upvotes : "-"}</p>
                <p>downvotes: {props.downvotes ? props.downvotes : "-"}</p>
               <hr />
            </blockquote>
        </div>
    )
}