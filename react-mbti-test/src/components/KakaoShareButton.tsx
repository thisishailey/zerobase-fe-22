import { useEffect } from 'react';
import { ShareButton } from '../pages/ResultPage';
import { KAKAO_KEY } from '../constants/KakaoJSKey';

const Kakao = (window as any).Kakao;

export default function KakaoShareButton({ result }: { result: string }) {
    const URL = 'https://meowbti-test.netlify.app';

    useEffect(() => {
        if (!Kakao.isInitialized()) Kakao.init(KAKAO_KEY);
    }, []);

    const shareKakao = () => {
        Kakao.Share.sendDefault({
            objectType: 'feed',
            content: {
                title: '🐈‍⬛🐈 MeowBTI Test Result 🐈🐈‍⬛',
                description: `I got ${result} as my purrfect cat!`,
                imageUrl: URL + '/cat.png',
                link: {
                    mobileWebUrl: URL,
                    webUrl: URL,
                },
            },
            social: {
                likeCount: 392,
                commentCount: 16,
                sharedCount: 572,
            },
            buttons: [
                {
                    title: 'Try it yourself!',
                    link: {
                        mobileWebUrl: URL + '/test',
                        webUrl: URL + '/test',
                    },
                },
            ],
        });
    };

    return (
        <>
            <ShareButton onClick={shareKakao}>Share</ShareButton>
        </>
    );
}
