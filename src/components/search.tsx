/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

import { Input } from "./ui/input";
import { getDeals, type Deal } from "@/mock/deals";

function useDebounce<T>(value: T, delay: number = 1000): T {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debouncedValue;
}
interface SearchProps extends React.ComponentProps<"input"> {
  className?: string;
  containerClassName?: string;
}

const Search = ({
  className = "",
  containerClassName,
  ...props
}: SearchProps) => {
  const [term, setTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [deals, setDeals] = useState<Deal[]>([]);
  const [showResults, setShowResults] = useState<boolean>(false);
  const debouncedValue = useDebounce(term);

  useEffect(() => {
    if (!debouncedValue) {
      setDeals([]);
      setShowResults(false);
      return;
    }
    setShowResults(true);
    setLoading(true);

    const fetchDeals = async () => {
      try {
        // const res = await fetch(`/api/deals?search=${encodeURIComponent(debouncedQuery)}`);
        const data: Deal[] = await getDeals(debouncedValue);
        setDeals(data);
      } catch (err) {
        console.error("Failed to fetch deals", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDeals();
  }, [debouncedValue]);

  return (
    <div className={twMerge("relative w-full", containerClassName)}>
      <Input
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        className={className}
        onBlur={() => setShowResults(false)}
        {...props}
      />
      {showResults && (
        <div className="w-full absolute -bottom-16 bg-background text-foreground p-4 rounded-md shadow">
          {!loading ? (
            <ul>
              {deals.map((deal) => (
                <li key={deal.id}>{deal.title}</li>
              ))}
            </ul>
          ) : (
            <span>loading...</span>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
