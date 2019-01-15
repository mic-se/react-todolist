import React from 'react';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class TodoListItem extends React.Component {
  render() {
    const { item, store } = this.props;
    const { removeItem } = store;
    return (
      <tr>
        <td>
          <input
            type="text"
            name="name"
            value={item.name}
            onChange={(e) => { (item.name = e.target.value); }}
          />
        </td>
        <td>
          <textarea
            name="content"
            onChange={(e) => { (item.content = e.target.value); }}
            value={item.content}
          />
        </td>
        <td>
          <input
            type="checkbox"
            name="isDoneEdit"
            defaultChecked={item.isDone}
            onChange={(e) => { (item.isDone = e.target.checked); }}
          />
        </td>
        <td>
          <button
            type="button"
            className="ui button primary"
            onClick={() => { removeItem(item); }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default TodoListItem;
