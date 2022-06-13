import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
class Aidsection extends Component {
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
        this.ExampleFunction();
    }
    render(){
        return (
            <div className="under-bar-image-section">
                <div className="main-image-section">
                    <div className="left-image-section">
                        <img src="/img/images/middle_1c.jpg" alt="" />
                    </div>
                    <div className="center-image-section">
                        <img src="/img/images/middle_1b.jpg" alt="" />
                    </div>
                    <div className="right-image-section">
                        <img src="/img/images/middle_1a.jpg" alt=""/>
                    </div>
                </div>
            </div>
      );
    }
}
export default Aidsection;
