import HeaderMain from './atoms/headerMain';
import HeaderTop from './atoms/headerTop';
import '../static/css/Header.scss';

const Header = () => {
    return (
        <header className="Header">
            <HeaderTop />
            <HeaderMain />
        </header>
    );
};
export default Header;
