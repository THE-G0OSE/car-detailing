"use client";

import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";

interface IProps {
    query: string;
    onQueryChange: (value: string) => void;
    sort: string;
    onSortChange: (value: string) => void;
}

const SORT_OPTIONS = [
    { value: "popular", label: "Популярные" },
    { value: "cheap", label: "Сначала дешевле" },
    { value: "expensive", label: "Сначала дороже" },
];

export const SearchSort: React.FC<IProps> = ({ query, onQueryChange, sort, onSortChange }) => {
    return (
        <div className="flex gap-3 w-full md:w-auto">
            <TextField
                type="search"
                value={query}
                onChange={(e) => onQueryChange(e.target.value)}
                placeholder="Поиск услуги…"
                aria-label="Поиск услуги"
                className="grow md:grow-0"
                sx={{ width: { xs: "100%", md: 240 } }}
                slotProps={{
                    input: {
                        startAdornment: (
                            <SearchIcon sx={{ fontSize: 18, color: "var(--color-muted-gray)", mr: 1 }} />
                        ),
                    },
                }}
            />
            <TextField
                select
                value={sort}
                onChange={(e) => onSortChange(e.target.value)}
                aria-label="Сортировка"
                className="shrink-0"
                sx={{ minWidth: 190 }}
                slotProps={{
                    select: {
                        renderValue: (value) => (
                            <span>
                                <span className="hidden sm:inline" style={{ color: "var(--color-muted-gray)" }}>
                                    Сортировка:{" "}
                                </span>
                                {SORT_OPTIONS.find((option) => option.value === value)?.label}
                            </span>
                        ),
                    },
                }}
            >
                {SORT_OPTIONS.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
        </div>
    );
};
