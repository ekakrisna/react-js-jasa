import { CREATE, RETRIEVES, UPDATE, DELETE } from "../../const/types";

const initialState = [];

function reducer(data = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE:
      return [...data, payload];

    case RETRIEVES:
      return payload;

    case UPDATE:
      return data.map((item) => {
        if (item.id === payload.id) {
          return {
            ...item,
            ...payload,
          };
        } else {
          return item;
        }
      });

    case DELETE:
      return data.filter(({ id }) => id !== payload.id);

    default:
      return data;
  }
}

export default reducer;
