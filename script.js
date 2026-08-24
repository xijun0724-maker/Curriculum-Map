"use strict";

// ── Embedded Curriculum Data ─────────────────────────────────
const DATA = {
  program: "Bachelor of Science in Mechanical Engineering",
  totalCreditUnits: 185,
  years: [
    {
      year: 1,
      label: "Freshman",
      terms: [
        {
          term: 1,
          courses: [
            {
              id: "FW01-2",
              title:
                "Physical Activities toward Health and Fitness 1 (PATHFIT 1): Movement Competency Training",
              description:
                "Develops fundamental movement competencies and physical literacy through structured physical activities. Establishes a foundation for lifelong health and wellness.",
              lectureHours: 3,
              labHours: 0,
              creditUnits: 2,
              prerequisites: [],
              corequisites: [],
            },
            {
              id: "GED101",
              title: "Understanding the Self",
              description:
                "Explores the nature of identity, self-concept, and personal development through philosophical, psychological, and sociological perspectives. Helps students reflect on their values, beliefs, and goals.",
              lectureHours: 4.5,
              labHours: 0,
              creditUnits: 3,
              prerequisites: [],
              corequisites: [],
            },
            {
              id: "GED108",
              title: "Art Appreciation",
              description:
                "Introduces students to the visual and performing arts, developing their capacity to analyze, interpret, and appreciate artistic works. Covers major art movements, media, and cultural contexts.",
              lectureHours: 4.5,
              labHours: 0,
              creditUnits: 3,
              prerequisites: [],
              corequisites: [],
            },
            {
              id: "MATH165",
              title: "College Algebra with Analytic Geometry",
              description:
                "Covers algebraic operations, equations, inequalities, functions, and their graphs, including conic sections and coordinate geometry. Provides the algebraic foundation required for calculus.",
              lectureHours: 4.5,
              labHours: 0,
              creditUnits: 3,
              prerequisites: [],
              corequisites: [],
            },
            {
              id: "MATH166",
              title: "College Trigonometry with Solid Mensuration",
              description:
                "Studies trigonometric functions, identities, equations, and their applications, along with the measurement of solid geometric figures. Prepares students for calculus and engineering applications.",
              lectureHours: 4.5,
              labHours: 0,
              creditUnits: 3,
              prerequisites: [],
              corequisites: [],
            },
            {
              id: "ME112",
              title: "Orientation to Mechanical Engineering",
              description:
                "Introduces students to the mechanical engineering profession, its branches, career paths, and ethical responsibilities. Provides an overview of the curriculum and engineering practice in the Philippine context.",
              lectureHours: 1.5,
              labHours: 0,
              creditUnits: 1,
              prerequisites: [],
              corequisites: [],
            },
            {
              id: "NSTP100",
              title: "National Service Training Program 1",
              description:
                "First component of civic welfare or ROTC training, developing patriotism and social responsibility. Includes community service, literacy training, or military science fundamentals.",
              lectureHours: 0,
              labHours: 4.5,
              creditUnits: 1.5,
              prerequisites: [],
              corequisites: [],
            },
            {
              id: "SFTY100",
              title: "Safety Engineering Management",
              description:
                "Covers principles of occupational health and safety, hazard identification, risk assessment, and safety management systems in engineering environments. Emphasizes compliance with Philippine safety standards and regulations.",
              lectureHours: 1.5,
              labHours: 0,
              creditUnits: 1,
              prerequisites: [],
              corequisites: [],
            },
          ],
        },
        {
          term: 2,
          courses: [
            {
              id: "CM011",
              title: "General Chemistry for Engineers (Lecture)",
              description:
                "Covers atomic structure, chemical bonding, thermochemistry, and properties of matter relevant to engineering applications. Provides the chemical foundation for understanding materials and energy systems.",
              lectureHours: 4.5,
              labHours: 0,
              creditUnits: 3,
              prerequisites: [],
              corequisites: [],
            },
            {
              id: "CM011L",
              title: "General Chemistry for Engineers (Laboratory)",
              description:
                "Practical laboratory sessions reinforcing chemistry concepts through experiments in chemical reactions, titration, and material properties. Develops safe laboratory techniques and scientific reporting skills.",
              lectureHours: 0,
              labHours: 4.5,
              creditUnits: 1,
              prerequisites: ["CM011"],
              corequisites: ["CM011"],
            },
            {
              id: "FW02-2",
              title:
                "Physical Activities toward Health and Fitness 2 (PATHFIT 2): Exercise-Based Fitness Activities",
              description:
                "Focuses on structured exercise routines aimed at improving cardiovascular endurance, muscular strength, and flexibility. Builds on PATHFIT 1 with more rigorous fitness programming.",
              lectureHours: 3,
              labHours: 0,
              creditUnits: 2,
              prerequisites: ["FW01-2"],
              corequisites: [],
            },
            {
              id: "GED103",
              title: "Readings in Philippine History",
              description:
                "Examines primary and secondary sources on Philippine history from pre-colonial times to the present, with emphasis on critical reading and historical analysis. Fosters national consciousness and civic awareness.",
              lectureHours: 4.5,
              labHours: 0,
              creditUnits: 3,
              prerequisites: [],
              corequisites: [],
            },
            {
              id: "MATH170",
              title: "Linear Algebra with Computer Applications",
              description:
                "Studies vectors, matrices, systems of linear equations, determinants, eigenvalues, and vector spaces with computational applications. Essential for engineering analysis, simulations, and data processing.",
              lectureHours: 4.5,
              labHours: 0,
              creditUnits: 3,
              prerequisites: ["MATH165"],
              corequisites: [],
            },
            {
              id: "MATH176",
              title: "Calculus 1",
              description:
                "Introduces limits, continuity, derivatives of single-variable functions, and their applications to engineering problems including optimization and related rates. Serves as the gateway to advanced engineering mathematics.",
              lectureHours: 4.5,
              labHours: 0,
              creditUnits: 3,
              prerequisites: ["MATH165", "MATH166"],
              corequisites: [],
            },
            {
              id: "ME123L-5",
              title: "Mechanical Processes 1: Workshop Theory and Practice",
              description:
                "Introduces students to basic machining operations, hand tools, measuring instruments, and shop safety practices. Provides hands-on experience fabricating mechanical components using common workshop equipment.",
              lectureHours: 0,
              labHours: 9,
              creditUnits: 2,
              prerequisites: ["SFTY100"],
              corequisites: [],
            },
            {
              id: "NSTP200",
              title: "National Service Training Program 2",
              description:
                "Continuation of NSTP, deepening civic engagement through community outreach, disaster preparedness, or leadership training. Culminates in a community service project or structured military training.",
              lectureHours: 0,
              labHours: 4.5,
              creditUnits: 1.5,
              prerequisites: ["NSTP100"],
              corequisites: [],
            },
          ],
        },
        {
          term: 3,
          courses: [
            {
              id: "FW03-2",
              title:
                "Physical Activities toward Health and Fitness 3 (PATHFIT 3): Dance/Martial Arts",
              description:
                "Develops physical coordination, discipline, and cultural awareness through dance forms or martial arts training. Integrates Filipino cultural expression with physical fitness goals.",
              lectureHours: 3,
              labHours: 0,
              creditUnits: 2,
              prerequisites: ["FW02-2"],
              corequisites: [],
            },
            {
              id: "GED102",
              title: "Mathematics in the Modern World",
              description:
                "Explores the nature of mathematics as a language and tool for understanding patterns, data, and real-world phenomena. Topics include logic, statistics, financial mathematics, and mathematical modeling.",
              lectureHours: 4.5,
              labHours: 0,
              creditUnits: 3,
              prerequisites: [],
              corequisites: [],
            },
            {
              id: "GED104",
              title: "Science, Technology and Society",
              description:
                "Analyzes the mutual relationships between scientific advancement, technological development, and societal change. Encourages critical thinking about the ethical and social implications of technology.",
              lectureHours: 4.5,
              labHours: 0,
              creditUnits: 3,
              prerequisites: [],
              corequisites: [],
            },
            {
              id: "GED107",
              title: "Ethics",
              description:
                "Introduces ethical theories, moral reasoning, and their application to personal, professional, and societal dilemmas. Prepares students to make ethically sound decisions in engineering careers.",
              lectureHours: 4.5,
              labHours: 0,
              creditUnits: 3,
              prerequisites: [],
              corequisites: [],
            },
            {
              id: "MATH177",
              title: "Calculus 2",
              description:
                "Extends single-variable calculus to integration techniques, applications of definite integrals, infinite series, and sequences. Provides analytical tools critical for thermodynamics, fluid mechanics, and structural analysis.",
              lectureHours: 4.5,
              labHours: 0,
              creditUnits: 3,
              prerequisites: ["MATH176"],
              corequisites: [],
            },
            {
              id: "ME137L-5",
              title: "Mechanical Processes 2: Workshop Theory and Practice",
              description:
                "Advances on ME123L-5 with more complex machining processes, welding, casting, and forming operations. Strengthens hands-on fabrication skills and deepens understanding of manufacturing fundamentals.",
              lectureHours: 0,
              labHours: 9,
              creditUnits: 2,
              prerequisites: ["ME123L-5"],
              corequisites: [],
            },
            {
              id: "NSTP300",
              title: "National Service Training Program 3",
              description:
                "Advanced civic training focusing on leadership, project management, and community development initiatives. Students lead or participate in sustained community engagement programs.",
              lectureHours: 0,
              labHours: 4.5,
              creditUnits: 1.5,
              prerequisites: ["NSTP200"],
              corequisites: [],
            },
          ],
        },
        {
          term: 4,
          courses: [
            {
              id: "DRAW10W-1",
              title: "Engineering Drawing and Plans",
              description:
                "Teaches the fundamentals of technical drawing including orthographic projection, sectional views, dimensioning, and blueprint reading. Forms the graphical communication foundation for all engineering design work.",
              lectureHours: 0,
              labHours: 4.5,
              creditUnits: 1,
              prerequisites: [],
              corequisites: [],
            },
            {
              id: "FW04-2",
              title:
                "Physical Activities toward Health and Fitness 4 (PATHFIT 4): Group Exercise",
              description:
                "Emphasizes team-based physical activities and cooperative fitness programs promoting leadership and social wellness. Completes the PATHFIT series with a focus on lifelong active living.",
              lectureHours: 3,
              labHours: 0,
              creditUnits: 2,
              prerequisites: ["FW03-2"],
              corequisites: [],
            },
            {
              id: "GED131",
              title: "Environmental Science and Sustainability",
              description:
                "Examines principles of ecology, environmental systems, and sustainability concepts relevant to engineering practice. Addresses pollution, resource management, climate change, and green engineering strategies.",
              lectureHours: 4.5,
              labHours: 0,
              creditUnits: 3,
              prerequisites: [],
              corequisites: [],
            },
            {
              id: "MATH178",
              title: "Calculus 3",
              description:
                "Covers multivariable calculus including partial derivatives, multiple integrals, vector fields, and the theorems of Green, Stokes, and Gauss. Essential for fluid mechanics, heat transfer, and electromagnetic field analysis.",
              lectureHours: 4.5,
              labHours: 0,
              creditUnits: 3,
              prerequisites: ["MATH177"],
              corequisites: [],
            },
            {
              id: "MATH179",
              title: "Differential Equations",
              description:
                "Studies ordinary differential equations including first and higher-order equations, systems of ODEs, Laplace transforms, and series solutions. Provides the mathematical framework for modeling dynamic engineering systems.",
              lectureHours: 4.5,
              labHours: 0,
              creditUnits: 3,
              prerequisites: ["MATH177"],
              corequisites: [],
            },
            {
              id: "NSTP400",
              title: "National Service Training Program 4",
              description:
                "Final NSTP component integrating all civic training competencies through capstone community service or military science exercises. Students demonstrate readiness as responsible citizens and future professionals.",
              lectureHours: 0,
              labHours: 4.5,
              creditUnits: 1.5,
              prerequisites: ["NSTP300"],
              corequisites: [],
            },
            {
              id: "PHY104",
              title: "Physics for Engineers 1",
              description:
                "Covers classical mechanics including kinematics, Newton's laws, work-energy theorem, momentum, and rotational motion with engineering applications. Lays the physical science foundation for statics, dynamics, and thermodynamics.",
              lectureHours: 3,
              labHours: 0,
              creditUnits: 2,
              prerequisites: ["MATH176"],
              corequisites: [],
            },
            {
              id: "PHY104L",
              title: "Physics for Engineers Laboratory 1",
              description:
                "Laboratory experiments reinforcing mechanics concepts from PHY104, including measurements of motion, forces, energy, and momentum. Develops experimental design, data analysis, and scientific writing skills.",
              lectureHours: 0,
              labHours: 4.5,
              creditUnits: 1,
              prerequisites: ["MATH176"],
              corequisites: ["PHY104"],
            },
          ],
        },
      ],
    },
    {
      year: 2,
      label: "Sophomore",
      terms: [
        {
          term: 1,
          courses: [
            {
              id: "CAD10L-1",
              title: "Computer-Aided Drafting",
              description:
                "Develops proficiency in 2D and 3D CAD software for creating engineering drawings and design models. Applies drafting standards to produce professional-quality technical documentation.",
              lectureHours: 0,
              labHours: 4.5,
              creditUnits: 1,
              prerequisites: ["DRAW10W-1"],
              corequisites: [],
            },
            {
              id: "EE21-2",
              title: "Basic Electrical Engineering",
              description:
                "Introduces DC and AC circuit analysis, network theorems, capacitors, inductors, and basic electrical machines. Provides the electrical engineering foundation required for control systems and instrumentation courses.",
              lectureHours: 3,
              labHours: 0,
              creditUnits: 2,
              prerequisites: ["MATH177", "PHY104", "PHY104L"],
              corequisites: [],
            },
            {
              id: "EE21L-2",
              title: "Basic Electrical Engineering Laboratory",
              description:
                "Hands-on laboratory experiments validating electrical circuit theories from EE21-2, including Ohm's law, Kirchhoff's laws, and AC/DC measurements. Develops skills in using electrical test and measurement equipment.",
              lectureHours: 0,
              labHours: 4.5,
              creditUnits: 1,
              prerequisites: ["MATH177", "PHY104", "PHY104L"],
              corequisites: ["EE21-2"],
            },
            {
              id: "ME131-5",
              title: "Thermodynamics 1",
              description:
                "Covers the fundamental laws of thermodynamics, properties of pure substances, energy analysis of closed and open systems, and thermodynamic cycles. Forms the theoretical basis for power plants, HVAC, and combustion systems.",
              lectureHours: 4.5,
              labHours: 0,
              creditUnits: 3,
              prerequisites: ["CM011", "MATH177", "PHY104"],
              corequisites: [],
            },
            {
              id: "MEC30-5",
              title: "Statics of Rigid Bodies",
              description:
                "Analyzes forces, moments, and equilibrium conditions in stationary rigid bodies and structures. Introduces free body diagrams, trusses, frames, and distributed loads as tools for structural analysis.",
              lectureHours: 4.5,
              labHours: 0,
              creditUnits: 3,
              prerequisites: ["MATH177", "PHY104", "PHY104L"],
              corequisites: [],
            },
            {
              id: "PHY105",
              title: "Physics for Engineers 2",
              description:
                "Extends physics to waves, optics, electricity, magnetism, and modern physics concepts relevant to engineering. Provides the physical principles underlying electrical and electronic engineering systems.",
              lectureHours: 3,
              labHours: 0,
              creditUnits: 2,
              prerequisites: ["PHY104", "PHY104L"],
              corequisites: ["PHY105L"],
            },
            {
              id: "PHY105L",
              title: "Physics for Engineers Laboratory 2",
              description:
                "Laboratory experiments covering wave phenomena, optics, electric circuits, and electromagnetic measurements corresponding to PHY105 topics. Reinforces theoretical concepts through measurement and data analysis.",
              lectureHours: 0,
              labHours: 4.5,
              creditUnits: 1,
              prerequisites: ["PHY104", "PHY104L"],
              corequisites: ["PHY105"],
            },
          ],
        },
        {
          term: 2,
          courses: [
            {
              id: "ECE20-2",
              title: "Basic Electronics",
              description:
                "Covers semiconductor devices, diodes, transistors, amplifiers, and basic digital electronics with engineering applications. Provides electronics knowledge needed for instrumentation and control systems in mechanical engineering.",
              lectureHours: 3,
              labHours: 0,
              creditUnits: 2,
              prerequisites: ["MATH177", "PHY104", "PHY104L"],
              corequisites: [],
            },
            {
              id: "ECE20L-2",
              title: "Basic Electronics Laboratory",
              description:
                "Laboratory sessions on building and testing electronic circuits including diode rectifiers, transistor amplifiers, and logic gates. Develops practical skills in electronic prototyping, measurement, and troubleshooting.",
              lectureHours: 0,
              labHours: 4.5,
              creditUnits: 1,
              prerequisites: ["MATH177", "PHY104", "PHY104L"],
              corequisites: ["ECE20-2"],
            },
            {
              id: "GED133",
              title: "Professional Communication",
              description:
                "Develops advanced oral and written communication skills for professional engineering contexts, including technical reports, presentations, and workplace correspondence. Emphasizes clarity, audience awareness, and ethical communication.",
              lectureHours: 4.5,
              labHours: 0,
              creditUnits: 3,
              prerequisites: [],
              corequisites: [],
            },
            {
              id: "MATH180",
              title: "Engineering Data Analysis",
              description:
                "Applies probability theory, descriptive and inferential statistics, regression analysis, and quality control methods to engineering problems. Equips students to make data-driven decisions in design and manufacturing contexts.",
              lectureHours: 4.5,
              labHours: 0,
              creditUnits: 3,
              prerequisites: ["MATH177"],
              corequisites: [],
            },
            {
              id: "ME133-5",
              title: "Thermodynamics 2",
              description:
                "Advances thermodynamic analysis to gas mixtures, psychrometrics, chemical reactions, and thermodynamic property relations. Applies concepts to combustion, refrigeration, and advanced power cycles.",
              lectureHours: 4.5,
              labHours: 0,
              creditUnits: 3,
              prerequisites: ["ME131-5"],
              corequisites: [],
            },
            {
              id: "ME50-5",
              title: "Advanced Engineering Mathematics",
              description:
                "Covers advanced topics including Fourier series, partial differential equations, complex analysis, and selected numerical methods as applied to mechanical engineering problems. Bridges theoretical mathematics with engineering modeling.",
              lectureHours: 4.5,
              labHours: 0,
              creditUnits: 3,
              prerequisites: ["MATH179"],
              corequisites: [],
            },
          ],
        },
        {
          term: 3,
          courses: [
            {
              id: "AIE10",
              title: "Introduction to Artificial Intelligence and Data Science",
              description:
                "Surveys the fundamental concepts of AI, machine learning, and data science including supervised learning, neural networks, and data visualization. Explores engineering applications of AI in predictive maintenance, automation, and design optimization.",
              lectureHours: 4.5,
              labHours: 0,
              creditUnits: 3,
              prerequisites: [],
              corequisites: [],
            },
            {
              id: "CPE100L-1",
              title: "Fundamentals of Object-Oriented Programming Laboratory",
              description:
                "Introduces programming fundamentals and object-oriented concepts through hands-on coding exercises using a modern language. Develops algorithmic thinking and software skills applicable to engineering computation and simulation.",
              lectureHours: 0,
              labHours: 4.5,
              creditUnits: 1,
              prerequisites: [],
              corequisites: [],
            },
            {
              id: "ME101-5",
              title: "Safety Engineering for Mechanical Engineers",
              description:
                "Covers hazard analysis, risk assessment methodologies, machine guarding, industrial hygiene, and regulatory compliance for mechanical engineering environments. Prepares students to design and manage safe mechanical systems and workplaces.",
              lectureHours: 3,
              labHours: 0,
              creditUnits: 2,
              prerequisites: ["ME137L-5"],
              corequisites: [],
            },
            {
              id: "ME130-5",
              title: "Fluid Mechanics for Mechanical Engineers",
              description:
                "Studies fluid properties, fluid statics, kinematics, Bernoulli's equation, pipe flow, and boundary layer theory with engineering applications. Forms the basis for fluid machinery, HVAC, and hydraulic systems design.",
              lectureHours: 4.5,
              labHours: 0,
              creditUnits: 3,
              prerequisites: ["ME131-5"],
              corequisites: [],
            },
            {
              id: "ME135-5",
              title: "Heat Transfer",
              description:
                "Analyzes the three modes of heat transfer — conduction, convection, and radiation — with applications to heat exchangers and thermal systems design. Provides tools for managing thermal energy in mechanical equipment and processes.",
              lectureHours: 3,
              labHours: 0,
              creditUnits: 2,
              prerequisites: ["ME131-5"],
              corequisites: [],
            },
            {
              id: "ME55-5",
              title: "Mathematical Modeling and Problem Solving",
              description:
                "Develops the ability to formulate and solve engineering problems using mathematical models, dimensional analysis, and simulation techniques. Bridges advanced mathematics and real-world mechanical engineering design scenarios.",
              lectureHours: 3,
              labHours: 0,
              creditUnits: 2,
              prerequisites: ["MATH178"],
              corequisites: [],
            },
            {
              id: "MEC31-5",
              title: "Dynamics of Rigid Bodies",
              description:
                "Extends statics to the motion of rigid bodies, covering kinematics, Newton's second law for particles and bodies, work-energy, and impulse-momentum methods. Critical for analyzing rotating machinery, linkages, and vibrating systems.",
              lectureHours: 3,
              labHours: 0,
              creditUnits: 2,
              prerequisites: ["MEC30-5"],
              corequisites: [],
            },
            {
              id: "RES101-5",
              title: "Methods of Research for Mechanical Engineering",
              description:
                "Introduces scientific research methodology, literature review, data collection, and technical writing for engineering research. Prepares students to conduct and present original engineering investigations and thesis work.",
              lectureHours: 1.5,
              labHours: 0,
              creditUnits: 1,
              prerequisites: ["GED104", "GED107", "MATH180"],
              corequisites: [],
            },
          ],
        },
        {
          term: 4,
          courses: [
            {
              id: "EE22-2",
              title: "DC/AC Machinery",
              description:
                "Studies the construction, operating principles, and performance characteristics of DC and AC electric machines including motors and generators. Provides the knowledge base for selecting and integrating electric drives in mechanical systems.",
              lectureHours: 4.5,
              labHours: 0,
              creditUnits: 3,
              prerequisites: ["EE21-2"],
              corequisites: [],
            },
            {
              id: "EE22L-2",
              title: "DC/AC Machinery Laboratory",
              description:
                "Laboratory experiments on testing and performance evaluation of DC and AC machines, including speed-torque curves and efficiency measurements. Develops practical skills in electrical machine operation and troubleshooting.",
              lectureHours: 0,
              labHours: 4.5,
              creditUnits: 1,
              prerequisites: ["EE21L-2"],
              corequisites: ["EE22-2"],
            },
            {
              id: "IE103-1",
              title: "Technopreneurship 101",
              description:
                "Introduces the fundamentals of technology-driven entrepreneurship, innovation processes, and business model development for engineering graduates. Encourages students to identify market opportunities and develop scalable engineering-based ventures.",
              lectureHours: 4.5,
              labHours: 0,
              creditUnits: 3,
              prerequisites: ["RES101-5"],
              corequisites: [],
            },
            {
              id: "ME134-5",
              title: "Combustion Engineering",
              description:
                "Examines the thermodynamics and chemistry of combustion reactions, fuels, flame propagation, and pollutant formation in engineering systems. Applies combustion principles to internal combustion engines and industrial furnaces.",
              lectureHours: 4.5,
              labHours: 0,
              creditUnits: 3,
              prerequisites: ["ME133-5"],
              corequisites: [],
            },
            {
              id: "ME134-5X",
              title: "Thermo-Fluids Engineering Exit Exam",
              description:
                "A qualifying exit assessment evaluating comprehensive knowledge of thermodynamics and fluid mechanics. Students must pass this exam to proceed to advanced thermo-fluids courses.",
              lectureHours: 0,
              labHours: 0,
              creditUnits: 0,
              prerequisites: ["ME130-5", "ME135-5"],
              corequisites: ["ME134-5"],
            },
            {
              id: "ME139L-5",
              title: "Mechanical Engineering Laboratory 1",
              description:
                "Integrative laboratory course conducting experiments in fluid mechanics and thermodynamics to validate theoretical models. Students practice experimental design, data acquisition, analysis, and technical reporting.",
              lectureHours: 0,
              labHours: 9,
              creditUnits: 2,
              prerequisites: ["ME130-5", "ME133-5"],
              corequisites: [],
            },
            {
              id: "MEC32-5",
              title: "Mechanics of Deformable Bodies",
              description:
                "Analyzes internal stresses, strains, and deformations in mechanical components under axial, torsional, bending, and combined loading. Provides the basis for structural and machine element design with safety and reliability considerations.",
              lectureHours: 4.5,
              labHours: 0,
              creditUnits: 3,
              prerequisites: ["MEC31-5"],
              corequisites: [],
            },
          ],
        },
      ],
    },
    {
      year: 3,
      label: "Junior",
      terms: [
        {
          term: 1,
          courses: [
            {
              id: "ME134L-5",
              title: "Computer Applications in Mechanical Engineering",
              description:
                "Applies engineering software tools and programming to solve mechanical problems including FEA, CAD modeling, and simulation. Develops digital competency for modern engineering practice.",
              lectureHours: 0,
              labHours: 4.5,
              creditUnits: 1,
              prerequisites: ["MATH180", "MEC30-5"],
              corequisites: [],
            },
            {
              id: "ME141-5",
              title: "Refrigeration System",
              description:
                "Covers vapor-compression and absorption refrigeration cycles, refrigerants, system components, and performance analysis. Prepares students to design and evaluate refrigeration systems for industrial and commercial applications.",
              lectureHours: 4.5,
              labHours: 0,
              creditUnits: 3,
              prerequisites: ["ME133-5", "ME135-5"],
              corequisites: [],
            },
            {
              id: "ME143-5",
              title: "Fluid Machinery",
              description:
                "Studies hydraulic turbines, centrifugal and axial pumps, compressors, and fans including their theory, design parameters, and selection criteria. Links fluid mechanics principles to the engineering of energy-converting fluid devices.",
              lectureHours: 4.5,
              labHours: 0,
              creditUnits: 3,
              prerequisites: ["CAD10L-1", "ME130-5", "ME131-5"],
              corequisites: [],
            },
            {
              id: "ME144L-5",
              title: "Mechanical Engineering Laboratory 2",
              description:
                "Advanced laboratory experiments in heat transfer and combined thermo-fluids applications, building on ME139L-5. Students conduct experiments involving heat exchangers, thermal insulation, and fluid machinery performance testing.",
              lectureHours: 0,
              labHours: 9,
              creditUnits: 2,
              prerequisites: ["ME135-5", "ME139L-5"],
              corequisites: [],
            },
            {
              id: "ME146-5",
              title: "Vibration Engineering",
              description:
                "Analyzes free and forced vibrations of single and multi-degree-of-freedom mechanical systems, including damping and resonance phenomena. Applies vibration theory to machine balancing, isolation, and noise control in engineering design.",
              lectureHours: 3,
              labHours: 0,
              creditUnits: 2,
              prerequisites: ["ME50-5"],
              corequisites: [],
            },
            {
              id: "ME170-5",
              title: "ME Laws, Ethics, Contracts, Codes and Standards",
              description:
                "Reviews Philippine laws governing mechanical engineering practice, professional ethics, contractual obligations, and relevant industry codes and standards. Prepares students for licensure and responsible professional practice.",
              lectureHours: 3,
              labHours: 0,
              creditUnits: 2,
              prerequisites: ["GED107", "IE103-1"],
              corequisites: [],
            },
            {
              id: "ME60P-5",
              title: "Numerical Methods",
              description:
                "Introduces numerical techniques for solving engineering problems including root-finding, interpolation, numerical integration, and ODE solvers. Emphasizes computer implementation and error analysis for engineering computations.",
              lectureHours: 1.5,
              labHours: 4.5,
              creditUnits: 2,
              prerequisites: ["ME50-5"],
              corequisites: [],
            },
          ],
        },
        {
          term: 2,
          courses: [
            {
              id: "ME136P-5",
              title: "Engineering Materials, Processes and Testing",
              description:
                "Studies the structure, properties, and behavior of engineering materials including metals, polymers, ceramics, and composites under various processing and loading conditions. Includes laboratory testing methods for material characterization.",
              lectureHours: 3,
              labHours: 4.5,
              creditUnits: 3,
              prerequisites: ["ME137L-5", "MEC32-5"],
              corequisites: [],
            },
            {
              id: "ME138P-5",
              title: "Machine Elements",
              description:
                "Covers the analysis and design of standard machine components such as shafts, bearings, gears, belts, clutches, and fasteners. Applies mechanics of materials and dynamics principles to the systematic design of mechanical assemblies.",
              lectureHours: 3,
              labHours: 4.5,
              creditUnits: 3,
              prerequisites: [],
              corequisites: [],
            },
            {
              id: "ME148F-5",
              title: "Industrial Processes with Seminars or Field Trip",
              description:
                "Exposes students to actual industrial manufacturing and processing environments through plant visits, industry seminars, and guest lectures. Bridges academic learning with real-world engineering practice and professional networking.",
              lectureHours: 1.5,
              labHours: 4.5,
              creditUnits: 2,
              prerequisites: ["ME101-5"],
              corequisites: [],
            },
            {
              id: "ME150P-5",
              title: "Air Conditioning and Ventilation Systems",
              description:
                "Covers psychrometrics, cooling and heating load calculations, and the design of air conditioning and mechanical ventilation systems. Prepares students to design HVAC systems for residential, commercial, and industrial buildings.",
              lectureHours: 4.5,
              labHours: 4.5,
              creditUnits: 4,
              prerequisites: ["ME141-5", "ME143-5"],
              corequisites: [],
            },
            {
              id: "ME152-5",
              title: "Power Plant Engineering 1",
              description:
                "Analyzes steam power plant components including boilers, turbines, condensers, and auxiliary systems, with emphasis on thermodynamic cycle performance. Introduces coal, gas, nuclear, and renewable energy power generation fundamentals.",
              lectureHours: 3,
              labHours: 0,
              creditUnits: 2,
              prerequisites: ["ME134-5", "ME134-5X", "ME143-5"],
              corequisites: [],
            },
            {
              id: "ME152L-5",
              title: "Mechanical Engineering Laboratory 3",
              description:
                "Conducts advanced laboratory investigations in fluid machinery and integrated mechanical systems, including pump and turbine performance testing. Reinforces hands-on measurement and system evaluation skills at the Junior level.",
              lectureHours: 0,
              labHours: 9,
              creditUnits: 2,
              prerequisites: ["ME143-5", "ME144L-5"],
              corequisites: [],
            },
            {
              id: "SGE100X",
              title: "Student Global Experience",
              description:
                "An enrichment activity providing students with international or intercultural exposure through exchange programs, global competitions, or cross-cultural collaborative projects. Develops global engineering perspectives and professional adaptability.",
              lectureHours: 0,
              labHours: 0,
              creditUnits: 0,
              prerequisites: [],
              corequisites: [],
            },
          ],
        },
        {
          term: 3,
          courses: [
            {
              id: "EMG22-2",
              title: "Engineering Management",
              description:
                "Introduces management principles applied to engineering organizations, covering planning, organizing, leading, and controlling engineering projects and teams. Prepares future engineers to take on supervisory and managerial responsibilities.",
              lectureHours: 3,
              labHours: 0,
              creditUnits: 2,
              prerequisites: [],
              corequisites: [],
            },
            {
              id: "ME140-5",
              title: "Engineering Economy",
              description:
                "Applies economic principles to engineering decision-making, covering time value of money, cost-benefit analysis, depreciation, and project evaluation methods. Enables engineers to assess the financial viability of design and investment alternatives.",
              lectureHours: 4.5,
              labHours: 0,
              creditUnits: 3,
              prerequisites: ["MATH180"],
              corequisites: [],
            },
            {
              id: "ME147-5",
              title: "Machine Design 1",
              description:
                "Integrates mechanics and materials knowledge into the systematic design of machine components under static and fatigue loading. Covers design for reliability, safety factors, and failure analysis of shafts, gears, and fasteners.",
              lectureHours: 4.5,
              labHours: 0,
              creditUnits: 3,
              prerequisites: ["ME136P-5", "ME138P-5"],
              corequisites: [],
            },
            {
              id: "ME160P-5",
              title: "Instrumentation and Control Engineering",
              description:
                "Covers sensors, transducers, signal conditioning, data acquisition, and control system fundamentals including PID controllers and feedback loops. Prepares students to design automated measurement and control solutions for mechanical systems.",
              lectureHours: 4.5,
              labHours: 4.5,
              creditUnits: 4,
              prerequisites: ["ECE20-2", "ECE20L-2", "EE22-2", "EE22L-2"],
              corequisites: [],
            },
          ],
        },
        {
          term: 4,
          courses: [
            {
              id: "GED109",
              title: "Gender and Society",
              description:
                "Examines gender as a social construct, exploring issues of equality, sexuality, identity, and power dynamics in Philippine and global contexts. Encourages critical awareness of gender-based issues in professional and social environments.",
              lectureHours: 4.5,
              labHours: 0,
              creditUnits: 3,
              prerequisites: [],
              corequisites: [],
            },
            {
              id: "ME143-5X",
              title: "Mechanical Design Exit Exam",
              description:
                "A qualifying exit assessment evaluating mastery of machine design principles studied throughout the program. Must be passed concurrently with or before Machine Design 2.",
              lectureHours: 0,
              labHours: 0,
              creditUnits: 0,
              prerequisites: ["ME147-5"],
              corequisites: ["ME151P-5"],
            },
            {
              id: "ME147-5X",
              title: "Power Plant Engineering Exit Exam",
              description:
                "A qualifying exit assessment evaluating comprehensive knowledge of power plant systems and energy conversion principles. Must be passed to advance to the Applied Mechanical Engineering capstone.",
              lectureHours: 0,
              labHours: 0,
              creditUnits: 0,
              prerequisites: ["ME152-5"],
              corequisites: ["ME152P-5"],
            },
            {
              id: "ME149-5X",
              title: "Industrial Plant Engineering Exit Exam",
              description:
                "A qualifying exit assessment covering industrial plant design, HVAC, and plant engineering competencies. Clearance is required to enroll in the Applied Mechanical Engineering capstone.",
              lectureHours: 0,
              labHours: 0,
              creditUnits: 0,
              prerequisites: ["ME150P-5"],
              corequisites: [],
            },
            {
              id: "ME151P-5",
              title: "Machine Design 2",
              description:
                "Advances machine design to complex assemblies including gear trains, power transmission systems, and integrated mechanical systems with reliability and lifecycle analysis. Culminates in a comprehensive machine design project.",
              lectureHours: 3,
              labHours: 4.5,
              creditUnits: 3,
              prerequisites: ["ME147-5"],
              corequisites: [],
            },
            {
              id: "ME152P-5",
              title: "Power Plant Engineering 2 with Renewable Energy Sources",
              description:
                "Extends power plant engineering to renewable energy systems including solar, wind, hydroelectric, and geothermal power with plant design and economic evaluation. Prepares students for sustainable energy engineering practice.",
              lectureHours: 3,
              labHours: 4.5,
              creditUnits: 3,
              prerequisites: ["ME152-5"],
              corequisites: [],
            },
            {
              id: "RZL110",
              title: "The Life and Works of Rizal",
              description:
                "Studies the life, writings, and lasting contributions of Jose Rizal to Philippine nationalism and society in compliance with RA 1425. Encourages students to draw inspiration from Rizal's ideals of reform, education, and civic duty.",
              lectureHours: 4.5,
              labHours: 0,
              creditUnits: 3,
              prerequisites: [],
              corequisites: [],
            },
          ],
        },
      ],
    },
    {
      year: 4,
      label: "Senior",
      terms: [
        {
          term: 1,
          courses: [
            {
              id: "GED106",
              title: "Purposive Communication",
              description:
                "Develops advanced communication skills for academic and professional purposes including multimodal communication, technical presentations, and persuasive writing. Prepares students to communicate effectively in diverse engineering contexts.",
              lectureHours: 4.5,
              labHours: 0,
              creditUnits: 3,
              prerequisites: [],
              corequisites: [],
            },
            {
              id: "ME158P-5",
              title: "Industrial Plant Engineering",
              description:
                "Covers the design, layout, and management of industrial facilities including plant utilities, material handling systems, and production planning. Integrates HVAC, electrical, and mechanical systems in a comprehensive industrial plant design project.",
              lectureHours: 4.5,
              labHours: 4.5,
              creditUnits: 4,
              prerequisites: ["ME148F-5", "ME150P-5"],
              corequisites: [],
            },
            {
              id: "ME199R-4",
              title: "On the Job Training 1",
              description:
                "First phase of supervised industry immersion providing practical experience in a mechanical engineering work environment. Students apply classroom knowledge to real engineering tasks under the supervision of licensed engineers.",
              lectureHours: 3,
              labHours: 30,
              creditUnits: 3,
              prerequisites: [],
              corequisites: [],
            },
            {
              id: "ME200L-5",
              title: "Thesis 1",
              description:
                "First thesis phase where students identify a research problem, conduct a literature review, and develop a detailed research proposal under faculty supervision. Establishes the theoretical and methodological framework for the final thesis.",
              lectureHours: 0,
              labHours: 4.5,
              creditUnits: 1,
              prerequisites: ["RES101-5"],
              corequisites: [],
            },
          ],
        },
        {
          term: 2,
          courses: [
            {
              id: "GED105",
              title: "The Contemporary World",
              description:
                "Examines globalization, its drivers, and its multifaceted impacts on economics, politics, culture, and the environment. Develops students' understanding of their roles as global citizens and future engineering professionals.",
              lectureHours: 4.5,
              labHours: 0,
              creditUnits: 3,
              prerequisites: [],
              corequisites: [],
            },
            {
              id: "ME198D-5",
              title: "Applied Mechanical Engineering",
              description:
                "Comprehensive capstone course integrating all core mechanical engineering competencies in a real-world or simulated design-build project. Students demonstrate mastery across thermodynamics, fluid systems, machine design, and plant engineering.",
              lectureHours: 0,
              labHours: 9,
              creditUnits: 2,
              prerequisites: [
                "ME143-5X",
                "ME147-5X",
                "ME149-5X",
                "ME151P-5",
                "ME152P-5",
                "ME158P-5",
              ],
              corequisites: [],
            },
            {
              id: "ME199R-5",
              title: "On the Job Training 2",
              description:
                "Extended industry immersion providing 320 hours of supervised professional practice in a mechanical engineering firm or manufacturing facility. Students complete an industry project and submit a comprehensive OJT report.",
              lectureHours: 0,
              labHours: 320,
              creditUnits: 2,
              prerequisites: [],
              corequisites: [],
            },
            {
              id: "ME201L-5",
              title: "Thesis 2 - Final Defense",
              description:
                "Final thesis phase in which students complete their research, analyze results, and present findings before a panel of evaluators for formal defense. Demonstrates independent research capability and readiness for the engineering profession.",
              lectureHours: 0,
              labHours: 4.5,
              creditUnits: 1,
              prerequisites: ["ME200L-5"],
              corequisites: [],
            },
          ],
        },
      ],
    },
  ],
};

