const customEncode = str => encodeURIComponent(str).replace(/[()]/g, c => encodeURIComponent(c));
