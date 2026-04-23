import Link from "next/link";

const Navbar = () => {
    return (
        <div className="shadow-sm px-5 py-4 bg-amber-100 flex justify-between">
            <div>Logo</div>

            <ul className="flex gap-8">
                <li>
                    <Link href={"/"}>Home</Link>
                </li>
                <li>
                    <Link href={"/models"}>Models</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
