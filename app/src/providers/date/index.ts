import { MomentFormatSpecification, MomentInput } from "moment";

import timeFromNow from "./timeFromNow";
import client from "./client";
import getDefaultDateFormat, {
  toNanoseconds,
  now,
  fromNanoseconds,
  toUtcOffsetNanoseconds,
  fromTimestampWithOffset,
} from "./getDefaultDateFormat";

const parseFromFormat = (inp?: MomentInput, format?: MomentFormatSpecification, strict: boolean = false) =>
  client(inp, format, strict);

export default {
  parseFromFormat,
  timeFromNow,
  getDefaultDateFormat,
  fromTimestampWithOffset,
  toNanoseconds,
  fromNanoseconds,
  now,
  client,
  toUtcOffsetNanoseconds,
};
