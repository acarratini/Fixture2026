// Fixture Mundial 2026 - Lógica de la Aplicación
// Grupo Scout Sta. María de Iguazú Nº 751

// 1. Datos de los Equipos y Grupos Oficiales
const GROUPS_DATA = {
  'A': [
    { name: 'México', flag: 'mx', ranking: 15 },
    { name: 'Sudáfrica', flag: 'za', ranking: 59 },
    { name: 'Corea del Sur', flag: 'kr', ranking: 22 },
    { name: 'República Checa', flag: 'cz', ranking: 30 }
  ],
  'B': [
    { name: 'Canadá', flag: 'ca', ranking: 40 },
    { name: 'Bosnia y Herzegovina', flag: 'ba', ranking: 74 },
    { name: 'Catar', flag: 'qa', ranking: 34 },
    { name: 'Suiza', flag: 'ch', ranking: 19 }
  ],
  'C': [
    { name: 'Brasil', flag: 'br', ranking: 5 },
    { name: 'Marruecos', flag: 'ma', ranking: 12 },
    { name: 'Haití', flag: 'ht', ranking: 85 },
    { name: 'Escocia', flag: 'gb-sct', ranking: 39 }
  ],
  'D': [
    { name: 'Estados Unidos', flag: 'us', ranking: 11 },
    { name: 'Paraguay', flag: 'py', ranking: 56 },
    { name: 'Australia', flag: 'au', ranking: 23 },
    { name: 'Turquía', flag: 'tr', ranking: 26 }
  ],
  'E': [
    { name: 'Alemania', flag: 'de', ranking: 16 },
    { name: 'Curazao', flag: 'cw', ranking: 88 },
    { name: 'Costa de Marfil', flag: 'ci', ranking: 38 },
    { name: 'Ecuador', flag: 'ec', ranking: 31 }
  ],
  'F': [
    { name: 'Países Bajos', flag: 'nl', ranking: 7 },
    { name: 'Japón', flag: 'jp', ranking: 18 },
    { name: 'Suecia', flag: 'se', ranking: 28 },
    { name: 'Túnez', flag: 'tn', ranking: 41 }
  ],
  'G': [
    { name: 'Bélgica', flag: 'be', ranking: 8 },
    { name: 'Egipto', flag: 'eg', ranking: 36 },
    { name: 'Irán', flag: 'ir', ranking: 20 },
    { name: 'Nueva Zelanda', flag: 'nz', ranking: 104 }
  ],
  'H': [
    { name: 'España', flag: 'es', ranking: 3 },
    { name: 'Cabo Verde', flag: 'cv', ranking: 65 },
    { name: 'Arabia Saudita', flag: 'sa', ranking: 57 },
    { name: 'Uruguay', flag: 'uy', ranking: 14 }
  ],
  'I': [
    { name: 'Francia', flag: 'fr', ranking: 2 },
    { name: 'Senegal', flag: 'sn', ranking: 21 },
    { name: 'Irak', flag: 'iq', ranking: 58 },
    { name: 'Noruega', flag: 'no', ranking: 44 }
  ],
  'J': [
    { name: 'Argentina', flag: 'ar', ranking: 1 },
    { name: 'Argelia', flag: 'dz', ranking: 32 },
    { name: 'Austria', flag: 'at', ranking: 25 },
    { name: 'Jordania', flag: 'jo', ranking: 68 }
  ],
  'K': [
    { name: 'Portugal', flag: 'pt', ranking: 6 },
    { name: 'RD Congo', flag: 'cd', ranking: 61 },
    { name: 'Uzbekistán', flag: 'uz', ranking: 66 },
    { name: 'Colombia', flag: 'co', ranking: 9 }
  ],
  'L': [
    { name: 'Inglaterra', flag: 'gb-eng', ranking: 4 },
    { name: 'Croacia', flag: 'hr', ranking: 10 },
    { name: 'Ghana', flag: 'gh', ranking: 64 },
    { name: 'Panamá', flag: 'pa', ranking: 43 }
  ]
};

