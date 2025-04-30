import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Experience} from "./layout/sections/experience/Experience";
import {Slider} from "./layout/sections/slider/Slider";
import {Subscribe} from "./layout/sections/subscribe/Subscribe";
import {Footer} from "./layout/footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Experience/>
            <Slider/>
            <Subscribe/>
            <Footer/>
        </div>
    );
}

export default App;