import React from "react";

function Footer() {
    const currYear = new Date().getFullYear();
    return <footer>
        <p>copyrigth ❤ {currYear}</p>
    </footer>
}

export default Footer;