import DashboardLayout from '../layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../pages/NotFoundPage.vue'

// Admin pages
import DashBoard from 'src/pages/Dashboard/Dashboard.vue'
import Overview from 'src/pages/Overview.vue'
import UserProfile from 'src/pages/UserProfile.vue'
import TableList from 'src/pages/TableList.vue'
import Typography from 'src/pages/Typography.vue'
import Icons from 'src/pages/Icons.vue'
import Maps from 'src/pages/Maps.vue'
import Notifications from 'src/pages/Notifications.vue'
import Upgrade from 'src/pages/Upgrade.vue'
import Login from 'src/pages/Login/login.vue'
import Movies from 'src/pages/Movies/Movies.vue'
import Users from 'src/pages/Users/Users.vue'
import Theaters from 'src/pages/Theaters/Theaters.vue'
import Report from 'src/pages/Report/Report.vue'
import SessionsTable from 'src/pages/Report/SessionsList.vue'
import CommentsTable from 'src/pages/Report/CommentsList.vue'

const authGuard = () => (to,from,next) => {
  if (localStorage.getItem("token") || "") {
    next();
  } else {
    next("/");
  }
};

const routes = [
  {
    path: '/',
    component: Login,
  },
  {
    path: '/dashboard',
    component: DashBoard,
    beforeEnter: authGuard(),
  },
  {
    path: '/admin',
    component: DashboardLayout,
    beforeEnter: authGuard(),
    children: [
      {
        path: 'Movies',
        name: 'Movies',
        component: Movies,
        beforeEnter: authGuard(),
      },
      {
        path: 'Users',
        name: 'Users',
        component: Users,
        beforeEnter: authGuard(),
      },
      {
        path: 'Theaters',
        name: 'Theaters',
        component: Theaters,
        beforeEnter: authGuard(),
      },
      {
        path: 'Report',
        name: 'Report',
        component: Report,
        beforeEnter: authGuard(),
        children: [
          {
            path: 'SessionsTable',
            name: 'SessionsTable',
            component: SessionsTable,
            beforeEnter: authGuard(),
          },
          {
            path: 'CommentsTable',
            name: 'CommentsTable',
            component: CommentsTable,
            beforeEnter: authGuard(),
          }
        ]
      },
      {
        path: 'overview',
        name: 'Overview',
        component: Overview,
        beforeEnter: authGuard(),
      },
      {
        path: 'user',
        name: 'User',
        component: UserProfile,
        beforeEnter: authGuard(),
      },
      {
        path: 'table-list',
        name: 'Table List',
        component: TableList,
        beforeEnter: authGuard(),
      },
      {
        path: 'typography',
        name: 'Typography',
        component: Typography,
        beforeEnter: authGuard(),
      },
      {
        path: 'icons',
        name: 'Icons',
        component: Icons,
        beforeEnter: authGuard(),
      },
      {
        path: 'maps',
        name: 'Maps',
        component: Maps,
        beforeEnter: authGuard(),
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications,
        beforeEnter: authGuard(),
      },
      {
        path: 'upgrade',
        name: 'Upgrade to PRO',
        component: Upgrade,
        beforeEnter: authGuard(),
      }
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes