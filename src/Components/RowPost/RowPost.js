import React, { useEffect, useState } from 'react'
import axios from '../../Axios'
import {imageUrl} from '../../Constants/Constants'
import { collection, addDoc } from "firebase/firestore";
import './RowPost.css'
import { getAuth } from "firebase/auth";
import {db} from '../../Firebase/Config'

function RowPost(props) {
    const [movies, setmovies] = useState([])
    const [pop, setPop] = useState(false)
    const [Details, setPopDetails] = useState('')
    const auth = getAuth();
    const user = auth.currentUser;
    const uid = user.uid 
  
    const handleChildElementClick = (e) => {
      e.stopPropagation()   }
  

   const handleStore = async () =>{
    const docRef = await addDoc(collection(db, uid), {
      Details:Details
    });
    setPop(!pop)
    console.log("Document written with ID: ", docRef.id);}

     
    useEffect(() => {
      axios.get(props.url).then((response)=>{
        setmovies(response.data.results)
        
      }).catch(error=>{
      })
    }, [])
    
  return (
    <div className='row'>
    <h2>{props.title}</h2>
    <div className= {`${ props.isSmall ? "small_posters" : "posters"}`} >
        {movies.map((obj,index)=>
        <img onClick={()=>{
           setPopDetails(obj)
            setPop(!pop)
        }} key={index} src={`${ imageUrl+obj.backdrop_path }`} alt="" className= "poster"  />
        )}  
    </div>
  {pop ?<div  className='pop_back' onClick={()=>setPop(!pop)}>
         <div className='pop' onClick={(e) => handleChildElementClick(e)}>
           <div className='pop_left'>
             <div style={{float:"left", margin:"9px"}}><img src={`${ imageUrl+Details.backdrop_path }`} className='pop_img' alt=''/></div>
             <div className='pop_button' >
               <button><i class="fa fa-play"></i></button>
               <button onClick={handleStore} ><i class="fa fa-bars"></i></button>
               <h6 id='b1'>Play</h6><h6 id='b2'>Add to MyList</h6>
             </div>
           </div>

           <div className='pop_info'>
            <div style={{overflow:"hidden", maxHeight:"80px"}} ><h2>{Details.title||Details.name} &nbsp;<span style={{color:"red", fontWeight:"300"}}>{Details.vote_average}</span></h2></div>
            <div className='pop_text' ><h4>{Details.overview}</h4></div>  
            <div className='pop_rate'>
             <h6>Vote Count  :<span style={{color:"red"}}>{Details.vote_count}</span></h6> 
             <h6>&emsp;Popularity :<span style={{color:"red", fontWeight:"33"}}>{Details.popularity}</span></h6>
           </div>
           </div>

           
         </div>
        </div> : ""}
</div>
  )
}
 
export default RowPost