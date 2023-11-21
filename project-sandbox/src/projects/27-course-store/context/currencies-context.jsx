import React from "react";

export const CurrencyContext = React.createContext({
  code: "USD",
  label: "US DOLLAR",
  conversionRate: 1.19,
});
