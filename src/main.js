function main() {
    const {createWindow} = require('./window')
    const {ipcMain} = require('electron')
    createWindow()
    ipcMain.handle('getTasks', async (event, args)=>{
        const { getAllTasks } = require('./tasks')
        tasks = await getAllTasks()
        console.log("Desde main: "+tasks)
        return tasks
    })
}
main()