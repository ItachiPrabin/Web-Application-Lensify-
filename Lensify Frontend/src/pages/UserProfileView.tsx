import React, { useEffect, useState } from 'react';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { FaRegWindowClose } from 'react-icons/fa';
import "../css/UserProfileView.css";

function UserProfileView() {
    const [user, setUser] = useState({});
    const [showProfile, setShowProfile] = useState(true);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("userDetails"));
        setUser(data);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('userDetails');
        setUser(null);
    };

    const handleClose = () => {
        setShowProfile(false);
    };

    const handleShowProfile = () => {
        setShowProfile(true);
    };

    return (
        <div className={"user_profile_main"}>
            {showProfile && (
                <>
                    <div className={"cross-icon"}>
                        <button onClick={handleClose}>
                            <span>
                                <FaRegWindowClose />
                            </span>
                        </button>
                    </div>
                    <div className={"my_profile"}>
                        <h1>My Profile</h1>
                        <form className={"user_profile_form"}>
                            <div className={"user_icon"}>
                                <span>
                                    <IoPersonCircleOutline size={100} />
                                </span>
                            </div>
                            <div className={"name"}>
                                <p className={"name-box"}>Name: {user.fullName}</p>
                                <p className={"email-box"}>Email: {user.email}</p>
                            </div>
                            <div className={"order-history"}>
                                <button className={"order-history-btn"}>Order History</button>
                                <button className={"logout-btn"} onClick={handleLogout}>Sign out</button>
                            </div>
                        </form>
                    </div>
                </>
            )}
            {/* {!showProfile && (
                <button className={"show-profile-button"} onClick={handleShowProfile}>Show Profile</button>
            )} */}
        </div>
    );
}

export default UserProfileView;
