import { FaPlusCircle } from "react-icons/fa";

export const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        height: "70px",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#333",
        padding: "0 20px",
      }}
    >
      <img
        src="https://github.com/amesq01.png"
        alt="logo-foto-usuario"
        style={{
          width: "35px",
          height: "35px",
          borderRadius: "35px",
        }}
      />
      <h1 style={{ color: "#ccc", fontSize: "24px" }}>Minhas Despesas</h1>
      <FaPlusCircle size={30} color="white" />
    </header>
  );
};
