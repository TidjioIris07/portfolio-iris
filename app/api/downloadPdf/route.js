import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  const filePath = path.join(process.cwd(), 'public/pdf/yourfile.pdf');

  // Ensure the file exists
  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: 'File not found' }, { status: 404 });
  }

  // Read file content into a buffer
  const fileBuffer = fs.readFileSync(filePath);

  return new Response(fileBuffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="CV_Odilon.pdf"'
    }
  });
}
