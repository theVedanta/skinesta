import styles from "@/styles/schedule.module.css";

const ScheduleItem = ({ task, time }) => {
    return (
        <li>
            <span>
                <h3 className={styles.scheduleName}>{task.name}</h3>
                <p className={styles.scheduleDate}>
                    {time < 8 ? `${time} : 00 AM` : `${time - 12} : 00 PM`}
                </p>
            </span>
        </li>
    );
};

const ScheduleContainer = ({ scheduleData, containerStyle }) => {
    return (
        <>
            <ul className={styles.scheduleContainer} style={containerStyle}>
                {Object.keys(scheduleData.tasks).map((time, i) => {
                    return (
                        <li key={i}>
                            <p className={styles.scheduleDay}>
                                {time < 12
                                    ? "Morning"
                                    : time > 20
                                    ? "Evening"
                                    : "Afternoon"}
                            </p>
                            <ul className={styles.scheduleItems}>
                                {scheduleData.tasks[time].map((task, i) => (
                                    <ScheduleItem
                                        task={task}
                                        time={time}
                                        key={i}
                                    />
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
