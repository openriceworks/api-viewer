import { camelCase } from "lodash";
import { SnakeToCamel } from "../types";

export const fromSnakeToCamel = <T extends object> (data: T) : SnakeToCamel<T> => {
  return Object.entries(data).reduce((ret, [key,value]) => {
    // force cast
    const camelCaseKey = camelCase(key) as keyof SnakeToCamel<T>
    if(camelCaseKey) {
      ret[camelCaseKey] = value
    }
    return ret
  },
  {} as SnakeToCamel<T>)
}