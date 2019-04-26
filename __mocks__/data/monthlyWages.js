
export default [
  {
    month: 1,
    year: 2015,
    workers: [
      {
        id: 1,
        fullname: 'Foo Bar',
        days: [
          {
            date: '1.1.2015',
            eveningHours: 0,
            hours: 8,
            overtimeHours: 0,
            shifts: [
              {
                start: '8:00',
                end: '16:00',
              },
            ],
            wage: 34,
          },
          {
            date: '2.1.2015',
            eveningHours: 0,
            hours: 10,
            overtimeHours: 2,
            shifts: [
              {
                start: '6:00',
                end: '10:00',
              },
              {
                start: '12:00',
                end: '18:00',
              },
            ],
            wage: 44.63,
          },
        ],
      },
      {
        id: 2,
        fullname: 'Bar Baz',
        days: [
          {
            date: '1.1.2015',
            eveningHours: 0,
            hours: 8,
            overtimeHours: 0,
            shifts: [
              {
                start: '8:00',
                end: '16:00',
              },
            ],
            wage: 34,
          },
          {
            date: '2.1.2015',
            eveningHours: 6,
            hours: 10,
            overtimeHours: 2,
            shifts: [
              {
                start: '00:00',
                end: '10:00',
              },
            ],
            wage: 52.13,
          },
        ],
      },
      {
        id: 3,
        fullname: 'Asd Das',
        days: [
          {
            date: '1.1.2015',
            eveningHours: 2,
            hours: 12,
            overtimeHours: 4,
            shifts: [
              {
                start: '4:00',
                end: '16:00',
              },
            ],
            wage: 58.81,
          },
          {
            date: '3.1.2015',
            eveningHours: 8,
            hours: 12,
            overtimeHours: 4,
            shifts: [
              {
                start: '20:00',
                end: '21:00',
              },
              {
                start: '23:00',
                end: '10:00',
              },
            ],
            wage: 66.31,
          },
        ],
      },
    ],
  },
]
