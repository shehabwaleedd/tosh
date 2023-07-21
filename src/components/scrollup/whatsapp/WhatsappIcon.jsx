import React from 'react'
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from 'react-icons/fa';
import './WhatsappIcon.css'
import { BsWhatsapp } from 'react-icons/bs'
import { Link } from 'react-router-dom';

const WhatsappIcon = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = () => {
        if (window.pageYOffset > 500) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const buttonVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <motion.div
            className="whatsappIcon"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? "visible" : "hidden"}
            variants={buttonVariants}
            transition={{ duration: 0.2 }}
        >
            <Link to="https://wa.me/+201212105146?text=Hello,%20I%20would%20like%20to%20get%20in%20touch%20with%20you.%20" className="home__scroll-up">
                <BsWhatsapp style={{ fontSize: "2rem"}} />
            </Link>
        </motion.div>
    );
}

export default WhatsappIcon