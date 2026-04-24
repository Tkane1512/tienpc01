import Image from "next/image";

export default function Home() {
  return (
    <main style={{ fontFamily: "Arial", background: "#f5f5f5", minHeight: "100vh" }}>
      
      {/* HEADER */}
      <header style={{ background: "#111", color: "white", padding: 20 }}>
        <h1>My Simple Web App</h1>
      </header>

      {/* HERO SECTION */}
      <section style={{ padding: 40, textAlign: "center" }}>
        <h2>👋 Xin chào!</h2>
        <p>Đây là web đang thử nghiệm</p>
        <button style={{
          marginTop: 20,
          padding: "10px 20px",
          background: "#0070f3",
          color: "white",
          border: "none",
          borderRadius: 5,
          cursor: "pointer"
        }}>
          Bắt đầu
        </button>
      </section>

      {/* FEATURES */}
      <section style={{ display: "flex", gap: 20, justifyContent: "center", padding: 20 }}>
        
        <div style={{
          background: "white",
          padding: 20,
          borderRadius: 10,
          width: 200,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
        }}>
          <h3>⚡ Nhanh</h3>
          <p>Web chạy cực nhanh với Next.js</p>
        </div>

        <div style={{
          background: "white",
          padding: 20,
          borderRadius: 10,
          width: 200,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
        }}>
          <h3>📱 Responsive</h3>
          <p>Hiển thị tốt trên điện thoại</p>
        </div>

        <div style={{
          background: "white",
          padding: 20,
          borderRadius: 10,
          width: 200,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
        }}>
          <h3>🚀 Deploy</h3>
          <p>Đưa lên Vercel chỉ 1 click</p>
        </div>

      </section>

      {/* FOOTER */}
      <footer style={{
        marginTop: 40,
        padding: 20,
        textAlign: "center",
        background: "#111",
        color: "white"
      }}>
        © 2026 Tiến PC01: 0988029196
      </footer>

    </main>
  );
}