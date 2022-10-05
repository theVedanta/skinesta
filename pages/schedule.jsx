import Container from "components/Container";
import styles from "@/styles/schedule.module.css";
import Calendar from "react-calendar";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import ScheduleContainer from "components/ScheduleContainer";
import { scheduleData } from "data/ScheduleData";

const schedule = () => {
	const [value, onChange] = useState(new Date());
	return (
		<>
			<Container>
				<h2 className={styles.title}>Your Schedule</h2>
				<Calendar onChange={onChange} value={value} />
				<ScheduleContainer scheduleData={scheduleData} />
			</Container>
		</>
	);
};

export default schedule;
