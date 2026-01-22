"use client";
import React , {useState} from "react";
import styles from "./DropDown.module.scss";

type DropDownProps = {
    professions?: string[];
    onSelect?: (profession: string, index?: number) => void;
    selectedIndex?: number | null;
    placeholder?: string;
};

export const DropDown: React.FC<DropDownProps> = ({ professions, onSelect, selectedIndex = null, placeholder = "Выберите опцию" }) => {

    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(!open);
    };

    const label = (typeof selectedIndex === 'number' && professions && professions[selectedIndex])
        ? professions[selectedIndex]
        : placeholder;

    return (
       <div className={styles.dropDown}>
        <button
          className={styles.dropDownButton}
          onClick={toggleOpen}
          aria-expanded={open}
          type="button"
        >
          {label}
        </button>
        {open && (
            <div className={styles.dropDownContent}>
                {professions?.map((profession, index) => (
                    <div
                      key={index}
                      className={styles.dropDownItem}
                      onClick={() => {
                        if (onSelect) onSelect(profession, index);
                        setOpen(false);
                      }}
                    >
                        {profession}
                    </div>
                ))}
            </div>
        )}
       </div>
    );
}