const rangeData = {
  sub: {
    title: "Sub Bass: 20-60Hz",
    text: "This is where the deep rumble and sub energy live. Too much can make the mix feel uncontrolled.",
    tips: ["Adds deep weight", "Can cause rumble", "Use high-pass filters when needed"]
  },
  bass: {
    title: "Bass: 60-250Hz",
    text: "This range gives your mix body, warmth, punch, and low-end power.",
    tips: ["60-100Hz adds weight", "100-250Hz adds warmth", "Too much can sound boomy"]
  },
  lowmids: {
    title: "Low Mids: 250-500Hz",
    text: "This area often causes mud and boxiness, especially in vocals, keys, guitars, and full mixes.",
    tips: ["Cut for clarity", "Watch vocals and instruments", "Too much makes mixes cloudy"]
  },
  mids: {
    title: "Mid Range: 500Hz-2kHz",
    text: "This is where a lot of tone, character, and vocal intelligibility live.",
    tips: ["Too much can sound honky", "Helps vocals speak", "Important for translation"]
  },
  uppermids: {
    title: "Upper Mids: 2kHz-5kHz",
    text: "This range adds presence, attack, edge, and forwardness.",
    tips: ["Boost for clarity", "Cut if harsh", "Important for vocals and drums"]
  },
  highs: {
    title: "Highs: 5kHz-20kHz",
    text: "This is where brightness, sibilance, air, and polish live.",
    tips: ["5-9kHz can be sibilant", "10kHz+ adds air", "Too much can sound sharp"]
  }
};

const instrumentData = {
  vocals: {
    title: "Vocals",
    tips: [
      "80Hz: High pass to remove rumble",
      "150-250Hz: Reduce mud",
      "250-500Hz: Reduce boxiness",
      "2-5kHz: Add presence",
      "5-8kHz: Add brightness",
      "10-16kHz: Add air"
    ]
  },
  rapVocals: {
    title: "Rap Vocals",
    tips: [
      "HPF around 80Hz",
      "Cut 250Hz if muddy",
      "Cut 500Hz if boxy",
      "Boost 3kHz for presence",
      "Shelf 12kHz for air",
      "De-ess around 6-8kHz"
    ]
  },
  kick: {
    title: "Kick Drum",
    tips: [
      "50-70Hz: Weight",
      "80-100Hz: Punch",
      "200-400Hz: Mud",
      "3-5kHz: Attack/click"
    ]
  },
  snare: {
    title: "Snare",
    tips: [
      "120-250Hz: Body",
      "400-800Hz: Boxiness",
      "2-5kHz: Crack",
      "8-12kHz: Snap/Air"
    ]
  },
  hihats: {
    title: "Hi-Hats",
    tips: [
      "200-500Hz: Body",
      "3-6kHz: Presence",
      "8-15kHz: Shine",
      "Cut harshness if needed"
    ]
  },
  bass808: {
    title: "808 / Bass",
    tips: [
      "20-40Hz: Deep sub",
      "40-60Hz: Weight",
      "60-100Hz: Audible bass",
      "700Hz-2kHz: Harmonics",
      "2-5kHz: Distortion presence"
    ]
  },
  keys: {
    title: "Keys / Piano",
    tips: [
      "80-200Hz: Warmth",
      "250-500Hz: Mud",
      "2-5kHz: Presence",
      "8-12kHz: Air"
    ]
  },
  guitar: {
    title: "Guitar",
    tips: [
      "100-250Hz: Body",
      "250-500Hz: Mud",
      "2-5kHz: Attack/Bite",
      "5-8kHz: Presence",
      "10kHz+: Sparkle"
    ]
  }
};

