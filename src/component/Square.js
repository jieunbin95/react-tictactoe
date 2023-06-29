import React from "react"
import "./Square.css"

// export default class Square extends React.Component{

//   render(){
//     return(
//       <button className="square"
//         onClick={()=>{this.props.onClick()}}>  
//         {/* 부모컴포넌트에게 받은 props받기-->state이용하기 */}
//         {this.props.value}            
//       </button>
//     )
//   }
// }

const Square=({onClick,value})=>{
    return(
      <button className="square"
        onClick={onClick}>  
        {/* 부모컴포넌트에게 받은 props받기-->state이용하기 */}
        {value}            
      </button>
    )
}

export default Square