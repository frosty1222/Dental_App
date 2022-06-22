import {Link} from 'react-router-dom';
import {Navigate} from 'react-router-dom';
import Cookies from 'js-cookie';
const email = Cookies.get('email');
export default  function NavBar(){
    return(
        <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            {email != 'lodong601@gmail.com' ? (
            <span>denied page,you don't have permission <Navigate to="/mylogin" /></span>
            ):(<span></span>)
            }
            <Link className="navbar-brand" to="/index">Admin</Link>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
                <li className="active"><a href="/addimg">Add Image<span className="sr-only">(current)</span></a></li>
                <li><Link to="/serviceVL">Service View</Link></li>
                <li><Link to="/serviceCtgV">Service Category View</Link></li>
                <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                <ul className="dropdown-menu">
                    <li><Link to="/galview">Gallery View</Link></li>
                    <li><Link to="/contactVL">Contact view</Link></li>
                    <li><Link to="/ViewNews">News View</Link></li>
                    <li><Link to="/discountView">Discount View</Link></li>
                    <li><Link to="/oView">Orthodontic View</Link></li>
                    <li><Link to="/cView">Customer View</Link></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="/">Return Home</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">One more separated link</a></li>
                </ul>
                </li>
            </ul>
            <form className="navbar-form navbar-left">
                <div className="form-group">
                <input type="text" className="form-control" placeholder="Search" />
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
            </form>
            <ul className="nav navbar-nav navbar-right">
                <li><a href="#">Link</a></li>
                <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                <ul className="dropdown-menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                </ul>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    )
}
