import Search from "@/components/search";

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
              Stranica gdje možeš pronaći dobre diilove
            </p>
            <Search
              placeholder="Pretraži"
              containerClassName="w-full md:w-2/3 mx-auto"
              className="bg-foreground py-6 focus:border-none focus-visible:ring-muted-foreground focus:ring-muted-foreground placeholder:text-base"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
