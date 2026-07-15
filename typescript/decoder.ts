// Typed version of the IoT payload decoder (see iot/payload-decoder.js).
// Shows how interfaces + unions make a decoder self-documenting.

type UplinkFrequency =
  | "minutely"
  | "quarter hourly"
  | "half hourly"
  | "hourly"
  | "every 6 hours"
  | "every 12 hours"
  | "daily"
  | "every three days"
  | "weekly"
  | "monthly"
  | "unknown";

interface DecodedPayload {
  example: number;
  humidity: number;
  time_uplink: number;
  battery: boolean;
  uplink_freq: UplinkFrequency;
}

const FREQ_LABELS: Record<number, UplinkFrequency> = {
  0x00: "minutely",
  0x01: "quarter hourly",
  0x02: "half hourly",
  0x03: "hourly",
  0x04: "every 6 hours",
  0x05: "every 12 hours",
  0x06: "daily",
  0x07: "every three days",
  0x08: "weekly",
  0x09: "monthly",
};

function decode(bytes: number[]): DecodedPayload {
  const view = new DataView(new ArrayBuffer(bytes.length));
  bytes.forEach((b, i) => view.setUint8(i, b));

  const flagByte = view.getUint8(0);

  return {
    example: view.getUint8(0),
    humidity: view.getUint8(1) / 2,
    time_uplink: view.getUint32(3),
    battery: Math.floor((flagByte % 32) / 16) !== 0,
    uplink_freq: FREQ_LABELS[flagByte] ?? "unknown",
  };
}

console.log(decode([0x2a, 0x50, 0x00, 0x00, 0x01, 0x86, 0xa0]));

export { decode, DecodedPayload, UplinkFrequency };
