import React from 'react';
import FooterWidget from './widget';
import FooterCopyRight from './copyright';

const Footer = () => {

    return (
        <>
            <footer className="main-footer overflow-hidden footer bgs-cover text-white" style={{ backgroundImage: "url(/images/footer/footer-bg-map.png)" }}>
                <div className="container">
                    <FooterWidget widgetSpace="pb-20" />
                </div>
                <FooterCopyRight />
            </footer>
        </>
    );
};

export default Footer;