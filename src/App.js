import { Header } from "./components/Header";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { DEBITOS } from "./constants";

export default function App() {
  return (
    <>
      <Header />
      <div>
        <div
          style={{
            display: "flex",
            height: "25px",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#3c3c3c",
            padding: "20px 20px",
          }}
        >
          <FaChevronLeft size={20} color="white" />
          <span style={{ color: "#ccc", fontSize: "16px" }}>Julho/2022</span>
          <FaChevronRight size={20} color="white" />
        </div>
        <div
          style={{
            backgroundColor: "#E03D33",
            display: "flex",
            justifyContent: "center",
            padding: "2px 0",
          }}
        >
          <span style={{ fontSize: "13px", color: "#ccc" }}>
            Existem parcelas pendentes de pagamento
          </span>
        </div>
        <div>
          {DEBITOS.map((debito) => (
            <>
              <p key={debito}>{debito.description}</p>
              <span>{debito.currentInstallments}</span>
              <span>{String(debito.data)}</span>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
