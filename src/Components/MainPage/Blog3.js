import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Blog3 extends Component {
    render() {
        return (
            <div className="BlogPost">
                <div className="MainBody-style">
                    <div className="split left">
                        <h2>10 Things You Must Do and Eat in Kochi, Kerala, India</h2>
                        <div className="Blog-image">
                            <img src="https://s9416.pcdn.co/wp-content/uploads/2020/04/10-things-you-must-do-and-eat-in-kochi-kerala-india-asia-davidsbeenhere16.jpg" alt="Avatar woman" />
                        </div>
                        <h5><b> - - Kochi, India</b></h5>
                        <p> Date - April 14, 2020.</p>
                        <h6>
                            Kochi was the epicenter of the Indian spice trade since ancient times.
                            It was known by the Chinese, Jews, Greeks, Arabs, and Syrians.
                            Portuguese explorer Pedro Àlvares Cabral founded the first settlement in India at Kochi in 1500.
                            By 1503, Fort Kochi had become the first European colony in the country.
                            It remained in Portuguese possession until 1663 when it was overtaken by the Dutch,
                            who then lost it to the British in 1795. Now known as Kochi’s Old Town,
                            Fort Kochi boasts a unique mix of colonial homes and churches.
                            They’re built in the Portuguese, Dutch, and British architectural styles,
                            including the landmark St. Francis Church.
                        </h6>
                            <br/>
                        <h6>
                            Fort Kochi lies just southwest of the more modern city of Kochi.
                            The bustling metropolis strongly reminded me of Mumbai as I rode through the city upon my arrival.
                            Its elevated metro line snakes its way around the entire city, which brought back memories of the transportation system in India’s largest city.
                            Kochi was even named the sixth-best tourist destination in India by the Nielsen Company and Outlook Traveller Magazine.
                            Lonely Planet also ranked it seventh on their list of the top ten cities to visit in the world in 2020.
                        </h6>
                        <br/>
                        <h6>
                            After spending a whirlwind 24 hours in Kochi in January 2020, I must say, the city deserves those accolades.
                            With a unique vibe that was like a cross between Mumbai and Caribbean islands I’d visited in the past, Kochi is an enigma waiting to be unraveled.
                            It boasts some of the nicest people I’ve ever come across while traveling, as well as some of the tastiest food I’ve had anywhere in India.
                            These are the 10 things you must do and eat in Kochi, Kerala, India.
                        </h6>
                    </div>
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
                            <h3>David's Been HERE!</h3>
                            <hr/>
                            <img src="https://images-eu.ssl-images-amazon.com/images/I/81S31A37iRL.png" alt="Avatar woman" />
                            <p>I am obsessed with travel: Meeting new people, seeing extraordinary new places and experiencing new cultures. And I want the same for you!

                                My name is David Hoffmann. I am a travel host, producer and social media influencer. I started Davidsbeenhere.com because I believe that so much of what we are is influenced by where we’ve been in the world.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Blog3;