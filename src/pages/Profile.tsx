import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";
import { signOut } from "firebase/auth";
import { NavLink } from "react-router-dom";

const Profile: React.FC = () => {
    const navigate = useNavigate();
    const user = auth.currentUser;

    const logoutUser = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            await signOut(auth);
            navigate("/");
        } catch (error) {
            console.error("Logout Error:", error);
            // Optionally, handle error here (e.g., show a notification)
        }
    };

    return (
        <>
            {/* Header Section */}
            <section className="breadcrumb_section page-title-light background_bg bg_fixed overlay_bg_blue_70" style={{ backgroundImage: 'url(images/lotus.jpg)', backgroundPosition: 'center center', backgroundSize: 'cover' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-12 text-center">
                            <div className="page-title">
                                <h1>Profile</h1>
                            </div>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                                    <li className="breadcrumb-item active" aria-current="page">Profile</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4 text-center">
                        {user ? (
                            <>
                                <p>Welcome <em className="text-decoration-underline">{user.email}</em>. You are logged in!</p>
                                <div className="d-grid gap-2">
                                    <button type="button" className="btn btn-primary pt-3 pb-3" onClick={logoutUser}>
                                        Logout
                                    </button>
                                </div>
                            </>
                        ) : (
                            <p>No user is logged in.</p>
                        )}
                    </div>
                </div>
            </div>

            {/* Trainer Information Section */}
            <section>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <div className="trainer_image">
                                <img src="images/oGA08PtHV15y.jpg" alt="Team" />
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="team_detail">
                                <div className="row">
                                    <div className="col-md-6 mb-4 mb-lg-0">
                                        <h5>Personal Info</h5>
                                        <hr />
                                        <ul className="list_none trainer_info">
                                            <li>
                                                <span>Name:</span>
                                                <p>Elena Mark</p>
                                            </li>
                                            <li>
                                                <span>Speciality:</span>
                                                <p>Hatha Yoga</p>
                                            </li>
                                            <li>
                                                <span>Experience:</span>
                                                <p>3 Years</p>
                                            </li>
                                            <li>
                                                <span>Phone No:</span>
                                                <p>+ (123) 1512-578</p>
                                            </li>
                                            <li>
                                                <span>Email:</span>
                                                <a href="mailto:info@sitename.com">info@sitename.com</a>
                                            </li>
                                            <li>
                                                <span>Social:</span>
                                                <ul className="list_none social_icons border_social">
                                                    <li><a href="#"><i className="ion-social-facebook"></i></a></li>
                                                    <li><a href="#"><i className="ion-social-twitter"></i></a></li>
                                                    <li><a href="#"><i className="ion-social-googleplus"></i></a></li>
                                                    <li><a href="#"><i className="ion-social-youtube-outline"></i></a></li>
                                                    <li><a href="#"><i className="ion-social-instagram-outline"></i></a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6 mb-4 mb-md-0">
                                        <h5>Trainer's Skills:</h5>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="small_divider clearfix"></div>
                            <h5>About</h5>
                            <hr />
                            <div className="description">
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Vivamus bibendum magna Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <p>All the Ipsum generators on the Internet tend to repeat predefined chunks as necessary use a passage of Lorem Ipsum to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Profile;
