interface StuffProps {
    word: string;
    cheese?: "Gouda" | "Munster" | "Brie";
    something?: string | number;
}

export default function Stuff(props: StuffProps){
    return (<div>
        <h1>{props.word}</h1>
        {props.cheese ? props.cheese : "no cheese"}
        {props.something ? props.something : "no something"}
    </div>)
}

