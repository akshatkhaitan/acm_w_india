import React from "react";
import style from "../styles/Home.module.css";
import AcmW from "./AcmW";
import Contacts from "./Contacts";
import Home from "./Home";
import Lady_Ada from "./Lady_Ada";
import OC from "./OC";
import Result from "./Result";
import TimeLine from "./TimeLine";

function DisplayArea({ selectedOption, allPostsData }) {
	return (
		<>
			<div className={style.blog_area}>
				{selectedOption == 1 ? (
					<Home />
				) : selectedOption == 2 ? (
					<AcmW />
				) : selectedOption == 3 ? (
					<AcmW />
				) : selectedOption == 4 ? (
					<Lady_Ada />
				) : selectedOption == 5 ? (
					<TimeLine />
				) : selectedOption == 6 ? (
					<OC />
				) : selectedOption == 7 ? (
					<Result />
				) : (
					<Contacts />
				)}
			</div>
		</>
	);
}

export default DisplayArea;
