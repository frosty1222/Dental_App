import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import  RouteClass from '../routes';
class App extends Component {
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
        <div  className="container">
            <div  className="row justify-content-center">
            </div>
            <RouteClass />
        </div>
      );
    }
}
<style scoped>
</style>
export default App;
