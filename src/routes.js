import React from 'react';

const SyntaxGenerator = React.lazy(() => import('./views/pages/syntaxGenerator/SyntaxGenerator'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const apiCredentials = React.lazy(() => import('./views/pages/apiCredentials/apiCredentials'));


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/tools/syntaxGenerator', name: 'Tools', component: SyntaxGenerator },
  { path: '/tools/apiCredentials', name: 'Tools', component: apiCredentials },
];

export default routes;
