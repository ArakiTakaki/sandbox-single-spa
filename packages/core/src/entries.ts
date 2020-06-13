import { registerApplication, start } from 'single-spa';

registerApplication({
  name: 'page1',
  app: (() => System.import('page1') as any),
  activeWhen: '/',
});

start();
