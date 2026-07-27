export default function Dashboard() {
  return (
    <main style={{
      backgroundColor: "black",
      color: "white",
      minHeight: "100vh",
      padding: "20px",
      fontFamily: "Arial"
    }}>

      <h1 style={{color:"#00BFFF"}}>Student Dashboard</h1>

      {/* Welcome */}
      <section style={{marginTop:"20px"}}>
        <h2>Welcome, Student 👋</h2>
        <p style={{color:"gray"}}>Access your cybersecurity learning and internships.</p>
      </section>

      {/* Courses */}
      <section style={{marginTop:"40px"}}>
        <h2 style={{color:"#00BFFF"}}>Courses</h2>

        <div style={{display:"flex", gap:"20px", marginTop:"20px"}}>

          <div style={{border:"1px solid gray", padding:"20px", borderRadius:"10px"}}>
            <h3>Ethical Hacking</h3>
            <p style={{color:"gray"}}>Learn penetration testing basics.</p>
          </div>

          <div style={{border:"1px solid gray", padding:"20px", borderRadius:"10px"}}>
            <h3>Network Security</h3>
            <p style={{color:"gray"}}>Understand firewalls & protocols.</p>
          </div>

        </div>
      </section>

      {/* Videos */}
      <section style={{marginTop:"40px"}}>
        <h2 style={{color:"#00BFFF"}}>Video Lessons</h2>

        <div style={{marginTop:"20px"}}>
          <iframe
            width="400"
            height="250"
            src="https://www.youtube.com/embed/3Kq1MIfTWCE"
            title="Cybersecurity Basics"
          ></iframe>
        </div>
      </section>

      {/* Internships */}
      <section style={{marginTop:"40px"}}>
        <h2 style={{color:"#00BFFF"}}>Internships</h2>

        <div style={{marginTop:"20px"}}>
          <p>🔹 SOC Analyst Internship</p>
          <p>🔹 Ethical Hacking Internship</p>
        </div>
      </section>

    </main>
  );
}