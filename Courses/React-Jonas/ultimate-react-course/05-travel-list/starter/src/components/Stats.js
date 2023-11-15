export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  const numItems = items.length;
  const itemsPacked = items.filter((item) => item.packed);
  const percentage = Math.round((itemsPacked.length / items.length) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : `🧳 You have ${numItems} items on your list, and you already packed
        ${items.filter((item) => item.packed).length} (${percentage}%)`}
      </em>
    </footer>
  );
}
