export default function ProductPage({ params: { id } }: Readonly<{ params: { id: string } }>) {
  return <div>Product Page: {id}</div>;
}
