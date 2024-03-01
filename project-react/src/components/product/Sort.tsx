import type { TSortOption } from '@/types/sortOption';

interface SortProps {
    sortOption: TSortOption;
    onLabelClick: (e: React.MouseEvent) => void;
}

export default function Sort({ sortOption, onLabelClick }: SortProps) {
    const sortList = [
        { id: 'new', text: 'Latest Arrivals' },
        { id: 'cheap', text: 'Price: Low to High' },
        { id: 'expensive', text: 'Price: High to Low' },
    ];

    return (
        <fieldset>
            <legend className="ml-4 mb-3 text-sm font-medium text-gray-500">
                SORT BY
            </legend>
            {sortList.map((sort) => {
                return (
                    <div className="flex items-center mb-2" key={sort.id}>
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
                                    ? 'ml-3 cursor-pointer'
                                    : 'ml-3 cursor-pointer text-gray-500'
                            }
                            onClick={onLabelClick}
                        >
                            {sort.text}
                        </label>
                    </div>
                );
            })}
        </fieldset>
    );
}
