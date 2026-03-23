'use strict';

export function clampNumber(value: number, min: number, max: number): number {
  if (Number.isNaN(value)) return min;
  return Math.min(max, Math.max(min, value));
}

export function clampPercent(value: number): number {
  return clampNumber(value, 0, 100);
}

export function clampInt(value: number, min: number, max: number): number {
  return Math.round(clampNumber(value, min, max));
}

export function rawTemperatureTimes10ToCelsius(rawTimes10: number): number {
  return rawTimes10 / 10;
}
