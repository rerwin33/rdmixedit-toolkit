/* =========================================
   RDMIXEDIT TOOLKIT
   INTERACTIVE EQ CHART
========================================= */


/* =========================================
   FREQUENCY RANGE DATA
========================================= */

const rangeData = {
  sub: {
    title: "Sub Bass: 20-60Hz",

    keyAreas: [
      "20-30Hz: Extreme sub and physical rumble",
      "30-60Hz: Deep weight and sub-bass energy"
    ],

    boostFor: [
      "More deep sub energy",
      "Extra weight in 808s and bass",
      "More physical low-end impact"
    ],

    cutFor: [
      "Unwanted rumble",
      "Low-frequency noise",
      "Excessive sub buildup"
    ],

    watchOut: [
      "Many playback systems cannot reproduce this range accurately",
      "Too much sub can reduce headroom without sounding noticeably louder"
    ],

    rdTip:
      "Don't boost sub frequencies just because you can't hear them well. Check your monitoring and use a spectrum analyzer as a second opinion."
  },

  bass: {
    title: "Bass: 60-250Hz",

    keyAreas: [
      "60-120Hz: Weight, punch and low-end power",
      "120-250Hz: Warmth, body and fullness"
    ],

    boostFor: [
      "More body",
      "Fuller kick or bass",
      "Additional warmth"
    ],

    cutFor: [
      "Boominess",
      "Low-end buildup",
      "Excessive thickness"
    ],

    watchOut: [
      "Too much can make the mix feel cloudy",
      "Too much cutting can make instruments sound thin"
    ],

    rdTip:
      "Check how the kick and 808 interact before making large boosts in this area."
  },

  lowmids: {
    title: "Low Mids: 250-500Hz",

    keyAreas: [
      "250-350Hz: Warmth, thickness and a common mud area",
      "350-500Hz: Body, boxiness and room tone"
    ],

    boostFor: [
      "More thickness",
      "More body",
      "Restoring warmth to thin sources"
    ],

    cutFor: [
      "Mud",
      "Boxiness",
      "Crowded arrangements"
    ],

    watchOut: [
      "Aggressive cuts can remove the natural body of vocals and instruments",
      "Mud may be caused by multiple tracks overlapping rather than one bad track"
    ],

    rdTip:
      "Before cutting every track around 250-400Hz, mute instruments and find out what is actually causing the buildup."
  },

  mids: {
    title: "Mid Range: 500Hz-2kHz",

    keyAreas: [
      "500Hz-1kHz: Tone, body, honk and character",
      "1-2kHz: Intelligibility, definition and forwardness"
    ],

    boostFor: [
      "More definition",
      "Better vocal intelligibility",
      "Helping a sound translate on smaller speakers"
    ],

    cutFor: [
      "Honky tone",
      "Nasal character",
      "Overly forward mids"
    ],

    watchOut: [
      "This range is important for translation on phones and small speakers",
      "Over-cutting can make a mix sound hollow"
    ],

    rdTip:
      "Don't automatically scoop the mids. Midrange is where much of the musical information lives."
  },

  uppermids: {
    title: "Upper Mids: 2kHz-5kHz",

    keyAreas: [
      "2-3kHz: Presence and intelligibility",
      "3-5kHz: Attack, bite, edge and potential harshness"
    ],

    boostFor: [
      "More vocal presence",
      "More attack",
      "Helping sounds cut through the mix"
    ],

    cutFor: [
      "Harshness",
      "Listening fatigue",
      "Aggressive bite"
    ],

    watchOut: [
      "Human hearing is very sensitive in this area",
      "Small EQ moves can sound much bigger here than in the lows"
    ],

    rdTip:
      "If something feels harsh, try a small cut before making a large tonal change."
  },

  highs: {
    title: "Highs: 5kHz-20kHz",

    keyAreas: [
      "5-9kHz: Brightness, detail and sibilance",
      "10-20kHz: Air, openness and polish"
    ],

    boostFor: [
      "More brightness",
      "More air",
      "Extra polish and openness"
    ],

    cutFor: [
      "Sibilance",
      "Brittleness",
      "Excessive high-frequency noise"
    ],

    watchOut: [
      "Boosting highs cannot fix a badly recorded source",
      "Too much can make a mix tiring or brittle"
    ],

    rdTip:
      "Use high-shelf boosts carefully. A little air can sound expensive; too much can sound artificial."
  }
};


