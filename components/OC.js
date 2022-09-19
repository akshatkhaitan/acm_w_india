import React from "react";
import styles from "../styles/Home.module.css";
function OC() {
	return (
		<div className={styles.wrapper}>
			<table className={styles.table}>
                <thead className={styles.head}>
                <tr>
						<td data-title="DATE">Name</td>
						{/* <td data-title="NAME OF THE EVENT">Position </td> */}
						<td data-title="NAME OF EXPERTS">Organisation</td>
					</tr>
                </thead>
				<tbody>
					<tr>
						<td data-title="DATE">Heena Timani</td>
						{/* <td data-title="NAME OF THE EVENT">Chair </td> */}
						<td data-title="NAME OF EXPERTS">ACM</td>
					</tr>
					<tr>
						<td data-title="DATE">Rutvi Shah</td>
						{/* <td data-title="NAME OF THE EVENT">Head </td> */}
						<td data-title="NAME OF EXPERTS">
							ACM{" "}
						</td>
					</tr>
					<tr>
						<td data-title="DATE">Chitra Babu</td>
						{/* <td data-title="NAME OF THE EVENT">Head </td> */}
						<td data-title="NAME OF EXPERTS">
							ACM{" "}
						</td>
					</tr>
					<tr>
						<td data-title="DATE">Manik Gupta</td>
						{/* <td data-title="NAME OF THE EVENT"> */}
							{/* Faculty Sponsor (OIST ACM Student Chapter){" "} */}
						{/* </td> */}
						<td data-title="NAME OF EXPERTS">
							ACM{" "}
						</td>
					</tr>
					<tr>
						<td data-title="DATE">Geeta Kumari</td>
						{/* <td data-title="NAME OF THE EVENT">Assistant Professor </td> */}
						<td data-title="NAME OF EXPERTS">
							BITS PILANI HYD
						</td>
					</tr>
					<tr>
						<td data-title="DATE">Aruna Malapati</td>
						{/* <td data-title="NAME OF THE EVENT">Assistant Professor </td> */}
						<td data-title="NAME OF EXPERTS">
						BITS PILANI HYD
						</td>
					</tr>
					<tr>
						<td data-title="DATE">Barsha Mitra</td>
						{/* <td data-title="NAME OF THE EVENT">Assistant Professor</td> */}
						<td data-title="NAME OF EXPERTS">
						BITS PILANI HYD
						</td>
					</tr>
					<tr>
						<td data-title="DATE">Pragati Shrivastava</td>
						{/* <td data-title="NAME OF THE EVENT">Assistant Professor </td> */}
						<td data-title="NAME OF EXPERTS">
						BITS PILANI HYD{" "}
						</td>
					</tr>
					<tr>
						<td data-title="DATE">Sameera Muhamed Salam</td>
						{/* <td data-title="NAME OF THE EVENT">Assistant Professor</td> */}
						<td data-title="NAME OF EXPERTS">
						BITS PILANI HYD
						</td>
					</tr>
				</tbody>
				<br />
			</table>
		</div>
	);
}

export default OC;
