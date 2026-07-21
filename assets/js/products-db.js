/**
 * Techno Sales India - Product Database
 * Contains all 60+ industrial machinery and tooling products across 6 primary categories.
 */

const PRODUCTS_DB = [

  // --- HAND TOOLS ---
  {
    slug: "adjustable-spanner",
    name: "Adjustable Spanner",
    category: "hand-tools",
    categoryName: "Hand Tools",
    desc: "Chrome Vanadium heavy-duty adjustable spanner wrench with jaw scale markings and non-slip rubber grip handles.",
    features: ["Length options: 6, 8, 10, 12 inches", "Finish: Chrome plating rust proof", "Jaw Opening: up to 38mm", "Standards: DIN 3117"],
    applications: ["General mechanical maintenance", "Pipe fittings tightening", "On-site machine assembly"],
    image: "assets/img/adjustable_spanner.png"
  },
  {
    slug: "pliers",
    name: "Pliers",
    category: "hand-tools",
    categoryName: "Hand Tools",
    desc: "Combination pliers with heavy insulated handles, induction hardened cutters, and textured gripping zone jaws.",
    features: ["Size: 8 inches", "Insulation: 1000V rated VDE", "Cutter hardness: 62 HRC", "Material: Forged steel alloy"],
    applications: ["Electrical wire strip/cut", "Holding round parts", "General workshop maintenance"],
    image: "assets/img/pliers.png"
  },
  {
    slug: "mini-pliers",
    name: "Mini Pliers",
    category: "hand-tools",
    categoryName: "Hand Tools",
    desc: "Precision micro pliers (long nose, bent nose, end cutter) for delicate assembly work and electronic component placement.",
    features: ["Set: 5 mini pliers kit", "Return spring: Integrated double-leaf", "Length: 4.5 inches avg", "Handle: Soft touch vinyl comfort"],
    applications: ["Electronics wire cutting", "Small jig assembly setups", "Fine calibration adjustments"],
    image: "assets/img/mini_pliers.png"
  },
  {
    slug: "screw-driver",
    name: "Screw Drivers & sets",
    category: "hand-tools",
    categoryName: "Hand Tools",
    desc: "Industrial magnetic tip screwdriver sets with hard acetate handles, containing flat-head and Phillips types.",
    features: ["Kit count: 8 screwdrivers package", "Tip: Magnetic black phosphate tips", "Shaft: SVCM steel hex blades", "Handle: Impact-resistant dual zone"],
    applications: ["Control cabinet panel wiring", "Machine panel detachment", "General assembly fastening"],
    image: "assets/img/screw_driver.png"
  },
  {
    slug: "screwdriver-bits",
    name: "Screw Driver Bits & sets",
    category: "hand-tools",
    categoryName: "Hand Tools",
    desc: "S2 alloy steel industrial screwdriver bits and quick-release magnetic adapters, compatible with power screwdrivers.",
    features: ["Set count: 32 bits case", "Bit Type: Torx, Hex, Pozidriv, Slotted, PH", "Hex Shank: 1/4 inch universal", "Adapter: Quick-change lock bit holder"],
    applications: ["Pneumatic driver continuous assembly", "Fastener drive batches", "Electric impact bit replacements"],
    image: "assets/img/screwdriver_bits.png"
  },
  {
    slug: "tool-sets",
    name: "Tool Sets",
    category: "hand-tools",
    categoryName: "Hand Tools",
    desc: "Comprehensive engineering service tool set housed in a robust three-tier steel cantilever metal box.",
    features: ["Items Count: 85 pieces", "Storage: Heavy metal powder-coated box", "Included tools: Socket set, spanners, pliers, hex keys", "Material: Grade A Chrome Vanadium"],
    applications: ["Industrial maintenance technicians", "Field repair engineers kit", "On-site commissioning setups"],
    image: "assets/img/tool_sets.png"
  },
  {
    slug: "sockets",
    name: "Sockets",
    category: "hand-tools",
    categoryName: "Hand Tools",
    desc: "Individual 1/2-inch drive impact grade 6-point sockets designed for high torque pneumatic impact wrenches.",
    features: ["Drive Size: 1/2 inch", "Points: 6-point flank drive design", "Material: Chrome Molybdenum (Cr-Mo) steel", "Finish: Black phosphate coating"],
    applications: ["Heavy machinery bolt assembly", "Pneumatic impact driver wrenching", "Piping flange bolt tightening"],
    image: "assets/img/sockets.png"
  },
  {
    slug: "socket-accessories",
    name: "Socket Accessories",
    category: "hand-tools",
    categoryName: "Hand Tools",
    desc: "Socket extension bars, universal joint adapters, and sliding T-bars to facilitate access to deep-seated industrial fasteners.",
    features: ["Lengths: 3, 5, 10 inch extensions", "Joint Type: Ball-lock universal pivot", "Finish: Mirror polished chrome", "Drive Size Compatibility: 1/2 and 3/8 inch"],
    applications: ["Deep pocket bolt tightening", "Off-angle machine joint access", "Automotive block bolt setups"],
    image: "assets/img/socket_accessories.png"
  },
  {
    slug: "socket-sets",
    name: "Socket Sets",
    category: "hand-tools",
    categoryName: "Hand Tools",
    desc: "Professional 24-piece socket set containing high-torque 12-point sockets and a 72-tooth micro teardrop ratchet handle.",
    features: ["Socket range: 8mm to 32mm", "Ratchet Type: 72-teeth quick release", "Material: Cr-V steel drop-forged", "Case: Blow molded impact case"],
    applications: ["Heavy engine dismantling", "Piping assembly installations", "Plant equipment maintenance servicing"],
    image: "assets/img/socket_sets.png"
  },
  {
    slug: "torque-wrench",
    name: "Torque Wrench",
    category: "hand-tools",
    categoryName: "Hand Tools",
    desc: "Precision click-type industrial micrometer torque wrench with locking collar and certified accuracy calibration certificates.",
    features: ["Torque Range: 40-200 Nm", "Accuracy: +/- 3% CW precision", "Scale: Laser engraved Nm / Ft-Lb", "Certificate: Calibration trace sheet included"],
    applications: ["Critical machinery engine head bolts", "CNC structural machine anchor installation", "Flange gasket bolt tensioning"],
    image: "assets/img/torque_wrench.png"
  },
  {
    slug: "pipe-wrenches",
    name: "Pipe Wrenches & Vice",
    category: "hand-tools",
    categoryName: "Hand Tools",
    desc: "Heavy-duty cast iron straight pipe wrench paired with a tabletop pipe chain vice for structural piping work.",
    features: ["Wrench Size: 18 inch length", "Jaw Style: Hardened alloy hook/heel jaws", "Vice Capacity: Holds pipes up to 4 inches", "Jaw profile: Self-cleaning teeth"],
    applications: ["Plant piping flange installation", "Heavy plumbing maintenance", "Threaded pipe cutting clamping"],
    image: "assets/img/pipe_wrenches.png"
  },
  {
    slug: "hammers",
    name: "Hammers",
    category: "hand-tools",
    categoryName: "Hand Tools",
    desc: "Professional engineer ball-pein hammers and copper-head non-sparking mallet hammers with fiberglass shafts.",
    features: ["Weights: 500g, 1000g options", "Shaft: Shock-absorbing dual-core fiberglass", "Head: Drop forged carbon steel hardened", "Safety: Solid wedged head lock pin"],
    applications: ["Keyway metal centering fitting", "Heavy structural steel positioning", "Tool room metal stamp punch striking"],
    image: "assets/img/hammers.png"
  },
  {
    slug: "clamps",
    name: "Clamps",
    category: "hand-tools",
    categoryName: "Hand Tools",
    desc: "Forged steel C-clamps and heavy-duty adjustable F-clamps featuring high-torque sliding swivel pads.",
    features: ["Opening Cap: 150mm to 300mm", "Clamping force: up to 12 kN", "Screw Thread: Acme thread low friction", "Pad type: Ball swivel self-leveling"],
    applications: ["Industrial welding fabrication jigs", "Steel beam structural holding", "Glue bonding sheet clamps"],
    image: "assets/img/clamps.png"
  },
  {
    slug: "wheel-spanners",
    name: "Wheel Spanners & Sets",
    category: "hand-tools",
    categoryName: "Hand Tools",
    desc: "Heavy-duty L-type and cross 4-way wheel spanners with deep socket ends for high torque manual vehicle hub tightening.",
    features: ["Sizes socket: 17, 19, 21, 23mm", "Material: Solid carbon steel hex rod", "Finish: Zinc passivated coating", "Welds: Reinforced central weld zone"],
    applications: ["Logistics fleet wheel swap maintenance", "Heavy transport trailer service", "High leverage nut disassembly"],
    image: "assets/img/wheel_spanners.png"
  },

  {
    slug: "spanners",
    name: "Spanners",
    category: "hand-tools",
    categoryName: "Hand Tools",
    desc: "Set of double-ended open ring spanners and combination wrench sets with satin chrome finishes and thin-wall box ends.",
    features: ["Set range: 6mm to 32mm", "Count: 26 pieces combination spanners", "Standard: DIN 3113", "Finish: Satin anti-slip finish"],
    applications: ["Industrial plant machinery maintenance", "B2B automotive production assembly", "Workshop mechanical alignment servicing"],
    image: "assets/img/spanners.png"
  },
  {
    slug: "chisels",
    name: "Chisels",
    category: "hand-tools",
    categoryName: "Hand Tools",
    desc: "Professional wood chisels and flat cold chisels featuring high-carbon steel blades and ergonomic impact-resistant handles.",
    features: ["Blade material: High-carbon alloy steel", "Bevel edge: Ground to 25 degrees for sharpness", "Handle: Ergonomic impact-resistant splitproof grip", "Set count: Various sizes included"],
    applications: ["Woodworking and timber carving", "Mortising and cabinetry joints", "General workshop scraping and cleanups"],
    image: "assets/img/chisels.png"
  },
  {
    slug: "punches",
    name: "Punches",
    category: "hand-tools",
    categoryName: "Hand Tools",
    desc: "Industrial pin punches, center punches, and drift punch sets made of knurled chrome vanadium steel for marking and pin removal.",
    features: ["Set count: 5 piece professional pin punch set", "Material: Forged and heat-treated alloy steel", "Tip type: Hardened precision ground points", "Grip: Knurled non-slip body for secure hold"],
    applications: ["Marking drill center points on metal", "Removing hinge pins, roll pins, or dowels", "Metal sheet layout alignment work"],
    image: "assets/img/punches.png"
  },
  {
    slug: "magnetic-products",
    name: "Magnetic Products",
    category: "hand-tools",
    categoryName: "Hand Tools",
    desc: "Magnetic pickup tools, magnetic parts trays, and portable magnetic base welding arrow clamps.",
    features: ["Pickup capacity: up to 5kg pull", "Base tray: Double magnet rubber coated", "Arrow angles: 45, 90, 135 degrees", "Telescopic length: extends to 28 inches"],
    applications: ["Fallen machine bolt retrieval", "Small assembly parts container", "Pre-welding angle alignment setups"],
    image: "assets/img/magnetic_products.png"
  },
  {
    slug: "cutters",
    name: "Cutters",
    category: "hand-tools",
    categoryName: "Hand Tools",
    desc: "Heavy-duty wire cable rope cutters and manual bolt croppers with drop-forged high carbon steel cutting heads.",
    features: ["Cropper Size: 24 inch bolt cutter", "Cutting Capacity: 10mm steel rod max", "Handle leverage: Ergonomic long handles", "Adjustment: Jaw gap micro screws"],
    applications: ["Steel reinforcing wire cutting", "Reinforced chain lock cuts", "Heavy duty packaging band cutting"],
    image: "assets/img/cutters.png"
  },
  {
    slug: "hacksaw-blades",
    name: "Hacksaw Blades",
    category: "hand-tools",
    categoryName: "Hand Tools",
    desc: "Flexible bi-metal hacksaw blades with high speed steel teeth electron-beam welded to spring steel backings.",
    features: ["Blade Length: 12 inches (300mm)", "Teeth Count: 18 / 24 / 32 TPI options", "Material: Bi-Metal M2 HSS edge", "Pack size: 50 blades industrial box"],
    applications: ["Manual pipe cut workshop", "Mild steel bars resizing", "Alloy channel manual cuts"],
    image: "assets/img/hacksaw_blades.png"
  },
  {
    slug: "allen-keys",
    name: "Allen Keys & Sets",
    category: "hand-tools",
    categoryName: "Hand Tools",
    desc: "Ball-end hex key wrench sets in metric and imperial sizes, made of premium heat-treated Protanium steel.",
    features: ["Size Count: 9 key hex L-wrench set", "Size range: 1.5mm to 10mm metric", "Tip: Ball end allows 25 degree angle entry", "Holder: Snap-lock labeled index box"],
    applications: ["CNC insert lock screw adjustment", "Milling fixture T-slot block bolt fit", "Industrial machinery enclosure panels"],
    image: "assets/img/allen_keys.png"
  },
  {
    slug: "gear-pullers",
    name: "Gear Pullers",
    category: "hand-tools",
    categoryName: "Hand Tools",
    desc: "Drop forged 2-jaw and 3-jaw reversible gear puller assemblies for non-destructive removal of pulley wheels and gears.",
    features: ["Spread Capacity: 150mm to 300mm", "Max Load Force: up to 10 Tons", "Jaw profile: reversible internal/external claw", "Lead Screw: Fine-pitch heat-treated alloy"],
    applications: ["Electrical motor bearing extraction", "Gearbox drive pulley replacement", "Flywheel removal maintenance servicing"],
    image: "assets/img/gear_pullers.png"
  },
  {
    slug: "trolley",
    name: "Tools Trolley",
    category: "hand-tools",
    categoryName: "Hand Tools",
    desc: "Heavy-duty 7-drawer industrial tool cabinet trolley on caster wheels, equipped with central cylinder key lock blocks.",
    features: ["Dimensions: 950x700x480mm", "Load Capacity: 450kg total rating", "Drawer Slides: Ball-bearing soft-closing", "Wheels: 5-inch polyurethane locking casters"],
    applications: ["CNC work station tool storage", "Assembly line technician cabinet", "Mobile maintenance repair station"],
    image: "assets/img/trolley.png"
  },
  {
    slug: "spirit-level",
    name: "Spirit Level",
    category: "hand-tools",
    categoryName: "Hand Tools",
    desc: "Precision aluminum box spirit level with milled surface base, shock-absorbing end caps, and high-visibility acrylic vials.",
    features: ["Length: 600mm", "Accuracy limit: 0.5 mm/m standard position", "Vials: Vertical, horizontal, and 45 degree angle", "Magnet: Rare earth magnet base strip"],
    applications: ["Machine tool lathe leveling", "Precision structural frames assembly", "Base plate anchor alignment check"],
    image: "assets/img/spirit_level.png"
  },
  {
    slug: "cutting-blades",
    name: "Cutting Blades",
    category: "hand-tools",
    categoryName: "Hand Tools",
    desc: "Diamond segmented and TCT circular saw cutting blades for manual power tools.",
    features: ["Blade Diameter: 4, 7, 12 inches", "Arbor Hole Fit: 20mm/22.23mm rings", "Max RPM limit: 13,000 RPM", "Segment height: 10mm segment height"],
    applications: ["Angle grinder structural cuts", "Concrete/brick manual channel saws", "Fabrication metal edge trimming"],
    image: "assets/img/cutting_blades.png"
  },
  {
    slug: "non-sparking",
    name: "Non Sparking Tools",
    category: "hand-tools",
    categoryName: "Hand Tools",
    desc: "Beryllium Copper (Be-Cu) and Aluminum Bronze (Al-Bronze) safety tools for explosive environments.",
    features: ["Material: Grade-A Beryllium Copper alloy", "Non-Magnetic: Safe for MRI and electronic labs", "Certificates: ATEX zone explosive test pass", "Set count: 12 key spanners and wrenches"],
    applications: ["Petrochemical refinery plant repair", "Ammunition factories maintenance", "Gas storage tankers pipeline service"],
    image: "assets/img/non_sparking.png"
  },

  // --- HSS CUTTING TOOLS ---

  {
    slug: "parallel-shank",
    name: "Parallel Shank Drills",
    category: "cutting-tools",
    categoryName: "HSS Cutting Tools",
    desc: "Jobber series parallel shank twist drills made of high speed steel M2 grade, precision ground for fast chip evacuation.",
    features: ["Diameter Range: 1.0mm to 13.0mm", "Material: HSS M2 / HSS M35 Cobalt 5%", "Helix angle: 30 degree helix", "Standards: DIN 338"],
    applications: ["General sheet metal drilling", "Job shops batch drill holes", "Machined components hole sizing"],
    image: "assets/img/port_carbide_drills.png"
  },
  {
    slug: "taper-shank",
    name: "Taper shank Drills",
    category: "cutting-tools",
    categoryName: "HSS Cutting Tools",
    desc: "Morse taper shank twist drills designed to fit directly into machine spindles, offering massive drill-hole sizing torque.",
    features: ["Shank Range: MT-1 to MT-5", "Diameter options: 10.0mm to 75.0mm", "Web thickness: gradual taper reinforcement", "Standard: DIN 345"],
    applications: ["Radial type drill machine holes", "Lathe machine tailstock boring", "Heavy structural steel drilling"],
    image: "assets/img/taper_shank_drill.jpg"
  },
  {
    slug: "center-drills",
    name: "Center drills",
    category: "cutting-tools",
    categoryName: "HSS Cutting Tools",
    desc: "Standard 60-degree pilot center drill bits to initiate highly precise starting holes on metal stock shafts before turning.",
    features: ["Body Diameter: BS-1 to BS-6 sizes", "Countersink Angle: 60 degrees standard", "Material: Solid HSS ground", "Design: Double ended drill tips"],
    applications: ["Lathe shaft center countersink pilot", "Milling coordinate start marks", "V-block shaft end preparation"],
    image: "assets/img/center_drill.jpg"
  },
  {
    slug: "shell-core",
    name: "Shell Core Drills",
    category: "cutting-tools",
    categoryName: "HSS Cutting Tools",
    desc: "Arbor-mounted HSS shell core drills designed to enlarge and finish pre-drilled or cast holes in heavy forgings.",
    features: ["Outer Diameter: 50mm to 120mm", "Arbor fit: Standard spline slot keyways", "Flutes: 4 or 6 helical flutes", "Material: Geared HSS core"],
    applications: ["Cast iron pipe core enlargements", "Forged link hole reaming", "Structural block core sizing"],
    image: "assets/img/shell_core_drill.jpg"
  },
  {
    slug: "hss-reamers",
    name: "HSS Reamers",
    category: "cutting-tools",
    categoryName: "HSS Cutting Tools",
    desc: "Parallel and taper hand/machine reamers with straight and helical flutes, engineered for precise H7 size tolerances.",
    features: ["Tolerance: Class H7 limit guarantee", "Type: Chucking, Hand, Morse Taper reamers", "Helix: 7 degree left-hand helix options", "Sizes: 3.0mm to 50.0mm"],
    applications: ["Automotive engine guide resizing", "Machine pin holes H7 tolerance finish", "Bushing cylinder final reams"],
    image: "assets/img/cat_cutting_tools.png"
  },
  {
    slug: "side-face",
    name: "HSS Side & Face Milling cutters",
    category: "cutting-tools",
    categoryName: "HSS Cutting Tools",
    desc: "Disc-type milling cutters with cutting teeth on both face and circumference, ideal for deep slotting operations.",
    features: ["Diameter Range: 75mm to 200mm", "Width sizes: 6.0mm to 25.0mm width", "Arbor slot: standard ISO key keyway", "Tooth profile: staggered tooth design"],
    applications: ["Deep keyways cutting milling", "Plate spline side milling", "Cast block perimeter slitting"],
    image: "assets/img/side_face_cutter.jpg"
  },
  {
    slug: "slot-milling",
    name: "HSS Slot Milling Cutters",
    category: "cutting-tools",
    categoryName: "HSS Cutting Tools",
    desc: "Two-flute screwin and straight-shank end mills designed specifically for plunging and milling keyways.",
    features: ["Shank Type: Welded flat / Screwed threaded", "Flutes: 2 helical flutes center cutting", "Diameter: 3.0mm to 32.0mm", "Tolerance: e8 keyway tolerance limit"],
    applications: ["Shaft keyways slot milling", "Plunge slot manufacturing", "Closed-ended slot profiles"],
    image: "assets/img/slot_milling_cutter.jpg"
  },
  {
    slug: "hss-taps",
    name: "HSS Taps",
    category: "cutting-tools",
    categoryName: "HSS Cutting Tools",
    desc: "Set of metric/inch hand and machine taps (taper, second, bottoming) for precision internal threading in iron and steel.",
    features: ["Thread Sizes: M2 to M48 standard", "Grade: HSS M2 / Cobalt thread grinding", "Helix: Spiral point for thru hole, Spiral flute for blind", "Tolerance: ISO 2 (6H) class"],
    applications: ["Automotive engine block blind hole thread", "Structural steel flange tapping", "General workshop thread refurbishment"],
    image: "assets/img/hss_taps.jpg"
  },
  {
    slug: "carbide-tipped",
    name: "Carbide Tipped Drills",
    category: "cutting-tools",
    categoryName: "HSS Cutting Tools",
    desc: "Composite twist drills featuring high-grade tungsten carbide tips brazed to tough tool steel bodies for drilling hardened steel.",
    features: ["Diameter: 3.0mm to 20.0mm", "Tip Hardness: 90 HRA tungsten carbide", "Shank: Straight parallel shank", "Tip point angle: 118 degrees"],
    applications: ["Cast iron batch drilling", "Hardened tool steel repair drills", "Abrasive composite material drilling"],
    image: "assets/img/carbide_tipped_drill.jpg"
  },
  {
    slug: "milling-cutters",
    name: "HSS Milling Cutters",
    category: "cutting-tools",
    categoryName: "HSS Cutting Tools",
    desc: "General purpose multi-flute cylindrical end mills made of HSS for profile milling and metal surface finishing.",
    features: ["Flutes: 4 or 6 helical flutes", "Taper Shank: MT or straight shank versions", "Helix angle: 35 degrees", "Coatings: Bright finished / TiN gold coat"],
    applications: ["Profile wall milling", "Step profile finishing", "Component flat surface milling"],
    image: "assets/img/hss_milling_cutters.jpg"
  },
  {
    slug: "double-angle",
    name: "Double Angle Milling Cutter",
    category: "cutting-tools",
    categoryName: "HSS Cutting Tools",
    desc: "Shaped milling cutters with symmetric double angle profiles, perfect for milling chamfers, V-grooves, and thread profiles.",
    features: ["Included angle: 45 / 60 / 90 degrees", "Mount: Arbor driven center hole", "Tooth pattern: straight form relieved teeth", "Diameter: 50mm to 100mm"],
    applications: ["Prismatic V-way guideway milling", "Beveling edge weld prep", "Thread mill profiling notches"],
    image: "assets/img/double_angle_cutter.jpg"
  },
  {
    slug: "keyway",
    name: "Keyway Milling Cutter",
    category: "cutting-tools",
    categoryName: "HSS Cutting Tools",
    desc: "Woodruff key seat cutters with staggered teeth, designed to mill semi-circular key slots in spindles and drive shafts.",
    features: ["Diameter: Woodruff standards 10mm to 45mm", "Shank: Weldon shank straight steel", "Flutes: Staggered T-slot tooth profile", "Standard: DIN 850"],
    applications: ["Woodruff key slot milling", "Narrow T-slots side milling", "Shaft keyseat preparation batches"],
    image: "assets/img/keyway_cutter.jpg"
  },
  {
    slug: "concave-convex",
    name: "Concave & Convex",
    category: "cutting-tools",
    categoryName: "HSS Cutting Tools",
    desc: "Form-relieved milling cutters with precise concave or convex profile radii to mill perfect half-round ridges or grooves.",
    features: ["Radius size range: R1 to R20 mm", "Profile: Form relieved for constant shape after grind", "Arbor fitting: standard keyways bore", "Tooth style: straight teeth"],
    applications: ["Shaft edge rounding", "Machine panel grooves profiling", "Form-relieved gear finishing milling"],
    image: "assets/img/concave_convex_cutter.jpg"
  },
  {
    slug: "step-drill",
    name: "Step Drill",
    category: "cutting-tools",
    categoryName: "HSS Cutting Tools",
    desc: "HSS spiral-fluted step cone drill bits designed to drill multiple hole sizes in thin sheet metal using a single tool.",
    features: ["Sizes: 4mm to 32mm in 15 steps", "Flute: Spiral flute smooth chip flow", "Shank: 3-flat shank anti-slip", "Coating: Titanium Nitride coated"],
    applications: ["Control panel sheet metal layout holes", "Thin brass pipe entry holes", "Alloy frame electrical passage holes"],
    image: "assets/img/step_drill.jpg"
  },
  {
    slug: "t-slot",
    name: "T-Slot Cutters",
    category: "cutting-tools",
    categoryName: "HSS Cutting Tools",
    desc: "Specialized milling cutters designed to mill standard machine table T-slots, featuring staggered teeth for efficient chip exhaust.",
    features: ["T-slot size fit: 12mm, 14mm, 18mm, 22mm tables", "Shank: Weldon flat drive shank", "Flutes: Staggered side teeth layout", "Standard: DIN 851"],
    applications: ["Milling table T-slot slots cutting", "Structural fixture guide slots", "Special clamp track milling"],
    image: "assets/img/t_slot_cutter.jpg"
  },
  {
    slug: "broaches",
    name: "HSS Broaches",
    category: "cutting-tools",
    categoryName: "HSS Cutting Tools",
    desc: "Push-type keyway broach sticks in metric sizes, designed to cut internal clean keyway slots in bores using arbor presses.",
    features: ["Keyway sizes: 3mm to 16mm slots", "Broach Length: 150mm to 450mm long", "Shims: Supplied with accurate backing shims", "Material: Hardened M2 HSS"],
    applications: ["Gear internal keyway slot broaching", "Pulley wheel bore keyways cutting", "Shaft coupling slot production"],
    image: "assets/img/hss_broaches.png"
  },
  {
    slug: "special-cutters",
    name: "HSS special Cutters",
    category: "cutting-tools",
    categoryName: "HSS Cutting Tools",
    desc: "Custom-profile ground high speed steel form cutters built to machine specific client components.",
    features: ["Profile engineering: CAD-CAM custom grind profiles", "Tolerance: up to +/- 0.01mm geometry", "Material options: M42 Cobalt 8% steel", "Testing: Shadowgraph optical projection checks"],
    applications: ["Special B2B locks profile milling", "Custom component form finishing", "Complex gear tooth profile batches"],
    image: "assets/img/special_cutters.jpg"
  },

  // --- CARBIDE TOOLS ---

  {
    slug: "solid-carbide-twist",
    name: "Solid Carbide Twist Drills",
    category: "carbide-tools",
    categoryName: "Carbide Tools",
    desc: "High-performance solid micrograin carbide drills with internal coolant holes for high-speed CNC automated cycles.",
    features: ["Coolant: Internal axial coolant holes", "Diameter: 3.0mm to 20.0mm", "Point angle: 140 degree self-centering", "Coating: AlTiN black nitride"],
    applications: ["CNC engine head drilling batches", "Stainless steel drill batches", "Aviation alloy component machining"],
    image: "assets/img/prod_carbide_end_mill.png"
  },
  {
    slug: "ball-nose-flat",
    name: "Solid Carbide Ball Nose & End Mills",
    category: "carbide-tools",
    categoryName: "Carbide Tools",
    desc: "Micrograin solid carbide end mills with flat and ball-nose configurations, optimized for high speed machining of 3D mould cavities.",
    features: ["Hardness limit: cuts steel up to 65 HRC", "Flutes: 2, 3, or 4 helical flutes", "Helix angle: 45 degree helix layout", "Coating: TiAlN coating layer"],
    applications: ["CNC mold die cavity 3D contours", "Hardened mould steel profile cuts", "High speed aluminum profiling"],
    image: "assets/img/carbide_end_mills.png"
  },
  {
    slug: "solid-carbide-reamers",
    name: "Solid Carbide Reamers",
    category: "carbide-tools",
    categoryName: "Carbide Tools",
    desc: "Solid tungsten carbide reamers with straight and spiral flutes, providing maximum dimensional stability and tool life.",
    features: ["Diameter: 3.0mm to 20.0mm", "Tolerance: H6 class precision limit", "Helix: Left-hand helical flutes", "Concentricity: under 0.003mm"],
    applications: ["Bearing bush final CNC reams", "Aviation structural pin hole sizing", "High-accuracy hydraulic manifold sleeves"],
    image: "assets/img/carbide_reamer.png"
  },
  {
    slug: "special-carbide",
    name: "Special Solid Carbide Tools",
    category: "carbide-tools",
    categoryName: "Carbide Tools",
    desc: "Custom solid carbide step drills, combined drills, and complex profilers tailored for single-pass B2B operations.",
    features: ["Combination: Step drill + countersink in 1 tool", "Geometry: CNC tool grinder customized profiles", "Coating: AlCrN specialty coating layer", "Accuracy: +/-0.005mm geometry"],
    applications: ["Automotive injector seat machining", "Single-pass aerospace hole finish", "Custom high-volume parts profiling"],
    image: "assets/img/special_carbide_tool.png"
  },
  {
    slug: "carbide-inserts",
    name: "Carbide Inserts",
    category: "carbide-tools",
    categoryName: "Carbide Tools",
    desc: "Indexable carbide inserts (CNMG, WNMG, DNMG, APKT) with advanced multi-layer CVD/PVD coatings for turning, milling, and parting.",
    features: ["ISO codes: CNMG120408, WNMG080408, etc.", "Coating type: CVD TiN-Al2O3-TiCN matrix", "Substrate: Ultra-hard submicron carbide", "Chipbreaker: Custom geometry profiles"],
    applications: ["CNC lathe turning automation", "Heavy steel indexable milling", "High feed turning cycles"],
    image: "assets/img/carbide_inserts.png"
  },
  {
    slug: "indexable-tools",
    name: "Indexable Tools",
    category: "carbide-tools",
    categoryName: "Carbide Tools",
    desc: "Indexable tool holders, face mills, boring bars, and U-drills fitted with pocket configurations for interchangeable carbide inserts.",
    features: ["Shank Type: ISO toolholder standards", "Boring Bar type: internal coolant steel / carbide shank", "Face Mill diameter: 50mm to 250mm", "U-Drill capacity: 2xD to 5xD depths"],
    applications: ["CNC production lathe turning", "CNC machine center face milling", "Deep hole indexable drilling"],
    image: "assets/img/cat_carbide_tools.png"
  },
  {
    slug: "rotary-burrs",
    name: "Carbide Rotary Burrs",
    category: "carbide-tools",
    categoryName: "Carbide Tools",
    desc: "Tungsten carbide rotary burrs (cylindrical, ball, tree shapes) with double-cut flutes for manual die grinders.",
    features: ["Shank size: 6mm standard shank", "Cut type: Double cut (cross cut chip breaker)", "Diameter shapes: Form A, C, D, F, G, M series", "Tip hardness: 91 HRA"],
    applications: ["Welding bead grinding deburring", "Casting flash removal", "Die profile manual sizing contours"],
    image: "assets/img/carbide_rotary_burrs.png"
  },
  {
    slug: "solid-carbide-centre",
    name: "Solid Carbide Centre Drills",
    category: "carbide-tools",
    categoryName: "Carbide Tools",
    desc: "Solid micrograin carbide center drills designed to locate and pilot start holes on hard alloy components.",
    features: ["Angle: 60 degree countersink standard", "Material: Submicron solid carbide", "Tip: reinforced core design", "Shank: tolerance h6 precision"],
    applications: ["CNC hardened block pilot starting holes", "Forging die block drilling location", "Automotive crank center holes"],
    image: "assets/img/carbide_centre_drill.png"
  },
  {
    slug: "solid-carbide-drill",
    name: "Solid Carbide Drill",
    category: "carbide-tools",
    categoryName: "Carbide Tools",
    desc: "Standard straight shank solid carbide twist drills for high-feed production drilling in steel and iron.",
    features: ["Diameter: 3.0mm to 16.0mm", "helix: 30 degree helix twist", "Coatings: TiN or TiAlN available", "Point angle: 135 degree split point"],
    applications: ["General CNC batch drilling", "Ductile iron block drilling", "Machinery casing mounting holes"],
    image: "assets/img/carbide_twist_drill.png"
  },

  // --- STAMPING & MACHINING ---
  {
    slug: "stamping",
    name: "Stamping",
    category: "stamping-machining",
    categoryName: "Stamping & Machining",
    desc: "Precision sheet metal stamped brackets, covers, and plates engineered via progressive tooling presses.",
    features: ["Press Cap: up to 150 Tons press stroke", "Material Thickness: 0.5mm to 6.0mm sheets", "Tolerance: up to +/- 0.1mm accuracy", "Material options: Mild steel, brass, stainless steel"],
    applications: ["Electrical cabinet brackets", "Automotive structural sheet components", "Aviation bracket shapes"],
    image: "assets/img/stamping_parts.png"
  },
  {
    slug: "machining",
    name: "Machining",
    category: "stamping-machining",
    categoryName: "Stamping & Machining",
    desc: "Precision B2B contract CNC milling and turning services, executing close-tolerance components from bar stock.",
    features: ["Axes count: 3, 4, and 5-axis CNC machines", "Accuracy limits: up to +/- 0.005mm dimensions", "Materials machined: Aluminum, steel, brass, plastics", "Testing: CMM coordinate inspection reports"],
    applications: ["Custom aerospace manifolds", "High precision engine brackets", "Hydraulic block valve seats"],
    image: "assets/img/machining_parts.png"
  },
  {
    slug: "automobile-gear",
    name: "Automobile Gear",
    category: "stamping-machining",
    categoryName: "Stamping & Machining",
    desc: "Induction-hardened spur, helical, and bevel gears CNC machined from alloy steel (EN353 / EN24) for automotive gearboxes.",
    features: ["Gear module: 1.0 to 6.0 Module sizes", "Material: EN353 case carburized alloy steel", "Hardness rating: 58-62 HRC scale", "Precision: Class 7 DIN standards alignment"],
    applications: ["Automotive engine gearboxes", "Heavy machine reduction drives", "Agriculture tractor transmissions"],
    image: "assets/img/port_spline_gears.png"
  },
  {
    slug: "shafts",
    name: "Shafts",
    category: "stamping-machining",
    categoryName: "Stamping & Machining",
    desc: "High precision transmission spline shafts, keyway drive shafts, and motor rotor shafts ground to size.",
    features: ["Max Length: up to 1200mm shafts", "Diameter accuracy: g6 / h6 grinding limits", "Spline patterns: Straight, involute splines profile", "Runout: under 0.01mm alignment limit"],
    applications: ["Automotive transmission drive shafts", "Heavy industrial motor rotors", "CNC lead screw drive shafts"],
    image: "assets/img/precision_shafts.png"
  },
  {
    slug: "press-parts",
    name: "Press Parts",
    category: "stamping-machining",
    categoryName: "Stamping & Machining",
    desc: "Pressed metal components, washers, rings, and deep-drawn metal enclosures manufactured on high-speed presses.",
    features: ["Drawing capacity: deep-draw up to 80mm", "Material: deep draw quality (DDQ) steel sheets", "Finishing: Zinc plating / powder coat options", "Volume: Mass scale automatic coil feed tooling"],
    applications: ["Compressor motor housings", "Automotive washers assemblies", "Industrial electrical enclosures base"],
    image: "assets/img/press_parts.png"
  },
  {
    slug: "precision-lathe",
    name: "Precision Lathe Machine 8ft",
    category: "stamping-machining",
    categoryName: "Machine Tools",
    desc: "Heavy-duty conventional geared-head lathe for turning shafts up to 500mm swing.",
    features: ["Swing Over Bed: 500mm", "Distance Between Centers: 2000mm (8ft)", "Spindle Bore: 80mm", "Motor Power: 7.5 HP"],
    applications: ["Heavy shaft turning", "Metal parts threading", "Industrial maintenance job work"],
    image: "assets/img/cat_machine_tools.png"
  },
  {
    slug: "centering-chucks",
    name: "3-Jaw Self Centering Chucks",
    category: "stamping-machining",
    categoryName: "Industrial Chucks",
    desc: "High-speed rotary steel body chucks with reversible hard jaws for CNC machining centers.",
    features: ["Chuck Size: 250mm (10 inch)", "Mounting type: Short cylindrical center mount", "Max Speed: 3500 RPM", "Jaw Material: Hardened steel jaws"],
    applications: ["CNC lathe workpiece clamping", "Rotary table machining holding", "Heavy component metal turning support"],
    image: "assets/img/cat_industrial_chucks.png"
  }
  ,
  {
    slug: "tie-rod-cylinders",
    name: "Tie Rod Cylinders",
    category: "pneumatics",
    categoryName: "Pneumatics",
    desc: "Heavy duty tie rod pneumatic cylinders for industrial automation.",
    features: ["Durable construction", "High force", "Standardized mounting", "Adjustable cushioning"],
    applications: ["Manufacturing", "Packaging", "Heavy machinery"],
    image: "assets/img/cyl_tie_rod.png"
  },
  {
    slug: "square-profile-cylinders",
    name: "Square Profile Cylinders",
    category: "pneumatics",
    categoryName: "Pneumatics",
    desc: "Sleek aluminum square profile cylinders with internal tie rods.",
    features: ["Smooth surface", "Lightweight aluminum", "High precision", "Magnetic piston"],
    applications: ["Robotics", "Automation lines", "Material handling"],
    image: "assets/img/cyl_square_profile.png"
  },
  {
    slug: "compact-cylinders",
    name: "Compact Cylinders",
    category: "pneumatics",
    categoryName: "Pneumatics",
    desc: "Short stroke, low profile cylinders for tight spaces.",
    features: ["Space-saving design", "Fast actuation", "Versatile mounting", "High efficiency"],
    applications: ["Electronics assembly", "Clamping fixtures", "Conveyors"],
    image: "assets/img/cyl_compact.png"
  },
  {
    slug: "miniature-round-cylinders",
    name: "Miniature & Round Cylinders",
    category: "pneumatics",
    categoryName: "Pneumatics",
    desc: "Small barrel cylinders for precise, low force applications.",
    features: ["Miniature footprint", "Stainless steel barrel", "Fast response", "Low friction"],
    applications: ["Testing equipment", "Small parts handling", "Medical devices"],
    image: "assets/img/cyl_miniature.png"
  },
  {
    slug: "rodless-cylinders",
    name: "Rodless Cylinders",
    category: "pneumatics",
    categoryName: "Pneumatics",
    desc: "Extruded profile cylinders with sliding carriage instead of rod.",
    features: ["No rod overhang", "Long strokes available", "High load capacity", "Integrated guides"],
    applications: ["Cutting machines", "Gantry robots", "Sliding doors"],
    image: "assets/img/cyl_rodless.png"
  },
  {
    slug: "heavy-duty-cylinders",
    name: "Heavy Duty Cylinders",
    category: "pneumatics",
    categoryName: "Pneumatics",
    desc: "Massive cast-iron and steel cylinders for extreme force.",
    features: ["Extreme durability", "High pressure rating", "Thick brackets", "Large bore sizes"],
    applications: ["Press machines", "Mining equipment", "Steel mills"],
    image: "assets/img/cyl_heavy_duty.png"
  },
  {
    slug: "filter",
    name: "Filter",
    category: "pneumatics",
    categoryName: "Pneumatics",
    desc: "High quality pneumatic air filters for particle and moisture removal.",
    features: ["Polycarbonate bowl", "Manual/auto drain", "High flow capacity", "Fine filtration"],
    applications: ["Compressor lines", "Paint booths", "Pneumatic tools"],
    image: "assets/img/pneumatic_air_filter.png"
  },
  {
    slug: "mist-separator",
    name: "Mist Separator",
    category: "pneumatics",
    categoryName: "Pneumatics",
    desc: "Efficient mist separators to remove oil and fine moisture from air.",
    features: ["Sub-micron filtration", "Low pressure drop", "Durable body", "Easy maintenance"],
    applications: ["Cleanrooms", "Precision pneumatics", "Instrumentation"],
    image: "assets/img/pneumatic_mist_separator.png"
  },
  {
    slug: "lubricator",
    name: "Lubricator",
    category: "pneumatics",
    categoryName: "Pneumatics",
    desc: "Pneumatic lubricators for supplying oil mist to downstream tools.",
    features: ["Adjustable drip rate", "Transparent dome", "Continuous lubrication", "Sturdy build"],
    applications: ["Air motors", "Impact wrenches", "Cylinder lubrication"],
    image: "assets/img/pneumatic_lubricator.png"
  },
  {
    slug: "regulator",
    name: "Regulator",
    category: "pneumatics",
    categoryName: "Pneumatics",
    desc: "Industrial air pressure regulators for stable output pressure.",
    features: ["Precise adjustment", "Built-in gauge", "Locking knob", "High relief flow"],
    applications: ["Pressure control", "Actuator speed regulation", "Testing rigs"],
    image: "assets/img/pneumatic_pressure_regulator.png"
  },
  {
    slug: "precision-regulator",
    name: "Precision Regulator",
    category: "pneumatics",
    categoryName: "Pneumatics",
    desc: "High accuracy pressure regulators for sensitive applications.",
    features: ["Multi-turn dial", "Very low hysteresis", "Excellent repeatability", "Fine control"],
    applications: ["Leak testing", "Tension control", "Micro-fluidics"],
    image: "assets/img/pneumatic_precision_regulator.png"
  },
  {
    slug: "proportional-pressure-regulator",
    name: "Proportional Pressure Regulator",
    category: "pneumatics",
    categoryName: "Pneumatics",
    desc: "Advanced electro-pneumatic regulators for continuous electronic control.",
    features: ["Digital display", "Analog/digital input", "Fast response time", "High precision"],
    applications: ["Automated force control", "Robotics", "Welding machines"],
    image: "assets/img/pneumatic_proportional_regulator.png"
  },
  {
    slug: "solenoid-valve-e-series",
    name: "Solenoid Valve - E Series",
    category: "pneumatics",
    categoryName: "Pneumatics",
    desc: "Reliable E Series solenoid valves for general pneumatic control.",
    features: ["Fast switching", "Compact design", "Low power consumption", "Multiple port sizes"],
    applications: ["Packaging machinery", "Automation systems", "Cylinder control"],
    image: "assets/img/pneumatic_solenoid_valve_e.png"
  },
  {
    slug: "solenoid-valve-el-dp1",
    name: "Solenoid Valve - EL & DP1 Series",
    category: "pneumatics",
    categoryName: "Pneumatics",
    desc: "High flow EL and DP1 series solenoid valves for industrial use.",
    features: ["High flow rate", "Robust construction", "Manual override", "Long service life"],
    applications: ["Heavy automation", "Process control", "Pneumatic circuits"],
    image: "assets/img/pneumatic_solenoid_valve_el_dp1.png"
  },
  {
    slug: "solenoid-valve-dmn-dmh",
    name: "Solenoid Valve - DMN & DMH Series",
    category: "pneumatics",
    categoryName: "Pneumatics",
    desc: "Heavy duty DMN and DMH series directional control valves.",
    features: ["High durability", "Wide pressure range", "Standardized manifold", "Reliable coil"],
    applications: ["Harsh environments", "Large cylinder actuation", "Factory automation"],
    image: "assets/img/pneumatic_solenoid_valve_dmn_dmh.png"
  },
  {
    slug: "solenoid-valve-ef",
    name: "Solenoid Valve - EF Series",
    category: "pneumatics",
    categoryName: "Pneumatics",
    desc: "Efficient EF series valves designed for space-saving manifolds.",
    features: ["Slim profile", "Modular manifold base", "Low watt coil", "Quick exhaust"],
    applications: ["Compact machines", "Electronic assembly", "Robotic end-effectors"],
    image: "assets/img/pneumatic_solenoid_valve_ef.png"
  },
  {
    slug: "compact-valves",
    name: "Compact Valves",
    category: "pneumatics",
    categoryName: "Pneumatics",
    desc: "Ultra-small directional control valves for restricted spaces.",
    features: ["Miniature size", "Direct acting", "Lightweight", "High speed"],
    applications: ["Medical devices", "Semiconductor manufacturing", "Micro-pneumatics"],
    image: "assets/img/pneumatic_compact_valves.png"
  },
  {
    slug: "union",
    name: "Union",
    category: "pneumatics",
    categoryName: "Pneumatics",
    desc: "Pneumatic union straight connectors for joining two tubes.",
    features: ["Push-to-connect", "Leak-free seal", "Stainless steel grab ring", "Easy release"],
    applications: ["Air lines", "Pneumatic panels", "Machine plumbing"],
    image: "assets/img/pneumatic_union_fitting.png"
  },
  {
    slug: "straight-connector",
    name: "Straight Connector",
    category: "pneumatics",
    categoryName: "Pneumatics",
    desc: "Threaded straight fittings for connecting tubes to ports.",
    features: ["Male thread", "Internal hex for tightening", "O-ring seal", "Compact size"],
    applications: ["Valve connections", "Cylinder ports", "Manifold assembly"],
    image: "assets/img/pneumatic_straight_connector.png"
  },
  {
    slug: "elbow-connector",
    name: "Elbow Connector",
    category: "pneumatics",
    categoryName: "Pneumatics",
    desc: "90-degree elbow fittings for tight corner tube routing.",
    features: ["Swivel body", "Threaded or tube-to-tube", "Low flow restriction", "Space saving"],
    applications: ["Tight machine spaces", "Actuator piping", "Control cabinets"],
    image: "assets/img/pneumatic_elbow_connector.png"
  },
  {
    slug: "tee-connector",
    name: "Tee Connector",
    category: "pneumatics",
    categoryName: "Pneumatics",
    desc: "T-shaped pneumatic fittings for splitting air lines.",
    features: ["Three ports", "Secure grip", "High pressure rating", "Quick connection"],
    applications: ["Air distribution", "Multiple cylinder feed", "Sensor lines"],
    image: "assets/img/pneumatic_tee_connector.png"
  },
  {
    slug: "y-shape-fittings",
    name: "Y-Shape Fittings",
    category: "pneumatics",
    categoryName: "Pneumatics",
    desc: "Y-shaped splitters for balanced pneumatic flow division.",
    features: ["Low pressure drop profile", "Symmetrical flow", "Push-in design", "Durable polymer"],
    applications: ["Parallel actuation", "Air nozzle arrays", "Vacuum lines"],
    image: "assets/img/pneumatic_y_shape_fitting.png"
  },
  {
    slug: "swivel-fittings",
    name: "Swivel Fittings",
    category: "pneumatics",
    categoryName: "Pneumatics",
    desc: "Rotary swivel fittings for moving pneumatic applications.",
    features: ["360-degree rotation", "Low friction seal", "High RPM capability", "Compact swivel joint"],
    applications: ["Rotary indexers", "Robotic arms", "Moving machine parts"],
    image: "assets/img/pneumatic_swivel_fitting.png"
  },
  {
    slug: "bonded-abrasives",
    name: "Abrasives",
    category: "abrasives",
    categoryName: "Abrasives",
    desc: "High quality bonded abrasive grinding wheels for heavy material removal.",
    features: ["Ceramic alumina grain", "High durability", "Fast cutting", "Cool grinding"],
    applications: ["Bench grinders", "Pedestal grinders", "Heavy duty deburring"],
    image: "assets/img/bonded_abrasives.png"
  },
  {
    slug: "coated-abrasives",
    name: "Coated Abrasives",
    category: "abrasives",
    categoryName: "Abrasives",
    desc: "High performance coated abrasive belts, discs, and sheets.",
    features: ["Aluminum oxide grain", "Durable backing", "Consistent finish", "Fast cutting"],
    applications: ["Metal sanding", "Deburring", "Surface prep"],
    image: "assets/img/coated_abrasives.png"
  },
  {
    slug: "thin-wheels",
    name: "Thin Wheels",
    category: "abrasives",
    categoryName: "Abrasives",
    desc: "Ultra-thin cut-off wheels for precise and quick metal slicing.",
    features: ["Minimal material loss", "Fiberglass reinforced", "Cool cutting", "High RPM safe"],
    applications: ["Angle grinders", "Pipe cutting", "Sheet metal slicing"],
    image: "assets/img/thin_wheels.png"
  },
  {
    slug: "superabrasives",
    name: "Superabrasives",
    category: "abrasives",
    categoryName: "Abrasives",
    desc: "Diamond and CBN superabrasive grinding wheels for hard materials.",
    features: ["Extreme hardness", "Long tool life", "High form retention", "Precision grinding"],
    applications: ["Carbide tooling grinding", "Hardened steel finishing", "Aerospace alloys"],
    image: "assets/img/superabrasives.png"
  },
  {
    slug: "non-woven-abrasives",
    name: "Non-woven Abrasives",
    category: "abrasives",
    categoryName: "Abrasives",
    desc: "Flexible non-woven abrasive pads and wheels for finishing.",
    features: ["Conformable web", "Anti-clogging", "Uniform finish", "Gentle blending"],
    applications: ["Rust removal", "Stainless steel finishing", "Pre-paint scuffing"],
    image: "assets/img/non_woven_abrasives.png"
  }
  ,

  // --- NRB BEARINGS ---
  // 1) Ball Bearings
  {
    slug: "deep-groove-ball-bearings",
    name: "Deep Groove Ball Bearings",
    category: "bearings",
    categoryName: "Industrial Bearings",
    desc: "NRB Deep Groove Ball Bearings designed for high speed, reliability, and radial load capacity.",
    features: ["Shielded (ZZ) or sealed (2RS) options", "Super finished raceways for quiet running", "High-grade carbon chromium steel", "Standard clearance and C3/C4 options"],
    applications: ["Electric motors", "Home appliances", "General machinery spindles"],
    image: "assets/img/bearing_ball.png"
  },
  {
    slug: "angular-contact-ball-bearings",
    name: "Angular Contact Ball Bearings",
    category: "bearings",
    categoryName: "Industrial Bearings",
    desc: "NRB Angular Contact Ball Bearings designed to support combination radial and axial loads.",
    features: ["Contact angle options: 15, 25, 40 degrees", "Universal matching capabilities", "High speed resin / brass cages", "Optimized internal geometry"],
    applications: ["High speed pumps", "Machine tool spindles", "Centrifuges"],
    image: "assets/img/bearing_angular_contact.png"
  },
  {
    slug: "self-aligning-ball-bearings",
    name: "Self-Aligning Ball Bearings",
    category: "bearings",
    categoryName: "Industrial Bearings",
    desc: "Self-Aligning Ball Bearings designed to compensate for angular misalignment of the shaft.",
    features: ["Double row ball configuration", "Spherical outer ring raceway", "Handles shaft deflection", "Low friction and noise"],
    applications: ["Textile machinery", "Agricultural machinery", "Conveyor rollers"],
    image: "assets/img/bearing_self_aligning.png"
  },
  {
    slug: "thrust-ball-bearings",
    name: "Thrust Ball Bearings",
    category: "bearings",
    categoryName: "Industrial Bearings",
    desc: "NRB Thrust Ball Bearings engineered to carry purely axial loads at moderate speeds.",
    features: ["Single or double direction options", "Separable components for easy mounting", "Precision pressed steel cages", "High axial stiffness rating"],
    applications: ["Crane hooks", "Vertical spindles", "Machine tool turntables"],
    image: "assets/img/bearing_thrust.png"
  },

  // 2) Roller Bearings
  {
    slug: "cylindrical-roller-bearings",
    name: "Cylindrical Roller Bearings",
    category: "bearings",
    categoryName: "Industrial Bearings",
    desc: "NRB Cylindrical Roller Bearings designed to withstand heavy radial loads and high speeds.",
    features: ["High radial load capacity", "Separable design for easy mounting", "Types: NU, NJ, NUP configurations", "Pressed steel or machined brass cages"],
    applications: ["Heavy gearboxes", "Traction motors", "Pumps and compressors"],
    image: "assets/img/bearing_cylindrical.png"
  },
  {
    slug: "spherical-roller-bearings",
    name: "Spherical Roller Bearings",
    category: "bearings",
    categoryName: "Industrial Bearings",
    desc: "Spherical Roller Bearings engineered to manage high radial loads and severe misalignment.",
    features: ["Two rows of symmetrical rollers", "Spherical outer ring raceway", "Self-aligning capability up to 2 degrees", "High radial and axial load capacity"],
    applications: ["Mining crushers", "Paper mills", "Wind turbines"],
    image: "assets/img/bearing_spherical.png"
  },
  {
    slug: "needle-roller-bearings",
    name: "Needle Roller Bearings",
    category: "bearings",
    categoryName: "Industrial Bearings",
    desc: "NRB premium needle roller bearings for maximum load carrying capacity in minimum radial spaces.",
    features: ["Extremely low cross-section profile", "High load rating to volume ratio", "Cage-guided precision rollers", "Drawn cup outer ring options"],
    applications: ["Automotive gearboxes", "Two-wheeler engines", "Power steering systems"],
    image: "assets/img/bearing_needle.png"
  },
  {
    slug: "tapered-roller-bearings",
    name: "Tapered Roller Bearings",
    category: "bearings",
    categoryName: "Industrial Bearings",
    desc: "NRB Tapered Roller Bearings engineered to support heavy radial and axial combination loads.",
    features: ["Matched cone and cup assembly", "Case-hardened steel for impact resistance", "Optimized roller-rib contact profile", "Long service life under load"],
    applications: ["Automotive wheel hubs", "Agricultural gearboxes", "Axle systems"],
    image: "assets/img/bearing_tapered.png"
  },

  // 3) Next Generation Products
  {
    slug: "preset-hub-assembly",
    name: "Preset Hub Assembly",
    category: "bearings",
    categoryName: "Industrial Bearings",
    desc: "Next-generation integrated hub bearings designed for light commercial and passenger vehicle axles.",
    features: ["Pre-adjusted bearing clearance", "Integrated high-performance seals", "Simplified mounting procedure", "Long maintenance-free life"],
    applications: ["Commercial vehicle hubs", "Automotive axles", "Trailer hubs"],
    image: "assets/img/bearing_preset_hub.png"
  },
  {
    slug: "low-torque-bearings",
    name: "Low Torque Bearings",
    category: "bearings",
    categoryName: "Industrial Bearings",
    desc: "Low frictional torque bearings designed to improve energy efficiency and reduce emissions.",
    features: ["Reduced torque by up to 30%", "Specialized internal geometry", "Low viscosity grease formulation", "Optimized seal lip profile"],
    applications: ["Electric vehicles (EV)", "Eco-friendly motors", "Alternators"],
    image: "assets/img/bearing_low_torque.png"
  },
  {
    slug: "sensor-bearings",
    name: "Sensor Bearings",
    category: "bearings",
    categoryName: "Industrial Bearings",
    desc: "Bearings integrated with speed and position sensors for digital feedback in automation.",
    features: ["Compact sensor integration", "High resolution signal feedback", "Shielded against electromagnetic interference", "Robust digital connector design"],
    applications: ["AC motor controls", "EV speed monitoring", "Automation encoders"],
    image: "assets/img/bearing_sensor.png"
  },
  {
    slug: "emb-series",
    name: "EMB Series Bearings",
    category: "bearings",
    categoryName: "Industrial Bearings",
    desc: "Electro-Mechanical Brake (EMB) series bearings for next-generation automated vehicle braking systems.",
    features: ["High axial load capacity", "Compact integrated design", "Precision ball screw compatibility", "Maintenance-free life cycle"],
    applications: ["Automated parking brakes", "Drive-by-wire brake systems", "Robotic brake calipers"],
    image: "assets/img/bearing_emb.png"
  },
  {
    slug: "conductive-bearings",
    name: "Conductive Bearings",
    category: "bearings",
    categoryName: "Industrial Bearings",
    desc: "Electrically conductive bearings designed to prevent electrical pitting damage in EV motors.",
    features: ["Integrated electrical path bypass", "Prevents shaft voltage build-up", "Avoids electrical erosion of grease", "Standard dimensions compatibility"],
    applications: ["EV traction motors", "Wind turbine generators", "Industrial variable frequency drives"],
    image: "assets/img/bearing_conductive.png"
  },
  {
    slug: "hybrid-bearings",
    name: "Hybrid Bearings",
    category: "bearings",
    categoryName: "Industrial Bearings",
    desc: "State-of-the-art hybrid bearings featuring ceramic silicon nitride (Si3N4) rolling balls.",
    features: ["Ceramic balls provide electrical insulation", "Higher speed capability (+30%)", "Excellent wear resistance", "Low thermal expansion coefficient"],
    applications: ["EV high speed motors", "CNC spindle machines", "Aerospace generators"],
    image: "assets/img/bearing_hybrid.png"
  },
  {
    slug: "insuohm-bearings",
    name: "Insuohm Bearings",
    category: "bearings",
    categoryName: "Industrial Bearings",
    desc: "Insuohm insulated bearings coated with an electrical insulation layer on the outer or inner ring.",
    features: ["Plasma spray ceramic insulation coating", "Breakdown voltage: up to 3000 VDC", "Protects against stray current damage", "Standard ISO dimensions"],
    applications: ["Railway traction motors", "Large wind generators", "Heavy industrial AC motors"],
    image: "assets/img/bearing_insuohm.png"
  },
  {
    slug: "oil-impregnated-bearings",
    name: "Oil Impregnated Bearings",
    category: "bearings",
    categoryName: "Industrial Bearings",
    desc: "Sintered powder metal oil-impregnated bearings providing self-lubrication for low-maintenance setups.",
    features: ["Sintered bronze / iron matrix", "Self-lubricating micro-pores", "High thermal tolerance range", "Low wear rate performance"],
    applications: ["Domestic appliances", "Office machinery", "Small electric motors"],
    image: "assets/img/bearing_oil_impregnated.png"
  },

  // 4) New Auto Products
  {
    slug: "2w-3w-auto-products",
    name: "2W, 3W Auto Products",
    category: "bearings",
    categoryName: "Industrial Bearings",
    desc: "Specialized bearings range designed for two-wheelers and three-wheelers.",
    features: ["High vibration resistance", "Robust double-lip rubber seals", "Pre-greased with high temperature grease", "Compact design parameters"],
    applications: ["Motorcycle engine cranks", "Two-wheeler wheel hubs", "Three-wheeler transmissions"],
    image: "assets/img/bearing_2w_3w_auto.png"
  },
  {
    slug: "4w-auto-products",
    name: "4W Auto Products",
    category: "bearings",
    categoryName: "Industrial Bearings",
    desc: "High load capacity hub bearings and transmission bearings for four-wheeler vehicles.",
    features: ["Integrated ABS magnetic rings", "Multi-lip low-drag seals", "Premium synthetic lubricant filled", "High fatigue limit steel"],
    applications: ["Passenger car wheels", "SUV axle boxes", "Light commercial truck hubs"],
    image: "assets/img/bearing_4w_auto.png"
  },

  // 5) Railway Bearings
  {
    slug: "traction-motor-bearings",
    name: "Traction Motor Bearings",
    category: "bearings",
    categoryName: "Industrial Bearings",
    desc: "Heavy-duty cylindrical and ball bearings designed for electric railway locomotives.",
    features: ["Vibration and shock load tolerance", "Machined brass cages guided by outer ring", "Precision radial clearance grades", "High reliability performance"],
    applications: ["Railway locomotives traction motors", "Metro coach propulsion", "Electric rail car motors"],
    image: "assets/img/bearing_traction_motor.png"
  },
  {
    slug: "insulated-traction-motor-bearings",
    name: "Insulated Traction Motor Bearings",
    category: "bearings",
    categoryName: "Industrial Bearings",
    desc: "Current-insulated bearings preventing stray current damage in railway locomotives.",
    features: ["Oxide ceramic coating on rings", "Resists electric current passage", "High mechanical strength coating", "Long grease service life"],
    applications: ["Railway locomotive traction engines", "High speed electric trains", "Subway motors"],
    image: "assets/img/bearing_insulated_traction_motor.png"
  },
  {
    slug: "msu-bearings",
    name: "Traction Motor MSU Bearings",
    category: "bearings",
    categoryName: "Industrial Bearings",
    desc: "Tapered and cylindrical suspension bearings designed for railway motor suspension units.",
    features: ["High load capacity, particularly axial thrust", "Optimized internal geometries", "Split housing compatibility", "Extremely low failure rate"],
    applications: ["Railway locomotive suspension units", "Suspension nose assemblies", "Axle box mountings"],
    image: "assets/img/bearing_traction_motor_msu.png"
  },
  {
    slug: "cartridge-tapered-roller-bearings",
    name: "Cartridge Tapered Roller Bearings",
    category: "bearings",
    categoryName: "Industrial Bearings",
    desc: "Pre-lubricated, pre-sealed cartridge tapered roller bearings for railway wagon axles.",
    features: ["Integrated grease seals and end caps", "Pre-adjusted axial clearance", "Handles high shock loads", "AAR specification compliant"],
    applications: ["Freight wagon axles", "Passenger coach wheels", "Heavy mineral wagons"],
    image: "assets/img/bearing_cartridge_taper.png"
  },

  // --- POWER & BLADES ---
  {
    slug: "reciprocating-compressor",
    name: "Reciprocating Air Compressor",
    category: "power-blades",
    categoryName: "Power & Blades",
    desc: "FS Curtis reliable reciprocating piston air compressors for workshops and manufacturing plants.",
    features: ["Cast iron pump construction", "High energy efficiency", "Low maintenance cost", "Thermal overload protection"],
    applications: ["Automotive service garages", "Pneumatic tool operation", "SME manufacturing lines"],
    image: "assets/img/compressor_reciprocating.png"
  },
  {
    slug: "screw-compressor",
    name: "Screw Air Compressor",
    category: "power-blades",
    categoryName: "Power & Blades",
    desc: "Rotary screw compressors designed for continuous, quiet, and highly efficient compressed air delivery.",
    features: ["Direct drive or belt drive options", "Advanced micro-controller panel", "Quiet operation <70 dBA", "Continuous duty cycle capability"],
    applications: ["Large scale manufacturing plants", "Packaging industry", "Automotive assembly lines"],
    image: "assets/img/compressor_screw.png"
  },
  {
    slug: "bandsaw-blade",
    name: "Industrial Bandsaw Blade",
    category: "power-blades",
    categoryName: "Power & Blades",
    desc: "MK Morse bi-metal band saw blades for high productivity metal and steel structural cutting.",
    features: ["M42 high speed steel tooth edge", "Fatigue resistant backing steel", "Vari-tooth pitch configurations", "Exceptional wear resistance"],
    applications: ["Heavy metal sawing machines", "Pipe & tube cutting lines", "Structural steel shops"],
    image: "assets/img/bandsaw_blade.png"
  },
  {
    slug: "circular-saw-blade",
    name: "Circular Saw Blade",
    category: "power-blades",
    categoryName: "Power & Blades",
    desc: "High grade circular blades for cold saws and slotting operations.",
    features: ["Tungsten Carbide Tipped (TCT)", "Expansion slots for heat dissipation", "Laser-cut steel cores", "Precision tooth geometry"],
    applications: ["Aluminium extrusion profiling", "Steel solid bar sizing", "Wood and plastic slicing"],
    image: "assets/img/cutting_blades.png"
  },

  // --- OILS, WELDING & SEALANTS ---
  {
    slug: "cutting-oil",
    name: "Industrial Cutting Oil",
    category: "oils-welding",
    categoryName: "Oils & Welding",
    desc: "Vorstab soluble and neat cutting oils for cooling and lubricating CNC machining centers.",
    features: ["Excellent heat dissipation", "Anti-rust and anti-wear additives", "Eco-friendly low odor formulation", "Extends cutting tool life"],
    applications: ["CNC lathe turning", "Heavy duty gear hobbing", "Deep hole drilling"],
    image: "assets/img/oil_vorstab.png"
  },
  {
    slug: "hydraulic-oil",
    name: "Hydraulic Oil",
    category: "oils-welding",
    categoryName: "Oils & Welding",
    desc: "High viscosity index hydraulic fluids for machine tool power transmission systems.",
    features: ["Thermal stability", "Oxidation resistance", "Superior water separation", "Excellent wear protection"],
    applications: ["Hydraulic stamping presses", "Machine tool sliders", "Power packs"],
    image: "assets/img/oil_hydraulic.png"
  },
  {
    slug: "welding-electrode",
    name: "Welding Electrode",
    category: "oils-welding",
    categoryName: "Oils & Welding",
    desc: "D&H India premium coated manual metal arc welding electrodes for carbon steel and alloys.",
    features: ["Smooth arc performance", "Easy slag detachability", "Minimal spatter loss", "Radiographic weld quality"],
    applications: ["Pressure vessel fabrication", "Heavy steel structures", "Maintenance welding repairs"],
    image: "assets/img/welding_electrodes.png"
  },
  {
    slug: "welding-wire",
    name: "Welding Wire & SAW Flux",
    category: "oils-welding",
    categoryName: "Oils & Welding",
    desc: "MIG, TIG solid wires, and Submerged Arc Welding (SAW) flux combinations for structural fabrication.",
    features: ["Consistent wire copper coating", "Optimal flux melt rate", "Excellent mechanical properties", "Uniform weld bead profile"],
    applications: ["Boiler shell joints", "Shipbuilding structures", "Pipeline automatic welding"],
    image: "assets/img/welding_wire_flux.png"
  },
  {
    slug: "silicone-sealant",
    name: "Silicone Sealant & Sprays",
    category: "oils-welding",
    categoryName: "Oils & Welding",
    desc: "Tek Bond industrial grade silicone sealants and fast-drying color sprays for maintenance.",
    features: ["Moisture and UV resistant", "High bonding strength", "All-weather paint compatibility", "Anti-corrosive sealant barrier"],
    applications: ["Machine panel sealing", "Flange gasket replacement", "Touch-up surface coating"],
    image: "assets/img/silicone_sealant_sprays.png"
  }
  ,

  // --- ADDITIONAL LEAFLET PRODUCTS ---
  {
    slug: "tube-air-gun",
    name: "Tube / Air Gun",
    category: "pneumatics",
    categoryName: "Pneumatics",
    desc: "Janatics high quality PU/Nylon tubing and industrial cleaning air guns for pneumatic machinery.",
    features: ["Operating pressure: up to 10 bar", "Tube OD range: 4mm to 16mm", "Air gun body: Impact-resistant polymer", "Trigger action flow control"],
    applications: ["Pneumatic actuator lines", "Machine surface dust cleaning", "Air line routing"],
    image: "assets/img/pneumatic_tube_air_gun.png"
  },
  {
    slug: "dcd-wheels",
    name: "DCD (Diamond Cut-off) Wheels",
    category: "abrasives",
    categoryName: "Abrasives",
    desc: "Grindwell Norton Diamond Cut-off wheels for highly precise cutting of glass, tiles, and superalloys.",
    features: ["Industrial grade diamond grit", "High concentration bonding", "Minimal chipping risk", "Extremely thin profile"],
    applications: ["Glass rod slicing", "Carbide insert profiling", "Stone and ceramic tile sizing"],
    image: "assets/img/thin_wheels.png"
  },
  {
    slug: "coated-belts",
    name: "Coated Belts",
    category: "abrasives",
    categoryName: "Abrasives",
    desc: "Grindwell Norton heavy-duty coated abrasive belts for belt sanders and automated deburring machines.",
    features: ["Resilient cloth backing", "Zirconia Alumina abrasive grit", "Strong butt-joint splice", "High stock removal efficiency"],
    applications: ["Welding bead flat grinding", "Casting flash deburring", "Stainless steel sheet finishing"],
    image: "assets/img/coated_belts.png"
  },
  {
    slug: "mounted-points",
    name: "Mounted Points",
    category: "abrasives",
    categoryName: "Abrasives",
    desc: "Vitrified bonded mounted grinding points in various shapes (A, B, W series) for die grinders.",
    features: ["Pink / White Alumina grains", "Hardened steel shank diameter 6mm", "Uniform wear properties", "Self-sharpening design"],
    applications: ["Internal die grinding", "Mold cavity finishing", "Detail deburring work"],
    image: "assets/img/mounted_points.png"
  },
  {
    slug: "nose-pliers",
    name: "Nose Pliers",
    category: "hand-tools",
    categoryName: "Hand Tools",
    desc: "Taparia long nose and flat nose pliers with cutter edges and high insulation sleeves.",
    features: ["Length: 6 and 8 inches", "VDE 1000V rated handles", "Integrated wire cutting edge", "Serrated gripping surfaces"],
    applications: ["Control panel wiring", "Small component retrieval", "Deep recess wire bending"],
    image: "assets/img/pliers.png"
  },
  {
    slug: "tool-boxes",
    name: "Tool Boxes",
    category: "hand-tools",
    categoryName: "Hand Tools",
    desc: "Heavy-duty steel cantilever tool boxes by Taparia with multiple expanding trays.",
    features: ["Cantilever design with 3 or 5 compartments", "Heavy-gauge steel sheet construction", "Padlock loop for security", "Powder-coated rustproof finish"],
    applications: ["Workshop tool organization", "Maintenance technician transport", "Field engineer tool storage"],
    image: "assets/img/tool_sets.png"
  },
  {
    slug: "tool-holders-chucks",
    name: "Tool Holders (Chucks & Collet holders)",
    category: "cutting-tools",
    categoryName: "HSS Cutting",
    desc: "Birla Precision premium CNC tool holders, ER collet chucks, and side lock adapters.",
    features: ["Taper accuracy: BT30, BT40, BT50 standards", "Balanced to G2.5 at 15,000 RPM", "Hardness: 58-60 HRC", "High clamping torque rigidity"],
    applications: ["CNC vertical machining centers", "CNC milling spindle setups", "Heavy duty machining operations"],
    image: "assets/img/cat_industrial_chucks.png"
  },
  {
    slug: "carbide-taps",
    name: "Carbide Taps",
    category: "carbide-tools",
    categoryName: "Carbide Tools",
    desc: "OSG solid carbide machine taps for high-speed threading in cast iron and hardened steels.",
    features: ["Micrograin carbide substrate", "TiAlN / TiCN wear coatings", "Precision helical flute design", "High wear resistance under heat"],
    applications: ["Automotive engine block threading", "Production line tapping", "Hard metal thread cutting"],
    image: "assets/img/hss_taps.jpg"
  },
  {
    slug: "milling-inserts",
    name: "Milling Inserts",
    category: "carbide-tools",
    categoryName: "Carbide Tools",
    desc: "Teagutec indexable carbide milling inserts for face milling, shoulder milling, and slotting.",
    features: ["Advanced CVD/PVD coatings", "Optimized chipbreaker geometry", "High thermal shock resistance", "Grades for steel and cast iron"],
    applications: ["High-speed face milling", "Mold steel roughing", "Aerospace component profiling"],
    image: "assets/img/carbide_milling_inserts.png"
  },
  {
    slug: "turning-inserts",
    name: "Turning Inserts",
    category: "carbide-tools",
    categoryName: "Carbide Tools",
    desc: "Teagutec premium indexable inserts for turning, boring, and parting-off applications.",
    features: ["Double-sided negative inserts", "Excellent chip control zones", "Wiper technology edge finish", "Consistent tool life performance"],
    applications: ["CNC lathe cylinder turning", "Internal bore sizing", "Metal bar stock roughing"],
    image: "assets/img/carbide_turning_inserts.png"
  },
  {
    slug: "indexable-tool-holders",
    name: "Tool Holders (Teagutec)",
    category: "carbide-tools",
    categoryName: "Carbide Tools",
    desc: "Teagutec high-rigidity indexable shank holders and boring bars for turning inserts.",
    features: ["Hardened alloy steel shanks", "Lever-lock or screw-clamp designs", "Internal coolant channel options", "Shim seat insert support"],
    applications: ["Heavy duty outer turning", "Deep internal boring", "Facing operations on CNC lathes"],
    image: "assets/img/teagutec_tool_holders.png"
  },
  {
    slug: "indexable-milling-cutters",
    name: "Milling Cutters (Teagutec)",
    category: "carbide-tools",
    categoryName: "Carbide Tools",
    desc: "Teagutec indexable face mills, end mills, and modular heads for carbide inserts.",
    features: ["Differential pitch vibration damping", "Hardened steel body construction", "Multiple insert pockets", "Nickel-plated corrosion protection"],
    applications: ["Surface flat face milling", "Step shoulder milling", "Heavy stock rough machining"],
    image: "assets/img/hss_milling_cutters.jpg"
  },
  {
    slug: "color-spray",
    name: "Color Sprays (Tek Bond)",
    category: "oils-welding",
    categoryName: "Oils & Welding",
    desc: "Tek Bond fast-drying, highly pigmented acrylic spray paint for industrial marking and coating.",
    features: ["Excellent hiding power coverage", "Fast drying time < 10 mins", "Rust protective additives", "Multi-surface adhesion strength"],
    applications: ["Finished machine markings", "Metal bracket touch-up coating", "Storage rack identification coding"],
    image: "assets/img/color_sprays.png"
  },
  {
    slug: "saw-wires",
    name: "Saw (Submerged Arc Welding) Wires",
    category: "oils-welding",
    categoryName: "Oils & Welding",
    desc: "D&H India premium solid copper-coated steel wires for Submerged Arc Welding (SAW).",
    features: ["Consistent wire diameter sizing", "Perfect copper coating thickness", "Low hydrogen weld deposition", "Optimized cast and helix properties"],
    applications: ["Automatic boiler welding", "Structural girder fabrication", "Heavy pressure vessel shell joints"],
    image: "assets/img/welding_saw_wires.png"
  },
  {
    slug: "saw-flux",
    name: "Saw Flux (D&H)",
    category: "oils-welding",
    categoryName: "Oils & Welding",
    desc: "D&H India high-quality agglomerated flux for submerged arc welding joints.",
    features: ["Excellent slag detachability properties", "Neutral metallurgical characteristics", "Moisture resistant dry packing", "Uniform grain size sizing"],
    applications: ["Heavy thick plate butt welding", "Multi-pass weld reinforcement", "Boiler plate drum joining"],
    image: "assets/img/welding_saw_flux.png"
  }
];
