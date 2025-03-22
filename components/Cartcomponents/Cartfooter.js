import React from "react";
import Import from "../../Globalimports/Imports";

const Cartfooter = () => {
    return (
        <Import.TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between", backgroundColor: "#3aa0d4", marginBottom: "30%", paddingVertical: 14, marginHorizontal: Import.Theme.distancebetweenmobedges.marginHorizontal, borderRadius: 8, paddingHorizontal: 6 }}>
            <Import.View>
                <Import.Text style={[Import.Theme.h1, { color: "#fff" }]}>Checkout</Import.Text>
            </Import.View>
            <Import.View>
                <Import.Text style={[Import.Theme.h1, { color: "#fff" }]}>Total ₹200</Import.Text>
            </Import.View>
        </Import.TouchableOpacity>
    )
}

export default Cartfooter;