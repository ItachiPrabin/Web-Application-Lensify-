import React, { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import HomeNavbar from "../Navbar&Modals/HomeNavbar.tsx";

const Cart = () => {
    const location = useLocation();
    const currentLocation = location.pathname;
    const { parss } = useParams();
    let price = "0";
    let custom_id = "0";

    const { data: cartData, refetch } = useQuery({
        queryKey: ["GET_CART_DATA"],
        queryFn() {
            return axios.get("http://localhost:8080/cart/getAll");
        },
    });

    const [cartItems, setCartItems] = useState(cartData?.data || []);

    const updateQuantity = (itemId, newQuantity) => {
        const updatedCartItems = cartItems.map((item) =>
            item.id === itemId ? { ...item, quantity: newQuantity } : item
        );

        axios.put(`http://localhost:8080/cart/updateQuantity`, {
            id: itemId,
            quantity: newQuantity,
        }).then(res => {
            refetch();
        });

        setCartItems(updatedCartItems);
    };

    const deleteByIdApi = useMutation(
        {
            mutationKey: ["DELETE_CART_BY_ID"],
            mutationFn(id: number) {
                return axios.delete("http://localhost:8080/cart/deleteById/" + id);
            },
            onSuccess() { refetch() }
        }
    );

    let cartTotal = cartData?.data.reduce(
        (total, item) => total + item.total_price * item.quantity,
        0
    );
    if (parss) {
        const id_priceArray = parss.split('+');
        custom_id = id_priceArray[0];
        price = id_priceArray[1];
        cartTotal = cartTotal + +price;
    }

    return (
        <div className="container">
            <HomeNavbar activePage={currentLocation} />
            <div className="py-4">
                <h1 className="mb-4">Cart Page</h1>
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartData?.data.map((item) => (
                                <tr key={item?.id}>
                                    <td>{item?.item?.itemName}</td>
                                    <td>Rs.{item.total_price}</td>
                                    <td>
                                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                        <input type="text" value={item.quantity} readOnly />
                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                    </td>
                                    <td>Rs.{item.total_price * item.quantity}</td>
                                    <td>
                                        <button onClick={() => deleteByIdApi.mutate(item.id)} className="btn btn-danger">Remove</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <hr />
                <hr />
                <div className="row justify-content-center"> {/* Center the checkout container */}
                    <div className="checkout-container">
                        <div className="cart-total">
                            <h3>Cart Total: Rs. {cartTotal}</h3>
                            <Link to={`/payment/${cartTotal}`}>
                                <button className="btn btn-primary">CHECKOUT</button>
                            </Link>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Cart;