const problemData = {
  muddy: {
    title: "Muddy Mix",
    range: "150Hz - 350Hz",
    causes: [
      "Vocals",
      "Piano / Keys",
      "Guitars",
      "Pads"
    ],
    fixes: [
      "Cut 2-4dB",
      "Use a medium Q",
      "Sweep to find the worst area",
      "Check overlapping instruments"
    ]
  },

  boxy: {
    title: "Boxy Mix",
    range: "300Hz - 700Hz",
    causes: [
      "Vocals",
      "Snare",
      "Room Mics",
      "Acoustic Instruments"
    ],
    fixes: [
      "Cut 2-3dB",
      "Check room reflections",
      "Use narrow cuts when needed",
      "Avoid over-EQing"
    ]
  },

  harsh: {
    title: "Harsh Mix",
    range: "2.5kHz - 5kHz",
    causes: [
      "Vocals",
      "Hi-Hats",
      "Guitars",
      "Synth Leads"
    ],
    fixes: [
      "Reduce 2-5kHz carefully",
      "Use dynamic EQ",
      "Check monitoring volume",
      "Compare against references"
    ]
  },

  boomy: {
    title: "Boomy Mix",
    range: "80Hz - 150Hz",
    causes: [
      "Kick",
      "808",
      "Bass Guitar",
      "Room Resonance"
    ],
    fixes: [
      "Cut 2-4dB",
      "Check kick/808 balance",
      "Use high-pass filters",
      "Check room acoustics"
    ]
  },

  thin: {
    title: "Thin Mix",
    range: "100Hz - 250Hz",
    causes: [
      "Over-EQing",
      "Weak Low Mids",
      "Poor Arrangement"
    ],
    fixes: [
      "Add warmth carefully",
      "Boost 100-250Hz slightly",
      "Layer supporting instruments",
      "Check phase issues"
    ]
  },

  dull: {
    title: "Dull Mix",
    range: "8kHz - 16kHz",
    causes: [
      "Lack of Air",
      "Dark Sources",
      "Over-De-Essing"
    ],
    fixes: [
      "Add a high shelf",
      "Boost air frequencies",
      "Review de-esser settings",
      "Compare to references"
    ]
  }
};

function createList(items) {
  return `<ul>${items.map(item => `<li>${item}</li>`).join("")}</ul>`;
}

function setActiveButton(clickedButton) {
  document
    .querySelectorAll(".spectrum button, .button-grid button")
    .forEach(button => {
      button.classList.remove("active");
    });

  clickedButton.classList.add("active");
}

function updateInfoBox(html) {
  document.getElementById("infoBox").innerHTML = html;
}

document.querySelectorAll("[data-range]").forEach(button => {
  button.addEventListener("click", () => {
    setActiveButton(button);

    const selectedRange = button.dataset.range;
    const data = rangeData[selectedRange];

    highlightSpectrum(selectedRange);

    updateInfoBox(`
      <h3>${data.title}</h3>
      <p>${data.text}</p>
      ${createList(data.tips)}
    `);
  });
});

document.querySelectorAll("[data-instrument]").forEach(button => {
  button.addEventListener("click", () => {
    setActiveButton(button);

    const selectedInstrument = button.dataset.instrument;
    const data = instrumentData[selectedInstrument];

    highlightInstrument(selectedInstrument);

    updateInfoBox(`
      <h3>${data.title}</h3>
      ${createList(data.tips)}
    `);
  });
});

document.querySelectorAll("[data-problem]").forEach(button => {
  button.addEventListener("click", () => {

    setActiveButton(button);

    const selectedProblem = button.dataset.problem;
    const data = problemData[selectedProblem];

    highlightProblem(selectedProblem);

    updateInfoBox(`
      <h3>${data.title}</h3>

      <p><strong>Likely Frequency Area:</strong><br>${data.range}</p>

      <p><strong>Common Causes:</strong></p>
      ${createList(data.causes)}

      <p><strong>Try This:</strong></p>
      ${createList(data.fixes)}

      <p><strong>RD Tip:</strong> Cut before boosting. Always compare before and after.</p>
    `);

  });
});

