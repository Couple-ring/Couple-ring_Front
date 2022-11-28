export interface AuthType {
  title: string;
  type: string;
  name: string;
};

export interface DiaryType {
  content: string,
  date: string,
  feel: string,
  id: number,
  imageUrl: null | string,
  name: string,
  title: string
};