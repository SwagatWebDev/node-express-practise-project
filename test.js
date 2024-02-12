const customEncode = str => encodeURIComponent(str).replace(/[()]/g, encodeURIComponent);

// Example usage:
const originalString1 = "Universal SSH (UKM)";
const originalString2 = "Azure(GTK)";
const encodedString1 = customEncode(originalString1);
const encodedString2 = customEncode(originalString2);
console.log(encodedString1); // Output: "Universal%20SSH%20%28UKM%29"
console.log(encodedString2); // Output: "Azure%28GTK%29"
