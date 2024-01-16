import React, { Fragment, useState } from "react";

const InputTodo = () => {
    const [description, setDescription] = useState(""); // description is the value, setDescription is the function to update the value, useState("") is the initial value

    return (
        <Fragment>
            <h1 className="text-center mt-5">Pern Todo List</h1>
            <form className="d-flex mt-5">
                <input
                    type="text"
                    className="form-control"
                    value={description}
                />
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    );
};

export default InputTodo;
