let addProductForm = document.getElementById('addForm');
let result
const handleSubmit = (evt,form,route) =>{
    evt.preventDefault();
    let formData = new FormData(form);
    fetch(route,{
        method:"POST",
        body:formData
    })
}
addProductForm.addEventListener('submit',(e)=>handleSubmit(e,e.target,'/api/productos'))