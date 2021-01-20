import React, { Component } from "react";
import { get } from "../../utilities";



class Awards extends Component{
  constructor(props){
    super(props);
    this.state = {
        awards: ""
    };
}
  

  componentDidMount() {
    get("/api/awards", { userId: this.props.userId}).then(name => {
        this.setState({ awards: name.awards });
    });
  }

  render() {
    //what to return / display
    return(
      <div id="whichawards" className="Profile-info">
          Your awards: {this.state.awards}
      </div>
    );
  }
}


export default Awards;