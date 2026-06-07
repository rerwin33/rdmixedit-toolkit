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
    text: "Check 150-350Hz first. Try a small cut on vocals, instruments, or mix bus.",
  },
  boxy: {
    title: "Boxy Mix",
    text: "Check 300-700Hz. This area can make vocals and instruments sound trapped or hollow.",
  },
  harsh: {
    title: "Harsh Mix",
    text: "Check 2.5-5kHz. Reduce carefully because this area also controls presence.",
  },
  boomy: {
    title: "Boomy Mix",
    text: "Check 80-150Hz. Too much here can make the low end feel loose.",
  },
  thin: {
    title: "Thin Mix",
    text: "Check 100-250Hz. A small boost can add warmth and body.",
  },
  dull: {
    title: "Dull Mix",
    text: "Check 8-16kHz. A gentle shelf can add brightness and air.",
  }
};

function createList(items) {
  return `<ul>${items.map(item => `<li>${item}</li>`).join("")}</ul>`;
}

document.querySelectorAll("[data-range]").forEach(button => {
  button.addEventListener("click", () => {
    const data = rangeData[button.dataset.range];

    highlightSpectrum(button.dataset.range);

    document.getElementById("rangeInfo").innerHTML = `
      <h3>${data.title}</h3>
      <p>${data.text}</p>
      ${createList(data.tips)}
    `;
  });
});

document.querySelectorAll("[data-instrument]").forEach(button => {
  button.addEventListener("click", () => {
    const data = instrumentData[button.dataset.instrument];

    highlightInstrument(button.dataset.instrument);

    document.getElementById("instrumentInfo").innerHTML = `
      <h3>${data.title}</h3>
      ${createList(data.tips)}
    `;
  });
});

document.querySelectorAll("[data-problem]").forEach(button => {
  button.addEventListener("click", () => {
    const data = problemData[button.dataset.problem];

    document.getElementById("problemInfo").innerHTML = `
      <h3>${data.title}</h3>
      <p>${data.text}</p>
      <p><strong>RD Tip:</strong> Cut first. Boost second. Always A/B your moves.</p>
    `;
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

  if (!positions[range]) return;

  highlight.style.left = positions[range].left;
  highlight.style.width = positions[range].width;
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
