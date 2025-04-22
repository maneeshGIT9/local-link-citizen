
import { Link } from "react-router-dom";
import { LoginForm } from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4 relative">
      {/* Background Watermark */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'url("/lovable-uploads/b4245bc6-1bfe-4df6-ab3c-11a4454908f2.png")',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}
      />
      
      <div className="w-full max-w-md relative">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary">WeGov</h1>
          <p className="text-gray-600 mt-1">
            Government of Telangana
          </p>
        </div>
        
        <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-bold mb-6">Login</h2>
          <LoginForm />
          
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <Link 
                to="/register" 
                className="text-primary font-medium hover:underline"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
