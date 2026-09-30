import { useEffect, useState } from "react";
import { fetchMessage } from "./api.js";

const FEATURES = [
  { title: "Tableros claros", text: "Organizá tareas por estado y prioridad en una sola vista." },
  { title: "Equipo alineado", text: "Asigná responsables y seguí el avance sin reuniones extra." },
  { title: "Entregas a tiempo", text: "Detectá bloqueos antes de que afecten la fecha de entrega." },
];

function ApiStatus() {
  const [state, setState] = useState({ status: "loading" });

  useEffect(() => {
    fetchMessage()
      .then((data) => setState({ status: "ok", data }))
      .catch((error) => setState({ status: "error", error: error.message }));
  }, []);

  return (
    <div className={`api-status api-status--${state.status}`} role="status">
      <span className="dot" />
      {state.status === "loading" && "Conectando con la API…"}
      {state.status === "ok" && (
        <span>
          <strong>{state.data.message}</strong> · {state.data.service} v{state.data.version}
        </span>
      )}
      {state.status === "error" && <span>API no disponible ({state.error})</span>}
    </div>
  );
}

export default function App() {
  return (
    <>
      <header className="nav">
        <span className="brand">Taskflow</span>
        <a className="btn btn--ghost" href="#features">
          Funcionalidades
        </a>
      </header>

      <main>
        <section className="hero">
          <h1>Planificá sin fricción</h1>
          <p>Taskflow ayuda a equipos chicos a organizar su trabajo, compartir prioridades y entregar a tiempo.</p>
          <div className="hero__actions">
            <a className="btn" href="#features">
              Empezar gratis
            </a>
          </div>
          <ApiStatus />
        </section>

        <section id="features" className="features">
          {FEATURES.map((f) => (
            <article key={f.title} className="card">
              <h2>{f.title}</h2>
              <p>{f.text}</p>
            </article>
          ))}
        </section>
      </main>

      <footer className="footer">© {new Date().getFullYear()} Taskflow — proyecto demo para ITIL Scanner</footer>
    </>
  );
}
