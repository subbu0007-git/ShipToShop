import React, { useState } from "react";
import Import from "../../Globalimports/Imports";
import Logowithtext from "../../Globalcomponents/Logowithtext";
import Homeheader from "./Homeheader";
import Productscard from "./Productscard";

const HomeLayout = () => {
    const [activetab, setactivetab] = useState('Beauty');
    const handleheadertab = (active) => {
        setactivetab(active)
    }
    return (
        <Import.View style={{ marginHorizontal: Import.Theme.distancebetweenmobedges.marginHorizontal, }}>
            <Homeheader activetab={activetab} handleheadertab={handleheadertab} />
            <Productscard />
        </Import.View>
    );
};

export default HomeLayout;
