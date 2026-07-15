// Working with binary data: ArrayBuffer + DataView

// bytes: an array of numbers 0-255 (like a payload from a device)
const bytes = [0x2a, 0x50, 0x00, 0x00, 0x01, 0x86, 0xa0];

// 1. Allocate a buffer of the right size.
const buf = new ArrayBuffer(bytes.length);

// 2. A DataView lets you read/write typed numbers at byte offsets.
const view = new DataView(buf);
for (let i = 0; i < bytes.length; i++) {
  view.setUint8(i, bytes[i]);
}

// 3. Read fields at known offsets:
console.log(view.getUint8(0));   // one byte, 0-255
console.log(view.getUint16(0));  // two bytes, big-endian by default
console.log(view.getUint32(3));  // four bytes

// Bit math to unpack flags packed inside one byte:
const b = view.getUint8(0);
console.log("low 5 bits:", b % 32);
console.log("bit 0 (flag):", (b & 0x01) === 1);

// TODO: little-endian (pass true), signed ints (getInt8/16/32), floats
