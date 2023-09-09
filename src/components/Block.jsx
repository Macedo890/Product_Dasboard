import "../css/Block.css";

export default function Block({ title, value }) {
  return (
    <>
      <div className="block">
        <p>{title}</p>
        <p className="h1">{value}</p>
      </div>
    </>
  );
}