/* =========================================
   INSTRUMENT DATA
========================================= */

const instrumentData = {
  vocals: {
    title: "Vocals",

    tips: [
      "80Hz: High-pass to remove unnecessary rumble",
      "150-250Hz: Warmth, body and potential mud",
      "250-500Hz: Body and potential boxiness",
      "2-5kHz: Presence and intelligibility",
      "5-8kHz: Brightness and potential sibilance",
      "10-16kHz: Air and polish"
    ]
  },

  rapVocals: {
    title: "Rap Vocals",

    tips: [
      "HPF around 80Hz as a starting point when needed",
      "Check around 250Hz if the vocal sounds muddy",
      "Check around 500Hz if the vocal sounds boxy",
      "Around 2-5kHz can add presence and intelligibility",
      "A gentle shelf around 10-16kHz can add air",
      "Sibilance often appears around 5-9kHz"
    ]
  },

  kick: {
    title: "Kick Drum",

    tips: [
      "50-70Hz: Low-end weight",
      "80-120Hz: Punch",
      "200-400Hz: Potential mud or boxiness",
      "2-5kHz: Attack and click"
    ]
  },

  snare: {
    title: "Snare",

    tips: [
      "120-250Hz: Body and weight",
      "400-800Hz: Potential boxiness",
      "2-5kHz: Crack and attack",
      "8-12kHz: Snap and air"
    ]
  },

  hihats: {
    title: "Hi-Hats",

    tips: [
      "200-500Hz: Lower body if present",
      "3-6kHz: Presence and attack",
      "8-15kHz: Shine and brightness",
      "Check the upper mids and highs if the hats become harsh"
    ]
  },

  bass808: {
    title: "808 / Bass",

    tips: [
      "20-40Hz: Deep sub",
      "40-60Hz: Weight",
      "60-100Hz: More audible bass energy",
      "700Hz-2kHz: Harmonics that help small-speaker translation",
      "2-5kHz: Distortion or upper harmonic presence"
    ]
  },

  keys: {
    title: "Keys / Piano",

    tips: [
      "80-200Hz: Warmth and body",
      "250-500Hz: Common mud area",
      "2-5kHz: Definition and presence",
      "8-12kHz: Air and brightness"
    ]
  },

  guitar: {
    title: "Guitar",

    tips: [
      "100-250Hz: Body and warmth",
      "250-500Hz: Potential mud",
      "2-5kHz: Attack and bite",
      "5-8kHz: Presence and brightness",
      "10kHz+: Sparkle when appropriate"
    ]
  }
};


/* =========================================
   MIX PROBLEM DATA
========================================= */

const problemData = {
  muddy: {
    title: "Muddy Mix",
    range: "150Hz - 350Hz",

    causes: [
      "Vocals",
      "Piano / Keys",
      "Guitars",
      "Pads",
      "Multiple instruments overlapping in the low mids"
    ],

    fixes: [
      "Identify which tracks are actually causing the buildup",
      "Try a moderate 2-4dB reduction when necessary",
      "Start with a medium Q",
      "Check overlapping instruments before EQing everything"
    ],

    rdTip:
      "Mud is often an arrangement and masking problem, not just an EQ problem."
  },

  boxy: {
    title: "Boxy Mix",
    range: "300Hz - 700Hz",

    causes: [
      "Vocals",
      "Snare",
      "Room mics",
      "Acoustic instruments",
      "Room coloration"
    ],

    fixes: [
      "Find the specific boxy frequency before cutting",
      "Try a small 2-3dB reduction",
      "Check room reflections",
      "Use narrower cuts for obvious resonances"
    ],

    rdTip:
      "Don't remove all of this range. It also contains important body and tone."
  },

  harsh: {
    title: "Harsh Mix",
    range: "2.5kHz - 5kHz",

    causes: [
      "Vocals",
      "Hi-hats",
      "Guitars",
      "Synth leads",
      "Too many bright sources competing"
    ],

    fixes: [
      "Reduce the harsh area carefully",
      "Consider dynamic EQ for harshness that changes over time",
      "Check your monitoring volume",
      "Compare against a reference mix"
    ],

    rdTip:
      "Our ears are very sensitive in this range, so small changes can make a big difference."
  },

  boomy: {
    title: "Boomy Mix",
    range: "80Hz - 150Hz",

    causes: [
      "Kick",
      "808",
      "Bass guitar",
      "Room resonance",
      "Too many low-end sources overlapping"
    ],

    fixes: [
      "Check the kick and bass relationship",
      "Reduce excessive buildup rather than automatically high-passing",
      "Check the room and monitoring environment",
      "Compare the low end on multiple playback systems"
    ],

    rdTip:
      "Before EQing the low end heavily, make sure the problem isn't coming from your room."
  },

  thin: {
    title: "Thin Mix",
    range: "100Hz - 250Hz",

    causes: [
      "Over-EQing",
      "Weak low mids",
      "Poor arrangement",
      "Phase cancellation"
    ],

    fixes: [
      "Restore warmth carefully",
      "Try a subtle boost where body is missing",
      "Check whether supporting instruments are missing",
      "Check phase relationships"
    ],

    rdTip:
      "A thin mix isn't always fixed with a boost. Sometimes you've simply removed too much."
  },

  dull: {
    title: "Dull Mix",
    range: "8kHz - 16kHz",

    causes: [
      "Dark source recordings",
      "Lack of air",
      "Over-de-essing",
      "Over-filtering",
      "Too little upper harmonic content"
    ],

    fixes: [
      "Try a gentle high shelf",
      "Review de-esser settings",
      "Check whether the original recording is simply dark",
      "Compare the top end against reference tracks"
    ],

    rdTip:
      "Brightness should support the source. Don't force air into a recording that doesn't need it."
  }
};


