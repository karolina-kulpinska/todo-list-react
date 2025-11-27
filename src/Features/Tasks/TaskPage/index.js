import Section from "../../../Common/Section";
import Header from ".../../../Common/Header";
import { Container } from "../../../Common/Container";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";

function TaskPage() {
    const { id } = useParams();
    const task = useSelector((state) => getTaskById(state, id));

    return (
        <Container>
            <Header title="Szczegóły zadania" />
            <Section
                title={task ? task.content : "Nie znaleziono zadania 😕"}
                body={
                    task ? <strong>Ukończono: {task.done ? "Tak" : "Nie"}</strong> : null
                }
            />
        </Container>
    );
}

export default TaskPage;
