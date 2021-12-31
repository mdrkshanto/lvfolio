import fHome from '../components/frontEnd/Home/index'
import fAbout from '../components/frontEnd/About/index'
import fResume from '../components/frontEnd/Resume/index'
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
]
