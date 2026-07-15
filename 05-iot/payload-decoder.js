/*
 * Example LoRaWAN / TTN payload decoder.
 * Cleaned up from the original parser.js (which defined Decoder twice).
 *
 * Error codes:
 *   400 Message part missing/corrupt
 *   401 Middle part of multi message
 *   402 Wrong port
 *   404 callData empty
 */

function Decoder(bytes, port, timestamp, frame_counter, callData) {
  const obj = {};

  const buf = new ArrayBuffer(bytes.length);
  const view = new DataView(buf);
  for (let j = 0; j < bytes.length; j++) {
    view.setUint8(j, bytes[j]);
  }

  // --- parse the data ---
  obj.example = view.getUint8(0);

  // humidity: one byte, stored as 2x the real value
  obj.humidity = view.getUint8(1) / 2;

  // uplink time: 4 bytes starting at offset 3
  obj.time_uplink = view.getUint32(3);

  // battery: a flag packed into byte 0
  obj.battery = Math.floor((view.getUint8(0) % 32) / 16) !== 0;

  // uplink frequency: a code in byte 0 mapped to a label
  const freqLabels = {
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
  obj.uplink_freq = freqLabels[view.getUint8(0)] ?? "unknown";

  return obj;
}

// Helpers for multi-payload / follow-up requests:
function createBetweenTimestampsCallData(url, gte, lte, includeUnmapped) {
  return {
    url: `${url}/dsreader-internal/${gte}/${lte}`,
    includeUnmapped,
    callId: "betweents",
    numberPackets: 0,
  };
}

function createLimitCallData(url, lte, packetCount, includeUnmapped) {
  return {
    url: `${url}/dsreader-internal/${lte}`,
    includeUnmapped,
    callId: "limit",
    numberPackets: packetCount,
  };
}

// Reshape unmapped TTN data so standard parsers can read it.
function map2EMT(jsondoc) {
  jsondoc = JSON.parse(jsondoc);
  if (!("data" in jsondoc)) return jsondoc;
  if (!("unmapped" in jsondoc.data)) return jsondoc;
  if (jsondoc.ts && "expiresOn" in jsondoc.ts) delete jsondoc.ts.expiresOn;
  return jsondoc;
}

// Quick local test:
console.log(Decoder([0x2a, 0x50, 0x00, 0x00, 0x01, 0x86, 0xa0], 1, Date.now(), 0, null));

module.exports = {
  Decoder,
  createBetweenTimestampsCallData,
  createLimitCallData,
  map2EMT,
};
