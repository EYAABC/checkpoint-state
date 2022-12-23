import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    fullName: "Eya Abou Shamat",
    profession: "Student",
    bio: "Full Stack Developer",
    image: "https://st2.depositphotos.com/1007566/11569/v/450/depositphotos_115690274-stock-illustration-young-and-elegant-woman-avatar.jpg",
   
  };

  handleClick = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div className="pos app">
        <div className="box">
          {this.state.show && (
            <div className="inf">
              <div className="pos profImg">
                <img src={this.state.image} alt="" />
              </div>
              <section className="pos">
                <h1>{this.state.fullName}</h1>
                <h3>{this.state.profession}</h3>
                <p>{this.state.bio}</p>
              </section>
            </div>
          )}
          <button type="button" className="btn" onClick={this.handleClick}>
            CLICK 
          </button>
        </div>
      
       
      </div>
    );
  }
}
export default App;

