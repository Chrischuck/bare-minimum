import swal from 'sweetalert2';

export default function sweetalert(title, text, type) {
  swal({
    title,
    text,
    confirmButtonColor: '#009688',
    confirmButtonClass: 'btn btn-danger',
    animation: 'slide-from-top',
    type,
  });
}
