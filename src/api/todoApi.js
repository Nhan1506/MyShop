import axiosClient from "./axiosClient";

const todoApi = {
  getAllTodo(params){
    const url = '/todo';
    return axiosClient.get(url, {params});
  },
  getTodo(id){
    const url = `/todo/${id}`;
    return axiosClient.get(url);
  },
  addTodo(data){
    const url = '/todo';
    return axiosClient.post(url, data);
  },
  updateTodo(data){
    const url = `/todo/${data.id}`;
    return axiosClient.patch(url, data);
  },
  removeTodo(id){
    const url = `/todo/${id}`;
    return axiosClient.delete(url);
  },
}

export default todoApi;