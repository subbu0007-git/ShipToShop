import React from "react";
import Import from "../../Globalimports/Imports";
import Cartcards from "./Cartcards";
import Cartfooter from "./Cartfooter";

const Cartlayout = () => {
    return (
        <Import.View style={{ flex: 1, flexDirection: "column", justifyContent: "space-between" }}>
            <Cartcards />
            <Cartfooter />
        </Import.View>
    )
}

export default Cartlayout;