import React from "react"; 
import { Link } from "react-router-dom";

export default class OnDevCard extends React.Component
{
    render() {
        return (
            
            <div className="notfound-card">
                <img 
                    className="notfound-img" 
                    src="https://www.initcoms.com/wp-content/uploads/2020/07/404-error-not-found-1.png" 
                    alt="404 not found."
                    title="404 not found"
                />
                <div className="notfound-info">
                    <h2>{this.props.title}</h2>
                    <p>
                        {`Sección en desarrollo, estará disponible muy pronto.`}
                    </p>
                    {
                        <Link to="/">
                            <button className="button-back">
                                Continuar buscando
                            </button>
                        </Link>
                    
                    }
                </div>
                
            
            </div>
        )
    }
}