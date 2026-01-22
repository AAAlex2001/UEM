"use client";

import { useReducer } from "react";
import type { EntryForm, EntryFormAction } from "./types";
import { initialState } from "./types";


function toErrorMessage(detail: unknown): string {
  if (Array.isArray(detail)) {
    const messages = detail.map((d: any) => d.msg || String(d));
    return messages.join(', ');
  }

  if (typeof detail === 'string') {
    return detail;
  }

  return 'Произошла ошибка сервера.';
}

export function formReducer(state: EntryForm, action: EntryFormAction): EntryForm {
    switch (action.type) {
        case 'SET_NAME':
            return { ...state, name: action.payload };
        case 'SET_EMAIL':
            return { ...state, email: action.payload };
        case 'SET_PHONE':
            return { ...state, phone: action.payload };
        case 'SET_GROUP':
            return { ...state, group: action.payload };
        case 'SET_PROFESSION_ID':
            return { ...state, professionId: action.payload };
        case 'SET_DATE':
            return { ...state, date: action.payload };
        case 'SET_ERROR':
            return { ...state, error: action.payload };
        case 'SET_LOADING':
            return { ...state, loading: action.payload };        
        case 'RESET_FORM':
            return {
                name: "",
                email: "",
                phone: "",
                group: "",
                professionId: 0,
                date: "",
                error: null,
                loading: false,
            };
        default:
            return state;
    }
}

export const useFormHook = () => {
    const [state, dispatch] = useReducer(formReducer, initialState);


    const handleEntry = (formData: EntryForm) => {
        
        if (!formData.name || !formData.email || !formData.phone || !formData.group || formData.professionId === undefined || formData.professionId === null || !formData.date) {
            dispatch({ type: 'SET_ERROR', payload: 'Пожалуйста, заполните все поля.' });
            return false;
        }

        dispatch({ type: 'SET_LOADING', payload: true });

        try {
            const response = fetch('/api/entry', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            response.then(async res => {
                const data = await res.json();
                if (!res.ok) {
                    const errorMessage = toErrorMessage(data.detail);
                    dispatch({ type: 'SET_ERROR', payload: errorMessage });
                } else {
                    dispatch({ type: 'RESET_FORM' });
                }
                dispatch({ type: 'SET_LOADING', payload: false });
            });
        } catch (error) {
            dispatch({ type: 'SET_ERROR', payload: 'Произошла ошибка сервера.' });
            dispatch({ type: 'SET_LOADING', payload: false });
        } finally {
            dispatch({ type: 'SET_LOADING', payload: false });
        }
    }

    return {
        email: state.email,
        name: state.name,
        phone: state.phone,
        group: state.group,
        professionId: state.professionId,
        date: state.date,
        error: state.error,
        loading: state.loading,
        setEmail: (email: string) => dispatch({ type: 'SET_EMAIL', payload: email }),
        setName: (name: string) => dispatch({ type: 'SET_NAME', payload: name }),
        setPhone: (phone: string) => dispatch({ type: 'SET_PHONE', payload: phone }),
        setGroup: (group: string) => dispatch({ type: 'SET_GROUP', payload: group }),
        setProfessionId: (professionId: number) => dispatch({ type: 'SET_PROFESSION_ID', payload: professionId }),
        setDate: (date: string) => dispatch({ type: 'SET_DATE', payload: date }),
        handleEntry,
    }
}