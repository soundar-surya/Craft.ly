import axios from 'axios'

const url = 'http://localhost:5000'

export const createChart = async payload => {
    try{
        const {data} = await axios.post(`${url}/create-chart`, {payload})
        return data
    } catch(e) {
        console.log(e)
        return []
    }
}

export const getAllCharts = async () => {
    try{
        const { data } = await axios.get(`${url}/get-all-charts`)
        return data
    } catch(e) {
        console.log(e)
        return []
    }
}

export const modifyChart = async payload => {
    try{
        const {data} = await axios.put(`${url}/modify-chart`, {payload})
        return data
    } catch(e) {
        console.log(e)
        return []
    }
}

export const deleteChart = async title => {
    try{
        const {data} = await axios.delete(`${url}/delete-chart/${title}`)
        return data
    } catch(e) {
        console.log(e)
        return []
    }
}

export const getAllGroups = async () => {
    try{
        const {data} = await axios.get(`${url}/get-groups`)
        return data
    } catch(e) {
        console.log(e)
        return []
    }
}

export const createGroup = async payload => {
    try{
        const {data} = await axios.post(`${url}/create-group`, {payload})
        return data
    } catch(e) {
        console.log(e)
        return []
    }
}

export const addUser = async payload => {
    try{
        const {data} = await axios.post(`${url}/add-user`, {payload})
        return data
    } catch(e) {
        console.log(e)
        return []
    }
}