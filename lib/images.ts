// Maps each numbered image to its actual extension in public/images/
const ext: Record<number, string> = {
  2: "webp", 3: "webp", 4: "webp", 5: "webp", 6: "webp",
  7: "jpeg",
  8: "webp", 9: "webp", 10: "webp", 11: "webp", 12: "webp",
  13: "webp", 14: "webp", 15: "webp", 16: "webp", 17: "webp",
  18: "jpg", 19: "jpg",
  20: "webp", 21: "webp",
  22: "jpg",
  23: "webp", 24: "webp", 25: "webp", 26: "webp",
  27: "jpg", 28: "jpg",
  29: "webp", 30: "webp", 31: "webp", 32: "webp", 33: "webp",
  34: "webp", 35: "webp", 36: "webp",
  37: "jpg",
  38: "webp", 39: "webp", 40: "webp", 41: "webp", 42: "webp",
  43: "webp", 44: "webp", 45: "webp", 46: "webp", 47: "webp",
  48: "webp", 49: "webp", 50: "webp", 51: "webp", 52: "webp",
  53: "png", 54: "png", 55: "png", 56: "png", 57: "png",
  58: "png", 59: "png", 60: "png", 61: "png", 62: "png",
  63: "png", 64: "png", 65: "png", 66: "png", 67: "png", 68: "png",
};

export function imgSrc(n: number): string {
  const e = ext[n];
  return e ? `/images/${n}.${e}` : "";
}

// All available numbered image indices
export const allImageNums = Object.keys(ext).map(Number);

// Subset ranges
export const clientLogoNums = allImageNums.filter((n) => n <= 28);
export const galleryNums = allImageNums.filter((n) => n >= 29 && n <= 40);
