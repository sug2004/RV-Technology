export type Product = {
  id: number;
  title: string;
  type: 'mechanical' | 'electrical' | 'battery' | 'cooling' | 'display' | 'servo';
  image?: string;
  description?: string;
};

export const products: Product[] = [
  // ⚙️ Mechanical
  { id: 1, title: 'Ball Screws', type: 'mechanical' },
  { id: 2, title: 'LM Guideways', type: 'mechanical' },
  { id: 3, title: 'Tool Holders & Couplings', type: 'mechanical' },
  { id: 4, title: 'Accumulator', type: 'mechanical' },
  { id: 5, title: 'ATC Alignment Gauge', type: 'mechanical' },
  { id: 6, title: 'Push Button Switches', type: 'mechanical' },
  { id: 7, title: 'Axis Coupling', type: 'mechanical' },
  { id: 8, title: 'Axis Ball Screw', type: 'mechanical' },
  { id: 9, title: 'ATC Push & Plunger Rods', type: 'mechanical' },
  { id: 10, title: 'Panel Beading', type: 'mechanical' },
  { id: 11, title: 'Cable Carrier', type: 'mechanical' },
  { id: 12, title: 'CAM Rollers', type: 'mechanical' },
  { id: 13, title: 'Chuck', type: 'mechanical' },
  { id: 14, title: 'PRAGATI', type: 'mechanical' },
  { id: 15, title: 'Tower Lamp', type: 'mechanical' },
  { id: 16, title: 'Axis Wiper', type: 'mechanical' },
  { id: 17, title: 'Mode Selections Rotary Switch', type: 'mechanical' },
  { id: 18, title: 'Draw Bar Disc Spring', type: 'mechanical' },
  { id: 19, title: 'Hydraulic Filters', type: 'mechanical' },
  { id: 20, title: 'SSR', type: 'mechanical' },
  { id: 21, title: 'Hydraulic & Lubrication Pressure Gauges', type: 'mechanical' },
  { id: 22, title: 'Hydraulic Power Pack', type: 'mechanical' },
  { id: 23, title: 'Turcite Sheet', type: 'mechanical' },
  { id: 24, title: 'Spindle Mandrels', type: 'mechanical' },
  { id: 25, title: 'Spindle & Axis Belts', type: 'mechanical' },
  { id: 26, title: 'Spindle & Axis Bearing', type: 'mechanical' },
  { id: 27, title: 'Spindle & Axis Lock Nut', type: 'mechanical' },
  { id: 28, title: 'Spindle Drawbar Clamping Force Gauges', type: 'mechanical' },
  { id: 29, title: 'Spindle Drawbar Collect', type: 'mechanical' },
  { id: 30, title: 'Tool Pocket Magazine', type: 'mechanical' },
  { id: 31, title: 'Impeller', type: 'mechanical' },
  { id: 32, title: 'Lubrication Ferrules', type: 'mechanical' },
  { id: 33, title: 'Link Ball Rod', type: 'mechanical' },
  { id: 34, title: 'Cable Trade Chain', type: 'mechanical' },
  { id: 35, title: 'OKS 265 Chuck Paste', type: 'mechanical' },

  // ⚡ Electrical
  { id: 36, title: 'Servo Motors', type: 'electrical' },
  { id: 37, title: 'Spindle Motors', type: 'electrical' },
  { id: 38, title: 'Teach Pendants', type: 'electrical' },
  { id: 39, title: 'PCB & I/O Boards', type: 'electrical' },
  { id: 40, title: 'Relay Board', type: 'electrical' },
  { id: 41, title: 'Omron SMPS', type: 'electrical' },
  { id: 42, title: 'Pneumatic Solenoid Valve', type: 'electrical' },
  { id: 43, title: 'Polyhydron Pressure Switch', type: 'electrical' },
  { id: 44, title: 'Solenoid Valve', type: 'electrical' },
  { id: 45, title: 'Hydraulic Pneumatic Cylinder', type: 'electrical' },
  { id: 46, title: 'Imported Lubrication Cartridges', type: 'electrical' },
  { id: 47, title: 'Take off Cartridges', type: 'electrical' },
  { id: 48, title: 'ARD Oil Injectors', type: 'electrical' },
  { id: 49, title: 'Through Coolant Rotary Union', type: 'electrical' },

  // 🔋 Battery
  { id: 50, title: 'CNC Battery Packs', type: 'battery' },
  { id: 51, title: 'CNC – PLC Batteries (Fanuc, Mitsubishi, Panasonic, Siemens, Toshiba)', type: 'battery' },

  // 🌬️ Cooling
  { id: 52, title: 'DC Axial Fans – A90L-0001-0586, 3214J/39HU', type: 'cooling' },
  { id: 53, title: 'AC Axial Fans – A90L-0001-0551, MMF-06D24ES', type: 'cooling' },
  { id: 54, title: 'Spindle Fans – 109P0424H7D20, 9WF0624FD03', type: 'cooling' },
  { id: 55, title: 'DC Radial Impellers – 1608VL-05W-B69, MMF-06F24ES-EP1', type: 'cooling' },
  { id: 56, title: 'DC Centrifugal Blowers – A02B-0259-C020, A90L-0001-0411', type: 'cooling' },
  { id: 57, title: 'PWM Speed Control – 2406KL-05W-B59, A90L-0001-0385#A', type: 'cooling' },

  // 📺 Display
  { id: 58, title: 'LCD Display Screens – Sharp, Mitsubishi, NEC, Tasaku', type: 'display' },

  // 🔌 Servo
  { id: 59, title: 'Servo System Cable Assembly', type: 'servo' },
  { id: 60, title: 'MPG Manual Pulse Generator – Fanuc, Siemens, YLK', type: 'servo' },
  { id: 61, title: 'Pulse Encoders – Fanuc A860 Series, Siemens, OSA', type: 'servo' },
  { id: 62, title: 'Keysheets & Membrane Keypads – Siemens 6FC, Fanuc A86L, etc.', type: 'servo' },
  { id: 63, title: 'Servo Connectors & Encoder Cables', type: 'servo' }
];
