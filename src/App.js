import Header from './components/Header';
import VideoArea from './components/VideoArea';
import Subtitle from './components/SubTitle';
import IndustrialSafety from './components/IndustrialSafety';
import Jumbotron from './components/Jumbotron';
import AnimationList from './components/AnimationList';
import RadarInfo from './components/RadarInfo';
import Immune from './components/Immune';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import './static/css/App.scss';

function App() {
    return (
        <div className="App">
            <Header />
            <VideoArea />
            <Subtitle />
            <IndustrialSafety />
            <Jumbotron />
            <AnimationList />
            <RadarInfo />
            <Immune />
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;
