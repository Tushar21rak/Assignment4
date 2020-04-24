import React, { Component } from 'react';
import {Link} from "react-router-dom";


class Blog2 extends Component {
    render() {
        return (
            <div className="BlogPost">
                <div className="MainBody-style">
                    <div className="split left">
                        <div className="Blog-title">
                            <h2>Best Campgrounds in the Smoky Mountains</h2>
                        </div>
                        <div className="Blog-image">
                            <img src="https://www.greatsmokies.com/wp-content/uploads/2019/03/Morton-Overlook-1.jpg" alt="Avatar woman" />
                        </div>
                        <br/>
                        <h5><b>  - -  National park, tennessee, unesco</b></h5>
                        <p> - Date - March 36, 2020.</p>
                        <h6>Each campground in the national park offers its visitors a unique experience.
                            Some places are better suited for families with children,
                            while others are better suited for those of you who wish to escape the crowd and stay in solitude.
                            Some have refreshing saltwater pools on-site, and others are situated next to cooling streams and are short walks to gushing waterfalls.
                            Even though there are many ones to choose from,
                            we’ve curated a list of the best campgrounds in the Great Smoky Mountains to make your trip that much easier to plan.
                        </h6>
                        <br/>
                        <h6>
                            If you’re traveling with children, then you’ll probably want to choose a place that has services like a playground, pool, and basketball court to keep your kids entertained while you’re not on a long hike in the woods.
                            If you plan on bringing your horse, then you’ll want a horse-friendly campground with loads of trails nearby.
                            If you want to travel as a group or travel on your own, there are different places which are better suited for group camping or solitude camping.
                            Each campground will give you the opportunity to fully immerse yourself in nature and live amongst the wildlife, wildflowers, and towering mountains.
                        </h6>
                        <br/>
                        <h6>
                            If you don’t go anywhere without your beloved horses, then you’re in luck.
                            The Big Creek Horse is the best place for horse camping.
                            It’s also the only horse camp in the Great Smoky Mountains with flushing toilets and potable water.
                            It’s flanked by the calm waters of Big Creek and towering mountains.
                        </h6>

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
                                <h3>Amateur Traveler Shop</h3>
                                <hr/>
                                <img src="https://amateurtraveler.com/wp-content/uploads/2020/02/store.jpg?v2" alt="Avatar woman" />
                                <p>When I started Amateur Traveler I was working full-time as an EVP of Engineering and Operations for a Silicon Valley company that ran online communities. I still make a living in part from doing technical work but now only part-time.
                                </p>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Blog2;