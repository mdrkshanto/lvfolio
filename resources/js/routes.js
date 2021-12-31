import fHome from '../components/frontEnd/Home/index'
import fAbout from '../components/frontEnd/About/index'
import fResume from '../components/frontEnd/Resume/index'
import fSkills from '../components/frontEnd/Skills/index'
import fContact from '../components/frontEnd/Contact/index'
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
]
