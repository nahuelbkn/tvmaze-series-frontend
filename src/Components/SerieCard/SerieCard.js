import React from "react"; 
import RatingStars from "../RatingStars/RatingStars";

export default class SerieCard extends React.Component
{
    render() {
        const { serieObject } = this.props;
        const REGEX = /(<([^>]+)>)/ig;
        return (
            serieObject && (
                <div className="serie-card">
                    {
                        serieObject.image && (
                            <img 
                                className="serie-img" 
                                src={serieObject.image.medium} 
                                alt={ serieObject.name && ( serieObject.name )}
                                /* title={ serieObject.name && ( serieObject.name )} */
                            /> 
                        )
                    } 
                    <div className="serie-info">
                        { serieObject.name && ( 
                            <div className="serie-header">
                                <h2 className="serie-name">{serieObject.name}</h2>
                                {
                                    serieObject.rating && serieObject.rating.average && (
                                        <span className="serie-rating">
                                            <RatingStars rating={serieObject.rating.average} />
                                            <span className="serie-rating-detail">
                                                {` (${serieObject.rating.average})`}
                                            </span>
                                        </span>
                                    )
                                }
                            </div> 
                        )}
                        
                        <div className="serie-extraData">
                        {
                            serieObject.language &&  (
                                <span className="serie-languaje">{serieObject.language}</span>
                            )
                        }
                        {
                            serieObject.genres && (
                                serieObject.genres.map(gender=>{
                                    return <span className="serie-gender">{gender}</span>
                                })
                            )
                            
                        }
                        </div>
                    
                        { serieObject.summary && ( <p>{serieObject.summary.replace(REGEX, "")}</p> )}
                        
                        <div className="serie-actions">
                            { serieObject.officialSite && ( 
                                <button 
                                    className="official-site-button"
                                >
                                    <a 
                                        className="official-site-a"
                                        href={serieObject.officialSite} 
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        {"Sitio oficial "}
                                    </a>
                                    <i className="fas fa-info-circle"></i>
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )
        )
    }
}