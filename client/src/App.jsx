import { StateContext } from "./config/store";
import { Toaster } from "react-hot-toast";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Suspense, lazy } from "react";
import Loader from "./utils/Loader";

const Routes = lazy(() => import("./routes/Routespath"));
function Load(){
  return (
    <div className="d-flex justify-content-center vh-100 fs-4">
      <Loader title="Welcome to SHOP" />
    </div>
  )
}

function App() {
  return (
    <StateContext>
      <PayPalScriptProvider deferLoading={true}>
        <Toaster position="bottom-right" />
        <Suspense fallback={<Load/>}>
          <Routes />
        </Suspense>
      </PayPalScriptProvider>
    </StateContext>
  );
}

export default App;
