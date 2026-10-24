/* ============ EDIT THIS FILE TO CHANGE THE SITE ============
   Search for "[" to find placeholders that still need real info.
   Text can include HTML (links, <b>, <br>, even video <iframe>s).
   Image paths are relative to this folder, e.g. "images/enigma.jpg".
   A missing image shows a hatched "add photo" box, so nothing breaks. */

const SITE = {
  name: "Sahar Levy",
  role: "Mechanical engineering, Cal Poly Pomona",
  tagline: "I design, build, test, and iterate mechanisms, electromechanical systems, and more.",
  heroImage: "images/hero.jpg",
  imageDefaults: {home:"4/3", card:"4/3", hero:"16/9", step:"4/3", gallery:"4/3"},  // width/height ratios
  email: "levysahar2007@gmail.com",
  linkedin: "https://www.linkedin.com/in/sahar-l",
  resume: "files/resume.pdf",         
  buttons: [["View work","work.html"],["Resume","resume.html"],["Contact","mailto:levysahar2007@gmail.com"]],
  skills: [
    {h:"CAD and design", t:"SolidWorks, Fusion 360, mechanical and structural design."},
    {h:"Fabrication", t:"3D printing, laser cutting, bronze casting, silicone molding, manual mill and lathe."},
    {h:"Electronics and code", t:"Arduino, Python, sensor integration and motor control."}
  ], 
  about: {
    bio: ["I'm a mechanical engineering student at Cal Poly Pomona, with experience in CAD, additive manufacturing, and shop fabrication. I contribute to the Banshee VTOL UAV team, the Liquid Rocket Lab, and the IAM3D rover team, which placed first among 20 national teams at the ASME eFX Dallas competition. I am a Gene Haas Foundation Scholarship recipient and am seeking internships and professional experience in design, manufacturing, and mechanical engineering."],
    education: ["Cal Poly Pomona, B.S. Mechanical Engineering, Expected Graduation 2029","Irvine Valley College, Design, Model Making and Rapid Prototyping, 2024-2025"],
    activities: ["Banshee UAV Team","IAM3D Competition Team","Liquid Rocket Lab Additive Manufacturing Project", "American Society of Mechanical Engineers (ASME)","SkillsUSA (Woodbridge High School)"],
    awards: ["1st Place, ASME eFX Dallas (2025)","Gene Haas Foundation Scholarship (2025)","SkillsUSA Gold Chapter of Distinction (2025)","SkillsUSA Automated Manufacturing Technology State Qualifier (2025)"]
  }
};

/* One entry per project. featured:true shows it on the home page (in this order).
   kind: "team" or "personal" (work-page filter).  type: "flagship", "team", or "personal"
   picks the page template (headings and fields are in js/site.js, TPL).
   Any field you leave out is simply skipped. Full field guide: docs/GUIDE.md
   Images can be "images/a.jpg" or {src, ratio, x, y, zoom} or {model:"models/a.glb"}. */
