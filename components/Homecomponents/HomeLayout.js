import React, { useEffect, useState } from "react";
import Import from "../../Globalimports/Imports";
import Logowithtext from "../../Globalcomponents/Logowithtext";
import Homeheader from "./Homeheader";
import Productscard from "./Productscard";
import { useIsFocused } from "@react-navigation/native";
import { Getproductsdataapi } from "../../Redux/Api/Getproductsdataapi";
import { setProductsdata } from "../../Redux/Actions/Getdataaction";

const HomeLayout = ({ productsdata, setProductsdata }) => {
    console.log('i am products data', productsdata)
    const [activetab, setactivetab] = useState('Beauty');
    const focused = useIsFocused();
    const handleheadertab = (active) => {
        setactivetab(active)
    }
    const getproductsData = async () => {
        try {
            const experiencedata = await Getproductsdataapi();
            setProductsdata(experiencedata);
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    useEffect(() => { if (focused) { getproductsData } }, [focused])

    return (
        <Import.View style={{ marginHorizontal: Import.Theme.distancebetweenmobedges.marginHorizontal, }}>
            <Homeheader activetab={activetab} handleheadertab={handleheadertab} />
            <Productscard />
        </Import.View>
    );
};

const mapStateToProps = (state) => ({ productsdata: state.Getproductsdatareducer.productsdata });
const mapDispatchToProps = { setProductsdata };
export default connect(mapStateToProps, mapDispatchToProps)(HomeLayout);
