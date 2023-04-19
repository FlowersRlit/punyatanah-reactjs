import React from "react";
import { useRef , useEffect , useState} from "react";
import { NavLink } from "react-router-dom";
import NavbarMidButtons from "./MiscComponents/NavbarMidButtons";
import NavbarMobileButtons from "./MiscComponents/NavbarMobileButtons";
import Logo from "../assets/navbar.svg";
import { useSpring, animated } from "@react-spring/web";

const Navbar = () => {
	const [prevYPos, setPrevYPos] = useState(window.pageYOffset);

	const [springs, api] = useSpring(() => ({
		from: { x: 0 },
	}))

	const onScrollUp = () => {
		api.start({
			to: {
				y: 0,
			},
		})
	}

	const onScrollDown = () => {
		api.start({
			to: {
				y: -100,
			},
		})
	}

	useEffect(() => {
		const handleScroll = () => {
			const currentYPos = window.pageYOffset;
			if (prevYPos > currentYPos || currentYPos < 10) {
				onScrollUp()
			} else onScrollDown();

			setPrevYPos(currentYPos);
		};
	
		window.addEventListener('scroll', handleScroll);
	
		return () => window.removeEventListener('scroll', handleScroll);
	}, [prevYPos]);


	const menu = useRef(null);


	const handleClick = () => {
		menu.current.classList.toggle("hidden");
	};

	return (
		<animated.div style={{...springs}} className={`bg-white fixed top-0 w-full z-50 bg-white ${prevYPos > 20 ? 'shadow-md': ''}`}>
			<div className="mx-auto max-w-6xl px-4">
				<div className="grid grid-cols-2 md:grid-cols-4">
					<div className="flex space-x-4">
						<div>
							{/* logo */}
							<NavLink to="./" className="flex items-center py-4 px-2">
								<img src={Logo} alt="logo-navbar" />
							</NavLink>
						</div>
					</div>

					{/* nav: middle buttons */}
					<div className="hidden items-center space-x-1 font-medium md:flex col-span-2 justify-center">
						<NavbarMidButtons Button="Home" Page="./" />
						<NavbarMidButtons Button="Marketplace" Page="./marketplace" />
						<NavbarMidButtons Button="Review" Page="./" />
						<NavbarMidButtons Button="About Us" Page="./" />
					</div>

					{/* sign in & sign up */}
					<div className="hidden items-center justify-end space-x-1 md:flex">
						<NavLink
							to="./login"
							className="py-2 px-3 font-medium text-[#016450] hover:text-[#FF6500]"
						>
							Sign In
						</NavLink>
						<NavLink
							to="./register"
							className="rounded-md border-[#016450] bg-[#016450] py-2 px-3 font-medium text-white hover:bg-[#FF6500] hover:text-white"
						>
							Sign Up
						</NavLink>
					</div>

					{/* mobile responsive */}
					<div className="flex items-center md:hidden justify-end">
						<button onClick={handleClick} className="mobile-menu-button">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="h-6 w-6 text-[#016450]"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>

			{/* mobile burger box */}
			<div
				ref={menu}
				className="mobile-menu hidden text-center shadow-md shadow-[#016450] md:hidden"
			>
				<NavbarMobileButtons Title="Home" Page="./" />
				<NavbarMobileButtons Title="Marketplace" Page="./marketplace" />
				<NavbarMobileButtons Title="Review" Page="./" />
				<NavbarMobileButtons Title="About Us" Page="./" />
			</div>
		</animated.div>
	);
};

export default Navbar;
