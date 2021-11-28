import Vue from 'vue'
import VueRouter from 'vue-router'
import { canNavigate } from "@/libs/acl/routeProtection";
import { isUserLoggedIn, getHomeRouteForLoggedInUser } from "@/auth/utils";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    base: "/",
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
    routes: [
        {
            path: "/",
            name: "dashboard",
            component: () => import("@/views/Dashboard.vue"),
            meta: {
                pageTitle: "Dashboard",
                breadcrumb: [
                    {
                        text: "Dashboard",
                        active: true,
                    },
                ],
            },
        },
        {
            path: "/home",
            name: "home",
            component: () => import("@/views/Home.vue"),
            meta: {
                pageTitle: "Home",
                breadcrumb: [
                    {
                        text: "Home",
                        active: false,
                    },
                ],
            },
        },
        {
            path: "/second-page",
            name: "second-page",
            component: () => import("@/views/SecondPage.vue"),
            meta: {
                pageTitle: "Second Page",
                breadcrumb: [
                    {
                        text: "Second Page",
                        active: true,
                    },
                ],
            },
        },
        {
            path: "/login",
            name: "login",
            component: () => import("@/views/Login.vue"),
            meta: {
                layout: "full",
                resource: "Auth",
                redirectIfLoggedIn: true,
            },
        },
        {
            path: "/error-404",
            name: "error-404",
            component: () => import("@/views/error/Error404.vue"),
            meta: {
                layout: "full",
            },
        },
        {
            path: "*",
            redirect: "error-404",
        },
    ],
});

router.beforeEach((to, _, next) => {
    const isLoggedIn = isUserLoggedIn();
    console.log("LOGGED-IN STATUS", isLoggedIn);

    if (!canNavigate(to)) {
        // Redirect to login if not logged in
        if (!isLoggedIn) return next({ name: "login" });

        // If logged in => not authorized
        return next({ name: "misc-not-authorized" });
    }

    // Redirect if logged in
    if (to.meta.redirectIfLoggedIn && isLoggedIn) {
        const userData = getUserData();
        next("/");
    }

    return next();
});

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

export default router
