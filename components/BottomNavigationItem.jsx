import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";

const BottomNavigationItem = ({ path, icon }) => {
    const router = useRouter();

    return (
        <li
            className={`bottomNavigationItem ${
                router.pathname === path ? "active" : ""
            }`}
        >
            {/* <Link href={path}> */}
            <a href={path}>{icon}</a>
            {/* </Link> */}
        </li>
    );
};

export default BottomNavigationItem;
