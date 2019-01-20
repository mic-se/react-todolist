import React from 'react';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class TodoListItem extends React.Component {
  render() {
    const {
      item,
      store: { removeItem }
    } = this.props;
    return (
      <tr>
        <td>
          <Link to={`/edit/${item._id}`}>
            <i className="edit icon big" />
          </Link>
        </td>
        <td>{item.name}</td>
        <td>{item.content}</td>
        <td>{item.isDone ? <i className="check icon big" /> : <i className="x icon big" />}</td>
        <td>
          <span
            onClick={() => {
              return removeItem(item);
            }}
          >
            <i className="trash icon big" />
          </span>
        </td>
      </tr>
    );
  }
}

export default TodoListItem;
