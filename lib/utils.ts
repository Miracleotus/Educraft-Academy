export const formatPrice = (price: number, currency: "USD" | "NGN" = "USD"): string => {
  const locale = currency === "NGN" ? "en-NG" : "en-US";
  return new Intl.NumberFormat(locale, { style: "currency", currency }).format(price);
};
