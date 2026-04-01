"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Loader2 } from "lucide-react";

export function BuyButton({ locale, label }: { locale: string; label: string }) {
  const [loading, setLoading] = useState(false);

  const handleBuy = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ locale }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || "Error processing payment");
      }
    } catch {
      alert("Error connecting to payment system");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      size="lg"
      className="w-full bg-nb-red hover:bg-nb-red/90 text-white text-lg py-6"
      onClick={handleBuy}
      disabled={loading}
    >
      {loading ? (
        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
      ) : (
        <ShoppingCart className="mr-2 h-5 w-5" />
      )}
      {loading ? "..." : label}
    </Button>
  );
}
