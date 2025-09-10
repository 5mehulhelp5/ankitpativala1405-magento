/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-curly-spacing */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/export */
/* eslint-disable react/forbid-dom-props */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable no-tabs */
/** @namespace First/Route/HomePage/Components/Header */
export function Header() {
    return (
        <div>
            <h1>This Is Header</h1>
        </div>
    );
}
/** @namespace First/Route/HomePage/Components/Footer */
export function Footer() {
    return (
        <footer className="site-footer">
            <div className="container footer-inner">
                <p>© {new Date().getFullYear()} Scamdi. All rights reserved.</p>
                <div className="socials">
                    <a href="#" aria-label="Twitter">Tw</a>
                    <a href="#" aria-label="Instagram">Ig</a>
                    <a href="#" aria-label="Facebook">Fb</a>
                </div>
            </div>
        </footer>
    );
}
export default Footer;


