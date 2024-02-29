import { useState, useEffect } from "react";
import "../css/ourBrand.css";
import MenuCard from "./menuPage/brandCard.tsx";
import Navbar from "./menuPage/menuNavbar.tsx";
import HomeNavbar from "./Navbar&Modals/HomeNavbar.tsx";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Menu {
    category: {
        name: string;
    };
}

const OurBrand: React.FC = () => {
    const location = useLocation();
    const currentLocation = location.pathname;

    const { data: Menu2 } = useQuery({
        queryKey: ["GET_ITEM_DATA"],
        queryFn() {
            return axios.get<Menu[]>("http://localhost:8080/item/findAll");
        },
    });

    const [MenuData, setMenuData] = useState<Menu[]>([]);
    const [MenuList, setMenuList] = useState<string[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>("All");

    useEffect(() => {
        if (Menu2?.data) {
            setMenuData(Menu2.data);

            const uniqueCategories = [
                ...new Set(
                    Menu2.data.map((curElem) => curElem?.category?.name || "Uncategorized")
                ),
                "All",
            ];
            setMenuList(uniqueCategories);
        }
    }, [Menu2?.data]);

    const filterItem = (category: string) => {
        setSelectedCategory(category);
        if (category === "All") {
            setMenuData(Menu2?.data || []);
            return;
        }

        const updatedList = Menu2?.data?.filter((curElem) => {
            return curElem?.category?.name === category;
        }) || [];

        setMenuData(updatedList);
    };

    return (
        <>
            <div className={"Menu-page-div"}>
                <HomeNavbar activePage={currentLocation} />
                <div className="menu-navbar">
                    {MenuList.map((category, index) => (
                        <button
                            key={index}
                            onClick={() => filterItem(category)}
                            className={category === selectedCategory ? "menu-btn-group__item menu-btn-group__item--active" : "menu-btn-group__item"}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <div className={"check-out-container"}>
                    <h3>Choose to make your face stylish!!</h3>
                </div>

                <div className={"Menu-contents"}>
                    <Navbar filterItem={filterItem} menuList={MenuList} />
                    <div className="menu-divider"></div> {/* Add a divider */}
                    <MenuCard menuData={MenuData} />
                </div>
            </div>
        </>
    );
};

export default OurBrand;
