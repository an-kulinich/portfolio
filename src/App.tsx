import './App.css';
import {Container} from "./components/Container";
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Experience} from "./layout/sections/experience/Experience";
import {Slider} from "./layout/sections/slider/Slider";
import {Subscribe} from "./layout/sections/subscribe/Subscribe";


function App() {
    return (
        <div className="App">
            <Container>
                <Header/>
                <Main/>
                <Skills/>
                <Experience/>
                <Slider/>
                <Subscribe/>
            </Container>
        </div>
    );
}

export default App;