import styles from "../styles/Home.module.css";
import { useState } from "react";
import SideMenu from "../components/SideMenu";
import DisplayArea from "../components/DisplayArea";
import Navbar from "../components/Navbar";
import Map from "../components/Map";


function Home() {
	const [selectedOption, setSelectedOption] = useState({
		activeOption: { id: 1, name: "Homepage" },
		options: [
			{ id: 4, name: "LADY ADA CONTEST" },
			{ id: 5, name: "TIMELINE" },
			{ id: 6, name: "ORGANIZING COMMITTEE" },
			{ id: 7, name: "RESULT" },
			{ id: 8, name: "CONTACTS" },
		],
	});
	return (
		<>
			<Navbar />
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
		</>
	);
}
export default Home;