// ── Legend config ────────────────────────────────────────────
const LEGEND = [
  { p: "GED", label: "GED", color: "#4a6a9a" },
  { p: "MAJOR", label: "Major", color: "#b87a3e" },
  { p: "SPECIALIZED", label: "Specialized M.E.", color: "#3a8a5c" },
];

// ── localStorage keys ────────────────────────────────────────
const STORAGE = {
  progress: "bsme-progress",
  theme: "bsme-theme",
  filters: "bsme-filters",
};

// ── State ────────────────────────────────────────────────────
const courseMap = new Map();
const cardElements = new Map(); // id -> card element cache
let activeYear = 1;
let courseStatuses = {};
let activeFilters = new Set();
let isDark = false;
let mapFirstBuild = true;

// ── Dept colors ──────────────────────────────────────────────
const DC_BASE = {
  MATH: "#3a8a5c",
  PHY: "#7a62a8",
  ME: "#b87a3e",
  MEC: "#a8923a",
  GED: "#4a6a9a",
  EE: "#7a5a9a",
  ECE: "#3a8a82",
  CM: "#3a8a3a",
  FW: "#b87a3a",
  NSTP: "#a83a5a",
  AIE: "#3a6a9a",
  CPE: "#3a6a9a",
  RES: "#3a7a3a",
  EMG: "#a88a3a",
  RZL: "#a83a4a",
  SGE: "#78716c",
  IE: "#78716c",
  DRAW: "#78716c",
  CAD: "#78716c",
  OTHER: "#78716c",
};
const DC_LIGHT = {
  MATH: { bg: "#e8f5e9", tx: "#1a2e23" },
  PHY: { bg: "#ede7f6", tx: "#2a1f3d" },
  ME: { bg: "#fff3e0", tx: "#3d2415" },
  MEC: { bg: "#fffde7", tx: "#332a14" },
  GED: { bg: "#e3f2fd", tx: "#1a2540" },
  EE: { bg: "#f3e5f5", tx: "#2d1640" },
  ECE: { bg: "#e0f2f1", tx: "#162e2d" },
  CM: { bg: "#e8f5e9", tx: "#1a2e1a" },
  FW: { bg: "#fff8e1", tx: "#3d2015" },
  NSTP: { bg: "#fce4ec", tx: "#3d1a2a" },
  AIE: { bg: "#e1f5fe", tx: "#152a3d" },
  CPE: { bg: "#e1f5fe", tx: "#152a3d" },
  RES: { bg: "#e8f5e9", tx: "#1a2a1a" },
  EMG: { bg: "#fff8e1", tx: "#3d2a15" },
  RZL: { bg: "#fce4ec", tx: "#3d1520" },
  SGE: { bg: "#f5f5f4", tx: "#292524" },
  IE: { bg: "#f5f5f4", tx: "#292524" },
  DRAW: { bg: "#f5f5f4", tx: "#292524" },
  CAD: { bg: "#f5f5f4", tx: "#292524" },
  OTHER: { bg: "#f5f5f4", tx: "#292524" },
};
const DC_DARK = {
  MATH: { bg: "#1a2e23", tx: "#86d4a8" },
  PHY: { bg: "#2a1f3d", tx: "#b8a5d6" },
  ME: { bg: "#3d2415", tx: "#dba06a" },
  MEC: { bg: "#332a14", tx: "#d4b85a" },
  GED: { bg: "#1a2540", tx: "#8aa8d4" },
  EE: { bg: "#2d1640", tx: "#c0a5d8" },
  ECE: { bg: "#162e2d", tx: "#7cc8be" },
  CM: { bg: "#1a2e1a", tx: "#88c888" },
  FW: { bg: "#3d2015", tx: "#d49a5a" },
  NSTP: { bg: "#3d1a2a", tx: "#d48aa0" },
  AIE: { bg: "#152a3d", tx: "#88b8d4" },
  CPE: { bg: "#152a3d", tx: "#88b8d4" },
  RES: { bg: "#1a2a1a", tx: "#88b888" },
  EMG: { bg: "#3d2a15", tx: "#d4b05a" },
  RZL: { bg: "#3d1520", tx: "#d4888a" },
  SGE: { bg: "#292524", tx: "#a8a29e" },
  IE: { bg: "#292524", tx: "#a8a29e" },
  DRAW: { bg: "#292524", tx: "#a8a29e" },
  CAD: { bg: "#292524", tx: "#a8a29e" },
  OTHER: { bg: "#292524", tx: "#a8a29e" },
};
function getDeptColor(id) {
  const p = pfx(id);
  const br = DC_BASE[p] || DC_BASE.OTHER;
  const mode = isDark ? DC_DARK : DC_LIGHT;
  const m = mode[p] || mode.OTHER;
  return { bg: m.bg, br, tx: m.tx };
}

