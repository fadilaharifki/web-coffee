import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

function NavBar() {
	return (
		<header className="fixed w-full">
			<div className="lg:px-16 px-6 bg-[#6b4c35] flex flex-wrap items-center lg:py-0 py-2 bg-opacity-70">
				<div className="flex-1 flex justify-between items-center">
					<Link to={"/"}>
						{/* <img className="h-14 m-2" src="" alt="" /> */}
						<h1 className="text-2xl font-semibold text-[#ffffff]">
							Coffee Lampung
						</h1>
					</Link>
				</div>
				<label htmlFor="menu-toggle" className="cursor-pointer sm:hidden block">
					<svg
						className="fill-current text-white"
						xmlns="http://www.w3.org/2000/svg"
						width={20}
						height={20}
						viewBox="0 0 20 20"
					>
						<title>menu</title>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
					</svg>
				</label>
				<input className="hidden" type="checkbox" id="menu-toggle" />
				<div
					className="hidden sm:flex sm:items-center sm:w-auto w-full"
					id="menu"
				>
					<nav>
						<ul className="sm:flex items-center justify-between text-base text-gray-700 pt-4 sm:pt-0">
							<li>
								<Link
									to={"/"}
									className="sm:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-white text-[#ffffff]  font-bold"
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									to={"/about"}
									className="sm:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-white text-[#ffffff]  font-bold"
								>
									About
								</Link>
							</li>
							<li>
								<Link
									to={"/journey"}
									className="sm:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-white text-[#ffffff]  font-bold"
								>
									Journey
								</Link>
							</li>
							<li>
								<Link
									to={"/feature"}
									className="sm:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-white text-[#ffffff]  font-bold"
								>
									Feature
								</Link>
							</li>
							<li>
								<Link
									to={"/product"}
									className="sm:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-white text-[#ffffff]  font-bold"
								>
									Product
								</Link>
							</li>
							<li>
								<Link
									to={"/team"}
									className="sm:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-white text-[#ffffff]  font-bold"
								>
									Team
								</Link>
							</li>
							<li>
								<Link
									to={"/contact"}
									className="sm:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-white text-[#ffffff]  font-bold"
								>
									Contact
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
}

export default NavBar;
