export default function Info(props){
    return(
        <div className="details">
         <div className='name'>{props.value}</div>
        <input type='text' className='inputbox' placeholder={props.value}></input>
        </div>
    )
}