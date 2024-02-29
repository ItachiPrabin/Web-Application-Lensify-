import "../css/AdminDashboard.css"
import { FaUserCog } from "react-icons/fa";
import AdminSidebar from "./adminSidebar.tsx";
import { Link, useLocation } from "react-router-dom";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaBowlFood } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

function AdminDashboard() {

    const location = useLocation(); // Use useLocation to get the current location
    const currentLocation = location.pathname;

    // Fetching categories from API
    const { data: categoryData } = useQuery({
        queryKey: ["GETCATEGORY"],
        queryFn() {
            return axios.get("http://localhost:8080/category/findAll")
        }
    })

    // Fetching Items from API
    const { data: itemData } = useQuery({
        queryKey: ["GETITEM"],
        queryFn() {
            return axios.get("http://localhost:8080/item/findAll")
        }
    })

    // Fetching data from API
    const { data: userData } = useQuery({
        queryKey: ["GETCUSTOMERDATA"],
        queryFn() {
            return axios.get("http://localhost:8080/register/getAll")
        }
    })

    //Display user details
    const [user, setUser] = useState({

    })
    useEffect(() => {
        const data: any = JSON.parse(localStorage.getItem("userDetails"));
        setUser(data);
    }, [localStorage.getItem("userDetails")]);

    return (
        <>
            <div className={"admin-dashboard-page"}>
                <div className={"dashboard-left"} >
                    <AdminSidebar activePage={currentLocation} />
                </div>

                <div className={"dashboard-right"}>
                    <header className={"dashboard-header"}>
                        <h1>Dashboard</h1>
                        <div className={"user-wrapper"}>
                            {/* Check that the path to the image is correct */}
                            <img src={"src/images/Itachi Uchiha.jpg"} width={"100px"} height={"100px"} alt={"A"} />
                            <div>
                                <h4>Admin</h4>
                                <small>{ }</small>
                            </div>
                        </div>
                    </header>

                    <div className={"dashboard-main-content"}>
                        <div className={"d-main-content"}>
                            <div className={"dashboard-cards-container"}>
                                <Link to={"/CustomerPage"}>
                                    <div className={"dashboard-cards"}>
                                        <div className={"d-card=left"}>
                                            <h2>Customers</h2>
                                            <h3>{userData?.data.length}</h3>
                                        </div>
                                        <span><FaUserCog style={{ fontSize: "4vw", marginBottom: "-3px" }} /></span>
                                    </div>
                                </Link>
                                <Link to={"/ManageCategory"}>
                                    <div className={"dashboard-cards"}>
                                        <div className={"d-card=left"}>
                                            <h2>Categories</h2>
                                            <h3>{categoryData?.data.length}</h3>
                                        </div>
                                        <span><BiSolidCategoryAlt style={{ fontSize: "4vw", marginBottom: "-3px" }} /></span>
                                    </div>
                                </Link>
                                <Link to={"/ManageItem"}>
                                    <div className={"dashboard-cards"}>
                                        <div className={"d-card=left"}>
                                            <h2>Items</h2>
                                            <h3>{itemData?.data.length}</h3>
                                        </div>
                                        <span><FaBowlFood style={{ fontSize: "3.8vw", marginBottom: "-3px" }} /></span>
                                    </div>
                                </Link>
                                <Link to={"/"}>
                                    <div className={"dashboard-cards"}>
                                        <div className={"d-card=left"}>

                                            <h2 style={{ marginTop: "-0.6rem" }}>Home Page</h2>
                                        </div>
                                        <span><GoHomeFill style={{ fontSize: "3.8vw", marginBottom: "-3px" }} /></span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>

    )
}

export default AdminDashboard