/* =========================================
   WHAT THIS MEANS
   AUDIO ENGINEERING TERMS
========================================= */

const termData = {
  frequency: {
    title: "Frequency",
    definition:
      "Frequency describes how fast a sound wave repeats and is perceived roughly as how low or high a sound is.",
    example:
      "Lower frequencies contain bass and sub energy. Higher frequencies contain brightness, detail and air."
  },

  hz: {
    title: "Hz / kHz",
    definition:
      "Hertz (Hz) measures frequency in cycles per second. 1 kHz equals 1,000 Hz.",
    example:
      "100Hz is in the low-frequency range, while 10kHz is in the high-frequency range."
  },

  gain: {
    title: "Gain",
    definition:
      "Gain controls the level of a signal or the amount an EQ band is increased or decreased.",
    example:
      "A +3dB EQ move boosts a frequency area, while -3dB reduces it."
  },

  db: {
    title: "dB — Decibels",
    definition:
      "Decibels are a logarithmic unit used to describe audio level changes.",
    example:
      "EQ gain, fader level, compression gain reduction and peak levels are commonly measured in dB."
  },

  q: {
    title: "Q — Quality Factor",
    definition:
      "Q controls how narrow or wide an EQ adjustment is around its selected frequency.",
    example:
      "A higher Q targets a narrower range. A lower Q affects a broader range."
  },

  bandwidth: {
    title: "Bandwidth",
    definition:
      "Bandwidth describes the width of the frequency range affected by a filter or EQ adjustment.",
    example:
      "A wide EQ boost shapes broad tone, while a narrow cut can target a resonance."
  },

  boost: {
    title: "Boost",
    definition:
      "A boost increases the level of a selected frequency range.",
    example:
      "A gentle boost around the upper highs may add air to a vocal."
  },

  cut: {
    title: "Cut",
    definition:
      "A cut reduces the level of a selected frequency range.",
    example:
      "A small low-mid cut may reduce mud when that area is actually excessive."
  },

  hpf: {
    title: "High-Pass Filter",
    definition:
      "A high-pass filter allows frequencies above its cutoff to pass while reducing frequencies below it.",
    example:
      "A vocal may use an HPF to reduce unnecessary low-frequency rumble."
  },

  lpf: {
    title: "Low-Pass Filter",
    definition:
      "A low-pass filter allows frequencies below its cutoff to pass while reducing frequencies above it.",
    example:
      "An LPF can remove unnecessary high-frequency content from a dark or background sound."
  },

  bell: {
    title: "Bell Filter",
    definition:
      "A bell filter boosts or cuts around a selected center frequency, with Q controlling its width.",
    example:
      "You might use a bell filter to reduce a resonance around 400Hz."
  },

  shelf: {
    title: "Shelf Filter",
    definition:
      "A shelf raises or lowers frequencies above or below a chosen point rather than targeting only one center frequency.",
    example:
      "A high shelf can add broad brightness and air to a vocal."
  },

  sweep: {
    title: "Frequency Sweep",
    definition:
      "Sweeping means moving an EQ band across the spectrum while listening for a specific tone, resonance or problem.",
    example:
      "A narrow temporary boost can help locate a resonance before you decide whether it needs to be reduced."
  },

  masking: {
    title: "Frequency Masking",
    definition:
      "Masking occurs when sounds occupying similar frequency ranges make each other harder to hear.",
    example:
      "A kick and 808 can compete for the same low-frequency space."
  },

  resonance: {
    title: "Resonance",
    definition:
      "A resonance is a frequency or narrow frequency area that rings or becomes unusually prominent.",
    example:
      "A vocal recording may contain a sharp room resonance that needs a narrow EQ reduction."
  },

  sibilance: {
    title: "Sibilance",
    definition:
      "Sibilance is excessive high-frequency energy from consonants such as S, SH and sometimes T sounds.",
    example:
      "Vocal sibilance commonly appears somewhere around 5-9kHz, depending on the voice and recording."
  },

  presence: {
    title: "Presence",
    definition:
      "Presence describes the frequency content that helps a sound feel clear, forward and easy to hear.",
    example:
      "Vocals often gain presence somewhere in the upper-midrange."
  },

  warmth: {
    title: "Warmth",
    definition:
      "Warmth usually describes pleasant low-mid and upper-bass energy that gives a sound body and fullness.",
    example:
      "Too little warmth can sound thin, while too much can contribute to mud."
  },

  mud: {
    title: "Mud",
    definition:
      "Mud describes excessive low-mid buildup that makes a mix sound cloudy, congested or unclear.",
    example:
      "Mud is often associated with overlapping energy roughly around 150-350Hz."
  },

  boxiness: {
    title: "Boxiness",
    definition:
      "Boxiness describes a hollow, enclosed or cardboard-like tone commonly found in parts of the low-midrange.",
    example:
      "Vocals, snares and room recordings may sound boxy around several hundred Hz."
  },

  air: {
    title: "Air",
    definition:
      "Air describes the sense of openness and polish found in the highest audible frequencies.",
    example:
      "A gentle boost above roughly 10kHz may add air to certain vocals or instruments."
  }
};


