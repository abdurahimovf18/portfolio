"use client";

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { faTelegram, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";


interface iSocialLink {
    platform_name: string;
    link: string,
    icon: FontAwesomeIconProps["icon"]
}


function SocialLink({ platform_name, link, icon }: iSocialLink) {
    return (
        <Link
        href={link}
        title={platform_name}
        className="w-[40px] aspect-square rounded-full overflow-hidden opacity-70 hover:opacity-90
        flex-center scale-70 hover:scale-95 transition-all duration-100"
        >  
            <FontAwesomeIcon icon={icon} className="text-3xl aspect-square" />
        </Link>
    )
}


export function SocialLinks() {

    return (
        <div className="flex w-full justify-center items-center px-10">
            <SocialLink
                platform_name="Instagram"
                link="https://www.instagram.com/abdurahimovf_18"
                icon={faInstagram}
            />

            <SocialLink
                platform_name="Telegram"
                link="https://t.me/abdurahimov_f18"
                icon={faTelegram}
            />

            <SocialLink
                platform_name="Call"
                link="tel:+998974903433"
                icon={faPhone}
            />
        </div>

    )
}