export interface EntryForm {
    name: string;
    email: string;
    phone: string;
    group: string;
    professionId: number;
    date: string;
    error?: string | null;
    loading: boolean;
}

export type EntryFormAction =
  | { type: 'SET_NAME'; payload: string }
  | { type: 'SET_EMAIL'; payload: string }
  | { type: 'SET_PHONE'; payload: string }
  | { type: 'SET_GROUP'; payload: string }
  | { type: 'SET_PROFESSION_ID'; payload: number }
  | { type: 'SET_DATE'; payload: string }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'RESET_FORM' };

export const initialState: EntryForm = {
    name: "",
    email: "",
    phone: "",
    group: "",
    professionId: 0,
    error: null,
    loading: false,
    date: ""
};  