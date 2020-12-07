import React from "react";
import { NavLink } from "react-router-dom";

import SearchBox from "./../SearchBox/SearchBox";


export default class NavBar extends React.Component
{
    render() {
        return (
           <>
                <nav className="navbar">
                    <a 
                        className="navbar-logo" 
                        target="_blank"
                        rel="noreferrer noopener"
                        href="https://www.tvmaze.com/"
                    >
                        <img 
                            className="navbar-logo" 
                            alt="logo" 
                            src="https://static.tvmaze.com/images/tvm-header-logo.png" 
                        />
                    </a>
                    { this.props.runSearch && ( <SearchBox runSearch={this.props.runSearch} /> )}
                    {this.props.back && (
                        <button className="navbar-back">
                            <NavLink to="/" className="navlink-back">Volver</NavLink>
                        </button>
                    )}
                </nav>
                <div className="secondary-bar">
                    {/* A futuro esto barra secundaria contendrá funcionalidades, actualmente es solo visual. */}
                </div>
           </>
        )
    }
}