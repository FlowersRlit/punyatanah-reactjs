export default function Tags(props){
    return(
        <div className={`rounded-md mr-1 ${props.tag === 'new' ? 'bg-emerald-600' : 
                            (props.tag === 'nego' ? 'bg-orange1' : '')} `}>
            <h6 className="text-white p-1 px-2 uppercase text-xs">{props.tag}</h6>
        </div>
    )
}