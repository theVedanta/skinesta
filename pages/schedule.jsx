import Container from "components/Container";
import styles from "@/styles/schedule.module.css";
import Calendar from "react-calendar";
import { useState, useEffect } from "react";
import "react-calendar/dist/Calendar.css";
import BASE_API_URL from "../constants";
import ScheduleContainer from "components/ScheduleContainer";
import Protected from "components/Protected";

const Schedule = ({ user, authed }) => {
    const [value, onChange] = useState(new Date());
    const [scheduleData, setScheduleData] = useState({});

    useEffect(() => {
        const getSched = async () => {
            const scheduleJson = await fetch(
                `${BASE_API_URL}/shop/schedule?id=${user._id}`
            );
            let schedule = await scheduleJson.json();
            schedule = schedule.schedule;

            schedule !== undefined
                ? setScheduleData(schedule)
                : (window.location.href = "/upload");
        };

        getSched();
    }, [user._id, user]);

    return (
        <Protected authed={authed}>
            <Container>
                <h2 className={styles.title}>Your Schedule</h2>
                <Calendar onChange={onChange} value={value} />
                {scheduleData && (
                    <ScheduleContainer scheduleData={scheduleData} />
                )}
            </Container>
        </Protected>
    );
};

export default Schedule;
