export const formatCurrency = (number: number) => {
  if (number) {
    const formattedNumber = number.toString().replace(/[^\d.]/g, ""); // Updated regex to exclude dot
    const [integerPart, decimalPart] = formattedNumber.split("."); // Split into integer and decimal parts
    let currency = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ","); // Format integer part with commas

    if (decimalPart) {
      currency += "." + decimalPart; // Add the decimal part back
    }

    return currency;
  } else {
    return "";
  };
};
