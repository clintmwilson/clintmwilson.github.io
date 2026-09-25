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
  email: "clintwilsonm@gmail.com",
  linkedin: "https://www.linkedin.com/in/clint-m-wilson",
  github: "",
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
            // For video: upload to YouTube (unlisted is fine) and add a line like:
            // { youtube: "https://youtu.be/XXXXXXXXXXX", caption: "Initial test flight" },
            { youtube: "https://www.youtube.com/watch?v=mW21qmXXzGM", caption: "Initial test flight" },
            { image: "images/drone-02.jpg", caption: "Cutting the carbon fiber tubes to length" },
            { image: "images/drone-04.jpg", caption: "3D printed tube clamp prototypes" },
            { image: "images/drone-05.jpg", caption: "Frame dry fit with arms, center plate, and printed mounts" },
            { image: "images/drone-07.jpg", caption: "Motors mounted on all six arms with the center plate assembled" },
            { image: "images/drone-08.jpg", caption: "Final assembly with landing legs and battery before test flights" }
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
            ["Joining", "Flux-core welding"]
          ],
          tools: ["Fusion 360", "Flux-core welding", "Metal finishing"],
          link: "",
          media: [
            { image: "images/sim-01.jpg", caption: "Completed sim cockpit" },
            { image: "images/sim-02.jpg", caption: "Mockup with wheel and monitor mount" },
            { image: "images/sim-03.jpg", caption: "Checking the mockup from the driver's seat" },
            { image: "images/sim-04.jpg", caption: "Welding the frame" },
            { image: "images/sim-05.jpg", caption: "Seat, wheel, and pedals test fitting with the welded frame" },
            { image: "images/sim-06.jpg", caption: "Wheel base and monitor arm mounted to the frame" },
            { image: "images/sim-07.jpg", caption: "Pedal plate with rubberized texture" },
            { image: "images/sim-08.jpg", caption: "In use" }
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
            { image: "images/catapult-01.jpg", caption: "Concept sketches from the team brainstorm" },
            { image: "images/catapult-02.jpg", caption: "CAD assembly with servo, rotating base, and launch arm" },
            { image: "images/catapult-03.jpg", caption: "Side frame and launch arm in CAD" },
            { image: "images/catapult-04.jpg", caption: "Engineering drawing for the latch base" },
            { image: "images/catapult-05.jpg", caption: "3D printed prototype" },
            { image: "images/catapult-06.jpg", caption: "Completed frame after painting" }
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
          link: "https://github.com/clintmwilson/matlab-deflection-app",        // paste the GitHub repo link here
          media: [
            { image: "images/beam-01.png", caption: "App solving a point load case, with the deflection curve and max deflection" }
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
            { image: "images/phone-01.jpg", caption: "Final version holding a phone, mounted low beside the vent" },
            { image: "images/phone-02.jpg", caption: "Adapter installed in the car's factory TomTom GPS socket" },
            { image: "images/phone-03.jpg", caption: "View from the passenger's side" },
            { image: "images/phone-04.jpg", caption: "Adapter with the clamping phone mount attached" }
          ]
        }
      ]
    }
  ]
};
