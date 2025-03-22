import React from "react";
import Import from "../../Globalimports/Imports";


const Productscard = () => {
    return (
        <Import.ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: "50%" }}>
            <Import.View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 12, flexWrap: "wrap" }}>
                <Import.View style={{ width: "49%", borderRadius: 8, flexDirection: "column", overflow: "hidden", borderColor: 'rgba(61, 180, 230,0.2)', borderWidth: 1, backgroundColor: "#fff", shadowColor: 'rgba(61, 180, 230,0.2)', shadowOpacity: 0.3, shadowOffset: { width: 0, height: 2 }, shadowRadius: 2, elevation: 2, }}>
                    {/* p_image */}
                    <Import.View>
                        <Import.Image source={{ uri: "https://cdn.dummyjson.com/products/images/groceries/Apple/1.png" }} style={{ height: 160, width: "100%", resizeMode: "contain", borderRadius: 8 }} />
                    </Import.View>

                    {/* discpercentae */}
                    <Import.View style={{ flex: 1, position: "absolute", borderColor: 'rgba(61, 180, 230,0.2)', borderWidth: 1, backgroundColor: "rgba(61, 180, 230,1)", shadowColor: 'rgba(61, 180, 230,1)', shadowOpacity: 0.3, shadowOffset: { width: 0, height: 2 }, shadowRadius: 2, elevation: 2, borderRadius: 8, right: 0 }}>
                        <Import.Text style={[Import.Theme.h1, { color: "#fff", fontSize: 16, paddingHorizontal: 4, paddingVertical: 2 }]}>2.9%</Import.Text>
                    </Import.View>

                    {/* p_details */}
                    <Import.View style={{ flexDirection: "column", marginHorizontal: 6 }}>
                        <Import.View><Import.Text style={Import.Theme.h1}>Apple</Import.Text></Import.View>
                        {/* rating */}

                        <Import.View style={{ flexDirection: "row", marginVertical: 2 }}>
                            {Array.from({ length: 5 }, (_, index) => (
                                <Import.Ionicons
                                    key={index}
                                    name="star"
                                    size={16}
                                    color="gold"
                                />
                            ))}
                        </Import.View>
                        <Import.View style={{ marginVertical: 4 }}><Import.Text style={Import.Theme.h3} numberOfLines={2} ellipsizeMode="tail">Fresh and crisp apples, perfect for snacking or incorporating into various recipes.</Import.Text></Import.View>
                    </Import.View>



                    {/* price */}
                    <Import.View style={{ flexDirection: "row", backgroundColor: "rgba(61, 180, 230,0.1)", justifyContent: "center", alignItems: "center", height: 32, width: "80%", borderColor: "rgba(61, 180, 230,1)", borderWidth: 1, borderRadius: 50, marginBottom: 8, marginHorizontal: 6, marginTop: 4 }}>
                        <Import.Text style={[Import.Theme.h1, { fontSize: 16 }]}>Price</Import.Text>
                        <Import.View style={{ marginLeft: 8 }}><Import.Text style={[Import.Theme.h1, { fontSize: 16 }]}>₹1.99</Import.Text></Import.View>
                    </Import.View>

                    {/* Addcartbutton */}
                    <Import.View >
                        <Import.Button
                            title={"Add Cart"}
                            textAlign={"center"}
                            paddingVertical={10}
                            paddingHorizontal={0}
                            color={"#fff"}
                            backgroundcolor={"#3aa0d4"}
                            size={16}
                            fontWeight={Import.Theme.buttons_fontstyle.fontWeight}
                            fontFamily={Import.Theme.h1.fontFamily}
                        />
                    </Import.View>

                </Import.View>

                <Import.View style={{ width: "49%", borderRadius: 8, flexDirection: "column", overflow: "hidden", borderColor: 'rgba(61, 180, 230,0.2)', borderWidth: 1, backgroundColor: "#fff", shadowColor: 'rgba(61, 180, 230,0.2)', shadowOpacity: 0.3, shadowOffset: { width: 0, height: 2 }, shadowRadius: 2, elevation: 2, }}>
                    {/* p_image */}
                    <Import.View>
                        <Import.Image source={{ uri: "https://cdn.dummyjson.com/products/images/groceries/Apple/1.png" }} style={{ height: 160, width: "100%", resizeMode: "contain", borderRadius: 8 }} />
                    </Import.View>

                    {/* discpercentae */}
                    <Import.View style={{ flex: 1, position: "absolute", borderColor: 'rgba(61, 180, 230,0.2)', borderWidth: 1, backgroundColor: "rgba(61, 180, 230,1)", shadowColor: 'rgba(61, 180, 230,1)', shadowOpacity: 0.3, shadowOffset: { width: 0, height: 2 }, shadowRadius: 2, elevation: 2, borderRadius: 8, right: 0 }}>
                        <Import.Text style={[Import.Theme.h1, { color: "#fff", fontSize: 16, paddingHorizontal: 4, paddingVertical: 2 }]}>2.9%</Import.Text>
                    </Import.View>

                    {/* p_details */}
                    <Import.View style={{ flexDirection: "column", marginHorizontal: 6 }}>
                        <Import.View><Import.Text style={Import.Theme.h1}>Apple</Import.Text></Import.View>
                        {/* rating */}

                        <Import.View style={{ flexDirection: "row", marginVertical: 2 }}>
                            {Array.from({ length: 5 }, (_, index) => (
                                <Import.Ionicons
                                    key={index}
                                    name="star"
                                    size={16}
                                    color="gold"
                                />
                            ))}
                        </Import.View>
                        <Import.View style={{ marginVertical: 4 }}><Import.Text style={Import.Theme.h3} numberOfLines={2} ellipsizeMode="tail">Fresh and crisp apples, perfect for snacking or incorporating into various recipes.</Import.Text></Import.View>
                    </Import.View>



                    {/* price */}
                    <Import.View style={{ flexDirection: "row", backgroundColor: "rgba(61, 180, 230,0.1)", justifyContent: "center", alignItems: "center", height: 32, width: "80%", borderColor: "rgba(61, 180, 230,1)", borderWidth: 1, borderRadius: 50, marginBottom: 8, marginHorizontal: 6, marginTop: 4 }}>
                        <Import.Text style={[Import.Theme.h1, { fontSize: 16 }]}>Price</Import.Text>
                        <Import.View style={{ marginLeft: 8 }}><Import.Text style={[Import.Theme.h1, { fontSize: 16 }]}>₹1.99</Import.Text></Import.View>
                    </Import.View>

                    {/* Addcartbutton */}
                    <Import.View >
                        <Import.Button
                            title={"Add Cart"}
                            textAlign={"center"}
                            paddingVertical={10}
                            paddingHorizontal={0}
                            color={"#fff"}
                            backgroundcolor={"#3aa0d4"}
                            size={16}
                            fontWeight={Import.Theme.buttons_fontstyle.fontWeight}
                            fontFamily={Import.Theme.h1.fontFamily}
                        />
                    </Import.View>

                </Import.View>

                <Import.View style={{ width: "49%", borderRadius: 8, flexDirection: "column", overflow: "hidden", borderColor: 'rgba(61, 180, 230,0.2)', borderWidth: 1, backgroundColor: "#fff", shadowColor: 'rgba(61, 180, 230,0.2)', shadowOpacity: 0.3, shadowOffset: { width: 0, height: 2 }, shadowRadius: 2, elevation: 2, marginTop: 4 }}>
                    {/* p_image */}
                    <Import.View>
                        <Import.Image source={{ uri: "https://cdn.dummyjson.com/products/images/groceries/Apple/1.png" }} style={{ height: 160, width: "100%", resizeMode: "contain", borderRadius: 8 }} />
                    </Import.View>

                    {/* discpercentae */}
                    <Import.View style={{ flex: 1, position: "absolute", borderColor: 'rgba(61, 180, 230,0.2)', borderWidth: 1, backgroundColor: "rgba(61, 180, 230,1)", shadowColor: 'rgba(61, 180, 230,1)', shadowOpacity: 0.3, shadowOffset: { width: 0, height: 2 }, shadowRadius: 2, elevation: 2, borderRadius: 8, right: 0 }}>
                        <Import.Text style={[Import.Theme.h1, { color: "#fff", fontSize: 16, paddingHorizontal: 4, paddingVertical: 2 }]}>2.9%</Import.Text>
                    </Import.View>

                    {/* p_details */}
                    <Import.View style={{ flexDirection: "column", marginHorizontal: 6 }}>
                        <Import.View><Import.Text style={Import.Theme.h1}>Apple</Import.Text></Import.View>
                        {/* rating */}

                        <Import.View style={{ flexDirection: "row", marginVertical: 2 }}>
                            {Array.from({ length: 5 }, (_, index) => (
                                <Import.Ionicons
                                    key={index}
                                    name="star"
                                    size={16}
                                    color="gold"
                                />
                            ))}
                        </Import.View>
                        <Import.View style={{ marginVertical: 4 }}><Import.Text style={Import.Theme.h3} numberOfLines={2} ellipsizeMode="tail">Fresh and crisp apples, perfect for snacking or incorporating into various recipes.</Import.Text></Import.View>
                    </Import.View>



                    {/* price */}
                    <Import.View style={{ flexDirection: "row", backgroundColor: "rgba(61, 180, 230,0.1)", justifyContent: "center", alignItems: "center", height: 32, width: "80%", borderColor: "rgba(61, 180, 230,1)", borderWidth: 1, borderRadius: 50, marginBottom: 8, marginHorizontal: 6, marginTop: 4 }}>
                        <Import.Text style={[Import.Theme.h1, { fontSize: 16 }]}>Price</Import.Text>
                        <Import.View style={{ marginLeft: 8 }}><Import.Text style={[Import.Theme.h1, { fontSize: 16 }]}>₹1.99</Import.Text></Import.View>
                    </Import.View>

                    {/* Addcartbutton */}
                    <Import.View >
                        <Import.Button
                            title={"Add Cart"}
                            textAlign={"center"}
                            paddingVertical={10}
                            paddingHorizontal={0}
                            color={"#fff"}
                            backgroundcolor={"#3aa0d4"}
                            size={16}
                            fontWeight={Import.Theme.buttons_fontstyle.fontWeight}
                            fontFamily={Import.Theme.h1.fontFamily}
                        />
                    </Import.View>

                </Import.View>
                <Import.View style={{ width: "49%", borderRadius: 8, flexDirection: "column", overflow: "hidden", borderColor: 'rgba(61, 180, 230,0.2)', borderWidth: 1, backgroundColor: "#fff", shadowColor: 'rgba(61, 180, 230,0.2)', shadowOpacity: 0.3, shadowOffset: { width: 0, height: 2 }, shadowRadius: 2, elevation: 2, marginTop: 4 }}>
                    {/* p_image */}
                    <Import.View>
                        <Import.Image source={{ uri: "https://cdn.dummyjson.com/products/images/groceries/Apple/1.png" }} style={{ height: 160, width: "100%", resizeMode: "contain", borderRadius: 8 }} />
                    </Import.View>

                    {/* discpercentae */}
                    <Import.View style={{ flex: 1, position: "absolute", borderColor: 'rgba(61, 180, 230,0.2)', borderWidth: 1, backgroundColor: "rgba(61, 180, 230,1)", shadowColor: 'rgba(61, 180, 230,1)', shadowOpacity: 0.3, shadowOffset: { width: 0, height: 2 }, shadowRadius: 2, elevation: 2, borderRadius: 8, right: 0 }}>
                        <Import.Text style={[Import.Theme.h1, { color: "#fff", fontSize: 16, paddingHorizontal: 4, paddingVertical: 2 }]}>2.9%</Import.Text>
                    </Import.View>

                    {/* p_details */}
                    <Import.View style={{ flexDirection: "column", marginHorizontal: 6 }}>
                        <Import.View><Import.Text style={Import.Theme.h1}>Apple</Import.Text></Import.View>
                        {/* rating */}

                        <Import.View style={{ flexDirection: "row", marginVertical: 2 }}>
                            {Array.from({ length: 5 }, (_, index) => (
                                <Import.Ionicons
                                    key={index}
                                    name="star"
                                    size={16}
                                    color="gold"
                                />
                            ))}
                        </Import.View>
                        <Import.View style={{ marginVertical: 4 }}><Import.Text style={Import.Theme.h3} numberOfLines={2} ellipsizeMode="tail">Fresh and crisp apples, perfect for snacking or incorporating into various recipes.</Import.Text></Import.View>
                    </Import.View>



                    {/* price */}
                    <Import.View style={{ flexDirection: "row", backgroundColor: "rgba(61, 180, 230,0.1)", justifyContent: "center", alignItems: "center", height: 32, width: "80%", borderColor: "rgba(61, 180, 230,1)", borderWidth: 1, borderRadius: 50, marginBottom: 8, marginHorizontal: 6, marginTop: 4 }}>
                        <Import.Text style={[Import.Theme.h1, { fontSize: 16 }]}>Price</Import.Text>
                        <Import.View style={{ marginLeft: 8 }}><Import.Text style={[Import.Theme.h1, { fontSize: 16 }]}>₹1.99</Import.Text></Import.View>
                    </Import.View>

                    {/* Addcartbutton */}
                    <Import.View >
                        <Import.Button
                            title={"Add Cart"}
                            textAlign={"center"}
                            paddingVertical={10}
                            paddingHorizontal={0}
                            color={"#fff"}
                            backgroundcolor={"#3aa0d4"}
                            size={16}
                            fontWeight={Import.Theme.buttons_fontstyle.fontWeight}
                            fontFamily={Import.Theme.h1.fontFamily}
                        />
                    </Import.View>

                </Import.View>

            </Import.View>
        </Import.ScrollView>
    )
}

export default Productscard;