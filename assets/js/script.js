const task = [
    { id:1, work: "Estudiar javascript", completed: false },
    { id:2, work: "Regar plantas", completed: false },
    { id:3, work: "Limpiar estufa", completed: false },
    { id:4, work: "Cortar el pasto", completed: false}
  ]
  
  const inputTarea = document.querySelector("#inputTarea")
  const list = document.querySelector("#lista")
  const add = document.querySelector("#agregar")
  const total = document.querySelector("#suma")
  const made = document.querySelector("#realizadas")
  const addTask = () => {
    // elimina espacios vacios
    const labor = inputTarea.value.trim()
    // crea alerta si input esta en blanco
    if(labor === ""){
        alert("Agregar una labor")
    // detiene el codigo
        return
    }
  
  // nueva tarea sera el ultimo ID
  const lastTask = task[task.length-1]

  // agregando valor al primer ID
  const newTask ={
    id: lastTask? lastTask.id +1 : 1,
    work: labor,
    completed: false,
  }
  task.push(newTask)
  inputTarea.value= ""
  agregando()
  }
  
  //render
  const agregando = () => {
    list.innerHTML = task
      .map((tarea) => `
    <div id="lista">
    <!--<button class="check"onclick="sumarTareas">(${tarea.add})+</button> -->
    <ul start = ${tarea.id}>
    <li>${tarea.id}.- ${tarea.work}
    <button id="btn-verificado-${tarea.id}" class="verificado" onclick="identificados(${tarea.id})"></button>
    <button id="btn-eliminar"onclick="eliminartarea(${tarea.id})"> Eliminar</button>
    </li></ul></div>`
  
      ).join("");
  
    total.innerHTML = task.length
    made.innerHTML = task.filter((tarea) => tarea.completed).length
    
    task.forEach((tarea) => {
      document.querySelector("#btn-verificado-"+ tarea.id).innerHTML  =  tarea.completed ? "Realizada" : "No Realizada";
    });
  
  };
  
  const sumarTareas = () => {
    let suma = 0;
    task.forEach((tarea) => {
      suma += tarea.add;
    });
    return suma;
  };
  
  
  //suma de tareas
  const identificados = (id)=>{
    const index = task.findIndex((tarea) => tarea.id === +id)
    const status = task[index].completed;
    task[index].completed = !status;
  
  agregando();
  
  }
  
  // eliminando parametros
  const eliminartarea = (id)=>{
    const listado = task.findIndex((tarea)=> tarea.id === +id)
    task.splice(listado,1)
  
    agregando()    
  
  }
  
  agregando()
  
  add.addEventListener("click", addTask)
  
  