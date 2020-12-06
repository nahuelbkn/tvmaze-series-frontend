import React from "react"; 
import { Link } from "react-router-dom";

export default class NotFound extends React.Component
{
    render() {
        const { originText } = this.props;
        return (
            
                <div className="notfound-card">
                    <img 
                        className="notfound-img" 
                        src="https://www.initcoms.com/wp-content/uploads/2020/07/404-error-not-found-1.png" 
                        alt="404 not found."
                        title="404 not found"
                    />
                    <div className="notfound-info">
                        <h2>{`${originText[0].toUpperCase()+originText.slice(1)} no disponible`}</h2>
                        <p>
                            {`La ${originText} que usted busca no se encuentra en nuestro sistema o no está disponible en este momento`}
                        </p>
                        {
                            originText === "serie" ? (
                                <p>
                                    Continue buscando...
                                </p>
                            ) : (
                                <Link to="/">
                                    <button className="button-back">
                                        Continuar buscando
                                    </button>
                                </Link>
                            )
                        }
                    </div>
                    
                
                </div>
        )
    }
}