// ── localStorage helpers ─────────────────────────────────────
function loadProgress() {
  try {
    courseStatuses = JSON.parse(localStorage.getItem(STORAGE.progress)) || {};
  } catch {
    courseStatuses = {};
  }
}
function saveProgress() {
  try {
    localStorage.setItem(STORAGE.progress, JSON.stringify(courseStatuses));
  } catch (e) {
    console.warn("Could not save progress:", e.message);
  }
}
function loadTheme() {
  const s = localStorage.getItem(STORAGE.theme);
  if (s === "dark") isDark = true;
  else if (s === "light") isDark = false;
  else isDark = window.matchMedia("(prefers-color-scheme:dark)").matches;
}
function saveTheme() {
  try {
    localStorage.setItem(STORAGE.theme, isDark ? "dark" : "light");
  } catch (e) {
    console.warn("Could not save theme:", e.message);
  }
}
function loadFilters() {
  try {
    activeFilters = new Set(
      JSON.parse(localStorage.getItem(STORAGE.filters)) || [],
    );
  } catch {
    activeFilters = new Set();
  }
}
function saveFilters() {
  try {
    localStorage.setItem(STORAGE.filters, JSON.stringify([...activeFilters]));
  } catch (e) {
    console.warn("Could not save filters:", e.message);
  }
}

