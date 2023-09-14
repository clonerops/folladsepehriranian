import React, { useState } from "react";
import Fuse from "fuse.js";

interface FuzzySearchProps<T> {
    data: T[];
    keys: string[];
    threshold?: number;
    setResults?: any;
    placeholder: string
}

const FuseSearch = <T extends {}>({
    data,
    keys,
    setResults,
    placeholder,
    threshold = 0.4,
}: FuzzySearchProps<T>) => {

    const [query, setQuery] = useState("");

    const fuse = new Fuse(data, {
        keys,
        includeScore: true,
        threshold,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        setQuery(inputValue);

        if (inputValue === "") {
            setResults(data);
        } else {
            const fuzzyResults = fuse.search(inputValue);
            setResults(fuzzyResults.map((result) => result.item));
        }
    };

    return (
        <>
            <input
                value={query}
                onChange={handleInputChange}
                className="customInput tw-p-[8px] tw-w-full tw-rounded-md tw-border tw-border-gray-300 tw-outline-none"
                placeholder={placeholder}

            />
        </>
    );
};

export default FuseSearch;
