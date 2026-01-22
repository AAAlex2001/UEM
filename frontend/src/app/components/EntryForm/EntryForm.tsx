"use client";

import React from "react";
import styles from "./EntryForm.module.scss";
import { DropDown } from "../DropDown/DropDown";
import { useFormHook } from "./state";

const EntryForm: React.FC = () => {
    const {
        name,
        email,
        phone,
        group,
        professionId,
        date,
        error,
        loading,
        professions,
        selectedProfession,
        setName,
        setEmail,
        setPhone,
        setGroup,
        setProfessionId,
        setDate,
        handleEntry,
    } = useFormHook();

    const handleSelect = (profession: string, index?: number) => {
        const id = typeof index === "number" ? index : professions.indexOf(profession);
        setProfessionId(id);
    };

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleEntry({ name, email, phone, group, professionId, date, error: null, loading: false });
    };

    return (
        <section className={styles.entryFormSection}>
            <div className={styles.entryFormContainer}>
                <form onSubmit={onSubmit}>
                    <div className={styles.formRow}>
                        <div style={{ flex: 1 }}>
                            <label className={styles.label}>ФИО</label>
                            <input className={styles.input} value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                    </div>

                    <div className={styles.formRow}>
                        <div style={{ flex: 1 }}>
                            <label className={styles.label}>Email</label>
                            <input className={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div style={{ width: 160 }}>
                            <label className={styles.label}>Телефон</label>
                            <input className={styles.input} value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </div>
                    </div>

                    <div className={styles.formRow}>
                        <div style={{ flex: 1 }}>
                            <label className={styles.label}>Группа</label>
                            <input className={styles.input} value={group} onChange={(e) => setGroup(e.target.value)} />
                        </div>
                    </div>

                    <div className={styles.formRow}>
                        <div style={{ flex: 1 }}>
                            <label className={styles.label}>Профессия</label>
                            <DropDown 
                                professions={professions} 
                                onSelect={handleSelect} 
                                selectedIndex={typeof professionId === 'number' ? professionId : null} 
                                disabled={selectedProfession !== null}
                            />
                        </div>
                    </div>

                    <div className={styles.formRow}>
                        <div style={{ flex: 1 }}>
                            <label className={styles.label}>Дата</label>
                            <input className={styles.input} type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 12 }}>
                        <div className={styles.formNote}>{error}</div>
                        <button className={styles.submitButton} type="submit" disabled={loading}>{loading ? 'Отправка...' : 'Отправить'}</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default EntryForm;