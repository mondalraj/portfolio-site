import type { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";

type SheetForm = {
  source: string;
  city: string;
  country: string;
  loc: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST Requests Allowed" });
  }

  const body = req.body as SheetForm;

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A1:D1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[body.source, body.city, body.country, body.loc]],
      },
    });

    return res.status(200).json({ message: "Success" });
  } catch (error) {
    return res.status(500).json({ message: String(error) });
  }
}
