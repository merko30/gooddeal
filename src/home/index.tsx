import { Link } from "react-router";
import Search from "@/components/search";
import { deals } from "@/mock/deals";

const Home = () => {
  return (
    <>
      <div className="w-full bg-accent">
        <div className="container py-32">
          <div className="mx-auto max-w-full md:max-w-2/3 lg:max-w-1/2">
            <h1 className="text-foreground text-2xl lg:text-4xl text-center font-semibold">
              Pronašao si povoljnu cijenu za neki proizvod? Podijeli je s
              drugima
            </h1>
            <p className="text-foreground text-lg text-center mb-4">
              Stranica gdje možeš pronaći dobre ponude i popuste na proizvode
            </p>
            <Search
              placeholder="Pretraži"
              containerClassName="w-full md:w-2/3 mx-auto"
              className="bg-foreground py-6 focus:border-none focus-visible:ring-muted-foreground focus:ring-muted-foreground placeholder:text-base"
            />
          </div>
        </div>
      </div>
      <div className="container py-24 max-w-full md:max-w-2/3 lg:max-w-lg">
        <h1 className="text-foreground text-2xl lg:text-4xl text-center font-semibold mb-8">
          Najnovije ponude
        </h1>
        {deals.map((deal) => (
          <Link
            to={`/deals/${deal.id}`}
            key={deal.id}
            className="block p-4 bg-white rounded mb-4"
          >
            <h2 className="text-foreground text-xl font-semibold">
              {deal.title}
            </h2>
            <div className="flex items-center gap-2">
              <p className="text-medium text-foreground text-sm">
                {deal.price}KM
              </p>
              <p className="text-gray-500 text-sm line-through">
                {deal.originalPrice}KM
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
