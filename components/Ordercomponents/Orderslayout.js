import React from "react";
import Import from "../../Globalimports/Imports";
import Ordercards from "./Ordercards";

const Orderlayout = () => {
    return (
        <Import.View style={{ marginHorizontal: Import.Theme.distancebetweenmobedges.marginHorizontal }}>
            <Ordercards />
        </Import.View>
    )
}

export default Orderlayout;