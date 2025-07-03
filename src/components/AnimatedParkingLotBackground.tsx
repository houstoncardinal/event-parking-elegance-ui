import React from "react";

// Grid and circuit config
const GRID_SIZE = 60;
const WIDTH = 600;
const HEIGHT = 400;
const CIRCUIT_LINES = [
  // Each line: [x1, y1, x2, y2]
  [80, 60, 520, 60],
  [120, 120, 120, 340],
  [200, 200, 400, 200],
  [300, 80, 300, 320],
  [80, 320, 520, 320],
  [480, 120, 480, 340],
  [180, 100, 420, 300], // diagonal
  [420, 100, 180, 300], // diagonal
];
const CIRCUIT_NODES = [
  [80, 60], [120, 120], [200, 200], [300, 80], [300, 320], [400, 200], [480, 120], [480, 340], [520, 60], [80, 320], [520, 320], [180, 100], [420, 100], [180, 300], [420, 300]
];

// Animated pulse for some nodes
const PULSE_NODES = [3, 4, 6, 7, 12, 13];

// Car SVG (top view, simple luxury silhouette)
const CarSVG = ({ x, y, rotate = 0, scale = 1, color = "#222", className = "" }) => (
  <g
    className={className}
    style={{
      transform: `translate(${x}px,${y}px) scale(${scale}) rotate(${rotate}deg)`,
      transformOrigin: `${x}px ${y}px`,
      filter: "drop-shadow(0 1px 2px #0002)",
    }}
  >
    <rect x={-8} y={-18} width={16} height={36} rx={5} fill={color} stroke="#111" strokeWidth={0.7} />
    <rect x={-6} y={-10} width={12} height={16} rx={2} fill="#b0bec5" />
    <rect x={-5} y={-6} width={10} height={8} rx={1.5} fill="#e0e0e0" />
    <rect x={-8.5} y={-15} width={3} height={8} rx={1} fill="#444" />
    <rect x={5.5} y={-15} width={3} height={8} rx={1} fill="#444" />
    <rect x={-8.5} y={7} width={3} height={8} rx={1} fill="#444" />
    <rect x={5.5} y={7} width={3} height={8} rx={1} fill="#444" />
  </g>
);

