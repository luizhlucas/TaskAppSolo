import AsyncStorage  from "@react-native-async-storage/async-storage";

const TASK_STORAGE_key = "task-storage"

export type TaskStorage = {
    name: string
    id: string
}

async function get(): Promise<TaskStorage[]>{
    const storage = await AsyncStorage.getItem(TASK_STORAGE_key)
    const update = storage? JSON.parse(storage): []

    return update
}

async function save(Newtask: TaskStorage){
    const storage = await get()
    const update = JSON.stringify([...storage, Newtask])

    return await AsyncStorage.setItem(TASK_STORAGE_key, update)
}
async function remove(id: string){
    const storage = await get()
    const updated = storage.filter((task) => task.id !== id)
    const update = JSON.stringify(updated)

    return await AsyncStorage.setItem(TASK_STORAGE_key, update)
}

export const taskStorage = { get, save, remove } 