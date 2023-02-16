import "./topbar.css";
import { useNavigate } from "react-router-dom";
const TopBar=(props)=>{
    const navigate=useNavigate();
    const handleSwitch=(str)=>{
        navigate(str);
    }
    const searchHandler=()=>{
        if(props.value===true)
        {
            props.trigger(false);
        }
        else{
            props.trigger(true);
        }
    }
    return(
        <>
        <div className="topBarContainer">
            <h1>Snap Shot</h1>
            <div>
                <input type="text" placeholder="search" onClick={()=>{handleSwitch("/")}} onChange={(e)=>{props.function(e.target.value)}}/>
                <button onClick={searchHandler}>search</button>
            </div>
            <div>
                <button onClick={()=>{handleSwitch("/mountain")}} >Mountain</button>
                <button onClick={()=>{handleSwitch("/beach")}}>Beach</button>
                <button onClick={()=>{handleSwitch("/bird")}} >Birds</button>
                <button  onClick={()=>{handleSwitch("/food")}}>Food</button>
            </div>
        </div>
        </>
    )
}
export default TopBar;