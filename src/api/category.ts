import instance from "./instance";

export const cate = () => {
  return instance.get("/category");
};
export const catebyId = (id: any) => {
  return instance.get(`/category/${id}`);
};
