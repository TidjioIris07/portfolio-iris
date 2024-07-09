"use client";

import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

const social = [
    { icon: <FaGithub />, path: "https://github.com/TidjioIris07" },
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/iris-retsofa" },
];

const Socials = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {social.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
};

export default Socials;
