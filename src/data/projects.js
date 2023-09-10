const projects = [
  {
    slug: 'colorado-college-robson-ice-arena',
    title: 'Colorado College Robson Ice Arena',
    icon: '/img/logos/colorado_college.png',
    date: 'mmm 20YY',
    location: {
      shortState: 'co',
      fullState: 'Colorado',
      city: 'Colorado Springs',
      latLon: '38.8479662,-104.8279233',
    },
    tags: ['LOD 400', 'tag 2', 'tag 3'],
  },
  {
    slug: 'air-force-academy-cadet-chapel-renovation',
    title: 'Air Force Academy Cadet Chapel Renovation',
    icon: '/img/logos/af-logo.png',
    date: 'mmm 20YY',
    location: {
      shortState: 'co',
      fullState: 'Colorado',
      city: 'Colorado Springs',
      latLon: '38.9978372,-104.8630677',
    },
    tags: ['tag 2', 'tag 4'],
  },
  {
    slug: 'university-tennessee-martin-stem',
    title: 'University Tennessee Martin STEM',
    icon: '/img/logos/utmartin.jpg',
    date: 'mmm 20YY',
    location: {
      shortState: 'tn',
      fullState: 'Tennessee',
      city: 'Martin',
      latLon: '36.3431813,-88.8666425',
    },
    tags: ['tag 3', 'tag 4'],
  },
  {
    slug: 'state-of-wyoming-capitol-building',
    title: 'State of Wyoming Capitol Building',
    icon: '/img/logos/wyoming_capitol.jpg',
    date: 'mmm 20YY',
    location: {
      shortState: 'wy',
      fullState: 'Wyoming',
      city: 'Cheyenne',
      latLon: '41.1402745,-104.82255',
    },
    tags: ['LOD 400', 'tag 3', 'tag 4'],
  },
  {
    slug: 'fort-irwin-army-hospital',
    title: 'Fort Irwin Army Hospital',
    icon: '/img/logos/fortirwin.png',
    date: 'mmm 20YY',
    location: {
      shortState: 'ca',
      fullState: 'California',
      city: 'Fort Irwin',
      latLon: '35.2729993,-116.6839366',
    },
    tags: ['tag 1', 'tag 3'],
  },
]

export { projects }

// export const getters = {
//   projectStates: state => {
//     let states = []

//     state.list.forEach(proj => {
//       const info = {
//         shortState: proj.location.shortState,
//         fullState: proj.location.fullState,
//       }

//       if(!states.map(f => f.shortState).includes(info.shortState))
//         states.push(info)
//     })

//     return states
//   },

//   projectsByState: state => {
//     let filteredProjects = {}

//     state.list.forEach(proj => {
//       if(!filteredProjects[proj.location.shortState])
//         filteredProjects[proj.location.shortState] = []

//         filteredProjects[proj.location.shortState].push(proj)
//     })

//     return filteredProjects
//   },

//   alphabetical: state => {
//     return state.list.slice().sort(compareProjects)
//   },

//   projectsByTag: state => tag => {
//     return state.list.filter(f => f.tags.includes(tag))
//   },
// }

// function compareProjects(a, b) {
//   if (a.title < b.title)
//     return -1
//   if (a.title > b.title)
//     return 1
//   return 0
// }
