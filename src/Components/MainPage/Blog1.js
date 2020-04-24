import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Blog1 extends Component {
    render() {
        return (
            <div className="BlogPost">
                <div className="MainBody-style">
                    <div className="split left">

                        <h2>Two Weeks in Mexico: The BEST Yucatán Road Trip Itinerary</h2>
                        <div className="Blog-image">
                            <img src="https://149391556.v2.pressablecdn.com/wp-content/uploads/2020/04/Two-Weeks-in-Mexico-Yucatan-Road-Trip-Itinerary-1024x768.jpg" alt="Avatar woman" />
                        </div>
                        <h5><b>  - - Blog, Maxico</b></h5>
                        <p> - Date - June 27, 2018.</p>
                        <h6>After spending two months living in Mérida and years of trips traveling through the Yucatán Peninsula, I’ve finally put together the best itinerary for two weeks in Mexico.</h6>
                        <br/>
                        <h6>
                            Most travelers go to Mexico to lie on the beach for a week, maybe go on an excursion to a ruin or a cenote, and head straight home.
                        </h6>

                        <h6>
                            And yes. That can be fun. But you can do<b> SO MUCH better </b>than that!!
                        </h6>
                        <br/>
                        <h6>
                            Mexico is one of my favorite countries. It’s absolutely brimming with culture and music and fantastic food and the nicest, kindest people. It’s diverse in experiences and it’s so much more than what most people think it is.
                        </h6>
                        <br/>
                        <h6><b>Yes. It’s worth it.</b> Because the Yucatán is SO much more than just beaches and ruins. Plus, when you do it on your own — on a road trip or even by public transportation — it’s so much more satisfying than staying in a resort and traveling on tours.

                            Even if you’ve already been to a resort in the Cancún-Playa del Carmen-Tulum area, I encourage you to give road-tripping around the Yucatán Peninsula a chance. This is a fantastic part of Mexico.</h6>
                    </div>
                    <div className="vertical"></div>
                    <div className="split right">
                        <div className="centered-right">
                            <div className="Blog-title">
                                <h3> <Link to = "./">Home.</Link></h3>
                                <ul>
                                    <li>
                                        <Link to="/Blog1">Meet Kate</Link>
                                    </li>
                                    <li>
                                        <Link to="/Blog2">Paul Blair</Link>
                                    </li>
                                    <li>
                                        <Link to="/Blog3">David Haffmann</Link>
                                    </li>
                                </ul>
                                <br/>
                                <hr/>
                                <h3>Adventurous KATE</h3>
                                <hr/>
                                <img src="https://149391556.v2.pressablecdn.com/wp-content/uploads/2019/11/kate.jpg" alt="Avatar woman" />
                                <p>At age 26, I quit my job to travel the world alone. I spent six fantastic months in Southeast Asia and turned my travel blog into a full-time business. Nine years later, I'm still traveling -- 83 countries and 7 continents! My goal is to show YOU how you can travel the world on your own -- easily, safely, and adventurously.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Blog1;