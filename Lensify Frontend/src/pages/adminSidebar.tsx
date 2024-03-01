import "../css/adminSidebar.css"
import { MdSpaceDashboard, MdTableRestaurant } from "react-icons/md";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { TiHome } from "react-icons/ti";
import { IoMdLogOut } from "react-icons/io";
import { FaBowlFood } from "react-icons/fa6";
import { Link } from "react-router-dom"
import React from "react";
import { TbBrandBooking } from "react-icons/tb";
import { FaUserCog } from "react-icons/fa";
import { IoNewspaper } from "react-icons/io5";
import { CiMoneyBill } from "react-icons/ci";


interface AdminSidebarProps {
    activePage: string;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ activePage }) => {
    const handleLogout = () => {

    };

    return (
        <>
            <div className={"admin-sidebar"}>
                <div className={"sidebar-brand"}>
                    <h1> <span><TiHome style={{ fontSize: "2.1rem", marginBottom: "-4px", color: "black" }} /></span>Lensify</h1>
                </div>

                <div className={"sidebar-options"}>
                    <ul className={"sidebar-list"}>
                        <Link to={"/AdminDashboard"}>
                            <li className={`sidebar-list-item ${activePage === "/AdminDashboard" ? "active" : ""}`}>
                                <span><MdSpaceDashboard style={{ fontSize: "18px", marginBottom: "-3px" }} /></span>
                                <a>Dashboard</a>
                            </li>
                        </Link>
                        <Link to={"/CustomerPage"}>
                            <li className={`sidebar-list-item ${activePage === "/CustomerPage" ? "active" : ""}`}>
                                <span><FaUserCog style={{ fontSize: "18px", marginBottom: "-3px" }} /></span>
                                <a>Customers</a>
                            </li>
                        </Link>

                        <Link to={"/OrderPage"}>
                            <li className={`sidebar-list-item ${activePage === "/OrderPage" ? "active" : ""}`}>
                                <span><IoNewspaper style={{ fontSize: "18px", marginBottom: "-3px" }} /></span>
                                <a>Orders</a>
                            </li>
                        </Link>

                        {/*<Link to={"/booking"}>*/}
                        {/*    <li className={`sidebar-list-item ${activePage === "/booking" ? "active" : ""}`}>*/}
                        {/*        <span><TbBrandBooking style={{fontSize:"20px",marginBottom:"-3px"}}/></span>*/}
                        {/*        <a>Booking</a>*/}
                        {/*    </li>*/}
                        {/*</Link>*/}



                        <Link to={"/ManageCategory"}>
                            <li className={`sidebar-list-item ${activePage === "/ManageCategory" ? "active" : ""}`}>
                                <span><BiSolidCategoryAlt style={{ fontSize: "18px", marginBottom: "-3px" }} /></span>
                                <a>Manage Category</a>
                            </li>
                        </Link>

                        <Link to={"/ManageItem"}>
                            <li className={`sidebar-list-item ${activePage === "/ManageItem" ? "active" : ""}`}>
                                <span><FaBowlFood style={{ fontSize: "18px", marginBottom: "-3px" }} /></span>
                                <a>Manage items</a>
                            </li>
                        </Link>

                        <Link to={"/paymentManagement"}>
                            <li className={`sidebar-list-item ${activePage === "/paymentManagement" ? "active" : ""}`}>
                                <span><CiMoneyBill style={{ fontSize: "20px", marginBottom: "-3px" }} /></span>
                                <a>PaymentManagement</a>
                            </li>
                        </Link>

                    </ul>
                </div>



                <div className={"sidebar-btn"}>
                    <Link to={"/"} onClick={handleLogout}>

                        <button type={"button"}>
                            <span><IoMdLogOut style={{ fontSize: "1.3rem", marginBottom: "-3px", marginRight: "3px" }} /></span>Log Out
                        </button>

                    </Link>
                </div>
            </div>
        </>
    )
}

export default AdminSidebar