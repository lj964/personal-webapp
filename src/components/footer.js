import { Link } from "gatsby"
import React from "react"

const Footer = () => (
    <footer className="footer">
        <div className="footer__container">
            <div className="footer__copyright">
                © {new Date().getFullYear()}, Loay Al-Suraj
            </div>
            <div className="footer__menu">
                <Link className="footer__link" to="/impressum">Impressum</Link> • <Link className="footer__link" to="/datenschutz">Datenschutz</Link>
            </div>
        </div>
    </footer >
)

export default Footer