import React from "react";
import NavBar from "../NavBar/NavBar";


import OnDevCard from "./../OnDevCard/OnDevCard";
import FavList from "./../FavList/FavList";

export default  class FavsPage extends React.Component {
    constructor() {
        super();
        this.state = {
            arrayFavs: []
        }
    }


    componentDidMount() {

    }


    render() {
        const { arrayFavs } = this.state;
        return (
            <>
                <NavBar back={true} />

                <OnDevCard title={"Series favoritas."} />

                {
                    arrayFavs && arrayFavs.length > 0 && (
                        <FavList arrayFavs={this.state.arrayFavs} />
                    )
                }
            </>
            
        )
    }
}