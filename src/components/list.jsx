import React from "react";
import styled from "@emotion/styled"

const List = styled.ul`
    flex-direction: column-reverse !important
    display: flex !important
`;

const TodoList = ({ children, submitItem}) => (
    <div className="list-wrapper">
        <List>
            {children}
        </List>
    </div>
)

export default TodoList;