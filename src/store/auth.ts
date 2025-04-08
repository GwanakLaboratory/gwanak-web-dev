import { atom } from 'jotai';
import { createStore } from 'jotai';

export const jotaiStore = createStore();
export const accessTokenAtom = atom<string | null>(null);
