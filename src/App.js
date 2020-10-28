import React from "react";
import "./App.css";
import "./components/JokeTemplate";
import JokeTemplate from "./components/JokeTemplate";
import JokeHeader from "./components/JokeHeader";
import JokeBody from "./components/JokeBody";
import JokeFooter from "./components/JokeFooter";

function App() {
    return (
        <JokeTemplate>
            <JokeHeader />
            <JokeBody />
            <JokeFooter />
        </JokeTemplate>
    );
}

export default App;
