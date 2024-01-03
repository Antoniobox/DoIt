(async ()=>{
    const tasks = await window.tasks.getTasks()
    console.log("Renderer: "+tasks)
})()