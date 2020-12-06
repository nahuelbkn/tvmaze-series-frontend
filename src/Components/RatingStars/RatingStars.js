import React from "react";


export default class RatingStars extends React.Component
{
    render(){
        const { rating } = this.props;
        return (
            <>
            {
                rating < 2 && (
                    <> {/* Media estrella */}
                        <i className="fas fa-star-half-alt" />
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                    </>
                )
            }
            {
                rating >= 2 && rating < 3 && (
                    <> {/* 1 estrella */}
                        <i className="fas fa-star" />
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                    </>
                )
            }
            {
                rating >= 3 && rating < 4 && (
                    <> {/* 1 estrella  y media*/}
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                    </>
                )
            }
            {
                rating >= 4 && rating < 5 && (
                    <> {/* 2 estrellas */}
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                    </>
                )
            }
            {
                rating >= 5 && rating < 6 && (
                    <> {/* 2 estrellas  y media*/}
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                    </>
                )
            }
            {
                rating >= 6 && rating < 7 && (
                    <> {/* 3 estrellas */}
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                    </>
                )
            }
            {
                rating >= 7 && rating < 8 && (
                    <> {/* 3 estrellas  y media*/}
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                        <i className="far fa-star" />
                    </>
                )
            }
            {
                rating >= 8 && rating < 9 && (
                    <> {/* 4 estrellas */}
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="far fa-star" />
                    </>
                )
            }
            {
                rating >= 9 && rating < 10 && (
                    <> {/* 4 estrellas  y media*/}
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                    </>
                )
            }
            {
                rating >=  10 && (
                    <> {/* 5 estrellas */}
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                    </>
                )
            }
            </>
        )
    }
}