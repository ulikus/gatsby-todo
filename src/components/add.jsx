import React from "react";
import PropTypes from "prop-types";
import {default as UUID} from "node-uuid";
import styled from "@emotion/styled"

const Add = styled.div`
    margin-bottom: 1.5rem;
    overflow: hidden;
    display: flex !important;
`;

const AddInput = styled.input`
    width: 100%;
    font-weight: 400;
    display: block;
    padding: 1rem 1.5rem;
    font-size: 1rem;
    line-height: 1;
    color: #495057;
    background-color: #ffffff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 2px;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

const AddButton = styled.button`
    font-weight: 700!important;
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
    font-size: 0.875rem;
    line-height: 1;
    font-weight: 400;
    padding: .7rem 1.5rem;
    border-radius: 0.1275rem
`;


class TodoAdd extends React.Component
{
    state = {
        newItem: ""
    };

    handleInputChange = event => {
        const { target: { name:name, value:value } } = event;
        this.setState({
            [name]: value,
        })
    };
    addNewItem = () => {
        this.props.submitItem({title: this.state.newItem, id: UUID.v4(), done: false});
        this.setState({
            newItem: '',
        })
    };

    keyPressed = (event) => {
        if (event.key === "Enter") {
            this.addNewItem()
        }
    };

    render() {
        return (
            <Add>
                <AddInput type="text"
                   placeholder="What do you need to do today?"
                   name="newItem"
                   value={this.state.newItem}
                   onChange={this.handleInputChange}
                   onKeyPress={this.keyPressed}
                />
                <AddButton className="btn" onClick={this.addNewItem}>Add</AddButton>
            </Add>
        )
    }

}

TodoAdd.propTypes = {
    submitItem: PropTypes.func.isRequired,
};

export default TodoAdd;