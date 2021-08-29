import React from "react";
import CIcon from "@coreui/icons-react";

const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Components"],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Tools",
    route: "/tools",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Syntax Generator",
        to: "/tools/syntaxGenerator",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Api Credentials",
        to: "/tools/apiCredentials",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Broker Symbol",
        to: "/tools/BrokerSymbol",
      },
    ],
  },
  {
    _tag: "CSidebarNavDivider",
  },
];

export default _nav;
