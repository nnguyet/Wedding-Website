import { redirect } from 'next/navigation';

export async function GET() {
    redirect('/photos/pre-wedding');
}