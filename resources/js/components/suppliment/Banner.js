import React,{Component} from 'react';
import ReactDOM from 'react-dom';
class Banner extends Component {
    constructor(props){
       super(props);
       //defining variable and array or objects to return to react js view
      this.state = {
        list:[],
      }
    }
    //function react js
    ExampleFunction(){

    }
    // this method will call to those functions has defined inside this method when it reload page
    componentDidMount(){
    }
    render(){
        return (
            <div className="image-banner">
            <img src="/img/images/banner1.jpg" />
             <div className="heading-word"><p>{this.props.bannerWord}</p></div>
            </div>
      );
    }
}
export default Banner;
