import HeaderMain from './atoms/headerMain';
import HeaderTop from './atoms/headerTop';
import '../static/css/Header.scss';

const Header = () => {
    return (
        <div className="Header">
            <HeaderTop />
            <HeaderMain />
        </div>
    );
};
export default Header;
