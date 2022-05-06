import FooterCities from "./FooterCities";
import FooterCuisines from "./FooterCuisines";
import FooterGetApp from "./FooterGetApp";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-title">Find restaurants near you</div>
            <div className="footer-content">
                <FooterCities />
                <FooterCuisines />
            </div>
            <FooterGetApp />
            <div className="copyright-text">
                &#169; 2022 Kushagra Agarwal
            </div>
        </footer>
    )
}

export default Footer;