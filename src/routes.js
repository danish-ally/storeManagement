import React from "react";

const SyntaxGenerator = React.lazy(() =>
  import("./views/pages/syntaxGenerator/SyntaxGenerator")
);
const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const apiCredentials = React.lazy(() =>
  import("./views/pages/apiCredentials/apiCredentials")
);
const brokerSymbol = React.lazy(() =>
  import("./views/pages/brokerSymbol/BrokerSymbol")
);
const contactData = React.lazy(() =>
  import("./views/pages/contactdata/ContactData")
);

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/tools/syntaxGenerator", name: "Tools", component: SyntaxGenerator },
  { path: "/tools/apiCredentials", name: "Tools", component: apiCredentials },
  { path: "/tools/brokerSymbol", name: "Tools", component: brokerSymbol },
  { path: "/extra/contactData", name: "Tools", component: contactData },
];

export default routes;
