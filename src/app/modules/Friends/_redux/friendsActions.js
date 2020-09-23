import * as requestFromServer from './friendsCrud';
import {friendsSlice, callTypes} from './friendsSlice';

const {actions} = friendsSlice;

export const fetchFriends = type => dispatch => {
  dispatch(actions.startCall({callType: callTypes.list}));

  return requestFromServer
    .GetContacts(type)
    .then(response => {
      console.log('response');
      console.log(response);
      //const {totalCount, entities} = response.data;
      const entities = response.data.data;
      const totalCount = response.data.meta.total;
      dispatch(actions.friendsFetched({totalCount, entities}));
    })
    .catch(error => {
      error.clientMessage = "Can't find friends";
      dispatch(actions.catchError({error, callType: callTypes.list}));
    });
};

export const fetchProduct = id => dispatch => {
  if (!id) {
    return dispatch(actions.productFetched({productForEdit: undefined}));
  }

  dispatch(actions.startCall({callType: callTypes.action}));
  return requestFromServer
    .getProductById(id)
    .then(response => {
      const product = response.data;
      dispatch(actions.productFetched({productForEdit: product}));
    })
    .catch(error => {
      error.clientMessage = "Can't find product";
      dispatch(actions.catchError({error, callType: callTypes.action}));
    });
};

export const huyKetBan = id => dispatch => {
  dispatch(actions.startCall({callType: callTypes.action}));
  return requestFromServer
    .huyKetBan(id)
    .then(response => {
      dispatch(actions.huyKetBaned({id}));
    })
    .catch(error => {
      error.clientMessage = "Không thể hủy kết bạn";
      dispatch(actions.catchError({error, callType: callTypes.action}));
    });
};

export const createProduct = productForCreation => dispatch => {
  dispatch(actions.startCall({callType: callTypes.action}));
  return requestFromServer
    .createProduct(productForCreation)
    .then(response => {
      const {product} = response.data;
      dispatch(actions.productCreated({product}));
    })
    .catch(error => {
      error.clientMessage = "Can't create product";
      dispatch(actions.catchError({error, callType: callTypes.action}));
    });
};

export const updateProduct = product => dispatch => {
  dispatch(actions.startCall({callType: callTypes.action}));
  return requestFromServer
    .updateProduct(product)
    .then(() => {
      dispatch(actions.productUpdated({product}));
    })
    .catch(error => {
      error.clientMessage = "Can't update product";
      dispatch(actions.catchError({error, callType: callTypes.action}));
    });
};

export const updateProductsStatus = (ids, status) => dispatch => {
  dispatch(actions.startCall({callType: callTypes.action}));
  return requestFromServer
    .updateStatusForProducts(ids, status)
    .then(() => {
      dispatch(actions.productsStatusUpdated({ids, status}));
    })
    .catch(error => {
      error.clientMessage = "Can't update products status";
      dispatch(actions.catchError({error, callType: callTypes.action}));
    });
};

export const deleteProducts = ids => dispatch => {
  dispatch(actions.startCall({callType: callTypes.action}));
  return requestFromServer
    .deleteProducts(ids)
    .then(() => {
      dispatch(actions.productsDeleted({ids}));
    })
    .catch(error => {
      error.clientMessage = "Can't delete products";
      dispatch(actions.catchError({error, callType: callTypes.action}));
    });
};
