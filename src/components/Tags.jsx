export default function Tags(props){
    return(
        <div className={'rounded' + props.tag === 'new' ? 'bg-emerald' : 
                            (props.tag === 'Recomended Seller' ? 'bg-yellow' : '')}>
            {props.tag}
        </div>
    )
}