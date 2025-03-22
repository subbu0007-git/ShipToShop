import React from "react";
import Import from "../../Globalimports/Imports";


const Ordercards = () => {
    return (
        <Import.View style={{ borderColor: 'rgba(61, 180, 230,0.2)', borderWidth: 1, marginTop: 8, backgroundColor: "white", shadowColor: 'rgba(61, 180, 230,1)', shadowOpacity: 0.3, shadowOffset: { width: 0, height: 2 }, shadowRadius: 2, elevation: 2, borderRadius: 8, justifyContent: "center" }}>
            <Import.View style={{ flexDirection: "row", justifyContent: "space-between", borderBottomColor: "lightgrey", borderBottomWidth: 1, paddingHorizontal: 8, paddingVertical: 12 }}>
                <Import.View><Import.Text style={Import.Theme.h1}>Order_ID</Import.Text></Import.View>
                <Import.View><Import.Text style={[Import.Theme.h1, { color: "#3aa0d4" }]}>123456</Import.Text></Import.View>
            </Import.View>

            <Import.View style={{ flexDirection: "row", alignItems: "center", marginTop: 6, marginHorizontal: 8 }}>
                <Import.View style={{ borderColor: "rgba(61, 180, 230,1)", borderWidth: 1, borderRadius: 8 }}>
                    <Import.Image source={{ uri: "https://cdn.dummyjson.com/products/images/groceries/Apple/1.png" }} style={{ height: 40, width: 40, resizeMode: "contain", borderRadius: 8 }} />
                </Import.View>


                <Import.View style={{ flex: 1, marginLeft: 6 }}>
                    <Import.Text style={[Import.Theme.h3, { maxWidth: "80%" }]} numberOfLines={1} ellipsizeMode="tail">Product Name</Import.Text>
                </Import.View>
                <Import.View style={{ alignItems: "flex-end" }}>
                    <Import.Text style={Import.Theme.h3}>₹12.00</Import.Text>
                </Import.View>
            </Import.View>

            <Import.View style={{ flexDirection: "row", justifyContent: "space-between", borderTopColor: "lightgrey", borderTopWidth: 1, paddingHorizontal: 8, paddingVertical: 12, marginTop: 8 }}>
                <Import.View><Import.Text style={Import.Theme.h1}>Total</Import.Text></Import.View>
                <Import.View><Import.Text style={[Import.Theme.h1, { color: "#3aa0d4" }]}>₹12.00</Import.Text></Import.View>
            </Import.View>

            <Import.View style={{ alignItems: "flex-end", marginBottom: 8, marginRight: 8 }}>
                <Import.Text style={[Import.Theme.h3, { color: "grey" }]}>22-03-2025 6:43PM</Import.Text>
            </Import.View>

        </Import.View>
    )
}

export default Ordercards;