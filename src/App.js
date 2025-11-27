import TasksPage from "./Features/Tasks/TasksPage";
import TaskPage from "./Features/Tasks/TaskPage";
import AuthorPage from "./Features/Author/author";
import Navigation from "./Navigation";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { toAuthor, toTask, toTasks } from "./routes";

const App = () => (
    <HashRouter>
        <Navigation />
        <Switch>
            <Route path={toTask()}>
                <TaskPage />
            </Route>
            <Route path={toTasks()}>
                <TasksPage />
            </Route>
            <Route path={toAuthor()}>
                <AuthorPage />
            </Route>
            <Route>
                <Redirect to={toTasks()} />
            </Route>
        </Switch>
    </HashRouter>
);

export default App;
