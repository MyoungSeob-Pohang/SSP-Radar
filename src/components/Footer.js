import FooterMain from './atoms/FooterMain';
import FooterSub from './atoms/FooterSub';
import '../static/css/Footer.scss';

const Footer = () => {
    return (
        <footer className="Footer">
            <FooterMain />
            <FooterSub />
        </footer>
    );
};

export default Footer;
