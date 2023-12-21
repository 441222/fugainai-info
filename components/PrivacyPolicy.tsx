// components/PrivacyPolicy.tsx
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="mt-8 p-4 border rounded shadow-lg">
      <h2 className="text-2xl font-bold  mb-4">プライバシーポリシー</h2>
      <p>
      「ふがいない空の街」では、プレイヤーのプライバシーを最優先に考慮しています。
        このゲームには、画像のアップロードやBluetoothを使用したデバイスとの連携機能が含まれていますが、これらの機能は撮影日、場所、またはその他の個人を特定可能な情報を収集する目的で使用されることはありません。
        私たちは、ユーザーのプライバシー保護を第一に考え、個人情報の安全を確保するために最善を尽くします。
      </p>
      {/* プライバシーポリシーの詳細な内容 */}
    </div>
  );
};

export default PrivacyPolicy;
