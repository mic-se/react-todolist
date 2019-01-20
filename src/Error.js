import React from 'react';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class Error extends React.Component {
  render() {
    const {
      store: { error }
    } = this.props;
    return (
      <div>
        {error && (
          <div className="ui negative message">
            <i className="close icon" />
            <div className="header">Error</div>
            <p>{error}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Error;
