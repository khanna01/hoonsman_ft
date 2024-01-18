import img1 from '../../imgs/img1.png'
import img2 from '../../imgs/img2.png'
import img3 from '../../imgs/img3.png'
import img4 from '../../imgs/img4.png'
import img5 from '../../imgs/img5.png'
import img6 from '../../imgs/img6.png'
import img7 from '../../imgs/img7.png'
import img8 from '../../imgs/img8.png'

const SampleData = [
    {
        type: 0,
        s1: {
            imgs: {
                intro: img1,
                img1: img2,

                // 경로
                img2: img2,
                img3: img3,
                img4: img4,
            },
            messages: [
                { content: 'message1', size: 'large', color: 'white' },
                { content: 'message2', size: 'medium', color: 'white' },
                { content: 'message3', size: 'medium', color: 'white' },
                { content: 'message4', size: 'medium', color: 'white' },
            ],
        },
        s2: {
            imgs: {
                img5: img5,
                img6: img6,
            },
            messages: [
                { content: 'message5', size: 'medium', color: 'white' },
                { content: 'message6', size: 'medium', color: 'white' },
                { content: 'message7', size: 'medium', color: 'white' },
                { content: 'message8', size: 'medium', color: 'white' },
            ],
        },
        s3: {
            imgs: {
                img7: img7,
                img8: img8,
            },
            messages: [
                { content: 'message9', size: 'medium', color: 'white' },
                { content: 'message10', size: 'medium', color: 'white' },
            ],
        },
    },
    {
        type: 1,
        scenes: [
            {
                id: 's1',
                images: ['img/intro.png'],
                messages: [
                    {
                        text: '세미나에 대한 소개',
                        size: 'large',
                        color: 'white',
                    },
                ],
            },
            {
                id: 's2',
                images: {
                    image1: 'img/desc1.png',
                    image2: 'img/desc1.png',
                    image3: 'img/desc1.png',
                },
                messages: [
                    {
                        text: '키워드 1',
                        size: 'large',
                        color: 'white',
                    },
                    {
                        text: '세미나에 대한 설명 1',
                        size: 'small',
                        color: 'black',
                    },
                ],
            },
            {
                id: 's3',
                images: {
                    image1: 'img/desc2.png',
                    image2: 'img/desc2.png',
                    image3: 'img/desc2.png',
                },
                messages: [
                    {
                        text: '키워드 2',
                        size: 'large',
                        color: 'white',
                    },
                    {
                        text: '세미나에 대한 설명 2',
                        size: 'small',
                        color: 'black',
                    },
                ],
            },
            {
                id: 's4',
                images: ['img/location.png'],
                messages: [
                    {
                        text: '세미나 위치',
                        size: 'large',
                        color: 'white',
                    },
                    {
                        text: '시간과 날짜',
                        size: 'medium',
                        color: 'white',
                    },
                ],
            },
            {
                id: 's5',
                images: ['img/conclusion.png'],
                messages: [
                    {
                        text: '맺음말',
                        size: 'large',
                        color: 'white',
                    },
                ],
            },
        ],
    },
    {
        type: 2,
        scene1: {
            image: {
                1: {
                    path: '/img/wedding_Image/img1.png',
                },
            },
            message: {
                1: {
                    content: '신부 ooo 신랑 ooo ',
                    size: 'medium',
                    color: 'white',
                },
                2: {
                    content: '결혼합니다',
                    size: 'medium',
                    color: 'white',
                },
            },
        },
        scene2: {
            image: {
                1: {
                    path: '/img/wedding_Image/img1.png',
                },
                2: {
                    path: '/img/wedding_Image/img2.png',
                },
                3: {
                    path: '/img/wedding_Image/img3.png',
                },
                4: {
                    path: '/img/wedding_Image/img4.png',
                },
            },
            message: {
                1: {
                    content: '햇살처럼 따뜻하게 안아줄 수 있는',
                    size: 'medium',
                    color: 'white',
                },
                2: {
                    content: '늘 곁에서 서로를 웃게 해줄 수 있는',
                    size: 'medium',
                    color: 'white',
                },
                3: {
                    content: '소중한 사람을 만났습니다.',
                    size: 'medium',
                    color: 'white',
                },
                4: {
                    content: '햇살 가득한 10월 결혼합니다.',
                    size: 'medium',
                    color: 'white',
                },
            },
        },
        scene3: {
            image: {
                1: {
                    path: '/img/wedding_Image/img1.png',
                },
                2: {
                    path: '/img/wedding_Image/img2.png',
                },
                3: {
                    path: '/img/wedding_Image/img3.png',
                },
                4: {
                    path: '/img/wedding_Image/img4.png',
                },
            },
            message: {
                1: {
                    content: '귀한 걸음 하시어 따뜻한 마음으로',
                    size: 'medium',
                    color: 'white',
                },
                2: {
                    content: '기쁜 날, 가까이서 축복해 주시면',
                    size: 'medium',
                    color: 'white',
                },
                3: {
                    content: '축복해 주시면 더 없는 기쁨이 되겠습니다.',
                    size: 'medium',
                    color: 'white',
                },
                4: {
                    content:
                        '소중한 인연과 귀한 발걸음, 저희도 발맞추어 살아가겠습니다',
                    size: 'medium',
                    color: 'white',
                },
            },
        },
        scene4: {
            image: {
                1: {
                    path: '/img/wedding_Image/img1.png',
                },
                2: {
                    path: '/img/wedding_Image/img2.png',
                },
            },
            message: {
                1: {
                    content: '날짜',
                    size: 'medium',
                    color: 'white',
                },
                2: {
                    content: '장소',
                    size: 'medium',
                    color: 'white',
                },
            },
        },
    },
    {
        type: 3,
        주석: {
            large: '50px',
            medium: '25px',
        },

        s1: {
            imgs: {
                intro: '/img/Promo_Image/sampleImg.png',
                img1: '/img/Promo_Image/Comp1_Main.png',
                img2: '/img/Promo_Image/Comp1_Sub.png',
            },
            messages: [
                { context: '갤럭시 Z 플립 5', size: 'large', color: 'black' },
            ],
        },
        s2: {
            imgs: {
                img3: '/img/Promo_Image/Comp2_Main.png',
            },
            messages: [
                {
                    context: '최대 크기의 커버 스크린,\n플렉스 윈도우',
                    size: 'large',
                    color: 'black',
                },
                {
                    context:
                        '나를 온전하게 표현할 수 있는 86.1mm 플렉스 윈도우를 만나보세요.\n새로운 플렉스 힌지를 장착한 Z플립5와 함께 하세요.',
                    size: 'medium',
                    color: 'black',
                },
            ],
        },
        s3: {
            imgs: {
                img4: '/img/Promo_Image/Comp3_Sub1.png',
                img5: '/img/Promo_Image/Comp3_Sub2.png',
                img6: '/img/Promo_Image/Comp3_Sub3.png',
            },
            messages: [
                {
                    context: '안심할 수 있는 내구성',
                    size: 'large',
                    color: 'black',
                },
                {
                    context:
                        '듀얼 레일 구조로 내구성이 뛰어난 플렉스 힌지를 만나보세요.\n갤럭시 Z플립5는 견고하여 안심하고 사용할 수 있습니다.',
                    size: 'medium',
                    color: 'black',
                },
            ],
        },
        s4: {
            messages: [
                {
                    context: '지금 바로 Z플립5와 함께하세요!',
                    size: 'large',
                    color: 'black',
                },
            ],
        },
    },
]

export default SampleData
