interface IPage {
  path: string;
  name: string;
}

const mainPages: Record<string, IPage> = {
  home: {
    path: "/",
    name: "Home",
  },
  carsCatalog: {
    path: "/cars-catalog",
    name: "Cars Catalog",
  },
  about: {
    path: "/about",
    name: "About",
  },
};

const otherPages = {
  carDetails: {
    path: `${mainPages.carsCatalog.path}/car-details`,
    name: "Car Details",
  },
};

export { mainPages, otherPages };

