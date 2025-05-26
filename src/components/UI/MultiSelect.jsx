export default function MultiSelect({ label, options, selected, setSelected }) {
  const toggle = (value) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((v) => v !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  return (
    <div className="flex flex-col gap-1">
      <label className="font-medium">{label}</label>
      <div className="flex gap-2 flex-wrap">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => toggle(option)}
            className={`px-3 py-1 rounded-full text-sm border ${
              selected.includes(option)
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white dark:bg-gray-700 dark:text-white border-gray-300 dark:border-gray-600"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