const PROJECTS = [
/*{ slug:"banshee-uav", type:"team", kind:"team", featured:false, year:"2025-present",
  title:"Banshee VTOL UAV", outcome:"Structural fabrication for a VTOL UAV",
  summary:"Carbon fiber and machined structural components for a vertical takeoff and landing unmanned aircraft.",
  image:{src:"images/banshee.jpg", y:25}, role:"Manufacturing", tools:"Carbon fiber, resin infusion, machining", team:"[team size]",
  problem:"[What the aircraft must do and the structural requirements you worked to.]",
  contribution:["Fabricate structural components using resin-infused carbon fiber layup: [N parts / subassemblies].","[Mold prep, vacuum bagging, trimming, finishing: whichever you did.]","Coordinate with aerodynamics, avionics, and flight test subteams to check fit and mass budget."],
  process:[{h:"[Layup and infusion]",p:"[What you did and why.]",image:"images/banshee-1.jpg"},{h:"[Machining and assembly]",p:"[What you did and why.]",image:"images/banshee-2.jpg"}],
  result:"[Outcome, test results, flight status.]",
  gallery:["images/banshee-3.jpg","images/banshee-4.jpg"],
  drops:[{h:"Sponsors",p:"Team sponsored by Lockheed Martin, Southern California Edison, Air Force Research Laboratory, Robotis, and General Atomics."}]},
*/

{ slug:"lrl", type:"team", kind:"team", featured:true, year:"2026-present",
  title:"Liquid Rocket Lab", outcome:"Verification of 3D printed metal parts",
  summary:"Printing and then verifying material properties of metal 3D printed parts, with the eventual goal of integration into launch vehicles and rocket engines",
  image:{src:"images/lrl.jpg", ratio:"1/1", w:"75%"}, hero:{w:"50%"}, role:"Additive Manufacturing Project", tools:"Markforged Metal X ecosystem, tensile tester, Fusion360", team:"5, Total 30?",
  problem:"Previous years had failed to replicate the published material properties, making their use in rocket systems impossible",
  contribution:["Model testing samples and develop procedures adherent to ASTM specifications."],
  process:[{h:"[Layup and infusion]",p:"[What you did and why.]",image:"images/lrl-1.jpg"},{h:"[Machining and assembly]",p:"[What you did and why.]",image:"images/lrl-2.jpg"}],
  result:"[Twice yearly reports with presentations to sponsors.]",
  gallery:["images/lrl-3.jpg","images/lrl-4.jpg"],
  drops:[{h:"Sponsors",p:"Team sponsored by "}]},

{ slug:"iam3d-rover", type:"team", kind:"team", featured:true, year:"2025-present",
  title:"IAM3D Rover Chassis", outcome:"Part of the team that won 1st place at ASME eFX Dallas",
  summary:"Land rover chassis designed in CAD and built from 3D-printed thermoplastics.",
  image:{src:"images/rover.jpg", y:60, x:0 }, role:"Chassis design", tools:"SolidWorks, Fusion 360, 3D printing", team:"18 people", stats:{Result:"1st place, eFX Dallas 2025"},
  problem:"[Competition rules, mission, and the strength and weight limits.]",
  contribution:["Designed chassis structures balancing strength, weight, and mission requirements: [X% mass reduction].","Printed and tested [N] iterations of structural parts."],
  process:[{h:"[Design iteration]",p:"[Key decision and why.]",image:"images/rover-1.jpg"}],
  result:[{ h:"Result", p:"First place at eFX Dallas of 20 teams.", image:{model:"models/rover.glb", ratio:"1/1"}}], change:"[1-3 honest sentences.]", 
  drops:[{h:"Parts list",table:[["Part","Material","Process"],["[Chassis rail]","[PETG]","FDM"]]}]},

{ slug:"enigma-replica", type:"flagship", kind:"personal", featured:true, year:"2026", status:"In progress",
  title:"Enigma Machine Replica", outcome:"A mechanical and electrical replica of the Enigma cipher machine",
  summary:"Rotor stepping, patch panel, keyboard and lamp board, all designed from scratch, designed in Fusion360 and 3D printed.",
  image:"images/enigma.jpg", role:"Sole designer", tools:"Fusion360, 3D printing",
  stats:{"3D-printed components":"temporary", "Total components":"temporary"},
  problem:{h:"The motivation", bullets:false,  text:"To reproduce the World War II Enigma's behavior as accurately as possible with working mechanisms: stepping rotors, a keyboard, a plugboard, and a lamp board."},
  contribution:{h:"What I built", bullets:true,  text:["Designed each mechanism in Fusion360 with manufacturing and assembly in mind.","Built a motion study model to verify the geometry of stepping wheels and pawls.","Iterated countless times both virtually and with physical parts.", "Integrated with other components, such as: pogo pins, banana plugs, and lightbulbs"]},
  process:[
   {h:"'Scrambler Assembly'",list:["Rotor: A complex assembly designed with DFMA in mind. Primary components include a rotor wheel for hand adjustment of rotational position, a ratchet wheel for mechanical adjustment of rotational position, and pin plates to hold pogo pins and contact pads to allow current travel at all rotational positions", "Reflector: The end piece at the left end of the scrambler assembly that takes current in from one pin and outputs it from a different pin. Also able to move back and forth about 10mm to ensure pin contact and lock rotors in place", "Stator: The static piece at the right end of the assembly that takes in input wires from the rest of the machine and outputs it into contact pads", "Assembly: Brings 3 rotors, a reflector and a stator together, with an additional indexer mechanism to keep each of the rotors in one of 26 discrete positions"],image:["images/enigma-scrambler.jpg", "images/enigma-rotor.jpg"]},
   {h:"Input Board",p:"3D-printed housings with a spring contact triggered by plug insertion depth, so each letter bridges to itself until a plug is inserted.",image:"images/enigma-input.jpg"},
   {h:"Plug Board",p:"temporary.",image:"images/enigma-plug.jpg"},
   {h:"Lamp Board",p:"temporary", image:"images/enigma-lamp.jpg"}],
  result:"[Fill in once built.]", change:"[Fill in once built.]",
  gallery:["images/enigma-1.jpg","images/enigma-2.jpg", {model:"models/enigma.glb",ratio:"1/1"}],
  drops:[{h:"Parts list",table:[["Part","Qty","Source"],["E10 screw-base bulbs","26+","[AliExpress]"],["Copper strip","[N]","[source]"],["Banana plugs and sockets","[N]","[source]"],["3D-printed parts","[N]","Printed in [material]"]]},
   {h:"Files",links:[["Rotor CAD (STEP)","files/enigma-rotor.step"],["Printable parts (ZIP)","files/enigma-stl.zip"]]}]},

/*{ slug:"biomimetic-hand", type:"flagship", kind:"personal", featured:true, year:"2026", status:"In progress",
  title:"Biomimetic Robotic Hand", outcome:"A biomimetic cable actuated hand",
  summary:"A realistic mechanical hand driven by servo-actuated tendons.",
  image:"images/hand.jpg", role:"Sole designer", tools:"Arduino, Python, Fusion 360, 3D Printer",
  stats:{"3D-printed components":"temporary", "Total components":"temporary"},
  problem: {h:"The motivation", bullets:false,  text:"temporary"},
  contribution:{h:"The goal", bullets:true, text:["A primarily 3D printed analog of a human hand with realistic joints and degrees of freedom", "Servos actuating multiple tendon-like cables per finger", "Controlled either through a digital GUI or by emulating a worn glove"]},
  process:[
   {h:"Inital 1-finger design",p:"temporary",image:"images/hand-finger.jpg"},
   {h:"Initial software and GUI",p:"temporary",image:"images/hand-gui.jpg"},
   {h:"5 finger integration and wrist design",p:"temporary",image:"images/hand-wrist.jpg"},
   {h:"Input glove",p:"temporary",image:"images/hand-glove.jpg"}],
  analysis:"temporary",
  result:"temporary", change:"temporary",
  gallery:["images/hand-1.jpg","images/hand-2.jpg"],
  drops:[{h:"Parts list",table:[["Part","Qty"]]}]},
*/

{ slug:"ring-casting", type:"personal", kind:"personal", featured:true, year:"2025",
  title:"Ring Making and Casting", outcome:"Resin-printed pattern cast in bronze and hand finished.",
  summary:"A complete process for hand-making making a ring: resin print, investment, bronze casting, polishing.",
  image:{src:"images/casting.jpg", y:75}, role:"Sole maker", tools:"Resin printing, lost-'wax' casting, polishing",
  what:{h: "What I made", bullets:false, text:["3D print a ring in resin, post process, attache wax sprues, invest and burn out the pattern, cast in bronze, then cut, sand, and polish."]},
    process:[
   {h:"Resin Form",list:["Find a fitting design and scale it to the right dimensions", "3D print the design out of resin", "Wash in isopropyl alchohol and then cure in a UV chamber", "Remove supports, file and sand to achieve final shape"],image:["images/ring-1.jpg", "images/ring-2.jpg"]},
   {h:"Wax treeing",list:["Melting wax sprues onto the ring to allow smooth flow of molten metal", "Attaching the sprued ring to a sprue base"],image:"images/ring-tree.jpg", fill:true},
   {h:"Investment",list:["Mixing fine investment plaster and pouring over sprued ring", "Putting in a vaccum chamber to draw air bubbles out", "Place in a pressure pot to cure to ensure that no bubbles form"],image:"images/ring-plaster.jpg", fill:true},
   {h:"Casting",list:["Heating up investment flask in a furnace to burn out form and heat up investment","Heat up silica bronze casting grain in a crucible", "Place investment flask on a vacuum casting machine, activate vacuum and pour molten bronze in", "Wait until bronzez is a light red color, then dunk in water to dissolve plaster and cool bronze"],image:"images/ring-casting.jpg", fill:true},
   {h:"Processing",list:["Use jewelers saw to seperate ring from extra material", "Use a dremel with carving bit to remove as much excess material as safely possible", "Use a sanding drum bit, and manual sanding and fiiling, to bring the ring to the final shape", "Use polishing wheels and polishing compound to bring the ring to a high polish"],image:["images/ring-processing.jpg","images/ring-final.jpg"], fill:true}],
  change:"The ring ended up being the wrong size, so printing it slightly thicker than desired to later fine-tune would be better. In addition, there were some minor casting defects, later made worse when I tried to smooth them with a Dremel. Perhaps some part of the casting process could be improved, or thickening the ring to prevent defects. This project inspired me to buy a benchtop wood lathe to turn wooden and potentially soft metal rings that can be much more fine-tuned and detailed, along with a larger variety of materials."},

{ slug:"engine-assembly", type:"personal", kind:"personal", year:"2025",
  title:"Engine Assembly", outcome:"58 components, fully constrained to move realistically.",
  summary:"A SolidWorks engine assembly built from class engineering drawings.",
  image:"images/engine.png", role:"Designer", tools:"SolidWorks",
  what:"[Engine type, key mates. Add an exploded view and a short motion clip.]"},

{ slug:"lock-projects", type:"personal", kind:"personal", year:"2025",
  title:"Tumbler Locks", outcome:"Several tumbler lock variants, each with a different mechanism.",
  summary:"Multiple versions of tumbler locks designed in different ways.",
  image:{src:"images/lock-2.png", zoom:0.9}, role:"Designer", tools:"TinkerCAD, Fusion360, 3D printer",
  process:{h:"Iterations", text:[
    {h:"First Design", p:"description", image:"images/lock-1.png", fill:true},
    {h:"Second Design", p:"description", image:"images/lock-2.png", fill:true},
    {h:"Third Design", p:"description", image:"images/lock-3.png", fill:true}
  ]}},

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
 {h:"Casting and molding", t:"Lost-wax bronze casting(more detail in ring project), silicone molds, and urethane casting.", images:["images/lego.jpg", "images/wax.jpg"]},
 {h:"Machining", t:"Manual mill, lathe, and CNC-machined foam for a SkillsUSA competition piece that qualified our team for state.", images:["images/mill.jpg", "images/lathe.jpg"]},
 {h:"Forming and finishing", t:"Vacuum forming, precise foam sculpting, and airbrushing with effect paints.", images:[{src: "images/sphere.jpg", zoom:0.8}, "images/paint.jpg"]},
 {h:"Assembly and craft", t:"Steel scale-model kits with hundreds of parts, and a modified jewelry box with a velvet insert.", images:["images/metal-earth.jpg", "images/box.jpg"]}
];
