import Header from './components/Header';
import VideoArea from './components/VideoArea';
import Subtitle from './components/SubTitle';
import IndustrialSafety from './components/IndustrialSafety';
import './static/css/App.scss';

function App() {
    return (
        <div className="App">
            <Header />
            <VideoArea />
            <Subtitle />
            <IndustrialSafety />
        </div>
    );
}

export default App;
