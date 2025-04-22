
import MainNav from "@/components/MainNav";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <img src="/telangana-logo.png" alt="Telangana Logo" className="h-16 w-16" />
            <div>
              <h1 className="text-2xl font-bold text-[#1D8745]">WeGov</h1>
              <p className="text-gray-600">Government of Telangana</p>
            </div>
          </div>
          <MainNav />
        </div>
      </header>
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">Welcome to WeGov</h2>
            <p className="text-gray-600 mb-6">
              Your platform for engaging with local government initiatives and community development.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
