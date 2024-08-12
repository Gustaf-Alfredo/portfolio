import Image from 'next/image';
import React from "react";
import '../contact.css';

interface ContactInfoProps {
    icon: string;
    label: string;
    value: string;
    width?: number;
    height?: number;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, label, value, width = 30, height = 30 }) => {
    return (
        <div className="flex items-center justify-around p-1 max-sm:flex-col max-sm:my-4 max-sm:mx-0 max-sm:justify-center">
            <div className="grid grid-cols-40-1fr items-center justify-center">
                <Image src={icon} width={width} height={height} alt={label} color= 'red'/>
                <span>{label}</span>
            </div>
            <p>{`: ${value}`}</p>
        </div>
    );
};

export default ContactInfo;
