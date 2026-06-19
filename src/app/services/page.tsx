import { redirect } from "next/navigation";
import { routes } from "@/lib/routes";

export default function LegacyServicesRedirect() {
  redirect(routes.products);
}
