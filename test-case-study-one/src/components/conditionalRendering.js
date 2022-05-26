import React, { Component } from 'react'

class ConditionalRendering extends Component {
    constructor() {
      super()
      this.state = {
         loggedIn:true,
         message:"Prashant",
         input:""
      }
      console.log("Constructor Called")
    }
  render() {

      if(this.state.loggedIn){
          return(
              <div>
                  {this.state.loggedIn && <p>Hai I Am Checking</p>}
                  <p>This Is If Condition</p>
                  <p>{this.state.message}</p>
                  <button onClick={()=>this.setState({loggedIn:!this.state.loggedIn,message:"Ramesh"})}>Click to Else Condition</button>
                  <input type={"text"} onChange={(e)=>this.setState({input:e.target.value})}/>
             </div>
          )
      }
      else{
          return(
              <div>
                  <p>This Is Else Condition</p>
                  <p>{this.state.message}</p>
                  <button onClick={()=>this.setState({loggedIn:!this.state.loggedIn,message:"Prasant"})}>Click to Else Condition</button>
             </div>
          )
      }
  }
}

export default ConditionalRendering