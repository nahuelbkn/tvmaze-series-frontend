import React from "react";
import NavBar from "../NavBar/NavBar";
import NotFound from "./../NotFound/NotFound"
import SerieCard from "../SerieCard/SerieCard";



export default class HomePage extends React.Component
{
    constructor() {
        super();
        this.state = {
            responseObj: null,
            found: undefined
        }
    }



    runSearch = (searchText)=>{/* TODO  modificar ruta*/
        fetch(`http://localhost:3001/search/shows/${encodeURI(searchText)}`)
        .then(response=>response.json())
        .then(jsonResponse=>{
            jsonResponse.error ? ( this.setState(({found: false})) ) : (
                this.setState({responseObj: jsonResponse, found: true})
            )
        })
        .catch(()=>{this.setState(({found: false}))}) 
    }


    render() {
        const { responseObj, found } = this.state;
        return (
            <>
                <NavBar runSearch={this.runSearch} />
                { found && ( <SerieCard serieObject={responseObj} /> ) }
                { found === false && ( <NotFound originText="serie" /> ) }  {/* TODO */}
                
            </>
        )
    }
}