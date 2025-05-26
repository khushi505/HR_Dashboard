import useStore from "@/store/useStore";
import RatingStars from "../UI/RatingStars";
import Button from "../UI/Button";

export default function UserCard({ user, mode = "home" }) {
  const { bookmarks, addBookmark, removeBookmark } = useStore();
  const isBookmarked = bookmarks.some((u) => u.id === user.id);

  const handleBookmark = () => {
    isBookmarked ? removeBookmark(user.id) : addBookmark(user);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow flex flex-col gap-2">
      <h3 className="text-lg font-semibold">
        {user.firstName} {user.lastName}
      </h3>
      <p className="text-sm text-gray-600">
        {user.email} · Age {user.age}
      </p>
      <p className="text-sm text-blue-600">{user.department}</p>
      <RatingStars rating={user.performance} />

      <div className="flex gap-2 mt-2">
        {/* Always show View */}
        <Button onClick={() => (window.location.href = `/employee/${user.id}`)}>
          View
        </Button>

        {mode === "home" && (
          <>
            <Button variant="secondary" onClick={handleBookmark}>
              {isBookmarked ? "Remove" : "Bookmark"}
            </Button>
            <Button variant="primary" onClick={() => alert("Promoted ✅")}>
              Promote
            </Button>
          </>
        )}

        {mode === "bookmark" && (
          <>
            <Button variant="danger" onClick={() => removeBookmark(user.id)}>
              Remove
            </Button>
            <Button onClick={() => alert("Assigned to Project ✅")}>
              Assign
            </Button>
            <Button variant="primary" onClick={() => alert("Promoted ✅")}>
              Promote
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
