import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "../Buttons";
import Section from "../../../Common/Section";
import Header from "../../../Common/Header";
import { Container } from "../../../Common/Container";
import Search from "./Search";
import FetchExampleTasksButton from "./FetchExampleTasksButton";

function TasksPage() {
    return (
        <Container>
            <Header title="Lista zadań" />
            <Section
                title="Dodaj  zadanie"
                body={<Form />}
                extraHeaderContent={<FetchExampleTasksButton />}
            />
            <Section title="Wyszukiwarka" body={<Search />} />
            <Section
                title="Lista zadań"
                body={<TasksList />}
                extraHeaderContent={<Buttons />}
            />
        </Container>
    );
}

export default TasksPage;
