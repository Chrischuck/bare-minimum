import * as actions from './actions';

const initialState = {
  isModalOpen: false,
  modalData: null,
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case (action.OPEN_FINAL_GRADE_MODAL):
      return state;
    default:
      return state;
  }
}
