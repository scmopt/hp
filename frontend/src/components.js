import React, { useState } from 'react';

// Header Component
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-gray-900">
              <span className="text-teal-700">Λ</span> MOAI Lab
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-teal-700 transition-colors">Home</a>
            <a href="#solutions" className="text-gray-700 hover:text-teal-700 transition-colors">Solutions</a>
            <a href="#platform" className="text-gray-700 hover:text-teal-700 transition-colors">Products</a>
            <a href="#pricing" className="text-gray-700 hover:text-teal-700 transition-colors">Resources</a>
            <a href="#team" className="text-gray-700 hover:text-teal-700 transition-colors">About</a>
            <a href="#news" className="text-gray-700 hover:text-teal-700 transition-colors">English</a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <a href="#home" className="text-gray-700 hover:text-teal-700 transition-colors py-2">Home</a>
              <a href="#solutions" className="text-gray-700 hover:text-teal-700 transition-colors py-2">Solutions</a>
              <a href="#platform" className="text-gray-700 hover:text-teal-700 transition-colors py-2">Products</a>
              <a href="#pricing" className="text-gray-700 hover:text-teal-700 transition-colors py-2">Resources</a>
              <a href="#team" className="text-gray-700 hover:text-teal-700 transition-colors py-2">About</a>
              <a href="#news" className="text-gray-700 hover:text-teal-700 transition-colors py-2">English</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

// Hero Section Component
export const HeroSection = () => {
  return (
    <section 
      id="home"
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1467806757054-808649965a76')`
      }}
    >
      <div className="text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          MOAIソリューションで<br />
          大規模最適化の課題を解決
        </h1>
        <p className="text-xl md:text-2xl mb-8 leading-relaxed">
          数理最適化と機械学習の融合技術「MOAI」で<br />
          サプライチェーン、エネルギー、金融、セキュリティ、マーケティングなどにおける実用化を実現
        </p>
      </div>
    </section>
  );
};

// Why We Stand Out Section
export const WhyWeStandOut = () => {
  return (
    <section id="why" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-teal-700 mb-12">Why we stand out</h2>
        
        <div className="space-y-8 text-gray-700 leading-relaxed">
          <p>
            機械学習（ML）で人工知能（PN）を構築対象とするアプリケーション（ML+AI搭載型機能）で最先端の技術を採用し続けております。機械学習は多様なアプリケーション
            フィールドの課題に対し、非常に優れた技術です。データだけでなく問題を直観するなど、機械学習とデータサイエンスを組み合わせた「数理」とを融合したいと考えます。
            しかし、AIが最適解を求めるためには基本的な確証を加えてユーザーに満足してもらえるかは限界があります。
          </p>
          
          <p>
            私たちは、これまで導いた技術を併合しなりの数理最適化を活用し「MOAI (Mathematical Optimization + Artificial Intelligence)」と名づけ、これまで対象対象が制約の中
            で最も良い解を見つけることは困難であった従来の課題に対し、「それらを」従来の課題の確証を加えて優れたソリューションを提供することができました。これは研究開発と機械学習とに
            実行効果を発揮する、基本に基づくソリューション性、そして開発にこの段階の研究開発の理論と実際のソリューションに最も必要とされる「間」として役立つものでもあります。
          </p>
        </div>
      </div>
    </section>
  );
};

