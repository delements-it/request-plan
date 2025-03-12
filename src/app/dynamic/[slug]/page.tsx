import { redirect } from 'next/navigation';

export default function DynamicRedirect({ params }: { params: { slug: string } }) {
  const destinations: { [key: string]: string } = {
    nfc_tag_01: 'https://ar.rootrotation.com/p/Project_121_mbxz8g8rax',
    dynamic1: 'https://voz.vn',
  };

  const destination = destinations[params.slug];

  if (!destination) {
    return new Response('Not Found', { status: 404 });
  }

  redirect(destination);
}