/* =========================================
   UTILITY FUNCTIONS
========================================= */

function createList(items) {
  return `<ul>${items.map(item => `<li>${item}</li>`).join("")}</ul>`;
}


function setActiveButton(clickedButton) {
  document
    .querySelectorAll(
      ".spectrum button, .button-grid button"
    )
    .forEach(button => {
      button.classList.remove("active");
    });

  clickedButton.classList.add("active");
}


function updateInfoBox(html) {
  const infoBox = document.getElementById("infoBox");

  if (!infoBox) return;

  infoBox.innerHTML = html;
}


/* =========================================
   FREQUENCY RANGE BUTTONS
========================================= */

document.querySelectorAll("[data-range]").forEach(button => {
  button.addEventListener("click", () => {
    setActiveButton(button);

    const selectedRange = button.dataset.range;
    const data = rangeData[selectedRange];

    if (!data) return;

    highlightSpectrum(selectedRange);

    updateInfoBox(`
      <h3>${data.title}</h3>

      <p><strong>Key Areas:</strong></p>
      ${createList(data.keyAreas)}

      <p><strong>Boost For:</strong></p>
      ${createList(data.boostFor)}

      <p><strong>Cut For:</strong></p>
      ${createList(data.cutFor)}

      <p><strong>Watch Out:</strong></p>
      ${createList(data.watchOut)}

      <p><strong>RD Tip:</strong> ${data.rdTip}</p>
    `);
  });
});


/* =========================================
   INSTRUMENT BUTTONS
========================================= */

document
  .querySelectorAll("[data-instrument]")
  .forEach(button => {
    button.addEventListener("click", () => {
      setActiveButton(button);

      const selectedInstrument =
        button.dataset.instrument;

      const data =
        instrumentData[selectedInstrument];

      if (!data) return;

      highlightInstrument(selectedInstrument);

      updateInfoBox(`
        <h3>${data.title}</h3>
        ${createList(data.tips)}
      `);
    });
  });