const AnimatedGridAndCircuit = () => {
  // Build grid lines
  const gridLines = [];
  for (let x = 0; x <= WIDTH; x += GRID_SIZE) {
    gridLines.push(
      <line
        key={`v-${x}`}
        x1={x}
        y1={0}
        x2={x}
        y2={HEIGHT}
        stroke="#e0e0e0"
        strokeWidth={1}
      />
    );
  }
  for (let y = 0; y <= HEIGHT; y += GRID_SIZE) {
    gridLines.push(
      <line
        key={`h-${y}`}
        x1={0}
        y1={y}
        x2={WIDTH}
        y2={y}
        stroke="#e0e0e0"
        strokeWidth={1}
      />
    );
  }
  // Add some diagonal grid lines
  for (let d = -HEIGHT; d < WIDTH; d += GRID_SIZE * 2) {
    gridLines.push(
      <line
        key={`diag1-${d}`}
        x1={Math.max(0, d)}
        y1={Math.max(0, -d)}
        x2={Math.min(WIDTH, WIDTH + d)}
        y2={Math.min(HEIGHT, HEIGHT - d)}
        stroke="#f0f0f0"
        strokeWidth={0.7}
      />
    );
    gridLines.push(
      <line
        key={`diag2-${d}`}
        x1={Math.max(0, WIDTH - d)}
        y1={Math.max(0, -d)}
        x2={Math.max(0, -d)}
        y2={Math.min(HEIGHT, HEIGHT + d)}
        stroke="#f0f0f0"
        strokeWidth={0.7}
      />
    );
  }

  // Circuit lines
  const circuitLines = CIRCUIT_LINES.map(([x1, y1, x2, y2], i) => (
    <line
      key={`circuit-${i}`}
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke="#222"
      strokeWidth={2}
      opacity={0.13 + (i % 2) * 0.09}
      className={`circuit-line circuit-line-${i}`}
    />
  ));

  // Circuit nodes
  const circuitNodes = CIRCUIT_NODES.map(([cx, cy], i) => (
    <circle
      key={`node-${i}`}
      cx={cx}
      cy={cy}
      r={PULSE_NODES.includes(i) ? 7 : 4}
      fill="#222"
      opacity={PULSE_NODES.includes(i) ? 0.13 : 0.09}
      className={PULSE_NODES.includes(i) ? `circuit-node pulse-node pulse-node-${i}` : "circuit-node"}
    />
  ));

  // Animated cars gliding along two circuit lines
  // We'll animate along the first and third circuit lines
  const car1Path = [
    { x: 80, y: 60 },
    { x: 300, y: 60 },
    { x: 520, y: 60 },
  ];
  const car2Path = [
    { x: 200, y: 200 },
    { x: 300, y: 200 },
    { x: 400, y: 200 },
  ];
  // Helper to interpolate car position
  function getCarPos(path, t) {
    // t: 0 to 1
    const seg = Math.floor(t * (path.length - 1));
    const segT = (t * (path.length - 1)) % 1;
    const p1 = path[seg];
    const p2 = path[seg + 1] || path[seg];
    return {
      x: p1.x + (p2.x - p1.x) * segT,
      y: p1.y + (p2.y - p1.y) * segT,
      rotate: Math.atan2(p2.y - p1.y, p2.x - p1.x) * (180 / Math.PI),
    };
  }

  // VIP badge (star in a circle, pulsing)
  const VIPBadge = (
    <g className="vip-badge">
      <circle cx={300} cy={80} r={18} fill="#fff" opacity={0.9} filter="url(#glow)" />
      <polygon points="300,70 304,85 290,77 310,77 296,85" fill="#222" opacity={0.8} />
    </g>
  );

  // Spotlight sweep (radial gradient mask, animated horizontally)
  const maskId = "fadeMask";
  const sweepId = "sweepMask";

  // CSS keyframes for advanced animation
  const AdvancedKeyframes = () => (
    <style>{`
      /* Node pulse */
      ${PULSE_NODES.map(
        (idx, i) => `
        .pulse-node-${idx} {
          animation: pulseNode${i} 2.8s ${i * 0.5}s infinite cubic-bezier(.7,.2,.3,1);
        }
        @keyframes pulseNode${i} {
          0% { opacity: 0.13; r: 7; }
          50% { opacity: 0.32; r: 11; }
          100% { opacity: 0.13; r: 7; }
        }
      `).join('')}
      /* Circuit line dash */
      .circuit-line-0, .circuit-line-2, .circuit-line-4 {
        stroke-dasharray: 60 300;
        stroke-dashoffset: 0;
        animation: dashLine 7s linear infinite alternate;
      }
      @keyframes dashLine {
        0% { stroke-dashoffset: 0; }
        100% { stroke-dashoffset: 120; }
      }
      /* Car 1 animation */
      .car-1 {
        animation: car1move 7s linear infinite alternate;
      }
      @keyframes car1move {
        0% { transform: translate(80px,60px) scale(1) rotate(0deg); }
        50% { transform: translate(300px,60px) scale(1) rotate(0deg); }
        100% { transform: translate(520px,60px) scale(1) rotate(0deg); }
      }
      /* Car 2 animation */
      .car-2 {
        animation: car2move 8s linear infinite alternate;
      }
      @keyframes car2move {
        0% { transform: translate(200px,200px) scale(1) rotate(0deg); }
        50% { transform: translate(300px,200px) scale(1) rotate(0deg); }
        100% { transform: translate(400px,200px) scale(1) rotate(0deg); }
      }
      /* VIP badge pulse */
      .vip-badge circle {
        animation: badgePulse 2.5s infinite cubic-bezier(.7,.2,.3,1);
      }
      @keyframes badgePulse {
        0% { opacity: 0.7; r: 18; }
        50% { opacity: 1; r: 22; }
        100% { opacity: 0.7; r: 18; }
      }
      /* Spotlight sweep */
      .sweep {
        animation: sweepMove 12s linear infinite;
      }
      @keyframes sweepMove {
        0% { transform: translateX(-200px); }
        100% { transform: translateX(800px); }
      }
    `}</style>
  );

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
      aria-hidden
    >
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        width="100%"
        height="100%"
        style={{ display: "block", width: "100vw", height: "100vh", minHeight: 400 }}
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id={maskId} cx="50%" cy="50%" r="0.98">
            <stop offset="70%" stopColor="#fff" stopOpacity={1} />
            <stop offset="100%" stopColor="#fff" stopOpacity={0} />
          </radialGradient>
          <mask id="mask1">
            <rect x="0" y="0" width={WIDTH} height={HEIGHT} fill={`url(#${maskId})`} />
          </mask>
          {/* Glow for VIP badge */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* Spotlight sweep mask */}
          <radialGradient id={sweepId} cx="50%" cy="50%" r="0.5">
            <stop offset="0%" stopColor="#fff" stopOpacity={0.18} />
            <stop offset="100%" stopColor="#fff" stopOpacity={0} />
          </radialGradient>
        </defs>
        {/* White background */}
        <rect x="0" y="0" width={WIDTH} height={HEIGHT} fill="#fff" />
        <g mask="url(#mask1)">
          {/* Geometric grid */}
          {gridLines}
          {/* Circuit/tech lines */}
          {circuitLines}
          {/* Circuit nodes */}
          {circuitNodes}
          {/* Animated cars */}
          <CarSVG x={80} y={60} className="car-1" color="#222" />
          <CarSVG x={200} y={200} className="car-2" color="#888" />
          {/* VIP badge */}
          {VIPBadge}
          {/* Spotlight sweep */}
          <g className="sweep">
            <ellipse cx={0} cy={HEIGHT / 2} rx={120} ry={HEIGHT / 2.2} fill={`url(#${sweepId})`} />
          </g>
        </g>
      </svg>
      <AdvancedKeyframes />
    </div>
  );
};

export default AnimatedGridAndCircuit; 