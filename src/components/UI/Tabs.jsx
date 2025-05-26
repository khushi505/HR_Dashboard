import { useState } from "react";

export default function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  return (
    <div className="mt-6">
      <div className="flex gap-4 border-b mb-4">
        {tabs.map(({ label }) => (
          <button
            key={label}
            onClick={() => setActiveTab(label)}
            className={`pb-2 text-sm font-medium border-b-2 ${
              activeTab === label
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      <div>{tabs.find((t) => t.label === activeTab).content}</div>
    </div>
  );
}
