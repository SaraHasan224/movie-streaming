import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const FooterWidget = (props) => {

    const { widgetSpace } = props;

    return (
        <>
            <div className={`${widgetSpace} footer-widget-area pt-85`}>
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="footer-widget about-widget">
                            <h4 className="footer-title">Profile</h4>
                            <ul className="list-style-two">
                                <li><Link to="/faqs#">FAQs</Link></li>
                                <li><Link to="/price-plan#">Pricing Plan</Link></li>
                                <li><Link to="/order-tracking#">Order Tracking</Link></li>
                                <li><Link to="/retuen#">Return</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-6">
                        <div className="footer-widget link-widget ml-20 rml-0">
                            <h4 className="footer-title">Recent Post</h4>
                            <ul className="list-style-two">
                                <li><Link to="#">Touch of uniqueness</Link></li>
                                <li><Link to="/services#">Offices you won't forget</Link></li>
                                <li><Link to="#">Cicilian</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6">
                        <div className="footer-widget link-widget ml-20 rml-0">
                            <h4 className="footer-title">Customer</h4>
                            <ul className="list-style-two">
                                <li><Link to="#">Help & contact Us</Link></li>
                                <li><Link to="/services#">Return</Link></li>
                                <li><Link to="#">Online stores</Link></li>
                                <li><Link to="#">Terms & conditions</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="footer-widget newsletter-widget">
                            <h4 className="footer-title">Contact</h4>
                            <ul className='list-style-two social-share'>
                                <li><Link to="http://facebook.com" target='_blank' ><i className="fab fa-facebook-f"></i></Link></li>
                                <li><Link to="http://twitter.com" target='_blank' ><i className="fab fa-twitter"></i></Link></li>
                                <li> <Link to="https://www.instagram.com/" target='_blank' ><i className="fab fa-instagram"></i></Link></li>
                                <li><Link to="https://www.pinterest.com/" target='_blank' ><i className="fab fa-pinterest-p"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FooterWidget;