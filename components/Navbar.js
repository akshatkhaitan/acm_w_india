import Navbarcss from "../styles/Navbar.module.css";
import pic1 from "../assets/acm_india.png";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
	return (
		<>
			<div className={Navbarcss.navbar}>
				<Image src={pic1} height={55} width={140} />
				<div className={Navbarcss.buttons}>
					<Link href="https://india.acm.org/">
						<a className={Navbarcss.button}>ACM INDIA</a>
					</Link>
					<Link href="https://india.acm.org/acm-w-india">
						<a className={Navbarcss.button}>ACM WOMEN</a>
					</Link>
				</div>
			</div>
		</>
	);
}
