// app/pricing/page.tsx

export const metadata = {
    title: "Pricing - Monaarch",
    description: "Explore our flexible pricing plans tailored to your needs.",
  };
  
  import PricingClient from "./PricingClient";
  
  export default function PricingPage() {
    return <PricingClient />;
  }
  