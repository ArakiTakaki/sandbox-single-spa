import { registerApplication, start } from 'single-spa';

registerApplication({
  name: '@mf-dog/navbar',
  app: (() => System.import('@mf-dog/navbar') as any),
  activeWhen: '/',
});

registerApplication({
  name: '@mf-dog/dogs-dashboard',
  app: (() => System.import('@mf-dog/dogs-dashboard') as any),
  activeWhen: '/view-doggos',
});

registerApplication({
  name: '@mf-dog/rate-dogs',
  app: (() => System.import('@mf-dog/rate-dogs') as any),
  activeWhen: '/rate-doggos',
});

registerApplication({
  name: '@mf-dog/about',
  app: (() => System.import('@mf-dog/about') as any),
  activeWhen: '/about',
});

start();