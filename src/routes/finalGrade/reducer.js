import * as actions from './actions';

const initialState = {
  isModalOpen: false,
  modalData: null,
};

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case (actions.OPEN_FINAL_GRADE_MODAL):
      return Object.assign({}, state, { isModalOpen: true, modalData: payload });
    default:
      return state;
  }
}

export default reducer;
