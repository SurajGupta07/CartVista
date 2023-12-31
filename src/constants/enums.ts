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

enum CART_ACTIONS {
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  ADD_TO_WISHLIST = 'ADD_TO_WISHLIST',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST',
}

export { APPROUTES, EReqMethod, CONSTANTS, CART_ACTIONS };
