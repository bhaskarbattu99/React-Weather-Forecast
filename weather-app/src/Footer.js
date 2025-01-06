import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <img src="https://scontent.fhyd11-1.fna.fbcdn.net/v/t39.30808-6/437853162_1481513009380894_3152340471190156450_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=9VV9Vk-P_jkQ7kNvgH-FNhb&_nc_zt=23&_nc_ht=scontent.fhyd11-1.fna&_nc_gid=AgWidbe7yMNkcCv8yof41id&oh=00_AYDQbJ-qbui14YvuwiNF6X8c4M8hsW40XtYBTeR4BI5chA&oe=677AD391" alt="Profile" className="profile-photo" /> 
                <div>
                    <p>Weather App © 2025 | All Rights Reserved</p>
                    <i><p>Developed by Bhaskar Battu</p></i>
                </div>
                <div className="social-media">
                    <a href="https://www.instagram.com/itz_bhaskar_battu/" target="_blank">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://github.com/bhaskarbattu99" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/bhaskar-battu-5434b5255/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://www.facebook.com/bhaskar.bhaskarnayak.186" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
