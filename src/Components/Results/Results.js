import React from "react"
import "./Results.css"

class Results extends React.Component{

    constructor(props){
        super(props)

        this.props = props
    }

    render(){

        //console.log('From Result Component: ', this.props.searched_results)

        let results = this.props.searched_results.Search;

        console.log(results)

        let totalResults = null
        if(typeof results != 'undefined'){
             totalResults = results.map((result, index) => (
             <React.Fragment key={index}>
                 <div><img src={result.Poster} /></div>
                 <h3>{result.Title}</h3>
                 <h6>Year Released: {result.Year}</h6>
             </React.Fragment>
             ) )
        }

       

        

        return (
            <div className='results'>{totalResults}</div>
        )

    }





}

export default Results;