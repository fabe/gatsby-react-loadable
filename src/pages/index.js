import React, { PureComponent } from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('../components/heavy'),
  loading() {
    return <div>Loading... (rendered from the server)</div>;
  },
});

export default class extends PureComponent {
  render() {
    return <LoadableComponent />;
  }
}
