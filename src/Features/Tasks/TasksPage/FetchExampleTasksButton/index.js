import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectTasksState } from "../../tasksSlice";
import { Button } from "../Buttons/styled";

const GetExampleTasksButton = () => {
    const dispatch = useDispatch();
    const { loading } = useSelector(selectTasksState);

    const handleClick = () => {
        dispatch(fetchExampleTasks());

    };

    return (
        <Button onClick={handleClick} disabled={loading}>
            {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
        </Button>
    );
};

export default GetExampleTasksButton;
