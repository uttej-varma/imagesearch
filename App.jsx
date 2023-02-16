
// import React from "react"
// import Validation from "./Formvalidation/formvalid";
// import TimeCounter from "./timeCounter/timeCounter";
// import CounterReducer from "./usereducehook/useReduce";
// import Counter from "../Mock-2/counter";
// import Marks from "./marks/Marks";
import BeachPage from "./searchGallery/defaultPages/beachPage";
import MountainPage from "./searchGallery/defaultPages/mountainPage";
// import TopBar from "./searchGallery/topBar/topbar";

import BirdPage from "./searchGallery/defaultPages/birdPage";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import FoodPage from "./searchGallery/defaultPages/foodPage";
import SearchPage from "./searchGallery/defaultPages/searchPage";




const App=()=>{
    return(
        <div id="main">
           
         <BrowserRouter>
         <Routes>
            <Route path="/" element={<SearchPage/>}/>
            <Route path="mountain" element={<MountainPage/>}/>
            <Route path="bird" element={<BirdPage/>}/>
            <Route path="food" element={<FoodPage/>} />
            <Route path="beach" element={<BeachPage/>}/>
         </Routes>
         </BrowserRouter>
          
        </div>
    )

}
        
    



export default App;
