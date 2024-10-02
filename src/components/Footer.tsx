import React from 'react';

const Footer: React.FC = () => {
    return (
        // START FOOTER
        <footer className="bg_dark footer_dark">
            <div className="top_footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-7 mb-4 mb-lg-0">
                            <h5 className="widget_title">About Us</h5>
                            <div className="footer_desc">
                                <p>
                                    Phasellus blandit massa enim. elit id varius nunc. Lorems ipsum dolor sit consectetur. 
                                    If you are going to use a passage of Lorem Ipsum.
                                </p>
                            </div>
                            <ul className="contact_info list_none">
                                <li>
                                    <span className="fa fa-map-marker-alt"></span>
                                    <address>256 Mohra Rd, North London, UK</address>
                                </li>
                                <li>
                                    <span className="fa fa-mobile-alt"></span>
                                    <p>+123 456 7890</p>
                                </li>
                                <li>
                                    <span className="fa fa-envelope"></span>
                                    <a href="mailto:info@yourmail.com">info@yourmail.com</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-sm-5 mb-4 mb-lg-0">
                            <h5 className="widget_title">Quick Links</h5>
                            <ul className="list_none widget_links links_style2">
                                <li><a href="#">Join Us</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Features</a></li>
                                <li><a href="#">Feedback</a></li>
                                <li><a href="#">Support Center</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-7 mb-4 mb-md-0">
                            <h5 className="widget_title">Latest Post</h5>
                            <ul className="recent_post border_bottom_dash list_none">
                                <li>
                                    <div className="post_footer">
                                        <div className="post_content">
                                            <h6><a href="#">Lorem ipsum dolor sit amet nullam consectetur adipiscing elit.</a></h6>
                                            <span className="post_date"><i className="ion-android-time"></i> April 14, 2018</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="post_footer">
                                        <div className="post_content">
                                            <h6><a href="#">Lorem ipsum dolor sit amet nullam consectetur adipiscing elit.</a></h6>
                                            <span className="post_date"><i className="ion-android-time"></i> April 14, 2018</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-5">
                            <h5 className="widget_title">Subscribe Newsletter</h5>
                            <div className="newsletter_form mb-4 mb-lg-5">
                                <form>
                                    <input type="text" className="form-control rounded-0" required placeholder="Enter Email Address" />
                                    <button type="submit" title="Subscribe" className="btn btn-default rounded-0" name="submit" value="Submit">
                                        <i className="ion-paper-airplane"></i>
                                    </button>
                                </form>
                            </div>
                            <h5 className="widget_title">Stay Connected</h5>
                            <ul className="list_none social_icons radius_social">
                                <li><a href="#" className="sc_facebook"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#" className="sc_twitter"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#" className="sc_google"><i className="fab fa-google-plus-g"></i></a></li>
                                <li><a href="#" className="sc_instagram"><i className="fab fa-instagram"></i></a></li>
                                <li><a href="#" className="sc_pinterest"><i className="fab fa-pinterest"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12">
                        <div className="bottom_footer border_top_transparent">
                            <div className="row">
                                <div className="col-md-6">
                                    <p className="copyright m-md-0 text-center text-md-left">
                                        Copyright © 2019 - Template Made By <a href="https://bestwebcreator.com/" className="text_default">BestWebCreator</a>
                                    </p>
                                </div>
                                <div className="col-md-6">
                                    <ul className="list_none footer_link text-center text-md-right">
                                        <li><a href="#">Terms of use</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape_img">
                <div className="ol_shape10">
                    <img src="images/dvetOdrfKrDa.png" alt="shape36" />
                </div>
            </div>
        </footer>
        // END FOOTER
    );
};

export default Footer;
