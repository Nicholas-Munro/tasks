import React from "react";
import "./App.css";
import babkaImg from "./Images/iphone 001.jpg";
import { Button, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <Container>
                <Row>
                    <header className="App-header">
                        UM COS420 with React Hooks and TypeScript
                    </header>
                    <p>
                        Edit <code>src/App.tsx</code> and save. This page will
                        automatically reload. Nicholas Munro, Hello World
                    </p>
                    <h1>Hello World</h1>
                    <h2>Im Nick, I use to bake</h2>
                    <p>How are you doing today?</p>
                    <h1>Two Versions of Babka</h1>
                    <img src={babkaImg} alt="A picture of babka" />
                    <p> </p>
                    Baking Instructions:
                    <ol>
                        <li>Make the dough</li>
                        <li>Make Ganache/jam</li>
                        <li>Crumble cookies for chocolate version</li>
                        <li>Assemble and bake</li>
                    </ol>
                    <Button
                        style={{ backgroundColor: "red" }}
                        onClick={() => {
                            console.log("Hello World!");
                        }}
                    >
                        Log Hello World
                    </Button>
                </Row>
            </Container>
        </div>
    );
}

export default App;
