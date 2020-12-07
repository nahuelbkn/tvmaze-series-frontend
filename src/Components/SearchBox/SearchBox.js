import React from "react";
import { Link } from "react-router-dom";


export default class SearchBox extends React.Component
{
    constructor() {
        super();
        this.state =  {
            userSearch: ""
        }
    }

    change = (event)=>{
        this.setState({[event.target.name]: event.target.value})
    }

    searchHandler = (event)=>{
        event.preventDefault();
        this.props.runSearch(this.state.userSearch);
    }

    render() {
        const { userSearch } = this.state;
        return (
            <div className="search-box">
                <form>
                    <input
                        className="search-input"
                        name="userSearch"
                        placeholder="Buscar una serie..." 
                        value={userSearch}
                        onChange={this.change}
                    />
                    <button 
                        className="search-button"
                        type="submit"
                        onClick={this.searchHandler}
                    >
                        <i className="fas fa-search" />
                        {" Buscar"}
                    </button>
                </form>
                
                <button className="search-favs">
                    <Link to="/favs" className="favs-link">Favoritas</Link>
                </button>
            </div>
        )
    }
  
}

