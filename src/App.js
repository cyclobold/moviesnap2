import React from "react";
import logo from './logo.svg';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import "./CustomStyles.css";
import Search from "./Components/Search/Search"
import Results from "./Components/Results/Results"
import axios from "axios";


class App extends React.Component{
  constructor(){
    super()

    this.state = {
      results : null
    }
  }


  searchMoviesFromAPI = (search_item) => {

    setTimeout(() => {
      axios.get(`http://www.omdbapi.com/?s=${search_item}&apikey=81e3fca8`).then((feedback) =>{
        if(feedback.status == 200){
            //update the state of the app..
            this.setState({
                results: feedback.data
            }) 


          
        }

    })
    }, 2000)
    



  }


  render(){
    //console.log(this.state.results)
    let showResults = <React.Fragment>No Result</React.Fragment>
    if(this.state.results != null){
      showResults = <Results searched_results={this.state.results} />
    }

    return (
      <div className="container">
        <div className="App">
            <header className="App-header">
              <Search search_movies_prop = {this.searchMoviesFromAPI} />
                { showResults }
            </header>
        </div>
      </div>
    );

  }



  componentDidMount(){

  }

  componentDidUpdate(){
    // console.log("pdated: ", this.state)
  }


}

export default App;
