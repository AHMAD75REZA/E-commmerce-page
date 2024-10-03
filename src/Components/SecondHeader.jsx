import React from "react";
import { IoMdSearch } from "react-icons/io";
import { TbNetwork } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";

function SecondHeader(params) {
    return (
        <header className="header2">
            <div className="container2">
                
                    <span>Flone.</span>
                
                
                    <ul className="mid-nav">
                        <li><a href="#">Home</a>
                            <select name="" id="">
                                <option value="About"></option>
                            </select>
                        </li>
                        <li><a href="#">Shop</a>
                        <select name="" id=""></select>
                        </li>
                        <li><a href="#">Collection</a></li>
                        <li><a href="#">Pages</a>
                        <select name="" id=""></select>
                        </li>
                        <li><a href="#">Blog</a>
                        <select name="" id=""></select>
                        </li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>

        
                <div className="right-nav1">
                        <IoMdSearch className="srch"/>
                        <TbNetwork className="ntrk"/>
                        <FaHeart className="hrt"/>
                </div>
            </div>
        </header>
    )
}

export default SecondHeader;