// 2. Combinaciones Oficiales de la FIFA para los 8 Mejores Terceros
const FIFA_THIRD_COMBINATIONS = {
  "EFGHIJKL": {
    "1A": "E",
    "1B": "J",
    "1D": "I",
    "1E": "F",
    "1G": "H",
    "1I": "G",
    "1K": "L",
    "1L": "K"
  },
  "DFGHIJKL": {
    "1A": "H",
    "1B": "G",
    "1D": "I",
    "1E": "D",
    "1G": "J",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "DEGHIJKL": {
    "1A": "E",
    "1B": "J",
    "1D": "I",
    "1E": "D",
    "1G": "H",
    "1I": "G",
    "1K": "L",
    "1L": "K"
  },
  "DEFHIJKL": {
    "1A": "E",
    "1B": "J",
    "1D": "I",
    "1E": "D",
    "1G": "H",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "DEFGIJKL": {
    "1A": "E",
    "1B": "G",
    "1D": "I",
    "1E": "D",
    "1G": "J",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "DEFGHJKL": {
    "1A": "E",
    "1B": "G",
    "1D": "J",
    "1E": "D",
    "1G": "H",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "DEFGHIKL": {
    "1A": "E",
    "1B": "G",
    "1D": "I",
    "1E": "D",
    "1G": "H",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "DEFGHIJL": {
    "1A": "E",
    "1B": "G",
    "1D": "J",
    "1E": "D",
    "1G": "H",
    "1I": "F",
    "1K": "L",
    "1L": "I"
  },
  "DEFGHIJK": {
    "1A": "E",
    "1B": "G",
    "1D": "J",
    "1E": "D",
    "1G": "H",
    "1I": "F",
    "1K": "I",
    "1L": "K"
  },
  "CFGHIJKL": {
    "1A": "H",
    "1B": "G",
    "1D": "I",
    "1E": "C",
    "1G": "J",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "CEGHIJKL": {
    "1A": "E",
    "1B": "J",
    "1D": "I",
    "1E": "C",
    "1G": "H",
    "1I": "G",
    "1K": "L",
    "1L": "K"
  },
  "CEFHIJKL": {
    "1A": "E",
    "1B": "J",
    "1D": "I",
    "1E": "C",
    "1G": "H",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "CEFGIJKL": {
    "1A": "E",
    "1B": "G",
    "1D": "I",
    "1E": "C",
    "1G": "J",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "CEFGHJKL": {
    "1A": "E",
    "1B": "G",
    "1D": "J",
    "1E": "C",
    "1G": "H",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "CEFGHIKL": {
    "1A": "E",
    "1B": "G",
    "1D": "I",
    "1E": "C",
    "1G": "H",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "CEFGHIJL": {
    "1A": "E",
    "1B": "G",
    "1D": "J",
    "1E": "C",
    "1G": "H",
    "1I": "F",
    "1K": "L",
    "1L": "I"
  },
  "CEFGHIJK": {
    "1A": "E",
    "1B": "G",
    "1D": "J",
    "1E": "C",
    "1G": "H",
    "1I": "F",
    "1K": "I",
    "1L": "K"
  },
  "CDGHIJKL": {
    "1A": "H",
    "1B": "G",
    "1D": "I",
    "1E": "C",
    "1G": "J",
    "1I": "D",
    "1K": "L",
    "1L": "K"
  },
  "CDFHIJKL": {
    "1A": "C",
    "1B": "J",
    "1D": "I",
    "1E": "D",
    "1G": "H",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "CDFGIJKL": {
    "1A": "C",
    "1B": "G",
    "1D": "I",
    "1E": "D",
    "1G": "J",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "CDFGHJKL": {
    "1A": "C",
    "1B": "G",
    "1D": "J",
    "1E": "D",
    "1G": "H",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "CDFGHIKL": {
    "1A": "C",
    "1B": "G",
    "1D": "I",
    "1E": "D",
    "1G": "H",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "CDFGHIJL": {
    "1A": "C",
    "1B": "G",
    "1D": "J",
    "1E": "D",
    "1G": "H",
    "1I": "F",
    "1K": "L",
    "1L": "I"
  },
  "CDFGHIJK": {
    "1A": "C",
    "1B": "G",
    "1D": "J",
    "1E": "D",
    "1G": "H",
    "1I": "F",
    "1K": "I",
    "1L": "K"
  },
  "CDEHIJKL": {
    "1A": "E",
    "1B": "J",
    "1D": "I",
    "1E": "C",
    "1G": "H",
    "1I": "D",
    "1K": "L",
    "1L": "K"
  },
  "CDEGIJKL": {
    "1A": "E",
    "1B": "G",
    "1D": "I",
    "1E": "C",
    "1G": "J",
    "1I": "D",
    "1K": "L",
    "1L": "K"
  },
  "CDEGHJKL": {
    "1A": "E",
    "1B": "G",
    "1D": "J",
    "1E": "C",
    "1G": "H",
    "1I": "D",
    "1K": "L",
    "1L": "K"
  },
  "CDEGHIKL": {
    "1A": "E",
    "1B": "G",
    "1D": "I",
    "1E": "C",
    "1G": "H",
    "1I": "D",
    "1K": "L",
    "1L": "K"
  },
  "CDEGHIJL": {
    "1A": "E",
    "1B": "G",
    "1D": "J",
    "1E": "C",
    "1G": "H",
    "1I": "D",
    "1K": "L",
    "1L": "I"
  },
  "CDEGHIJK": {
    "1A": "E",
    "1B": "G",
    "1D": "J",
    "1E": "C",
    "1G": "H",
    "1I": "D",
    "1K": "I",
    "1L": "K"
  },
  "CDEFIJKL": {
    "1A": "C",
    "1B": "J",
    "1D": "E",
    "1E": "D",
    "1G": "I",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "CDEFHJKL": {
    "1A": "C",
    "1B": "J",
    "1D": "E",
    "1E": "D",
    "1G": "H",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "CDEFHIKL": {
    "1A": "C",
    "1B": "E",
    "1D": "I",
    "1E": "D",
    "1G": "H",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "CDEFHIJL": {
    "1A": "C",
    "1B": "J",
    "1D": "E",
    "1E": "D",
    "1G": "H",
    "1I": "F",
    "1K": "L",
    "1L": "I"
  },
  "CDEFHIJK": {
    "1A": "C",
    "1B": "J",
    "1D": "E",
    "1E": "D",
    "1G": "H",
    "1I": "F",
    "1K": "I",
    "1L": "K"
  },
  "CDEFGJKL": {
    "1A": "C",
    "1B": "G",
    "1D": "E",
    "1E": "D",
    "1G": "J",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "CDEFGIKL": {
    "1A": "C",
    "1B": "G",
    "1D": "E",
    "1E": "D",
    "1G": "I",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "CDEFGIJL": {
    "1A": "C",
    "1B": "G",
    "1D": "E",
    "1E": "D",
    "1G": "J",
    "1I": "F",
    "1K": "L",
    "1L": "I"
  },
  "CDEFGIJK": {
    "1A": "C",
    "1B": "G",
    "1D": "E",
    "1E": "D",
    "1G": "J",
    "1I": "F",
    "1K": "I",
    "1L": "K"
  },
  "CDEFGHKL": {
    "1A": "C",
    "1B": "G",
    "1D": "E",
    "1E": "D",
    "1G": "H",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "CDEFGHJL": {
    "1A": "C",
    "1B": "G",
    "1D": "J",
    "1E": "D",
    "1G": "H",
    "1I": "F",
    "1K": "L",
    "1L": "E"
  },
  "CDEFGHJK": {
    "1A": "C",
    "1B": "G",
    "1D": "J",
    "1E": "D",
    "1G": "H",
    "1I": "F",
    "1K": "E",
    "1L": "K"
  },
  "CDEFGHIL": {
    "1A": "C",
    "1B": "G",
    "1D": "E",
    "1E": "D",
    "1G": "H",
    "1I": "F",
    "1K": "L",
    "1L": "I"
  },
  "CDEFGHIK": {
    "1A": "C",
    "1B": "G",
    "1D": "E",
    "1E": "D",
    "1G": "H",
    "1I": "F",
    "1K": "I",
    "1L": "K"
  },
  "CDEFGHIJ": {
    "1A": "C",
    "1B": "G",
    "1D": "J",
    "1E": "D",
    "1G": "H",
    "1I": "F",
    "1K": "E",
    "1L": "I"
  },
  "BFGHIJKL": {
    "1A": "H",
    "1B": "J",
    "1D": "B",
    "1E": "F",
    "1G": "I",
    "1I": "G",
    "1K": "L",
    "1L": "K"
  },
  "BEGHIJKL": {
    "1A": "E",
    "1B": "J",
    "1D": "I",
    "1E": "B",
    "1G": "H",
    "1I": "G",
    "1K": "L",
    "1L": "K"
  },
  "BEFHIJKL": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "F",
    "1G": "I",
    "1I": "H",
    "1K": "L",
    "1L": "K"
  },
  "BEFGIJKL": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "F",
    "1G": "I",
    "1I": "G",
    "1K": "L",
    "1L": "K"
  },
  "BEFGHJKL": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "F",
    "1G": "H",
    "1I": "G",
    "1K": "L",
    "1L": "K"
  },
  "BEFGHIKL": {
    "1A": "E",
    "1B": "G",
    "1D": "B",
    "1E": "F",
    "1G": "I",
    "1I": "H",
    "1K": "L",
    "1L": "K"
  },
  "BEFGHIJL": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "F",
    "1G": "H",
    "1I": "G",
    "1K": "L",
    "1L": "I"
  },
  "BEFGHIJK": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "F",
    "1G": "H",
    "1I": "G",
    "1K": "I",
    "1L": "K"
  },
  "BDGHIJKL": {
    "1A": "H",
    "1B": "J",
    "1D": "B",
    "1E": "D",
    "1G": "I",
    "1I": "G",
    "1K": "L",
    "1L": "K"
  },
  "BDFHIJKL": {
    "1A": "H",
    "1B": "J",
    "1D": "B",
    "1E": "D",
    "1G": "I",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "BDFGIJKL": {
    "1A": "I",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "J",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "BDFGHJKL": {
    "1A": "H",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "J",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "BDFGHIKL": {
    "1A": "H",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "I",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "BDFGHIJL": {
    "1A": "H",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "J",
    "1I": "F",
    "1K": "L",
    "1L": "I"
  },
  "BDFGHIJK": {
    "1A": "H",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "J",
    "1I": "F",
    "1K": "I",
    "1L": "K"
  },
  "BDEHIJKL": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "D",
    "1G": "I",
    "1I": "H",
    "1K": "L",
    "1L": "K"
  },
  "BDEGIJKL": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "D",
    "1G": "I",
    "1I": "G",
    "1K": "L",
    "1L": "K"
  },
  "BDEGHJKL": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "D",
    "1G": "H",
    "1I": "G",
    "1K": "L",
    "1L": "K"
  },
  "BDEGHIKL": {
    "1A": "E",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "I",
    "1I": "H",
    "1K": "L",
    "1L": "K"
  },
  "BDEGHIJL": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "D",
    "1G": "H",
    "1I": "G",
    "1K": "L",
    "1L": "I"
  },
  "BDEGHIJK": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "D",
    "1G": "H",
    "1I": "G",
    "1K": "I",
    "1L": "K"
  },
  "BDEFIJKL": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "D",
    "1G": "I",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "BDEFHJKL": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "D",
    "1G": "H",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "BDEFHIKL": {
    "1A": "E",
    "1B": "I",
    "1D": "B",
    "1E": "D",
    "1G": "H",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "BDEFHIJL": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "D",
    "1G": "H",
    "1I": "F",
    "1K": "L",
    "1L": "I"
  },
  "BDEFHIJK": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "D",
    "1G": "H",
    "1I": "F",
    "1K": "I",
    "1L": "K"
  },
  "BDEFGJKL": {
    "1A": "E",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "J",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "BDEFGIKL": {
    "1A": "E",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "I",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "BDEFGIJL": {
    "1A": "E",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "J",
    "1I": "F",
    "1K": "L",
    "1L": "I"
  },
  "BDEFGIJK": {
    "1A": "E",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "J",
    "1I": "F",
    "1K": "I",
    "1L": "K"
  },
  "BDEFGHKL": {
    "1A": "E",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "H",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "BDEFGHJL": {
    "1A": "H",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "J",
    "1I": "F",
    "1K": "L",
    "1L": "E"
  },
  "BDEFGHJK": {
    "1A": "H",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "J",
    "1I": "F",
    "1K": "E",
    "1L": "K"
  },
  "BDEFGHIL": {
    "1A": "E",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "H",
    "1I": "F",
    "1K": "L",
    "1L": "I"
  },
  "BDEFGHIK": {
    "1A": "E",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "H",
    "1I": "F",
    "1K": "I",
    "1L": "K"
  },
  "BDEFGHIJ": {
    "1A": "H",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "J",
    "1I": "F",
    "1K": "E",
    "1L": "I"
  },
  "BCGHIJKL": {
    "1A": "H",
    "1B": "J",
    "1D": "B",
    "1E": "C",
    "1G": "I",
    "1I": "G",
    "1K": "L",
    "1L": "K"
  },
  "BCFHIJKL": {
    "1A": "H",
    "1B": "J",
    "1D": "B",
    "1E": "C",
    "1G": "I",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "BCFGIJKL": {
    "1A": "I",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "J",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "BCFGHJKL": {
    "1A": "H",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "J",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "BCFGHIKL": {
    "1A": "H",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "I",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "BCFGHIJL": {
    "1A": "H",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "J",
    "1I": "F",
    "1K": "L",
    "1L": "I"
  },
  "BCFGHIJK": {
    "1A": "H",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "J",
    "1I": "F",
    "1K": "I",
    "1L": "K"
  },
  "BCEHIJKL": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "C",
    "1G": "I",
    "1I": "H",
    "1K": "L",
    "1L": "K"
  },
  "BCEGIJKL": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "C",
    "1G": "I",
    "1I": "G",
    "1K": "L",
    "1L": "K"
  },
  "BCEGHJKL": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "C",
    "1G": "H",
    "1I": "G",
    "1K": "L",
    "1L": "K"
  },
  "BCEGHIKL": {
    "1A": "E",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "I",
    "1I": "H",
    "1K": "L",
    "1L": "K"
  },
  "BCEGHIJL": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "C",
    "1G": "H",
    "1I": "G",
    "1K": "L",
    "1L": "I"
  },
  "BCEGHIJK": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "C",
    "1G": "H",
    "1I": "G",
    "1K": "I",
    "1L": "K"
  },
  "BCEFIJKL": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "C",
    "1G": "I",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "BCEFHJKL": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "C",
    "1G": "H",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "BCEFHIKL": {
    "1A": "E",
    "1B": "I",
    "1D": "B",
    "1E": "C",
    "1G": "H",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "BCEFHIJL": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "C",
    "1G": "H",
    "1I": "F",
    "1K": "L",
    "1L": "I"
  },
  "BCEFHIJK": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "C",
    "1G": "H",
    "1I": "F",
    "1K": "I",
    "1L": "K"
  },
  "BCEFGJKL": {
    "1A": "E",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "J",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "BCEFGIKL": {
    "1A": "E",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "I",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "BCEFGIJL": {
    "1A": "E",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "J",
    "1I": "F",
    "1K": "L",
    "1L": "I"
  },
  "BCEFGIJK": {
    "1A": "E",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "J",
    "1I": "F",
    "1K": "I",
    "1L": "K"
  },
  "BCEFGHKL": {
    "1A": "E",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "H",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "BCEFGHJL": {
    "1A": "H",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "J",
    "1I": "F",
    "1K": "L",
    "1L": "E"
  },
  "BCEFGHJK": {
    "1A": "H",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "J",
    "1I": "F",
    "1K": "E",
    "1L": "K"
  },
  "BCEFGHIL": {
    "1A": "E",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "H",
    "1I": "F",
    "1K": "L",
    "1L": "I"
  },
  "BCEFGHIK": {
    "1A": "E",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "H",
    "1I": "F",
    "1K": "I",
    "1L": "K"
  },
  "BCEFGHIJ": {
    "1A": "H",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "J",
    "1I": "F",
    "1K": "E",
    "1L": "I"
  },
  "BCDHIJKL": {
    "1A": "H",
    "1B": "J",
    "1D": "B",
    "1E": "C",
    "1G": "I",
    "1I": "D",
    "1K": "L",
    "1L": "K"
  },
  "BCDGIJKL": {
    "1A": "I",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "J",
    "1I": "D",
    "1K": "L",
    "1L": "K"
  },
  "BCDGHJKL": {
    "1A": "H",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "J",
    "1I": "D",
    "1K": "L",
    "1L": "K"
  },
  "BCDGHIKL": {
    "1A": "H",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "I",
    "1I": "D",
    "1K": "L",
    "1L": "K"
  },
  "BCDGHIJL": {
    "1A": "H",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "J",
    "1I": "D",
    "1K": "L",
    "1L": "I"
  },
  "BCDGHIJK": {
    "1A": "H",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "J",
    "1I": "D",
    "1K": "I",
    "1L": "K"
  },
  "BCDFIJKL": {
    "1A": "C",
    "1B": "J",
    "1D": "B",
    "1E": "D",
    "1G": "I",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "BCDFHJKL": {
    "1A": "C",
    "1B": "J",
    "1D": "B",
    "1E": "D",
    "1G": "H",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "BCDFHIKL": {
    "1A": "C",
    "1B": "I",
    "1D": "B",
    "1E": "D",
    "1G": "H",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "BCDFHIJL": {
    "1A": "C",
    "1B": "J",
    "1D": "B",
    "1E": "D",
    "1G": "H",
    "1I": "F",
    "1K": "L",
    "1L": "I"
  },
  "BCDFHIJK": {
    "1A": "C",
    "1B": "J",
    "1D": "B",
    "1E": "D",
    "1G": "H",
    "1I": "F",
    "1K": "I",
    "1L": "K"
  },
  "BCDFGJKL": {
    "1A": "C",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "J",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "BCDFGIKL": {
    "1A": "C",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "I",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "BCDFGIJL": {
    "1A": "C",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "J",
    "1I": "F",
    "1K": "L",
    "1L": "I"
  },
  "BCDFGIJK": {
    "1A": "C",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "J",
    "1I": "F",
    "1K": "I",
    "1L": "K"
  },
  "BCDFGHKL": {
    "1A": "C",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "H",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "BCDFGHJL": {
    "1A": "C",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "H",
    "1I": "F",
    "1K": "L",
    "1L": "J"
  },
  "BCDFGHJK": {
    "1A": "H",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "J",
    "1I": "F",
    "1K": "D",
    "1L": "K"
  },
  "BCDFGHIL": {
    "1A": "C",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "H",
    "1I": "F",
    "1K": "L",
    "1L": "I"
  },
  "BCDFGHIK": {
    "1A": "C",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "H",
    "1I": "F",
    "1K": "I",
    "1L": "K"
  },
  "BCDFGHIJ": {
    "1A": "H",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "J",
    "1I": "F",
    "1K": "D",
    "1L": "I"
  },
  "BCDEIJKL": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "C",
    "1G": "I",
    "1I": "D",
    "1K": "L",
    "1L": "K"
  },
  "BCDEHJKL": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "C",
    "1G": "H",
    "1I": "D",
    "1K": "L",
    "1L": "K"
  },
  "BCDEHIKL": {
    "1A": "E",
    "1B": "I",
    "1D": "B",
    "1E": "C",
    "1G": "H",
    "1I": "D",
    "1K": "L",
    "1L": "K"
  },
  "BCDEHIJL": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "C",
    "1G": "H",
    "1I": "D",
    "1K": "L",
    "1L": "I"
  },
  "BCDEHIJK": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "C",
    "1G": "H",
    "1I": "D",
    "1K": "I",
    "1L": "K"
  },
  "BCDEGJKL": {
    "1A": "E",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "J",
    "1I": "D",
    "1K": "L",
    "1L": "K"
  },
  "BCDEGIKL": {
    "1A": "E",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "I",
    "1I": "D",
    "1K": "L",
    "1L": "K"
  },
  "BCDEGIJL": {
    "1A": "E",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "J",
    "1I": "D",
    "1K": "L",
    "1L": "I"
  },
  "BCDEGIJK": {
    "1A": "E",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "J",
    "1I": "D",
    "1K": "I",
    "1L": "K"
  },
  "BCDEGHKL": {
    "1A": "E",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "H",
    "1I": "D",
    "1K": "L",
    "1L": "K"
  },
  "BCDEGHJL": {
    "1A": "H",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "J",
    "1I": "D",
    "1K": "L",
    "1L": "E"
  },
  "BCDEGHJK": {
    "1A": "H",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "J",
    "1I": "D",
    "1K": "E",
    "1L": "K"
  },
  "BCDEGHIL": {
    "1A": "E",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "H",
    "1I": "D",
    "1K": "L",
    "1L": "I"
  },
  "BCDEGHIK": {
    "1A": "E",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "H",
    "1I": "D",
    "1K": "I",
    "1L": "K"
  },
  "BCDEGHIJ": {
    "1A": "H",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "J",
    "1I": "D",
    "1K": "E",
    "1L": "I"
  },
  "BCDEFJKL": {
    "1A": "C",
    "1B": "J",
    "1D": "B",
    "1E": "D",
    "1G": "E",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "BCDEFIKL": {
    "1A": "C",
    "1B": "E",
    "1D": "B",
    "1E": "D",
    "1G": "I",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "BCDEFIJL": {
    "1A": "C",
    "1B": "J",
    "1D": "B",
    "1E": "D",
    "1G": "E",
    "1I": "F",
    "1K": "L",
    "1L": "I"
  },
  "BCDEFIJK": {
    "1A": "C",
    "1B": "J",
    "1D": "B",
    "1E": "D",
    "1G": "E",
    "1I": "F",
    "1K": "I",
    "1L": "K"
  },
  "BCDEFHKL": {
    "1A": "C",
    "1B": "E",
    "1D": "B",
    "1E": "D",
    "1G": "H",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "BCDEFHJL": {
    "1A": "C",
    "1B": "J",
    "1D": "B",
    "1E": "D",
    "1G": "H",
    "1I": "F",
    "1K": "L",
    "1L": "E"
  },
  "BCDEFHJK": {
    "1A": "C",
    "1B": "J",
    "1D": "B",
    "1E": "D",
    "1G": "H",
    "1I": "F",
    "1K": "E",
    "1L": "K"
  },
  "BCDEFHIL": {
    "1A": "C",
    "1B": "E",
    "1D": "B",
    "1E": "D",
    "1G": "H",
    "1I": "F",
    "1K": "L",
    "1L": "I"
  },
  "BCDEFHIK": {
    "1A": "C",
    "1B": "E",
    "1D": "B",
    "1E": "D",
    "1G": "H",
    "1I": "F",
    "1K": "I",
    "1L": "K"
  },
  "BCDEFHIJ": {
    "1A": "C",
    "1B": "J",
    "1D": "B",
    "1E": "D",
    "1G": "H",
    "1I": "F",
    "1K": "E",
    "1L": "I"
  },
  "BCDEFGKL": {
    "1A": "C",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "E",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "BCDEFGJL": {
    "1A": "C",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "J",
    "1I": "F",
    "1K": "L",
    "1L": "E"
  },
  "BCDEFGJK": {
    "1A": "C",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "J",
    "1I": "F",
    "1K": "E",
    "1L": "K"
  },
  "BCDEFGIL": {
    "1A": "C",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "E",
    "1I": "F",
    "1K": "L",
    "1L": "I"
  },
  "BCDEFGIK": {
    "1A": "C",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "E",
    "1I": "F",
    "1K": "I",
    "1L": "K"
  },
  "BCDEFGIJ": {
    "1A": "C",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "J",
    "1I": "F",
    "1K": "E",
    "1L": "I"
  },
  "BCDEFGHL": {
    "1A": "C",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "H",
    "1I": "F",
    "1K": "L",
    "1L": "E"
  },
  "BCDEFGHK": {
    "1A": "C",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "H",
    "1I": "F",
    "1K": "E",
    "1L": "K"
  },
  "BCDEFGHJ": {
    "1A": "H",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "J",
    "1I": "F",
    "1K": "D",
    "1L": "E"
  },
  "BCDEFGHI": {
    "1A": "C",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "H",
    "1I": "F",
    "1K": "E",
    "1L": "I"
  },
  "AFGHIJKL": {
    "1A": "H",
    "1B": "J",
    "1D": "I",
    "1E": "F",
    "1G": "A",
    "1I": "G",
    "1K": "L",
    "1L": "K"
  },
  "AEGHIJKL": {
    "1A": "E",
    "1B": "J",
    "1D": "I",
    "1E": "A",
    "1G": "H",
    "1I": "G",
    "1K": "L",
    "1L": "K"
  },
  "AEFHIJKL": {
    "1A": "E",
    "1B": "J",
    "1D": "I",
    "1E": "F",
    "1G": "A",
    "1I": "H",
    "1K": "L",
    "1L": "K"
  },
  "AEFGIJKL": {
    "1A": "E",
    "1B": "J",
    "1D": "I",
    "1E": "F",
    "1G": "A",
    "1I": "G",
    "1K": "L",
    "1L": "K"
  },
  "AEFGHJKL": {
    "1A": "E",
    "1B": "G",
    "1D": "J",
    "1E": "F",
    "1G": "A",
    "1I": "H",
    "1K": "L",
    "1L": "K"
  },
  "AEFGHIKL": {
    "1A": "E",
    "1B": "G",
    "1D": "I",
    "1E": "F",
    "1G": "A",
    "1I": "H",
    "1K": "L",
    "1L": "K"
  },
  "AEFGHIJL": {
    "1A": "E",
    "1B": "G",
    "1D": "J",
    "1E": "F",
    "1G": "A",
    "1I": "H",
    "1K": "L",
    "1L": "I"
  },
  "AEFGHIJK": {
    "1A": "E",
    "1B": "G",
    "1D": "J",
    "1E": "F",
    "1G": "A",
    "1I": "H",
    "1K": "I",
    "1L": "K"
  },
  "ADGHIJKL": {
    "1A": "H",
    "1B": "J",
    "1D": "I",
    "1E": "D",
    "1G": "A",
    "1I": "G",
    "1K": "L",
    "1L": "K"
  },
  "ADFHIJKL": {
    "1A": "H",
    "1B": "J",
    "1D": "I",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "ADFGIJKL": {
    "1A": "I",
    "1B": "G",
    "1D": "J",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "ADFGHJKL": {
    "1A": "H",
    "1B": "G",
    "1D": "J",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "ADFGHIKL": {
    "1A": "H",
    "1B": "G",
    "1D": "I",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "ADFGHIJL": {
    "1A": "H",
    "1B": "G",
    "1D": "J",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "I"
  },
  "ADFGHIJK": {
    "1A": "H",
    "1B": "G",
    "1D": "J",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "I",
    "1L": "K"
  },
  "ADEHIJKL": {
    "1A": "E",
    "1B": "J",
    "1D": "I",
    "1E": "D",
    "1G": "A",
    "1I": "H",
    "1K": "L",
    "1L": "K"
  },
  "ADEGIJKL": {
    "1A": "E",
    "1B": "J",
    "1D": "I",
    "1E": "D",
    "1G": "A",
    "1I": "G",
    "1K": "L",
    "1L": "K"
  },
  "ADEGHJKL": {
    "1A": "E",
    "1B": "G",
    "1D": "J",
    "1E": "D",
    "1G": "A",
    "1I": "H",
    "1K": "L",
    "1L": "K"
  },
  "ADEGHIKL": {
    "1A": "E",
    "1B": "G",
    "1D": "I",
    "1E": "D",
    "1G": "A",
    "1I": "H",
    "1K": "L",
    "1L": "K"
  },
  "ADEGHIJL": {
    "1A": "E",
    "1B": "G",
    "1D": "J",
    "1E": "D",
    "1G": "A",
    "1I": "H",
    "1K": "L",
    "1L": "I"
  },
  "ADEGHIJK": {
    "1A": "E",
    "1B": "G",
    "1D": "J",
    "1E": "D",
    "1G": "A",
    "1I": "H",
    "1K": "I",
    "1L": "K"
  },
  "ADEFIJKL": {
    "1A": "E",
    "1B": "J",
    "1D": "I",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "ADEFHJKL": {
    "1A": "H",
    "1B": "J",
    "1D": "E",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "ADEFHIKL": {
    "1A": "H",
    "1B": "E",
    "1D": "I",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "ADEFHIJL": {
    "1A": "H",
    "1B": "J",
    "1D": "E",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "I"
  },
  "ADEFHIJK": {
    "1A": "H",
    "1B": "J",
    "1D": "E",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "I",
    "1L": "K"
  },
  "ADEFGJKL": {
    "1A": "E",
    "1B": "G",
    "1D": "J",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "ADEFGIKL": {
    "1A": "E",
    "1B": "G",
    "1D": "I",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "ADEFGIJL": {
    "1A": "E",
    "1B": "G",
    "1D": "J",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "I"
  },
  "ADEFGIJK": {
    "1A": "E",
    "1B": "G",
    "1D": "J",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "I",
    "1L": "K"
  },
  "ADEFGHKL": {
    "1A": "H",
    "1B": "G",
    "1D": "E",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "ADEFGHJL": {
    "1A": "H",
    "1B": "G",
    "1D": "J",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "E"
  },
  "ADEFGHJK": {
    "1A": "H",
    "1B": "G",
    "1D": "J",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "E",
    "1L": "K"
  },
  "ADEFGHIL": {
    "1A": "H",
    "1B": "G",
    "1D": "E",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "I"
  },
  "ADEFGHIK": {
    "1A": "H",
    "1B": "G",
    "1D": "E",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "I",
    "1L": "K"
  },
  "ADEFGHIJ": {
    "1A": "H",
    "1B": "G",
    "1D": "J",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "E",
    "1L": "I"
  },
  "ACGHIJKL": {
    "1A": "H",
    "1B": "J",
    "1D": "I",
    "1E": "C",
    "1G": "A",
    "1I": "G",
    "1K": "L",
    "1L": "K"
  },
  "ACFHIJKL": {
    "1A": "H",
    "1B": "J",
    "1D": "I",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "ACFGIJKL": {
    "1A": "I",
    "1B": "G",
    "1D": "J",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "ACFGHJKL": {
    "1A": "H",
    "1B": "G",
    "1D": "J",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "ACFGHIKL": {
    "1A": "H",
    "1B": "G",
    "1D": "I",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "ACFGHIJL": {
    "1A": "H",
    "1B": "G",
    "1D": "J",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "I"
  },
  "ACFGHIJK": {
    "1A": "H",
    "1B": "G",
    "1D": "J",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "I",
    "1L": "K"
  },
  "ACEHIJKL": {
    "1A": "E",
    "1B": "J",
    "1D": "I",
    "1E": "C",
    "1G": "A",
    "1I": "H",
    "1K": "L",
    "1L": "K"
  },
  "ACEGIJKL": {
    "1A": "E",
    "1B": "J",
    "1D": "I",
    "1E": "C",
    "1G": "A",
    "1I": "G",
    "1K": "L",
    "1L": "K"
  },
  "ACEGHJKL": {
    "1A": "E",
    "1B": "G",
    "1D": "J",
    "1E": "C",
    "1G": "A",
    "1I": "H",
    "1K": "L",
    "1L": "K"
  },
  "ACEGHIKL": {
    "1A": "E",
    "1B": "G",
    "1D": "I",
    "1E": "C",
    "1G": "A",
    "1I": "H",
    "1K": "L",
    "1L": "K"
  },
  "ACEGHIJL": {
    "1A": "E",
    "1B": "G",
    "1D": "J",
    "1E": "C",
    "1G": "A",
    "1I": "H",
    "1K": "L",
    "1L": "I"
  },
  "ACEGHIJK": {
    "1A": "E",
    "1B": "G",
    "1D": "J",
    "1E": "C",
    "1G": "A",
    "1I": "H",
    "1K": "I",
    "1L": "K"
  },
  "ACEFIJKL": {
    "1A": "E",
    "1B": "J",
    "1D": "I",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "ACEFHJKL": {
    "1A": "H",
    "1B": "J",
    "1D": "E",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "ACEFHIKL": {
    "1A": "H",
    "1B": "E",
    "1D": "I",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "ACEFHIJL": {
    "1A": "H",
    "1B": "J",
    "1D": "E",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "I"
  },
  "ACEFHIJK": {
    "1A": "H",
    "1B": "J",
    "1D": "E",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "I",
    "1L": "K"
  },
  "ACEFGJKL": {
    "1A": "E",
    "1B": "G",
    "1D": "J",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "ACEFGIKL": {
    "1A": "E",
    "1B": "G",
    "1D": "I",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "ACEFGIJL": {
    "1A": "E",
    "1B": "G",
    "1D": "J",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "I"
  },
  "ACEFGIJK": {
    "1A": "E",
    "1B": "G",
    "1D": "J",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "I",
    "1L": "K"
  },
  "ACEFGHKL": {
    "1A": "H",
    "1B": "G",
    "1D": "E",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "ACEFGHJL": {
    "1A": "H",
    "1B": "G",
    "1D": "J",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "E"
  },
  "ACEFGHJK": {
    "1A": "H",
    "1B": "G",
    "1D": "J",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "E",
    "1L": "K"
  },
  "ACEFGHIL": {
    "1A": "H",
    "1B": "G",
    "1D": "E",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "I"
  },
  "ACEFGHIK": {
    "1A": "H",
    "1B": "G",
    "1D": "E",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "I",
    "1L": "K"
  },
  "ACEFGHIJ": {
    "1A": "H",
    "1B": "G",
    "1D": "J",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "E",
    "1L": "I"
  },
  "ACDHIJKL": {
    "1A": "H",
    "1B": "J",
    "1D": "I",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "L",
    "1L": "K"
  },
  "ACDGIJKL": {
    "1A": "I",
    "1B": "G",
    "1D": "J",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "L",
    "1L": "K"
  },
  "ACDGHJKL": {
    "1A": "H",
    "1B": "G",
    "1D": "J",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "L",
    "1L": "K"
  },
  "ACDGHIKL": {
    "1A": "H",
    "1B": "G",
    "1D": "I",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "L",
    "1L": "K"
  },
  "ACDGHIJL": {
    "1A": "H",
    "1B": "G",
    "1D": "J",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "L",
    "1L": "I"
  },
  "ACDGHIJK": {
    "1A": "H",
    "1B": "G",
    "1D": "J",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "I",
    "1L": "K"
  },
  "ACDFIJKL": {
    "1A": "C",
    "1B": "J",
    "1D": "I",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "ACDFHJKL": {
    "1A": "H",
    "1B": "J",
    "1D": "F",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "L",
    "1L": "K"
  },
  "ACDFHIKL": {
    "1A": "H",
    "1B": "F",
    "1D": "I",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "L",
    "1L": "K"
  },
  "ACDFHIJL": {
    "1A": "H",
    "1B": "J",
    "1D": "F",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "L",
    "1L": "I"
  },
  "ACDFHIJK": {
    "1A": "H",
    "1B": "J",
    "1D": "F",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "I",
    "1L": "K"
  },
  "ACDFGJKL": {
    "1A": "C",
    "1B": "G",
    "1D": "J",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "ACDFGIKL": {
    "1A": "C",
    "1B": "G",
    "1D": "I",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "ACDFGIJL": {
    "1A": "C",
    "1B": "G",
    "1D": "J",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "I"
  },
  "ACDFGIJK": {
    "1A": "C",
    "1B": "G",
    "1D": "J",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "I",
    "1L": "K"
  },
  "ACDFGHKL": {
    "1A": "H",
    "1B": "G",
    "1D": "F",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "L",
    "1L": "K"
  },
  "ACDFGHJL": {
    "1A": "C",
    "1B": "G",
    "1D": "J",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "H"
  },
  "ACDFGHJK": {
    "1A": "H",
    "1B": "G",
    "1D": "J",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "D",
    "1L": "K"
  },
  "ACDFGHIL": {
    "1A": "H",
    "1B": "G",
    "1D": "F",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "L",
    "1L": "I"
  },
  "ACDFGHIK": {
    "1A": "H",
    "1B": "G",
    "1D": "F",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "I",
    "1L": "K"
  },
  "ACDFGHIJ": {
    "1A": "H",
    "1B": "G",
    "1D": "J",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "D",
    "1L": "I"
  },
  "ACDEIJKL": {
    "1A": "E",
    "1B": "J",
    "1D": "I",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "L",
    "1L": "K"
  },
  "ACDEHJKL": {
    "1A": "H",
    "1B": "J",
    "1D": "E",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "L",
    "1L": "K"
  },
  "ACDEHIKL": {
    "1A": "H",
    "1B": "E",
    "1D": "I",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "L",
    "1L": "K"
  },
  "ACDEHIJL": {
    "1A": "H",
    "1B": "J",
    "1D": "E",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "L",
    "1L": "I"
  },
  "ACDEHIJK": {
    "1A": "H",
    "1B": "J",
    "1D": "E",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "I",
    "1L": "K"
  },
  "ACDEGJKL": {
    "1A": "E",
    "1B": "G",
    "1D": "J",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "L",
    "1L": "K"
  },
  "ACDEGIKL": {
    "1A": "E",
    "1B": "G",
    "1D": "I",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "L",
    "1L": "K"
  },
  "ACDEGIJL": {
    "1A": "E",
    "1B": "G",
    "1D": "J",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "L",
    "1L": "I"
  },
  "ACDEGIJK": {
    "1A": "E",
    "1B": "G",
    "1D": "J",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "I",
    "1L": "K"
  },
  "ACDEGHKL": {
    "1A": "H",
    "1B": "G",
    "1D": "E",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "L",
    "1L": "K"
  },
  "ACDEGHJL": {
    "1A": "H",
    "1B": "G",
    "1D": "J",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "L",
    "1L": "E"
  },
  "ACDEGHJK": {
    "1A": "H",
    "1B": "G",
    "1D": "J",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "E",
    "1L": "K"
  },
  "ACDEGHIL": {
    "1A": "H",
    "1B": "G",
    "1D": "E",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "L",
    "1L": "I"
  },
  "ACDEGHIK": {
    "1A": "H",
    "1B": "G",
    "1D": "E",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "I",
    "1L": "K"
  },
  "ACDEGHIJ": {
    "1A": "H",
    "1B": "G",
    "1D": "J",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "E",
    "1L": "I"
  },
  "ACDEFJKL": {
    "1A": "C",
    "1B": "J",
    "1D": "E",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "ACDEFIKL": {
    "1A": "C",
    "1B": "E",
    "1D": "I",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "ACDEFIJL": {
    "1A": "C",
    "1B": "J",
    "1D": "E",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "I"
  },
  "ACDEFIJK": {
    "1A": "C",
    "1B": "J",
    "1D": "E",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "I",
    "1L": "K"
  },
  "ACDEFHKL": {
    "1A": "H",
    "1B": "E",
    "1D": "F",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "L",
    "1L": "K"
  },
  "ACDEFHJL": {
    "1A": "H",
    "1B": "J",
    "1D": "F",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "L",
    "1L": "E"
  },
  "ACDEFHJK": {
    "1A": "H",
    "1B": "J",
    "1D": "E",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "D",
    "1L": "K"
  },
  "ACDEFHIL": {
    "1A": "H",
    "1B": "E",
    "1D": "F",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "L",
    "1L": "I"
  },
  "ACDEFHIK": {
    "1A": "H",
    "1B": "E",
    "1D": "F",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "I",
    "1L": "K"
  },
  "ACDEFHIJ": {
    "1A": "H",
    "1B": "J",
    "1D": "E",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "D",
    "1L": "I"
  },
  "ACDEFGKL": {
    "1A": "C",
    "1B": "G",
    "1D": "E",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "ACDEFGJL": {
    "1A": "C",
    "1B": "G",
    "1D": "J",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "E"
  },
  "ACDEFGJK": {
    "1A": "C",
    "1B": "G",
    "1D": "J",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "E",
    "1L": "K"
  },
  "ACDEFGIL": {
    "1A": "C",
    "1B": "G",
    "1D": "E",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "I"
  },
  "ACDEFGIK": {
    "1A": "C",
    "1B": "G",
    "1D": "E",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "I",
    "1L": "K"
  },
  "ACDEFGIJ": {
    "1A": "C",
    "1B": "G",
    "1D": "J",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "E",
    "1L": "I"
  },
  "ACDEFGHL": {
    "1A": "H",
    "1B": "G",
    "1D": "F",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "L",
    "1L": "E"
  },
  "ACDEFGHK": {
    "1A": "H",
    "1B": "G",
    "1D": "E",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "D",
    "1L": "K"
  },
  "ACDEFGHJ": {
    "1A": "H",
    "1B": "G",
    "1D": "J",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "D",
    "1L": "E"
  },
  "ACDEFGHI": {
    "1A": "H",
    "1B": "G",
    "1D": "E",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "D",
    "1L": "I"
  },
  "ABGHIJKL": {
    "1A": "H",
    "1B": "J",
    "1D": "B",
    "1E": "A",
    "1G": "I",
    "1I": "G",
    "1K": "L",
    "1L": "K"
  },
  "ABFHIJKL": {
    "1A": "H",
    "1B": "J",
    "1D": "B",
    "1E": "A",
    "1G": "I",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "ABFGIJKL": {
    "1A": "I",
    "1B": "J",
    "1D": "B",
    "1E": "F",
    "1G": "A",
    "1I": "G",
    "1K": "L",
    "1L": "K"
  },
  "ABFGHJKL": {
    "1A": "H",
    "1B": "J",
    "1D": "B",
    "1E": "F",
    "1G": "A",
    "1I": "G",
    "1K": "L",
    "1L": "K"
  },
  "ABFGHIKL": {
    "1A": "H",
    "1B": "G",
    "1D": "B",
    "1E": "A",
    "1G": "I",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "ABFGHIJL": {
    "1A": "H",
    "1B": "J",
    "1D": "B",
    "1E": "F",
    "1G": "A",
    "1I": "G",
    "1K": "L",
    "1L": "I"
  },
  "ABFGHIJK": {
    "1A": "H",
    "1B": "J",
    "1D": "B",
    "1E": "F",
    "1G": "A",
    "1I": "G",
    "1K": "I",
    "1L": "K"
  },
  "ABEHIJKL": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "A",
    "1G": "I",
    "1I": "H",
    "1K": "L",
    "1L": "K"
  },
  "ABEGIJKL": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "A",
    "1G": "I",
    "1I": "G",
    "1K": "L",
    "1L": "K"
  },
  "ABEGHJKL": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "A",
    "1G": "H",
    "1I": "G",
    "1K": "L",
    "1L": "K"
  },
  "ABEGHIKL": {
    "1A": "E",
    "1B": "G",
    "1D": "B",
    "1E": "A",
    "1G": "I",
    "1I": "H",
    "1K": "L",
    "1L": "K"
  },
  "ABEGHIJL": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "A",
    "1G": "H",
    "1I": "G",
    "1K": "L",
    "1L": "I"
  },
  "ABEGHIJK": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "A",
    "1G": "H",
    "1I": "G",
    "1K": "I",
    "1L": "K"
  },
  "ABEFIJKL": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "A",
    "1G": "I",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "ABEFHJKL": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "F",
    "1G": "A",
    "1I": "H",
    "1K": "L",
    "1L": "K"
  },
  "ABEFHIKL": {
    "1A": "E",
    "1B": "I",
    "1D": "B",
    "1E": "F",
    "1G": "A",
    "1I": "H",
    "1K": "L",
    "1L": "K"
  },
  "ABEFHIJL": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "F",
    "1G": "A",
    "1I": "H",
    "1K": "L",
    "1L": "I"
  },
  "ABEFHIJK": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "F",
    "1G": "A",
    "1I": "H",
    "1K": "I",
    "1L": "K"
  },
  "ABEFGJKL": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "F",
    "1G": "A",
    "1I": "G",
    "1K": "L",
    "1L": "K"
  },
  "ABEFGIKL": {
    "1A": "E",
    "1B": "G",
    "1D": "B",
    "1E": "A",
    "1G": "I",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "ABEFGIJL": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "F",
    "1G": "A",
    "1I": "G",
    "1K": "L",
    "1L": "I"
  },
  "ABEFGIJK": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "F",
    "1G": "A",
    "1I": "G",
    "1K": "I",
    "1L": "K"
  },
  "ABEFGHKL": {
    "1A": "E",
    "1B": "G",
    "1D": "B",
    "1E": "F",
    "1G": "A",
    "1I": "H",
    "1K": "L",
    "1L": "K"
  },
  "ABEFGHJL": {
    "1A": "H",
    "1B": "J",
    "1D": "B",
    "1E": "F",
    "1G": "A",
    "1I": "G",
    "1K": "L",
    "1L": "E"
  },
  "ABEFGHJK": {
    "1A": "H",
    "1B": "J",
    "1D": "B",
    "1E": "F",
    "1G": "A",
    "1I": "G",
    "1K": "E",
    "1L": "K"
  },
  "ABEFGHIL": {
    "1A": "E",
    "1B": "G",
    "1D": "B",
    "1E": "F",
    "1G": "A",
    "1I": "H",
    "1K": "L",
    "1L": "I"
  },
  "ABEFGHIK": {
    "1A": "E",
    "1B": "G",
    "1D": "B",
    "1E": "F",
    "1G": "A",
    "1I": "H",
    "1K": "I",
    "1L": "K"
  },
  "ABEFGHIJ": {
    "1A": "H",
    "1B": "J",
    "1D": "B",
    "1E": "F",
    "1G": "A",
    "1I": "G",
    "1K": "E",
    "1L": "I"
  },
  "ABDHIJKL": {
    "1A": "I",
    "1B": "J",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "H",
    "1K": "L",
    "1L": "K"
  },
  "ABDGIJKL": {
    "1A": "I",
    "1B": "J",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "G",
    "1K": "L",
    "1L": "K"
  },
  "ABDGHJKL": {
    "1A": "H",
    "1B": "J",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "G",
    "1K": "L",
    "1L": "K"
  },
  "ABDGHIKL": {
    "1A": "I",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "H",
    "1K": "L",
    "1L": "K"
  },
  "ABDGHIJL": {
    "1A": "H",
    "1B": "J",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "G",
    "1K": "L",
    "1L": "I"
  },
  "ABDGHIJK": {
    "1A": "H",
    "1B": "J",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "G",
    "1K": "I",
    "1L": "K"
  },
  "ABDFIJKL": {
    "1A": "I",
    "1B": "J",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "ABDFHJKL": {
    "1A": "H",
    "1B": "J",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "ABDFHIKL": {
    "1A": "H",
    "1B": "I",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "ABDFHIJL": {
    "1A": "H",
    "1B": "J",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "I"
  },
  "ABDFHIJK": {
    "1A": "H",
    "1B": "J",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "I",
    "1L": "K"
  },
  "ABDFGJKL": {
    "1A": "F",
    "1B": "J",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "G",
    "1K": "L",
    "1L": "K"
  },
  "ABDFGIKL": {
    "1A": "I",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "ABDFGIJL": {
    "1A": "F",
    "1B": "J",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "G",
    "1K": "L",
    "1L": "I"
  },
  "ABDFGIJK": {
    "1A": "F",
    "1B": "J",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "G",
    "1K": "I",
    "1L": "K"
  },
  "ABDFGHKL": {
    "1A": "H",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "ABDFGHJL": {
    "1A": "H",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "J"
  },
  "ABDFGHJK": {
    "1A": "H",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "J",
    "1L": "K"
  },
  "ABDFGHIL": {
    "1A": "H",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "I"
  },
  "ABDFGHIK": {
    "1A": "H",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "I",
    "1L": "K"
  },
  "ABDFGHIJ": {
    "1A": "H",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "I",
    "1L": "J"
  },
  "ABDEIJKL": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "A",
    "1G": "I",
    "1I": "D",
    "1K": "L",
    "1L": "K"
  },
  "ABDEHJKL": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "H",
    "1K": "L",
    "1L": "K"
  },
  "ABDEHIKL": {
    "1A": "E",
    "1B": "I",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "H",
    "1K": "L",
    "1L": "K"
  },
  "ABDEHIJL": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "H",
    "1K": "L",
    "1L": "I"
  },
  "ABDEHIJK": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "H",
    "1K": "I",
    "1L": "K"
  },
  "ABDEGJKL": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "G",
    "1K": "L",
    "1L": "K"
  },
  "ABDEGIKL": {
    "1A": "E",
    "1B": "G",
    "1D": "B",
    "1E": "A",
    "1G": "I",
    "1I": "D",
    "1K": "L",
    "1L": "K"
  },
  "ABDEGIJL": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "G",
    "1K": "L",
    "1L": "I"
  },
  "ABDEGIJK": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "G",
    "1K": "I",
    "1L": "K"
  },
  "ABDEGHKL": {
    "1A": "E",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "H",
    "1K": "L",
    "1L": "K"
  },
  "ABDEGHJL": {
    "1A": "H",
    "1B": "J",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "G",
    "1K": "L",
    "1L": "E"
  },
  "ABDEGHJK": {
    "1A": "H",
    "1B": "J",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "G",
    "1K": "E",
    "1L": "K"
  },
  "ABDEGHIL": {
    "1A": "E",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "H",
    "1K": "L",
    "1L": "I"
  },
  "ABDEGHIK": {
    "1A": "E",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "H",
    "1K": "I",
    "1L": "K"
  },
  "ABDEGHIJ": {
    "1A": "H",
    "1B": "J",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "G",
    "1K": "E",
    "1L": "I"
  },
  "ABDEFJKL": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "ABDEFIKL": {
    "1A": "E",
    "1B": "I",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "ABDEFIJL": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "I"
  },
  "ABDEFIJK": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "I",
    "1L": "K"
  },
  "ABDEFHKL": {
    "1A": "H",
    "1B": "E",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "ABDEFHJL": {
    "1A": "H",
    "1B": "J",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "E"
  },
  "ABDEFHJK": {
    "1A": "H",
    "1B": "J",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "E",
    "1L": "K"
  },
  "ABDEFHIL": {
    "1A": "H",
    "1B": "E",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "I"
  },
  "ABDEFHIK": {
    "1A": "H",
    "1B": "E",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "I",
    "1L": "K"
  },
  "ABDEFHIJ": {
    "1A": "H",
    "1B": "J",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "E",
    "1L": "I"
  },
  "ABDEFGKL": {
    "1A": "E",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "ABDEFGJL": {
    "1A": "E",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "J"
  },
  "ABDEFGJK": {
    "1A": "E",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "J",
    "1L": "K"
  },
  "ABDEFGIL": {
    "1A": "E",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "I"
  },
  "ABDEFGIK": {
    "1A": "E",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "I",
    "1L": "K"
  },
  "ABDEFGIJ": {
    "1A": "E",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "I",
    "1L": "J"
  },
  "ABDEFGHL": {
    "1A": "H",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "E"
  },
  "ABDEFGHK": {
    "1A": "H",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "E",
    "1L": "K"
  },
  "ABDEFGHJ": {
    "1A": "H",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "E",
    "1L": "J"
  },
  "ABDEFGHI": {
    "1A": "H",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "E",
    "1L": "I"
  },
  "ABCHIJKL": {
    "1A": "I",
    "1B": "J",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "H",
    "1K": "L",
    "1L": "K"
  },
  "ABCGIJKL": {
    "1A": "I",
    "1B": "J",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "G",
    "1K": "L",
    "1L": "K"
  },
  "ABCGHJKL": {
    "1A": "H",
    "1B": "J",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "G",
    "1K": "L",
    "1L": "K"
  },
  "ABCGHIKL": {
    "1A": "I",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "H",
    "1K": "L",
    "1L": "K"
  },
  "ABCGHIJL": {
    "1A": "H",
    "1B": "J",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "G",
    "1K": "L",
    "1L": "I"
  },
  "ABCGHIJK": {
    "1A": "H",
    "1B": "J",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "G",
    "1K": "I",
    "1L": "K"
  },
  "ABCFIJKL": {
    "1A": "I",
    "1B": "J",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "ABCFHJKL": {
    "1A": "H",
    "1B": "J",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "ABCFHIKL": {
    "1A": "H",
    "1B": "I",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "ABCFHIJL": {
    "1A": "H",
    "1B": "J",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "I"
  },
  "ABCFHIJK": {
    "1A": "H",
    "1B": "J",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "I",
    "1L": "K"
  },
  "ABCFGJKL": {
    "1A": "C",
    "1B": "J",
    "1D": "B",
    "1E": "F",
    "1G": "A",
    "1I": "G",
    "1K": "L",
    "1L": "K"
  },
  "ABCFGIKL": {
    "1A": "I",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "ABCFGIJL": {
    "1A": "C",
    "1B": "J",
    "1D": "B",
    "1E": "F",
    "1G": "A",
    "1I": "G",
    "1K": "L",
    "1L": "I"
  },
  "ABCFGIJK": {
    "1A": "C",
    "1B": "J",
    "1D": "B",
    "1E": "F",
    "1G": "A",
    "1I": "G",
    "1K": "I",
    "1L": "K"
  },
  "ABCFGHKL": {
    "1A": "H",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "ABCFGHJL": {
    "1A": "H",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "J"
  },
  "ABCFGHJK": {
    "1A": "H",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "J",
    "1L": "K"
  },
  "ABCFGHIL": {
    "1A": "H",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "I"
  },
  "ABCFGHIK": {
    "1A": "H",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "I",
    "1L": "K"
  },
  "ABCFGHIJ": {
    "1A": "H",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "I",
    "1L": "J"
  },
  "ABCEIJKL": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "A",
    "1G": "I",
    "1I": "C",
    "1K": "L",
    "1L": "K"
  },
  "ABCEHJKL": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "H",
    "1K": "L",
    "1L": "K"
  },
  "ABCEHIKL": {
    "1A": "E",
    "1B": "I",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "H",
    "1K": "L",
    "1L": "K"
  },
  "ABCEHIJL": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "H",
    "1K": "L",
    "1L": "I"
  },
  "ABCEHIJK": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "H",
    "1K": "I",
    "1L": "K"
  },
  "ABCEGJKL": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "G",
    "1K": "L",
    "1L": "K"
  },
  "ABCEGIKL": {
    "1A": "E",
    "1B": "G",
    "1D": "B",
    "1E": "A",
    "1G": "I",
    "1I": "C",
    "1K": "L",
    "1L": "K"
  },
  "ABCEGIJL": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "G",
    "1K": "L",
    "1L": "I"
  },
  "ABCEGIJK": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "G",
    "1K": "I",
    "1L": "K"
  },
  "ABCEGHKL": {
    "1A": "E",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "H",
    "1K": "L",
    "1L": "K"
  },
  "ABCEGHJL": {
    "1A": "H",
    "1B": "J",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "G",
    "1K": "L",
    "1L": "E"
  },
  "ABCEGHJK": {
    "1A": "H",
    "1B": "J",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "G",
    "1K": "E",
    "1L": "K"
  },
  "ABCEGHIL": {
    "1A": "E",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "H",
    "1K": "L",
    "1L": "I"
  },
  "ABCEGHIK": {
    "1A": "E",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "H",
    "1K": "I",
    "1L": "K"
  },
  "ABCEGHIJ": {
    "1A": "H",
    "1B": "J",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "G",
    "1K": "E",
    "1L": "I"
  },
  "ABCEFJKL": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "ABCEFIKL": {
    "1A": "E",
    "1B": "I",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "ABCEFIJL": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "I"
  },
  "ABCEFIJK": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "I",
    "1L": "K"
  },
  "ABCEFHKL": {
    "1A": "H",
    "1B": "E",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "ABCEFHJL": {
    "1A": "H",
    "1B": "J",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "E"
  },
  "ABCEFHJK": {
    "1A": "H",
    "1B": "J",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "E",
    "1L": "K"
  },
  "ABCEFHIL": {
    "1A": "H",
    "1B": "E",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "I"
  },
  "ABCEFHIK": {
    "1A": "H",
    "1B": "E",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "I",
    "1L": "K"
  },
  "ABCEFHIJ": {
    "1A": "H",
    "1B": "J",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "E",
    "1L": "I"
  },
  "ABCEFGKL": {
    "1A": "E",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "ABCEFGJL": {
    "1A": "E",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "J"
  },
  "ABCEFGJK": {
    "1A": "E",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "J",
    "1L": "K"
  },
  "ABCEFGIL": {
    "1A": "E",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "I"
  },
  "ABCEFGIK": {
    "1A": "E",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "I",
    "1L": "K"
  },
  "ABCEFGIJ": {
    "1A": "E",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "I",
    "1L": "J"
  },
  "ABCEFGHL": {
    "1A": "H",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "E"
  },
  "ABCEFGHK": {
    "1A": "H",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "E",
    "1L": "K"
  },
  "ABCEFGHJ": {
    "1A": "H",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "E",
    "1L": "J"
  },
  "ABCEFGHI": {
    "1A": "H",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "E",
    "1L": "I"
  },
  "ABCDIJKL": {
    "1A": "I",
    "1B": "J",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "L",
    "1L": "K"
  },
  "ABCDHJKL": {
    "1A": "H",
    "1B": "J",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "L",
    "1L": "K"
  },
  "ABCDHIKL": {
    "1A": "H",
    "1B": "I",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "L",
    "1L": "K"
  },
  "ABCDHIJL": {
    "1A": "H",
    "1B": "J",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "L",
    "1L": "I"
  },
  "ABCDHIJK": {
    "1A": "H",
    "1B": "J",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "I",
    "1L": "K"
  },
  "ABCDGJKL": {
    "1A": "C",
    "1B": "J",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "G",
    "1K": "L",
    "1L": "K"
  },
  "ABCDGIKL": {
    "1A": "I",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "L",
    "1L": "K"
  },
  "ABCDGIJL": {
    "1A": "C",
    "1B": "J",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "G",
    "1K": "L",
    "1L": "I"
  },
  "ABCDGIJK": {
    "1A": "C",
    "1B": "J",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "G",
    "1K": "I",
    "1L": "K"
  },
  "ABCDGHKL": {
    "1A": "H",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "L",
    "1L": "K"
  },
  "ABCDGHJL": {
    "1A": "H",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "L",
    "1L": "J"
  },
  "ABCDGHJK": {
    "1A": "H",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "J",
    "1L": "K"
  },
  "ABCDGHIL": {
    "1A": "H",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "L",
    "1L": "I"
  },
  "ABCDGHIK": {
    "1A": "H",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "I",
    "1L": "K"
  },
  "ABCDGHIJ": {
    "1A": "H",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "I",
    "1L": "J"
  },
  "ABCDFJKL": {
    "1A": "C",
    "1B": "J",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "ABCDFIKL": {
    "1A": "C",
    "1B": "I",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "ABCDFIJL": {
    "1A": "C",
    "1B": "J",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "I"
  },
  "ABCDFIJK": {
    "1A": "C",
    "1B": "J",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "I",
    "1L": "K"
  },
  "ABCDFHKL": {
    "1A": "H",
    "1B": "F",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "L",
    "1L": "K"
  },
  "ABCDFHJL": {
    "1A": "C",
    "1B": "J",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "H"
  },
  "ABCDFHJK": {
    "1A": "H",
    "1B": "J",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "D",
    "1L": "K"
  },
  "ABCDFHIL": {
    "1A": "H",
    "1B": "F",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "L",
    "1L": "I"
  },
  "ABCDFHIK": {
    "1A": "H",
    "1B": "F",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "I",
    "1L": "K"
  },
  "ABCDFHIJ": {
    "1A": "H",
    "1B": "J",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "D",
    "1L": "I"
  },
  "ABCDFGKL": {
    "1A": "C",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "ABCDFGJL": {
    "1A": "C",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "J"
  },
  "ABCDFGJK": {
    "1A": "C",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "J",
    "1L": "K"
  },
  "ABCDFGIL": {
    "1A": "C",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "I"
  },
  "ABCDFGIK": {
    "1A": "C",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "I",
    "1L": "K"
  },
  "ABCDFGIJ": {
    "1A": "C",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "I",
    "1L": "J"
  },
  "ABCDFGHL": {
    "1A": "C",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "H"
  },
  "ABCDFGHK": {
    "1A": "H",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "D",
    "1L": "K"
  },
  "ABCDFGHJ": {
    "1A": "H",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "D",
    "1L": "J"
  },
  "ABCDFGHI": {
    "1A": "H",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "D",
    "1L": "I"
  },
  "ABCDEJKL": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "L",
    "1L": "K"
  },
  "ABCDEIKL": {
    "1A": "E",
    "1B": "I",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "L",
    "1L": "K"
  },
  "ABCDEIJL": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "L",
    "1L": "I"
  },
  "ABCDEIJK": {
    "1A": "E",
    "1B": "J",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "I",
    "1L": "K"
  },
  "ABCDEHKL": {
    "1A": "H",
    "1B": "E",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "L",
    "1L": "K"
  },
  "ABCDEHJL": {
    "1A": "H",
    "1B": "J",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "L",
    "1L": "E"
  },
  "ABCDEHJK": {
    "1A": "H",
    "1B": "J",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "E",
    "1L": "K"
  },
  "ABCDEHIL": {
    "1A": "H",
    "1B": "E",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "L",
    "1L": "I"
  },
  "ABCDEHIK": {
    "1A": "H",
    "1B": "E",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "I",
    "1L": "K"
  },
  "ABCDEHIJ": {
    "1A": "H",
    "1B": "J",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "E",
    "1L": "I"
  },
  "ABCDEGKL": {
    "1A": "E",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "L",
    "1L": "K"
  },
  "ABCDEGJL": {
    "1A": "E",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "L",
    "1L": "J"
  },
  "ABCDEGJK": {
    "1A": "E",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "J",
    "1L": "K"
  },
  "ABCDEGIL": {
    "1A": "E",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "L",
    "1L": "I"
  },
  "ABCDEGIK": {
    "1A": "E",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "I",
    "1L": "K"
  },
  "ABCDEGIJ": {
    "1A": "E",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "I",
    "1L": "J"
  },
  "ABCDEGHL": {
    "1A": "H",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "L",
    "1L": "E"
  },
  "ABCDEGHK": {
    "1A": "H",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "E",
    "1L": "K"
  },
  "ABCDEGHJ": {
    "1A": "H",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "E",
    "1L": "J"
  },
  "ABCDEGHI": {
    "1A": "H",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "E",
    "1L": "I"
  },
  "ABCDEFKL": {
    "1A": "C",
    "1B": "E",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "K"
  },
  "ABCDEFJL": {
    "1A": "C",
    "1B": "J",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "E"
  },
  "ABCDEFJK": {
    "1A": "C",
    "1B": "J",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "E",
    "1L": "K"
  },
  "ABCDEFIL": {
    "1A": "C",
    "1B": "E",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "I"
  },
  "ABCDEFIK": {
    "1A": "C",
    "1B": "E",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "I",
    "1L": "K"
  },
  "ABCDEFIJ": {
    "1A": "C",
    "1B": "J",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "E",
    "1L": "I"
  },
  "ABCDEFHL": {
    "1A": "H",
    "1B": "F",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "D",
    "1K": "L",
    "1L": "E"
  },
  "ABCDEFHK": {
    "1A": "H",
    "1B": "E",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "D",
    "1L": "K"
  },
  "ABCDEFHJ": {
    "1A": "H",
    "1B": "J",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "D",
    "1L": "E"
  },
  "ABCDEFHI": {
    "1A": "H",
    "1B": "E",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "D",
    "1L": "I"
  },
  "ABCDEFGL": {
    "1A": "C",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "L",
    "1L": "E"
  },
  "ABCDEFGK": {
    "1A": "C",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "E",
    "1L": "K"
  },
  "ABCDEFGJ": {
    "1A": "C",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "E",
    "1L": "J"
  },
  "ABCDEFGI": {
    "1A": "C",
    "1B": "G",
    "1D": "B",
    "1E": "D",
    "1G": "A",
    "1I": "F",
    "1K": "E",
    "1L": "I"
  },
  "ABCDEFGH": {
    "1A": "H",
    "1B": "G",
    "1D": "B",
    "1E": "C",
    "1G": "A",
    "1I": "F",
    "1K": "D",
    "1L": "E"
  }
};

// State Variables
let appState = {
  groupMatches: {}, // groupLetter -> array of match objects
  knockoutMatches: {}, // matchId (73..104) -> match object
  groupStandings: {} // groupLetter -> array of team standing objects
};

// Programmatic round-robin pairings for a group of 4 teams
// Indices: 0, 1, 2, 3
const ROUND_ROBIN_SCHEDULE = [
  { homeIdx: 0, awayIdx: 1 }, // Fecha 1 - Partido 1
  { homeIdx: 2, awayIdx: 3 }, // Fecha 1 - Partido 2
  { homeIdx: 0, awayIdx: 2 }, // Fecha 2 - Partido 3
  { homeIdx: 1, awayIdx: 3 }, // Fecha 2 - Partido 4
  { homeIdx: 3, awayIdx: 0 }, // Fecha 3 - Partido 5
  { homeIdx: 1, awayIdx: 2 }  // Fecha 3 - Partido 6
];

// Locations for knockout matches (informative)
const KNOCKOUT_LOCATIONS = {
  73: 'Los Ángeles', 74: 'Boston', 75: 'Monterrey', 76: 'Houston',
  77: 'Nueva York/Nueva Jersey', 78: 'Dallas', 79: 'Ciudad de México', 80: 'Atlanta',
  81: 'San Francisco', 82: 'Seattle', 83: 'Toronto', 84: 'Los Ángeles',
  85: 'Vancouver', 86: 'Miami', 87: 'Kansas City', 88: 'Dallas',
  89: 'Filadelfia', 90: 'Houston', 91: 'Nueva York/Nueva Jersey', 92: 'Ciudad de México',
  93: 'Dallas', 94: 'Seattle', 95: 'Atlanta', 96: 'Vancouver',
  97: 'Boston', 98: 'Los Ángeles', 99: 'Miami', 100: 'Kansas City',
  101: 'Dallas', 102: 'Atlanta', 103: 'Miami (3er Puesto)', 104: 'Nueva York/Nueva Jersey (Final)'
};

// 3. Inicialización y Carga de Datos
function initApp() {
  const savedState = localStorage.getItem('worldcup_2026_scout_state');
  if (savedState) {
    try {
      appState = JSON.parse(savedState);
      // Ensure all groups exist in loaded state
      Object.keys(GROUPS_DATA).forEach(g => {
        if (!appState.groupMatches[g]) initGroup(g);
      });
    } catch (e) {
      console.error("Error loading saved state, resetting...", e);
      resetAllData();
    }
  } else {
    resetAllData();
  }
  
  // Calculate standings
  calculateAllStandings();
  
  // Render views
  renderGroupsGrid();
  updateThirdsTable();
  updateBracket();
  
  // Set up event listeners
  setupEventListeners();
}

function resetAllData() {
  appState.groupMatches = {};
  appState.knockoutMatches = {};
  appState.groupStandings = {};
  
  // Initialize group stage matches
  Object.keys(GROUPS_DATA).forEach(g => {
    initGroup(g);
  });
  
  // Initialize empty knockout matches (73 to 104)
  for (let id = 73; id <= 104; id++) {
    appState.knockoutMatches[id] = {
      id: id,
      homeTeam: null,
      awayTeam: null,
      homeScore: null,
      awayScore: null,
      homePenScore: null,
      awayPenScore: null,
      winner: null
    };
  }
  
  saveState();
}

function initGroup(groupLetter) {
  const teams = GROUPS_DATA[groupLetter];
  appState.groupMatches[groupLetter] = ROUND_ROBIN_SCHEDULE.map((sched, idx) => {
    return {
      id: `${groupLetter}-${idx + 1}`,
      homeTeam: teams[sched.homeIdx].name,
      awayTeam: teams[sched.awayIdx].name,
      homeScore: null,
      awayScore: null
    };
  });
}

function saveState() {
  localStorage.setItem('worldcup_2026_scout_state', JSON.stringify(appState));
}

// Helper to get flag URL
function getFlagUrl(teamName) {
  // Find team in GROUPS_DATA
  let flagCode = 'placeholder';
  for (const group of Object.values(GROUPS_DATA)) {
    const team = group.find(t => t.name === teamName);
    if (team) {
      flagCode = team.flag;
      break;
    }
  }
  if (flagCode === 'placeholder') return 'https://flagcdn.com/w40/un.png';
  return `https://flagcdn.com/w40/${flagCode}.png`;
}

// 4. Lógica de Cálculo de Posiciones (Grupos)
function calculateAllStandings() {
  Object.keys(GROUPS_DATA).forEach(g => {
    calculateGroupStanding(g);
  });
  updateThirdsBadge();
}

function calculateGroupStanding(groupLetter) {
  const teams = GROUPS_DATA[groupLetter];
  const matches = appState.groupMatches[groupLetter];
  
  // Initialize standing list
  const standings = teams.map(t => {
    return {
      name: t.name,
      flag: t.flag,
      ranking: t.ranking,
      pj: 0, w: 0, e: 0, p: 0,
      gf: 0, ga: 0, gd: 0, pts: 0
    };
  });
  
  // Update stats from played matches
  matches.forEach(m => {
    if (m.homeScore !== null && m.awayScore !== null) {
      const hScore = parseInt(m.homeScore, 10);
      const aScore = parseInt(m.awayScore, 10);
      
      const homeRow = standings.find(t => t.name === m.homeTeam);
      const awayRow = standings.find(t => t.name === m.awayTeam);
      
      if (homeRow && awayRow) {
        homeRow.pj++;
        awayRow.pj++;
        
        homeRow.gf += hScore;
        homeRow.ga += aScore;
        awayRow.gf += aScore;
        awayRow.ga += hScore;
        
        if (hScore > aScore) {
          homeRow.w++;
          homeRow.pts += 3;
          awayRow.p++;
        } else if (hScore < aScore) {
          awayRow.w++;
          awayRow.pts += 3;
          homeRow.p++;
        } else {
          homeRow.e++;
          awayRow.e++;
          homeRow.pts += 1;
          awayRow.pts += 1;
        }
      }
    }
  });
  
  // Calculate Goal Difference and sort
  standings.forEach(row => {
    row.gd = row.gf - row.ga;
  });
  
  // Sort according to FIFA tiebreaker:
  // 1. Points
  // 2. Goal Difference
  // 3. Goals For
  // 4. FIFA Ranking (lower number is better rank, e.g. 1st is Argentina)
  standings.sort((t1, t2) => {
    if (t2.pts !== t1.pts) return t2.pts - t1.pts;
    if (t2.gd !== t1.gd) return t2.gd - t1.gd;
    if (t2.gf !== t1.gf) return t2.gf - t1.gf;
    return t1.ranking - t2.ranking; // Tie-breaker by FIFA Ranking
  });
  
  appState.groupStandings[groupLetter] = standings;
}

// 5. Lógica de Mejores Terceros
function getThirdPlaceStandings() {
  const thirds = [];
  
  Object.keys(GROUPS_DATA).forEach(g => {
    const groupStanding = appState.groupStandings[g];
    if (groupStanding && groupStanding.length >= 3) {
      // Third place team is index 2
      const t = groupStanding[2];
      thirds.push({
        group: g,
        name: t.name,
        flag: t.flag,
        ranking: t.ranking,
        pj: t.pj, w: t.w, e: t.e, p: t.p,
        gf: t.gf, ga: t.ga, gd: t.gd, pts: t.pts
      });
    }
  });
  
  // Sort thirds using same tiebreakers
  thirds.sort((t1, t2) => {
    if (t2.pts !== t1.pts) return t2.pts - t1.pts;
    if (t2.gd !== t1.gd) return t2.gd - t1.gd;
    if (t2.gf !== t1.gf) return t2.gf - t1.gf;
    return t1.ranking - t2.ranking;
  });
  
  return thirds;
}

function updateThirdsBadge() {
  // Check how many groups have completed matches
  let completedGroupsCount = 0;
  Object.keys(GROUPS_DATA).forEach(g => {
    const isCompleted = appState.groupMatches[g].every(m => m.homeScore !== null && m.awayScore !== null);
    if (isCompleted) completedGroupsCount++;
  });
  
  const thirdsBadge = document.getElementById('thirds-badge');
  if (completedGroupsCount === 12) {
    thirdsBadge.textContent = '8/8 Ready';
    thirdsBadge.style.background = 'var(--color-scout-green)';
    thirdsBadge.style.color = 'white';
  } else {
    thirdsBadge.textContent = `${completedGroupsCount}/12 Grupos`;
    thirdsBadge.style.background = 'var(--color-gold)';
    thirdsBadge.style.color = '#090d16';
  }
}

// 6. Lógica de Fase Final (Knockout Bracket)
function isGroupStageCompleted() {
  // Group stage is completed if all 72 matches have scores
  for (const group of Object.keys(GROUPS_DATA)) {
    const matches = appState.groupMatches[group];
    const completed = matches.every(m => m.homeScore !== null && m.awayScore !== null);
    if (!completed) return false;
  }
  return true;
}

function computeKnockoutBracket() {
  if (!isGroupStageCompleted()) return;
  
  // Get group standings
  const stand = appState.groupStandings;
  
  // Get the 8 qualified third place teams
  const thirds = getThirdPlaceStandings();
  const qualifiedThirds = thirds.slice(0, 8);
  const qualifiedThirdGroups = qualifiedThirds.map(t => t.group).sort().join('');
  
  // Get matchups lookup table for these groups
  const matchupConfig = FIFA_THIRD_COMBINATIONS[qualifiedThirdGroups];
  
  if (!matchupConfig) {
    console.error("No combination matching groups: ", qualifiedThirdGroups);
    return;
  }
  
  // Helper to find third place team by group
  const getThirdTeamByGroup = (gLetter) => {
    const t = thirds.find(item => item.group === gLetter);
    return t ? t.name : `3ro Grupo ${gLetter}`;
  };
  
  // Round of 32 Pairs (Matches 73 to 88)
  const roundOf32Pairings = {
    73: { home: stand['A'][1].name, away: stand['B'][1].name }, // 2A vs 2B
    74: { home: stand['E'][0].name, away: getThirdTeamByGroup(matchupConfig['1E']) }, // 1E vs 3rd (lookup)
    75: { home: stand['F'][0].name, away: stand['C'][1].name }, // 1F vs 2C
    76: { home: stand['C'][0].name, away: stand['F'][1].name }, // 1C vs 2F
    77: { home: stand['I'][0].name, away: getThirdTeamByGroup(matchupConfig['1I']) }, // 1I vs 3rd
    78: { home: stand['E'][1].name, away: stand['I'][1].name }, // 2E vs 2I
    79: { home: stand['A'][0].name, away: getThirdTeamByGroup(matchupConfig['1A']) }, // 1A vs 3rd
    80: { home: stand['L'][0].name, away: getThirdTeamByGroup(matchupConfig['1L']) }, // 1L vs 3rd
    81: { home: stand['D'][0].name, away: getThirdTeamByGroup(matchupConfig['1D']) }, // 1D vs 3rd
    82: { home: stand['G'][0].name, away: getThirdTeamByGroup(matchupConfig['1G']) }, // 1G vs 3rd
    83: { home: stand['K'][1].name, away: stand['L'][1].name }, // 2K vs 2L
    84: { home: stand['H'][0].name, away: stand['J'][1].name }, // 1H vs 2J
    85: { home: stand['B'][0].name, away: getThirdTeamByGroup(matchupConfig['1B']) }, // 1B vs 3rd
    86: { home: stand['J'][0].name, away: stand['H'][1].name }, // 1J vs 2H
    87: { home: stand['K'][0].name, away: getThirdTeamByGroup(matchupConfig['1K']) }, // 1K vs 3rd
    88: { home: stand['D'][1].name, away: stand['G'][1].name }  // 2D vs 2G
  };
  
  // Set Round of 32 teams in state
  Object.keys(roundOf32Pairings).forEach(id => {
    const match = appState.knockoutMatches[id];
    const pairing = roundOf32Pairings[id];
    
    // Only update if team changes to prevent wiping scores
    if (match.homeTeam !== pairing.home) {
      match.homeTeam = pairing.home;
      match.homeScore = null;
      match.homePenScore = null;
      match.winner = null;
    }
    if (match.awayTeam !== pairing.away) {
      match.awayTeam = pairing.away;
      match.awayScore = null;
      match.awayPenScore = null;
      match.winner = null;
    }
  });
  
  // Propagate all winners up the tree
  propagateKnockoutTree();
}

function propagateKnockoutTree() {
  // Define bracket links: matchId -> { parentMatchId, position: 'home' | 'away' }
  const treeConfig = {
    // Round of 16 (89..96)
    89: { homeSource: 74, awaySource: 77 },
    90: { homeSource: 73, awaySource: 75 },
    91: { homeSource: 76, awaySource: 78 },
    92: { homeSource: 79, awaySource: 80 },
    93: { homeSource: 83, awaySource: 84 },
    94: { homeSource: 81, awaySource: 82 },
    95: { homeSource: 86, awaySource: 88 },
    96: { homeSource: 85, awaySource: 87 },
    
    // Quarterfinals (97..100)
    97: { homeSource: 89, awaySource: 90 },
    98: { homeSource: 93, awaySource: 94 },
    99: { homeSource: 91, awaySource: 92 },
    100: { homeSource: 95, awaySource: 96 },
    
    // Semifinals (101..102)
    101: { homeSource: 97, awaySource: 98 },
    102: { homeSource: 99, awaySource: 100 },
    
    // Finals (103 for 3rd Place, 104 for Final)
    104: { homeSource: 101, awaySource: 102 }
  };
  
  // Calculate winner for each match in order
  const processMatchWinner = (matchId) => {
    const m = appState.knockoutMatches[matchId];
    if (m.homeTeam === null || m.awayTeam === null || m.homeScore === null || m.awayScore === null) {
      m.winner = null;
      return null;
    }
    
    const hScore = parseInt(m.homeScore, 10);
    const aScore = parseInt(m.awayScore, 10);
    
    if (hScore > aScore) {
      m.winner = m.homeTeam;
    } else if (hScore < aScore) {
      m.winner = m.awayTeam;
    } else {
      // Check penalties
      const hPen = m.homePenScore !== null ? parseInt(m.homePenScore, 10) : null;
      const aPen = m.awayPenScore !== null ? parseInt(m.awayPenScore, 10) : null;
      
      if (hPen !== null && aPen !== null) {
        if (hPen > aPen) {
          m.winner = m.homeTeam;
        } else if (hPen < aPen) {
          m.winner = m.awayTeam;
        } else {
          m.winner = null; // Stalemated penalties
        }
      } else {
        m.winner = null; // Penalty required but not entered
      }
    }
    return m.winner;
  };
  
  // Process R32 first
  for (let id = 73; id <= 88; id++) {
    processMatchWinner(id);
  }
  
  // Propagate in layers
  // Layer 1: R16 (89..96)
  for (let id = 89; id <= 96; id++) {
    const config = treeConfig[id];
    const match = appState.knockoutMatches[id];
    
    const homeTeam = appState.knockoutMatches[config.homeSource].winner;
    const awayTeam = appState.knockoutMatches[config.awaySource].winner;
    
    if (match.homeTeam !== homeTeam) {
      match.homeTeam = homeTeam;
      match.homeScore = null;
      match.homePenScore = null;
    }
    if (match.awayTeam !== awayTeam) {
      match.awayTeam = awayTeam;
      match.awayScore = null;
      match.awayPenScore = null;
    }
    processMatchWinner(id);
  }
  
  // Layer 2: Quarterfinals (97..100)
  for (let id = 97; id <= 100; id++) {
    const config = treeConfig[id];
    const match = appState.knockoutMatches[id];
    
    const homeTeam = appState.knockoutMatches[config.homeSource].winner;
    const awayTeam = appState.knockoutMatches[config.awaySource].winner;
    
    if (match.homeTeam !== homeTeam) {
      match.homeTeam = homeTeam;
      match.homeScore = null;
      match.homePenScore = null;
    }
    if (match.awayTeam !== awayTeam) {
      match.awayTeam = awayTeam;
      match.awayScore = null;
      match.awayPenScore = null;
    }
    processMatchWinner(id);
  }
  
  // Layer 3: Semifinals (101..102)
  for (let id = 101; id <= 102; id++) {
    const config = treeConfig[id];
    const match = appState.knockoutMatches[id];
    
    const homeTeam = appState.knockoutMatches[config.homeSource].winner;
    const awayTeam = appState.knockoutMatches[config.awaySource].winner;
    
    if (match.homeTeam !== homeTeam) {
      match.homeTeam = homeTeam;
      match.homeScore = null;
      match.homePenScore = null;
    }
    if (match.awayTeam !== awayTeam) {
      match.awayTeam = awayTeam;
      match.awayScore = null;
      match.awayPenScore = null;
    }
    processMatchWinner(id);
  }
  
  // Layer 4: Third-place Match (103) - Losers of 101 & 102
  const match103 = appState.knockoutMatches[103];
  const sf1 = appState.knockoutMatches[101];
  const sf2 = appState.knockoutMatches[102];
  
  let loser101 = null;
  if (sf1.homeTeam && sf1.awayTeam && sf1.winner) {
    loser101 = sf1.winner === sf1.homeTeam ? sf1.awayTeam : sf1.homeTeam;
  }
  let loser102 = null;
  if (sf2.homeTeam && sf2.awayTeam && sf2.winner) {
    loser102 = sf2.winner === sf2.homeTeam ? sf2.awayTeam : sf2.homeTeam;
  }
  
  if (match103.homeTeam !== loser101) {
    match103.homeTeam = loser101;
    match103.homeScore = null;
    match103.homePenScore = null;
  }
  if (match103.awayTeam !== loser102) {
    match103.awayTeam = loser102;
    match103.awayScore = null;
    match103.awayPenScore = null;
  }
  processMatchWinner(103);
  
  // Layer 5: Final Match (104)
  const config104 = treeConfig[104];
  const match104 = appState.knockoutMatches[104];
  
  const finalHome = appState.knockoutMatches[config104.homeSource].winner;
  const finalAway = appState.knockoutMatches[config104.awaySource].winner;
  
  if (match104.homeTeam !== finalHome) {
    match104.homeTeam = finalHome;
    match104.homeScore = null;
    match104.homePenScore = null;
  }
  if (match104.awayTeam !== finalAway) {
    match104.awayTeam = finalAway;
    match104.awayScore = null;
    match104.awayPenScore = null;
  }
  processMatchWinner(104);
  
  saveState();
}

// 7. Renderizados de la Interfaz (DOM)
function renderGroupsGrid() {
  const grid = document.getElementById('groups-grid');
  grid.innerHTML = '';
  
  Object.keys(GROUPS_DATA).forEach(g => {
    const card = document.createElement('div');
    card.className = 'card group-card';
    
    // Check completion status
    const isCompleted = appState.groupMatches[g].every(m => m.homeScore !== null && m.awayScore !== null);
    if (isCompleted) card.classList.add('completed');
    
    card.setAttribute('data-group', g);
    
    // Generate header HTML
    let headerHTML = `
      <div class="group-card-header">
        <h3>Grupo ${g}</h3>
        <span class="group-status-badge ${isCompleted ? 'completed' : 'pending'}">
          ${isCompleted ? '<i class="fa-solid fa-check"></i> Listo' : 'Pendiente'}
        </span>
      </div>
    `;
    
    // Generate standing table HTML
    const standings = appState.groupStandings[g] || [];
    let tableRows = '';
    standings.forEach((team, idx) => {
      let qClass = '';
      if (idx === 0) qClass = 'qualified-1';
      else if (idx === 1) qClass = 'qualified-2';
      else if (idx === 2) qClass = 'third-place';
      
      tableRows += `
        <tr>
          <td class="bold text-center" style="color: var(--text-muted);">${idx + 1}</td>
          <td>
            <div class="team-row-compact ${qClass}">
              <img src="${getFlagUrl(team.name)}" alt="${team.name}" class="flag-img">
              <span class="team-name-text">${team.name}</span>
            </div>
          </td>
          <td class="text-center bold" style="color: var(--text-secondary);">${team.pts}</td>
          <td class="text-center" style="color: var(--text-muted);">${team.gd >= 0 ? '+' : ''}${team.gd}</td>
        </tr>
      `;
    });
    
    const tableHTML = `
      <table class="group-table-compact">
        <thead>
          <tr>
            <th style="width: 20px;" class="text-center">#</th>
            <th>Equipo</th>
            <th class="text-center" style="width: 30px;">Pts</th>
            <th class="text-center" style="width: 30px;">DG</th>
          </tr>
        </thead>
        <tbody>
          ${tableRows}
        </tbody>
      </table>
    `;
    
    // Generate matches summary
    const matches = appState.groupMatches[g];
    let matchesHTML = '<div class="group-matches-preview">';
    matches.slice(0, 3).forEach(m => {
      const scoreStr = m.homeScore !== null && m.awayScore !== null ? `${m.homeScore}-\u200b${m.awayScore}` : 'vs';
      matchesHTML += `
        <div class="match-preview-item">
          <span class="match-preview-teams">${m.homeTeam.substring(0, 6)} - ${m.awayTeam.substring(0, 6)}</span>
          <span class="match-preview-score">${scoreStr}</span>
        </div>
      `;
    });
    matchesHTML += '<div class="text-center" style="margin-top: 0.35rem; color: var(--color-primary); font-weight: 600; font-size: 0.7rem;">Ver todos los partidos <i class="fa-solid fa-chevron-right"></i></div>';
    matchesHTML += '</div>';
    
    card.innerHTML = headerHTML + tableHTML + matchesHTML;
    
    // Click event to open group detail modal
    card.addEventListener('click', () => {
      openGroupModal(g);
    });
    
    grid.appendChild(card);
  });
}

function updateThirdsTable() {
  const tbody = document.getElementById('thirds-table-body');
  tbody.innerHTML = '';
  
  const thirds = getThirdPlaceStandings();
  const completedGroups = isGroupStageCompleted();
  
  thirds.forEach((team, idx) => {
    const isQualifying = idx < 8;
    const row = document.createElement('tr');
    row.className = isQualifying ? 'qualified' : 'eliminated';
    
    row.innerHTML = `
      <td class="bold text-center">${idx + 1}</td>
      <td class="bold text-center" style="color: var(--color-secondary);">Grupo ${team.group}</td>
      <td>
        <div class="team-cell">
          <img src="${getFlagUrl(team.name)}" alt="${team.name}" class="flag-img" style="width:24px; height: 16px;">
          <span>${team.name}</span>
        </div>
      </td>
      <td class="text-center">${team.pj}</td>
      <td class="text-center">${team.w}</td>
      <td class="text-center">${team.e}</td>
      <td class="text-center">${team.p}</td>
      <td class="text-center">${team.gf}</td>
      <td class="text-center">${team.ga}</td>
      <td class="text-center bold">${team.gd >= 0 ? '+' : ''}${team.gd}</td>
      <td class="text-center bold" style="font-size: 1rem; color: ${isQualifying ? 'var(--color-scout-green)' : 'var(--text-muted)'}">${team.pts}</td>
      <td>
        <span class="status-badge ${isQualifying ? 'in' : 'out'}">
          ${isQualifying ? '<i class="fa-solid fa-circle-check"></i> Clasifica' : '<i class="fa-solid fa-circle-xmark"></i> Eliminado'}
        </span>
      </td>
    `;
    tbody.appendChild(row);
  });
}

function updateBracket() {
  const wrapper = document.getElementById('bracket-wrapper');
  const lockedOverlay = document.getElementById('bracket-locked-overlay');
  const statusText = document.getElementById('bracket-status-text');
  const btnKnockout = document.getElementById('btn-simulate-knockout');
  const tabBtnBracket = document.getElementById('tab-btn-bracket');
  
  if (isGroupStageCompleted()) {
    lockedOverlay.style.display = 'none';
    btnKnockout.removeAttribute('disabled');
    tabBtnBracket.classList.add('unlocked');
    document.getElementById('bracket-lock-indicator').style.display = 'none';
    statusText.innerHTML = 'Fase de grupos completa. Ingresa los resultados de cada llave para avanzar a los equipos hacia la final. <span class="scout-badge" style="background: var(--color-accent);">¡Fase Final Activa!</span>';
    
    // Render the actual bracket tree
    renderBracketTree();
  } else {
    lockedOverlay.style.display = 'flex';
    btnKnockout.setAttribute('disabled', 'true');
    tabBtnBracket.classList.remove('unlocked');
    document.getElementById('bracket-lock-indicator').style.display = 'inline-block';
    statusText.textContent = 'Completa la fase de grupos para desbloquear el cuadro de eliminación directa.';
    document.getElementById('bracket-container').innerHTML = '';
  }
}

function renderBracketTree() {
  const container = document.getElementById('bracket-container');
  container.innerHTML = '';
  
  // We divide the bracket columns into 9:
  // Col 0: Izquierda 16avos (Partidos 74, 77, 73, 75, 83, 84, 81, 82)
  // Col 1: Izquierda Octavos (Partidos 89, 90, 93, 94)
  // Col 2: Izquierda Cuartos (Partidos 97, 98)
  // Col 3: Izquierda Semifinal (Partido 101)
  // Col 4: Centro (Partido 104 - Final, Partido 103 - 3er Puesto, y Campeón!)
  // Col 5: Derecha Semifinal (Partido 102)
  // Col 6: Derecha Cuartos (Partidos 99, 100)
  // Col 7: Derecha Octavos (Partidos 91, 92, 95, 96)
  // Col 8: Derecha 16avos (Partidos 76, 78, 79, 80, 86, 88, 85, 87)
  
  const columnsData = [
    { title: 'Dieciseisavos (Izq)', matchIds: [74, 77, 73, 75, 83, 84, 81, 82], align: 'left' },
    { title: 'Octavos (Izq)', matchIds: [89, 90, 93, 94], align: 'left' },
    { title: 'Cuartos (Izq)', matchIds: [97, 98], align: 'left' },
    { title: 'Semifinal (Izq)', matchIds: [101], align: 'left' },
    { title: 'Finales', matchIds: [104, 103], align: 'center', isCenter: true },
    { title: 'Semifinal (Der)', matchIds: [102], align: 'right' },
    { title: 'Cuartos (Der)', matchIds: [99, 100], align: 'right' },
    { title: 'Octavos (Der)', matchIds: [91, 92, 95, 96], align: 'right' },
    { title: 'Dieciseisavos (Der)', matchIds: [76, 78, 79, 80, 86, 88, 85, 87], align: 'right' }
  ];
  
  columnsData.forEach(colInfo => {
    const colDiv = document.createElement('div');
    colDiv.className = `bracket-column ${colInfo.isCenter ? 'final-column' : ''}`;
    
    const titleDiv = document.createElement('div');
    titleDiv.className = 'bracket-column-title';
    titleDiv.textContent = colInfo.title;
    colDiv.appendChild(titleDiv);
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'bracket-column-content';
    
    // Special layout for center column to show Champion badge at top
    if (colInfo.isCenter) {
      // Create Champion card
      const champCard = document.createElement('div');
      champCard.className = 'champion-card';
      
      const finalMatch = appState.knockoutMatches[104];
      if (finalMatch && finalMatch.winner) {
        champCard.innerHTML = `
          <div class="champion-team-display">
            <i class="fa-solid fa-trophy cup-icon"></i>
            <h3>¡Campeón Mundial!</h3>
            <img src="${getFlagUrl(finalMatch.winner)}" alt="${finalMatch.winner}" class="champion-flag">
            <span class="champion-name">${finalMatch.winner}</span>
          </div>
        `;
      } else {
        champCard.innerHTML = `
          <div class="champion-team-display">
            <i class="fa-solid fa-trophy cup-icon" style="opacity: 0.3; color: var(--text-muted);"></i>
            <h3>Campeón Mundial</h3>
            <span class="champion-placeholder">Esperando Campeón...</span>
          </div>
        `;
      }
      contentDiv.appendChild(champCard);
    }
    
    // Add matches
    colInfo.matchIds.forEach(matchId => {
      const match = appState.knockoutMatches[matchId];
      const matchCard = renderBracketMatchCard(match);
      contentDiv.appendChild(matchCard);
    });
    
    colDiv.appendChild(contentDiv);
    container.appendChild(colDiv);
  });
}

function renderBracketMatchCard(match) {
  const card = document.createElement('div');
  card.className = 'bracket-match-card';
  card.setAttribute('data-match-id', match.id);
  
  const location = KNOCKOUT_LOCATIONS[match.id] || '';
  
  // Check if we need penalty shootout inputs
  const needsPenalties = 
    match.homeScore !== null && 
    match.awayScore !== null && 
    parseInt(match.homeScore, 10) === parseInt(match.awayScore, 10) &&
    match.homeTeam && 
    match.awayTeam;
    
  const tHomeWinnerClass = match.winner && match.winner === match.homeTeam ? 'winner' : (match.winner ? 'loser' : '');
  const tAwayWinnerClass = match.winner && match.winner === match.awayTeam ? 'winner' : (match.winner ? 'loser' : '');
  
  const homeFlag = match.homeTeam ? `<img src="${getFlagUrl(match.homeTeam)}" alt="" class="flag-img">` : '<i class="fa-solid fa-question" style="font-size:0.7rem; color:var(--text-muted); width:18px; text-align:center;"></i>';
  const awayFlag = match.awayTeam ? `<img src="${getFlagUrl(match.awayTeam)}" alt="" class="flag-img">` : '<i class="fa-solid fa-question" style="font-size:0.7rem; color:var(--text-muted); width:18px; text-align:center;"></i>';
  
  const homeScoreVal = match.homeScore !== null ? match.homeScore : '';
  const awayScoreVal = match.awayScore !== null ? match.awayScore : '';
  
  const isFinalOrThird = match.id === 104 || match.id === 103;
  const matchTitleText = match.id === 104 ? 'FINAL MUNDIAL' : (match.id === 103 ? 'Tercer Puesto' : `Partido ${match.id}`);
  
  let html = `
    <div class="bracket-match-id">
      <span style="color: ${isFinalOrThird ? 'var(--color-gold)' : 'var(--text-secondary)'}; font-weight:700;">${matchTitleText}</span>
      <span class="bracket-match-location">${location}</span>
    </div>
    
    <!-- Home Team -->
    <div class="bracket-team-row ${tHomeWinnerClass}">
      <div class="bracket-team-info">
        ${homeFlag}
        <span>${match.homeTeam || 'Por confirmar'}</span>
      </div>
      <input type="number" class="bracket-score-input" data-match-id="${match.id}" data-team="home" value="${homeScoreVal}" min="0" ${!match.homeTeam ? 'disabled' : ''}>
    </div>
    
    <!-- Away Team -->
    <div class="bracket-team-row ${tAwayWinnerClass}">
      <div class="bracket-team-info">
        ${awayFlag}
        <span>${match.awayTeam || 'Por confirmar'}</span>
      </div>
      <input type="number" class="bracket-score-input" data-match-id="${match.id}" data-team="away" value="${awayScoreVal}" min="0" ${!match.awayTeam ? 'disabled' : ''}>
    </div>
  `;
  
  if (needsPenalties) {
    const homePenVal = match.homePenScore !== null ? match.homePenScore : '';
    const awayPenVal = match.awayPenScore !== null ? match.awayPenScore : '';
    
    html += `
      <div class="penalty-shootout-container">
        <span class="penalty-label">Penales</span>
        <input type="number" class="penalty-input" data-match-id="${match.id}" data-team="home-pen" value="${homePenVal}" min="0">
        <span style="color:var(--color-accent); font-weight:bold; font-size:0.75rem;">-</span>
        <input type="number" class="penalty-input" data-match-id="${match.id}" data-team="away-pen" value="${awayPenVal}" min="0">
      </div>
    `;
  }
  
  card.innerHTML = html;
  return card;
}

// 8. Detalle de Grupo (Modal)
function openGroupModal(groupLetter) {
  const modal = document.getElementById('group-modal');
  document.getElementById('modal-group-title').textContent = `Detalle de Grupo ${groupLetter}`;
  
  // Render modal standing
  renderModalStanding(groupLetter);
  
  // Render modal matches
  renderModalMatches(groupLetter);
  
  modal.classList.add('open');
}

function closeGroupModal() {
  const modal = document.getElementById('group-modal');
  modal.classList.remove('open');
  
  // Refresh main views in case scores changed
  calculateAllStandings();
  renderGroupsGrid();
  updateThirdsTable();
  
  // Trigger bracket recalculation
  computeKnockoutBracket();
  updateBracket();
}

function renderModalStanding(groupLetter) {
  const tbody = document.getElementById('modal-standing-body');
  tbody.innerHTML = '';
  
  const standings = appState.groupStandings[groupLetter] || [];
  standings.forEach((team, idx) => {
    const row = document.createElement('tr');
    row.className = `pos-${idx + 1}`;
    
    row.innerHTML = `
      <td class="bold">${idx + 1}</td>
      <td>
        <div class="team-cell">
          <img src="${getFlagUrl(team.name)}" alt="" class="flag-img" style="width:24px; height: 16px;">
          <span>${team.name}</span>
        </div>
      </td>
      <td>${team.pj}</td>
      <td>${team.w}</td>
      <td>${team.e}</td>
      <td>${team.p}</td>
      <td>${team.gf}</td>
      <td>${team.ga}</td>
      <td class="bold">${team.gd >= 0 ? '+' : ''}${team.gd}</td>
      <td class="bold" style="color: var(--color-scout-green); font-size: 1rem;">${team.pts}</td>
    `;
    tbody.appendChild(row);
  });
}

function renderModalMatches(groupLetter) {
  const list = document.getElementById('modal-matches-list');
  list.innerHTML = '';
  
  const matches = appState.groupMatches[groupLetter] || [];
  matches.forEach(m => {
    const item = document.createElement('div');
    item.className = 'match-item';
    
    const homeVal = m.homeScore !== null ? m.homeScore : '';
    const awayVal = m.awayScore !== null ? m.awayScore : '';
    
    item.innerHTML = `
      <div class="match-item-team home">
        <span>${m.homeTeam}</span>
        <img src="${getFlagUrl(m.homeTeam)}" alt="" class="flag-img" style="width:24px; height: 16px;">
      </div>
      
      <div class="match-score-inputs">
        <input type="number" class="score-input modal-score-input" data-match-id="${m.id}" data-team="home" value="${homeVal}" min="0">
        <span class="match-vs">vs</span>
        <input type="number" class="score-input modal-score-input" data-match-id="${m.id}" data-team="away" value="${awayVal}" min="0">
      </div>
      
      <div class="match-item-team away">
        <img src="${getFlagUrl(m.awayTeam)}" alt="" class="flag-img" style="width:24px; height: 16px;">
        <span>${m.awayTeam}</span>
      </div>
    `;
    list.appendChild(item);
  });
}

// 9. Simulación y Acciones
function simulateGroupStage() {
  Object.keys(GROUPS_DATA).forEach(g => {
    const matches = appState.groupMatches[g];
    matches.forEach(m => {
      // Generate realistic scores: higher chance of lower scores
      const scoreOpts = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 4];
      m.homeScore = scoreOpts[Math.floor(Math.random() * scoreOpts.length)];
      m.awayScore = scoreOpts[Math.floor(Math.random() * scoreOpts.length)];
    });
  });
  
  calculateAllStandings();
  renderGroupsGrid();
  updateThirdsTable();
  computeKnockoutBracket();
  updateBracket();
  saveState();
}

function simulateKnockoutStage() {
  if (!isGroupStageCompleted()) return;
  
  // Helper to simulate a match
  const simulateMatch = (matchId) => {
    const m = appState.knockoutMatches[matchId];
    if (!m.homeTeam || !m.awayTeam) return;
    
    const scoreOpts = [0, 1, 1, 2, 2, 3];
    m.homeScore = scoreOpts[Math.floor(Math.random() * scoreOpts.length)];
    m.awayScore = scoreOpts[Math.floor(Math.random() * scoreOpts.length)];
    
    if (m.homeScore === m.awayScore) {
      // Tie needs penalties
      const homePen = Math.floor(Math.random() * 3) + 3; // 3 to 5
      let awayPen = Math.floor(Math.random() * 3) + 3;
      while (homePen === awayPen) {
        awayPen = Math.floor(Math.random() * 3) + 3;
      }
      m.homePenScore = homePen;
      m.awayPenScore = awayPen;
    } else {
      m.homePenScore = null;
      m.awayPenScore = null;
    }
  };
  
  // Simulate in layers to allow proper propagation
  // R32
  for (let id = 73; id <= 88; id++) {
    simulateMatch(id);
  }
  propagateKnockoutTree();
  
  // R16
  for (let id = 89; id <= 96; id++) {
    simulateMatch(id);
  }
  propagateKnockoutTree();
  
  // QF
  for (let id = 97; id <= 100; id++) {
    simulateMatch(id);
  }
  propagateKnockoutTree();
  
  // SF
  for (let id = 101; id <= 102; id++) {
    simulateMatch(id);
  }
  propagateKnockoutTree();
  
  // Final and 3rd place
  simulateMatch(103);
  simulateMatch(104);
  propagateKnockoutTree();
  
  // Render
  updateBracket();
  saveState();
}

// 10. Controladores de Eventos
function setupEventListeners() {
  // Tabs navigation
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-tab');
      
      // Deactivate all
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      
      // Activate selected
      btn.classList.add('active');
      document.getElementById(tabId).classList.add('active');
      
      // Special action when entering bracket
      if (tabId === 'tab-bracket') {
        updateBracket();
      }
    });
  });
  
  // Modal Close
  document.getElementById('modal-close-btn').addEventListener('click', closeGroupModal);
  window.addEventListener('click', (e) => {
    const modal = document.getElementById('group-modal');
    if (e.target === modal) {
      closeGroupModal();
    }
  });
  
  // Score inputs in modal (change event)
  document.getElementById('modal-matches-list').addEventListener('input', (e) => {
    if (e.target.classList.contains('modal-score-input')) {
      const matchId = e.target.getAttribute('data-match-id');
      const team = e.target.getAttribute('data-team'); // 'home' or 'away'
      const value = e.target.value === '' ? null : parseInt(e.target.value, 10);
      
      // Find match in state
      const groupLetter = matchId.split('-')[0];
      const match = appState.groupMatches[groupLetter].find(m => m.id === matchId);
      
      if (match) {
        if (team === 'home') match.homeScore = value;
        else if (team === 'away') match.awayScore = value;
      }
      
      // Recalculate standings for this group only for smooth feedback
      calculateGroupStanding(groupLetter);
      renderModalStanding(groupLetter);
      saveState();
    }
  });
  
  // Score inputs in Bracket view (change event)
  document.getElementById('bracket-container').addEventListener('input', (e) => {
    if (e.target.classList.contains('bracket-score-input') || e.target.classList.contains('penalty-input')) {
      const matchId = parseInt(e.target.getAttribute('data-match-id'), 10);
      const team = e.target.getAttribute('data-team');
      const val = e.target.value === '' ? null : parseInt(e.target.value, 10);
      
      const match = appState.knockoutMatches[matchId];
      if (match) {
        if (team === 'home') match.homeScore = val;
        else if (team === 'away') match.awayScore = val;
        else if (team === 'home-pen') match.homePenScore = val;
        else if (team === 'away-pen') match.awayPenScore = val;
      }
      
      // Propagate changes and rerender
      propagateKnockoutTree();
      updateBracket();
    }
  });
  
  // Header Buttons
  document.getElementById('btn-simulate-groups').addEventListener('click', simulateGroupStage);
  document.getElementById('btn-unlock-simulate').addEventListener('click', () => {
    simulateGroupStage();
    // Switch to bracket tab directly
    document.querySelector('[data-tab="tab-bracket"]').click();
  });
  document.getElementById('btn-simulate-knockout').addEventListener('click', simulateKnockoutStage);
  
  document.getElementById('btn-reset').addEventListener('click', () => {
    if (confirm('¿Estás seguro de que quieres limpiar todos los marcadores? Se perderá todo tu progreso.')) {
      resetAllData();
      calculateAllStandings();
      renderGroupsGrid();
      updateThirdsTable();
      updateBracket();
      
      // If modal is open, close it
      document.getElementById('group-modal').classList.remove('open');
      
      // Switch back to groups tab
      document.querySelector('[data-tab="tab-groups"]').click();
    }
  });
}

// Start application
window.onload = initApp;
