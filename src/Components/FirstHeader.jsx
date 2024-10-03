import React from "react";

function FirstHeader(params) {
    return (

        <header className="header1">
            <div className="container">
                <div className="left-nav">
                    <select name="Language" id="">
                        <option value="en">English</option>
                        <option value="Hn">Hindi</option>
                        <option value="Ur">Urdu</option>
                    </select>
                    <select name="" id="">
                        <option value="usd">USD</option>
                        <option value="eur">EURO</option>
                        <option value="rio">RIYAL</option>
                    </select>
                    <span>Call Us Now 3955410</span>
                </div>
                <div className="right-nav">
                    <span>Free delivery on order over $200</span>

                </div>

            </div>
        </header>

    )
}

export default FirstHeader;