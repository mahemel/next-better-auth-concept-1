"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();
    const handleSignOut = () => {
        authClient.signOut();
    };
    const { data: session } = authClient.useSession();

    const user = session?.user;

    return (
        <div className="shadow-sm px-5 py-4 bg-amber-100 flex justify-between items-center">
            <div>Logo</div>
            {user && <p>Hi, {user.name}!</p>}

            <ul className="flex gap-8 items-center">
                <li>
                    <Link
                        className={
                            pathname === "/" ? "border-b border-gray-950" : ""
                        }
                        href={"/"}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        className={
                            pathname === "/server-action"
                                ? "border-b border-gray-950"
                                : ""
                        }
                        href={"/server-action"}
                    >
                        Server Action
                    </Link>
                </li>
                <li>
                    <Link
                        className={
                            pathname === "/models"
                                ? "border-b border-gray-950"
                                : ""
                        }
                        href={"/models"}
                    >
                        Models
                    </Link>
                </li>
                {user ? (
                    <>
                        <li>
                            <Button variant="danger" onClick={handleSignOut}>
                                Sign Out
                            </Button>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link
                                className={
                                    pathname === "/signin"
                                        ? "border-b border-gray-950"
                                        : ""
                                }
                                href={"/signin"}
                            >
                                Sign In
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={
                                    pathname === "/signup"
                                        ? "border-b border-gray-950"
                                        : ""
                                }
                                href={"/signup"}
                            >
                                Sign Up
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </div>
    );
};

export default Navbar;
