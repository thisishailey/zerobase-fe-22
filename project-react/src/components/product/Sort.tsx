import type { TSortOption } from '@/types/sortOption';

interface SortProps {
    sortOption: TSortOption;
    changeSortOption: (id: TSortOption) => void;
}

const sortList: { id: TSortOption; text: string; smallText: string }[] = [
    { id: 'new', text: 'Latest Arrivals', smallText: 'Latest' },
    { id: 'cheap', text: 'Price: Low to High', smallText: 'Lowest Price' },
    { id: 'expensive', text: 'Price: High to Low', smallText: 'Highest Price' },
];

export default function Sort({ sortOption, changeSortOption }: SortProps) {
    return (
        <fieldset className="flex flex-col gap-2">
            <legend className="ml-4 text-xs lg:text-sm font-medium text-gray-500">
                SORT BY
            </legend>
            {sortList.map((sort) => {
                return (
                    <div className="flex items-center" key={sort.id}>
                        <input
                            type="radio"
                            name="sort"
                            id={sort.id}
                            className="appearance-none w-1 h-1 rounded-full checked:bg-gray-800"
                            checked={sortOption === sort.id}
                            readOnly
                        />
                        <label
                            htmlFor={sort.id}
                            className={
                                sortOption === sort.id
                                    ? 'ml-3 text-xs lg:text-sm cursor-pointer'
                                    : 'ml-3 text-xs lg:text-sm cursor-pointer text-gray-500'
                            }
                            onClick={() => changeSortOption(sort.id)}
                        >
                            {sort.text}
                        </label>
                    </div>
                );
            })}
        </fieldset>
    );
}

export function SmallSort({ sortOption, changeSortOption }: SortProps) {
    return (
        <div className="flex items-center gap-2 mb-4">
            <label
                htmlFor="smallSort"
                className="text-xs font-medium text-gray-500"
            >
                SORT BY
            </label>
            <select
                name="sortOptions"
                id="smallSort"
                className="p-1 outline-0 text-sm rounded border-1 border-solid border-gray-400 dark:border-neutral-600 dark:bg-neutral-800"
            >
                {sortList.map((sort) => {
                    return (
                        <option
                            value={sort.id}
                            selected={sortOption === sort.id}
                            onClick={() => changeSortOption(sort.id)}
                            key={sort.id}
                        >
                            {sort.smallText}
                        </option>
                    );
                })}
            </select>
        </div>
    );
}
