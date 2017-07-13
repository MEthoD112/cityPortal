const json = [
    {
        'id': 0,
        'name': 'Minsk',
        'isIndustrial': true,
        'isCriminal': false,
        'isPolluted': false,
        'cityAreas': [
            { id: 0,
              name: 'Serebryanka', 
              description: 'The best place in the world',
              citizenAmount: 300000 },
            { id: 1,
              name: 'Chigovka', 
              description: 'The worst place in the world',
              citizenAmount: 200000}  
        ]
    },
    {
        'id': 1,
        'name': 'New York',
        'isIndustrial': true,
        'isCriminal': true,
        'isPolluted': true,
        'cityAreas': [
            { id: 0,
              name: 'Bronx', 
              description: 'The worst place in the New York',
              citizenAmount: 450000 },
            { id: 1,
              name: 'Brooklyn', 
              description: 'The best place in the New York',
              citizenAmount: 350000}  
        ]
    },
    {
        'id': 2,
        'name': 'Tokyo',
        'isIndustrial': true,
        'isCriminal': false,
        'isPolluted': true,
        'cityAreas': [
            { id: 0,
              name: 'YakudzaDistrict', 
              description: 'The best sushi in this place',
              citizenAmount: 130000 },
            { id: 1,
              name: 'Fukusima', 
              description: 'Be carefull, it is dirty',
              citizenAmount: 70000}  
        ]
    },
    {
        'id': 3,
        'name': 'Varkuta',
        'isIndustrial': false,
        'isCriminal': true,
        'isPolluted': true,
        'cityAreas': []
    },
    {
        'id': 4,
        'name': 'Moscow',
        'isIndustrial': true,
        'isCriminal': true,
        'isPolluted': true,
        'cityAreas': [
            { id: 0,
              name: 'Ximki', 
              description: 'Far away from Kremlin',
              citizenAmount: 190000 },
            { id: 1,
              name: 'Zamoskvorech\'e', 
              description: 'The center of the city',
              citizenAmount: 770000}  
        ]
    }
];

//localStorage.setItem('cities', JSON.stringify(json));