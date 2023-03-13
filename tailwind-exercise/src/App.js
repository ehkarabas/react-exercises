import DestinationCard from "./components/DestinationCard";
import data from "./helper/popularDestinations";

function App() {
  return (
    <div className="App">
      <div className="bg-gray-100 grid lg:grid-cols-2 2xl:grid-cols-5">
        <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2">
          <div className="xl:max-w-xl">
            <img
              className="h-10"
              // src="https://raw.githubusercontent.com/tailwindlabs/tailwindcss-from-zero-to-production/98b52c61259c732226c2ec0207ba2246e67a34e6/02-the-utility-first-workflow/img/logo.svg"
              src="https://raw.githubusercontent.com/tailwindlabs/tailwindcss-from-zero-to-production/98b52c61259c732226c2ec0207ba2246e67a34e6/07-customizing-your-design-system/public/img/logo-brand.svg"
              alt="brand logo"
            />
            <img
              className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-center lg:hidden"
              src="https://github.com/tailwindlabs/tailwindcss-from-zero-to-production/blob/main/02-the-utility-first-workflow/img/beach-work.jpg?raw=true"
              alt="woman workcationing on the beach"
            />
            <h2 className=" text-2xl font-headline font-semibold tracking-tight text-gray-800 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
              You can work from anywhere.
              <br className="hidden lg:inline" />
              <span className="text-brand">Take advantage of it</span>
            </h2>
            <p className="mt-6 text-gray-600 sm:mt-8 sm:text-xl">
              Workcation helps you find work-friendly rentals in beautiful
              locations so you can enjoy some nice weather even when you're not
              on vacation.
            </p>
            <div className="mt-4 space-y-2 sm:mt-6 sm:space-x-2 sm:space-y-0">
              <a
                href="#"
                className="btn btn-primary shadow-lg hover:-translate-y-0.5 transition mr-2 sm:mr-0"
              >
                Book your escape
              </a>
              <a href="#" className="btn btn-secondary">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="hidden p-8 lg:block 2xl:col-span-3">
          <img
            className="w-full h-full object-cover object-center rounded-3xl"
            src="https://github.com/tailwindlabs/tailwindcss-from-zero-to-production/blob/main/02-the-utility-first-workflow/img/beach-work.jpg?raw=true"
            alt="woman workcationing on the beach"
          />
        </div>
      </div>

      <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
        <h2 className="text-xl text-gray-900">Popular destinations</h2>
        <p className="mt-2 text-gray-600">
          A selection of great work-friendly cities with lots to see and
          explore.
        </p>
        <div className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {data.map((destination) => (
            <DestinationCard destination={destination} key={destination.city} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
