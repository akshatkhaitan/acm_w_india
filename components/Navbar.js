import Navbarcss from "../styles/Navbar.module.css";
import pic1 from "../assets/acm_india.png";
import pic2 from "../assets/heading.png";
import Image from "next/image";
// import Link from "next/link";
import pic3 from "../assets/acm_w.png";
export default function Navbar() {
	return (
		<>
			<div className={Navbarcss.navbar}>
				<div>
					<Image src={pic3} height={90} width={150} />
				</div>
				<div>
					<Image src={pic2} height={95} width={1000} />
				</div>
				<div>
					<Image src={pic1} height={75} width={180} />
				</div>
			</div>
		</>
	);
}
