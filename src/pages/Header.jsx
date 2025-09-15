function Header({ navigate, currentPage }) {
  return (
    <nav className="d-flex gap-3 mb-4">
      <button
        className={`btn ${currentPage === "home" ? "btn-primary" : "btn-outline-primary"}`}
        onClick={() => navigate("home")}
      >
        Home
      </button>
      <button
        className={`btn ${currentPage === "contact" ? "btn-primary" : "btn-outline-primary"}`}
        onClick={() => navigate("contact")}
      >
        Contact
      </button>
      <button
        className={`btn ${currentPage === "single" ? "btn-primary" : "btn-outline-primary"}`}
        onClick={() => navigate("single")}
      >
        Single
      </button>
    </nav>
  );
}

export default Header;
