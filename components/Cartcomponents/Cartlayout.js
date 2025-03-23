import React, { useState } from "react";
import Import from "../../Globalimports/Imports";
import Cartcards from "./Cartcards";
import Cartfooter from "./Cartfooter";
import { clearCart, removeFromCart } from "../../Redux/Actions/Cartdataactions";
import { connect } from "react-redux";
import RazorpayCheckout from 'react-native-razorpay';

const Cartlayout = ({ cartItems, removeFromCart, clearCart }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const handleRemove = (id) => {
        removeFromCart(id);
    };
    const handleClearCart = () => {
        clearCart();
    };
    const totalprice = () => {
        return cartItems.reduce((acc, item) => {
            return item.price + acc
        }, 0)
    }


    const handleCloseModal = () => {
        setModalVisible(false);
    };
    const handlepayment = () => {
        var options = {
            description: 'Credits towards consultation',
            image: 'https://i.imgur.com/3g7nmJC.jpg',
            currency: 'INR',
            key: 'rzp_test_M2Sb0gJt4nyRVA',
            amount: 1 * 100,
            name: 'Acme Corp',
            prefill: {
                email: 'gaurav.kumar@example.com',
                contact: '9191919191',
                name: 'Gaurav Kumar'
            },
            theme: { color: '#53a20e' }
        }
        RazorpayCheckout.open(options).then((data) => {
            // handle success
            setModalVisible(true)
            // Import.Alert.alert(`Success: ${data.razorpay_payment_id}`);
        }).catch((error) => {
            // handle failure
            Import.Alert.alert(`payment failed`);
        });
    }
    return (
        <Import.View style={{ flex: 1, flexDirection: "column", justifyContent: "space-between" }}>
            {cartItems?.length > 0 ?
                <>
                    <Cartcards cartItems={cartItems} handleClearCart={handleClearCart} handleRemove={handleRemove} />
                    <Cartfooter handlepayment={handlepayment} totalprice={totalprice} />
                </>
                : null}

        </Import.View>
    )
}
const mapStateToProps = (state) => ({
    cartItems: state.Cartdatareducer.items,
});

const mapDispatchToProps = {
    removeFromCart,
    clearCart,
};
export default connect(mapStateToProps, mapDispatchToProps)(Cartlayout);