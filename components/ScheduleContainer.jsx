import styles from "@/styles/schedule.module.css";

const ScheduleItem = ({ name, time }) => {
	return (
		<li>
			<span>
				<h3 className={styles.scheduleName}>{name}</h3>
				<p className={styles.scheduleDate}>{time}</p>
			</span>
		</li>
	);
};

const ScheduleContainer = ({ scheduleData }) => {
	return (
		<>
			<ul className={styles.scheduleContainer}>
				{scheduleData.map((scheduleData, i) => {
					return (
						<li key={i}>
							<p className={styles.scheduleDay}>
								{scheduleData.date}
							</p>
							<ul className={styles.scheduleItems}>
								{scheduleData.data.map((data, i) => (
									<ScheduleItem {...data} key={i} />
								))}
							</ul>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default ScheduleContainer;
