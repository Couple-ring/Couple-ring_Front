export interface AuthType {
  title: string;
  type: string;
  name: string;
}

export interface DiaryType {
  title: string;
  content: string;
  feel: string;
  name: string;
  imageUrl: string | null;
  id: number;
}

export interface DetailDiaryType {
  title: string;
  content: string;
  imageUrl: string | null;
  mood: string;
}
