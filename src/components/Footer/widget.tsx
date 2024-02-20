import React from 'react';

interface Iprops {
    widgetSpace: string
}

const FooterWidget:React.FC<Iprops> = (props) => {
    const { widgetSpace } = props;

    return (
        <>
            <div className={`${widgetSpace} footer-widget-area pt-85`}>
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="footer-widget about-widget">
                            <h4 className="footer-title">Profile</h4>
                            <ul className="list-style-two">
                                <li><a href="/faqs#">FAQs</a></li>
                                <li><a href="/price-plan#">Pricing Plan</a></li>
                                <li><a href="/order-tracking#">Order Tracking</a></li>
                                <li><a href="/retuen#">Return</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-6">
                        <div className="footer-widget link-widget ml-20 rml-0">
                            <h4 className="footer-title">Recent Post</h4>
                            <ul className="list-style-two">
                                <li><a href="#">Touch of uniqueness</a></li>
                                <li><a href="/services#">Offices you won't forget</a></li>
                                <li><a href="#">Cicilian</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6">
                        <div className="footer-widget link-widget ml-20 rml-0">
                            <h4 className="footer-title">Customer</h4>
                            <ul className="list-style-two">
                                <li><a href="#">Help & contact Us</a></li>
                                <li><a href="/services#">Return</a></li>
                                <li><a href="#">Online stores</a></li>
                                <li><a href="#">Terms & conditions</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="footer-widget newsletter-widget">
                            <h4 className="footer-title">Contact</h4>
                            <ul className='list-style-two social-share'>
                                <li><a href="http://facebook.com" target='_blank' ><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="http://twitter.com" target='_blank' ><i className="fab fa-twitter"></i></a></li>
                                <li> <a href="https://www.instagram.com/" target='_blank' ><i className="fab fa-instagram"></i></a></li>
                                <li><a href="https://www.pinterest.com/" target='_blank' ><i className="fab fa-pinterest-p"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FooterWidget;