// ── Prefix detection ─────────────────────────────────────────
function pfx(id) {
  const m = id.match(/^([A-Z]+)/);
  if (!m) return "OTHER";
  const p = m[1];
  const known = [
    "MATH",
    "PHY",
    "MEC",
    "ME",
    "GED",
    "EE",
    "ECE",
    "CM",
    "FW",
    "NSTP",
    "AIE",
    "CPE",
    "RES",
    "EMG",
    "RZL",
    "SGE",
    "IE",
    "DRAW",
    "CAD",
  ];
  return known.includes(p) ? p : "OTHER";
}

// ── Category detection ─────────────────────────────────────────
const FOUNDATIONAL_ME = new Set([
  "ME112",
  "ME123L-5",
  "ME137L-5",
  "ME101-5",
  "ME170-5",
  "ME148F-5",
  "ME199R-4",
  "ME199R-5",
  "ME200L-5",
  "ME201L-5",
]);
function getCategory(id) {
  const p = pfx(id);
  if (p === "GED" || p === "RZL") return "GED";
  if (p === "ME" && !FOUNDATIONAL_ME.has(id)) return "SPECIALIZED";
  return "MAJOR";
}
function isCourseFiltered(id) {
  if (activeFilters.size === 0) return true;
  return activeFilters.has(getCategory(id));
}

// ── Hours label ──────────────────────────────────────────────
function hrs(lec, lab) {
  const p = [];
  if (lec > 0) p.push(lec + " lec");
  if (lab > 0) p.push(lab + " lab");
  return p.join(" · ") || "—";
}

// ── Credit computation ───────────────────────────────────────
function computeCredits() {
  let total = 0,
    completed = 0,
    inProgress = 0,
    remaining = 0;
  for (const [id, entry] of courseMap) {
    const u = entry.course.creditUnits;
    if (u === 0) continue;
    total += u;
    const s = courseStatuses[id];
    if (s === "completed") completed += u;
    else if (s === "in-progress") inProgress += u;
    else remaining += u;
  }
  return { total, completed, inProgress, remaining };
}
function updateStatsBar() {
  const c = computeCredits();
  const el = (id) => document.getElementById(id);
  el("s-completed").textContent = c.completed;
  el("s-progress-count").textContent = c.inProgress;
  el("s-remaining").textContent = c.remaining;
  el("s-total").textContent = c.total;
  el("s-progress-bar").style.width =
    c.total ? Math.round((c.completed / c.total) * 100) + "%" : "0%";
}

