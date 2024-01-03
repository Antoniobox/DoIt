module.exports.getAllTasks = async ()=>{
  const file = require('node:fs').promises
  const path = require('path')
  let tasks = undefined
  try {
    tasks = await file.readFile(path.join(__dirname, "tasks.csv"), "utf8")
  } catch(e) {
    return e
  }
  return tasks.split("\n")
}