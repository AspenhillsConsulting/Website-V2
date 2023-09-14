const services = [
  {
    title: 'LOD 300/350 - Trade Contractor Modeling',
    slug: 'lod-300-350',
    image: {
      src: '/img/stock-photo-bim-model-of-a-building-made-of-metal-construction-metal-structure-d-architectural-construction-1168651771.jpg',
      offset: { x: 50, y: -250 },
    },
    summary:
      'LOD 300 provides high levels of detail about the size and position of your structures and systems. LOD 350 takes it a step further, detailing how those structures and systems connect together.',
  },
  {
    title: 'LOD 400 - Fabrication Level Trade Modeling',
    slug: 'lod-400',
    image: {
      src: '/img/services/lod-400/lod400_rack.png',
    },
    summary:
      'LOD 400 offers unparalleled coordination and efficiency throughout the lifecycle of your project. By modelling each component to the level required for automated fabrication and then scheduling the delivery and assembly of every part, LOD 400 project plans are the future of construction management, today.',
  },
  {
    title: 'LIDAR Scanning',
    slug: 'lidar-scanning',
    image: {
      src: '/img/services/lidar/lidar_example_1.jpg',
    },
    summary:
      'LIDAR scanning represents the pinnacle of precision modelling for existing structures and systems. High-precision scans enable you to verify and correct your planned modifications to avoid costly mistakes and delays. The 3D scans can also be turned into detailed, trustworthy documentation for maintenance and future re-use.<br/><br/>Whether you need experts in the field to perform automated scanning or you already have point cloud data that needs to be transformed into a usable 3D model, Aspenhills Consulting are your LIDAR scanning and integration experts.',
  },
  {
    title: 'Robotic Total Station Data Integration',
    slug: 'robotic-total-station-data-integration',
    image: {
      src: '/img/stock-photo-russia-kemerovo-land-surveyor-equipment-robotic-total-station-theodolite-standing-on-1342225910.jpg',
    },
    summary:
      'Trimble is a world-leading developer of high-precision scanning devices. Our workflows can directly integrate data from their Total Station scanners to enhance and optimize your models and processes.',
  },
  {
    title: 'Owner Facilities Management',
    slug: 'owner-facilities-management',
    image: {
      src: '/img/services/Basement model.jpg',
    },
    summary:
      'Aspenhills Consulting can provide you with robust FM systems for your long-term use during operation and maintenance of the building. With our expertise in BIM integration, we can populate your FM systems with high-precision, as-built models and documentation.',
  },
  {
    title: 'Clash Coordination Leadership',
    slug: 'clash-coordination-leadership',
    image: {
      src: '/img/stock-photo-team-of-industrial-engineers-lean-on-office-table-analyze-machinery-blueprints-architectural-1902078616.jpg',
      offset: { x: 50, y: 0 },
    },
    summary:
      'Without precision models and clash coordination, even the best-laid plans can result in costly changes and delays after construction has started and field teams encounter conflicting designs. Aspenhills Consulting can lead and coordinate all of your teams and contractors to prevent, detect, and correct such design clashes before they cause you problems.',
  },
  {
    title: 'Stratus Software Systems',
    slug: 'stratus-software-systems',
    image: {
      src: '/img/stock-photo-knx-installation-bus-1363032959.jpg',
    },
    summary:
      'Stratus Technologies is a world-leader in industrial software and computing. Our partnerships and expertise can leverage Stratus systems to provide you with state-of-the-art software and BIM/VDC workflows for the entire lifecycle of your project.',
  },
]

const connectedServices = [
  ['lod-400', 'lidar-scanning'],
  ['lod-400', 'robotic-total-station-data-integration'],
  ['lod-400', 'owner-fm'],
]

export { services, connectedServices }
