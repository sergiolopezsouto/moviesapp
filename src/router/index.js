import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import MovieList from "../components/MovieList.vue";
import MovieInfo from "../components/MovieInfo.vue";
import NotFound from "../views/NotFound.vue";
import CreateMovie from "../components/CreateMovie.vue";
import UserLogin from "../components/UserLogin.vue";
import UserRegister from "../components/UserRegister.vue";
import UserProfile from "../components/UserProfile.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    // redirect: "/movies",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
  {
    path: "/movies",
    name: "Movies",
    component: MovieList,
  },
  {
    path: "/movies/:movieId",
    name: "MovieInfo",
    component: MovieInfo,
  },
  {
    path: "/create",
    name: "Create",
    component: CreateMovie,
  },
  {
    path: "/register",
    name: "Register",
    component: UserRegister,
  },
  {
    path: "/login",
    name: "Login",
    component: UserLogin,
  },
  {
    path: "/profile",
    name: "Profile",
    component: UserProfile,
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
