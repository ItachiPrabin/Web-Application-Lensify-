import HomeNavbar from "./Navbar&Modals/HomeNavbar.tsx";
import "../css/contactPage.css"
// import { useLocation } from "react-router-dom";

const ContactPage = () => {
    // const location = useLocation(); // Use useLocation to get the current location
    const currentLocation = location.pathname;

    return (
        <>
            <div className={"contact-page-div"}>
                <HomeNavbar activePage={currentLocation} />

                <div className={"get-container"}>
                    <h2>Contact us through!!</h2>
                </div>

                <div className={"contact-main-content"}>
                    <div className={"our-contact"}>
                        <h2>Contact Info</h2>
                        <span className={"email-phone-content"}>
                            <h4>Phone</h4>
                            <h4>9828696552</h4>
                        </span>

                        <span className={"email-phone-content"}>
                            <h4>Email</h4>
                            <h6>lensify7@gmail.com</h6>
                        </span>
                        <span className={"email-phone-content"}>
                            <h4>Location</h4>
                            <h6>Kathmandu, Nepal</h6>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactPage;
