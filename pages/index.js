import styles from "../styles/Home.module.css";
import { useState } from "react";
import SideMenu from "../components/SideMenu";
import DisplayArea from "../components/DisplayArea";
import Navbar from "../components/Navbar";
import Map from "../components/Map";
import Footer from "../components/Footer";
function Home() {
	const [selectedOption, setSelectedOption] = useState({
		activeOption: { id: 1, name: "Homepage" },
		options: [
			{ id: 4, name: "LADY ADA CONTEST" },
			{ id: 5, name: "CONTEST TIMELINE" },
			{ id: 10, name: "CELEBRATION SCHEDULE" },
			{ id: 7, name: "CONTEST RESULTS" },
			{ id: 6, name: "ORGANIZING COMMITTEE" },
			{ id: 9, name: "SPONSORS" },
		],
	});
	return (
		<>
			<Navbar />
			<div>
				<div className={styles.stars}></div>
				<div className={styles.stars2}></div>
				<div className={styles.outer}>
					<div className={styles.main}>
						<SideMenu
							setSelectedOption={setSelectedOption}
							selectedOption={selectedOption}
						/>
						<DisplayArea selectedOption={selectedOption.activeOption.id} />
					</div>
					<Map />
				</div>
			</div>
			<Footer />
		</>
	);
}
export default Home;
