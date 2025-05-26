import { getServerSession } from "next-auth";

import { redirect } from "next/navigation";
import BookmarksPage from "./BookmarksClient";

export default async function ProtectedBookmarksPage() {
  const session = await getServerSession();
  if (!session) redirect("/login");

  return <BookmarksPage />;
}
