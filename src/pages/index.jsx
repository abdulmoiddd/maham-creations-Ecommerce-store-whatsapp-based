import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Visuura</title>
        <meta name="description" content="Welcome to Visuura" />
      </Head>

      <main className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <h1 className="text-4xl font-bold">Welcome</h1>
      </main>
    </>
  );
}
