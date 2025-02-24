export const endpoints = {
  arxeology: "archaeologies/",

  arxeologyById: (id) => `archaeologies/${id}/`,

  arxeologyCatById: (id) => `archaeologies/${id}/categories/`,

  news: "/news",

  newsById: (id) => `/news/${id}/`,

  ashyo: "/archaeologies_type/",

  ashyoById: (id) => `archaeologies_type/${id}/items/`,

  ashyoByIdCat: (id) => `archaeologies_type/${id}/categories/`,

  ashyoByIdDetail: (id) => `items/${id}/`,

  museum: "/muzeylar",

  museumById: (id) => `/muzeylar/${id}/`,

  library: "/kutubxona",

  libraryById: (id) => `/kutubxona/${id}/`,

  olimlar: "/olimlar/",

  about: "/about/",
};
