import React from "react";
import styles from "../styles/Home.module.css";
function OC() {
	return (
		<div className={styles.wrapper}>
			<table className={styles.table}>
                <thead className={styles.head}>
                <tr>
						<td data-title="DATE">Name</td>
						<td data-title="NAME OF THE EVENT">Position </td>
						<td data-title="NAME OF EXPERTS">Organization</td>
					</tr>
                </thead>
				<tbody>
					<tr>
						<td data-title="DATE">Dr Rajesh K Shukla</td>
						<td data-title="NAME OF THE EVENT">Chair </td>
						<td data-title="NAME OF EXPERTS">Bhopal ACM Chapter</td>
					</tr>
					<tr>
						<td data-title="DATE">Prof Atul Barve </td>
						<td data-title="NAME OF THE EVENT">Head </td>
						<td data-title="NAME OF EXPERTS">
							Department of Computer Science and Engineering{" "}
						</td>
					</tr>
					<tr>
						<td data-title="DATE">Prof Pratik Buchke</td>
						<td data-title="NAME OF THE EVENT">Head </td>
						<td data-title="NAME OF EXPERTS">
							Department of Information Technology{" "}
						</td>
					</tr>
					<tr>
						<td data-title="DATE">Prof Harita Bhargava</td>
						<td data-title="NAME OF THE EVENT">
							Faculty Sponsor (OIST ACM Student Chapter){" "}
						</td>
						<td data-title="NAME OF EXPERTS">
							Department of Computer Science and Engineering{" "}
						</td>
					</tr>
					<tr>
						<td data-title="DATE">Prof Swati Pandey</td>
						<td data-title="NAME OF THE EVENT">Assistant Professor </td>
						<td data-title="NAME OF EXPERTS">
							Department of Information Technology
						</td>
					</tr>
					<tr>
						<td data-title="DATE">Prof Akansha Meshram</td>
						<td data-title="NAME OF THE EVENT">Assistant Professor </td>
						<td data-title="NAME OF EXPERTS">
							Department of Information Technology
						</td>
					</tr>
					<tr>
						<td data-title="DATE">Prof Bhavna Choubey</td>
						<td data-title="NAME OF THE EVENT">Assistant Professor</td>
						<td data-title="NAME OF EXPERTS">
							Department of Computer Science and Engineering
						</td>
					</tr>
					<tr>
						<td data-title="DATE">Prof Meenakshi Pate</td>
						<td data-title="NAME OF THE EVENT">Assistant Professor </td>
						<td data-title="NAME OF EXPERTS">
							Department of Computer Science and Engineering{" "}
						</td>
					</tr>
					<tr>
						<td data-title="DATE">Prof Manjari Rathor</td>
						<td data-title="NAME OF THE EVENT">Assistant Professor</td>
						<td data-title="NAME OF EXPERTS">
							Department of Computer Science and Engineering
						</td>
					</tr>
				</tbody>
				<br />
			</table>
		</div>
	);
}

export default OC;