function highlightSpectrum(range) {
  const highlight = document.getElementById("spectrumHighlight");

  const positions = {
    sub: { left: "0%", width: "12%" },
    bass: { left: "12%", width: "20%" },
    lowmids: { left: "32%", width: "18%" },
    mids: { left: "50%", width: "20%" },
    uppermids: { left: "70%", width: "15%" },
    highs: { left: "85%", width: "15%" }
  };

  const selectedPosition = positions[range];

  if (!highlight || !selectedPosition) return;

  highlight.style.left = selectedPosition.left;
  highlight.style.width = selectedPosition.width;
  highlight.style.opacity = "1";
}

function highlightInstrument(instrument) {
  const highlight = document.getElementById("spectrumHighlight");

  const positions = {
    vocals: { left: "20%", width: "45%" },
    rapVocals: { left: "18%", width: "50%" },
    kick: { left: "5%", width: "20%" },
    snare: { left: "15%", width: "25%" },
    hihats: { left: "75%", width: "20%" },
    bass808: { left: "0%", width: "25%" },
    keys: { left: "15%", width: "45%" },
    guitar: { left: "20%", width: "40%" }
  };

  if (!positions[instrument]) return;

  highlight.style.left = positions[instrument].left;
  highlight.style.width = positions[instrument].width;
}

function highlightProblem(problem) {
  const highlight = document.getElementById("spectrumHighlight");

  const positions = {
    muddy: { left: "25%", width: "18%" },
    boxy: { left: "32%", width: "22%" },
    harsh: { left: "68%", width: "17%" },
    boomy: { left: "10%", width: "18%" },
    thin: { left: "15%", width: "20%" },
    dull: { left: "82%", width: "18%" }
  };

  if (!positions[problem]) return;

  highlight.style.left = positions[problem].left;
  highlight.style.width = positions[problem].width;
}

document.querySelectorAll(".tab-btn").forEach(button => {
  button.addEventListener("click", () => {
    const selectedTab = button.dataset.tab;

    document.querySelectorAll(".tab-btn").forEach(btn => {
      btn.classList.remove("active");
    });

    document.querySelectorAll(".tab-panel").forEach(panel => {
      panel.classList.remove("active");
    });

    button.classList.add("active");
    document.getElementById(selectedTab).classList.add("active");
  });
});

const searchMap = {
  vocals: '[data-instrument="vocals"]',
  vocal: '[data-instrument="vocals"]',

  "rap vocals": '[data-instrument="rapVocals"]',
  rap: '[data-instrument="rapVocals"]',

  kick: '[data-instrument="kick"]',
  snare: '[data-instrument="snare"]',
  hihat: '[data-instrument="hihats"]',
  hihats: '[data-instrument="hihats"]',
  hats: '[data-instrument="hihats"]',

  "808": '[data-instrument="bass808"]',
  bass: '[data-instrument="bass808"]',

  keys: '[data-instrument="keys"]',
  piano: '[data-instrument="keys"]',

  guitar: '[data-instrument="guitar"]',

  muddy: '[data-problem="muddy"]',
  mud: '[data-problem="muddy"]',

  boxy: '[data-problem="boxy"]',
  box: '[data-problem="boxy"]',

  harsh: '[data-problem="harsh"]',
  boomy: '[data-problem="boomy"]',
  boom: '[data-problem="boomy"]',

  thin: '[data-problem="thin"]',
  dull: '[data-problem="dull"]'
};

const quickSearchInput = document.getElementById("quickSearch");

if (quickSearchInput) {
  quickSearchInput.addEventListener("keydown", e => {
    if (e.key !== "Enter") return;

    const search = e.target.value.trim().toLowerCase();
    const target = searchMap[search];

    if (!target) {
      updateInfoBox(`
        <h3>No Match Found</h3>
        <p>Try searching for vocals, 808, muddy, harsh, snare, kick, piano, or guitar.</p>
      `);
      return;
    }

    const button = document.querySelector(target);

    if (!button) return;

    if (target.includes("data-problem")) {
      document.querySelector('[data-tab="problemTab"]').click();
    }

    if (target.includes("data-instrument")) {
      document.querySelector('[data-tab="instrumentTab"]').click();
    }

    button.click();
    e.target.value = "";
  });
}
