import DashboardLayout from '../layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../pages/NotFoundPage.vue'

// Admin pages
import Input from 'src/pages/Input.vue'
import Output from 'src/pages/Output.vue'
import History from 'src/pages/History.vue'
import Adjust from 'src/pages/Adjust.vue'
import Product from 'src/pages/Product.vue'
import Data from 'src/pages/Data.vue'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/admin/input'
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/input',
    children: [
      {
        path: 'input',
        name: 'Input',
        component: Input
      },
      {
        path: 'output',
        name: 'Output',
        component: Output
      },
      {
        path: 'history',
        name: 'History',
        component: History
      },
      {
        path: 'adjust',
        name: 'Adjust',
        component: Adjust
      },
      {
        path: 'product',
        name: 'Product',
        component: Product
      },
      {
        path: 'data',
        name: 'Data',
        component: Data
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
