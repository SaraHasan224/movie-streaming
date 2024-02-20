import React from 'react';
import FooterWidget from './widget';
import FooterCopyRight from './copyright';

type tProps = {
    widgetSpace: string
}

const Footer:React.FC<tProps> = (props) => {
    const { widgetSpace } = props
    return (
            <footer className="main-footer overflow-hidden footer bgs-cover text-white" style={{ backgroundImage: "url(/images/footer/footer-bg-map.png)" }}>
                <div className="container">
                    <FooterWidget widgetSpace={widgetSpace} />
                </div>
                <FooterCopyRight />
            </footer>
    );
};

export default Footer;