// ── Progress tracking ────────────────────────────────────────
function cycleStatus(id) {
  const states = [null, "in-progress", "completed", "planned"];
  const cur = courseStatuses[id] || null;
  const next = states[(states.indexOf(cur) + 1) % states.length];
  if (next) courseStatuses[id] = next;
  else delete courseStatuses[id];
  saveProgress();
  updateCardStatus(id);
  updateStatsBar();
}
function updateCardStatus(id) {
  const cards = document.querySelectorAll(`.course-card[data-course-id="${id}"]`);
  if (cards.length === 0) return;
  const status = courseStatuses[id] || null;
  cards.forEach((card) => {
    const btn = card.querySelector(".card-status-btn");
    if (btn) {
      btn.className = "card-status-btn" + (status ? " status-" + status : "");
      btn.title =
        status ?
          "Status: " + status.replace("-", " ") + " (click to change)"
        : "Set status (click to cycle)";
      btn.innerHTML =
        status === "completed" ?
          '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="3.5 8 6.5 11 12.5 5"/></svg>'
        : status === "in-progress" ?
          '<svg viewBox="0 0 16 16" fill="currentColor"><circle cx="8" cy="8" r="3"/></svg>'
        : status === "planned" ?
          '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 2"><circle cx="8" cy="8" r="5.5"/></svg>'
        : '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8" cy="8" r="5.5"/></svg>';
    }
    // pulse animation on change
    card.style.transition = "transform 150ms ease";
    card.style.transform = "scale(0.97)";
    setTimeout(() => {
      card.style.transform = "";
      setTimeout(() => {
        card.style.transition = "";
      }, 200);
    }, 150);
  });
}

// ── Theme ────────────────────────────────────────────────────
function applyTheme() {
  document.documentElement.setAttribute(
    "data-theme",
    isDark ? "dark" : "light",
  );
}
function toggleDark() {
  isDark = !isDark;
  applyTheme();
  saveTheme();
  if (mapBuilt) {
    const savedPanX = mapPanX;
    const savedPanY = mapPanY;
    const savedScale = mapScale;
    mapBuilt = false;
    buildCurriculumMap();
    mapPanX = savedPanX;
    mapPanY = savedPanY;
    mapScale = savedScale;
    applyMapTransform();
  }
}

// ── Filters ──────────────────────────────────────────────────
function toggleFilter(prefix) {
  if (prefix === "ALL") {
    activeFilters.clear();
  } else {
    if (activeFilters.has(prefix)) {
      activeFilters.delete(prefix);
    } else {
      activeFilters.add(prefix);
    }
  }
  saveFilters();
  updateFilterChips();
  applyFiltersToCards();
}

function updateFilterChips() {
  const isAll = activeFilters.size === 0;
  document.querySelectorAll(".filter-chip").forEach((chip) => {
    const f = chip.dataset.filter;
    if (f === "ALL") {
      chip.classList.toggle("active", isAll);
      chip.style.background = isAll ? "var(--navy)" : "";
    } else {
      const leg = LEGEND.find((l) => l.p === f);
      const active = activeFilters.has(f);
      chip.classList.toggle("active", active);
      if (leg) chip.style.background = active ? leg.color : "";
    }
  });
}

function applyFiltersToCards() {
  for (const [id, card] of cardElements) {
    const visible = isCourseFiltered(id);
    if (visible) {
      card.style.display = "";
      card.style.opacity = "";
    } else {
      card.style.opacity = "0";
      setTimeout(() => { card.style.display = "none"; }, 180);
    }
  }
  applyFiltersToMapNodes();
}

function applyFiltersToMapNodes() {
  if (!mapBuilt) return;
  document.querySelectorAll(".map-node").forEach((node) => {
    node.style.opacity = "";
    const rect = node.querySelector("rect");
    if (rect) rect.removeAttribute("filter");
    const id = node.getAttribute("data-id");
    if (!isCourseFiltered(id)) {
      node.style.opacity = "0.12";
    }
  });
}

// ── Boot ─────────────────────────────────────────────────────
let focusTrapCleanup = null;

function trapFocus(container) {
  const focusable = container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  if (focusable.length === 0) return null;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  function handler(e) {
    if (e.key !== "Tab") return;
    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }
  container.addEventListener("keydown", handler);
  return () => container.removeEventListener("keydown", handler);
}

function releaseFocusTrap() {
  if (focusTrapCleanup) {
    focusTrapCleanup();
    focusTrapCleanup = null;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Load persisted state
  loadProgress();
  loadTheme();
  loadFilters();
  applyTheme();

  // Build course map
  for (const yr of DATA.years)
    for (const tm of yr.terms)
      for (const c of tm.courses)
        courseMap.set(c.id, {
          course: c,
          year: yr.year,
          term: tm.term,
          yearLabel: yr.label,
        });

  // Stats
  updateStatsBar();

  // Category counts
  const catCounts = { ALL: 0 };
  LEGEND.forEach((l) => {
    catCounts[l.p] = 0;
  });
  for (const [id] of courseMap) {
    catCounts.ALL++;
    const cat = getCategory(id);
    if (catCounts[cat] !== undefined) {
      catCounts[cat]++;
    }
  }
  const allCountEl = document.getElementById("chip-count-all");
  if (allCountEl) allCountEl.textContent = "(" + catCounts.ALL + ")";

  // Filter chips
  const chipsWrap = document.getElementById("filter-bar-inner");
  const allChip = chipsWrap?.querySelector('.filter-chip[data-filter="ALL"]');
  if (allChip) allChip.addEventListener("click", () => toggleFilter("ALL"));

  if (chipsWrap) {
    LEGEND.forEach(({ p, label, color }) => {
      const count = catCounts[p] || 0;
      const chip = document.createElement("button");
      chip.className = "filter-chip";
      chip.dataset.filter = p;
      chip.setAttribute("aria-label", "Filter by " + label);
      const dot = document.createElement("span");
      dot.className = "chip-dot";
      dot.style.background = color;
      const lbl = document.createElement("span");
      lbl.textContent = label;
      const cnt = document.createElement("span");
      cnt.className = "chip-count";
      cnt.textContent = "(" + count + ")";
      chip.appendChild(dot);
      chip.appendChild(lbl);
      chip.appendChild(cnt);
      chip.addEventListener("click", () => toggleFilter(p));
      chipsWrap.appendChild(chip);
    });
  }

  // Apply saved filters to chips
  updateFilterChips();

  // Year panels
  const panels = document.getElementById("year-panels");
  for (const yr of DATA.years) {
    const panel = document.createElement("div");
    panel.className = "year-panel" + (yr.year === 1 ? " active" : "");
    panel.dataset.year = yr.year;
    for (const tm of yr.terms) {
      const units = tm.courses.reduce((s, c) => s + c.creditUnits, 0);
      const sec = document.createElement("section");
      sec.className = "term-section";
      const heading = document.createElement("div");
      heading.className = "term-heading";
      const badge = document.createElement("span");
      badge.className = "term-badge";
      badge.textContent = tm.term;
      const termTitle = document.createElement("span");
      termTitle.className = "term-title";
      termTitle.textContent = "Term " + tm.term;
      const termUnits = document.createElement("span");
      termUnits.className = "term-units";
      termUnits.textContent = units + " units";
      heading.appendChild(badge);
      heading.appendChild(termTitle);
      heading.appendChild(termUnits);
      sec.appendChild(heading);
      const grid = document.createElement("div");
      grid.className = "course-grid";
      tm.courses.forEach((c) => grid.appendChild(makeCard(c)));
      sec.appendChild(grid);
      panel.appendChild(sec);
    }
    panels.appendChild(panel);
  }

  // Restore saved statuses on cards
  for (const id in courseStatuses) updateCardStatus(id);

  // Apply saved filters to cards
  applyFiltersToCards();

  // Map controls
  setupMapControls();

  // Tabs
  document.querySelectorAll(".year-tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      const isMap = btn.dataset.year === "map";
      document.querySelectorAll(".year-tab").forEach((t) => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      if (isMap) {
        showMapView();
      } else {
        hideMapView();
        const y = Number(btn.dataset.year);
        activeYear = y;
        document.querySelectorAll(".year-panel").forEach((p) => {
          if (Number(p.dataset.year) === y) {
            p.classList.add("active");
            p.style.animation = "none";
            p.offsetHeight;
            p.style.animation = "";
          } else p.classList.remove("active");
        });
      }
      clearHL();
      const inp = document.getElementById("search-input");
      if (inp.value) {
        inp.value = "";
        hideSearch();
      }
    });
  });

  // Start with map view
  showMapView();

  // Search
  const inp = document.getElementById("search-input");
  let searchTimer = null;
  inp.addEventListener("input", () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      const q = inp.value.trim().toLowerCase();
      q ? doSearch(q) : hideSearch();
    }, 200);
  });
  document.getElementById("sr-clear").addEventListener("click", () => {
    inp.value = "";
    inp.focus();
    hideSearch();
  });
  document.getElementById("sr-back").addEventListener("click", () => {
    inp.value = "";
    if (mapActiveView) {
      showMapView();
    } else {
      hideSearch();
      document.getElementById("year-panels").style.display = "";
    }
  });

  // Modal close
  document.getElementById("modal-close").addEventListener("click", closeModal);
  document.getElementById("modal-overlay").addEventListener("click", (e) => {
    if (e.target === document.getElementById("modal-overlay")) closeModal();
  });

  // Graph close
  document.getElementById("graph-close").addEventListener("click", closeGraph);
  document.getElementById("graph-overlay").addEventListener("click", (e) => {
    if (e.target === document.getElementById("graph-overlay")) closeGraph();
  });

  // Help
  document.getElementById("help-trigger").addEventListener("click", showHelp);
  document.getElementById("help-close").addEventListener("click", closeHelp);
  document.getElementById("help-overlay").addEventListener("click", (e) => {
    if (e.target === document.getElementById("help-overlay")) closeHelp();
  });

  // Theme toggle
  document.getElementById("theme-toggle").addEventListener("click", toggleDark);

  // Compact toggle
  // System preference listener
  window
    .matchMedia("(prefers-color-scheme:dark)")
    .addEventListener("change", (e) => {
      if (localStorage.getItem(STORAGE.theme) === null) {
        isDark = e.matches;
        applyTheme();
      }
    });

  // Keyboard shortcuts
  document.addEventListener("keydown", (e) => {
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
      if (e.key === "Escape") {
        e.target.blur();
        hideSearch();
      }
      return;
    }
    switch (e.key) {
      case "Escape":
        if (
          !document.getElementById("help-overlay").classList.contains("hidden")
        )
          closeHelp();
        else if (
          !document.getElementById("graph-overlay").classList.contains("hidden")
        )
          closeGraph();
        else if (
          !document.getElementById("modal-overlay").classList.contains("hidden")
        )
          closeModal();
        else releaseFocusTrap();
        break;
      case "/":
        e.preventDefault();
        document.getElementById("search-input").focus();
        break;
      case "d":
      case "D":
        if (!e.ctrlKey && !e.metaKey) toggleDark();
        break;
      case "1":
      case "2":
      case "3":
      case "4":
        document.querySelector(`.year-tab[data-year="${e.key}"]`)?.click();
        break;
      case "?":
        showHelp();
        break;
      case "m":
      case "M":
        if (!e.ctrlKey && !e.metaKey) {
          document.querySelector('.year-tab[data-year="map"]')?.click();
        }
        break;
    }
  });
});

