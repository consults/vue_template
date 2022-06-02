import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: "myStorage",
  storage: localStorage,
});

export default new Vuex.Store({
  state: {
    auth: {
      user: null,
      token: null,
    },
    url: {
      user: {
        auth: "api/user/auth",
      },
      home: {
        status: "/api/index/status",
      },
      project: {
        index: "/api/project/index",
        create: "/api/project/create",
        upload: "/api/project/upload",
        clone: "/api/project/clone",
        remove: "/api/project/{name}/remove",
        build: "/api/project/{name}/build",
        configure: "/api/project/{name}/configure",
        generate: "/api/project/{name}/generate",
        parse: "/api/project/{name}/parse",
        tree: "/api/project/{name}/tree",
        fileRead: "/api/project/file/read",
        fileUpdate: "/api/project/file/update",
        fileDelete: "/api/project/file/delete",
        fileRename: "/api/project/file/rename",
        fileCreate: "/api/project/file/create",
      },
      task: {
        index: "/api/task",
        create: "/api/task/create",
        info: "/api/task/{id}/info",
        update: "/api/task/{id}/update",
        remove: "/api/task/{id}/remove",
        status: "/api/task/{id}/status",
      },
      client: {
        index: "/api/client",
        show: "/api/client/{id}",
        status: "/api/client/{id}/status",
        update: "/api/client/{id}/update",
        remove: "/api/client/{id}/remove",
        create: "/api/client/create",
        projects: "/api/client/{id}/projects",
        listSpiders: "/api/client/{id}/project/{project}/spiders",
        startSpider: "/api/client/{id}/project/{project}/spider/{spider}",
        listJobs: "/api/client/{id}/project/{project}/jobs",
        getLog:
          "/api/client/{id}/project/{project}/spider/{spider}/job/{job}/log/{random}",
        cancelJob: "/api/client/{id}/project/{project}/job/{job}/cancel",
        projectVersion: "/api/client/{id}/project/{name}/version",
        projectDeploy: "/api/client/{id}/project/{name}/deploy",
      },
      util: {
        render: "/api/render",
      },
    },
  },
  mutations: {
    // auth
    setToken(state, token) {
      state.auth.token = token;
    },
    clearToken(state) {
      state.auth.token = null;
    },
    // user
    setUser(state, user) {
      state.auth.user = user;
    },
    clearUser(state) {
      state.auth.user = null;
    },
  },
  getters: {
    token: (state) => {
      return state.auth.token;
    },
    user: (state) => {
      return state.auth.user;
    },
  },
  plugins: [vuexPersist.plugin],
});
