"use client";
import { ReactElement, useContext } from "react";

import FilterButtonComponent from "@/app/search/components/filter-button/filter-button.component";
import FilterCardComponent from "@/components/filter-card/filter-card.component";

import { FiltersContext } from "@/app/search/providers/filters.provider";

import { FiltersType } from "@/app/search/types/filters.type";

import styles from "./filter.module.css";
import { clsx } from "clsx";

type Option = {
  key: keyof FiltersType;
  label: string;
};

type Props = {
  title?: string;
  options: Option[];
  isListFilter?: boolean;
};

export default function FilterComponent({
  title,
  options,
  isListFilter = false,
}: Props): ReactElement {
  const { filters, changeFilter } = useContext(FiltersContext);

  return (
    <FilterCardComponent>
      <div className={styles.filter}>
        <div className={styles.title}>{title}</div>
        <div className={clsx(isListFilter ? styles.list : styles.buttons)}>
          {options.map((option) => (
            <FilterButtonComponent
              key={option.key}
              isActive={filters[option.key]}
              onClick={() => changeFilter(option.key, !filters[option.key])}
              isListFilter={isListFilter}
            >
              {option.label}
            </FilterButtonComponent>
          ))}
        </div>
      </div>
    </FilterCardComponent>
  );
}
