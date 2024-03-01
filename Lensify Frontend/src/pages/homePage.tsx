import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/homePage.css";
import HomeNavbar from "./Navbar&Modals/HomeNavbar.tsx";
import { FaSearch } from "react-icons/fa";
import HomePageSearch from "./homePageSearch.tsx";

const HomePage = () => {

    const location = useLocation();
    const currentLocation = location.pathname;

    const imageUrls = [
        "/src/images/cat-eye.webp",
        "/src/images/moscot2.jpeg",
        "/src/images/rayban.jpeg",
        "/src/images/NewArrivals.jpeg",
    ];
    // Assuming `search` and `menuData` are defined somewhere else
    const search = ""; // Define search variable
    const menuData = { data: [] }; // Define menuData variable

    const filteredItemData = menuData?.data.filter((item) =>
        item?.itemName?.toLowerCase().includes(search?.toLowerCase())
    );

    const [currentImageIndex, setCurrentImageIndex] = useState(0);


    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
        }, 5000); // Change images every 5 seconds

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={"home-page"}>
            <div className={"hp-first-div"}>
                <HomeNavbar activePage={currentLocation} />
                <div className={"hp-main-container"}>
                    <div className={"feast-slogan"}>
                        <h3>Best fit for your style.</h3>
                    </div>
                    <div className={"hp-second-div"}>
                        {/* Correcting the condition */}
                        {search && filteredItemData && (
                            <div className={"line2"}></div> && (
                                <div className={"home-search-div"}>
                                    {/* Assuming HomePageSearch component is defined */}
                                    {/* <HomePageSearch filteredItemData={filteredItemData} /> */}
                                </div>
                            )
                        )}

                        <h2 className={"recommended-text"}></h2>
                    </div>
                </div>

                <div className={"image-container"}>
                    <div className={"image-column"}>
                        <img
                            src={imageUrls[currentImageIndex]}
                            alt={`Image ${currentImageIndex}`}
                            className={"centered-image"}
                        />
                    </div>
                </div>

                <div className={"hp-second-div"}>
                    <div className={"view-more-btn"}>
                        <Link to={"/ourBrand"}>
                            <button>View More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
