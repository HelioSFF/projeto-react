import footerGif from '../../assets/footer-gif.gif'
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <img src={footerGif} alt="Footer Gif" className="footer-gif" />
                <p>&copy; 2023 Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;