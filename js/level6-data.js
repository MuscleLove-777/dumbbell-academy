const LEVEL6_DATA = {
    id: 6,
    title: "プログラム設計と栄養・回復",
    icon: "&#128203;",
    description: "週間プログラムの組み方、栄養・回復・ケガ予防の知識を身につける",
    modules: [
        {
            id: 601,
            title: "週間プログラムの組み方",
            duration: "20分",
            content: "<h2>初心者向け（週3日・全身法）</h2>" +
                "<p>最初の3ヶ月間はこのプログラムで基礎を固めましょう。重量が上がらなくなったら中級へステップアップします。</p>" +
                "<h3>Day 1（月）全身</h3>" +
                "<table><thead><tr><th>種目</th><th>回数</th><th>セット</th></tr></thead>" +
                "<tbody>" +
                "<tr><td>DBスクワット</td><td>10-12</td><td>3</td></tr>" +
                "<tr><td>DBベンチプレス</td><td>8-10</td><td>3</td></tr>" +
                "<tr><td>ワンハンドロウ</td><td>10-12</td><td>3（片側）</td></tr>" +
                "<tr><td>ショルダープレス</td><td>10-12</td><td>3</td></tr>" +
                "<tr><td>DBカール</td><td>10-12</td><td>2</td></tr>" +
                "<tr><td>DBクランチ</td><td>15</td><td>2</td></tr>" +
                "</tbody></table>" +
                "<h3>Day 3（水）全身</h3>" +
                "<table><thead><tr><th>種目</th><th>回数</th><th>セット</th></tr></thead>" +
                "<tbody>" +
                "<tr><td>DBランジ</td><td>10-12</td><td>3（片側）</td></tr>" +
                "<tr><td>DBフライ</td><td>10-12</td><td>3</td></tr>" +
                "<tr><td>DBデッドリフト</td><td>10-12</td><td>3</td></tr>" +
                "<tr><td>サイドレイズ</td><td>12-15</td><td>3</td></tr>" +
                "<tr><td>フレンチプレス</td><td>10-12</td><td>2</td></tr>" +
                "<tr><td>DBサイドベント</td><td>12-15</td><td>2（片側）</td></tr>" +
                "</tbody></table>" +
                "<h3>Day 5（金）全身</h3>" +
                "<table><thead><tr><th>種目</th><th>回数</th><th>セット</th></tr></thead>" +
                "<tbody>" +
                "<tr><td>ブルガリアンSQ</td><td>8-10</td><td>3（片側）</td></tr>" +
                "<tr><td>インクラインプレス</td><td>8-10</td><td>3</td></tr>" +
                "<tr><td>DBプルオーバー</td><td>10-12</td><td>3</td></tr>" +
                "<tr><td>リアレイズ</td><td>12-15</td><td>3</td></tr>" +
                "<tr><td>ハンマーカール</td><td>10-12</td><td>2</td></tr>" +
                "<tr><td>キックバック</td><td>10-12</td><td>2</td></tr>" +
                "</tbody></table>" +
                "<h2>中級者向け（週4日・上下分割法）</h2>" +
                "<p>初心者プログラムで伸びが鈍化したら、上半身と下半身を分けて各部位の種目数を増やします。</p>" +
                "<h3>Day 1（月）上半身（プレス系）</h3>" +
                "<table><thead><tr><th>種目</th><th>回数</th><th>セット</th></tr></thead>" +
                "<tbody>" +
                "<tr><td>DBベンチプレス</td><td>6-8</td><td>4</td></tr>" +
                "<tr><td>インクラインプレス</td><td>8-10</td><td>3</td></tr>" +
                "<tr><td>DBフライ</td><td>10-12</td><td>3</td></tr>" +
                "<tr><td>ショルダープレス</td><td>8-10</td><td>3</td></tr>" +
                "<tr><td>サイドレイズ</td><td>12-15</td><td>4</td></tr>" +
                "<tr><td>フレンチプレス</td><td>10-12</td><td>3</td></tr>" +
                "</tbody></table>" +
                "<h3>Day 2（火）下半身</h3>" +
                "<table><thead><tr><th>種目</th><th>回数</th><th>セット</th></tr></thead>" +
                "<tbody>" +
                "<tr><td>DBスクワット</td><td>8-10</td><td>4</td></tr>" +
                "<tr><td>DBルーマニアンDL</td><td>8-10</td><td>4</td></tr>" +
                "<tr><td>ブルガリアンSQ</td><td>10-12</td><td>3（片側）</td></tr>" +
                "<tr><td>DBランジ</td><td>10-12</td><td>3（片側）</td></tr>" +
                "<tr><td>カーフレイズ</td><td>15-20</td><td>4</td></tr>" +
                "<tr><td>DBクランチ</td><td>15-20</td><td>3</td></tr>" +
                "</tbody></table>" +
                "<h3>Day 4（木）上半身（プル系）</h3>" +
                "<table><thead><tr><th>種目</th><th>回数</th><th>セット</th></tr></thead>" +
                "<tbody>" +
                "<tr><td>ワンハンドロウ</td><td>8-10</td><td>4（片側）</td></tr>" +
                "<tr><td>DBプルオーバー</td><td>10-12</td><td>3</td></tr>" +
                "<tr><td>リアレイズ</td><td>12-15</td><td>4</td></tr>" +
                "<tr><td>DBカール</td><td>10-12</td><td>3</td></tr>" +
                "<tr><td>ハンマーカール</td><td>10-12</td><td>3</td></tr>" +
                "<tr><td>インクラインカール</td><td>10-12</td><td>2</td></tr>" +
                "</tbody></table>" +
                "<h2>上級者向け（週5日・部位別分割法）</h2>" +
                "<table><thead><tr><th>曜日</th><th>部位</th><th>内容</th></tr></thead>" +
                "<tbody>" +
                "<tr><td>Day 1（月）</td><td>胸+腹</td><td>プレス4set + インクライン3set + フライ3set + クランチ3set + サイドベント3set</td></tr>" +
                "<tr><td>Day 2（火）</td><td>背中</td><td>ワンハンドロウ4set + デッドリフト4set + プルオーバー3set</td></tr>" +
                "<tr><td>Day 3（水）</td><td>肩</td><td>ショルダープレス4set + サイドレイズ4set + リアレイズ4set</td></tr>" +
                "<tr><td>Day 4（木）</td><td>脚+腹</td><td>スクワット4set + ランジ3set + RDL4set + ウッドチョップ3set</td></tr>" +
                "<tr><td>Day 5（金）</td><td>腕</td><td>カール系3種 x 3set + 三頭筋系3種 x 3set</td></tr>" +
                "<tr><td>Day 6-7</td><td>完全休養</td><td>-</td></tr>" +
                "</tbody></table>",
            quiz: [
                {
                    type: "choice",
                    question: "初心者が最初に取り組むべきプログラムの方式はどれですか？",
                    options: ["部位別5分割法", "上下2分割法", "全身法（週3日）", "プッシュプル法"],
                    answer: 2
                },
                {
                    type: "choice",
                    question: "初心者プログラムから中級へステップアップするタイミングはいつですか？",
                    options: ["1週間後", "重量が上がらなくなったら", "飽きたら", "3日後"],
                    answer: 1
                },
                {
                    type: "choice",
                    question: "中級者の上下分割法で「プル系」の日に行わない種目はどれですか？",
                    options: ["ワンハンドロウ", "DBカール", "DBベンチプレス", "リアレイズ"],
                    answer: 2
                }
            ]
        },
        {
            id: 602,
            title: "漸進性過負荷とトレーニングログ",
            duration: "15分",
            content: "<h2>ダブルプログレッション法（重量の上げ方）</h2>" +
                "<p>筋肉を成長させ続けるには、少しずつ負荷を上げていく「漸進性過負荷」が必要です。ダブルプログレッション法はその最もシンプルな方法です。</p>" +
                "<h3>具体的な進め方</h3>" +
                "<table><thead><tr><th>Week</th><th>重量</th><th>回数</th><th>備考</th></tr></thead>" +
                "<tbody>" +
                "<tr><td>Week 1</td><td>12kg</td><td>8回 x 3set</td><td>スタート</td></tr>" +
                "<tr><td>Week 2</td><td>12kg</td><td>9回 x 3set</td><td>回数を増やす</td></tr>" +
                "<tr><td>Week 3</td><td>12kg</td><td>10回 x 3set</td><td>まだ回数を増やす</td></tr>" +
                "<tr><td>Week 4</td><td>14kg</td><td>8回 x 3set</td><td>重量UP、回数リセット</td></tr>" +
                "<tr><td>Week 5</td><td>14kg</td><td>9回 x 3set</td><td>再び回数を増やす</td></tr>" +
                "</tbody></table>" +
                "<div class='info-box'>" +
                "<h3>ルール</h3>" +
                "<p>全セットで目標回数の上限を達成したら、次回から重量を1〜2kg上げて回数は下限に戻す。</p>" +
                "</div>" +
                "<h2>トレーニングログの重要性</h2>" +
                "<p>記録をつけないと「前回何kg何回やったか」がわかりません。成長の可視化がモチベーション維持の最大の武器です。</p>" +
                "<h3>ログの記録例</h3>" +
                "<table><thead><tr><th>日付</th><th>種目</th><th>Set1</th><th>Set2</th><th>Set3</th><th>メモ</th></tr></thead>" +
                "<tbody>" +
                "<tr><td>3/2</td><td>DBベンチ</td><td>14kg x 10</td><td>14kg x 9</td><td>14kg x 8</td><td>フォーム良好</td></tr>" +
                "<tr><td>3/5</td><td>DBベンチ</td><td>14kg x 10</td><td>14kg x 10</td><td>14kg x 9</td><td>右肩少し違和感</td></tr>" +
                "<tr><td>3/9</td><td>DBベンチ</td><td>16kg x 8</td><td>16kg x 8</td><td>16kg x 7</td><td>重量UP!</td></tr>" +
                "</tbody></table>" +
                "<p>スマホのメモやアプリで記録するだけでOKです。</p>",
            quiz: [
                {
                    type: "choice",
                    question: "ダブルプログレッション法で重量を上げるタイミングはいつですか？",
                    options: ["毎回少しずつ上げる", "全セットで目標回数の上限を達成したら", "1ヶ月ごとに上げる", "気分で決める"],
                    answer: 1
                },
                {
                    type: "choice",
                    question: "重量を上げた時、回数はどうしますか？",
                    options: ["同じ回数を維持する", "さらに増やす", "下限に戻す", "ゼロにする"],
                    answer: 2
                },
                {
                    type: "choice",
                    question: "トレーニングログをつける最大の意義は何ですか？",
                    options: ["SNSに投稿するため", "トレーナーに見せるため", "成長の可視化とモチベーション維持", "義務だから"],
                    answer: 2
                }
            ]
        },
        {
            id: 603,
            title: "栄養と回復の基本",
            duration: "20分",
            content: "<h2>筋肥大の方程式</h2>" +
                "<div class='info-box'>" +
                "<p><strong>筋肥大 = トレーニング x 栄養 x 休養</strong></p>" +
                "<p>どれか1つが欠けても成果は出ません。トレーニングが「刺激」、栄養が「材料」、休養が「建築時間」です。</p>" +
                "</div>" +
                "<h2>マクロ栄養素の目安（筋肥大期）</h2>" +
                "<table><thead><tr><th>栄養素</th><th>目安量</th><th>具体例（体重70kg）</th></tr></thead>" +
                "<tbody>" +
                "<tr><td>タンパク質</td><td>体重 x 1.6〜2.2g</td><td>112〜154g/日</td></tr>" +
                "<tr><td>炭水化物</td><td>体重 x 4〜6g</td><td>280〜420g/日</td></tr>" +
                "<tr><td>脂質</td><td>総カロリーの20〜30%</td><td>約60〜80g/日</td></tr>" +
                "</tbody></table>" +
                "<h3>タンパク質摂取のポイント</h3>" +
                "<ul>" +
                "<li>1回あたり30〜40gを目安に分散摂取が理想</li>" +
                "<li>トレーニング後30分以内にプロテイン（ゴールデンタイム）</li>" +
                "<li>朝食・昼食・夕食に加え、間食と就寝前にも摂る</li>" +
                "</ul>" +
                "<h3>高タンパク食材一覧</h3>" +
                "<table><thead><tr><th>食材</th><th>タンパク質/100g</th><th>コスパ</th></tr></thead>" +
                "<tbody>" +
                "<tr><td>鶏むね肉（皮なし）</td><td>23g</td><td>最強</td></tr>" +
                "<tr><td>鶏ささみ</td><td>24g</td><td>優秀</td></tr>" +
                "<tr><td>卵（全卵1個）</td><td>6.2g</td><td>良い</td></tr>" +
                "<tr><td>ツナ缶（水煮）</td><td>16g</td><td>手軽</td></tr>" +
                "<tr><td>サバ缶</td><td>21g</td><td>良質な脂質</td></tr>" +
                "<tr><td>豆腐（木綿）</td><td>7g</td><td>最強</td></tr>" +
                "<tr><td>納豆（1パック）</td><td>8.3g</td><td>最強</td></tr>" +
                "<tr><td>プロテインパウダー</td><td>70-80g</td><td>効率最強</td></tr>" +
                "</tbody></table>" +
                "<h2>回復の三本柱</h2>" +
                "<h3>1. 睡眠（7〜9時間）</h3>" +
                "<ul>" +
                "<li>成長ホルモンの分泌は深い睡眠中</li>" +
                "<li>寝る前のスマホは30分前にやめる</li>" +
                "<li>起床時間を固定する</li>" +
                "</ul>" +
                "<h3>2. 休息日の設計</h3>" +
                "<ul>" +
                "<li>週に最低2日は完全休養</li>" +
                "<li>同じ部位は中2〜3日空ける</li>" +
                "<li>休息日もタンパク質は摂る</li>" +
                "</ul>" +
                "<h3>3. アクティブリカバリー</h3>" +
                "<ul>" +
                "<li>軽いウォーキング</li>" +
                "<li>ストレッチ・フォームローラー</li>" +
                "<li>入浴（38〜40&#8451; / 15分）</li>" +
                "</ul>",
            quiz: [
                {
                    type: "choice",
                    question: "筋肥大の方程式として正しいものはどれですか？",
                    options: ["トレーニング x 栄養", "トレーニング x 栄養 x 休養", "栄養 x 休養", "トレーニングのみ"],
                    answer: 1
                },
                {
                    type: "choice",
                    question: "筋肥大期のタンパク質摂取量の目安は体重1kgあたりどれくらいですか？",
                    options: ["0.5〜0.8g", "1.0〜1.2g", "1.6〜2.2g", "3.0〜4.0g"],
                    answer: 2
                },
                {
                    type: "choice",
                    question: "回復のために推奨される睡眠時間はどれくらいですか？",
                    options: ["3〜4時間", "5〜6時間", "7〜9時間", "10時間以上"],
                    answer: 2
                }
            ]
        },
        {
            id: 604,
            title: "ケガ予防とウォームアップ",
            duration: "15分",
            content: "<h2>トレーニング前のウォームアップルーティン（10分）</h2>" +
                "<h3>Step 1：全身の血流UP（3分）</h3>" +
                "<ul>" +
                "<li>軽いジョギング or エアロバイク</li>" +
                "<li>うっすら汗ばむ程度</li>" +
                "</ul>" +
                "<h3>Step 2：動的ストレッチ（3分）</h3>" +
                "<ul>" +
                "<li>肩回し / 腕回し</li>" +
                "<li>ヒップサークル</li>" +
                "<li>レッグスイング</li>" +
                "<li>トランクローテーション</li>" +
                "</ul>" +
                "<h3>Step 3：種目別ウォームアップ（4分）</h3>" +
                "<ul>" +
                "<li>本番重量の50% x 15回</li>" +
                "<li>本番重量の70% x 10回</li>" +
                "<li>本番重量の85% x 5回</li>" +
                "<li>その後、本番セットへ</li>" +
                "</ul>" +
                "<h2>よくあるケガと予防法</h2>" +
                "<table><thead><tr><th>部位</th><th>よくあるケガ</th><th>予防法</th></tr></thead>" +
                "<tbody>" +
                "<tr><td>肩</td><td>インピンジメント / 腱板損傷</td><td>プレスで肘を開きすぎない / ウォームアップ必須 / リアレイズで後部を強化</td></tr>" +
                "<tr><td>腰</td><td>椎間板ヘルニア / 筋膜性腰痛</td><td>デッドリフトで背中を丸めない / 腹圧をかける / 体幹トレーニング</td></tr>" +
                "<tr><td>肘</td><td>上腕骨外側上顆炎（テニス肘）</td><td>フライで肘を伸ばしきらない / 三頭筋種目で重量注意</td></tr>" +
                "<tr><td>膝</td><td>膝蓋腱炎</td><td>スクワットで膝を内側に入れない / ランジはリバースから</td></tr>" +
                "<tr><td>手首</td><td>TFCC損傷</td><td>手首を反らさない / リストラップの使用</td></tr>" +
                "</tbody></table>" +
                "<div class='info-box'><p><strong>痛みを感じたら即中止してください。</strong>「痛みを我慢して追い込む」は論外です。ケガをすると数週間〜数ヶ月のブランクが生まれ、結果的に大きな後退となります。</p></div>" +
                "<h2>ダンベルトレーニング 成長の掟</h2>" +
                "<ul>" +
                "<li><strong>フォームファースト：</strong>重量を追う前に、正しいフォームを体に染み込ませる</li>" +
                "<li><strong>漸進性過負荷：</strong>少しずつ重量or回数を上げ続ける</li>" +
                "<li><strong>記録をつける：</strong>前回の自分を超えるための唯一の指標</li>" +
                "<li><strong>食事を疎かにしない：</strong>体重 x 2gのタンパク質を毎日</li>" +
                "<li><strong>睡眠を削らない：</strong>筋肉は寝ている間に成長する</li>" +
                "<li><strong>継続が最強：</strong>週3回 x 1年 > 毎日 x 1ヶ月で燃え尽き</li>" +
                "</ul>" +
                "<div class='info-box'><p>「筋トレに裏ワザはない。正しいフォームで、少しずつ重くして、食べて、寝て、続ける。それだけ。でも、"それだけ"ができる人が勝つ。」</p></div>",
            quiz: [
                {
                    type: "choice",
                    question: "ウォームアップのStep 3で、最初に行う種目別ウォームアップの重量は本番の何%ですか？",
                    options: ["20%", "50%", "80%", "100%"],
                    answer: 1
                },
                {
                    type: "choice",
                    question: "肩のケガを予防するために有効な方法はどれですか？",
                    options: ["プレスで肘を大きく開く", "ウォームアップを省略する", "リアレイズで三角筋後部を強化する", "常に高重量で追い込む"],
                    answer: 2
                },
                {
                    type: "choice",
                    question: "トレーニング中に痛みを感じた場合、どうすべきですか？",
                    options: ["我慢して続ける", "痛みが治まるまで待って再開する", "即中止する", "重量を上げて乗り越える"],
                    answer: 2
                }
            ]
        }
    ]
};
