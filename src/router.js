import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Works from './pages/Works.vue';
import Skill from './pages/Skill.vue';
import Contact from './pages/Contact.vue';
const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/about",
            name: "About",
            component: About
        },
        {
            path: "/works",
            name: "Works",
            component: Works
        },
        {
            path: "/skill",
            name: "Skill",
            component: Skill
        },
        {
            path: "/contact",
            name: "Contact",
            component: Contact
        },
    ]
});
router.replace({ path: '', redirect: '/' })
export default router;