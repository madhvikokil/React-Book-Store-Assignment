import { v4 as uuidv4 } from 'uuid';
export const placeOrder = (book) => {
    return(dispatch, getstate, { getFirestore }) => {
      const firestore = getFirestore();
      const uid = localStorage.getItem('uid');
      const user = localStorage.getItem('typeOfUser');
      let id = uuidv4();
      firestore.collection('orders').doc(id).set({
        orderId: id,
        bookId: book.id,
        discount: book.discount,
        price: book.price,
        actualPrice: book.actualPrice,
        orderDate: new Date(),
        status: "PENDING",
        userId: uid,
        titleOfBook: book.title,
        user: user

      }).then((res) => {
        dispatch({ type: 'ORDER_PLACED' })
      }).catch(err => {
      dispatch({ type: 'ORDER_PLACED_ERROR' , err});
    })
  }
}

export const updateOrderByAdmin = (book) => {
  return(dispatch, getstate, { getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('orders').doc(book.orderId).update({
      ...book,
      status: "COMPLETED",
    }).then((res) => {
      dispatch({ type: 'ORDER_PLACED' })
    }).catch(err => {
    dispatch({ type: 'ORDER_PLACED_ERROR' , err});
  })
}
}

export const getMyOrders = (uid) => {
    return(dispatch, getstate, { getFirestore }) => {
      const firestore = getFirestore();
      // const uid = localStorage.getItem('uid');
      firestore.collection('orders').where('userId', '==' , `${uid}`).get().then((res) => {
        let data = [];
        res.forEach((doc) => {
            data.push(doc.data());
          });
        dispatch({ type: "MY_ORDERS", data })
    }).catch(err => {
      dispatch({ type: "MY_ORDERS_ERROR", err});
    })
  }
}

export const getAllOrders = () => {
  return(dispatch, getstate, { getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('orders').get().then((res) => {
      let data = [];
      res.forEach((doc) => {
          data.push(doc.data());
        });

      dispatch({ type: "MY_ORDERS", data })
  }).catch(err => {
    dispatch({ type: "MY_ORDERS_ERROR", err});
  })
}
}