import React, { Fragment, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes

const EditTodo = ({ todo }) => {
    // console.log(todo);
    const [description, setDescription] = useState(todo.description);

    // edit description function

    const updateDescription = async (e) => {
        try {
            e.preventDefault(); // Don't refresh the page
            const body = { description };
            await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });
            window.location = "/"; // Refresh the page when the response is received
            // console.log(response);
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-warning"
                data-toggle="modal"
                data-target={`#id${todo.todo_id}`}
                onClick={() => setDescription(todo.description)}
            >
                Edit
            </button>

            <div className="modal" id={`id${todo.todo_id}`} tabIndex={"-1"}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Edit Todo</h4>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                onClick={() => setDescription(todo.description)}
                            >
                                &times;
                            </button>
                        </div>

                        <div className="modal-body">
                            <input
                                type="text"
                                className="form-control"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>

                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-warning"
                                data-dismiss="modal"
                                onClick={(e) => updateDescription(e)}
                            >
                                Edit
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-dismiss="modal"
                                onClick={() => setDescription(todo.description)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

// PropTypes validation
EditTodo.propTypes = {
    todo: PropTypes.shape({
        todo_id: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        // Add more prop validations as needed
    }).isRequired,
};

export default EditTodo;
