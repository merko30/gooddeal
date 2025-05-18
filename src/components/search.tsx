import { useState } from "react";
import { Input } from "./ui/input";

interface SearchProps extends React.ComponentProps<"input"> {
  className?: string;
}

const Search = ({ className = "", ...props }: SearchProps) => {
  const [term, setTerm] = useState("");

  return (
    <Input
      value={term}
      onChange={(e) => setTerm(e.target.value)}
      className={className}
      {...props}
    />
  );
};

export default Search;
