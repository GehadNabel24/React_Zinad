import React from "react";

export function Footer() {
  return (
    <div className="container my-5">
      <footer className="bg-light text-center text-white" style={{ width: '100%' }}>
        <div
          className="text-center p-3"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
        >
          © 2020 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </footer>
    </div>
  );
}
