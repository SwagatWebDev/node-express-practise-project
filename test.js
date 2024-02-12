const customEncode = str => encodeURIComponent(str).replace(/[()]/g, c => '%' + c.charCodeAt(0).toString(16).toUpperCase());

// Example usage:
const originalString = "Azure(ACR)";
const encodedString = customEncode(originalString);
console.log(encodedString); // Output: "Azure%28ACR%29"
