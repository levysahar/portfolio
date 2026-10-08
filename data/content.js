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
  imageDefaults: {home:"4/3", card:"4/3", hero:"16/9", step:"4/3", gallery:"4/3"},  // width/height ratios
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

/* One entry per project. featured:true shows it on the home page (in this order).
   kind: "team" or "personal" (work-page filter).  type: "flagship", "team", or "personal"
   picks the page template (headings and fields are in js/site.js, TPL).
   Any field you leave out is simply skipped. Full field guide: docs/GUIDE.md
   Images can be "images/a.jpg" or {src, ratio, x, y, zoom} or {model:"models/a.glb"}. */
const PROJECTS = [
{ slug:"banshee-uav", type:"team", kind:"team", featured:true, year:"2025-present", status:"In progress",
  title:"Banshee VTOL UAV", outcome:"Structural fabrication for a VTOL UAV built with industry sponsors.",
  summary:"Carbon fiber and machined structural components for a vertical takeoff and landing unmanned aircraft.",
  image:"images/banshee.jpg", role:"Fabrication, [subteam]", tools:"Carbon fiber, resin infusion, machining", team:"[team size]",
  problem:"[What the aircraft must do and the structural requirements you worked to.]",
  contribution:["Fabricate structural components using resin-infused carbon fiber layup: [N parts / subassemblies].","[Mold prep, vacuum bagging, trimming, finishing: whichever you did.]","Coordinate with aerodynamics, avionics, and flight test subteams to check fit and mass budget."],
  process:[{h:"[Layup and infusion]",p:"[What you did and why.]",image:"images/banshee-1.jpg"},{h:"[Machining and assembly]",p:"[What you did and why.]",image:"images/banshee-2.jpg"}],
  result:"[Outcome, test results, flight status.]",
  gallery:["images/banshee-3.jpg","images/banshee-4.jpg"],
  drops:[{h:"Sponsors",p:"Team sponsored by Lockheed Martin, Southern California Edison, Air Force Research Laboratory, Robotis, and General Atomics."}]},
{ slug:"iam3d-rover", type:"team", kind:"team", featured:true, year:"2025-present",
  title:"IAM3D Rover Chassis", outcome:"Part of the team that took 1st place at ASME eFX Dallas.",
  summary:"Land rover chassis designed in CAD and built from 3D-printed thermoplastics.",
  image:"images/rover.jpg", role:"Chassis design", tools:"SolidWorks, Fusion 360, 3D printing", team:"[team size]", stats:{Result:"1st place, eFX Dallas"},
  problem:"[Competition rules, mission, and the strength and weight limits.]",
  contribution:["Designed chassis structures balancing strength, weight, and mission requirements: [X% mass reduction].","Printed and tested [N] iterations of structural parts."],
  process:[{h:"[Design iteration]",p:"[Key decision and why.]",image:"images/rover-1.jpg"}],
  result:"1st place at ASME eFX Dallas ([N] teams).", change:"[1-3 honest sentences.]",
  drops:[{h:"Parts list",table:[["Part","Material","Process"],["[Chassis rail]","[PETG]","FDM"]]}]},
{ slug:"enigma-replica", type:"flagship", kind:"personal", featured:true, year:"2026", status:"In progress",
  title:"Enigma Machine Replica", outcome:"Rotor stepping, patch panel, and lamp board, all designed from scratch.",
  summary:"A mechanical and electrical replica of the Enigma cipher machine, designed in SolidWorks and 3D printed.",
  image:"images/enigma.jpg", role:"Sole designer", tools:"SolidWorks, 3D printing, copper strip, banana plugs", team:"Solo",
  stats:{"Rotor teeth":"26","Key travel":"under 10 mm"},
  problem:"Reproduce the Enigma's behavior with visible, working mechanisms: stepping rotors, a plug-in steckerbrett, and a lit lamp board.",
  contribution:["Designed every mechanism in SolidWorks.","Built an analytical kinematic model to verify the pawl geometry.","Designed 3D-printed spring-contact housings and copper-strip key switches."],
  process:[
   {h:"Rotor stepping",p:"A keypress drives a linkage that moves a spring-loaded pawl against a 26-tooth ratchet wheel (radius about 71 mm).",image:"images/enigma-rotor.jpg"},
   {h:"Patch panel",p:"3D-printed housings with a spring contact triggered by plug insertion depth, so each letter bridges to itself until a plug is inserted. Banana plugs give useful contact travel.",image:"images/enigma-panel.jpg"},
   {h:"Lamp board and keys",p:"Battery-powered lamps with a mechanical SPDT switch under each key, made from copper strips.",image:"images/enigma-lamps.jpg"}],
  analysis:"The SolidWorks motion study showed the pawl clipping through the wheel. The cause was a contact exponent set far too high plus an unconstrained pivot, which led me to a kinematic position model of the pawl tip against the main pivot.",
  result:"[Fill in once built.]", change:"[Fill in once built.]",
  gallery:["images/enigma-1.jpg","images/enigma-2.jpg"],
  drops:[{h:"Parts list",table:[["Part","Qty","Source"],["E10 screw-base bulbs","26+","[AliExpress]"],["Copper strip","[N]","[source]"],["Banana plugs and sockets","[N]","[source]"],["3D-printed parts","[N]","Printed in [material]"]]},
   {h:"Files",links:[["Rotor CAD (STEP)","files/enigma-rotor.step"],["Printable parts (ZIP)","files/enigma-stl.zip"]]}]},
{ slug:"gesture-recognition", type:"personal", kind:"personal", featured:true, year:"2026",
  title:"Gesture Recognition System", outcome:"IMU gesture matching with automated parameter tuning and a full GUI.",
  summary:"An MPU-6050 gesture recognizer using Dynamic Time Warping, with a Python GUI.",
  image:"images/gesture.jpg", role:"Sole designer", tools:"Python, MPU-6050, SingleTact", team:"Solo",
  what:"Captures motion from an MPU-6050 IMU and matches it against multi-template gesture libraries using Dynamic Time Warping and other matching algorithms. A SingleTact force sensor adds force data.",
  specs:["Dynamic Time Warping with multiple matching algorithms","Automated Nelder-Mead parameter tuning","Python GUI"],
  result:"[Accuracy, number of gestures, demo video.]"},
{ slug:"finger-actuator", type:"personal", kind:"personal", featured:true, year:"2026", status:"In progress",
  title:"Robotic Finger Actuator", outcome:"Compact mechanical finger with encoder feedback and a control GUI.",
  summary:"A prosthetic-style mechanical finger driven by an encoder motor.",
  image:"images/finger.jpg", role:"Sole designer", tools:"Arduino Uno, TB6612FNG, N20 motor, Python", team:"Solo",
  what:"An Arduino Uno drives the finger through a TB6612FNG motor driver with encoder feedback, controlled from a Python Tkinter GUI.",
  specs:["Motor target: at least 1 kg-cm rated torque, compact","Candidate: Pololu 25D HP 12 V line"],
  challenge:"[Encoder accuracy and pull-up resistor issues: what you found.]",
  drops:[{h:"Parts list",table:[["Part","Qty"],["Arduino Uno","1"],["TB6612FNG motor driver","1"],["N20 encoder motor","1"]]}]},
{ slug:"ring-casting", type:"personal", kind:"personal", featured:true, year:"2025-present",
  title:"Ring Making and Casting", outcome:"Resin-printed patterns cast in bronze and hand finished.",
  summary:"A start-to-finish process for making rings: design, resin print, bronze casting, polishing.",
  image:"images/rings.jpg", role:"Sole maker", tools:"Resin printing, lost-wax casting, polishing", team:"Solo",
  what:"Model the ring in CAD, print it in castable resin, invest and burn out the pattern, cast in bronze, then cut, sand, and polish.",
  change:"Next: a benchtop lathe with a ring mandrel for turned rings in titanium and niobium."},
{ slug:"pen-plotter", type:"personal", kind:"personal", year:"2026", status:"In progress",
  title:"Custom Pen Plotter", outcome:"A no-firmware plotter that turns PDF drawings into machine paths.",
  summary:"X/Y stepper plotter driven directly from an ESP32, with a GUI that converts PDF or CAD drawings into toolpaths.",
  image:"images/plotter.jpg", role:"Sole designer", tools:"ESP32, steppers, Python", team:"Solo",
  what:"The bed moves on one axis and the pen on the other, with a servo for pen lift, limit switches for homing, and a frame that comes apart for storage. Target sheet size is at least ANSI C / A2."},
{ slug:"engine-assembly", type:"personal", kind:"personal", year:"2025",
  title:"Engine Assembly", outcome:"58 components, fully constrained to move realistically.",
  summary:"A SolidWorks engine assembly built from class engineering drawings.",
  image:"images/engine.jpg", role:"Designer", tools:"SolidWorks", team:"Solo",
  what:"[Engine type, key mates. Add an exploded view and a short motion clip.]"},
{ slug:"lock-projects", type:"personal", kind:"personal", year:"2025",
  title:"Tumbler Locks", outcome:"Several tumbler lock variants, each with a different mechanism.",
  summary:"Multiple versions of tumbler locks designed in different ways.",
  image:"images/locks.jpg", role:"Designer", tools:"CAD, 3D printing", team:"Solo",
  what:"[One line per variant: how its mechanism differs.]"},

/* Live demo of every feature. Hidden from lists; open project.html?p=example. Delete when done. */
{ slug:"example", draft:true, type:"flagship", kind:"personal", year:"2026", title:"Template example",
  outcome:"Demo", summary:"Shows cropping, a 3D model, steps, a gallery, and dropdowns.",
  image:{src:"images/hero.jpg",ratio:"21/9",x:30,y:60,zoom:1.4},
  role:"Role", tools:"Tools", team:"Solo", stats:{Mass:"1.2 kg"},
  problem:"Same photo, three crops: see the gallery.",
  process:[{h:"3D model step",p:"Drag to rotate, scroll to zoom.",image:{model:"https://modelviewer.dev/shared-assets/models/Astronaut.glb",ratio:"1/1"}},
           {h:"Cropped photo step",p:"ratio 3/2, shifted toward the top-left.",image:{src:"images/hero.jpg",ratio:"3/2",x:0,y:0}}],
  gallery:[{src:"images/hero.jpg",ratio:"1/1"},{src:"images/hero.jpg",ratio:"16/9",y:100},{src:"images/hero.jpg",ratio:"4/5",x:80,zoom:1.6}],
  drops:[{h:"Parts list (open by default)",open:true,table:[["Part","Qty"],["Bolt M3x10","12"]]},{h:"Files",links:[["Example link","files/resume.pdf"]]},{h:"Notes",list:["A bullet","Another bullet"]}]}
];

/* Fabrication page: one block per process. */
const FAB = [
 {h:"Casting and molding", t:"Lost-wax bronze casting (Modi-Bot, rings), silicone molds, and urethane casting.", images:["images/fab-casting.jpg"]},
 {h:"Machining", t:"Manual mill (stepped block), lathe (stepped spire), and CNC-machined foam for a SkillsUSA competition piece that qualified our team for state.", images:["images/fab-machining.jpg"]},
 {h:"Forming and finishing", t:"Vacuum forming, precise foam sculpting (a sphere from templated halves), and airbrushing with effect paints.", images:["images/fab-forming.jpg"]},
 {h:"Assembly and craft", t:"Steel scale-model kits with hundreds of parts, and a modified jewelry box with a velvet insert.", images:["images/fab-assembly.jpg"]}
];
