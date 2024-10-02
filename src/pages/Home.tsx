import React from 'react';

const Home: React.FC = () => {
    return (
        <>
            <section className="banner_slider banner_slide_half p-0">
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                    <div className="carousel-inner">
                        {/* First Carousel Item */}
                        <div className="carousel-item active bg_light_pink">
                            <div className="banner_slide_content">
                                <div className="container">
                                    <div className="row justify-content-end align-items-center">
                                        <div className="col-xl-6 col-md-5">
                                            <div className="banner_img text-center">
                                                <div className="animation" data-animation="fadeInLeft" data-animation-delay="0.5s">
                                                    <img data-parallax="{&quot;y&quot;: -30, &quot;smoothness&quot;: 20}" src="images/DbU8dTmH0U0d.png" alt="Yoga Studio" />
                                                </div>
                                                <div className="circle_bg1">
                                                    {[...Array(8)].map((_, index) => (
                                                        <span key={index}></span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-md-7">
                                            <div className="banner_content animation" data-animation="zoomIn" data-animation-delay="0.4s" data-parallax="{&quot;y&quot;: 30, &quot;smoothness&quot;: 10}">
                                                <h2 className="animation" data-animation="fadeInDown" data-animation-delay="0.5s">Welcome to Yoga Studio</h2>
                                                <p className="animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                                                    Yoga has always been more than just a workout routine. It's a philosophy, a lifestyle for mind and body balance.
                                                </p>
                                                <a className="btn btn-default rounded-0 animation" href="#" data-animation="fadeInUp" data-animation-delay="0.7s">Learn More</a>
                                                <a className="btn btn-white rounded-0 animation" href="#" data-animation="fadeInUp" data-animation-delay="0.8s">Contact Us</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="banner_shape">
                                <div className="shape1">
                                    <div className="animation" data-animation="fadeInLeft" data-animation-delay="0.5s">
                                        <img src="images/cf1sMwLBx3Qu.png" alt="Shape" />
                                    </div>
                                </div>
                                <div className="shape2">
                                    <div className="animation" data-animation="fadeInLeft" data-animation-delay="0.5s">
                                        <img src="images/y2rBQykZlF0H.png" alt="Shape" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Second Carousel Item */}
                        <div className="carousel-item bg_light_yellow">
                            <div className="banner_slide_content">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-5">
                                            <div className="banner_img2 text-center">
                                                <div className="animation border_img" data-animation="fadeInRight" data-animation-delay="0.5s">
                                                    <img data-parallax="{&quot;y&quot;: -30, &quot;smoothness&quot;: 20}" src="images/he8GOrwDXr94.png" alt="Yoga Lifestyle" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-7 order-md-first">
                                            <div className="banner_content animation" data-animation="fadeIn" data-animation-delay="0.4s" data-parallax="{&quot;y&quot;: 30, &quot;smoothness&quot;: 10}">
                                                <h2 className="animation" data-animation="fadeInDown" data-animation-delay="0.5s">Find Lifestyle Through Yoga</h2>
                                                <p className="animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                                                    We strive to make our Yoga studio a peaceful, meditational place of tranquility, a goal we've succeeded at according to our growing list of attendees.
                                                </p>
                                                <a className="btn btn-default rounded-0 animation" href="#" data-animation="fadeInUp" data-animation-delay="0.7s">Learn More</a>
                                                <a className="btn btn-white rounded-0 animation" href="#" data-animation="fadeInUp" data-animation-delay="0.8s">Contact Us</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="banner_shape">
                                <div className="shape3">
                                    <div className="animation" data-animation="fadeInLeft" data-animation-delay="0.5s">
                                        <img src="images/K7CfTZEWGiXI.png" alt="Shape" />
                                    </div>
                                </div>
                                <div className="shape4">
                                    <div className="animation" data-animation="fadeInLeft" data-animation-delay="0.5s">
                                        <img src="images/pINDsRqjDWN3.png" alt="Shape" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Third Carousel Item */}
                        <div className="carousel-item bg_light_gold">
                            <div className="banner_slide_content">
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-5">
                                            <div className="banner_img3 text-center">
                                                <div className="animation" data-animation="fadeInRight" data-animation-delay="0.5s">
                                                    <img data-parallax="{&quot;y&quot;: -30, &quot;smoothness&quot;: 20}" src="images/9N6WaoPcr1rQ.png" alt="Yoga for Everyone" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-7 order-md-first">
                                            <div className="banner_content animation" data-animation="fadeIn" data-animation-delay="0.4s" data-parallax="{&quot;y&quot;: 30, &quot;smoothness&quot;: 10}">
                                                <h2 className="animation" data-animation="fadeInDown" data-animation-delay="0.5s">Yoga Studio for Everyone</h2>
                                                <p className="animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                                                    Our Yoga studio has become one of the most popular yoga venues in the USA. It's time to go beyond your limits and discover your passion.
                                                </p>
                                                <a className="btn btn-default rounded-0 animation" href="#" data-animation="fadeInUp" data-animation-delay="0.7s">Learn More</a>
                                                <a className="btn btn-white rounded-0 animation" href="#" data-animation="fadeInUp" data-animation-delay="0.8s">Contact Us</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="banner_shape">
                                <div className="shape5">
                                    <div className="animation" data-animation="fadeInLeft" data-animation-delay="0.5s">
                                        <img src="images/BZowE326VZX5.png" alt="Shape" />
                                    </div>
                                </div>
                                <div className="shape6">
                                    <div className="animation" data-animation="fadeInLeft" data-animation-delay="0.5s">
                                        <img data-parallax="{&quot;y&quot;: 30, &quot;smoothness&quot;: 20}" src="images/n3JSl7NwBrkr.png" alt="Shape" />
                                    </div>
                                </div>
                                <div className="shape7">
                                    <div className="animation" data-animation="fadeInLeft" data-animation-delay="0.5s">
                                        <img data-parallax="{&quot;y&quot;: -30, &quot;smoothness&quot;: 20}" src="images/eb7JoLDIZSPa.png" alt="Shape" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Carousel Navigation */}
                    <div className="carousel_nav">
                        <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                            <i className="ion-chevron-left"></i>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                            <i className="ion-chevron-right"></i>
                        </a>
                    </div>
                </div>
            </section>

            {/* START SECTION BENEFITS */}
            <section className="benefits py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-10 text-center">
                            <h2 className="title">Benefits of Yoga</h2>
                            <p className="sub-title">Yoga is not just about bending; it's a holistic approach to health.</p>
                        </div>
                    </div>
                    <div className="row mt-4">
                    <div className="col-lg-4 col-sm-6">
                    <div className="icon_box box_shadow4 text-center icon_box_style1 animation">
                        <div className="box_icon">
                            <i className="flaticon-strong-body"></i>
                        </div>
                        <div className="intro_desc">
                            <h5>Strong Body Life</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur blandit magna adipiscing elit.</p>
                        </div>
                        </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
            	            <div className="icon_box box_shadow4 text-center icon_box_style1 animation" data-animation="fadeInUp" data-animation-delay="0.3s">
                	      <div className="box_icon">
                    	<i className="flaticon-flexibility"></i>
                    </div>
                    <div className="intro_desc">
                    	<h5>increased flexibility</h5>
                        <p> Lorem ipsum dolor sit amet, consectetur blandit magna adipiscing elit ncididunt labore et dolore magna aliqua enim. </p>
                    </div>
                     </div>
                          </div>
                          <div className="col-lg-4 col-sm-6">
            	<div className="icon_box box_shadow4 text-center icon_box_style1 animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                	<div className="box_icon">
                    	<i className="flaticon-healthy-lifestyle"></i>
                    </div>
                    <div className="intro_desc">
                    	<h5>healthy lifestyle</h5>
                        <p> Lorem ipsum dolor sit amet, consectetur blandit magna adipiscing elit ncididunt labore et dolore magna aliqua enim. </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6">
            	<div className="icon_box box_shadow4 text-center icon_box_style1 animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                	<div className="box_icon">
                    	<i className="flaticon-blood-flow"></i>
                    </div>
                    <div className="intro_desc">
                    	<h5>Increases blood flow </h5>
                        <p> Lorem ipsum dolor sit amet, consectetur blandit magna adipiscing elit ncididunt labore et dolore magna aliqua enim. </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6">
            	<div className="icon_box box_shadow4 text-center icon_box_style1 animation" data-animation="fadeInUp" data-animation-delay="0.3s">
                	<div className="box_icon">
                    	<i className="flaticon-drops-blood"></i>
                    </div>
                    <div className="intro_desc">
                    	<h5>Drops blood pressure</h5>
                        <p> Lorem ipsum dolor sit amet, consectetur blandit magna adipiscing elit ncididunt labore et dolore magna aliqua enim. </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6">
            	<div className="icon_box box_shadow4 text-center icon_box_style1 animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                	<div className="box_icon">
                    	<i className="flaticon-adrenal-gland"></i>
                    </div>
                    <div className="intro_desc">
                    	<h5>Regulates adrenal gland</h5>
                        <p> Lorem ipsum dolor sit amet, consectetur blandit magna adipiscing elit ncididunt labore et dolore magna aliqua enim. </p>
                    </div>
                </div>
                    </div>
                    </div>
                </div>
            </section>
            
            {/* START SECTION CLASSES */}
            <section className="pb_70">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8 col-md-10 text-center animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                            <div className="heading_s1">
                                <span className="sub_heading">Choose Your Level Best</span>
                                <h2>Some Of Our Classes</h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur blandit magna adipiscing elit ncididunt labore et dolore magna aliqua enim.</p>
                            <div className="small_divider clearfix"></div>
                        </div>
                    </div>
                    <div className="row">
                        {/* Add your className boxes here */}
                        {/* Example className box */}
                        <div className="col-lg-4 col-sm-6">
                            <div className="classes_box box_shadow1 animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                                <div className="classes_img">
                                    <img src="images/03rMzpOCsIPX.jpg" alt="Yoga For Beginners" />
                                    <div className="link_container">
                                        <a href="#"><i className="ion-plus"></i></a>
                                    </div>
                                </div>
                                <div className="classes_info">
                                    <div className="classes_teacher">
                                        <img src="images/2XY0R2GYA7wh.jpg" alt="Teacher Maria" />
                                        <span>Maria</span>
                                    </div>
                                    <div className="classes_title">
                                        <span className="badge badge-pill badge-info">Hatha</span>
                                        <h4><a href="#">Yoga For Beginners</a></h4>
                                    </div>
                                    <ul className="classes_schedule">
                                        <li><i className="ion-calendar"></i>Mon, Thu, Fri</li>
                                        <li><i className="ion-android-alarm-clock"></i>9:00 - 11:00</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                <div className="classes_box box_shadow1 animation" data-animation="fadeInUp" data-animation-delay="0.3s">
                    <div className="classes_img">
                        <img src="images/DvvhXZL7sOkY.jpg" alt="image"/>
                        <div className="link_container">
                            <a href="#"><i className="ion-plus"></i></a>
                        </div>
                    </div>
                    <div className="classes_info">
                         <div className="classes_teacher">
                            <img src="images/IsH97te9YeaT.jpg" alt="image"/>
                            <span>Elena</span>
                        </div>
                        <div className="classes_title">
                            <span className="badge badge-pill badge-success">Kundalini</span>
                            <h4><a href="#">Balance Body &amp; Mind</a></h4>
                        </div>
                        <ul className="classes_schedule">
                            <li><i className="ion-calendar"></i>Tue, Wed, Sat</li>
                            <li><i className="ion-android-alarm-clock"></i>9:00 - 11:00</li>
                        </ul>
                    </div>
                </div>
            </div>
                        {/* Repeat for other classes */}
                    </div>
                </div>
            </section>
            {/* END SECTION CLASSES */}

            {/* START SECTION PRICING TABLE */}
            <section className="bg_light_yellow pb_70">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8 col-md-10 text-center animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                            <div className="heading_s1">
                                <span className="sub_heading">Choose Our Package</span>
                                <h2>Yoga Pricing Plan</h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur blandit magna adipiscing elit ncididunt labore et dolore magna aliqua enim.</p>
                            <div className="small_divider clearfix"></div>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-lg-4">
                <div className="pricing_box pricing_style1 animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                    <div className="pr_title_wrap border-bottom">
                        <h4 className="pr_title">regular member</h4>
                        <div className="price_tage">
                            <h2>$49<span>/ Month</span></h2>
                        </div>
                    </div>
                    <div className="pr_content pt-3">
                        <ul className="list_none pr_list">
                            <li>Basic Options</li>
                            <li>Full Access</li>
                            <li>Customers Support</li>
                            <li>Free Updates</li>
                            <li>Advanced Options</li>
                        </ul>
                    </div>
                    <div className="pr_footer">
                        <a href="#" className="btn btn-dark rounded-0">Buy Now</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="pricing_box pricing_style1 animation" data-animation="fadeInUp" data-animation-delay="0.3s">
                    <div className="pricing_ribbon">Popular</div>
                    <div className="pr_title_wrap bg_default text_white">
                        <h4 className="pr_title">V.i.p Member</h4>
                        <div className="price_tage">
                            <h2>$99<span>/ Month</span></h2>
                        </div>
                    </div>
                    <div className="pr_content pt-3">
                        <ul className="list_none pr_list">
                            <li>Standard Options</li>
                            <li>Full Access</li>
                            <li>Customers Support</li>
                            <li>Free Updates</li>
                            <li>Advanced Options</li>
                        </ul>
                    </div>
                    <div className="pr_footer">
                        <a href="#" className="btn btn-default rounded-0">Buy Now</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="pricing_box pricing_style1 animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                    <div className="pr_title_wrap border-bottom">
                        <h4 className="pr_title">Premium Member</h4>
                        <div className="price_tage">
                            <h2>$199<span>/ Month</span></h2>
                        </div>
                    </div>
                    <div className="pr_content pt-3">
                        <ul className="list_none pr_list">
                            <li>Unlimited Options</li>
                            <li>Full Access</li>
                            <li>Customers Support</li>
                            <li>Free Updates</li>
                            <li>Advanced Options</li>
                        </ul>
                    </div>
                    <div className="pr_footer">
                        <a href="#" className="btn btn-dark rounded-0">Buy Now</a>
                    </div>
                </div>
                </div>
                </div>
            </section>
            {/* END SECTION PRICING TABLE */}

        </>
    );
};

export default Home;
