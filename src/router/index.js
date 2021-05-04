import { createWebHistory, createRouter } from "vue-router";
import MyApiIndex from "../views/MyApiIndex.vue";
import MyApiEdit from "../views/MyApiEdit.vue";
import MyApiList from "../views/MyApiList.vue";
import Settings from "../views/Settings.vue";
import Account from "../views/Account.vue";
import Login from "../views/Login.vue";
import Layout from "../views/Layout.vue";

const routes = [
  {
    path: "/login/",
    name: "login",
    component: Login,
  },
  {
    path: "/",
    name: "layout",
    component: Layout,
    children: [
      {
        path: "/",
        name: "myapi",
        component: MyApiIndex,
        redirect: { name: "myapi-list"},
        children: [
          {
            path: "/myapi/list",
            name: "myapi-list",
            component: MyApiList,
          },
          {
            path: "/myapi/edit/:id",
            name: "myapi-edit",
            component: MyApiEdit,
          },
        ]
      },
      {
        path: "/settings/",
        name: "settings",
        component: Settings,
      },
      {
        path: "/account/",
        name: "account",
        component: Account,
      },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;