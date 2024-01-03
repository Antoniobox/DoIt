const { ipcRenderer, contextBridge } = require('electron')

contextBridge.exposeInMainWorld('tasks', {
    getTasks: async ()=> await ipcRenderer.invoke('getTasks')
}
)