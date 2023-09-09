import "../css/Home.css";
import Block from "../components/Block";

export default function Home() {
  return (
    <>
      <main className="main_body">
        <p className="display-4">Dashboard</p>

        <div className="BlockContainer">
          <Block title="ola" value="5" />
          <Block title="ola" value="5" />
          <Block title="ola" value="5" />
          <Block title="ola" value="5" />
        </div>
      </main>
    </>
  );
}
