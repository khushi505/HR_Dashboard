"use client";

import useStore from "@/store/useStore";
import RatingStars from "../UI/RatingStars";
import Button from "../UI/Button";

export default function UserCard({ user }) {
  const { bookmarks, addBookmark, removeBookmark } = useStore();
  const isBookmarked = bookmarks.some((u) => u.id === user.id);
  const { removeUser } = useStore();
  const isCustomUser = user.id.toString().length > 10;

  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-4 rounded-xl border border-blue-900 dark:border-gray-700 shadow-md hover:shadow-lg">
      <h3 className="text-lg font-semibold">
        {user.firstName} {user.lastName}
      </h3>
      <p className="text-sm text-gray-700 dark:text-gray-300">
        {user.email} · Age {user.age}
      </p>
      <p className="text-sm text-blue-600">{user.department}</p>
      <RatingStars rating={user.performance} />
      <div className="flex gap-2 mt-2">
        <Button onClick={() => (window.location.href = `/employee/${user.id}`)}>
          View
        </Button>
        <Button
          variant="secondary"
          onClick={() =>
            isBookmarked ? removeBookmark(user.id) : addBookmark(user)
          }
        >
          {isBookmarked ? "Remove" : "Bookmark"}
        </Button>
        <Button variant="primary" onClick={() => alert("Promoted ✅")}>
          Promote
        </Button>
        {isCustomUser && (
          <Button variant="danger" onClick={() => removeUser(user.id)}>
            Delete
          </Button>
        )}
      </div>
    </div>
  );
}
