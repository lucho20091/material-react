export default function Border({ children, className }) {
  return (
    <div
      className={`p-4 border-2 border-indigo-950 ${className ? className : ""}`}
    >
      {children}
    </div>
  );
}
