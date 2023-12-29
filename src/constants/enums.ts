enum APPROUTES {
  HOME = 'Home',
  CART = 'Cart',
  DETAILS = 'Details',
  CATEGORIES = 'Categories',
  FAVOURITE = 'favourite',
  MORE = 'More',
  HOMESTACK = 'HomeStack',
}

enum EReqMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
}

enum CONSTANTS {
  GENERIC_ERR_MSG = 'Something Went Wrong!!',
  SERVER_RESOURCE_NOT_FOUND = 'System under maintenance!',
}

export { APPROUTES, EReqMethod, CONSTANTS };
