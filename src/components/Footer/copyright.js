import React from 'react';

const FooterCopyRight = (props) => {
    const { copyrightBg } = props

    return (
        <>
            <div className={`${copyrightBg} copyright-area`}>
                <div className="container">
                    <div className="copyright-inner pt-15">
                        <p>&copy; {(new Date().getFullYear())} Nizami Movie Center.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FooterCopyRight;