/* =========================================
   MIX PROBLEM BUTTONS
========================================= */

document
  .querySelectorAll("[data-problem]")
  .forEach(button => {
    button.addEventListener("click", () => {
      setActiveButton(button);

      const selectedProblem =
        button.dataset.problem;

      const data =
        problemData[selectedProblem];

      if (!data) return;

      highlightProblem(selectedProblem);

      updateInfoBox(`
        <h3>${data.title}</h3>

        <p>
          <strong>Likely Frequency Area:</strong><br>
          ${data.range}
        </p>

        <p><strong>Common Causes:</strong></p>
        ${createList(data.causes)}

        <p><strong>Try This:</strong></p>
        ${createList(data.fixes)}

        <p>
          <strong>RD Tip:</strong>
          ${data.rdTip}
        </p>
      `);
    });
  });


/* =========================================
   WHAT THIS MEANS BUTTONS
========================================= */

document.querySelectorAll("[data-term]").forEach(button => {
  button.addEventListener("click", () => {
    setActiveButton(button);

    const selectedTerm = button.dataset.term;
    const data = termData[selectedTerm];

    if (!data) return;

    updateInfoBox(`
      <h3>${data.title}</h3>

      <p>${data.definition}</p>

      <p><strong>Example:</strong></p>
      <p>${data.example}</p>
    `);
  });
});


/* =========================================
   FREQUENCY SPECTRUM HIGHLIGHT
========================================= */

function highlightSpectrum(range) {
  const highlight =
    document.getElementById("spectrumHighlight");

  const positions = {
    sub: {
      left: "0%",
      width: "12%"
    },

    bass: {
      left: "12%",
      width: "20%"
    },

    lowmids: {
      left: "32%",
      width: "18%"
    },

    mids: {
      left: "50%",
      width: "20%"
    },

    uppermids: {
      left: "70%",
      width: "15%"
    },

    highs: {
      left: "85%",
      width: "15%"
    }
  };

  const selectedPosition =
    positions[range];

  if (!highlight || !selectedPosition) return;

  highlight.style.left =
    selectedPosition.left;

  highlight.style.width =
    selectedPosition.width;

  highlight.style.opacity = "1";
}


/* =========================================
   INSTRUMENT SPECTRUM HIGHLIGHT
========================================= */

function highlightInstrument(instrument) {
  const highlight =
    document.getElementById("spectrumHighlight");

  const positions = {
    vocals: {
      left: "20%",
      width: "45%"
    },

    rapVocals: {
      left: "18%",
      width: "50%"
    },

    kick: {
      left: "5%",
      width: "20%"
    },

    snare: {
      left: "15%",
      width: "25%"
    },

    hihats: {
      left: "75%",
      width: "20%"
    },

    bass808: {
      left: "0%",
      width: "25%"
    },

    keys: {
      left: "15%",
      width: "45%"
    },

    guitar: {
      left: "20%",
      width: "40%"
    }
  };

  const selectedPosition =
    positions[instrument];

  if (!highlight || !selectedPosition) return;

  highlight.style.left =
    selectedPosition.left;

  highlight.style.width =
    selectedPosition.width;

  highlight.style.opacity = "1";
}


/* =========================================
   MIX PROBLEM SPECTRUM HIGHLIGHT
========================================= */

function highlightProblem(problem) {
  const highlight =
    document.getElementById("spectrumHighlight");

  const positions = {
    muddy: {
      left: "25%",
      width: "18%"
    },

    boxy: {
      left: "32%",
      width: "22%"
    },

    harsh: {
      left: "68%",
      width: "17%"
    },

    boomy: {
      left: "10%",
      width: "18%"
    },

    thin: {
      left: "15%",
      width: "20%"
    },

    dull: {
      left: "82%",
      width: "18%"
    }
  };

  const selectedPosition =
    positions[problem];

  if (!highlight || !selectedPosition) return;

  highlight.style.left =
    selectedPosition.left;

  highlight.style.width =
    selectedPosition.width;

  highlight.style.opacity = "1";
}


/* =========================================
   TAB NAVIGATION
========================================= */

