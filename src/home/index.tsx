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
      <div className="container py-24">
        <h1 className="text-foreground text-2xl lg:text-4xl text-center font-semibold mb-8">
          Najnovije ponude
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {deals.map((deal) => (
            <Link
              to={`/deals/${deal.id}`}
              key={deal.id}
              className="flex flex-col p-4 bg-white rounded mb-4"
            >
              <img
                src={deal.imageUrl}
                alt={deal.title}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <p className="text-gray-500 text-sm mb-2">objavio {deal.user}</p>
              <h2 className="text-foreground text-xl font-semibold line-clamp-2">
                {deal.title}
              </h2>
              <p className="text-gray-500 mb-2">{deal.shop}</p>
              <div className="flex items-center gap-2 mt-auto">
                <p className="font-medium text-foreground">{deal.price}KM</p>
                <p className="text-gray-500 text-sm line-through">
                  {deal.originalPrice}KM
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
