import AdminComponent from "../Components/AdminComponent";
import DashboardComponent from "../Components/DashboardComponent";
import LoginComponent from "../Components/LoginComponent";

type allowedRouteType = 'admin' | 'user' | 'guest';

type pathTypes = '/admin' | '/dashboard' | '/login';
interface roleType {
    path: pathTypes;
    component: any;
    allowedRoles: allowedRouteType[];
}

export const routes:roleType[] = [
    {
        path: "/admin",
        component: AdminComponent,
        allowedRoles: [`admin`]
    },
    {
        path: '/dashboard',
        component: DashboardComponent,
        allowedRoles: ["admin", "user"]
    },
    {
        path: '/login',
        component: LoginComponent,
        allowedRoles: ['guest', 'admin', 'user']
    }
]