import { useState } from "react";

const DEFAULT_PROFILES = [
  {
    name: "Joe",
    bio: "Learning to build web apps from scratch with Claude Code as my copilot. Currently working through the Frontend module on DevPath.",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Joe&backgroundColor=3b82f6&textColor=ffffff",
  },
  {
    name: "Sarah Chen",
    bio: "Full-stack developer who loves clean UI and accessible design. Coffee enthusiast and open-source contributor.",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=SC&backgroundColor=8b5cf6&textColor=ffffff",
  },
  {
    name: "Alex Rivera",
    bio: "Designer turned developer. Passionate about bridging the gap between beautiful interfaces and solid engineering.",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=AR&backgroundColor=059669&textColor=ffffff",
  },
];

function ProfileCard({ name, bio, avatar }) {
  return (
    <div style={styles.card}>
      <img
        src={avatar}
        alt={`${name}'s avatar`}
        style={styles.avatar}
      />
      <h2 style={styles.name}>{name}</h2>
      <p style={styles.bio}>{bio}</p>
    </div>
  );
}

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Profile Cards</h1>
      <p style={styles.subtitle}>
        A reusable React component — click a name to swap profiles
      </p>

      <div style={styles.tabs}>
        {DEFAULT_PROFILES.map((profile, i) => (
          <button
            key={profile.name}
            onClick={() => setActiveIndex(i)}
            style={{
              ...styles.tab,
              ...(i === activeIndex ? styles.tabActive : {}),
            }}
          >
            {profile.name}
          </button>
        ))}
      </div>

      <ProfileCard
        name={DEFAULT_PROFILES[activeIndex].name}
        bio={DEFAULT_PROFILES[activeIndex].bio}
        avatar={DEFAULT_PROFILES[activeIndex].avatar}
      />

      <div style={styles.codeHint}>
        <p style={styles.codeHintTitle}>How this works</p>
        <p style={styles.codeHintText}>
          ProfileCard is a pure component — it just takes name, bio, and avatar
          as props and renders them. The parent component manages which profile
          is active using useState. Click a different name and React re-renders
          the card with new props.
        </p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#fafafa",
    fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "48px 24px",
  },
  title: {
    fontSize: 28,
    fontWeight: 700,
    color: "#111827",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    color: "#9ca3af",
    marginBottom: 32,
  },
  tabs: {
    display: "flex",
    gap: 6,
    marginBottom: 28,
  },
  tab: {
    padding: "8px 16px",
    border: "none",
    borderRadius: 8,
    backgroundColor: "transparent",
    color: "#6b7280",
    fontSize: 14,
    fontWeight: 500,
    cursor: "pointer",
    fontFamily: "inherit",
    transition: "all 0.15s",
  },
  tabActive: {
    backgroundColor: "#eff6ff",
    color: "#2563eb",
    fontWeight: 600,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: "40px 36px",
    width: "100%",
    maxWidth: 360,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 6px 16px rgba(0,0,0,0.04)",
    border: "1px solid #f3f4f6",
    transition: "box-shadow 0.2s",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: "50%",
    marginBottom: 20,
    backgroundColor: "#e5e7eb",
    objectFit: "cover",
  },
  name: {
    fontSize: 20,
    fontWeight: 700,
    color: "#111827",
    marginBottom: 8,
  },
  bio: {
    fontSize: 15,
    color: "#6b7280",
    lineHeight: 1.6,
    margin: 0,
  },
  codeHint: {
    marginTop: 32,
    padding: "20px 24px",
    backgroundColor: "#eff6ff",
    borderRadius: 12,
    border: "1px solid #bfdbfe",
    maxWidth: 360,
    width: "100%",
  },
  codeHintTitle: {
    fontWeight: 600,
    fontSize: 13,
    color: "#1d4ed8",
    marginBottom: 6,
  },
  codeHintText: {
    fontSize: 13,
    color: "#1e3a5f",
    lineHeight: 1.6,
    margin: 0,
  },
};