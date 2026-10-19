// ============================================================
// Exercise Animations - Precise anatomical stick figures
// Uses proper joint segments: head, torso, upper arm, forearm,
// upper leg (thigh), lower leg (shin), with correct angles
// ============================================================

const EXERCISE_ANIMATIONS = {

  // ===================== CHEST =====================

  "ex_001": /* Barbell Bench Press */ `
    <svg viewBox="0 0 240 140" xmlns="http://www.w3.org/2000/svg">
      <style>
        .bp{animation:bp 2s ease-in-out infinite}
        @keyframes bp{
          0%,100%{transform:translate(0,-24px)}
          50%{transform:translate(0,0)}
        }
      </style>
      <!-- Bench: legs + pad -->
      <rect x="40" y="90" width="4" height="30" rx="2" fill="#444"/>
      <rect x="176" y="90" width="4" height="30" rx="2" fill="#444"/>
      <rect x="35" y="82" width="150" height="10" rx="5" fill="#555"/>
      <!-- Rack uprights -->
      <rect x="50" y="30" width="5" height="55" rx="2" fill="#666"/>
      <rect x="165" y="30" width="5" height="55" rx="2" fill="#666"/>
      <!-- Person lying on bench - side view -->
      <!-- Head (left side) -->
      <circle cx="60" cy="72" r="9" fill="#ddd" stroke="#bbb" stroke-width="1"/>
      <!-- Torso - flat on bench -->
      <line x1="69" y1="74" x2="130" y2="74" stroke="#ccc" stroke-width="4" stroke-linecap="round"/>
      <!-- Hips -->
      <circle cx="130" cy="74" r="3" fill="#bbb"/>
      <!-- Upper leg - angled down from hip -->
      <line x1="130" y1="74" x2="155" y2="95" stroke="#ccc" stroke-width="3.5" stroke-linecap="round"/>
      <!-- Knee joint -->
      <circle cx="155" cy="95" r="2.5" fill="#bbb"/>
      <!-- Lower leg - goes down to floor, knee bent ~90° -->
      <line x1="155" y1="95" x2="155" y2="118" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
      <!-- Foot -->
      <line x1="155" y1="118" x2="165" y2="118" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
      <!-- Second leg -->
      <line x1="130" y1="74" x2="148" y2="95" stroke="#bbb" stroke-width="3" stroke-linecap="round" opacity="0.5"/>
      <line x1="148" y1="95" x2="148" y2="118" stroke="#bbb" stroke-width="2.5" stroke-linecap="round" opacity="0.5"/>
      <line x1="148" y1="118" x2="158" y2="118" stroke="#bbb" stroke-width="2.5" stroke-linecap="round" opacity="0.5"/>
      <!-- Arms + barbell (animated) -->
      <g class="bp">
        <!-- Shoulder joints -->
        <!-- Upper arms from shoulders going up -->
        <line x1="88" y1="74" x2="88" y2="52" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
        <line x1="112" y1="74" x2="112" y2="52" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
        <!-- Elbow joints -->
        <circle cx="88" cy="52" r="2" fill="#bbb"/>
        <circle cx="112" cy="52" r="2" fill="#bbb"/>
        <!-- Forearms from elbows up to bar -->
        <line x1="88" y1="52" x2="88" y2="42" stroke="#ccc" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="112" y1="52" x2="112" y2="42" stroke="#ccc" stroke-width="2.5" stroke-linecap="round"/>
        <!-- Barbell -->
        <rect x="30" y="39" width="160" height="5" rx="2.5" fill="#4361ee"/>
        <!-- Weight plates -->
        <rect x="20" y="33" width="14" height="17" rx="3" fill="#4361ee" opacity="0.7"/>
        <rect x="186" y="33" width="14" height="17" rx="3" fill="#4361ee" opacity="0.7"/>
      </g>
    </svg>`,

  "ex_002": /* Incline Dumbbell Flyes */ `
    <svg viewBox="0 0 240 140" xmlns="http://www.w3.org/2000/svg">
      <style>
        .fly-l{animation:flyL 2.2s ease-in-out infinite;transform-origin:105px 52px}
        .fly-r{animation:flyR 2.2s ease-in-out infinite;transform-origin:105px 52px}
        @keyframes flyL{0%,100%{transform:rotate(0deg)}50%{transform:rotate(-40deg)}}
        @keyframes flyR{0%,100%{transform:rotate(0deg)}50%{transform:rotate(40deg)}}
      </style>
      <!-- Incline bench ~40° -->
      <polygon points="60,95 170,95 170,88 120,40 60,40" fill="#555" opacity="0.6"/>
      <line x1="62" y1="40" x2="62" y2="95" stroke="#555" stroke-width="4" stroke-linecap="round"/>
      <line x1="168" y1="88" x2="168" y2="120" stroke="#444" stroke-width="4"/>
      <line x1="62" y1="95" x2="62" y2="120" stroke="#444" stroke-width="4"/>
      <!-- Person on incline - back against pad -->
      <circle cx="82" cy="35" r="9" fill="#ddd" stroke="#bbb" stroke-width="1"/>
      <!-- Torso along incline -->
      <line x1="86" y1="42" x2="120" y2="80" stroke="#ccc" stroke-width="4" stroke-linecap="round"/>
      <!-- Hips -->
      <circle cx="120" cy="80" r="3" fill="#bbb"/>
      <!-- Upper legs -->
      <line x1="120" y1="80" x2="155" y2="92" stroke="#ccc" stroke-width="3.5" stroke-linecap="round"/>
      <circle cx="155" cy="92" r="2.5" fill="#bbb"/>
      <!-- Lower legs -->
      <line x1="155" y1="92" x2="160" y2="118" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
      <line x1="160" y1="118" x2="170" y2="118" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
      <!-- Left arm + dumbbell -->
      <g class="fly-l">
        <!-- Upper arm out to left -->
        <line x1="100" y1="55" x2="72" y2="40" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
        <circle cx="72" cy="40" r="2" fill="#bbb"/>
        <!-- Forearm slightly bent inward -->
        <line x1="72" y1="40" x2="65" y2="30" stroke="#ccc" stroke-width="2.5" stroke-linecap="round"/>
        <!-- Dumbbell -->
        <rect x="58" y="24" width="15" height="8" rx="3" fill="#4361ee"/>
      </g>
      <!-- Right arm + dumbbell -->
      <g class="fly-r">
        <line x1="100" y1="55" x2="130" y2="40" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
        <circle cx="130" cy="40" r="2" fill="#bbb"/>
        <line x1="130" y1="40" x2="137" y2="30" stroke="#ccc" stroke-width="2.5" stroke-linecap="round"/>
        <rect x="130" y="24" width="15" height="8" rx="3" fill="#4361ee"/>
      </g>
    </svg>`,

  "ex_003": /* Close-Grip Bench Press */ `
    <svg viewBox="0 0 240 140" xmlns="http://www.w3.org/2000/svg">
      <style>
        .cg{animation:cg 2s ease-in-out infinite}
        @keyframes cg{0%,100%{transform:translateY(-22px)}50%{transform:translateY(0)}}
      </style>
      <rect x="40" y="90" width="4" height="30" rx="2" fill="#444"/>
      <rect x="176" y="90" width="4" height="30" rx="2" fill="#444"/>
      <rect x="35" y="82" width="150" height="10" rx="5" fill="#555"/>
      <rect x="50" y="30" width="5" height="55" rx="2" fill="#666"/>
      <rect x="165" y="30" width="5" height="55" rx="2" fill="#666"/>
      <circle cx="60" cy="72" r="9" fill="#ddd" stroke="#bbb" stroke-width="1"/>
      <line x1="69" y1="74" x2="130" y2="74" stroke="#ccc" stroke-width="4" stroke-linecap="round"/>
      <circle cx="130" cy="74" r="3" fill="#bbb"/>
      <line x1="130" y1="74" x2="155" y2="95" stroke="#ccc" stroke-width="3.5" stroke-linecap="round"/>
      <circle cx="155" cy="95" r="2.5" fill="#bbb"/>
      <line x1="155" y1="95" x2="155" y2="118" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
      <line x1="155" y1="118" x2="165" y2="118" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
      <!-- Close grip arms + bar -->
      <g class="cg">
        <!-- Upper arms - elbows closer to body -->
        <line x1="95" y1="74" x2="95" y2="54" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
        <line x1="105" y1="74" x2="105" y2="54" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
        <circle cx="95" cy="54" r="2" fill="#bbb"/>
        <circle cx="105" cy="54" r="2" fill="#bbb"/>
        <!-- Forearms -->
        <line x1="95" y1="54" x2="95" y2="44" stroke="#ccc" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="105" y1="54" x2="105" y2="44" stroke="#ccc" stroke-width="2.5" stroke-linecap="round"/>
        <!-- Barbell - hands close together (marked) -->
        <rect x="30" y="41" width="160" height="5" rx="2.5" fill="#4361ee"/>
        <rect x="20" y="35" width="14" height="17" rx="3" fill="#4361ee" opacity="0.7"/>
        <rect x="186" y="35" width="14" height="17" rx="3" fill="#4361ee" opacity="0.7"/>
        <!-- Hand markers -->
        <circle cx="95" cy="43" r="3" fill="#fff" opacity="0.4"/>
        <circle cx="105" cy="43" r="3" fill="#fff" opacity="0.4"/>
      </g>
    </svg>`,

  // ===================== TRICEPS =====================

  "ex_004": /* Dips on Parallel Bars */ `
    <svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
      <style>
        .dip{animation:dip 2s ease-in-out infinite}
        @keyframes dip{
          0%,100%{transform:translateY(0)}
          50%{transform:translateY(22px)}
        }
      </style>
      <!-- Parallel bars -->
      <rect x="55" y="50" width="6" height="90" rx="3" fill="#666"/>
      <rect x="179" y="50" width="6" height="90" rx="3" fill="#666"/>
      <!-- Horizontal bar tops -->
      <rect x="40" y="48" width="36" height="6" rx="3" fill="#777"/>
      <rect x="164" y="48" width="36" height="6" rx="3" fill="#777"/>
      <g class="dip">
        <!-- Head -->
        <circle cx="120" cy="18" r="9" fill="#ddd" stroke="#bbb" stroke-width="1"/>
        <!-- Torso - slight forward lean -->
        <line x1="120" y1="27" x2="118" y2="68" stroke="#ccc" stroke-width="4" stroke-linecap="round"/>
        <!-- Shoulder joints -->
        <circle cx="112" cy="35" r="2.5" fill="#bbb"/>
        <circle cx="128" cy="35" r="2.5" fill="#bbb"/>
        <!-- Upper arms - out to bars -->
        <line x1="112" y1="35" x2="64" y2="48" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
        <line x1="128" y1="35" x2="176" y2="48" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
        <!-- Elbow joints -->
        <circle cx="64" cy="48" r="2.5" fill="#bbb"/>
        <circle cx="176" cy="48" r="2.5" fill="#bbb"/>
        <!-- Forearms - gripping bars (vertical) -->
        <line x1="64" y1="48" x2="58" y2="50" stroke="#ccc" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="176" y1="48" x2="182" y2="50" stroke="#ccc" stroke-width="2.5" stroke-linecap="round"/>
        <!-- Hips -->
        <circle cx="118" cy="68" r="3" fill="#bbb"/>
        <!-- Upper legs -->
        <line x1="118" y1="68" x2="112" y2="98" stroke="#ccc" stroke-width="3.5" stroke-linecap="round"/>
        <circle cx="112" cy="98" r="2.5" fill="#bbb"/>
        <!-- Lower legs - slightly bent back -->
        <line x1="112" y1="98" x2="108" y2="125" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
        <!-- Feet -->
        <line x1="108" y1="125" x2="100" y2="128" stroke="#ccc" stroke-width="2.5" stroke-linecap="round"/>
      </g>
    </svg>`,

  "ex_005": /* Incline EZ-Bar Skull Crushers */ `
    <svg viewBox="0 0 240 140" xmlns="http://www.w3.org/2000/svg">
      <style>
        .sc{animation:sc 2s ease-in-out infinite;transform-origin:100px 52px}
        @keyframes sc{0%,100%{transform:rotate(0deg)}50%{transform:rotate(55deg)}}
      </style>
      <!-- Incline bench -->
      <polygon points="50,95 170,95 170,88 120,42 50,42" fill="#555" opacity="0.5"/>
      <line x1="52" y1="42" x2="52" y2="95" stroke="#555" stroke-width="4"/>
      <line x1="168" y1="88" x2="168" y2="118" stroke="#444" stroke-width="4"/>
      <line x1="52" y1="95" x2="52" y2="118" stroke="#444" stroke-width="4"/>
      <!-- Person on incline -->
      <circle cx="72" cy="36" r="9" fill="#ddd" stroke="#bbb" stroke-width="1"/>
      <line x1="76" y1="44" x2="115" y2="82" stroke="#ccc" stroke-width="4" stroke-linecap="round"/>
      <circle cx="115" cy="82" r="3" fill="#bbb"/>
      <line x1="115" y1="82" x2="148" y2="92" stroke="#ccc" stroke-width="3.5" stroke-linecap="round"/>
      <circle cx="148" cy="92" r="2.5" fill="#bbb"/>
      <line x1="148" y1="92" x2="158" y2="116" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
      <!-- Upper arms - vertical from shoulders -->
      <line x1="90" y1="56" x2="100" y2="35" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
      <circle cx="100" cy="35" r="2" fill="#bbb"/>
      <!-- Forearms with EZ bar - pivoting at elbow -->
      <g class="sc">
        <line x1="100" y1="35" x2="100" y2="18" stroke="#ccc" stroke-width="2.5" stroke-linecap="round"/>
        <!-- EZ bar (wavy shape) -->
        <path d="M82,16 Q88,12 94,16 Q100,20 106,16 Q112,12 118,16" stroke="#4361ee" stroke-width="4" fill="none" stroke-linecap="round"/>
      </g>
    </svg>`,

  "ex_006": /* Cable Pushdowns */ `
    <svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
      <style>
        .pd{animation:pd 1.8s ease-in-out infinite;transform-origin:115px 62px}
        @keyframes pd{0%,100%{transform:rotate(0deg)}50%{transform:rotate(50deg)}}
      </style>
      <!-- Cable machine -->
      <rect x="180" y="5" width="10" height="140" rx="3" fill="#555"/>
      <rect x="165" y="5" width="40" height="12" rx="4" fill="#666"/>
      <!-- Pulley -->
      <circle cx="185" cy="17" r="5" fill="#777"/>
      <!-- Cable -->
      <line x1="185" y1="22" x2="130" y2="55" stroke="#888" stroke-width="1.5" stroke-dasharray="3,2"/>
      <!-- Person standing - facing machine -->
      <circle cx="115" cy="22" r="9" fill="#ddd" stroke="#bbb" stroke-width="1"/>
      <line x1="115" y1="31" x2="115" y2="75" stroke="#ccc" stroke-width="4" stroke-linecap="round"/>
      <circle cx="115" cy="75" r="3" fill="#bbb"/>
      <!-- Legs -->
      <line x1="115" y1="75" x2="105" y2="110" stroke="#ccc" stroke-width="3.5" stroke-linecap="round"/>
      <circle cx="105" cy="110" r="2.5" fill="#bbb"/>
      <line x1="105" y1="110" x2="108" y2="135" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
      <line x1="108" y1="135" x2="118" y2="137" stroke="#ccc" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Back leg -->
      <line x1="115" y1="75" x2="125" y2="110" stroke="#bbb" stroke-width="3" stroke-linecap="round" opacity="0.5"/>
      <line x1="125" y1="110" x2="122" y2="135" stroke="#bbb" stroke-width="2.5" stroke-linecap="round" opacity="0.5"/>
      <!-- Upper arms pinned to sides -->
      <line x1="115" y1="40" x2="115" y2="62" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
      <circle cx="115" cy="62" r="2.5" fill="#bbb"/>
      <!-- Forearms pushing down (animated) -->
      <g class="pd">
        <line x1="115" y1="62" x2="130" y2="62" stroke="#ccc" stroke-width="2.5" stroke-linecap="round"/>
        <!-- V-bar attachment -->
        <path d="M125,58 L133,62 L125,66" stroke="#4361ee" stroke-width="3" fill="none" stroke-linecap="round"/>
      </g>
    </svg>`,

  "ex_007": /* Seated Dumbbell French Press */ `
    <svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
      <style>
        .fp{animation:fp 2s ease-in-out infinite;transform-origin:120px 22px}
        @keyframes fp{0%,100%{transform:rotate(0deg)}50%{transform:rotate(-65deg)}}
      </style>
      <!-- Bench seat -->
      <rect x="80" y="92" width="80" height="8" rx="4" fill="#555"/>
      <rect x="85" y="100" width="4" height="30" rx="2" fill="#444"/>
      <rect x="151" y="100" width="4" height="30" rx="2" fill="#444"/>
      <!-- Back support -->
      <rect x="78" y="40" width="8" height="55" rx="4" fill="#555"/>
      <!-- Person seated -->
      <circle cx="120" cy="32" r="9" fill="#ddd" stroke="#bbb" stroke-width="1"/>
      <!-- Torso upright, back against pad -->
      <line x1="120" y1="41" x2="120" y2="85" stroke="#ccc" stroke-width="4" stroke-linecap="round"/>
      <circle cx="120" cy="85" r="3" fill="#bbb"/>
      <!-- Upper legs on seat -->
      <line x1="120" y1="85" x2="155" y2="92" stroke="#ccc" stroke-width="3.5" stroke-linecap="round"/>
      <circle cx="155" cy="92" r="2.5" fill="#bbb"/>
      <!-- Lower legs down -->
      <line x1="155" y1="92" x2="158" y2="125" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
      <line x1="158" y1="125" x2="168" y2="127" stroke="#ccc" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Upper arms - vertical along ears -->
      <line x1="115" y1="45" x2="115" y2="22" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
      <line x1="125" y1="45" x2="125" y2="22" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
      <circle cx="115" cy="22" r="2" fill="#bbb"/>
      <circle cx="125" cy="22" r="2" fill="#bbb"/>
      <!-- Forearms behind head with dumbbell -->
      <g class="fp">
        <line x1="120" y1="22" x2="120" y2="8" stroke="#ccc" stroke-width="2.5" stroke-linecap="round"/>
        <!-- Dumbbell -->
        <rect x="110" y="3" width="20" height="8" rx="3" fill="#4361ee"/>
        <rect x="107" y="5" width="5" height="4" rx="1" fill="#4361ee" opacity="0.7"/>
        <rect x="128" y="5" width="5" height="4" rx="1" fill="#4361ee" opacity="0.7"/>
      </g>
    </svg>`,

  // ===================== CALVES =====================

  "ex_008": /* Standing Calf Raises */ `
    <svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
      <style>
        .cr{animation:cr 1.4s ease-in-out infinite}
        @keyframes cr{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
      </style>
      <!-- Platform/step -->
      <rect x="80" y="128" width="80" height="10" rx="3" fill="#555"/>
      <!-- Machine pad on shoulders -->
      <rect x="90" y="10" width="60" height="6" rx="3" fill="#666"/>
      <rect x="88" y="8" width="4" height="135" rx="2" fill="#555"/>
      <rect x="148" y="8" width="4" height="135" rx="2" fill="#555"/>
      <g class="cr">
        <circle cx="120" cy="22" r="9" fill="#ddd" stroke="#bbb" stroke-width="1"/>
        <!-- Shoulder pad contact -->
        <line x1="120" y1="31" x2="120" y2="78" stroke="#ccc" stroke-width="4" stroke-linecap="round"/>
        <!-- Arms at sides -->
        <line x1="115" y1="40" x2="100" y2="55" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
        <line x1="125" y1="40" x2="140" y2="55" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
        <circle cx="120" cy="78" r="3" fill="#bbb"/>
        <!-- Legs straight -->
        <line x1="120" y1="78" x2="114" y2="112" stroke="#ccc" stroke-width="3.5" stroke-linecap="round"/>
        <circle cx="114" cy="112" r="2.5" fill="#bbb"/>
        <line x1="114" y1="112" x2="112" y2="128" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
        <!-- Balls of feet on edge -->
        <line x1="112" y1="128" x2="105" y2="130" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
        <!-- Back leg -->
        <line x1="120" y1="78" x2="126" y2="112" stroke="#bbb" stroke-width="3" stroke-linecap="round" opacity="0.5"/>
        <line x1="126" y1="112" x2="128" y2="128" stroke="#bbb" stroke-width="2.5" stroke-linecap="round" opacity="0.5"/>
        <line x1="128" y1="128" x2="135" y2="130" stroke="#bbb" stroke-width="2.5" stroke-linecap="round" opacity="0.5"/>
      </g>
    </svg>`,

  "ex_009": /* 45-Degree Leg Press Calf Raises */ `
    <svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
      <style>
        .lpcr{animation:lpcr 1.4s ease-in-out infinite}
        @keyframes lpcr{0%,100%{transform:translate(0,0)}50%{transform:translate(5px,-5px)}}
      </style>
      <!-- Machine frame at 45° -->
      <line x1="130" y1="10" x2="200" y2="130" stroke="#555" stroke-width="6" stroke-linecap="round"/>
      <line x1="140" y1="10" x2="210" y2="130" stroke="#555" stroke-width="6" stroke-linecap="round"/>
      <!-- Seat/back pad -->
      <rect x="20" y="80" width="90" height="10" rx="5" fill="#555"/>
      <rect x="18" y="50" width="10" height="45" rx="4" fill="#555" transform="rotate(-10 23 72)"/>
      <!-- Person seated -->
      <circle cx="50" cy="58" r="9" fill="#ddd" stroke="#bbb" stroke-width="1"/>
      <line x1="55" y1="65" x2="75" y2="85" stroke="#ccc" stroke-width="4" stroke-linecap="round"/>
      <circle cx="75" cy="85" r="3" fill="#bbb"/>
      <!-- Legs extended along 45° track -->
      <line x1="75" y1="85" x2="130" y2="55" stroke="#ccc" stroke-width="3.5" stroke-linecap="round"/>
      <circle cx="130" cy="55" r="2.5" fill="#bbb"/>
      <line x1="130" y1="55" x2="155" y2="38" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
      <!-- Feet on platform - only balls of feet -->
      <g class="lpcr">
        <rect x="148" y="25" width="30" height="30" rx="4" fill="#4361ee" opacity="0.5" transform="rotate(45 163 40)"/>
        <!-- Foot contact points -->
        <circle cx="158" cy="36" r="3" fill="#ccc"/>
      </g>
    </svg>`,

  // ===================== LEGS =====================

  "ex_010": /* Wide-Stance Barbell Squats */ `
    <svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
      <style>
        .sq{animation:sq 2.2s ease-in-out infinite}
        @keyframes sq{0%,100%{transform:translateY(0)}50%{transform:translateY(30px)}}
      </style>
      <g class="sq">
        <!-- Head -->
        <circle cx="120" cy="15" r="9" fill="#ddd" stroke="#bbb" stroke-width="1"/>
        <!-- Barbell across upper back -->
        <rect x="60" y="26" width="120" height="5" rx="2.5" fill="#4361ee"/>
        <rect x="48" y="22" width="16" height="13" rx="3" fill="#4361ee" opacity="0.7"/>
        <rect x="176" y="22" width="16" height="13" rx="3" fill="#4361ee" opacity="0.7"/>
        <!-- Torso -->
        <line x1="120" y1="30" x2="120" y2="70" stroke="#ccc" stroke-width="4" stroke-linecap="round"/>
        <!-- Arms gripping bar -->
        <line x1="112" y1="34" x2="80" y2="28" stroke="#ccc" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="128" y1="34" x2="160" y2="28" stroke="#ccc" stroke-width="2.5" stroke-linecap="round"/>
        <!-- Hips -->
        <circle cx="120" cy="70" r="3" fill="#bbb"/>
        <!-- Left leg - wide stance -->
        <line x1="120" y1="70" x2="85" y2="100" stroke="#ccc" stroke-width="3.5" stroke-linecap="round"/>
        <circle cx="85" cy="100" r="2.5" fill="#bbb"/><!-- knee -->
        <line x1="85" y1="100" x2="78" y2="132" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
        <line x1="78" y1="132" x2="68" y2="134" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
        <!-- Right leg - wide stance -->
        <line x1="120" y1="70" x2="155" y2="100" stroke="#ccc" stroke-width="3.5" stroke-linecap="round"/>
        <circle cx="155" cy="100" r="2.5" fill="#bbb"/><!-- knee -->
        <line x1="155" y1="100" x2="162" y2="132" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
        <line x1="162" y1="132" x2="172" y2="134" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
      </g>
    </svg>`,

  "ex_011": /* 45-Degree Leg Press */ `
    <svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
      <style>
        .lp{animation:lp 2s ease-in-out infinite}
        @keyframes lp{0%,100%{transform:translate(0,0)}50%{transform:translate(12px,-12px)}}
      </style>
      <!-- Machine rails -->
      <line x1="120" y1="8" x2="200" y2="135" stroke="#555" stroke-width="5" stroke-linecap="round"/>
      <line x1="132" y1="8" x2="212" y2="135" stroke="#555" stroke-width="5" stroke-linecap="round"/>
      <!-- Seat -->
      <rect x="15" y="85" width="95" height="10" rx="5" fill="#555"/>
      <rect x="12" y="50" width="10" height="45" rx="4" fill="#555" transform="rotate(-15 17 72)"/>
      <!-- Person reclining -->
      <circle cx="42" cy="52" r="9" fill="#ddd" stroke="#bbb" stroke-width="1"/>
      <line x1="48" y1="59" x2="72" y2="88" stroke="#ccc" stroke-width="4" stroke-linecap="round"/>
      <circle cx="72" cy="88" r="3" fill="#bbb"/>
      <!-- Upper legs - from hip toward platform -->
      <line x1="72" y1="88" x2="118" y2="58" stroke="#ccc" stroke-width="3.5" stroke-linecap="round"/>
      <circle cx="118" cy="58" r="2.5" fill="#bbb"/><!-- knee bent -->
      <!-- Lower legs to platform -->
      <line x1="118" y1="58" x2="148" y2="40" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
      <!-- Platform (moves) -->
      <g class="lp">
        <rect x="140" y="22" width="35" height="40" rx="5" fill="#4361ee" opacity="0.5" transform="rotate(55 157 42)"/>
        <!-- Feet on platform -->
        <circle cx="150" cy="38" r="3" fill="#ccc"/>
        <circle cx="155" cy="45" r="3" fill="#ccc"/>
      </g>
    </svg>`,

  "ex_012": /* Lying Leg Curls */ `
    <svg viewBox="0 0 240 130" xmlns="http://www.w3.org/2000/svg">
      <style>
        .lc{animation:lc 1.8s ease-in-out infinite;transform-origin:160px 68px}
        @keyframes lc{0%,100%{transform:rotate(0deg)}50%{transform:rotate(-80deg)}}
      </style>
      <!-- Bench pad -->
      <rect x="20" y="65" width="170" height="10" rx="5" fill="#555"/>
      <rect x="25" y="75" width="4" height="30" rx="2" fill="#444"/>
      <rect x="181" y="75" width="4" height="30" rx="2" fill="#444"/>
      <!-- Machine arm pivot -->
      <circle cx="190" cy="75" r="4" fill="#666"/>
      <rect x="188" y="40" width="4" height="40" rx="2" fill="#555"/>
      <!-- Person face down -->
      <circle cx="45" cy="55" r="9" fill="#ddd" stroke="#bbb" stroke-width="1"/>
      <!-- Torso flat on bench -->
      <line x1="54" y1="58" x2="110" y2="62" stroke="#ccc" stroke-width="4" stroke-linecap="round"/>
      <!-- Arms hanging off sides or gripping -->
      <line x1="55" y1="62" x2="40" y2="78" stroke="#ccc" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="65" y1="62" x2="55" y2="78" stroke="#ccc" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Hips -->
      <circle cx="110" cy="62" r="3" fill="#bbb"/>
      <!-- Upper legs (thighs) flat on bench -->
      <line x1="110" y1="62" x2="160" y2="65" stroke="#ccc" stroke-width="3.5" stroke-linecap="round"/>
      <!-- Knee -->
      <circle cx="160" cy="65" r="2.5" fill="#bbb"/>
      <!-- Lower legs curling up (animated) -->
      <g class="lc">
        <line x1="160" y1="68" x2="185" y2="68" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
        <!-- Ankle roller pad -->
        <circle cx="185" cy="68" r="5" fill="#4361ee" opacity="0.6"/>
        <!-- Feet -->
        <line x1="185" y1="63" x2="185" y2="58" stroke="#ccc" stroke-width="2.5" stroke-linecap="round"/>
      </g>
    </svg>`,

  "ex_013": /* Stiff-Leg Deadlift */ `
    <svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
      <style>
        .dl{animation:dl 2.2s ease-in-out infinite;transform-origin:120px 75px}
        @keyframes dl{0%,100%{transform:rotate(0deg)}50%{transform:rotate(55deg)}}
      </style>
      <!-- Floor -->
      <line x1="20" y1="140" x2="220" y2="140" stroke="#444" stroke-width="3"/>
      <!-- Legs - nearly straight (slight knee bend) -->
      <line x1="115" y1="75" x2="108" y2="112" stroke="#ccc" stroke-width="3.5" stroke-linecap="round"/>
      <circle cx="108" cy="112" r="2.5" fill="#bbb"/>
      <line x1="108" y1="112" x2="108" y2="138" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
      <line x1="108" y1="138" x2="118" y2="140" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
      <!-- Back leg -->
      <line x1="125" y1="75" x2="130" y2="112" stroke="#bbb" stroke-width="3" stroke-linecap="round" opacity="0.5"/>
      <line x1="130" y1="112" x2="130" y2="138" stroke="#bbb" stroke-width="2.5" stroke-linecap="round" opacity="0.5"/>
      <line x1="130" y1="138" x2="140" y2="140" stroke="#bbb" stroke-width="2.5" stroke-linecap="round" opacity="0.5"/>
      <!-- Upper body - hinges at hip -->
      <g class="dl">
        <circle cx="120" cy="22" r="9" fill="#ddd" stroke="#bbb" stroke-width="1"/>
        <line x1="120" y1="31" x2="120" y2="75" stroke="#ccc" stroke-width="4" stroke-linecap="round"/>
        <!-- Arms hanging straight down holding bar -->
        <line x1="115" y1="50" x2="115" y2="82" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
        <line x1="125" y1="50" x2="125" y2="82" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
        <!-- Barbell -->
        <rect x="80" y="80" width="80" height="5" rx="2.5" fill="#4361ee"/>
        <rect x="68" y="76" width="16" height="13" rx="3" fill="#4361ee" opacity="0.7"/>
        <rect x="156" y="76" width="16" height="13" rx="3" fill="#4361ee" opacity="0.7"/>
      </g>
    </svg>`,

  // ===================== BICEPS =====================

  "ex_014": /* Incline Dumbbell Curls */ `
    <svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
      <style>
        .ic{animation:ic 1.8s ease-in-out infinite;transform-origin:108px 62px}
        @keyframes ic{0%,100%{transform:rotate(0deg)}50%{transform:rotate(-120deg)}}
      </style>
      <!-- Incline bench ~45° -->
      <polygon points="55,105 165,105 165,98 115,42 55,42" fill="#555" opacity="0.5"/>
      <line x1="57" y1="42" x2="57" y2="105" stroke="#555" stroke-width="4"/>
      <line x1="163" y1="98" x2="163" y2="130" stroke="#444" stroke-width="4"/>
      <line x1="57" y1="105" x2="57" y2="130" stroke="#444" stroke-width="4"/>
      <!-- Person on incline -->
      <circle cx="78" cy="36" r="9" fill="#ddd" stroke="#bbb" stroke-width="1"/>
      <line x1="82" y1="44" x2="118" y2="90" stroke="#ccc" stroke-width="4" stroke-linecap="round"/>
      <circle cx="118" cy="90" r="3" fill="#bbb"/>
      <line x1="118" y1="90" x2="150" y2="100" stroke="#ccc" stroke-width="3.5" stroke-linecap="round"/>
      <circle cx="150" cy="100" r="2.5" fill="#bbb"/>
      <line x1="150" y1="100" x2="158" y2="128" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
      <!-- Upper arm hanging straight down -->
      <line x1="95" y1="58" x2="108" y2="62" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
      <circle cx="108" cy="62" r="2" fill="#bbb"/>
      <!-- Forearm curling (animated) -->
      <g class="ic">
        <line x1="108" y1="62" x2="108" y2="92" stroke="#ccc" stroke-width="2.5" stroke-linecap="round"/>
        <rect x="100" y="90" width="16" height="8" rx="3" fill="#4361ee"/>
      </g>
    </svg>`,

  "ex_015": /* Barbell Preacher Curls */ `
    <svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
      <style>
        .pc{animation:pc 1.8s ease-in-out infinite;transform-origin:148px 72px}
        @keyframes pc{0%,100%{transform:rotate(0deg)}50%{transform:rotate(-90deg)}}
      </style>
      <!-- Preacher bench -->
      <rect x="90" y="110" width="80" height="8" rx="4" fill="#444"/>
      <rect x="95" y="118" width="4" height="20" rx="2" fill="#444"/>
      <rect x="161" y="118" width="4" height="20" rx="2" fill="#444"/>
      <!-- Angled pad -->
      <rect x="100" y="55" width="55" height="58" rx="8" fill="#555" transform="rotate(15 127 84)"/>
      <!-- Person seated behind -->
      <circle cx="75" cy="48" r="9" fill="#ddd" stroke="#bbb" stroke-width="1"/>
      <line x1="80" y1="56" x2="90" y2="95" stroke="#ccc" stroke-width="4" stroke-linecap="round"/>
      <!-- Upper arms resting on pad (angled) -->
      <line x1="90" y1="62" x2="148" y2="72" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
      <circle cx="148" cy="72" r="2.5" fill="#bbb"/><!-- elbow at bottom -->
      <!-- Forearm curling from elbow -->
      <g class="pc">
        <line x1="148" y1="72" x2="168" y2="95" stroke="#ccc" stroke-width="2.5" stroke-linecap="round"/>
        <!-- Barbell -->
        <rect x="150" y="93" width="40" height="5" rx="2.5" fill="#4361ee"/>
      </g>
    </svg>`,

  "ex_016": /* Standing Dumbbell Curls */ `
    <svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
      <style>
        .dcl{animation:dcL 2s ease-in-out infinite;transform-origin:92px 62px}
        .dcr{animation:dcR 2s ease-in-out infinite 1s;transform-origin:148px 62px}
        @keyframes dcL{0%,100%{transform:rotate(0deg)}50%{transform:rotate(-130deg)}}
        @keyframes dcR{0%,100%{transform:rotate(0deg)}50%{transform:rotate(130deg)}}
      </style>
      <circle cx="120" cy="15" r="9" fill="#ddd" stroke="#bbb" stroke-width="1"/>
      <line x1="120" y1="24" x2="120" y2="75" stroke="#ccc" stroke-width="4" stroke-linecap="round"/>
      <circle cx="120" cy="75" r="3" fill="#bbb"/>
      <!-- Left leg -->
      <line x1="120" y1="75" x2="108" y2="112" stroke="#ccc" stroke-width="3.5" stroke-linecap="round"/>
      <circle cx="108" cy="112" r="2.5" fill="#bbb"/>
      <line x1="108" y1="112" x2="106" y2="140" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
      <line x1="106" y1="140" x2="96" y2="142" stroke="#ccc" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Right leg -->
      <line x1="120" y1="75" x2="132" y2="112" stroke="#ccc" stroke-width="3.5" stroke-linecap="round"/>
      <circle cx="132" cy="112" r="2.5" fill="#bbb"/>
      <line x1="132" y1="112" x2="134" y2="140" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
      <line x1="134" y1="140" x2="144" y2="142" stroke="#ccc" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Left upper arm pinned to side -->
      <line x1="112" y1="38" x2="92" y2="62" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
      <circle cx="92" cy="62" r="2" fill="#bbb"/>
      <g class="dcl">
        <line x1="92" y1="62" x2="85" y2="90" stroke="#ccc" stroke-width="2.5" stroke-linecap="round"/>
        <rect x="78" y="87" width="14" height="9" rx="3" fill="#4361ee"/>
      </g>
      <!-- Right upper arm pinned to side -->
      <line x1="128" y1="38" x2="148" y2="62" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
      <circle cx="148" cy="62" r="2" fill="#bbb"/>
      <g class="dcr">
        <line x1="148" y1="62" x2="155" y2="90" stroke="#ccc" stroke-width="2.5" stroke-linecap="round"/>
        <rect x="148" y="87" width="14" height="9" rx="3" fill="#4361ee"/>
      </g>
    </svg>`,

  // ===================== ABS =====================

  "ex_017": /* Lying Leg Raises */ `
    <svg viewBox="0 0 240 130" xmlns="http://www.w3.org/2000/svg">
      <style>
        .lr{animation:lr 2s ease-in-out infinite;transform-origin:130px 82px}
        @keyframes lr{0%,100%{transform:rotate(0deg)}50%{transform:rotate(-80deg)}}
      </style>
      <!-- Floor/mat -->
      <rect x="15" y="88" width="210" height="6" rx="3" fill="#444"/>
      <!-- Person lying flat -->
      <circle cx="40" cy="76" r="9" fill="#ddd" stroke="#bbb" stroke-width="1"/>
      <!-- Arms alongside body or gripping behind head -->
      <line x1="45" y1="82" x2="32" y2="72" stroke="#ccc" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="45" y1="82" x2="30" y2="70" stroke="#ccc" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Torso flat on ground -->
      <line x1="49" y1="80" x2="130" y2="82" stroke="#ccc" stroke-width="4" stroke-linecap="round"/>
      <circle cx="130" cy="82" r="3" fill="#bbb"/>
      <!-- Legs raising (animated) -->
      <g class="lr">
        <!-- Upper legs -->
        <line x1="130" y1="82" x2="168" y2="84" stroke="#ccc" stroke-width="3.5" stroke-linecap="round"/>
        <circle cx="168" cy="84" r="2.5" fill="#bbb"/>
        <!-- Lower legs -->
        <line x1="168" y1="84" x2="200" y2="84" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
        <!-- Feet -->
        <line x1="200" y1="84" x2="205" y2="80" stroke="#ccc" stroke-width="2.5" stroke-linecap="round"/>
      </g>
    </svg>`,

  "ex_018": /* Floor Crunches */ `
    <svg viewBox="0 0 240 130" xmlns="http://www.w3.org/2000/svg">
      <style>
        .crn{animation:crn 1.8s ease-in-out infinite;transform-origin:110px 82px}
        @keyframes crn{0%,100%{transform:rotate(0deg)}50%{transform:rotate(-28deg)}}
      </style>
      <!-- Floor/mat -->
      <rect x="15" y="92" width="210" height="6" rx="3" fill="#444"/>
      <!-- Lower body fixed -->
      <circle cx="155" cy="82" r="3" fill="#bbb"/><!-- hips -->
      <!-- Upper legs - knees bent -->
      <line x1="155" y1="82" x2="180" y2="68" stroke="#ccc" stroke-width="3.5" stroke-linecap="round"/>
      <circle cx="180" cy="68" r="2.5" fill="#bbb"/><!-- knees up -->
      <!-- Lower legs - feet flat on floor -->
      <line x1="180" y1="68" x2="192" y2="90" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
      <line x1="192" y1="90" x2="200" y2="90" stroke="#ccc" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Upper body - crunching up -->
      <g class="crn">
        <!-- Torso -->
        <line x1="110" y1="82" x2="155" y2="84" stroke="#ccc" stroke-width="4" stroke-linecap="round"/>
        <!-- Head -->
        <circle cx="60" cy="76" r="9" fill="#ddd" stroke="#bbb" stroke-width="1"/>
        <line x1="69" y1="79" x2="110" y2="82" stroke="#ccc" stroke-width="4" stroke-linecap="round"/>
        <!-- Arms - hands behind head -->
        <line x1="72" y1="72" x2="55" y2="65" stroke="#ccc" stroke-width="2.5" stroke-linecap="round"/>
        <circle cx="55" cy="65" r="2" fill="#bbb"/>
        <line x1="55" y1="65" x2="62" y2="72" stroke="#ccc" stroke-width="2.5" stroke-linecap="round"/>
      </g>
    </svg>`,

  // ===================== SHOULDERS =====================

  "ex_019": /* Seated Behind-Neck Press */ `
    <svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
      <style>
        .bnp{animation:bnp 2s ease-in-out infinite}
        @keyframes bnp{0%,100%{transform:translateY(0)}50%{transform:translateY(-25px)}}
      </style>
      <!-- Bench with back support -->
      <rect x="80" y="95" width="80" height="8" rx="4" fill="#555"/>
      <rect x="78" y="38" width="8" height="60" rx="4" fill="#555"/>
      <rect x="85" y="103" width="4" height="28" rx="2" fill="#444"/>
      <rect x="151" y="103" width="4" height="28" rx="2" fill="#444"/>
      <!-- Rack -->
      <rect x="60" y="15" width="5" height="85" rx="2" fill="#666"/>
      <rect x="175" y="15" width="5" height="85" rx="2" fill="#666"/>
      <!-- Person seated -->
      <circle cx="120" cy="32" r="9" fill="#ddd" stroke="#bbb" stroke-width="1"/>
      <line x1="120" y1="41" x2="120" y2="88" stroke="#ccc" stroke-width="4" stroke-linecap="round"/>
      <circle cx="120" cy="88" r="3" fill="#bbb"/>
      <line x1="120" y1="88" x2="152" y2="98" stroke="#ccc" stroke-width="3.5" stroke-linecap="round"/>
      <circle cx="152" cy="98" r="2.5" fill="#bbb"/>
      <line x1="152" y1="98" x2="158" y2="128" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
      <!-- Arms + barbell (behind neck) -->
      <g class="bnp">
        <!-- Upper arms out to sides -->
        <line x1="112" y1="48" x2="78" y2="55" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
        <line x1="128" y1="48" x2="162" y2="55" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
        <circle cx="78" cy="55" r="2" fill="#bbb"/>
        <circle cx="162" cy="55" r="2" fill="#bbb"/>
        <!-- Forearms up gripping bar -->
        <line x1="78" y1="55" x2="72" y2="38" stroke="#ccc" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="162" y1="55" x2="168" y2="38" stroke="#ccc" stroke-width="2.5" stroke-linecap="round"/>
        <!-- Barbell behind head -->
        <rect x="48" y="35" width="144" height="5" rx="2.5" fill="#4361ee"/>
        <rect x="38" y="31" width="14" height="13" rx="3" fill="#4361ee" opacity="0.7"/>
        <rect x="188" y="31" width="14" height="13" rx="3" fill="#4361ee" opacity="0.7"/>
      </g>
    </svg>`,

  "ex_020": /* Standing Lateral Raises */ `
    <svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
      <style>
        .latl{animation:latL 2s ease-in-out infinite;transform-origin:108px 45px}
        .latr{animation:latR 2s ease-in-out infinite;transform-origin:132px 45px}
        @keyframes latL{0%,100%{transform:rotate(0deg)}50%{transform:rotate(-75deg)}}
        @keyframes latR{0%,100%{transform:rotate(0deg)}50%{transform:rotate(75deg)}}
      </style>
      <circle cx="120" cy="18" r="9" fill="#ddd" stroke="#bbb" stroke-width="1"/>
      <line x1="120" y1="27" x2="120" y2="78" stroke="#ccc" stroke-width="4" stroke-linecap="round"/>
      <circle cx="120" cy="78" r="3" fill="#bbb"/>
      <line x1="120" y1="78" x2="106" y2="115" stroke="#ccc" stroke-width="3.5" stroke-linecap="round"/>
      <circle cx="106" cy="115" r="2.5" fill="#bbb"/>
      <line x1="106" y1="115" x2="104" y2="142" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
      <line x1="104" y1="142" x2="94" y2="144" stroke="#ccc" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="120" y1="78" x2="134" y2="115" stroke="#ccc" stroke-width="3.5" stroke-linecap="round"/>
      <circle cx="134" cy="115" r="2.5" fill="#bbb"/>
      <line x1="134" y1="115" x2="136" y2="142" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
      <line x1="136" y1="142" x2="146" y2="144" stroke="#ccc" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Left arm - slight elbow bend -->
      <g class="latl">
        <line x1="108" y1="45" x2="85" y2="70" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
        <circle cx="85" cy="70" r="2" fill="#bbb"/>
        <line x1="85" y1="70" x2="78" y2="88" stroke="#ccc" stroke-width="2.5" stroke-linecap="round"/>
        <rect x="72" y="85" width="12" height="9" rx="3" fill="#4361ee"/>
      </g>
      <!-- Right arm -->
      <g class="latr">
        <line x1="132" y1="45" x2="155" y2="70" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
        <circle cx="155" cy="70" r="2" fill="#bbb"/>
        <line x1="155" y1="70" x2="162" y2="88" stroke="#ccc" stroke-width="2.5" stroke-linecap="round"/>
        <rect x="156" y="85" width="12" height="9" rx="3" fill="#4361ee"/>
      </g>
    </svg>`,

  "ex_021": /* Seated Dumbbell Front Press */ `
    <svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
      <style>
        .sfp{animation:sfp 2s ease-in-out infinite}
        @keyframes sfp{0%,100%{transform:translateY(0)}50%{transform:translateY(-22px)}}
      </style>
      <rect x="80" y="95" width="80" height="8" rx="4" fill="#555"/>
      <rect x="78" y="40" width="8" height="58" rx="4" fill="#555"/>
      <rect x="85" y="103" width="4" height="28" rx="2" fill="#444"/>
      <rect x="151" y="103" width="4" height="28" rx="2" fill="#444"/>
      <circle cx="120" cy="32" r="9" fill="#ddd" stroke="#bbb" stroke-width="1"/>
      <line x1="120" y1="41" x2="120" y2="88" stroke="#ccc" stroke-width="4" stroke-linecap="round"/>
      <circle cx="120" cy="88" r="3" fill="#bbb"/>
      <line x1="120" y1="88" x2="152" y2="98" stroke="#ccc" stroke-width="3.5" stroke-linecap="round"/>
      <circle cx="152" cy="98" r="2.5" fill="#bbb"/>
      <line x1="152" y1="98" x2="158" y2="128" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
      <g class="sfp">
        <!-- Upper arms out to sides at shoulder height -->
        <line x1="112" y1="48" x2="82" y2="48" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
        <line x1="128" y1="48" x2="158" y2="48" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
        <circle cx="82" cy="48" r="2" fill="#bbb"/>
        <circle cx="158" cy="48" r="2" fill="#bbb"/>
        <!-- Forearms vertical - elbows at 90° -->
        <line x1="82" y1="48" x2="82" y2="26" stroke="#ccc" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="158" y1="48" x2="158" y2="26" stroke="#ccc" stroke-width="2.5" stroke-linecap="round"/>
        <!-- Dumbbells -->
        <rect x="72" y="20" width="20" height="9" rx="3" fill="#4361ee"/>
        <rect x="148" y="20" width="20" height="9" rx="3" fill="#4361ee"/>
      </g>
    </svg>`,

  // ===================== BACK =====================

  "ex_022": /* Wide-Grip Pull-Ups */ `
    <svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
      <style>
        .pu{animation:pu 2.2s ease-in-out infinite}
        @keyframes pu{0%,100%{transform:translateY(0)}50%{transform:translateY(-25px)}}
      </style>
      <!-- Pull-up bar structure -->
      <rect x="30" y="8" width="180" height="6" rx="3" fill="#666"/>
      <rect x="28" y="6" width="6" height="140" rx="3" fill="#555"/>
      <rect x="206" y="6" width="6" height="140" rx="3" fill="#555"/>
      <g class="pu">
        <circle cx="120" cy="38" r="9" fill="#ddd" stroke="#bbb" stroke-width="1"/>
        <!-- Arms - wide grip reaching up to bar -->
        <line x1="108" y1="40" x2="75" y2="18" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
        <circle cx="75" cy="18" r="2" fill="#bbb"/>
        <line x1="75" y1="18" x2="55" y2="12" stroke="#ccc" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="132" y1="40" x2="165" y2="18" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
        <circle cx="165" cy="18" r="2" fill="#bbb"/>
        <line x1="165" y1="18" x2="185" y2="12" stroke="#ccc" stroke-width="2.5" stroke-linecap="round"/>
        <!-- Hand grips on bar -->
        <circle cx="55" cy="12" r="3" fill="#4361ee" opacity="0.6"/>
        <circle cx="185" cy="12" r="3" fill="#4361ee" opacity="0.6"/>
        <!-- Torso -->
        <line x1="120" y1="47" x2="120" y2="90" stroke="#ccc" stroke-width="4" stroke-linecap="round"/>
        <circle cx="120" cy="90" r="3" fill="#bbb"/>
        <!-- Legs hanging -->
        <line x1="120" y1="90" x2="112" y2="120" stroke="#ccc" stroke-width="3.5" stroke-linecap="round"/>
        <circle cx="112" cy="120" r="2.5" fill="#bbb"/>
        <line x1="112" y1="120" x2="110" y2="140" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
        <line x1="120" y1="90" x2="128" y2="120" stroke="#bbb" stroke-width="3" stroke-linecap="round" opacity="0.5"/>
        <line x1="128" y1="120" x2="130" y2="140" stroke="#bbb" stroke-width="2.5" stroke-linecap="round" opacity="0.5"/>
      </g>
    </svg>`,

  "ex_023": /* Bent-Over Barbell Rows */ `
    <svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
      <style>
        .row{animation:row 1.8s ease-in-out infinite}
        @keyframes row{0%,100%{transform:translateY(0)}50%{transform:translateY(-22px)}}
      </style>
      <!-- Person bent over ~45° -->
      <circle cx="70" cy="28" r="9" fill="#ddd" stroke="#bbb" stroke-width="1"/>
      <!-- Torso angled forward -->
      <line x1="76" y1="35" x2="130" y2="62" stroke="#ccc" stroke-width="4" stroke-linecap="round"/>
      <circle cx="130" cy="62" r="3" fill="#bbb"/>
      <!-- Legs - slight knee bend -->
      <line x1="130" y1="62" x2="138" y2="100" stroke="#ccc" stroke-width="3.5" stroke-linecap="round"/>
      <circle cx="138" cy="100" r="2.5" fill="#bbb"/>
      <line x1="138" y1="100" x2="140" y2="135" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
      <line x1="140" y1="135" x2="150" y2="137" stroke="#ccc" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Back leg -->
      <line x1="130" y1="62" x2="122" y2="100" stroke="#bbb" stroke-width="3" stroke-linecap="round" opacity="0.5"/>
      <line x1="122" y1="100" x2="120" y2="135" stroke="#bbb" stroke-width="2.5" stroke-linecap="round" opacity="0.5"/>
      <!-- Arms + barbell -->
      <g class="row">
        <!-- Upper arms hanging from shoulders -->
        <line x1="90" y1="42" x2="95" y2="72" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
        <line x1="105" y1="50" x2="108" y2="72" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
        <circle cx="95" cy="72" r="2" fill="#bbb"/>
        <circle cx="108" cy="72" r="2" fill="#bbb"/>
        <!-- Forearms to bar -->
        <line x1="95" y1="72" x2="95" y2="88" stroke="#ccc" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="108" y1="72" x2="108" y2="88" stroke="#ccc" stroke-width="2.5" stroke-linecap="round"/>
        <!-- Barbell -->
        <rect x="65" y="86" width="75" height="5" rx="2.5" fill="#4361ee"/>
        <rect x="55" y="82" width="14" height="13" rx="3" fill="#4361ee" opacity="0.7"/>
        <rect x="136" y="82" width="14" height="13" rx="3" fill="#4361ee" opacity="0.7"/>
      </g>
    </svg>`,

  "ex_024": /* Single-Arm Dumbbell Rows */ `
    <svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
      <style>
        .sar{animation:sar 1.8s ease-in-out infinite}
        @keyframes sar{0%,100%{transform:translateY(0)}50%{transform:translateY(-24px)}}
      </style>
      <!-- Bench -->
      <rect x="40" y="78" width="120" height="8" rx="4" fill="#555"/>
      <rect x="45" y="86" width="4" height="30" rx="2" fill="#444"/>
      <rect x="151" y="86" width="4" height="30" rx="2" fill="#444"/>
      <!-- Person - one knee and hand on bench -->
      <circle cx="90" cy="40" r="9" fill="#ddd" stroke="#bbb" stroke-width="1"/>
      <!-- Torso parallel to bench -->
      <line x1="96" y1="47" x2="140" y2="68" stroke="#ccc" stroke-width="4" stroke-linecap="round"/>
      <!-- Support arm on bench -->
      <line x1="105" y1="52" x2="85" y2="62" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
      <circle cx="85" cy="62" r="2" fill="#bbb"/>
      <line x1="85" y1="62" x2="78" y2="76" stroke="#ccc" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Hips -->
      <circle cx="140" cy="68" r="3" fill="#bbb"/>
      <!-- Knee on bench -->
      <line x1="140" y1="68" x2="120" y2="76" stroke="#ccc" stroke-width="3.5" stroke-linecap="round"/>
      <circle cx="120" cy="76" r="2.5" fill="#bbb"/>
      <line x1="120" y1="76" x2="110" y2="76" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
      <!-- Standing leg -->
      <line x1="140" y1="68" x2="160" y2="100" stroke="#ccc" stroke-width="3.5" stroke-linecap="round"/>
      <circle cx="160" cy="100" r="2.5" fill="#bbb"/>
      <line x1="160" y1="100" x2="162" y2="132" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
      <line x1="162" y1="132" x2="172" y2="134" stroke="#ccc" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Rowing arm with dumbbell -->
      <g class="sar">
        <line x1="115" y1="56" x2="128" y2="75" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
        <circle cx="128" cy="75" r="2" fill="#bbb"/>
        <line x1="128" y1="75" x2="132" y2="92" stroke="#ccc" stroke-width="2.5" stroke-linecap="round"/>
        <rect x="124" y="90" width="16" height="9" rx="3" fill="#4361ee"/>
      </g>
    </svg>`,

  "ex_025": /* Behind-Neck Lat Pulldowns */ `
    <svg viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
      <style>
        .lpd{animation:lpd 2s ease-in-out infinite}
        @keyframes lpd{0%,100%{transform:translateY(0)}50%{transform:translateY(28px)}}
      </style>
      <!-- Machine -->
      <rect x="115" y="3" width="10" height="20" rx="3" fill="#555"/>
      <rect x="100" y="0" width="40" height="8" rx="4" fill="#666"/>
      <!-- Pulley -->
      <circle cx="120" cy="20" r="4" fill="#777"/>
      <!-- Seat -->
      <rect x="75" y="105" width="90" height="8" rx="4" fill="#555"/>
      <!-- Knee pad -->
      <rect x="80" y="95" width="80" height="6" rx="3" fill="#444"/>
      <!-- Person seated, facing away -->
      <circle cx="120" cy="48" r="9" fill="#ddd" stroke="#bbb" stroke-width="1"/>
      <line x1="120" y1="57" x2="120" y2="100" stroke="#ccc" stroke-width="4" stroke-linecap="round"/>
      <circle cx="120" cy="100" r="3" fill="#bbb"/>
      <!-- Thighs under pad -->
      <line x1="120" y1="100" x2="150" y2="108" stroke="#ccc" stroke-width="3.5" stroke-linecap="round"/>
      <circle cx="150" cy="108" r="2.5" fill="#bbb"/>
      <line x1="150" y1="108" x2="155" y2="132" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
      <!-- Bar + arms pulling down (animated) -->
      <g class="lpd">
        <!-- Cable -->
        <line x1="120" y1="24" x2="120" y2="30" stroke="#888" stroke-width="1.5"/>
        <!-- Wide bar -->
        <rect x="55" y="28" width="130" height="5" rx="2.5" fill="#4361ee"/>
        <!-- Arms - wide grip, pulling bar behind neck -->
        <line x1="108" y1="55" x2="72" y2="35" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
        <circle cx="72" cy="35" r="2" fill="#bbb"/>
        <line x1="72" y1="35" x2="65" y2="31" stroke="#ccc" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="132" y1="55" x2="168" y2="35" stroke="#ccc" stroke-width="3" stroke-linecap="round"/>
        <circle cx="168" cy="35" r="2" fill="#bbb"/>
        <line x1="168" y1="35" x2="175" y2="31" stroke="#ccc" stroke-width="2.5" stroke-linecap="round"/>
      </g>
    </svg>`
};

function getExerciseAnimation(exerciseId) {
  return EXERCISE_ANIMATIONS[exerciseId] || null;
}
