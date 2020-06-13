import * as React from 'react';
import * as ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import './set-public-path';
const rootComponent: React.SFC = () => {
  return (<div>hello world</div>);
}
const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent,
});

export const bootstrap = reactLifecycles.bootstrap;
export const mount = reactLifecycles.mount;
export const unmount = reactLifecycles.unmount;