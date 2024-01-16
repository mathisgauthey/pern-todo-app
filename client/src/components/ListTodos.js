import React, { Fragment, useEffect, useState } from "react";
// useEffect make a fetch request to our restful apis each time this component is rendered

const ListTodos = () => {
    return (
        <Fragment>
            {" "}
            <table class="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>john@example.com</td>
                    </tr>*/}
                </tbody>
            </table>
        </Fragment>
    );
};

export default ListTodos;