// ── Make Card ────────────────────────────────────────────────
function makeCard(c) {
  const p = pfx(c.id);
  const isExam = c.creditUnits === 0;
  const card = document.createElement("article");
  card.className = "course-card" + (isExam ? " card--exam" : "");
  card.dataset.courseId = c.id;
  card.setAttribute("data-p", p);
  card.setAttribute("data-category", getCategory(c.id));
  card.setAttribute("tabindex", "0");
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", c.id + ": " + c.title);
  const pre = c.prerequisites.length;
  const tag =
    isExam ? "Exit Exam"
    : pre > 0 ? pre + " prereq" + (pre > 1 ? "s" : "")
    : "No prereqs";

  const top = document.createElement("div");
  top.className = "card-top";
  const codeEl = document.createElement("span");
  codeEl.className = "card-code";
  codeEl.textContent = c.id;
  const creditsEl = document.createElement("span");
  creditsEl.className = "card-credits";
  creditsEl.textContent = isExam ? "EXAM" : c.creditUnits + " unit" + (c.creditUnits !== 1 ? "s" : "");
  top.appendChild(codeEl);
  top.appendChild(creditsEl);

  const titleEl = document.createElement("h3");
  titleEl.className = "card-title";
  titleEl.textContent = c.title;

  const footer = document.createElement("div");
  footer.className = "card-footer";
  const tagEl = document.createElement("span");
  tagEl.className = "card-tag";
  tagEl.textContent = tag;
  const footerRight = document.createElement("div");
  footerRight.style.cssText = "display:flex;align-items:center;gap:.35rem";
  const hrsEl = document.createElement("span");
  hrsEl.className = "card-hours";
  hrsEl.textContent = hrs(c.lectureHours, c.labHours);
  const statusBtn = document.createElement("button");
  statusBtn.className = "card-status-btn";
  statusBtn.title = "Set status (click to cycle)";
  statusBtn.setAttribute("aria-label", "Set course status");
  const statusSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  statusSvg.setAttribute("viewBox", "0 0 16 16");
  statusSvg.setAttribute("fill", "none");
  statusSvg.setAttribute("stroke", "currentColor");
  statusSvg.setAttribute("stroke-width", "1.5");
  const statusCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  statusCircle.setAttribute("cx", "8");
  statusCircle.setAttribute("cy", "8");
  statusCircle.setAttribute("r", "5.5");
  statusSvg.appendChild(statusCircle);
  statusBtn.appendChild(statusSvg);
  footerRight.appendChild(hrsEl);
  footerRight.appendChild(statusBtn);
  footer.appendChild(tagEl);
  footer.appendChild(footerRight);

  card.appendChild(top);
  card.appendChild(titleEl);
  card.appendChild(footer);
  // Status button handler
  statusBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    cycleStatus(c.id);
  });
  statusBtn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      e.stopPropagation();
      cycleStatus(c.id);
    }
  });
  // Card click -> modal
  card.addEventListener("click", () => openModal(c.id));
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openModal(c.id);
    }
  });
  cardElements.set(c.id, card);
  return card;
}

// ── Search ───────────────────────────────────────────────────
function doSearch(q) {
  const matches = [];
  for (const [id, e] of courseMap) {
    if (!isCourseFiltered(id)) continue;
    if (
      (e.course.id + " " + e.course.title + " " + e.course.description)
        .toLowerCase()
        .includes(q)
    )
      matches.push(e);
  }
  const sr = document.getElementById("search-results");
  const grid = document.getElementById("sr-grid");
  document.getElementById("year-panels").style.display = "none";
  document.getElementById("map-view").classList.remove("active");
  sr.classList.remove("hidden");
  grid.innerHTML = "";
  document.getElementById("sr-summary").textContent =
    matches.length ?
      `${matches.length} course${matches.length !== 1 ? "s" : ""} found`
    : "No courses found.";
  matches.forEach(({ course, yearLabel, term }, idx) => {
    const wrap = document.createElement("div");
    wrap.appendChild(makeCard(course));
    const lbl = document.createElement("p");
    lbl.style.cssText =
      "font-size:.64rem;color:var(--light);padding:.1rem .25rem .4rem;";
    lbl.textContent = `${yearLabel} · Term ${term}`;
    wrap.appendChild(lbl);
    // Staggered animation
    wrap.style.opacity = "0";
    wrap.style.transform = "translateY(8px)";
    grid.appendChild(wrap);
    setTimeout(() => {
      wrap.style.transition = "opacity 200ms ease, transform 200ms ease";
      wrap.style.opacity = "1";
      wrap.style.transform = "translateY(0)";
    }, idx * 40);
  });
  // Restore statuses on search result cards
  for (const id in courseStatuses) updateCardStatus(id);
}
function hideSearch() {
  document.getElementById("search-results").classList.add("hidden");
  if (mapActiveView) {
    document.getElementById("year-panels").style.display = "none";
  } else {
    document.getElementById("year-panels").style.display = "";
  }
}

// ── Modal ────────────────────────────────────────────────────
function openModal(id) {
  const e = courseMap.get(id);
  if (!e) return;
  const { course: c, year, term, yearLabel } = e;
  const p = pfx(id);
  const isExam = c.creditUnits === 0;

  const hdr = document.getElementById("modal-hdr");
  hdr.setAttribute("data-p", p);
  document.getElementById("m-code").textContent = id;
  document.getElementById("m-exam").classList.toggle("show", isExam);
  document.getElementById("modal-title").textContent = c.title;

  // Pills
  const pills = document.getElementById("m-pills");
  pills.innerHTML = "";
  if (!isExam) {
    const creditPill = document.createElement("span");
    creditPill.className = "pill pill-credits";
    creditPill.textContent = c.creditUnits + " unit" + (c.creditUnits !== 1 ? "s" : "");
    pills.appendChild(creditPill);
  }
  if (c.lectureHours > 0) {
    const lecPill = document.createElement("span");
    lecPill.className = "pill";
    lecPill.textContent = c.lectureHours + " hr lec";
    pills.appendChild(lecPill);
  }
  if (c.labHours > 0) {
    const labPill = document.createElement("span");
    labPill.className = "pill";
    labPill.textContent = c.labHours + " hr lab";
    pills.appendChild(labPill);
  }
  const locPill = document.createElement("span");
  locPill.className = "pill";
  locPill.textContent = yearLabel + " \u00B7 T" + term;
  pills.appendChild(locPill);

  // Graph button
  const graphBtn = document.getElementById("btn-graph-chain");
  graphBtn.style.display = "inline-flex";
  graphBtn.onclick = () => buildGraph(id);

  // Description
  document.getElementById("m-desc").textContent = c.description;

  // Prerequisites
  fillLinks(
    "lnk-pre",
    "sec-pre",
    c.prerequisites,
    "link-pre",
    "No prerequisites",
  );
  // Co-reqs
  fillLinks("lnk-co", "sec-co", c.corequisites, "link-co", "No co-requisites");
  // Unlocks
  const unlocks = [...courseMap]
    .filter(
      ([, x]) =>
        x.course.prerequisites.includes(id) ||
        x.course.corequisites.includes(id),
    )
    .map(([k]) => k);
  fillLinks(
    "lnk-un",
    "sec-un",
    unlocks,
    "link-un",
    "Does not unlock any courses directly",
  );

  // Show
  const ov = document.getElementById("modal-overlay");
  ov.classList.remove("hidden");
  ov.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
  focusTrapCleanup = trapFocus(ov);

  // Highlight
  highlight(c.prerequisites, c.corequisites, unlocks);
  document.getElementById("modal-close").focus();
}

function fillLinks(grpId, secId, ids, cls, emptyMsg) {
  const grp = document.getElementById(grpId);
  grp.innerHTML = "";
  if (ids.length === 0) {
    const note = document.createElement("span");
    note.className = "empty-note";
    note.textContent = emptyMsg;
    grp.appendChild(note);
  } else {
    ids.forEach((id) => {
      const e = courseMap.get(id);
      const btn = document.createElement("button");
      btn.className = "link-btn " + cls;
      btn.textContent = id;
      btn.title = e ? e.course.title : id;
      btn.addEventListener("click", () => openModal(id));
      grp.appendChild(btn);
    });
  }
}

function closeModal() {
  const ov = document.getElementById("modal-overlay");
  const modal = ov.querySelector(".modal");
  modal.style.animation = "m-out 180ms ease forwards";
  ov.style.animation = "ov-out 180ms ease forwards";
  setTimeout(() => {
    ov.classList.add("hidden");
    ov.setAttribute("aria-hidden", "true");
    ov.style.animation = "";
    modal.style.animation = "";
    document.body.classList.remove("no-scroll");
    releaseFocusTrap();
    clearHL();
  }, 180);
}

function highlight(pre, co, un) {
  clearHL();
  const all = new Set([...pre, ...co, ...un]);
  if (!all.size) return;
  document.querySelectorAll(".course-card").forEach((card) => {
    const id = card.dataset.courseId;
    if (pre.includes(id)) card.classList.add("card-hi-pre");
    else if (co.includes(id)) card.classList.add("card-hi-co");
    else if (un.includes(id)) card.classList.add("card-hi-un");
    else card.classList.add("card-dimmed");
  });
}
function clearHL() {
  document.querySelectorAll(".course-card").forEach((c) =>
    c.classList.remove(
      "card-hi-pre",
      "card-hi-co",
      "card-hi-un",
      "card-dimmed",
    ),
  );
}

// ── Help ─────────────────────────────────────────────────────
function showHelp() {
  const ov = document.getElementById("help-overlay");
  ov.classList.remove("hidden");
  ov.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
  focusTrapCleanup = trapFocus(ov);
  document.getElementById("help-close").focus();
}
function closeHelp() {
  const ov = document.getElementById("help-overlay");
  ov.classList.add("hidden");
  ov.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
  releaseFocusTrap();
}

