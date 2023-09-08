const services = [
  {
    title: 'LOD 300/350 - Trade Contractor Modeling',
    slug: 'lod-300-350',
  },
  {
    title: 'LOD 400 - Fabrication Level Trade Modeling',
    slug: 'lod-400',
    image: {
      src: '/services/lod400/lod400_rack.png',
      position: '50% 60%',
    },
    list: [
      'Individual component models',
      'Spool Drawings which are formatted to meet your preferences',
      'MAJ files for direct download to Manufacturing Equipment',
      'Pre-Cutting and Pre-Fabrication modeling',
      'Multi-Trade Pre-Assembly Modeling',
      'Output to label printers',
    ],
  },
  {
    title: 'LIDAR Scanning Services',
    slug: 'lidar-scanning-services',
    image: {
      src: '/services/lidar/lidar_example_1.jpg',
      position: '50% 40%',
    },
    list: [
      'Our technicians can provide scanning services anywhere in the United States',
      'Point Cloud registration services',
      'Scan to BIM capabilities',
    ],
  },
  {
    title: 'Robotic Total Station Data Integration',
    slug: 'robotic-total-station-data-integration',
    image: {
      src: '/stock-photo-russia-kemerovo-land-surveyor-equipment-robotic-total-station-theodolite-standing-on-1342225910.jpg',
      position: '50% 40%',
    },
    summary: 'Total Station points can be inserted into our models for download to your RTS units',
  },
  {
    title: 'Owner FM Services',
    slug: 'owner-fm-services',
    image: {
      src: '/services/Basement model.jpg',
      position: '50% 20%',
    },
    list: [
      'Final as-built models transferred to Project Owner FM systems',
      'Provide FM systems for your long-term use during operation of the building',
    ],
  },
  {
    title: 'Clash Coordination Leadership',
    slug: 'clash-coordination-leadership',
  },
  {
    title: 'Stratus Software Systems',
    slug: 'stratus-software-systems',
  },
]

const connectedServices = [
  ['lod-400', 'lidar-scanning-services'],
  ['lod-400', 'robotic-total-station-data-integration'],
  ['lod-400', 'owner-fm-services'],
]

export {
  services,
  connectedServices,
}