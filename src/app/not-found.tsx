import { MainLayout } from "@/components/layout/main-layout";
import { BackToHomeButton } from "@/components/navigation/back-to-home-button";

export default function NotFound() {
  return (
    <MainLayout>
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <h1 className="text-8xl font-bold text-orange-400">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-white">Page Not Found</h2>
        <p className="mt-2 text-zinc-400">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <BackToHomeButton />
      </div>
    </MainLayout>
  );
}
