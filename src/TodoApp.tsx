import { TodoAdd, TodoList } from "./components";
import useTodo from "./hooks/useTodo";

const TodoApp = () => {
    const {
        todos,
        todosCount,
        pendingTodosCount,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
    } = useTodo();

    return (
        <div className="container">
            <h2>
                TodoApp: {todosCount}{" "}
                <small>pendientes: {pendingTodosCount}</small>
            </h2>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        onDeleteTodo={handleDeleteTodo}
                        onToggleTodo={handleToggleTodo}
                    />
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={handleNewTodo} />
                </div>
            </div>
        </div>
    );
};

export default TodoApp;
