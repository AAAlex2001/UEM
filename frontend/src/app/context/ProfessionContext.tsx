"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { professions, Profession } from "@/app/data/professions";

interface ProfessionContextType {
    selectedProfession: Profession | null;
    setSelectedProfession: (profession: Profession | null) => void;
}

const ProfessionContext = createContext<ProfessionContextType | undefined>(undefined);

export const ProfessionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [selectedProfession, setSelectedProfession] = useState<Profession | null>(null);

    return (
        <ProfessionContext.Provider value={{ selectedProfession, setSelectedProfession }}>
            {children}
        </ProfessionContext.Provider>
    );
};

export type { Profession };
export { professions };
export const useProfession = () => {
    const context = useContext(ProfessionContext);
    if (context === undefined) {
        throw new Error("useProfession must be used within a ProfessionProvider");
    }
    return context;
};
