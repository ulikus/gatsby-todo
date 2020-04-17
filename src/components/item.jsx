import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styled from "@emotion/styled";

const ListCheckbox = styled.inut`
    flex-direction: column-reverse !important;
    display: flex !important;
    box-sizing: border-box;
    padding: 0
`;

const TodoItem = ({ data, removeItem, changeItem }) => {

    const remove = () => {
        removeItem(data.id);
    };

    const change = () => {
        data.done = !data.done;
        changeItem(data);
    };

    const {title, done} = data;
    return (
        <li className={data.done && "completed" || ''}>
            <div className="form-check">
                <label className="form-check-label">
                    <ListCheckbox type="checkbox"
                           checked={done}
                           onChange={change}
                    />
                    {title}
                    <i className="input-helper"/>
                </label>
            </div>
            <FontAwesomeIcon icon={faTimes} className="remove" onClick={remove}/>
        </li>
    )
};
export default TodoItem;