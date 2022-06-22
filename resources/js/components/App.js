import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import  RouteClass from '../routes';
import {Navigate} from 'react-router-dom';
import Cookies from 'js-cookie';
const username = Cookies.get('username');
class App extends Component {
    constructor(props){
       super(props);
       //defining variable and array or objects to return to react js view
      this.state = {
        username:username,
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
        <div  className="container-app">
        <RouteClass />
        </div>
      );
    }
}
<style scoped>
</style>
export default App;
