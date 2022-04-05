import Header from './components/Header';
import VideoArea from './components/VideoArea';
import Subtitle from './components/SubTitle';
import IndustrialSafety from './components/IndustrialSafety';
import Jumbotron from './components/Jumbotron';
import './static/css/App.scss';

function App() {
    return (
        <div className="App">
            <Header />
            <VideoArea />
            <Subtitle />
            <IndustrialSafety />
            <Jumbotron />
        </div>
    );
}

export default App;
