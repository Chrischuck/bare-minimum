export const OPEN_FINAL_GRADE_MODAL = 'bare-minimum/OPEN_FINAL_GRADE_MODAL';
export const CLOSE_FINAL_GRADE_MODAL = 'bare-minimum/CLOSE_FINAL_GRADE_MODAL';

export const openFinalGradeModal = payload => ({ type: OPEN_FINAL_GRADE_MODAL, payload });
export const closeFinalGradeModal = () => ({ type: CLOSE_FINAL_GRADE_MODAL });
