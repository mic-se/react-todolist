import React from 'react';
import TodoListItem from './TodoListItem';

class TodoList extends React.Component {
  onChangeItem = (item) => {
    const { onChangeItem } = this.props;
    onChangeItem(item);
  };

  onDeleteItem = (name) => {
    const { onDeleteItem } = this.props;
    onDeleteItem(name);
  };

  renderItems() {
    const { items } = this.props;
    return items.map((item) => {
      return (
        <TodoListItem
          key={item.name}
          item={item}
          onChangeItem={this.onChangeItem}
          onDeleteItem={this.onDeleteItem}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <table className="ui fixed table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Content</th>
              <th>Done?</th>
              <th />
            </tr>
          </thead>
          <tbody>{this.renderItems()}</tbody>
        </table>
      </div>
    );
  }
}

export default TodoList;
