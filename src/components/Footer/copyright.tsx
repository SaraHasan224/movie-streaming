import React from 'react';

type tProps = {}

const FooterCopyRight:React.FC<tProps> = (props) => {
    return (
            <div className={`copyright-area`}>
                <div className="container">
                    <div className="copyright-inner pt-15">
                        <p>&copy; {(new Date().getFullYear())} Nizami Movie Center.</p>
                    </div>
                </div>
            </div>
    );
};

export default FooterCopyRight;