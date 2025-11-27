import { all } from "redux-saga/effects";
import { tasksSaga } from "./Features/Tasks/tasksSaga";

export default function* rootSaga() {
    yield all([tasksSaga()]);
}
