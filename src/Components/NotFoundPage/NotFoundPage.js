import React from "react";

import NavBar from "../NavBar/NavBar";
import NotFound from "./../NotFound/NotFound";

export default class NotFoundPage extends React.Component {
    render() {
        return (
            <>
                <NavBar />
                <NotFound originText="página" />
            </>
        )
    }
}