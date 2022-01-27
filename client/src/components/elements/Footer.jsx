import React from 'react';

const Footer = (props) => {
    return <div className='Footer'>
        <footer className="new-design js-new-design footer-container" role="contentinfo">
            <div className="footer">
                <div className="container">


                    <div className="container col-md-8 padding-left-x0">

                        <div className="footer-links-wrapper">





                            <div className="about-rover-links">
                                <span className="footer-section-title">About Kinoverse</span>
                                <div className="row">
                                    <div className="col-xs-6 col-sm-5">
                                        <ul className="footer-list">


                                            <li>
                                                <a href="/about-us.html">About Us</a>
                                            </li>




                                            <li>
                                                <a className="js-careers-link-click-listener" href="/careers.html">Careers</a>
                                            </li>







                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4 padding-left-x0 padding-right-x0">



                        <div className="marketing-footer marketing-footer-email">
                            <div className="marketing-email-capture">
                                <span className="footer-section-title">Ready to signup?</span>
                                <div className="js-email-capture-footer-form-failure hidden">
                                    <p className="text-tertiary">
                                        Please enter a valid email address.
                                    </p>
                                </div>
                                <div className="js-email-capture-footer-form-thanks hidden" role="status">
                                    <p className="text-primary">
                                        <i className="rover-icon rover-icon-checked rover-icon-lg"></i>
                                        Success! Thanks for subscribing!
                                    </p>
                                </div>

                                <p className="privacy-policy help-text text-left small-text margin-top-x3 padding-right-x1">
                                    <span>You can use the signup form above to signup for the pre-launch.</span>
                                    Please provide a valid email address to receive a $10 credit coupon code for FREE.
                                </p>
                            </div>
                        </div>





                        <div className="marketing-footer marketing-footer-social">
                            <div className="marketing-social">
                                <div className="social-footer-links">
                                    <a target="_blank" href="mailto:info@kinoverse.net" rel="noopener noreferrer" aria-label="Visit Rover on Instagram" data-track-event="" data-event-type="click" data-event="social-outbound-click" data-event-merge="{ &quot;socialNetwork&quot;: &quot;instagram&quot; }">
                                        <i className="fas fa-envelope" aria-hidden="true"></i>
                                    </a>
                                    <a target="_blank" href="https://www.facebook.com/kinoverseteam" rel="noopener noreferrer" aria-label="Visit Rover on Facebook" data-track-event="" data-event-type="click" data-event="social-outbound-click" data-event-merge="{ &quot;socialNetwork&quot;: &quot;facebook&quot; }">
                                        <i className="fab fa-facebook" aria-hidden="true"></i>
                                    </a>



                                    <a target="_blank" href="https://twitter.com/kinoverseteam" rel="noopener noreferrer" aria-label="Visit Rover on Twitter" data-track-event="" data-event-type="click" data-event="social-outbound-click" data-event-merge="{ &quot;socialNetwork&quot;: &quot;twitter&quot; }">
                                        <i className="fab fa-twitter-square" aria-hidden="true"></i>
                                    </a>

                                    <a target="_blank" href="https://www.linkedin.com/company/kinoverse" rel="noopener noreferrer" aria-label="Visit Rover on Pinterest" data-track-event="" data-event-type="click" data-event="social-outbound-click" data-event-merge="{ &quot;socialNetwork&quot;: &quot;pinterest&quot; }">
                                        <i className="fab fa-linkedin" aria-hidden="true"></i>
                                    </a>

                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="container footer-copyright-and-address">
                        <span className="copyright">© 2021-2022 Kinoverse Corp. All rights reserved.</span>
                    </div>
                </div>

            </div>
        </footer>
    </div>;
};

export default Footer;
