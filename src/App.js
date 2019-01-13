import React from 'react';
import TodoList from './TodoList';
import TodoCreate from './TodoCreate';
import Error from './Error';
import './App.css';

class App extends React.Component {
  state = {
    items: [
      {
        name: 'test1',
        content: 'test content1',
        isDone: false
      },
      {
        name: 'test2',
        content: 'test content2',
        isDone: true
      }
    ],
    error: ''
  };

  handleAddTodo = (item) => {
    this.setState({
      error: ''
    });

    const { items } = this.state;

    const found = items.find((element) => {
      return element.name === item.name;
    });

    if (found !== undefined) {
      this.setState({
        error: 'name exists'
      });
      return;
    }

    this.setState({
      items: [...items, item]
    });
  };

  handleOnChangeDone = (newItem) => {
    this.setState((state) => {
      const items = state.items.map((item) => {
        if (item.name === newItem.name) {
          return newItem;
        }

        return item;
      });

      return {
        items
      };
    });
  };

  handleOnDeleteItem = (name) => {
    this.setState((state) => {
      const items = state.items.filter((item) => {
        return name !== item.name;
      });

      return {
        items
      };
    });
  };

  handleError = (item) => {
    this.setState({
      error: item.error
    });
  };

  renderError() {
    const { error } = this.state;
    if (error) {
      return <Error error={error} />;
    }

    return <div />;
  }

  render() {
    const { items } = this.state;
    return (
      <div className="task-container">
        {this.renderError()}
        <TodoCreate onAddTodo={this.handleAddTodo} onError={this.handleError} />
        <hr />
        <TodoList
          items={items}
          onChangeItem={this.handleOnChangeDone}
          onDeleteItem={this.handleOnDeleteItem}
        />
      </div>
    );
  }
}

export default App;
