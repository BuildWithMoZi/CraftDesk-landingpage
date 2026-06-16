import { Header } from "./header";
import { Footer } from "./footer";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1 max-md:max-w-full max-md:overflow-x-clip">{children}</main>
      <Footer />
    </>
  );
}
