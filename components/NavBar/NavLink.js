import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import classnames from 'classnames'

const NavLink = ({ href, children }) => {
    const router = useRouter();

    function getClassName(pageName) {
        const isActive = router.pathname === pageName;
        
        return classnames(
            "inline-block px-4 py-1 mr-1.5 rounded-lg",
            {
                "text-white bg-blue-500": isActive,
                "text-blue-500 bg-gray-100": !isActive,
            });
    }

    return (
        <Link href={href}>
            <a className={getClassName(href)}>{children}</a>
        </Link>
    );
};

export default NavLink;
