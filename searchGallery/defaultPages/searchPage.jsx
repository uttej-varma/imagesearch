import TopBar from "../../searchGallery/topBar/topbar";
import { useState } from "react";
import "../../searchGallery/universal.css";
import { useEffect } from "react";
import axios from "axios"

const SearchPage=()=>{
    const [data,setdata]=useState([]);
    const [zoom,setZoom]=useState(Array(100).fill(false));
    const [input,setInput]=useState("");
    const [search,setsearch]=useState(false);
    const zoomImage=(ind)=>{
        zoom[ind]=true;
        setZoom([...zoom]);
       
    }
    const unzoomImage=(ind)=>{
        zoom[ind]=false
        setZoom([...zoom]);
        
    }
    useEffect(()=>{
        const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=e754694a18d1a6527fbd0e1e44abeecc&tags=${input}&format=json&nojsoncallback=1`;
        axios.get(url).then((response)=>{setdata(response.data.photos.photo)}).catch((err)=>{console.log(err)});
    },[search])
    return(
        <>
        <TopBar function={setInput} trigger={setsearch} value={search}/>
       
        <div id="imageContainer">
              {data.map((value,index)=>{
                const imgUrl=`https://farm${value.farm}.staticflickr.com/${value.server}/${value.id}_${value.secret}.jpg`
                return(
                    <img key={value.id} src={imgUrl} onMouseOver={()=>{zoomImage(index)}} onMouseLeave={()=>{unzoomImage(index)}}  className={zoom[index]?"img":"original"} alt="mountainPictures"/>
                )
              })}
        </div>
        </>
    )
}
export default SearchPage;