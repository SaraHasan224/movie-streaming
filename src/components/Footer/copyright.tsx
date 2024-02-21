import React from "react";

type FooterCRProps = {};

export const FooterCopyRight: React.FC<FooterCRProps> = () => {
  return (
    <div className={`copyright-area`}>
      <div className="container">
        <div className="copyright-inner pt-15">
          <p>&copy; {new Date().getFullYear()} Nizami Movie Center.</p>
        </div>
      </div>
    </div>
  );
};