// ── Graph ────────────────────────────────────────────────────
function buildGraph(targetId) {
  closeModal();

  // Collect prerequisite chain recursively
  const chain = new Set();
  const edges = [];
  function collect(id) {
    if (chain.has(id)) return;
    chain.add(id);
    const entry = courseMap.get(id);
    if (!entry) return;
    for (const pre of entry.course.prerequisites) {
      edges.push({ from: pre, to: id, type: "pre" });
      collect(pre);
    }
    for (const co of entry.course.corequisites) {
      if (courseMap.has(co)) {
        edges.push({ from: co, to: id, type: "co" });
        collect(co);
      }
    }
  }
  collect(targetId);

  // Also include what this course unlocks (descendants)
  const unlocks = [...courseMap]
    .filter(
      ([, x]) =>
        x.course.prerequisites.includes(targetId) ||
        x.course.corequisites.includes(targetId),
    )
    .map(([k]) => k);
  function collectUnlocks(id) {
    if (chain.has(id)) return;
    chain.add(id);
    const entry = courseMap.get(id);
    if (!entry) return;
    const childUnlocks = [...courseMap]
      .filter(
        ([, x]) =>
          x.course.prerequisites.includes(id) ||
          x.course.corequisites.includes(id),
      )
      .map(([k]) => k);
    for (const cid of childUnlocks) {
      edges.push({ from: id, to: cid, type: "unlocks" });
      collectUnlocks(cid);
    }
  }
  for (const uid of unlocks) collectUnlocks(uid);

  // Group by year layer
  const layers = new Map();
  for (const id of chain) {
    const entry = courseMap.get(id);
    if (!entry) continue;
    if (!layers.has(entry.year)) layers.set(entry.year, []);
    layers.get(entry.year).push(id);
  }
  const sortedYears = [...layers.keys()].sort((a, b) => a - b);

  // Layout
  const nodeW = 90,
    nodeH = 32,
    layerGap = 150,
    nodeGap = 46,
    pad = 40;
  const positions = new Map();
  let maxX = 0,
    maxY = 0;
  sortedYears.forEach((yr, li) => {
    const nodes = layers.get(yr);
    const x = pad + li * layerGap;
    nodes.forEach((id, ni) => {
      const y = pad + ni * nodeGap;
      positions.set(id, { x, y });
      maxX = Math.max(maxX, x + nodeW);
      maxY = Math.max(maxY, y + nodeH);
    });
  });

  // Build SVG
  const svg = document.getElementById("graph-svg");
  const svgW = maxX + pad * 2,
    svgH = maxY + pad * 2;
  svg.setAttribute("viewBox", `0 0 ${svgW} ${svgH}`);
  svg.setAttribute("width", svgW);
  svg.setAttribute("height", svgH);
  svg.innerHTML = "";

  // Defs for arrowheads
  const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
  ["#78716c", "#7ca8d4", "#0d9488", "#b0bec5"].forEach((col, i) => {
    const m = document.createElementNS("http://www.w3.org/2000/svg", "marker");
    m.setAttribute("id", "arrow" + i);
    m.setAttribute("viewBox", "0 0 10 10");
    m.setAttribute("refX", "9");
    m.setAttribute("refY", "5");
    m.setAttribute("markerWidth", "6");
    m.setAttribute("markerHeight", "6");
    m.setAttribute("orient", "auto-start-reverse");
    const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
    p.setAttribute("d", "M 0 0 L 10 5 L 0 10 z");
    p.setAttribute("fill", col);
    m.appendChild(p);
    defs.appendChild(m);
  });
  svg.appendChild(defs);

  // Draw edges
  for (const edge of edges) {
    const from = positions.get(edge.from),
      to = positions.get(edge.to);
    if (!from || !to) continue;
    const sx = from.x + nodeW,
      sy = from.y + nodeH / 2;
    const ex = to.x,
      ey = to.y + nodeH / 2;
    const mx = (sx + ex) / 2;
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", `M${sx},${sy} C${mx},${sy} ${mx},${ey} ${ex},${ey}`);
    path.setAttribute("fill", "none");
    const col =
      edge.type === "pre" ? "#7ca8d4"
      : edge.type === "co" ? "#0d9488"
      : "#9ca3af";
    path.setAttribute("stroke", col);
    path.setAttribute("stroke-width", "1.5");
    if (edge.type === "co") path.setAttribute("stroke-dasharray", "4,3");
    const ai =
      edge.type === "pre" ? 1
      : edge.type === "co" ? 2
      : 0;
    path.setAttribute("marker-end", `url(#arrow${ai})`);
    svg.appendChild(path);
  }

  // Draw nodes
  for (const [id, pos] of positions) {
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.style.cursor = "pointer";
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", pos.x);
    rect.setAttribute("y", pos.y);
    rect.setAttribute("width", nodeW);
    rect.setAttribute("height", nodeH);
    rect.setAttribute("rx", 6);
    const isTarget = id === targetId;
    rect.setAttribute(
      "fill",
      isTarget ? "#b0bec5"
      : chain.has(id) ? "#292524"
      : "#1c1917",
    );
    rect.setAttribute(
      "stroke",
      isTarget ? "#b0bec5"
      : chain.has(id) ? "#7ca8d4"
      : "#78716c",
    );
    rect.setAttribute("stroke-width", isTarget ? "2" : "1.5");
    rect.style.transition = "fill 150ms,stroke 150ms";
    // Hover effect
    g.addEventListener("mouseenter", () => {
      rect.setAttribute("fill", isTarget ? "#8a9aab" : "#44403c");
    });
    g.addEventListener("mouseleave", () => {
      rect.setAttribute(
        "fill",
        isTarget ? "#b0bec5"
        : chain.has(id) ? "#292524"
        : "#1c1917",
      );
    });

    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", pos.x + nodeW / 2);
    text.setAttribute("y", pos.y + nodeH / 2 + 1);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("dominant-baseline", "middle");
    text.setAttribute("fill", isTarget ? "#fff" : "#fafaf9");
    text.setAttribute("font-size", "10");
    text.setAttribute("font-weight", "700");
    text.setAttribute("font-family", "-apple-system,sans-serif");
    text.textContent = id;

    const title = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "title",
    );
    const entry = courseMap.get(id);
    title.textContent = entry ? `${id}: ${entry.course.title}` : id;

    g.appendChild(rect);
    g.appendChild(text);
    g.appendChild(title);
    g.addEventListener("click", () => {
      closeGraph();
      setTimeout(() => openModal(id), 200);
    });
    svg.appendChild(g);
  }

  // Title
  const targetEntry = courseMap.get(targetId);
  document.getElementById("graph-title").textContent =
    targetEntry ? `Prerequisite Chain: ${targetId}` : "Prerequisite Chain";

  // Show
  const ov = document.getElementById("graph-overlay");
  ov.classList.remove("hidden");
  ov.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
  focusTrapCleanup = trapFocus(ov);
}
function closeGraph() {
  const ov = document.getElementById("graph-overlay");
  ov.classList.add("hidden");
  ov.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
  releaseFocusTrap();
}

// ════════════════════════════════════════════════════════════
// ── Interactive Curriculum Map ──────────────────────────────
// ════════════════════════════════════════════════════════════
let mapPanX = 0,
  mapPanY = 0;
let mapScale = 1;
let mapDragging = false;
let mapDragMoved = false;
let mapDragStartX = 0,
  mapDragStartY = 0;
let mapLastPanX = 0,
  mapLastPanY = 0;
let mapBuilt = false;
let mapActiveView = true; // default to map on load
let mapRafId = null;

function svgEl(tag, attrs) {
  const el = document.createElementNS("http://www.w3.org/2000/svg", tag);
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
  return el;
}

function setupMapControls() {
  const vp = document.getElementById("map-viewport");

  // ── Mouse pan ──
  vp.addEventListener("mousedown", (e) => {
    if (e.target.closest(".map-controls") || e.target.closest(".map-legend"))
      return;
    mapDragging = true;
    mapDragMoved = false;
    mapDragStartX = e.clientX;
    mapDragStartY = e.clientY;
    mapLastPanX = mapPanX;
    mapLastPanY = mapPanY;
    vp.classList.add("dragging");
  });
  window.addEventListener("mousemove", (e) => {
    if (!mapDragging) return;
    const dx = e.clientX - mapDragStartX;
    const dy = e.clientY - mapDragStartY;
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) mapDragMoved = true;
    mapPanX = mapLastPanX + dx;
    mapPanY = mapLastPanY + dy;
    applyMapTransform();
  });
  window.addEventListener("mouseup", () => {
    if (mapDragging) {
      mapDragging = false;
      vp.classList.remove("dragging");
    }
  });

  // ── Scroll zoom ──
  vp.addEventListener(
    "wheel",
    (e) => {
      e.preventDefault();
      const d = e.deltaY > 0 ? -0.08 : 0.08;
      const ns = Math.max(0.2, Math.min(4, mapScale + d));
      const rect = vp.getBoundingClientRect();
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;
      const r = ns / mapScale;
      mapPanX = cx - r * (cx - mapPanX);
      mapPanY = cy - r * (cy - mapPanY);
      mapScale = ns;
      applyMapTransform();
    },
    { passive: false },
  );

  // ── Touch pan & pinch zoom ──
  let lastTouchDist = null;
  vp.addEventListener(
    "touchstart",
    (e) => {
      if (e.touches.length === 1) {
        mapDragging = true;
        mapDragStartX = e.touches[0].clientX;
        mapDragStartY = e.touches[0].clientY;
        mapLastPanX = mapPanX;
        mapLastPanY = mapPanY;
      } else if (e.touches.length === 2) {
        mapDragging = false;
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        lastTouchDist = Math.hypot(dx, dy);
      }
    },
    { passive: true },
  );
  vp.addEventListener(
    "touchmove",
    (e) => {
      if (e.touches.length === 1 && mapDragging) {
        mapPanX = mapLastPanX + (e.touches[0].clientX - mapDragStartX);
        mapPanY = mapLastPanY + (e.touches[0].clientY - mapDragStartY);
        applyMapTransform();
      } else if (e.touches.length === 2 && lastTouchDist) {
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const dist = Math.hypot(dx, dy);
        mapScale = Math.max(
          0.2,
          Math.min(4, mapScale * (dist / lastTouchDist)),
        );
        lastTouchDist = dist;
        applyMapTransform();
      }
    },
    { passive: true },
  );
  vp.addEventListener("touchend", () => {
    mapDragging = false;
    lastTouchDist = null;
  });

  // ── Zoom buttons ──
  document.getElementById("map-zoom-in").addEventListener("click", () => {
    mapScale = Math.min(4, mapScale + 0.25);
    applyMapTransform();
  });
  document.getElementById("map-zoom-out").addEventListener("click", () => {
    mapScale = Math.max(0.2, mapScale - 0.25);
    applyMapTransform();
  });
  document.getElementById("map-reset").addEventListener("click", () => {
    mapScale = 1;
    mapPanX = 0;
    mapPanY = 0;
    applyMapTransform();
  });
  document.getElementById("map-export").addEventListener("click", exportMapImage);
}

function applyMapTransform() {
  if (mapRafId) return;
  mapRafId = requestAnimationFrame(() => {
    const svg = document.getElementById("map-svg");
    svg.style.transform = `translate(${mapPanX}px,${mapPanY}px) scale(${mapScale})`;
    mapRafId = null;
  });
}

let exportBusy = false;

function resetExportBtn() {
  const btn = document.getElementById("map-export");
  exportBusy = false;
  btn.disabled = false;
  btn.style.opacity = "";
}

