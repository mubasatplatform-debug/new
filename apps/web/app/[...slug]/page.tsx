import { notFound } from 'next/navigation';
import { Header } from '../../components/Header';
import { GenericPage } from '../../components/PageShell';
import { getPageByRoute, pageMap } from '../../lib/page-map';

export function generateStaticParams() {
  return pageMap
    .filter(page => !['/', '/fleet', '/cars/camry-2024', '/booking/checkout', '/customer', '/admin', '/admin/fleet', '/admin/crm', '/admin/ai', '/admin/integrations', '/admin/settings', '/admin/live-map', '/admin/page-map'].includes(page.route))
    .map(page => ({ slug: page.route.split('/').filter(Boolean) }));
}

export default function CatchAllPage({ params }: { params: { slug: string[] } }) {
  const route = '/' + params.slug.join('/');
  const page = getPageByRoute(route);
  if (!page) return notFound();
  const isAdmin = route.startsWith('/admin');
  return <>{!isAdmin && <Header/>}<GenericPage route={page.route} title={page.title} description={page.description} section={page.section}/></>;
}
