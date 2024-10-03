import React from 'react';
import { FaTruck } from "react-icons/fa";
import { TbClock24 } from "react-icons/tb";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa6";

import Timage from '../assets/images/T-shirt.png'
import Bimage from '../assets/images/Blog.png';
function Features() {
    return (
        <section className="features">
            <div className="container4">
                <div className='truck'>
                    <FaTruck className='trk' />
                    <div className='truck-content'>
                        <h3>Free shipping</h3>
                        <p>this is for shipping truck <br /> Now it is ready for deliver </p>
                    </div>

                </div>
                <div className='clock'>
                    <TbClock24 className='clk' />
                    <div className='clock-content'>

                        <h3>Support 24/7</h3>
                        <p>this is for support 24/7 <br /> Now it is available  </p>
                    </div>

                </div>
                <div className='dollar'>
                    <AiFillDollarCircle className='dlr' />
                    <div className='dollar-content'>

                        <h3>Money Return</h3>
                        <p>this is for support 24/7 <br /> Now it is affordable </p>
                    </div>

                </div>
            </div>

            <div className='NewArrival'>
                <div className='New Arrival-content'>

                    <h1 className='NewArr'>New Arrival <br />______</h1>
                    <p>This is new arrival part</p>

                </div>

                <div className='New-Arrival-Product'>
                    <div className='p1'>
                        <img src={Timage} alt="Hero Banner" />
                        <div className='p1-content'>

                            <p4>T-shirt & Jeans <br />
                                price: '$19.99',</p4>
                            <FaRegHeart className='hert' />


                        </div>


                    </div>
                    <div className='p1'>
                        <img src={Timage} alt="Hero Banner" />
                        <div className='p1-content'>

                            <p4>T-shirt & Jeans <br />
                                price: '$19.99',</p4>
                            <FaRegHeart />

                        </div>

                    </div>
                    <div className='p1'>
                        <img src={Timage} alt="Hero Banner" />
                        <div className='p1-content'>

                            <p4>T-shirt & Jeans <br />
                                price: '$19.99',</p4>
                            <FaRegHeart/>

                        </div>

                    </div>
                    <div className='p1'>
                        <img src={Timage} alt="Hero Banner" />
                        <div className='p1-content'>

                            <p4>T-shirt & Jeans <br />
                                price: '$19.99',</p4>
                            <FaRegHeart/>

                        </div>

                    </div>
                    <div className='p1'>
                        <img src={Timage} alt="Hero Banner" />
                        <div className='p1-content'>

                            <p4>T-shirt & Jeans <br />
                                price: '$19.99',</p4>
                            <FaRegHeart />

                        </div>

                    </div>
                    <div className='p1'>

                        <img src={Timage} alt="Hero Banner" />
                        <div className='p1-content'>

                            <p4>T-shirt & Jeans <br />
                                price: '$19.99',</p4>
                            <FaRegHeart />

                        </div>
                    </div>
                    <div className='p1'>

                        <img src={Timage} alt="Hero Banner" />
                        <div className='p1-content'>

                            <p4>T-shirt & Jeans <br />
                                price: '$19.99',</p4>
                            <FaRegHeart />

                        </div>
                    </div>
                    <div className='p1'>

                        <img src={Timage} alt="Hero Banner" />
                        <div className='p1-content'>

                            <p4>T-shirt & Jeans <br />
                                price: '$19.99',</p4>
                            <FaRegHeart />

                        </div>
                    </div>
                    <div className='p1'>

                        <img src={Timage} alt="Hero Banner" />
                        <div className='p1-content'>

                            <p4>T-shirt & Jeans <br />
                                price: '$19.99',</p4>
                            <FaRegHeart />

                        </div>
                    </div>
                    <div className='p1'>

                        <img src={Timage} alt="Hero Banner" />
                        <div className='p1-content'>

                            <p4>T-shirt & Jeans <br />
                                price: '$19.99',</p4>
                            <FaRegHeart />

                        </div>
                    </div>

                </div>
            </div>

            <div className='Blog'>

                <h2 className='blg'>____ OUR BLOG ____</h2>

                <div className='Blog-product'>
                    <div className='BP1'>
                        <img src={Bimage} alt="Hero Banner" />
                        <div className='BP1-content'>
                            <h3> Lorem, ipsum dolor sit <br /> amet cons </h3>
                            <p>By shop Admin</p>
                        </div>
                    </div>
                    <div className='BP1'>
                    <img src={Bimage} alt="Hero Banner" />
                        <div className='BP1-content'>
                            <h3> Lorem, ipsum dolor sit <br /> amet cons </h3>
                            <p>By shop Admin</p>
                        </div>
                    </div>
                    <div className='BP1'>
                    <img src={Bimage} alt="Hero Banner" />
                        <div className='BP1-content'>
                            <h3> Lorem, ipsum dolor sit <br /> amet cons </h3>
                            <p>By shop Admin</p>
                        </div>
                    </div>
                    <div className='BP1'>
                    <img src={Bimage} alt="Hero Banner" />
                        <div className='BP1-content'>
                            <h3> Lorem, ipsum dolor sit <br /> amet cons </h3>
                            <p>By shop Admin</p>
                        </div>
                    </div>
                    <div className='BP1'>
                    <img src={Bimage} alt="Hero Banner" />
                        <div className='BP1-content'>
                            <h3> Lorem, ipsum dolor sit <br /> amet cons </h3>
                            <p>By shop Admin</p>
                        </div>
                    </div>
                    <div className='BP1'>
                    <img src={Bimage} alt="Hero Banner" />
                        <div className='BP1-content'>
                            <h3> Lorem, ipsum dolor sit <br /> amet cons </h3>
                            <p>By shop Admin</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;