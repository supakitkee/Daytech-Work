import { atom } from 'recoil';

interface Todoprop {
  id: number;
  completed: boolean;
  value: string;
}

export const nameState = atom({
  key: 'nameState',
  default: '',
});

export const slectState = atom({
  key: 'select',
  default: '',
});

export const todoState = atom<Todoprop[]>({
  key: 'todo',
  default: [],
});

export const searchState = atom<string>({
  key: 'search',
  default: '',
});
