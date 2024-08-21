import { Link } from "react-router-dom";

export default function PrimaryNav({ navClass, linkTo, linkClass }) {
	return (
		<nav className={navClass}>
			<Link to={linkTo} className={linkClass}>
				&larr; {/* HTML ENTITY CODE FOR LEFT ARROW */}
			</Link>
		</nav>
	);
}
