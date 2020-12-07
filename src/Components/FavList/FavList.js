import React from "react";
import SerieCard from "../SerieCard/SerieCard";



export default  class FavsPage extends React.Component {
    render() {
        const { arrayFavs } = this.props;
        return (
            arrayFavs && arrayFavs.length > 0 && (
                arrayFavs.map(serieFav=>{
                    return <SerieCard serieObj={serieFav} />
                })
            )
        )
    }
}