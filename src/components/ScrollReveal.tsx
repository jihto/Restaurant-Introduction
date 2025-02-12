import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ScrollRevealProps {
    id: string;
    imageSrc: string;
    title?: string;
    subtitle?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ id, imageSrc, title, subtitle }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const element = document.getElementById(id);
        if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.75) {
            setIsVisible(true);
            }
        }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div id={id} className="relative h-[600px] mb-5 flex justify-center items-center bg-gray-900">
        <img
            src={imageSrc} // Thay bằng ảnh thực tế
            alt={title}
            className="w-full h-full object-cover object-center"
            loading="lazy"
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-20'></div>  
        <div
            className="absolute bottom-4 z-30 text-center text-white" 
        >
            <p className="italic text-3xl">{subtitle}</p>
            <h2 className="text-3xl font-bold text-yellow-400 font-semibold">{title}</h2>
        </div>
        </div>
    );
};

export default ScrollReveal;
