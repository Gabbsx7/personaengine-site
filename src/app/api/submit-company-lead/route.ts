// INSTRUÇÃO IMPORTANTE:
// Adicione a variável de ambiente GOOGLE_SERVICE_ACCOUNT_JSON com o conteúdo do arquivo de credenciais da service account (não o caminho, mas o JSON inteiro em string).
// Exemplo: GOOGLE_SERVICE_ACCOUNT_JSON='{"type":"service_account",...}'
// Compartilhe a planilha com o e-mail da service account.
//
// Instale 'googleapis' no projeto: npm install googleapis
//
// Planilha: https://docs.google.com/spreadsheets/d/1Cn5V3VgdzXuxJiXJoOwuAE96mNTA-lrA3J6h4ZnekMY/edit?usp=sharing

import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, segment, teamSize } = body;

    // Carregar credenciais do service account
    const auth = new google.auth.GoogleAuth({
      credentials: process.env.GOOGLE_SERVICE_ACCOUNT_JSON
        ? JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON)
        : undefined,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    const sheets = google.sheets({ version: 'v4', auth });

    // ID da planilha e range
    const spreadsheetId = '1Cn5V3VgdzXuxJiXJoOwuAE96mNTA-lrA3J6h4ZnekMY';

    // Adicionar nova linha
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'A:E',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[name, email, company, segment, teamSize]],
      },
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ ok: false, error: 'Erro ao salvar lead.' }, { status: 500 });
  }
} 