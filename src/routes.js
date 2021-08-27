import React from 'react';

const SyntaxGenerator = React.lazy(() => import('./views/pages/syntaxGenerator/SyntaxGenerator'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/tools', name: 'Tools', component: SyntaxGenerator },
];

export default routes;
