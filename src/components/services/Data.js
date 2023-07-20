import fridges from '../../assets/صيانة-ثلاجات.webp'
import washing from '../../assets/صيانة-غسالات.webp'
import tv from '../../assets/صيانة-شاشات.webp'
import microwave from '../../assets/صيانة-ميكروويف.webp'


const Data = [
    {
        id: 1,
        title: 'صيانة ثلاجات',
        img: fridges,
        desc: 'صيانة ثلاجات ',
        price: '150 ريال',
        path: '/fridges'
    },
    {
        id: 2,
        title: 'صيانة غسالات',
        img: washing,
        desc: 'صيانة غسالات ',
        price: '150 ريال',
        path: '/washing'
    },
    {
        id: 3,
        title: 'صيانة شاشات',
        img: tv,
        desc: 'صيانة شاشات',
        price: '150 ريال',
        path: '/tv'
    },
    {
        id: 4,
        title: 'صيانة ميكروويف',
        img: microwave,
        desc: 'صيانة ميكروويف ',
        price: '150 ريال',
        path: '/microwave'
    },
]

export default Data