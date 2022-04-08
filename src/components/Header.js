import HeaderMain from './atoms/headerMain';
import HeaderTop from './atoms/headerTop';
import '../static/css/Header.scss';
import { Controller, Scene } from 'react-scrollmagic';

const Header = () => {
    return (
        <Controller>
            <Scene duration={0} pin=".Header" enabled={true} offset={484.5} triggerElement=".Header">
                <header className="Header">
                    <HeaderTop />
                    <HeaderMain />
                </header>
            </Scene>
        </Controller>
    );
};
export default Header;
