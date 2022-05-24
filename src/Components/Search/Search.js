import React from "react"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./Search.css"

class Search extends React.Component{

    constructor(props){
        super(props)

        this.props = props;

        this.searchRef = React.createRef();



    }

    searchMovies = () => {
        //
        //console.log(event.target.value)
        //
        let search_item = this.searchRef.current.value;
        // console.log(this.searchRef.current.value)
        this.props.search_movies_prop(search_item)
    }


    render(){

        return (
            <div>
                <form>
                    <input type='search' ref={this.searchRef} className='form-control custom-search' onKeyUp={() => this.searchMovies()}/>
                </form>
            </div>
        )

    }



}

export default Search