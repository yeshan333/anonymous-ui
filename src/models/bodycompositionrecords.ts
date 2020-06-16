/*
  * bodycompositionrecords: 人体成分记录
*/

export default  {
    namespace: 'bodycompositionrecords',

    state: [
        {
            key: 1,
            ID: 1,
            name: 'Edrward 1',
            age: 32,
            gernder: 'F',
            testdate: '2017.10.30 11:09:09',
            weight: '54.4',
            Lower_Limit: '45.7',
            address: 'London Park no. 5'
        },
        {
            key: 2,
            ID: 2,
            name: 'Edrward 2',
            age: 33,
            gernder: 'F',
            testdate: '2017.10.30 11:09:09',
            weight: '54.4',
            Lower_Limit: '45.7',
            address: 'London Park no. 6'
        },
        {
            key: 3,
            ID: 3,
            name: 'Edrward 3',
            age: 33,
            gernder: 'M',
            testdate: '2017.10.33 11:11:09',
            weight: '54.9',
            Lower_Limit: '45.7',
            address: 'London Park no. 4'
        },
        {
            key: 4,
            ID: 4,
            name: 'Edrward 4',
            age: 33,
            gernder: 'M',
            testdate: '2018.10.33 11:11:09',
            weight: '54.0',
            Lower_Limit: '45.0',
            address: 'London Park no. 5'
        },
    ],

    reducers: {
        delete(state: any, { record_key }: { record_key: any }) {
            return state.filter((item: any) => item.key !== record_key);
        },
    },
}