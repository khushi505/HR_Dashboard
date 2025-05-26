import { getServerSession } from "next-auth";

import { redirect } from "next/navigation";
import AnalyticsPage from "./AnalyticsClient";

export default async function ProtectedAnalyticsPage() {
  const session = await getServerSession();
  if (!session) redirect("/login");
  return <AnalyticsPage />;
}
