import { HomePage } from "@/components/home/home-page";
import { JsonLd } from "@/components/seo/json-ld";
import { homePageSchemas } from "@/lib/schema";

export default function Page() {
  return (
    <>
      <JsonLd data={homePageSchemas()} />
      <HomePage />
    </>
  );
}
