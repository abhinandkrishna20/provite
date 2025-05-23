import "./App.css";
import ContactForm from "./components/ContactForm";
import CTASection from "./components/CTASection";
import PricingSection from "./components/Pricingsection";
import ProductList from "./components/ProductList";


function App() {
  return (
    <div>
    <div className="main">
      <h3 className="text-3xl font-bold underline">
        It is new Project using vite and tailwind css
      </h3>
</div>
{/* <CTASection />
<PricingSection />
<ProductList /> */}
<ContactForm />


    </div>
  );
}

export default App;
