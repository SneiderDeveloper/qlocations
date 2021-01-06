export default {
  //Product List
  countries: {
    permission: 'ilocations.countries.index',
    activated: true,
    path: '/locations/countries',
    name: 'qlocations.admin.countries.index',
    crud: import('@imagina/qlocations/_crud/countries'),
    page: () => import('@imagina/qcrud/_pages/admin/crudPage'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'qlocations.sidebar.adminCountries',
    icon: 'fas fa-globe-americas',
    authenticated: true,
    subHeader: {
      refresh: true
    }
  },
  provinces: {
    permission: 'ilocations.provinces.index',
    activated: true,
    path: '/locations/provinces',
    name: 'qlocations.admin.provinces.index',
    crud: import('@imagina/qlocations/_crud/provinces'),
    page: () => import('@imagina/qcrud/_pages/admin/crudPage'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'qlocations.sidebar.adminProvinces',
    icon: 'fas fa-globe-americas',
    authenticated: true,
    subHeader: {
      refresh: true
    }
  },
  //Cities
  cities: {
    permission: 'ilocations.cities.index',
    activated: true,
    path: '/locations/cities',
    name: 'qlocations.admin.cities.index',
    crud: import('@imagina/qlocations/_crud/cities'),
    page: () => import('@imagina/qcrud/_pages/admin/crudPage'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'qlocations.sidebar.adminCities',
    icon: 'fas fa-building',
    authenticated: true,
    subHeader: {
      refresh: true
    }
  },
  //City create
  cityCreate: {
    permission: null,
    activated: true,
    path: '/locations/cities/create',
    name: 'qlocations.admin.cities.create',
    page: () => import('@imagina/qlocations/_pages/admin/cities/form'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'qlocations.sidebar.adminCityCreate',
    icon: 'fas fa-building',
    authenticated: true,
  },
  //City edit
  cityEdit: {
    permission: null,
    activated: true,
    path: '/locations/cities/:id',
    name: 'qlocations.admin.cities.edit',
    page: () => import('@imagina/qlocations/_pages/admin/cities/form'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'qlocations.sidebar.adminCityEdit',
    icon: 'fas fa-building',
    authenticated: true,
  },
  //Polygons
  polygons: {
    permission: 'ilocations.polygons.index',
    activated: true,
    path: '/locations/polygons',
    name: 'qlocations.admin.polygons.index',
    crud : import('@imagina/qlocations/_crud/polygons'),
    page: () => import('@imagina/qcrud/_pages/admin/crudPage'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'qlocations.sidebar.adminPolygons',
    icon: 'fas fa-draw-polygon',
    authenticated: true,
  },
  //Polygon create
  polygonCreate: {
    permission: null,
    activated: true,
    path: '/locations/polygons/create',
    name: 'qlocations.admin.polygons.create',
    page: () => import('@imagina/qlocations/_pages/admin/polygons/form'),
    layout: () => import('@imagina/qlocations/_layouts/polygons.vue'),
    title: 'qlocations.sidebar.adminPolygonCreate',
    icon: 'fas fa-draw-polygon',
    authenticated: true,
  },
  //Polygon edit
  polygonEdit: {
    permission: null,
    activated: true,
    path: '/locations/polygons/:id',
    name: 'qlocations.admin.polygons.edit',
    page: () => import('@imagina/qlocations/_pages/admin/polygons/form'),
    layout: () => import('@imagina/qlocations/_layouts/polygons.vue'),
    title: 'qlocations.sidebar.adminPolygonEdit',
    icon: 'fas fa-draw-polygon',
    authenticated: true,
  },
  //Geozones
  geozones: {
    permission: 'ilocations.geozones.index',
    activated: true,
    path: '/locations/geozones',
    name: 'qlocations.admin.geozones.index',
    crud : import('@imagina/qlocations/_crud/geozones'),
    page: () => import('@imagina/qcrud/_pages/admin/crudPage'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'qlocations.sidebar.adminGeozones',
    icon: 'fas fa-map-marker-alt',
    authenticated: true,
  },
  //Geozone create
  geozoneCreate: {
    permission: null,
    activated: true,
    path: '/locations/geozones/create',
    name: 'qlocations.admin.geozones.create',
    page: () => import('@imagina/qlocations/_pages/admin/geozones/form'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'qlocations.sidebar.adminGeozoneCreate',
    icon: 'fas fa-map-marker-alt',
    authenticated: true,
  },
  //Geozone edit
  geozoneEdit: {
    permission: null,
    activated: true,
    path: '/locations/geozones/:id',
    name: 'qlocations.admin.geozones.edit',
    page: () => import('@imagina/qlocations/_pages/admin/geozones/form'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'qlocations.sidebar.adminGeozoneEdit',
    icon: 'fas fa-map-marker-alt',
    authenticated: true,
  },
  //Neighborhoods
  neighborhoods: {
    permission: 'ilocations.neighborhoods.index',
    activated: true,
    path: '/locations/neighborhoods',
    name: 'qlocations.admin.neighborhoods.index',
    crud : import('@imagina/qlocations/_crud/neighborhoods'),
    page: () => import('@imagina/qcrud/_pages/admin/crudPage'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'qlocations.sidebar.adminNeighborhoods',
    icon: 'fas fa-home',
    authenticated: true,
  },
  //Polygon create
  neighborhoodCreate: {
    permission: null,
    activated: true,
    path: '/locations/neighborhoods/create',
    name: 'qlocations.admin.neighborhoods.create',
    page: () => import('@imagina/qlocations/_pages/admin/neighborhoods/form'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'qlocations.sidebar.adminNeighborhoodCreate',
    icon: 'fas fa-home',
    authenticated: true,
  },
  //Polygon edit
  neighborhoodEdit: {
    permission: null,
    activated: true,
    path: '/locations/neighborhood/:id',
    name: 'qlocations.admin.neighborhoods.edit',
    page: () => import('@imagina/qlocations/_pages/admin/neighborhoods/form'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'qlocations.sidebar.adminNeighborhoodEdit',
    icon: 'fas fa-home',
    authenticated: true,
  },

}
