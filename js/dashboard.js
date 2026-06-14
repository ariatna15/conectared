/* ==========================================================================
   CONECTARED - MOTOR DE RENDERIZADO DEL DASHBOARD
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  renderUpcomingSession();
  renderProgressMetrics();
  renderRecommendations();
  renderRecentActivity();
});

// A. Inyección de la Próxima Sesión de Mentoría
function renderUpcomingSession() {
  const container = document.getElementById("widget-session");
  if (!container) return;

  container.innerHTML = `
        <div class="session-badge">${UPCOMING_SESSION.status}</div>
        <div class="session-body">
            <div class="mentor-avatar-wrapper">
                <img src="${UPCOMING_SESSION.avatar}" alt="${UPCOMING_SESSION.mentorName}" onerror="this.parentNode.classList.add('no-image');">
            </div>
            <div class="mentor-info">
                <h3 class="mentor-name">${UPCOMING_SESSION.mentorName}</h3>
                <p class="mentor-specialty">${UPCOMING_SESSION.specialty}</p>
                <div class="session-time-meta">
                    <span>📅 ${UPCOMING_SESSION.date}</span>
                    <span>🕒 ${UPCOMING_SESSION.time}</span>
                </div>
            </div>
            <button class="btn-join">Join Now</button>
        </div>
    `;
}

// B. Inyección de Métricas de Progreso (Gráficos SVG circulares)
function renderProgressMetrics() {
  const container = document.getElementById("widget-progress");
  if (!container) return;

  container.innerHTML = PROGRESS_METRICS.map((metric) => {
    // Cálculo del perímetro de la circunferencia para el efecto de carga del SVG (Radio = 30)
    const radius = 30;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset =
      circumference - (metric.percentage / 100) * circumference;

    return `
            <div class="metric-item">
                <div class="metric-chart-wrapper">
                    <svg width="80" height="80" viewBox="0 0 80 80">
                        <circle cx="40" cy="40" r="${radius}" class="svg-circle-bg" />
                        <circle cx="40" cy="40" r="${radius}" class="svg-circle-progress"
                                stroke="${metric.color}"
                                stroke-dasharray="${circumference}"
                                stroke-dashoffset="${strokeDashoffset}"
                                transform="rotate(-90 40 40)" />
                    </svg>
                    <span class="metric-percentage">${metric.percentage}%</span>
                </div>
                <span class="metric-label">${metric.label}</span>
            </div>
        `;
  }).join("");
}

// C. Inyección de Tarjetas de Recomendación
function renderRecommendations() {
  const container = document.getElementById("widget-recommendations");
  if (!container) return;

  container.innerHTML = RECOMMENDED_COURSES.map(
    (course) => `
        <article class="custom-card">
            <div class="card-image-wrapper">
                <img src="${course.image}" alt="${course.title}" onerror="this.style.display='none';">
            </div>
            <div class="card-body">
                <span class="card-tag ${course.tagClass}">${course.category}</span>
                <h3 class="card-title">${course.title}</h3>
                <div class="card-footer-meta">
                    <span>🕒 ${course.duration}</span>
                </div>
            </div>
        </article>
    `,
  ).join("");
}

// D. Inyección de la Bitácora de Actividad Reciente
function renderRecentActivity() {
  const container = document.getElementById("widget-activity");
  if (!container) return;

  container.innerHTML = RECENT_ACTIVITIES.map(
    (activity) => `
        <li class="activity-item">
            <div class="activity-icon-container icon-${activity.type}">
                ${activity.icon}
            </div>
            <div class="activity-details">
                <p class="activity-text">${activity.text}</p>
                <span class="activity-time">${activity.timeAgo}</span>
            </div>
        </li>
    `,
  ).join("");
}
