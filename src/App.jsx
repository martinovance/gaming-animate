import Hero from "./components/Hero";

const App = () => {
  return (
    <main>
      <h1 className="relative min-h-screen w-screen overflow-x-hidden">
        <Hero />

        <section className="z-0 min-h-screen bg-blue-500" />
      </h1>
    </main>
  );
};

export default App;
