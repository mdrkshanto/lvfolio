import fHome from '../components/frontEnd/Home/index.vue'
import fAbout from '../components/frontEnd/About/index'
import fResume from '../components/frontEnd/Resume/index'
import fSkills from '../components/frontEnd/Skills/index'
import fContact from '../components/frontEnd/Contact/index'
import adminHome from '../components/backEnd/Home/index'
import addHome from '../components/backEnd/Home/includes/add'
import editHome from '../components/backEnd/Home/includes/edit'
export const routes = [
    {
        path: '/',
        name: 'fHome',
        meta: 'Home',
        component: fHome
    },
    {
        path: '/about',
        name: 'fAbout',
        meta: 'About',
        component: fAbout
    },
    {
        path: '/resume',
        name: 'fResume',
        meta: 'Resume',
        component: fResume
    },
    {
        path: '/skills',
        name: 'fSkills',
        meta: 'Skills',
        component: fSkills
    },
    {
        path: '/contact',
        name: 'fContact',
        meta: 'Contact',
        component: fContact
    },
    {
        path: '/admin',
        name: 'admin',
        meta: 'Login',
        // component: Admin
    },
    {
        path: '/homepage',
        name: 'homePage',
        meta: 'Home page contents',
        component: adminHome
    },
    {
        path: '/add-home',
        name: 'addHome',
        meta: 'Add home page contents',
        component: addHome
    },
    {
        path: '/edit-home:id',
        name: 'editHome',
        meta: 'Edit home page contents',
        component: editHome
    },
]