// MOAI Platform Section
export const MOAIPlatformSection = () => {
  return (
    <section id="platform" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-teal-700 mb-12">MOAI Platform</h2>
        
        <div className="space-y-8 text-gray-700 leading-relaxed">
          <p className="text-center text-xl mb-8">
            特定の業務問題のソルバーご提供あるいは UI 問題に対応も手軽な可視化プラットフォームを利用できます。
          </p>
          
          <p>
            物理プラットフォームライセンス（UI・機械学習・可視化）として運営される専門技術に、優雅な問題設定のために可視化からのサポートまでメリハリのつけた、優雅な方法選択
            提供の際に対してコンでいる基本概念ユーザーさまで可能な基本データで以下のようなネストタスクやSOFで以下、思想構成のタスク（UI-controller、UI-brand）および統合されていた
            く、代表内容では以下なもの。
          </p>
          
          <p>
            さぁら、最適最適化ソルバー（GurobiとCBC、CPLEX など）応は元と多くの利用化のアプリケーショニング問題にあり、そのため住正な論考の問題ソルバー作業修正
            やそう管理最適化に必要となります。専門の問題から設計化、基算の最適システムの開発結合に求めうば。
          </p>
          
          <div className="text-center mt-12">
            <p className="text-lg font-semibold mb-8">
              大規模データの分析や大規模最適化型最適の事業のためモジュール対象とされています。
            </p>
            <p className="mb-8">
              MOAIプラットフォームは、基盤機能としては機略のソルバー構築や最適化。データ分析や知見・制約すやりモジュール対象とされています。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-center mb-4">データ分析機能</h3>
              <p className="text-center">最適課題のためのデータ分析やアルゴリズム生成</p>
              <p className="text-center mt-4">専門的分析ツールもご対応れるソルバー最適化システム対応</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-center mb-4">最適化最適最適化機能</h3>
              <p className="text-center">課題化・最適化支援やアルゴリズム生成」</p>
              <p className="text-center mt-4">
                算定化で資産ごと運MOAI、最適線属性。スケジューリング、
                大、経営学習でアプリケーションのため高度効
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mt-12 text-center">
            <div>
              <h4 className="text-lg font-bold mb-2">特徴</h4>
              <p className="text-sm">少人数</p>
              <p className="text-sm">スケジュール体制で機能的な提案でのアクション体制</p>
              <p className="text-sm">でさ効果なので、少人数での回数</p>
              <p className="text-sm">バッチプランをng拠制</p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-2">短期間</h4>
              <p className="text-sm">現場経営、専門的アルゴリズム対</p>
              <p className="text-sm">対話きア集約化を対するわ問題経</p>
              <p className="text-sm">制になどを効果実環境</p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-2">プライバル</h4>
              <p className="text-sm">最適性のずにリードファクション対</p>
              <p className="text-sm">カスタマイズ最適化のり、ビジス</p>
              <p className="text-sm">深誠度へよりに活用化フィルタ期</p>
              <p className="text-sm">るき合間</p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-2">大規模</h4>
              <p className="text-sm">専門メッセージの規模のお資約運</p>
              <p className="text-sm">の最適問題に提供化するるクリジ</p>
              <p className="text-sm">スム生解</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Optimization Solutions Section
export const OptimizationSolutions = () => {
  const solutions = [
    {
      title: "エネルギー",
      image: "https://images.unsplash.com/photo-1548337138-e87d889cc369",
      description: "風力・太陽光発電の最適化"
    },
    {
      title: "サプライチェーン設計",
      image: "https://images.unsplash.com/photo-1655993810480-c15dccf9b3a0",
      description: "供給網ネットワーク最適化"
    },
    {
      title: "金融・製造",
      image: "https://images.unsplash.com/photo-1558298248-e70b2375af4a",
      description: "製造業向け最適化ソリューション"
    },
    {
      title: "物流・配送",
      image: "https://images.unsplash.com/photo-1720127601642-7c3a7ba88f5f",
      description: "配送ルート最適化"
    },
    {
      title: "需要予測と在庫",
      image: "https://images.pexels.com/photos/31112250/pexels-photo-31112250.jpeg",
      description: "在庫管理最適化"
    },
    {
      title: "人員最適計画",
      image: "https://images.unsplash.com/photo-1467654513564-17c5e87d8f20",
      description: "人的リソース最適配置"
    }
  ];

  return (
    <section id="solutions" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-teal-700 mb-12">Optimization Solutions</h2>
        
        <div className="text-center mb-12 space-y-4">
          <p className="text-lg">
            私たちは、最適化技術最適のテクノロジーナルとして、
          </p>
          <p className="text-lg">
            さまざまな大規模最適化の課題の解決期技術を兼併し、最適なソリューションを提供します。
          </p>
        </div>

        <div className="space-y-8 text-gray-700 leading-relaxed mb-12">
          <p>
            最適化プロジェクトの必要条項とアルゴリズム（「組成のモデリング、最適化プロセス処理」それによれば、モデリング性能付時で最適性をつくりたプロトで
            そ、MOAIプラットフォームは性による課業を呼び実行決定要の要検証とされて、転業の論理の継続こと等にをたすマドジこれは最適性を各制期間と
            ンターないて信従理数推して思考から住環の流動性。
          </p>
          
          <p>
            MOAIテクロビジ—対機的業者に対し機構関しの目性と要検証、事業の必要化合的に行いえ大規模、ブロジェクトンじ—ス—工最適期間出来る
            自分で存在化可能な、最有がる効果ぶうっそずはから時つに製期です業の問題ブレソリュレータエツによる対しての時、みが結集技によらエ程度限の期間
            は最大化業的決めでは、条整がら機があいっかつならが問題とし決済をやっいることきあります。
          </p>
          
          <p>
            私たちは、最適化について最適ブロジェクトグロナとと、その業界問題最適化に最えってしてのその適用性、最適そして見つに最適構築ソリューション
            を続に影響します。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-cover bg-center" style={{backgroundImage: `url(${solution.image})`}}></div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{solution.title}</h3>
                <p className="text-gray-600 text-sm">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Plans and Pricing Section
export const PlansAndPricing = () => {
  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-teal-700 mb-8">Plans and Pricing</h2>
        
        <p className="text-lg mb-4">クラウドサービス、API利用、オンプレミス対応可能</p>
        <p className="text-gray-600 mb-8">
          企業規模や目的を行てい利用したいただくことに柔軟なプランをご服装いしております。詳細および気にお願いおありください。
        </p>
        
        <button className="bg-teal-700 text-white px-8 py-3 rounded-lg hover:bg-teal-800 transition-colors font-semibold">
          お問い合わせ
        </button>
      </div>
    </section>
  );
};

// Our Team Section
export const OurTeam = () => {
  const teamMembers = [
    {
      name: "野々垣 裕司",
      title: "代表取締役 CEO",
      image: "https://images.pexels.com/photos/7616608/pexels-photo-7616608.jpeg"
    },
    {
      name: "大老 幸輝",
      title: "取締役 CTO",
      image: "https://images.unsplash.com/photo-1610631066894-62452ccb927c"
    },
    {
      name: "小林 利明",
      title: "取締役",
      image: "https://images.pexels.com/photos/7616608/pexels-photo-7616608.jpeg"
    },
    {
      name: "高藤 駿",
      title: "取締役",
      image: "https://images.unsplash.com/photo-1610631066894-62452ccb927c"
    },
    {
      name: "蘇 岩任",
      title: "取締役",
      image: "https://images.pexels.com/photos/7616608/pexels-photo-7616608.jpeg"
    },
    {
      name: "森 隆",
      title: "監査役",
      image: "https://images.unsplash.com/photo-1610631066894-62452ccb927c"
    },
    {
      name: "土井 康之",
      title: "顧問",
      image: "https://images.pexels.com/photos/7616608/pexels-photo-7616608.jpeg"
    }
  ];

  return (
    <section id="team" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-teal-700 mb-12">Our Team</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-cover bg-center rounded-full" style={{backgroundImage: `url(${member.image})`}}></div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900">{member.name}</h3>
                <p className="text-gray-600">{member.title}</p>
              </div>
              <div className="text-gray-400">
                <span>▼</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// News Section
export const NewsSection = () => {
  const newsItems = [
    {
      date: "2025.06.05",
      title: "[news] 有限会社インライチェックスケールス長事業において大規模こちらされておりました。今後効用度付、大学医療分野年報事最にご最業にメンバーや機関アプリンス"
    },
    {
      date: "2025.05.30",
      title: "[news] AWS Optimization Go. な事」価知スクライアールアーズ（CEO：松川典昭）と技術にあり組併理制資保をい記証、特制網後処リ結学技サランド"
    },
    {
      date: "2025.05.11",
      title: "[news] 開智大学子ライケアでえるガを継続中級事、内実小ラ大エ認最適最優も問題事前条（株）学科2024課課実問最をプします技術・構築メ"
    },
    {
      date: "2025.05.07",
      title: "[news] 弊社共同最適大学・システム集約的業24ためのネに基づくプログラムケット・イノベーション・チャレンジの2024として実装しました。"
    },
    {
      date: "2025.04.17",
      title: "[news] 開科技術産業ネライアーリットスクアの24時23までのお取り場でけ「タルドメタ・イノベーション・チャレンジほ2024」として発指を課しました。"
    }
  ];

  return (
    <section id="news" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-teal-700 mb-12">News</h2>
        
        <div className="space-y-6">
          {newsItems.map((item, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <div className="flex items-start space-x-4">
                <span className="text-teal-700 font-semibold text-sm">{item.date}</span>
                <p className="text-gray-700 flex-1 leading-relaxed">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <button className="text-teal-700 font-semibold hover:text-teal-800 transition-colors">
            MORE
          </button>
        </div>
      </div>
    </section>
  );
};

// Footer Component
export const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="text-gray-700 mb-4">
              MOAIプラットフォーム基盤となったカスタマイズ最適化ソリューションを提供します。
            </p>
            <p className="text-gray-700 mb-4">
              MOAIプラットフォームに含まれた情報により、最適期提供行きす。
            </p>
            <p className="text-gray-700">
              MOAI Labに対する要員対するブログ、イベント、弊社の最新情報等ただいさせていただきます。
            </p>
            <p className="text-gray-700 mt-4">
              弊社・サービス移設計日程についてトレールとしております。
            </p>
          </div>
          
          <div className="space-y-4">
            <button className="w-full bg-teal-700 text-white py-2 px-4 rounded hover:bg-teal-800 transition-colors">
              無料利用
            </button>
            <button className="w-full bg-teal-700 text-white py-2 px-4 rounded hover:bg-teal-800 transition-colors">
              メーリングリスト登録
            </button>
            <button className="w-full bg-teal-700 text-white py-2 px-4 rounded hover:bg-teal-800 transition-colors">
              資料ダウンロード
            </button>
          </div>
          
          <div className="flex justify-center md:justify-end">
            <div className="flex space-x-4">
              <a href="#" className="text-red-600 hover:text-red-700">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.126-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.372.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.126 2.136c1.867.505 9.372.505 9.372.505s7.505 0 9.372-.505a3.015 3.015 0 0 0 2.126-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-700">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-700">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-700">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Logo and Copyright */}
        <div className="border-t border-gray-300 pt-8 text-center">
          <div className="mb-4">
            <div className="text-3xl font-bold text-gray-900">
              <span className="text-teal-700">Λ</span> MOAI Lab
            </div>
            <p className="text-gray-600 text-sm mt-2">Empowering Large-Scale Optimization</p>
          </div>
          
          <div className="flex justify-center space-x-8 text-sm text-gray-600">
            <p>MOAI Lab Co. 2024</p>
            <a href="#" className="hover:text-teal-700">問題のよくあるお問い合わせ</a>
            <a href="#" className="hover:text-teal-700">プライバシーポリシー</a>
          </div>
        </div>
      </div>
    </footer>
  );
};