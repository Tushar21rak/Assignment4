import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
import { TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterFollowButton,
    TwitterHashtagButton,
    TwitterMentionButton,
    TwitterTweetEmbed,
    TwitterMomentShare,
    TwitterDMButton,
    TwitterVideoEmbed,
    TwitterOnAirButton }
from 'react-twitter-embed';

class MainPage extends Component {
    render() {
        var url = 'http://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=cd19c00da43b43efbd3086caa73e3d75';
        var req = new Request(url);
        fetch(req)
            .then(function(response) {
                console.log(response.json());
            })
        return (
            <div className="MainBody-style">
                <div className="split left">
                    <div className="centered">

                        <div className="BlogPostItem">
                            <h1>
                                <Link to='/Blog1'>Adventurous KATE</Link>
                            </h1>
                            <p><b> - Maxico  </b>June 27, 2018</p>
                            <img src="https://149391556.v2.pressablecdn.com/wp-content/uploads/2020/04/Two-Weeks-in-Mexico-Yucatan-Road-Trip-Itinerary-1024x768.jpg" alt="Avatar woman" />
                            <img src="https://149391556.v2.pressablecdn.com/wp-content/uploads/2020/03/Valladolid-Street-with-Flags-1024x720.jpg" alt="Avatar woman" />
                            <img src="https://149391556.v2.pressablecdn.com/wp-content/uploads/2020/03/Celestun-Mangroves-1024x683.jpg" alt="Avatar woman" />
                            <img src="https://149391556.v2.pressablecdn.com/wp-content/uploads/2020/03/Hecelchakan-1024x663.jpg" alt="Avatar woman" />


                            <p>Most travelers go to Mexico to lie on the beach for a week, maybe go on an excursion to a ruin or a cenote, and head straight home.

                                And yes. That can be fun. But you can do SO MUCH better than that!!</p>
                            <hr />
                        </div>
                        <div className="BlogPostItem">
                            <h1>
                                <Link to='/Blog2'>Amateur Traveler</Link>
                            </h1>
                            <p><b>  - National park, tennessee, unesco  </b>March 36, 2020</p>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSRebhuHvqYl3UT7b-arTmOF-YKOA8s-daURBKDUuXJtgXzUsAP&usqp=CAU" alt="Avatar woman" />
                            <img src="https://amateurtraveler.com/wp-content/uploads/2020/03/smokey-800.jpg" alt="Avatar woman" />
                            <img src="https://www.greatsmokies.com/wp-content/uploads/2019/03/Morton-Overlook-1.jpg" alt="Avatar woman" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQmAJCPssCpOF9S4_acz7xhzf8hDgbi_2isCpHxPx4W34b5uM6&usqp=CAU" alt="Avatar woman" />

                            <p>Each campground in the national park offers its visitors a unique experience.

                                Some places are better suited for families with children, while others are better suited for those of you who wish to escape the crowd and stay in solitude.</p>
                            <hr />

                        </div>
                        <div className="BlogPostItem">
                            <h1>
                                <Link to='/Blog3'>David's Been Here</Link>
                            </h1>
                            <p><b> - Kochi, India  </b>April 14, 2020</p>
                            <img src="https://s9416.pcdn.co/wp-content/uploads/2020/04/10-things-you-must-do-and-eat-in-kochi-kerala-india-asia-davidsbeenhere16.jpg" alt="Avatar woman" />
                            <img src="https://s9416.pcdn.co/wp-content/uploads/2020/04/10-things-you-must-do-and-eat-in-kochi-kerala-india-asia-davidsbeenhere24.jpg" alt="Avatar woman" />
                            <img src="https://s9416.pcdn.co/wp-content/uploads/2020/04/10-things-you-must-do-and-eat-in-kochi-kerala-india-asia-davidsbeenhere19.jpg" alt="Avatar woman" />
                            <img src="https://s9416.pcdn.co/wp-content/uploads/2020/04/10-things-you-must-do-and-eat-in-kochi-kerala-india-asia-davidsbeenhere18.jpg" alt="Avatar woman" />

                            <p>Kochi was the epicenter of the Indian spice trade since ancient times.

                                It was known by the Chinese, Jews, Greeks, Arabs, and Syrians. Portuguese explorer Pedro Àlvares Cabral founded the first settlement in India at Kochi in 1500. </p>
                            <hr />

                        </div>
                    </div>
                </div>

                <div className="vertical"></div>

                <div className="split right">
                    <div className="centered">
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
                        </div>

                        <TwitterTimelineEmbed
                            sourceType="list"
                            ownerScreenName="palafo"
                            slug="breakingnews"
                            options={{height: 800}}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default MainPage;