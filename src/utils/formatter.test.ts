import { fromSnakeToCamel } from "./formatter"

describe("fromSnakeToCamel", () => {
  it("", () => {
    const input = {
      "latitude": 35.625,
      "longitude": 139.625,
      "generationtime_ms": 0.3110170364379883,
      "utc_offset_seconds": 0,
    }
    const expectData = {
      "latitude": 35.625,
      "longitude": 139.625,
      "generationtimeMs": 0.3110170364379883,
      "utcOffsetSeconds": 0,
    }

    expect(fromSnakeToCamel(input)).toStrictEqual(expectData)

  })
})