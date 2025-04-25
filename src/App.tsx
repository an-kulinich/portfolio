import './App.css';
import {Container} from "./components/Container";
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Experience} from "./layout/sections/experience/Experience";


function App() {
    return (
        <div className="App">
            <Container>
                <Header/>
                <Main/>
                <Skills/>
                <Experience/>
            </Container>
        </div>
    );
}

export default App;