const compress = s => s.replace(/(.)\1+/g, match => match[0] + match.length);

console.log(compress('ABBCCCE'));