function exportMapImage() {
  if (exportBusy) return;
  const svg = document.getElementById("map-svg");
  if (!svg || !mapBuilt) return;
  exportBusy = true;

  const btn = document.getElementById("map-export");
  btn.disabled = true;
  btn.style.opacity = "0.5";

  const scale = 2;
  const svgW = Number(svg.getAttribute("width"));
  const svgH = Number(svg.getAttribute("height"));

  const clone = svg.cloneNode(true);
  clone.removeAttribute("id");
  clone.style.transform = "";
  clone.setAttribute("width", svgW);
  clone.setAttribute("height", svgH);
  if (!clone.getAttribute("xmlns")) {
    clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  }

  const origEls = svg.querySelectorAll("*");
  const cloneEls = clone.querySelectorAll("*");

  // Inline computed styles onto child elements (skip root <svg>)
  const safeFont =
    'system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';
  for (let i = 0; i < origEls.length; i++) {
    const cs = getComputedStyle(origEls[i]);
    for (const prop of [
      "fill",
      "stroke",
      "stroke-width",
      "stroke-dasharray",
      "stroke-linecap",
      "stroke-linejoin",
      "opacity",
      "font-size",
      "font-weight",
      "text-anchor",
      "dominant-baseline",
    ]) {
      const v = cs.getPropertyValue(prop);
      if (v && v !== "none" && v !== "normal" && v !== "0px" && v !== "") {
        cloneEls[i].style[prop] = v;
      }
    }
    const fv = cs.getPropertyValue("font-family");
    if (fv && fv !== safeFont) {
      cloneEls[i].style.fontFamily = safeFont;
    }
    cloneEls[i].removeAttribute("filter");
  }

  // Background rect with explicit dimensions
  const bg = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  bg.setAttribute("width", String(svgW));
  bg.setAttribute("height", String(svgH));
  const csRoot = getComputedStyle(document.documentElement);
  bg.setAttribute("fill", csRoot.getPropertyValue("--bg").trim() || "#f5f3ef");
  clone.insertBefore(bg, clone.firstChild);

  const data = new XMLSerializer().serializeToString(clone);
  const blob = new Blob([data], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const img = new Image();
  img.onload = () => {
    try {
      const canvas = document.createElement("canvas");
      canvas.width = svgW * scale;
      canvas.height = svgH * scale;
      const ctx = canvas.getContext("2d");
      ctx.scale(scale, scale);
      ctx.drawImage(img, 0, 0, svgW, svgH);
      URL.revokeObjectURL(url);

      canvas.toBlob(
        (pngBlob) => {
          if (!pngBlob) {
            resetExportBtn();
            return;
          }
          const a = document.createElement("a");
          a.href = URL.createObjectURL(pngBlob);
          a.download = "bsme-curriculum-map.png";
          document.body.appendChild(a);
          a.click();
          a.remove();
          URL.revokeObjectURL(a.href);
          resetExportBtn();
        },
        "image/png",
      );
    } catch {
      URL.revokeObjectURL(url);
      resetExportBtn();
    }
  };
  img.onerror = () => {
    URL.revokeObjectURL(url);
    resetExportBtn();
  };
  img.src = url;
}

function buildCurriculumMap() {
  const svg = document.getElementById("map-svg");
  svg.innerHTML = "";

  // ── Layout config ──
  const colW = 310;
  const nodeW = 155;
  const nodeH = 40;
  const courseGap = 50;
  const termGap = 36;
  const padX = 50;
  const padY = 55;

  const dc = getDeptColor;

  // ── Position nodes ──
  const nodes = new Map();
  const edges = [];
  let maxY = 0;

  // Track all known IDs for edge validation
  const allIds = new Set();
  for (const yr of DATA.years)
    for (const tm of yr.terms) for (const c of tm.courses) allIds.add(c.id);

  DATA.years.forEach((yr, yi) => {
    let termY = padY;
    yr.terms.forEach((tm, ti) => {
      // Term label
      const termLabelId = `term-label-${yi}-${ti}`;
      nodes.set(termLabelId, {
        isLabel: true,
        x: padX + yi * colW,
        y: termY - 8,
        text: `Term ${tm.term}`,
      });
      termY += 18;

      tm.courses.forEach((c) => {
        const x = padX + yi * colW;
        const y = termY;
        nodes.set(c.id, {
          x,
          y,
          w: nodeW,
          h: nodeH,
          course: c,
          year: yr.year,
          term: tm.term,
          yearLabel: yr.label,
        });

        c.prerequisites.forEach((pre) => {
          if (allIds.has(pre)) edges.push({ from: pre, to: c.id, type: "pre" });
        });
        c.corequisites.forEach((co) => {
          if (allIds.has(co)) edges.push({ from: co, to: c.id, type: "co" });
        });

        termY += courseGap;
      });
      termY += termGap;
    });
    maxY = Math.max(maxY, termY);
  });

  // ── SVG size ──
  const svgW = padX * 2 + DATA.years.length * colW + 40;
  const svgH = maxY + padY + 20;
  svg.setAttribute("width", svgW);
  svg.setAttribute("height", svgH);
  svg.setAttribute("viewBox", `0 0 ${svgW} ${svgH}`);

  // ── Defs: arrow markers ──
  const defs = svgEl("defs", {});
  // Glow filter for highlighted edges
  const glowFilter = svgEl("filter", {
    id: "edge-glow",
    x: "-50%",
    y: "-50%",
    width: "200%",
    height: "200%",
  });
  glowFilter.appendChild(
    svgEl("feGaussianBlur", {
      in: "SourceGraphic",
      stdDeviation: "3",
      result: "blur",
    }),
  );
  const feMerge = svgEl("feMerge", {});
  feMerge.appendChild(svgEl("feMergeNode", { in: "blur" }));
  feMerge.appendChild(svgEl("feMergeNode", { in: "SourceGraphic" }));
  glowFilter.appendChild(feMerge);
  defs.appendChild(glowFilter);
  [
    ["#7ca8d4", "arr-pre"],
    ["#0d9488", "arr-co"],
  ].forEach(([col, id]) => {
    const m = svgEl("marker", {
      id,
      viewBox: "0 0 10 10",
      refX: "9",
      refY: "5",
      markerWidth: "5",
      markerHeight: "5",
      orient: "auto-start-reverse",
    });
    m.appendChild(svgEl("path", { d: "M0 0L10 5L0 10z", fill: col }));
    defs.appendChild(m);
  });
  svg.appendChild(defs);

  // ── Year column headers ──
  DATA.years.forEach((yr, yi) => {
    const tx = padX + yi * colW + nodeW / 2;
    const bg = svgEl("rect", {
      x: tx - 52,
      y: 4,
      width: 104,
      height: 28,
      rx: 14,
      fill: "var(--navy)",
      opacity: "0.9",
    });
    svg.appendChild(bg);
    const t = svgEl("text", {
      x: tx,
      y: 22,
      "text-anchor": "middle",
      "font-size": "11",
      "font-weight": "700",
      fill: "#fff",
      "font-family": "-apple-system,sans-serif",
    });
    t.textContent = `${yr.label}`;
    svg.appendChild(t);
  });

  // ── Draw edges (behind nodes) ──
  const edgeGroup = svgEl("g", { class: "map-edges" });
  edges.forEach((edge) => {
    const fn = nodes.get(edge.from);
    const tn = nodes.get(edge.to);
    if (!fn || !tn || fn.isLabel || tn.isLabel) return;
    const sx = fn.x + fn.w,
      sy = fn.y + fn.h / 2;
    const ex = tn.x,
      ey = tn.y + tn.h / 2;
    const mx = (sx + ex) / 2;
    const path = svgEl("path", {
      d: `M${sx},${sy} C${mx},${sy} ${mx},${ey} ${ex},${ey}`,
      fill: "none",
      stroke: edge.type === "pre" ? "#7ca8d4" : "#0d9488",
      "stroke-width": edge.type === "pre" ? "1.8" : "1.3",
      "stroke-dasharray": edge.type === "co" ? "5,3" : "none",
      opacity: "0.45",
      class: `map-edge me-${edge.type}`,
      "data-from": edge.from,
      "data-to": edge.to,
    });
    edgeGroup.appendChild(path);
  });
  svg.appendChild(edgeGroup);

  // ── Draw nodes ──
  const nodeGroup = svgEl("g", { class: "map-nodes" });
  nodes.forEach((n, id) => {
    if (n.isLabel) {
      const t = svgEl("text", {
        x: n.x + nodeW / 2,
        y: n.y + 10,
        "text-anchor": "middle",
        "font-size": "9",
        "font-weight": "600",
        fill: "var(--muted)",
        "font-family": "-apple-system,sans-serif",
        opacity: "0.7",
      });
      t.textContent = n.text;
      nodeGroup.appendChild(t);
      return;
    }

    const c = dc(id);
    const isExam = n.course.creditUnits === 0;
    const g = svgEl("g", {
      class: "map-node",
      "data-id": id,
      style: "cursor:pointer",
    });

    // Shadow
    g.appendChild(
      svgEl("rect", {
        x: n.x + 1,
        y: n.y + 2,
        width: n.w,
        height: n.h,
        rx: 8,
        fill: isDark ? "rgba(0,0,0,0.35)" : "rgba(0,0,0,0.07)",
      }),
    );

    // Main rect
    g.appendChild(
      svgEl("rect", {
        x: n.x,
        y: n.y,
        width: n.w,
        height: n.h,
        rx: 8,
        fill: isExam ? "var(--surface2)" : c.bg,
        stroke: c.br,
        "stroke-width": isExam ? "1" : "1.5",
        "stroke-dasharray": isExam ? "4,2" : "none",
      }),
    );

    // Color accent bar on left
    if (!isExam) {
      g.appendChild(
        svgEl("rect", {
          x: n.x,
          y: n.y,
          width: 4,
          height: n.h,
          rx: "2",
          fill: c.br,
        }),
      );
    }

    // ID text
    const txt = svgEl("text", {
      x: n.x + (isExam ? n.w / 2 : n.w / 2 + 2),
      y: n.y + n.h / 2,
      "text-anchor": "middle",
      "dominant-baseline": "central",
      "font-size": "9.5",
      "font-weight": "700",
      fill: c.tx,
      "font-family": "-apple-system,sans-serif",
    });
    txt.textContent = id;
    g.appendChild(txt);

    // Tooltip
    const title = svgEl("title", {});
    title.textContent = `${id}: ${n.course.title}`;
    g.appendChild(title);

    // ── Hover ──
    g.addEventListener("mouseenter", (ev) => {
      // Highlight connected edges with glow
      svg
        .querySelectorAll(
          `.me-${"pre"}[data-from="${id}"],.me-${"pre"}[data-to="${id}"],.me-co[data-from="${id}"],.me-co[data-to="${id}"]`,
        )
        .forEach((p) => {
          p.setAttribute("opacity", "1");
          p.setAttribute(
            "stroke-width",
            p.classList.contains("me-pre") ? "4" : "3",
          );
          p.setAttribute("filter", "url(#edge-glow)");
        });
      // Dim non-connected edges
      svg.querySelectorAll(".map-edge").forEach((p) => {
        if (
          p.getAttribute("data-from") !== id &&
          p.getAttribute("data-to") !== id
        ) {
          p.setAttribute("opacity", "0.1");
        }
      });
      // Dim unrelated nodes
      const connectedIds = new Set([id]);
      edges.forEach((e) => {
        if (e.from === id) connectedIds.add(e.to);
        if (e.to === id) connectedIds.add(e.from);
      });
      nodeGroup.querySelectorAll(".map-node").forEach((ng) => {
        const nid = ng.dataset.id;
        const connected = connectedIds.has(nid);
        let base = connected ? "1" : "0.15";
        if (!isCourseFiltered(nid)) {
          base = connected ? "0.4" : "0.06";
        }
        ng.style.opacity = base;
        // Glow effect on connected nodes
        const rect = ng.querySelector("rect");
        if (rect && connected && nid !== id) {
          rect.setAttribute("filter", "url(#edge-glow)");
        }
      });
      // Tooltip
      const tip = document.getElementById("map-tooltip");
      const isEx = n.course.creditUnits === 0;
      tip.textContent = "";
      const tipStrong = document.createElement("strong");
      tipStrong.textContent = id;
      tip.appendChild(tipStrong);
      const tipTitle = document.createElement("div");
      tipTitle.className = "tt-title";
      tipTitle.textContent = n.course.title;
      tip.appendChild(tipTitle);
      const tipMeta = document.createElement("div");
      tipMeta.className = "tt-meta";
      tipMeta.textContent = n.yearLabel + " \u00B7 Term " + n.term +
        (isEx ? " \u00B7 Exit Exam" :
          " \u00B7 " + n.course.creditUnits + " unit" + (n.course.creditUnits !== 1 ? "s" : ""));
      tip.appendChild(tipMeta);
      const vg = document
        .getElementById("map-viewport")
        .getBoundingClientRect();
      let tx = ev.clientX + 14;
      let ty = ev.clientY - 10;
      if (tx + 290 > window.innerWidth) tx = ev.clientX - 300;
      if (ty + 100 > window.innerHeight) ty = ev.clientY - 100;
      tip.style.left = tx + "px";
      tip.style.top = ty + "px";
      tip.classList.remove("hidden");
    });
    g.addEventListener("mousemove", (ev) => {
      const tip = document.getElementById("map-tooltip");
      let tx = ev.clientX + 14;
      let ty = ev.clientY - 10;
      if (tx + 290 > window.innerWidth) tx = ev.clientX - 300;
      if (ty + 100 > window.innerHeight) ty = ev.clientY - 100;
      tip.style.left = tx + "px";
      tip.style.top = ty + "px";
    });
    g.addEventListener("mouseleave", () => {
      svg.querySelectorAll(".map-edge").forEach((p) => {
        p.setAttribute("opacity", "0.45");
        p.setAttribute(
          "stroke-width",
          p.classList.contains("me-pre") ? "1.8" : "1.3",
        );
        p.removeAttribute("filter");
      });
      applyFiltersToMapNodes();
      document.getElementById("map-tooltip").classList.add("hidden");
    });

    // ── Click → open modal ──
    g.addEventListener("click", (ev) => {
      if (mapDragMoved) return; // ignore if was panning
      document.getElementById("map-tooltip").classList.add("hidden");
      openModal(id);
    });

    nodeGroup.appendChild(g);
  });
  svg.appendChild(nodeGroup);

  // Center the map on first build only
  if (mapFirstBuild) {
    mapFirstBuild = false;
    setTimeout(() => {
      const vp = document.getElementById("map-viewport");
      const vr = vp.getBoundingClientRect();
      mapPanX = Math.max(0, (vr.width - svgW) / 2);
      mapPanY = 20;
      mapScale = 1;
      applyMapTransform();
    }, 50);
  }

  mapBuilt = true;
}

// ── Show / hide map vs year panels ──
function showMapView() {
  mapActiveView = true;
  document.getElementById("map-view").classList.add("active");
  document.getElementById("year-panels").style.display = "none";
  document.getElementById("search-results").classList.add("hidden");
  document.getElementById("filter-bar").style.display = "";
  if (!mapBuilt) buildCurriculumMap();
}
function hideMapView() {
  mapActiveView = false;
  document.getElementById("map-view").classList.remove("active");
  document.getElementById("year-panels").style.display = "";
  document.getElementById("filter-bar").style.display = "";
}

// ── Map tab click (wired in boot below) ──
