/* =====================================================================
   YOUR PORTFOLIO CONTENT
   ---------------------------------------------------------------------
   This is the only file you need to edit. Change the text between the
   quotes, save, and the site updates on its own in a minute or two.

   - Leave something as "" (empty quotes) to hide it.
   - Photos go in the "images" folder. The file name here must match the
     uploaded file exactly, including capitals (IMG_2274.jpg ≠ img_2274.JPG).
   - To add a project: copy a whole { ... } project block, paste it after
     the last one, put a comma between them, and change the details.
   - See EDITING-GUIDE.md for step-by-step help.
   ===================================================================== */

const PORTFOLIO = {

  name: "Clint Wilson",
  headline: "Engineering student at UC San Diego",
  bio: "I design and build physical things: drone components for a student flight team, a welded steel sim racing rig, and 3D printed parts that have to survive real use. I like projects that go from CAD to a working part I can test.",

  // Contact links. Leave "" to hide.
  email: "",
  linkedin: "",
  github: "https://github.com/clintmwilson",
  resume: "",              // e.g. "files/Clint-Wilson-Resume.pdf"

  sections: [

    /* ---------------- CLUB SECTION ---------------- */
    {
      id: "vfs",
      title: "Design Build Vertical Flight Society @ UCSD",
      kind: "Student club",
      about: "VFS is a student engineering club that designs and manufactures drones from scratch. Each year the team builds a new aircraft.",
      projects: [
        {
          title: "2025–2026 Drone",
          year: "2025–2026",
          type: "Club build",
          role: "Fabrication, assembly, CAD",
          summary: "As a first-quarter member, I contributed to the first successful flight in club history, taking on a key role in fabrication, assembly, and CAD design of critical components. The 2025–2026 build gave me hands-on experience in drone systems, manufacturing processes, and iterative engineering, lessons that will directly inform the next-generation design in 2026–2027.",
          specs: [
            ["Outcome", "First successful flight in club history"]
          ],
          tools: ["CAD", "Fabrication", "Assembly", "Flight testing"],
          link: "",
          media: [
            // For video: upload to YouTube (unlisted is fine) and paste the link as youtube: "..."
            { youtube: "", image: "images/drone-test-flight.jpg", caption: "Initial test flight" },
            { image: "images/drone-cad.png", caption: "" },
            { image: "images/IMG_2274.jpg", caption: "" },
            { image: "images/IMG_2249.jpg", caption: "" },
            { image: "images/IMG_2275.jpg", caption: "Calibration tests before test flights" },
            { image: "images/IMG_2255.jpg", caption: "" },
            { image: "images/IMG_2251.jpg", caption: "Prototype leg mounts" }
          ]
        }
        // Next year's drone goes here: copy the block above, add a comma after it.
      ]
    },

    /* ---------------- OTHER PROJECTS ---------------- */
    {
      id: "projects",
      title: "Projects",
      kind: "Course and personal work",
      about: "",
      projects: [
        {
          title: "Custom Sim Racing Cockpit",
          year: "",
          type: "Personal project",
          role: "Design, welding, finishing",
          summary: "This project began as a mockup based on our existing sim racing equipment, which I then modeled in Fusion 360 using the actual dimensions of the parts. We sourced a real racing seat from a junkyard car, modified it, and integrated it into the frame geometry. I taught myself flux-core welding to fabricate the frame from 13-gauge steel square tubing, chosen for its strength, affordability, and ease of welding; its flat faces also made mounting the electronics simple. For stability, we added eight individual feet, each with a soft carpet face to protect the floor and let the rig slide when moved. I ground down the joints for a clean finish, painted the frame, added the mounting hardware, and put a rubberized texture on the pedal plate to resist wear.",
          specs: [
            ["Frame", "13 ga steel square tube"],
            ["Joining", "Flux-core welding"],
            ["Feet", "8, carpet-faced"]
          ],
          tools: ["Fusion 360", "Flux-core welding", "Metal finishing"],
          link: "",
          media: [
            { image: "images/IMG_0304.jpg", caption: "Completed sim cockpit" },
            { image: "images/IMG_0240.jpg", caption: "" },
            { image: "images/IMG_0112.jpg", caption: "Welding the frame" },
            { image: "images/IMG_0224.jpg", caption: "" },
            { image: "images/IMG_0114.jpg", caption: "Mockup with wheel and monitor mount" }
          ]
        },
        {
          title: "Catapult Launch System",
          year: "",
          type: "SE 3 course project · UC San Diego",
          role: "Team of four: design, CAD, testing",
          summary: "This project began as a team brainstorm where we developed and iterated through multiple design concepts before settling on a final approach. We designed and CAD modeled the components and tested several 3D printed iterations with different print settings to improve performance and reliability. The catapult is rubber band powered and actuated by a servo motor, with built-in adjustability for launch distance and height, plus a rotating base to aim at different targets. That adjustability was critical to our accuracy: we achieved the highest Performance Index score across all classes while landing projectiles in three distinct targets within strict cost and size constraints.",
          specs: [
            ["Power", "Rubber band"],
            ["Actuation", "Servo motor"],
            ["Result", "Highest Performance Index across all classes"]
          ],
          tools: ["CAD", "3D printing", "Servo control", "Iterative testing"],
          link: "",
          media: [
            { image: "images/IMG_9892.jpg", caption: "" }
          ]
        },
        {
          title: "Beam Deflection Calculator",
          year: "",
          type: "SE 9 course project · UC San Diego",
          role: "Solo",
          summary: "A MATLAB app built in App Designer that calculates and visualizes beam deflection under two loading conditions: a point load and an evenly distributed load. Users can enter beam length, load magnitude, and material properties. The app plots the deflection curve along the beam and reports the maximum deflection, giving both a visual and numerical view of the loading scenario.",
          specs: [
            ["Load cases", "Point load, uniform distributed load"],
            ["Outputs", "Deflection curve, max deflection"]
          ],
          tools: ["MATLAB", "App Designer"],
          link: "",        // paste the GitHub repo link here
          media: [
            { image: "images/beam-app.png", caption: "" }
          ]
        },
        {
          title: "Custom Ball-Joint Phone Mount Adapter",
          year: "",
          type: "Personal project",
          role: "Design, printing, iteration",
          summary: "My mother was frustrated with the flimsy phone mounts available for her Fiat 500, which usually clip to the AC vents. I designed and 3D printed an adapter that plugs into the existing TomTom GPS mount and ends in a ball joint, so a high-quality clamping phone mount can attach in its place. I sized the ball at 17.5 mm instead of the standard 17 mm for a tighter friction fit that doesn't shift with bumps and vibration. The first version, printed in PLA, deformed within days from heat and sun through the windshield, and its height blocked part of her sightline. For version two I switched to PETG-CF for heat resistance and rigidity, and redesigned the arm to extend outward from the vent instead of upward, lowering the phone. I printed with 3 walls and 80% gyroid infill, and slowed the print speed so the PETG layers fused properly. The revised part has held up reliably since.",
          specs: [
            ["Ball joint", "Ø17.5 mm (standard 17 mm)"],
            ["Material", "PLA (v1), PETG-CF (v2)"],
            ["Print", "3 walls, 80% gyroid infill"]
          ],
          tools: ["CAD", "3D printing", "Material selection", "Design iteration"],
          link: "",
          media: [
            { image: "images/IMG_0294.jpg", caption: "" },
            { image: "images/IMG_0290.jpg", caption: "" },
            { image: "images/IMG_0295.jpg", caption: "" }
          ]
        }
      ]
    }
  ]
};
