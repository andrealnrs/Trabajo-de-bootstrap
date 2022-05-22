var botonesEliminar = document.querySelectorAll(".trash");
botonesEliminar.forEach(boton => {
  boton.addEventListener("click", eliminar);
});
/*var callbackForeach = boton => boton.addEventListener("click", eliminar);*/

/*botonesEliminar.forEach(callbackForeach);

//Se usa asi ES1
function callbackForeach(boton){
    boton.addEventListener("click", eliminar);
};*/

/*// ES4
var callbackForeach = function(boton){
    boton.addEventListener("click", eliminar);
};

// ES6
var callbackForeach = boton => {
    boton.addEventListener("click", eliminar);
}

*/
// ES6
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})




function eliminar (event){ 
  

  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Toast.fire({
        icon: 'success',
        title: 'Signed in successfully'
      })
       var botonTarget = event.target; //es el elemento que disparo el evento
       var trBoton = botonTarget.closest("tr"); //hace referencia al elemento padre mas cercano que cumpla con el selector
       trBoton.remove();
    }
  })
}










