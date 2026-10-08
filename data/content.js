/* ============ EDIT THIS FILE TO CHANGE THE SITE ============
   Search for "[" to find placeholders that still need real info.
   Text can include HTML (links, <b>, <br>, even video <iframe>s).
   Image paths are relative to this folder, e.g. "images/enigma.jpg".
   A missing image shows a hatched "add photo" box, so nothing breaks. */

const SITE = {
  name: "Sahar Levy",
  role: "Mechanical engineering, Cal Poly Pomona",
  tagline: "I design and build mechanisms, composite structures, and electromechanical systems.",
  heroImage: "images/hero.jpg",
  email: "levysahar2007@gmail.com",
  linkedin: "https://www.linkedin.com/in/sahar-l",
  resume: "files/resume.pdf",            // replace this PDF to update the resume
  buttons: [["View work","work.html"],["Resume","resume.html"],["Contact","mailto:levysahar2007@gmail.com"]],
  skills: [
    {h:"CAD and design", t:"SolidWorks (assemblies, motion studies), Fusion 360, mechanism and structural design."},
    {h:"Fabrication", t:"Carbon fiber layup and resin infusion, 3D printing, bronze casting, silicone molding, manual mill and lathe."},
    {h:"Electronics and code", t:"Arduino, ESP32, Python, sensor integration and motor control."}
  ],
  about: {
    bio: ["[3-4 sentences: what you build, what drew you to it, and what you are looking for next.]"],
    education: ["Cal Poly Pomona, B.S. Mechanical Engineering, [expected graduation]","Irvine Valley College, Design, Model Making and Rapid Prototyping, 2024-2025"],
    activities: ["Banshee UAV Team","IAM3D Competition Team","American Society of Mechanical Engineers (ASME)","SkillsUSA (Woodbridge High School)"],
    awards: ["1st Place, ASME eFX Dallas (2025)","Gene Haas Foundation Scholarship (2025)","SkillsUSA Gold Chapter of Distinction (2025)","SkillsUSA Automated Manufacturing Technology State Qualifier (2025)"]
  }
};

/* One entry per project. featured:true puts it on the home page (in this order).
   kind: "team" or "personal".  sections: add, remove, or reorder freely.
   Each section can have: h (heading), p (paragraph), list (bullets), images (array). */
