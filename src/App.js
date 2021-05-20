import Nav from "./layout/nav";
import bg from './img/home_jumbotron.png';
import Row from './layout/row';


function App() {

  return (
    <div className="container"> 
        <Nav />
        <div className="jumbotron">
          <div className="left-jumbotron">
            <img src={bg} alt="logo" height="700px" width="700px" />
          </div>
          <div className="right-jumbotron">
            <h1 className="logo">Read</h1>
            <p className="logo">In Order To</p>
            <h1 className="logo">Live</h1>
            <hr></hr>
            <h2 className="logo">O - Book </h2>
            <hr></hr>
            <h1 className="logo">Platform to Download Books</h1>
          </div>
        </div>
        <Row />
    </div>
  );
}

export default App;