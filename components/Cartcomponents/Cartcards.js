import React from "react";
import Import from "../../Globalimports/Imports";

const Cartcards = () => {
    return (
        <Import.View style={{ flex: 1, flexDirection: "column", marginHorizontal: Import.Theme.distancebetweenmobedges.marginHorizontal }}>

            <Import.View style={{ borderColor: 'rgba(61, 180, 230,0.2)', borderWidth: 1, marginTop: 8, backgroundColor: "white", shadowColor: 'rgba(61, 180, 230,1)', shadowOpacity: 0.3, shadowOffset: { width: 0, height: 2 }, shadowRadius: 2, elevation: 2, borderRadius: 8, justifyContent: "center" }}>
                <Import.View style={{ flexDirection: "row" }}>
                    <Import.View style={{ borderColor: 'rgba(61, 180, 230,1)', borderWidth: 1, margin: 8, borderRadius: 8, overflow: "hidden" }}>
                        <Import.Image source={{ uri: "https://cdn.dummyjson.com/products/images/groceries/Apple/1.png" }} style={{ height: 100, width: 100, resizeMode: "contain", borderRadius: 8 }} />
                    </Import.View>

                    <Import.View style={{ flexDirection: "column", justifyContent: "center" }}>
                        <Import.View style={{ marginBottom: 4 }}><Import.Text style={Import.Theme.h1}>Product name</Import.Text></Import.View>
                        <Import.View style={{ marginBottom: 6 }}><Import.Text style={[Import.Theme.h3, { fontSize: 16 }]}>Qty 1</Import.Text></Import.View>
                        <Import.View><Import.Text style={[Import.Theme.h2, { fontSize: 16 }]}>Price</Import.Text></Import.View>
                    </Import.View>

                </Import.View>


                <Import.View style={{ borderColor:"#3aa0d4",borderWidth:1,borderRadius:8 }}>
                    <Import.Button
                        title={"🗑️ Remove"}
                        textAlign={"center"}
                        paddingVertical={10}
                        paddingHorizontal={0}
                        borderRadius={8}
                        color={"#3aa0d4"}
                        backgroundcolor={"#fff"}
                        size={18}
                        fontWeight={Import.Theme.buttons_fontstyle.fontWeight}
                        fontFamily={Import.Theme.h1.fontFamily}
                    />
                </Import.View>

            </Import.View>

        </Import.View>
    )
}

export default Cartcards;