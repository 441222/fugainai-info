// pages/index.tsx
import type { NextPage } from 'next';
import Image from 'next/image';
import PrivacyPolicy from '../components/PrivacyPolicy';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 px-4">
      <h1 className="text-4xl font-bold mb-6">
        ふがいない空の街
      </h1>

      <p className="text-center mt-6 mb-8">
        「ふがいない空の街」は、岐阜県大垣市が舞台のビジュアルノベルゲームです。物語は実在する場所を中心に展開し、プレイヤーはSNSを駆使して街を巡り、現実世界でQRコードを集めることで物語やイルミネーションに影響を与えます。もしまだ大垣市を訪れたことがなければ、このゲームを通じて新しい発見があるかもしれません。ぜひプレイしに来てみてください。
      </p>


      <div className="mt-6">
        <Image
          src="/top.png" // Replace with your image path
          alt="Sample Image"
          width={500}
          height={300}
        />
      </div>

      <div className="mt-6">
        <Image
          src="/game_ui_01-10.png" // Replace with your image path
          alt="how to play 1"
          width={500}
          height={300}
        />
      </div>

      <div className="mt-6">
        <Image
          src="/game_ui_01-11.png" // Replace with your image path
          alt="how to play 2"
          width={500}
          height={300}
        />
      </div>
      
      <p className="text-center mt-6 mb-8">
        ご質問やフィードバックがある場合は、以下のメールアドレスまでお気軽にお問い合わせください: ootani-yoshiyuki19@iamas.ac.jp
      </p>

      <PrivacyPolicy />

    </div>
  );
};

export default Home;
