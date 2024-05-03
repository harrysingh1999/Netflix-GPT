import OpenAI from "openai";
import { OPENAI_API_KEY } from "./constantData";

export const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});
