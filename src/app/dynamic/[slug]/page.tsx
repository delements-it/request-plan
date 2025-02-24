import { redirect } from 'next/navigation';

export default function DynamicRedirect({ params }: { params: { slug: string } }) {
  const destinations: { [key: string]: string } = {
    dynamicz: 'https://tuoitre.vn',
  };

  const destination = destinations[params.slug];

  if (!destination) {
    // Trả về trang 404 nếu không tìm thấy URL đích
    return new Response('Not Found', { status: 404 });
  }

  redirect(destination);
}