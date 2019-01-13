import React from 'react';

class TodoListItem extends React.Component {
  onChangeDone = (e) => {
    const { item, onChangeItem } = this.props;

    const newValues = {
      isDone: e.target.value
    };
    const merged = { ...item, ...newValues };
    onChangeItem(merged);
  };

  onDeleteItem = () => {
    const { item, onDeleteItem } = this.props;
    onDeleteItem(item.name);
  };

  render() {
    const { item } = this.props;
    return (
      <tr>
        <td>{item.name}</td>
        <td>{item.content}</td>
        <td>
          <input
            type="checkbox"
            name="isDoneEdit"
            defaultChecked={item.isDone}
            onChange={this.onChangeDone}
          />
        </td>
        <td>
          <button
            type="button"
            className="ui button primary"
            onClick={this.onDeleteItem}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default TodoListItem;
