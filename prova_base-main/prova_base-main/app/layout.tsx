import Head from 'next/head';
import Image from 'next/image';

function Layout({ children }) {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6">
      <Head>
        <title>Recipe App</title>
      </Head>
      <header className="flex justify-center mb-4">
        <Image src="/logo.png" alt="Logo" width={100} height={100} />
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;