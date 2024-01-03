(async ()=>{
    const tasks = await window.tasks.getTasks()
    for(let task of tasks) {
        const div = document.getElementById('listadoTareas')
        const divTarea = document.createElement('div')
        const textoTarea = document.createElement('h3')
        textoTarea.innerHTML = task
        divTarea.setAttribute('class','tarea')
        textoTarea.setAttribute('class', 'textoTarea')
        divTarea.appendChild(textoTarea)
        div.appendChild(divTarea)
    }
})()