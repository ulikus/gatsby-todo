import React from "react"
import "./index.css"
import Layout from "../components/layout";
import TodoList from "../components/list";
import TodoItem from "../components/item";
import TodoAdd from "../components/add";
import styled from "@emotion/styled"

const Note = styled.p`
  margin: 2rem;
`;

class FifthPage extends React.Component {
    state = {items:[]};

    componentDidUpdate() {
        localStorage.setItem('todoList', JSON.stringify(this.state.items));
    }

    constructor(props) {
        super(props);
        const windowGlobal = typeof window !== 'undefined' && window;
        const jsonItems = windowGlobal && JSON.parse(windowGlobal.localStorage.getItem('todoList') || '[]');
        const items =  jsonItems && jsonItems.length?jsonItems:[
            {id: 0, title: "Done. Example", done: true},
        ];
        this.state = {
            items: items
        }
    }

    handleAdd = item => {
        this.state.items.push(item);
        this.setState({items:this.state.items})
    };

    handleRemove = id => {
        const index = this.state.items.findIndex((item) => item.id===id);
        this.state.items.splice(index, 1);
        this.setState({items:this.state.items})
    };

    handleChange = item => {
        this.state.items.forEach((data, index) => {
            if (data.id===item.id) {
                this.state.items[index].done = item.done;
            }
        });
        this.setState({items:this.state.items})
    };

    render() {
        return (<Layout>
            <h4>Offline capable, personal, persistent todo list</h4>
            <TodoAdd submitItem={this.handleAdd}/>
            <TodoList>
                {this.state.items.map(item=>
                    <TodoItem key={item.id} data={item} removeItem={this.handleRemove} changeItem={this.handleChange}/>
                )}
            </TodoList>
            <Note>This demo shows data persistence in your browser and offline availability, so you can use it without active internet connection.</Note>
        </Layout>)
    }

}

FifthPage.propTypes = {
    // children: PropTypes.node.isRequired,
}

export default FifthPage
