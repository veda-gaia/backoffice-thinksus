export const environment = {
  production: false,

  api: {
    // path: 'https://thinksus-api.com',
    path: "http://localhost:6001",
    // path: 'https://hom.thinksus-api.com',
  },

  encrypt_key: "5e99d833-bcfa-411e-ad92-97686ca6890c",
  socket: {
    notification: {
      host: "",
      path: "/socket/notification",
    },
  },
};
