export default function Body() {
    return (
        <body>
            <div className="intro">
                    <p className="intro-paragraph">Cognisense is an AI powered law platform that specializes in the quick, efficient, and accurate completion
                      of simple divorces. We guide you through each step of the process, so you don't have to feel overwhelmed by the 
                      paperwork. With the support of AI, you will feel your questions and concerns will be heard and answered. Best of all,
                      you will not have to pay exuberant fees to complete your simple divorce.
                    </p>
                     {/* btn */}
                     <div className="btn-1">
                    <a href="#plan-container">Find out more</a>
                    </div>
                    <div className="plan-container" id="plan-container">
                        <div class="pricing">
                            {/* card  - 1 */}
                            <div className="card card-free">
                                <h2>Free</h2>
                                <p className="price"><sup>$</sup>0</p>
                                <p class="pricing-info"><strong>Great for seekers</strong></p>
                                <p className="main-info">Discover how to navigate your simple divorce</p>
                                <a href="#" className="btn-2">Get Started</a>
                                <ul classname="plan-items">
                                <li> 1 user</li>
                                <li> 5 projects</li>
                                <li>10 GB Storage</li>
                                <li>Primary Support</li>
                                </ul>
                            </div>
                             <div className="card card-essential">
                                <h2>Essential</h2>
                                <p className="price"><sup>$</sup>7</p>
                                <p class="pricing-info"><strong>For Planning Divorce</strong></p>
                                <p className="main-info">Your personalized guide to your divorce documents and export them</p>
                                <a href="#" className="btn-2">Get Started</a>
                                <ul classname="plan-items">
                                <li> 5 user</li>
                                <li> 50 projects</li>
                                <li>100 GB Storage</li>
                                <li>Primary Support</li>
                                </ul>
                            </div>
                             <div className="card card-pro">
                                <h2>Pro</h2>
                                <p className="price"><sup>$</sup>12</p>
                                <p class="pricing-info"><strong>For Professional Use</strong></p>
                                <p className="main-info">Enjoy limitless use with interactive support and export options</p>
                                <a href="#" className="btn-2">Get Started</a>
                                <ul classname="plan-items">
                                <li> Unlimited</li>
                                <li> Unlimited Projects</li>
                                <li>Unlimited Storage</li>
                                <li>Unlimited Support</li>
                                </ul>
                            </div>
                            {/* card - 2 */}
                        </div>
                    </div>
            </div>
        </body>
    )
}