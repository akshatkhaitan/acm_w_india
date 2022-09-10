import React from "react";
import styles from "../styles/Home.module.css";

function TimeLine() {
	return (
		<>
			<div className={styles.timeline_wrapper}>
				<div className={styles.dates}>
					<span className={styles.spans}>Competition Dates</span>
					<ul>
						<li>
							<span>&#9670;</span> 1st Round: 10th September 2022
						</li>

						<li>
							<span>&#9670;</span> 2nd Round: 17th September 2022
						</li>

						<li>
							<span>&#9670;</span> Interview Round: 19th September 2022
						</li>

						<li>
							<span>&#9670;</span> Finalists are to be informed on 21st
							September and will be awarded travel grants worth 4000 INR.
						</li>

						<li>
							<span>&#9670;</span> Final Round Coding Competition at BITS Pilani
							Hyderabad Campus: 7th October 2022
						</li>

						<li>
							<span>&#9670;</span> Celebrations: 8th October 2022{" "}
						</li>
					</ul>
				</div>
				<div className={styles.cash}>
					<span className={styles.spans}>Participate and win cash prizes!</span>
					<ul>
						<li>
							<span>&#9670;</span> 1st Prize: Rs 15,000/-{" "}
						</li>
						<li>
							<span>&#9670;</span> 2ndPrize: Rs 12,000/-{" "}
						</li>
						<li>
							<span>&#9670;</span> 3rd Prize: Rs 10,000/-{" "}
						</li>
					</ul>
				</div>
				<div className={styles.register}>
					<span>Register : </span>
					<a href="https://assessments.reliscore.com/companies/private-space-register/acmw-contest-38417/">
                    https://assessments.reliscore.com/companies/private-space-register/acmw-contest-38417/
					</a>
                    <br /> 
                    <br />
					For further queries, contact: <br />
                    Shri Shekhar Sahasrabudhe at 
					shekhar_sahasrabudhe@persistent.com
				</div>
			</div>
		</>
	);
}

export default TimeLine;
