/* ==========================================================================
   CONECTARED - MOCK DATA (Data de Prueba para el Dashboard)
   ========================================================================== */

// 1. Datos de la Próxima Sesión (Upcoming Mentorship)
const UPCOMING_SESSION = {
  mentorName: "Dr. Sarah Mitchell",
  specialty: "Advanced UI/UX Design Principles",
  date: "March 12, 2026",
  time: "10:30 AM - 11:30 AM",
  avatar: "assets/images/mentors/sarah.jpg",
  status: "UPCOMING",
};

// 2. Métricas de Progreso (My Progress)
const PROGRESS_METRICS = [
  { label: "Active Course", percentage: 75, color: "#f6e05e" }, // Amarillo
  { label: "Resources", percentage: 40, color: "#4a5568" }, // Gris oscuro
  { label: "Assignments", percentage: 90, color: "#a0aec0" }, // Gris claro
];

// 3. Tarjetas de Recomendación (Recommended for You)
const RECOMMENDED_COURSES = [
  {
    id: 1,
    category: "DESIGN",
    tagClass: "tag-design",
    title: "Mastering Modern Typography",
    duration: "45 mins",
    image: "assets/images/courses/typography.jpg",
  },
  {
    id: 2,
    category: "BUSINESS",
    tagClass: "tag-business",
    title: "Agile Product Lifecycle",
    duration: "1h 20m",
    image: "assets/images/courses/agile.jpg",
  },
  {
    id: 3,
    category: "ARTS",
    tagClass: "tag-arts",
    title: "Psychology of Color in Tech",
    duration: "30 mins",
    image: "assets/images/courses/color.jpg",
  },
];

// 4. Bitácora Cronológica (Recent Activity)
const RECENT_ACTIVITIES = [
  {
    id: 1,
    type: "completed",
    icon: "✓",
    text: 'Completed "UI Foundations"',
    timeAgo: "2 days ago",
  },
  {
    id: 2,
    type: "scheduled",
    icon: "📅",
    text: "Scheduled session with Dr. Mitchell",
    timeAgo: "Yesterday",
  },
  {
    id: 3,
    type: "saved",
    icon: "🔖",
    text: 'Saved "Design Thinking Guide"',
    timeAgo: "2 days ago",
  },
  {
    id: 4,
    type: "followed",
    icon: "👤",
    text: "Followed Marcus Aurelius",
    timeAgo: "3 days ago",
  },
];
