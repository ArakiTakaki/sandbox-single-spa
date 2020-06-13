import { registerApplication, start } from 'single-spa';

registerApplication({
  name: 'page1',
  app: (() => System.import('page1') as any),
  activeWhen: '/page1',
});
registerApplication({
  name: 'page2',
  app: (() => System.import('page2') as any),
  activeWhen: '/page2',
});

start();
