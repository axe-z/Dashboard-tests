// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import Notifications from "@material-ui/icons/Notifications";

// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";

// import LocationOn from "@material-ui/icons/LocationOn";
// import Maps from "views/Maps/Maps.jsx";
// import Unarchive from "@material-ui/icons/Unarchive";
// import Language from "@material-ui/icons/Language";
// core components/views for RTL layout

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Patient Profiles",
    icon: "content_paste",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "Create Patient",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Appointement",
    icon: LibraryBooks,
    component: Typography,
    layout: "/admin"
  },

  {
    path: "/notifications",
    name: "Notifications",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Settings",
    icon: BubbleChart,
    component: Icons,
    layout: "/admin"
  }
];

export default dashboardRoutes;
