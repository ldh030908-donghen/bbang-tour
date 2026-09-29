// 오리지널 빵 캐릭터 일러스트 — 저작권 있는 애니메이션 캐릭터를 그대로 쓸 수 없어서
// 같은 "둥글둥글 빵 얼굴" 느낌만 가져와 직접 그렸다.

function Bun({
  transform,
  scale = 1,
  body,
  cheek = "#F4A0A8",
  ribbon,
}: {
  transform: string;
  scale?: number;
  body: string;
  cheek?: string;
  ribbon?: string;
}) {
  return (
    <g transform={transform}>
      <g transform={`scale(${scale})`}>
        {/* body */}
        <path
          d="M50 12 C 24 12 8 34 8 58 C 8 84 26 94 50 94 C 74 94 92 84 92 58 C 92 34 76 12 50 12 Z"
          fill={body}
          stroke="#5B3A29"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        {/* bread score marks */}
        <path d="M32 26 Q 38 15 44 26" fill="none" stroke="#5B3A29" strokeWidth="2" strokeLinecap="round" opacity="0.35" />
        <path d="M56 26 Q 62 15 68 26" fill="none" stroke="#5B3A29" strokeWidth="2" strokeLinecap="round" opacity="0.35" />
        {/* cheeks */}
        <ellipse cx="27" cy="60" rx="7.5" ry="5" fill={cheek} opacity="0.75" />
        <ellipse cx="73" cy="60" rx="7.5" ry="5" fill={cheek} opacity="0.75" />
        {/* eyes */}
        <circle cx="37" cy="54" r="4.2" fill="#5B3A29" />
        <circle cx="63" cy="54" r="4.2" fill="#5B3A29" />
        <circle cx="38.3" cy="52.5" r="1.3" fill="#fff" />
        <circle cx="64.3" cy="52.5" r="1.3" fill="#fff" />
        {/* smile */}
        <path d="M41 67 Q 50 74 59 67" fill="none" stroke="#5B3A29" strokeWidth="3" strokeLinecap="round" />
        {ribbon && (
          <path
            d="M42 14 L50 22 L58 14 L54 24 L62 22 L54 28 L60 34 L50 30 L40 34 L46 28 L38 22 L46 24 Z"
            fill={ribbon}
            stroke="#5B3A29"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        )}
      </g>
    </g>
  );
}

export default function BreadHero({
  kicker,
  title,
  subtitle,
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="hero">
      <svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMax slice" className="hero-scene">
        <defs>
          <linearGradient id="bbSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FDE8C8" />
            <stop offset="100%" stopColor="#FBD3D9" />
          </linearGradient>
        </defs>
        <rect width="400" height="260" fill="url(#bbSky)" />
        <circle cx="52" cy="46" r="7" fill="#fff" opacity="0.6" />
        <circle cx="352" cy="66" r="10" fill="#fff" opacity="0.5" />
        <circle cx="308" cy="34" r="4.5" fill="#fff" opacity="0.7" />
        <circle cx="150" cy="30" r="4" fill="#fff" opacity="0.55" />
        <rect y="222" width="400" height="38" fill="#F0D3A0" opacity="0.55" />
        <Bun transform="translate(78,142)" scale={1.05} body="#F3C969" ribbon="#B0432F" />
        <Bun transform="translate(196,128)" scale={1.35} body="#F4A9A0" cheek="#F7C5C0" />
        <Bun transform="translate(304,148)" scale={1.05} body="#E4B98A" />
      </svg>
      <div className="hero-band">
        {kicker && <div className="hero-kicker">{kicker}</div>}
        <div className="hero-title">{title}</div>
        {subtitle && <div className="hero-subtitle">{subtitle}</div>}
      </div>
    </div>
  );
}
