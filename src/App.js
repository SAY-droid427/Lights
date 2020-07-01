import React, {Component} from "react";
import {Card, CardImg,CardBody,CardTitle} from "reactstrap";
import LIGHTS from "./shared/lights";
import {Button} from "reactstrap";
import Footer from "./components/FooterComponent";

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      lightColor:"unlit.jpg",
      lights:LIGHTS
    }
  }
  
  changeLight(url){
    
    const rn=Math.round(Math.random()*3);
    const items=this.state.lights;
    const required=items.filter((item)=>{
      if(item.id==rn){
        return item;
      }      
    })[0].image;
    const finalUrl=required;
    this.setState({lightColor:finalUrl})
    console.log(finalUrl);
    return(
      <Card>
        <CardImg src={this.state.lightColor}/>
      </Card>
    
     )
    
  }
  
  
  render(){
    const url="/assets/images/";
    const imageStyle={
         height:"500px",
         width:"100%",
         
    }
   
    return(
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 m-3">
          <Card>
          <CardImg style={imageStyle} src={url+this.state.lightColor} />
          <CardBody>
            <CardTitle>
            <Button color="warning" onClick={()=>this.changeLight(url)}><h4>Click this button and check which color bulb comes out with this click!</h4></Button>      

            </CardTitle>
          </CardBody>
        </Card> 
          </div>
        </div>
        

      <Footer></Footer>  
        
      </div>
    )
  }
}


export default App;