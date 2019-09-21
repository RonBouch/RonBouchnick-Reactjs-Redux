import React, { Component } from 'react'
import Movies from '../data/Movies.json'
import {Link} from 'react-router-dom'

class Home extends React.Component {
    constructor(props) {
        super(props);
      
    }
   

    

    render() {
     
        //save the responses apis and use them locally / data folder!
        let m=Movies.sort(function(a, b) {
            var yearA = a.releaseYear; 
            var yearB = b.releaseYear;
            if (yearB < yearA) {
              return -1;
            }
            if (yearB > yearA) {
              return 1;
            }        
           
            return 0;
          });

        const movies= m.map((post,i)=>(
            <div  key={i} className="card">
            <img src={post.image}style={{width:150,height:150}} alt="Card image cap" />
            <div>
                <h5>{post.title}</h5>
                <p>release - Year :{post.releaseYear}</p>
                <Link to={{
                    pathname:"/Favorite",
                    data:post
                }} >Watch-Now</Link>
            </div>
        </div>
        
        ))

        return (
            <div className="weatherForm">
            <div className="weatherForm2">  
               {movies}
            </div>            
            </div>
        )
    }
}

}

export default Home;