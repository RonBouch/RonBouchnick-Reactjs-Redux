import React, { Component } from 'react'

export default class Favorite extends Component {
    constructor(props) {
        super(props);
          
    }
    render() {
        const {data} = this.props.location
        console.log("Data", data)
        return (
            <div className="weatherForm">
            {data!=null?
  <div  key={data.releaseYear} className="cardInfo">
            <img src={data.image}style={{width:150,height:150}} alt="Card image cap" />
            <div>
                <h5>{data.title}</h5>
                 {(data.genre).map((nameOfGenre,i)=>{
                    return <p>{nameOfGenre}</p>
                })}
                <p>Rating : {data.rating}<br></br>release - Year :{data.releaseYear}</p>
               
            </div>
        </div>:console.log(data)}
        
            </div>
          
        )
    }
}
