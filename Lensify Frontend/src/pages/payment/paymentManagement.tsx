import React from "react";
import { useLocation } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";
// import { useForm } from "react-hook-form";
// import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
// import gsap from "gsap";
import AdminSidebar from "../adminSidebar.tsx";

import "../../css/paymentManagement.css";

const PaymentManagement = () => {
    const location = useLocation();
    const currentLocation = location.pathname;

    // Fetching data from API
    const { data: paymentData, refetch } = useQuery({
        queryKey: ["GETDATA"],
        queryFn() {
            return axios.get("http://localhost:8080/payment/findAll");
        },
    });

    // Deleting data
    const deleteByIdApi = useMutation({
        mutationKey: ["DELETE_BY_ID"],
        mutationFn(id: number) {
            return axios.delete("http://localhost:8080/payment/delete/" + id);
        },
        onSuccess() {
            refetch();
        },
    });

    return (
        <div className={"paymentManagement-page"}>
            <div className={"paymentManagement-left"}>
                <AdminSidebar activePage={currentLocation} />
            </div>

            <div className={"manageTable-right"}>
                <header className={"paymentManagement-header"}>
                    <h1>Payment Management</h1>
                </header>
                <div className={"paymentManagement-main-content"}>
                    <div className={"paymentManagementMain-content"}>
                        <div className={"paymentManagement-container2"}>
                            <div className={"card-body2"}>
                                <table className={"paymentManagement-bordered2"}>
                                    <thead>
                                        <tr>
                                            <th className={"id-box2"}>ID</th>
                                            <th className={"paymentDate-box2"}>paymentDate</th>
                                            <th className={"userId-box2"}>userId</th>
                                            <th className={"orderItems-box2"}>orderItems</th>
                                            <th className={"subTotal-box2"}>subTotal</th>
                                            <th className={"deliveryFee-box2"}>deliveryFee</th>
                                            <th className={"total-box2"}>total</th>
                                            <th className={"Status-box2"}>Status</th>
                                            <th className={"delete-box2"}>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {paymentData?.data.map((i) => {
                                            return (
                                                <tr key={i?.id}>
                                                    <td>{i?.id}</td>
                                                    <td>{i?.paymentDate}</td>
                                                    <td>{i?.user.id}</td>
                                                    <td>{i?.orderItems}</td>
                                                    <td>{i?.subTotal}</td>
                                                    <td>{i?.deliveryFee}</td>
                                                    <td>{i?.total}</td>
                                                    <td>{i?.status}</td>
                                                    <td>
                                                        <button
                                                            className={"delete-btn2"}
                                                            onClick={() => {
                                                                // Display confirmation prompt before deletion
                                                                if (
                                                                    window.confirm(
                                                                        "Are you sure you want to delete this payment?"
                                                                    )
                                                                ) {
                                                                    deleteByIdApi.mutate(i?.id);
                                                                }
                                                            }}
                                                        >
                                                            <MdDelete />
                                                        </button>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentManagement;