document.querySelectorAll(".tab-btn").forEach(button => {
  button.addEventListener("click", () => {
    const selectedTab = button.dataset.tab;

    document
      .querySelectorAll(".tab-btn")
      .forEach(btn => {
        btn.classList.remove("active");
      });

    document
      .querySelectorAll(".tab-panel")
      .forEach(panel => {
        panel.classList.remove("active");
      });

    button.classList.add("active");

    const targetPanel =
      document.getElementById(selectedTab);

    if (targetPanel) {
      targetPanel.classList.add("active");
    }
  });
});


/* =========================================
   QUICK SEARCH
========================================= */

const searchMap = {
  vocals: '[data-instrument="vocals"]',
  vocal: '[data-instrument="vocals"]',

  "rap vocals":
    '[data-instrument="rapVocals"]',

  rap:
    '[data-instrument="rapVocals"]',

  kick:
    '[data-instrument="kick"]',

  snare:
    '[data-instrument="snare"]',

  hihat:
    '[data-instrument="hihats"]',

  hihats:
    '[data-instrument="hihats"]',

  hats:
    '[data-instrument="hihats"]',

  "808":
    '[data-instrument="bass808"]',

  bass:
    '[data-instrument="bass808"]',

  keys:
    '[data-instrument="keys"]',

  piano:
    '[data-instrument="keys"]',

  guitar:
    '[data-instrument="guitar"]',

  muddy:
    '[data-problem="muddy"]',

  mud:
    '[data-problem="muddy"]',

  boxy:
    '[data-problem="boxy"]',

  box:
    '[data-problem="boxy"]',

  harsh:
    '[data-problem="harsh"]',

  boomy:
    '[data-problem="boomy"]',

  boom:
    '[data-problem="boomy"]',

  thin:
    '[data-problem="thin"]',

  dull:
    '[data-problem="dull"]',

  frequency:
    '[data-term="frequency"]',

  hz:
    '[data-term="hz"]',

  khz:
    '[data-term="hz"]',

  gain:
    '[data-term="gain"]',

  db:
    '[data-term="db"]',

  q:
    '[data-term="q"]',

  bandwidth:
    '[data-term="bandwidth"]',

  boost:
    '[data-term="boost"]',

  cut:
    '[data-term="cut"]',

  "high pass":
    '[data-term="hpf"]',

  hpf:
    '[data-term="hpf"]',

  "low pass":
    '[data-term="lpf"]',

  lpf:
    '[data-term="lpf"]',

  bell:
    '[data-term="bell"]',

  shelf:
    '[data-term="shelf"]',

  sweep:
    '[data-term="sweep"]',

  masking:
    '[data-term="masking"]',

  resonance:
    '[data-term="resonance"]',

  sibilance:
    '[data-term="sibilance"]',

  presence:
    '[data-term="presence"]',

  warmth:
    '[data-term="warmth"]',

  air:
    '[data-term="air"]'
};


function switchToTab(tabSelector) {
  const tab =
    document.querySelector(tabSelector);

  if (tab) {
    tab.click();
  }
}


const quickSearchInput =
  document.getElementById("quickSearch");


if (quickSearchInput) {
  quickSearchInput.addEventListener(
    "keydown",
    event => {
      if (event.key !== "Enter") return;

      const search =
        event.target.value
          .trim()
          .toLowerCase();

      const target =
        searchMap[search];

      if (!target) {
        updateInfoBox(`
          <h3>No Match Found</h3>

          <p>
            Try searching for an instrument,
            mix problem, or audio engineering term.
          </p>

          <p>
            Examples: vocals, 808, muddy,
            harsh, Q, gain, masking or air.
          </p>
        `);

        return;
      }

      const targetButton =
        document.querySelector(target);

      if (!targetButton) {
        updateInfoBox(`
          <h3>Feature Coming Soon</h3>
          <p>
            This term is supported by the search,
            but its glossary control has not been
            added to the page yet.
          </p>
        `);

        return;
      }

      if (
        target.includes("data-problem")
      ) {
        switchToTab(
          '[data-tab="problemTab"]'
        );
      }

      if (
        target.includes("data-instrument")
      ) {
        switchToTab(
          '[data-tab="instrumentTab"]'
        );
      }

      if (
        target.includes("data-term")
      ) {
        switchToTab(
          '[data-tab="termsTab"]'
        );
      }

      targetButton.click();

      event.target.value = "";
    }
  );
}
