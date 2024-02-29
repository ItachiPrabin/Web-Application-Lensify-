import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "../css/homePage.css";
import HomeNavbar from "./Navbar&Modals/HomeNavbar.tsx";
import HomePageSearch from "./homePageSearch.tsx";
// import ImageSlider from "./imgSliderBar/imageSlider1.tsx";

const HomePage = () => {

    const [search, setSearch] = useState(null);

    const location = useLocation(); // Use useLocation to get the current location
    const currentLocation = location.pathname;

    // Fetching data from API
    const { data: menuData } = useQuery({
        queryKey: ["GET_ITEMMENU_DATA"],
        queryFn() {
            return axios.get("http://localhost:8080/item/findAll");
        }
    });

    // Searching data
    const filteredItemData = menuData?.data.filter((item) =>
        item?.itemName?.toLowerCase().includes(search?.toLowerCase())
    );

    return (
        <>
            <div className={"home-page"}>
                <div className={"hp-first-div"}>
                    <HomeNavbar activePage={currentLocation} />
                    <div className={"hp-main-container"}>
                        <div className={"feast-slogan"}>
                            <h3>Best fit for your style.</h3>
                        </div>
                        <div className={"hp-search-wrapper"}>
                            <input type={"search"} placeholder={"Search your fav product."} onChange={(e) => setSearch(e.target.value)} />
                            <span><FaSearch /></span>
                        </div>
                    </div>
                </div>

                <div className={"hp-second-div"}>
                    {search && <div className={"line2"}></div> && <div className={"home-search-div"}>
                        <HomePageSearch filteredItemData={filteredItemData} />
                    </div>}
                    <div className={"view-more-btn"}>
                        <Link to={"/ourBrand"}><button>View More</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
<footer className="bg-gray-800 text-white py-0.2 mt-auto">
    <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
                <h3 className="text-lg font-bold mb-2">Company</h3>
                <ul>
                    <li><Link to="/about" className="hover:text-gray-300">About Us</Link></li>
                    <li><Link to="/contact" className="hover:text-gray-300">Contact Us</Link></li>
                    <li><Link to="/faq" className="hover:text-gray-300">FAQs</Link></li>
                    <li><Link to="/terms" className="hover:text-gray-300">Terms and Conditions</Link></li>
                    <li><Link to="/privacy" className="hover:text-gray-300">Privacy Policy</Link></li>
                </ul>
            </div>
            <div>
                <h3 className="text-lg font-bold mb-2">Customer Support</h3>
                <ul>
                    <li><Link to="/support" className="hover:text-gray-300">Customer Support</Link></li>
                </ul>
            </div>
        </div>
    </div>
</footer>

export default HomePage