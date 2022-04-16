import React from "react";
//import icon from "./bin/RimuruTempest.png"

function Square() {
    return (
        <div class="container">
            <div class='square'></div>
        </div>
    )
}

function HomePage() {
    return (
        <form>
            <h1>Projects</h1>
            <p>Welcome to my Projects!</p>
            <Square />
        </form>
    )
}

export default HomePage;