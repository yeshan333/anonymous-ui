/*
  * bodycompositionrecords: 人体成分记录
*/

export default  {
    namespace: 'bodycompositionrecords',

    state: [
        {
            key: 1,
            name: 'Edrward 1',
            age: 32,
            address: 'London Park no. 1'
        },
        {
            key: 2,
            name: 'Edrward 2',
            age: 33,
            address: 'London Park no. 2'
        },
        {
            key: 3,
            name: 'Edrward 3',
            age: 32,
            address: 'London Park no. 3'
        },
    ],

    reducers: {
        delete(state: any, { record_key }: { record_key: any }) {
            return state.filter((item: any) => item.key !== record_key);
        },
    },
}