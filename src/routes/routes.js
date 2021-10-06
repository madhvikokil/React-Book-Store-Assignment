export const routes = [
    {
        name: "home",
        path: "/",
        componentPath: "homePage",
        component: "HomePage",
        authRoute: false,
        isExact: true,
        roles: []
    },
    {
        name: "signin",
        path: "/signin",
        componentPath: "login",
        component: "Login",
        authRoute: false,
        isExact: false,
        roles: []
    },
    {
        name: "signup",
        path: "/signup",
        componentPath: "signup",
        component: "Signup",
        authRoute: false,
        isExact: false,
        roles: []
    },
    {
        name: "dasboard",
        path: "/dashboard",
        componentPath: "dashboard",
        component: "Dashboard",
        authRoute: true,
        isExact: true,
        roles: ['admin', 'seller', 'customer']
    },
    {
        name: "order",
        path: "/order",
        componentPath: "order",
        component: "Order",
        authRoute: true,
        isExact: false,
        roles: []
    },
    {
        name: "userList",
        path: "/dashboard/users",
        componentPath: "userList",
        component: "UsersList",
        authRoute: true,
        isExact: false,
        roles: ['admin']
    },
    {
        name: "bookList",
        path: "/dashboard/books",
        componentPath: "bookList",
        component: "BookList",
        authRoute: true,
        isExact: true,
        roles: ['admin', 'seller' ]
    },
    {
        name: "addBook",
        path: "/dashboard/books/:id",
        componentPath: "addBook",
        component: "AddBook",
        authRoute: true,
        isExact: false,
        roles: ['admin', 'seller', 'customer']
    },
    {
        name: "my-orders",
        path: "/dashboard/my-orders",
        componentPath: "myOrders",
        component: "MyOrders",
        authRoute: true,
        isExact: false,
        roles: ['admin', 'seller', 'customer']
    },
    {
        name: "addBook",
        path: "/dashboard/create",
        componentPath: "addBook",
        component: "AddBook",
        authRoute: true,
        isExact: false,
        roles: ['admin', 'seller', 'customer']
    },
]