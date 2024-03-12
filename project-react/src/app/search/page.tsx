import { Suspense } from 'react';
import Loading from '@/components/common/template/Loading';
import Wrap from '@/components/common/template/Wrap';
import SearchBar from '@/components/_search/SearchBar';
import SearchResult from '@/components/_search/SearchResult';

export default function SearchPage({
    searchParams,
}: {
    searchParams: { query: string };
}) {
    const query = searchParams.query;

    return (
        <Wrap>
            <Suspense fallback={<Loading />}>
                <div className="h-12"></div>
                <SearchBar query={query} />
                <div className="h-12"></div>
                <SearchResult query={query} />
            </Suspense>
        </Wrap>
    );
}
