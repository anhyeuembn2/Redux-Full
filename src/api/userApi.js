
import { instance } from "./instance";

export const getUsers = async () => {
  const res = await instance.get(`/users?_sort=createdAt&_order=desc`);
  return res.data;
}

export const createUser = async (data) => {
  const res = await instance.post(`/users`, data);
  return res.data;
}

export const updateUser = async (data) => {
  const res = await instance.put(`/users/${data.id}`, data);
  return res.data;
}

export const deleteUser = async (id) => {
  const res = await instance.delete(`/users/${id}`);
  return res.data;
}