const PROJECTS = [
{ slug:"banshee-uav", title:"Banshee VTOL UAV", kind:"team", featured:true, year:"2025-present",
  outcome:"Structural fabrication for a VTOL UAV built with industry sponsors.",
  summary:"Carbon fiber and machined structural components for a vertical takeoff and landing unmanned aircraft.",
  image:"images/banshee.jpg", role:"Fabrication, [subteam]", tools:"Carbon fiber, resin infusion, machining", team:"[team size]",
  status:"In progress",
  sections:[
   {h:"The problem", p:"[What the aircraft must do and the structural requirements you worked to.]"},
   {h:"My contribution", list:["Fabricate structural components using resin-infused carbon fiber layup: [N parts / subassemblies].","[Mold prep, vacuum bagging, trimming, finishing: whichever you did.]","Coordinate with aerodynamics, avionics, and flight test subteams to check fit and mass budget."]},
   {h:"Sponsors", p:"Team sponsored by Lockheed Martin, Southern California Edison, Air Force Research Laboratory, Robotis, and General Atomics."}
  ]},
{ slug:"iam3d-rover", title:"IAM3D Rover Chassis", kind:"team", featured:true, year:"2025-present",
  outcome:"Part of the team that took 1st place at ASME eFX Dallas.",
  summary:"Land rover chassis designed in CAD and built from 3D-printed thermoplastics.",
  image:"images/rover.jpg", role:"Chassis design", tools:"SolidWorks, Fusion 360, 3D printing", team:"[team size]",
  sections:[
   {h:"The problem", p:"[Competition rules, mission, and the strength and weight limits.]"},
   {h:"My contribution", list:["Designed chassis structures balancing strength, weight, and mission requirements: [X% mass reduction or similar].","Printed and tested [N] iterations of structural parts.","Contributed to the team's 1st place finish at ASME eFX Dallas ([N] teams)."]},
   {h:"What I would change", p:"[1-3 honest sentences.]"}
  ]},
{ slug:"enigma-replica", title:"Enigma Machine Replica", kind:"personal", featured:true, year:"2026",
  outcome:"A working replica: rotor stepping, patch panel, and lamp board, all designed from scratch.",
  summary:"A mechanical and electrical replica of the Enigma cipher machine, designed in SolidWorks and 3D printed.",
  image:"images/enigma.jpg", role:"Sole designer", tools:"SolidWorks, 3D printing, copper strip, banana plugs", team:"Solo",
  status:"In progress",
  sections:[
   {h:"Rotor stepping mechanism", p:"A keypress drives a linkage that moves a spring-loaded pawl against a 26-tooth ratchet wheel (radius about 71 mm). Motion studies in SolidWorks gave unreliable contact results, so I built an analytical kinematic model of the pawl tip against the main pivot position to verify the geometry.", images:["images/enigma-rotor.jpg"]},
   {h:"Patch panel", p:"3D-printed housings with a custom spring-contact mechanism triggered by plug insertion depth, so each letter bridges to itself until a plug is inserted. Banana plugs give useful contact travel."},
   {h:"Lamp board and keys", p:"Battery-powered lamps with a mechanical SPDT switch under each key, made from copper strips. Key travel is just under 10 mm with spring return."},
   {h:"Challenge and fix", p:"The motion study showed the pawl clipping through the wheel. The cause was a contact exponent set far too high plus an unconstrained pivot, which led me to the kinematic model above."},
   {h:"What I would change", p:"[Fill in once built.]"}
  ]},
{ slug:"gesture-recognition", title:"Gesture Recognition System", kind:"personal", featured:true, year:"2026",
  outcome:"IMU gesture matching with automated parameter tuning and a full GUI.",
  summary:"An MPU-6050 gesture recognizer using Dynamic Time Warping, with a Python GUI.",
  image:"images/gesture.jpg", role:"Sole designer", tools:"Python, MPU-6050, SingleTact force sensor", team:"Solo",
  sections:[
   {h:"What it does", p:"Captures motion from an MPU-6050 IMU and matches it against multi-template gesture libraries using Dynamic Time Warping and other matching algorithms. Nelder-Mead tuning optimizes parameters automatically, and a SingleTact force sensor adds force data."},
   {h:"Result", p:"[Accuracy, number of gestures, a demo video.]"}
  ]},
{ slug:"finger-actuator", title:"Robotic Finger Actuator", kind:"personal", featured:true, year:"2026",
  outcome:"Compact mechanical finger with encoder feedback and a control GUI.",
  summary:"A prosthetic-style mechanical finger driven by an encoder motor.",
  image:"images/finger.jpg", role:"Sole designer", tools:"Arduino Uno, TB6612FNG, N20 encoder motor, Python", team:"Solo",
  status:"In progress",
  sections:[
   {h:"What it does", p:"An Arduino Uno drives the finger through a TB6612FNG motor driver with encoder feedback, controlled from a Python Tkinter GUI."},
   {h:"Design decisions", p:"Motor selection targeted at least 1 kg-cm rated torque in a compact package; the Pololu 25D HP 12 V line was the best fit."},
   {h:"Challenge and fix", p:"[Encoder accuracy and pull-up resistor issues: what you found.]"}
  ]},
{ slug:"ring-casting", title:"Ring Making and Casting", kind:"personal", featured:true, year:"2025-present",
  outcome:"Resin-printed patterns cast in bronze and hand finished.",
  summary:"A start-to-finish process for making rings: design, resin print, bronze casting, polishing.",
  image:"images/rings.jpg", role:"Sole maker", tools:"Resin printing, lost-wax casting, polishing", team:"Solo",
  sections:[
   {h:"Process", list:["Model the ring in CAD and print it in castable resin.","Invest and burn out the pattern, then cast in bronze.","Cut, sand, and polish the casting."]},
   {h:"Next", p:"Setting up a ring-turning lathe (benchtop wood lathe with a ring mandrel) for turned rings in titanium and niobium."}
  ]},
{ slug:"pen-plotter", title:"Custom Pen Plotter", kind:"personal", year:"2026",
  outcome:"A no-firmware plotter that turns PDF drawings into machine paths.",
  summary:"X/Y stepper plotter driven directly from an ESP32, with a GUI that converts PDF or CAD drawings into toolpaths.",
  image:"images/plotter.jpg", role:"Sole designer", tools:"ESP32, steppers, Python", team:"Solo", status:"In progress",
  sections:[
   {h:"Design", p:"The bed moves on one axis and the pen on the other, with a servo for pen lift, limit switches for homing, and a frame that comes apart for storage. Target sheet size is at least ANSI C / A2."}
  ]},
{ slug:"engine-assembly", title:"Engine Assembly", kind:"personal", year:"2025",
  outcome:"58 components, fully constrained to move realistically.",
  summary:"A SolidWorks engine assembly built from class engineering drawings.",
  image:"images/engine.jpg", role:"Designer", tools:"SolidWorks", team:"Solo",
  sections:[{h:"Details", p:"[Engine type, key mates, add an exploded view and a short motion clip.]"}]},
{ slug:"lock-projects", title:"Tumbler Locks", kind:"personal", year:"2025",
  outcome:"Several tumbler lock variants, each with a different mechanism.",
  summary:"Multiple versions of tumbler locks designed in different ways.",
  image:"images/locks.jpg", role:"Designer", tools:"CAD, 3D printing", team:"Solo",
  sections:[{h:"Variants", p:"[One line per variant: how its mechanism differs.]"}]}
];

/* Fabrication page: one block per process. */
const FAB = [
 {h:"Casting and molding", t:"Lost-wax bronze casting (Modi-Bot, rings), silicone molds, and urethane casting.", images:["images/fab-casting.jpg"]},
 {h:"Machining", t:"Manual mill (stepped block), lathe (stepped spire), and CNC-machined foam for a SkillsUSA competition piece that qualified our team for state.", images:["images/fab-machining.jpg"]},
 {h:"Forming and finishing", t:"Vacuum forming, precise foam sculpting (a sphere from templated halves), and airbrushing with effect paints.", images:["images/fab-forming.jpg"]},
 {h:"Assembly and craft", t:"Steel scale-model kits with hundreds of parts, and a modified jewelry box with a velvet insert.", images:["images/fab-assembly.jpg"]}
];
