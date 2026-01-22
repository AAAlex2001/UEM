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

    const professions = [
        "Эмальер",
        "Слесарь",
        "Камнерез",
        "Сварщик",
    ];

    const handleEntry = async (formData: EntryForm) => {
        
        if (!formData.name || !formData.email || !formData.phone || !formData.group || formData.professionId === undefined || formData.professionId === null || !formData.date) {
            dispatch({ type: 'SET_ERROR', payload: 'Пожалуйста, заполните все поля.' });
            return false;
        }

        dispatch({ type: 'SET_LOADING', payload: true });
        dispatch({ type: 'SET_ERROR', payload: null });

        try {
            const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000';
            const chatIds = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;
            
            if (!chatIds) {
                dispatch({ type: 'SET_ERROR', payload: 'Telegram Chat ID не настроен.' });
                dispatch({ type: 'SET_LOADING', payload: false });
                return false;
            }

            // Разбиваем chat_id по запятым
            const chatIdArray = chatIds.split(',').map(id => parseInt(id.trim())).filter(id => !isNaN(id));

            if (chatIdArray.length === 0) {
                dispatch({ type: 'SET_ERROR', payload: 'Неверный формат Chat ID.' });
                dispatch({ type: 'SET_LOADING', payload: false });
                return false;
            }

            // Отправляем в каждый чат
            const promises = chatIdArray.map(chatId => {
                const payload = {
                    chat_id: chatId,
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    group: formData.group,
                    profession: professions[formData.professionId] || professions[0],
                    status: "pending",
                    created_at: formData.date ? new Date(formData.date).toISOString() : new Date().toISOString(),
                };

                return fetch(`${backendUrl}/telegram/send-message`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload),
                });
            });

            const responses = await Promise.all(promises);
            const failedChats: number[] = [];

            for (let i = 0; i < responses.length; i++) {
                if (!responses[i].ok) {
                    failedChats.push(chatIdArray[i]);
                }
            }

            if (failedChats.length > 0) {
                dispatch({ type: 'SET_ERROR', payload: `Ошибка отправки в чаты: ${failedChats.join(', ')}` });
            } else {
                dispatch({ type: 'SET_ERROR', payload: 'Заявка успешно отправлена!' });
                dispatch({ type: 'RESET_FORM' });
            }
            dispatch({ type: 'SET_LOADING', payload: false });
        } catch (error) {
            dispatch({ type: 'SET_ERROR', payload: 'Произошла ошибка сервера.' });
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
        professions,
        setEmail: (email: string) => dispatch({ type: 'SET_EMAIL', payload: email }),
        setName: (name: string) => dispatch({ type: 'SET_NAME', payload: name }),
        setPhone: (phone: string) => dispatch({ type: 'SET_PHONE', payload: phone }),
        setGroup: (group: string) => dispatch({ type: 'SET_GROUP', payload: group }),
        setProfessionId: (professionId: number) => dispatch({ type: 'SET_PROFESSION_ID', payload: professionId }),
        setDate: (date: string) => dispatch({ type: 'SET_DATE', payload: date }),
        handleEntry,
    }
}