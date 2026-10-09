// 묵공 주석: 고전연구 게시글. 제공된 연구 메모를 웹용으로 정리하며 고전의 설명과 연구 관점을 구별합니다.
(() => {
  const sanming = {
    pdf:'https://upload.wikimedia.org/wikipedia/commons/a/a4/Harvard_drs_53262215_%E4%B8%89%E5%91%BD%E9%80%9A%E6%9C%83_v.2%E5%8D%B7%E4%B9%8B%E4%BA%8C.pdf',
    record:'https://commons.wikimedia.org/wiki/File:Harvard_drs_53262215_三命通會_v.2卷之二.pdf',
    collection:'https://commons.wikimedia.org/wiki/Category:三命通會'
  };
  // 묵공 주석: 논삼형은 PDF 이미지 92의 왼쪽 면부터 98의 오른쪽 면까지 이어집니다.
  const originalPages = [
    {page:92,file:'sanming-tonghui-volume2-lunsanxing.jpg',height:831,note:'왼쪽 면의 「論三刑」 제목에서 시작합니다. 오른쪽 면에는 앞 편 「논육해」의 끝부분이 함께 보입니다.'},
    {page:93,file:'sanming-tonghui-volume2-lunsanxing-093.jpg',height:833},
    {page:94,file:'sanming-tonghui-volume2-lunsanxing-094.jpg',height:833},
    {page:95,file:'sanming-tonghui-volume2-lunsanxing-095.jpg',height:834},
    {page:96,file:'sanming-tonghui-volume2-lunsanxing-096.jpg',height:831},
    {page:97,file:'sanming-tonghui-volume2-lunsanxing-097.jpg',height:831},
    {page:98,file:'sanming-tonghui-volume2-lunsanxing-098.jpg',height:832,note:'오른쪽 면의 「論衝擊」 제목 직전까지가 「논삼형」입니다. 그 아래와 왼쪽 면은 다음 편에 해당합니다.'}
  ];
  const largeScan = page => `https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a4/Harvard_drs_53262215_%E4%B8%89%E5%91%BD%E9%80%9A%E6%9C%83_v.2%E5%8D%B7%E4%B9%8B%E4%BA%8C.pdf/page${page}-1920px-Harvard_drs_53262215_%E4%B8%89%E5%91%BD%E9%80%9A%E6%9C%83_v.2%E5%8D%B7%E4%B9%8B%E4%BA%8C.pdf.jpg`;
  const originalGallery = originalPages.map((scan,index) => `<figure class="classic-manuscript" data-source-page="${scan.page}">
<a href="${largeScan(scan.page)}" target="_blank" rel="noopener noreferrer" aria-label="논삼형 원문 ${index+1}번째 이미지 크게 보기 (새 창)"><img src="assets/classics/${scan.file}" width="960" height="${scan.height}" loading="lazy" decoding="async" alt="삼명통회 권2 논삼형 원문 ${index+1}/7. 공개 PDF ${scan.page}번째 펼침 이미지."></a>
<figcaption><strong>원문 ${index+1}/7 · PDF ${scan.page}번째 이미지</strong>${scan.note ? `<br>${scan.note}` : ''}<br><a href="${largeScan(scan.page)}" target="_blank" rel="noopener noreferrer">크게 보기 ↗</a> · <a href="${sanming.pdf}#page=${scan.page}" target="_blank" rel="noopener noreferrer">원본 PDF의 해당 위치 ↗</a></figcaption>
</figure>`).join('');
  const articles = [{
    id:'samhyeong',
    title:'삼형(三刑)의 방향·전승·통변 검토',
    lead:'형의 방향은 어디에서 왔고, 같은 지지 조합의 명칭은 왜 달라질까요? 고전의 설명과 묵공의 연구 관점을 나누어 살펴봅니다.',
    date:'2026-10-09',
    basisDate:'2026-10-08',
    status:'묵공 주석 · 연구 검토',
    summary:'『본의12지지』 교정 과정에서 검토한 삼형의 방향, 명칭 전승, 내부 기운의 해설과 통변의 과제를 정리합니다.',
    body:`
<div class="classic-metadata"><span>연구 기준일 <time datetime="2026-10-08">2026.10.08</time></span><span>게시일 <time datetime="2026-10-09">2026.10.09</time></span></div>
<section class="classic-source-showcase" aria-labelledby="classic-source-title">
<figure class="classic-cover">
<a class="classic-cover-link" href="assets/classics/sanming-tonghui-volume2-cover.jpg" target="_blank" rel="noopener noreferrer" aria-label="『삼명통회』 권2 표지 크게 보기 (새 창)"><img src="assets/classics/sanming-tonghui-volume2-cover.jpg" width="330" height="502" alt="삼명통회 권2 고서 표지. 세로 제목표와 오른쪽 실 제본이 보입니다."></a>
<figcaption>『삼명통회』 권2 표지<br><a href="assets/classics/sanming-tonghui-volume2-cover.jpg" target="_blank" rel="noopener noreferrer">표지 크게 보기 ↗</a></figcaption>
</figure>
<div class="classic-source-intro"><p class="classic-source-eyebrow">고전의 원문을 펼치며</p><h2 id="classic-source-title">『삼명통회』와 함께 읽는<br class="classic-source-break"> 삼형 연구</h2>
<div class="classic-intro"><p>이 글은 『본의12지지』 교정 과정에서 마련한 연구 검토 자료를 홈페이지에서 읽기 편하게 정리한 것입니다. 고전이 제시한 관계와 명칭, 묵공의 연구 관점, 앞으로 확인할 과제를 구별합니다.</p><p>삼형의 구체적 작용을 모두 설명한 최종 학설이나 사건·길흉을 판정하는 공식으로 확정한 글은 아닙니다.</p></div>
<div class="classic-source-actions"><button class="teal-button" type="button" data-scroll-target="classic-full-original" aria-controls="classic-full-original">논삼형 전체 원문 7장 보기</button><a href="${sanming.pdf}#page=92" target="_blank" rel="noopener noreferrer">권2 원문 PDF ↗</a><a href="${sanming.collection}" target="_blank" rel="noopener noreferrer">전체 권 공개 목록 ↗</a></div>
<p class="classic-source-credit">이미지: 하버드 옌칭도서관 소장 고서 · <a href="${sanming.record}" target="_blank" rel="noopener noreferrer">Wikimedia Commons 공개 자료</a></p></div>
</section>
<nav class="classic-toc" aria-label="연구 글의 순서"><p>글의 순서</p><ol>
<li><button type="button" data-scroll-target="classic-relations">채택한 형의 관계</button></li>
<li><button type="button" data-scroll-target="classic-direction">삼합과 방위, 형의 방향</button></li>
<li><button type="button" data-scroll-target="classic-names">명칭의 전승 차이</button></li>
<li><button type="button" data-scroll-target="classic-inner">내부 기운의 해설</button></li>
<li><button type="button" data-scroll-target="classic-comment">묵공 주석과 통변의 과제</button></li>
<li><button type="button" data-scroll-target="classic-context">선행연구와 남은 검토</button></li>
<li><button type="button" data-scroll-target="classic-references">참고문헌·전자 원문</button></li>
</ol></nav>
<section><h2 id="classic-relations" tabindex="-1">1. 이 글에서 채택한 형의 관계</h2>
<figure class="classic-manuscript">
<a href="assets/classics/sanming-tonghui-volume2-lunsanxing.jpg" target="_blank" rel="noopener noreferrer" aria-label="『삼명통회』 권2 논삼형 시작 면 크게 보기 (새 창)"><img src="assets/classics/sanming-tonghui-volume2-lunsanxing.jpg" width="960" height="831" loading="lazy" decoding="async" alt="삼명통회 권2 펼침 면. 왼쪽 면에 논삼형 제목과 삼합·방위에 따른 형 관계의 설명이 시작됩니다."></a>
<figcaption>『삼명통회』 권2 「논삼형(論三刑)」 시작 부분 · 공개 PDF 92번째 이미지<br>소장: Harvard-Yenching Library · <a href="${sanming.record}" target="_blank" rel="noopener noreferrer">출처</a> · <a href="assets/classics/sanming-tonghui-volume2-lunsanxing.jpg" target="_blank" rel="noopener noreferrer">내지 크게 보기 ↗</a></figcaption>
</figure>
<details class="classic-full-original" id="classic-full-original" tabindex="-1">
<summary><span>「논삼형」 전체 원문 펼쳐보기</span><span class="classic-original-count">원문 이미지 7장</span></summary>
<div class="classic-original-content">
<p class="classic-original-scope"><strong>원문 범위: 권2 PDF 92-98번째 이미지.</strong><br>92번째 이미지 왼쪽 면의 「論三刑」 제목에서 시작해, 98번째 이미지 오른쪽 면의 「論衝擊」 제목 직전까지 이어집니다. 처음과 마지막 이미지에 함께 있는 앞뒤 편도 원래 펼침 면 그대로 보존했습니다.</p>
<p class="classic-original-guide">읽는 순서: 각 이미지의 오른쪽 면에서 왼쪽 면으로, 각 면의 세로줄도 오른쪽부터 읽습니다. 첫 이미지는 왼쪽 면의 제목부터 읽어 주세요. 아래 번호는 PDF 이미지 순번이며 고서의 인쇄 장차와 다릅니다.</p>
${originalGallery}
<p class="classic-source-credit">저자: 만민영(萬民英) · 소장: Harvard-Yenching Library · 공개 스캔: <a href="${sanming.record}" target="_blank" rel="noopener noreferrer">Wikimedia Commons</a>. 출판 부록에서 원문을 대조할 때에도 같은 소장본과 이미지 순번을 함께 기록합니다.</p>
</div>
</details>
<p>삼형(三刑)은 지지 사이의 관계를 설명하는 전통적 범주입니다. 『본의12지지』의 해당 표와 이 글은 『삼명통회(三命通會)』 「논삼형(論三刑)」의 본설을 기준으로 다음 관계를 채택합니다. <span class="classic-citation">[1·2]</span></p>
<div class="classic-table-wrap" tabindex="0" aria-label="형 관계 일람표"><table class="classic-table"><caption>채택 전승에 따른 형의 관계</caption><thead><tr><th scope="col">구분</th><th scope="col">관계</th></tr></thead><tbody>
<tr><th scope="row">시세지형(恃勢之刑)</th><td>축(丑) → 술(戌) → 미(未) → 축(丑)</td></tr>
<tr><th scope="row">무은지형(無恩之刑)</th><td>인(寅) → 사(巳) → 신(申) → 인(寅)</td></tr>
<tr><th scope="row">무례지형(無禮之刑)</th><td>자(子) ↔ 묘(卯)</td></tr>
<tr><th scope="row">자형(自刑)</th><td>진(辰)-진(辰), 오(午)-오(午), 유(酉)-유(酉), 해(亥)-해(亥)</td></tr>
</tbody></table></div>
<p>화살표는 채택한 전승에서 어느 지지가 어느 지지를 형하는지를 나타냅니다. 계절의 선후나 시간의 진행 순서를 직접 표시한 것은 아닙니다. 이 배열을 확인하는 일과 명조에서 그 관계가 어떻게 작용하는지를 설명하는 일은 별도로 검토해야 합니다.</p>
</section>
<section><h2 id="classic-direction" tabindex="-1">2. 삼합과 방위, 형의 방향</h2>
<p>여기서 국(局)은 삼합의 지지 배열을, 방(方)은 고전의 설명에서 대응시키는 방위의 지지 배열을 가리킵니다. 『삼명통회』와 『오행정기(五行精紀)』는 두 배열을 대응시켜 형의 관계를 제시합니다. 실제 명조에서 삼합국이 성립하여 작용하는 조건과는 구분합니다. <span class="classic-citation">[1·2]</span></p>
<div class="classic-table-wrap" tabindex="0" aria-label="삼합과 방위의 대응표"><table class="classic-table"><caption>삼합 배열과 방위 배열의 대응</caption><thead><tr><th scope="col">삼합의 배열</th><th scope="col">대응 방위</th><th scope="col">제시된 형 관계</th></tr></thead><tbody>
<tr><td>사·유·축(巳·酉·丑) / 금국</td><td>신·유·술(申·酉·戌) / 서방</td><td>巳刑申 · 酉自刑 · 丑刑戌</td></tr>
<tr><td>인·오·술(寅·午·戌) / 화국</td><td>사·오·미(巳·午·未) / 남방</td><td>寅刑巳 · 午自刑 · 戌刑未</td></tr>
<tr><td>해·묘·미(亥·卯·未) / 목국</td><td>해·자·축(亥·子·丑) / 북방</td><td>亥自刑 · 卯刑子 · 未刑丑</td></tr>
<tr><td>신·자·진(申·子·辰) / 수국</td><td>인·묘·진(寅·卯·辰) / 동방</td><td>申刑寅 · 子刑卯 · 辰自刑</td></tr>
</tbody></table></div>
<p>위 표에서 丑刑戌·戌刑未·未刑丑을 모으면 <strong>축 → 술 → 미 → 축</strong>이 됩니다. 이 방향은 고전의 배열 대응을 재현한 것입니다.</p>
<h3>삼합국 사이의 생극 비교는 다른 기준입니다</h3>
<p>축을 금국, 술을 화국, 미를 목국의 소속으로 놓고 국의 대표 오행 사이에서 생극을 비교하면 다음과 같은 방향이 나타납니다.</p>
<div class="classic-table-wrap" tabindex="0" aria-label="삼합국 오행 비교표"><table class="classic-table"><caption>삼합국의 대표 오행으로 비교한 생극</caption><thead><tr><th scope="col">비교</th><th scope="col">생극 관계</th><th scope="col">그 기준에서의 방향</th></tr></thead><tbody>
<tr><td>술(火局)과 축(金局)</td><td>화극금(火剋金)</td><td>술 → 축</td></tr>
<tr><td>축(金局)과 미(木局)</td><td>금극목(金剋木)</td><td>축 → 미</td></tr>
<tr><td>미(木局)와 술(火局)</td><td>목생화(木生火)</td><td>미 → 술은 생의 대응</td></tr>
</tbody></table></div>
<p>두 설명은 같은 삼합을 참조하지만 관계를 구성하는 기준이 다릅니다. 따라서 국 사이의 생극 비교 결과를 고전의 형 방향과 같은 것으로 읽거나, 이를 새로운 형 방향으로 채택하지 않습니다. 국·방위 대응, 국 사이의 생극, 개별 지장간의 작용을 각각 밝혀야 비교가 가능합니다.</p>
</section>
<section><h2 id="classic-names" tabindex="-1">3. 명칭은 전승에 따라 달라집니다</h2>
<p>『삼명통회』 본설은 인·사·신을 무은지형, 축·술·미를 시세지형으로 설명합니다. 그러나 같은 편에 인용된 『삼차일람(三車一覽)』은 두 명칭을 반대로 배속합니다. <span class="classic-citation">[1]</span></p>
<div class="classic-table-wrap" tabindex="0" aria-label="삼형 명칭의 전승 비교표"><table class="classic-table"><caption>명칭 배속의 전승 차이</caption><thead><tr><th scope="col">참조 계통</th><th scope="col">인·사·신(寅巳申)</th><th scope="col">축·술·미(丑戌未)</th></tr></thead><tbody>
<tr><td>『삼명통회』 본설 / 『오행정기』 해당 해설</td><td>무은지형(無恩之刑)</td><td>시세지형(恃勢之刑)</td></tr>
<tr><td>『삼명통회』가 인용한 『삼차일람』</td><td>시세지형(恃勢之刑)</td><td>무은지형(無恩之刑)</td></tr>
</tbody></table></div>
<p>명칭이 서로 바뀌어 제시되는 현상에는 고전 안에서 확인되는 전승 차이가 있습니다. 어느 계통을 따르는지 먼저 밝히고, <strong>명칭 배속의 차이와 형 방향의 차이를 따로 확인</strong>해야 합니다.</p>
<p>시세(恃勢)는 자신의 세력을 믿고 의지한다는 뜻입니다. ‘恃’와 ‘持’는 서로 다른 글자이므로, 이 글은 채택한 원문의 恃勢之刑에 따라 ‘시세지형’으로 표기를 통일합니다. 표기의 차이 역시 지지 배속의 차이와 별개의 문제입니다.</p>
<p class="classic-note">『삼차일람』은 『삼명통회』에 인용된 내용을 통해 참조한 것이며 독립 원서를 직접 대조한 것은 아닙니다.</p>
</section>
<section><h2 id="classic-inner" tabindex="-1">4. 내부 기운의 해설은 무엇을 설명할까요?</h2>
<h3>시세지형에는 복수의 명칭 해설이 있습니다</h3>
<p>『오행정기』와 그 안에 인용된 『옥소보감(玉霄寶鑑)』은 지지 내부의 기운과 세력을 들어 시세라는 명칭을 풀이합니다. <span class="classic-citation">[2]</span></p>
<div class="classic-table-wrap" tabindex="0" aria-label="시세지형 명칭 해설표"><table class="classic-table"><caption>시세지형의 명칭 해설에 선택된 근거</caption><thead><tr><th scope="col">형의 관계</th><th scope="col">해설의 근거</th></tr></thead><tbody>
<tr><td>축이 술을 형함(丑刑戌)</td><td>축의 왕성한 수(水)와 술의 화(火)</td></tr>
<tr><td>술이 미를 형함(戌刑未)</td><td>육갑지존·육계지비(六甲之尊·六癸之卑)의 비유 / 술의 신금(辛金)과 미의 목(木)</td></tr>
<tr><td>미가 축을 형함(未刑丑)</td><td>미의 왕성한 토(土)와 축의 수(水) / 미의 정화(丁火)와 축의 금(金)</td></tr>
</tbody></table></div>
<p>‘왕성한 수’ 같은 표현을 지장간 하나로 곧바로 치환하거나, 선택된 극제 사례 하나를 삼형 전체의 유일한 성립 원리로 확정하는 데에는 신중한 대조가 필요합니다.</p>
<h3>무은지형의 생성·양육과 극제 비유</h3>
<p>무은지형의 명칭 해설은 다음 기운의 대응을 제시하고, 이를 생성·양육의 관계를 돌보지 않는다는 의미에 연결합니다. <span class="classic-citation">[1·2]</span></p>
<div class="classic-table-wrap" tabindex="0" aria-label="무은지형 내부 기운 비교표"><table class="classic-table"><caption>무은지형의 명칭 해설에 사용된 기운</caption><thead><tr><th scope="col">형의 관계</th><th scope="col">내부 기운의 극제 대응</th></tr></thead><tbody>
<tr><td>인 → 사(寅刑巳)</td><td>인의 갑목(甲木)과 사의 무토(戊土)</td></tr>
<tr><td>사 → 신(巳刑申)</td><td>사의 병화(丙火)와 신의 경금(庚金)</td></tr>
<tr><td>신 → 인(申刑寅)</td><td>신의 경금(庚金)과 인의 갑목(甲木)</td></tr>
</tbody></table></div>
<p>이 대응은 ‘무은’이라는 명칭을 풀이하는 전통적 해설로 읽을 수 있습니다. 다만 <strong>왜 그 기운들이 선택되며, 어떤 조건에서 세 지지의 관계 전체가 그 명칭으로 해석되는가</strong>는 별도로 설명해야 할 문제입니다.</p>
<p class="classic-note">『옥소보감』 역시 『오행정기』에 인용된 내용을 통한 간접 참조입니다. 복수의 비유가 존재한다는 사실만으로 모순이 확정되거나 모든 설명이 통합되었다고 보지는 않습니다.</p>
</section>
<section><h2 id="classic-comment" tabindex="-1">5. 묵공 주석: 통변의 출발점과 검토 과제</h2>
<div class="mukgong-comment"><p class="comment-label">묵공의 연구 관점</p><p>12지지를 시간과 계절 속에서 기운의 질적 전환이 이루어지는 표지로 이해합니다. 발생·성장·수렴·저장의 전개를 살피며, 대표 오행의 정적인 생극 분류만으로 지지 사이의 전체 작용을 설명하기 어렵다고 봅니다.</p></div>
<p>예를 들어 인(寅)을 목, 사(巳)를 화로 분류하면 목생화(木生火)로 표현할 수 있습니다. 묵공의 검토에서는 목의 발생과 전개가 화의 성장·확산 국면으로 이어지는 과정도 함께 살핍니다. 그러나 <strong>계절의 순차적 전개와 명조 안에서 여러 지지가 함께 작용하는 관계를 같은 것으로 간주하지 않습니다.</strong> 두 설명을 연결하려면 그 근거를 제시해야 합니다.</p>
<p>통변, 곧 실제 해석에 적용할 때에는 채택한 삼형 관계를 출발점으로 삼되 월령, 내부 기운의 구성과 세력, 다른 관계와의 결합을 함께 검토합니다. 지장간의 극제 한 사례를 제시한 것만으로 삼형 전체의 작용 설명을 갈음하지 않습니다.</p>
<h3>임씨 주석의 비판을 읽는 위치</h3>
<p>『적천수천미(滴天髓闡微)』의 임씨(任氏) 주석은 같은 오행·상생·충의 관계 등을 들어 형의 설명력을 비판하고 생극을 중심으로 판단할 것을 주장합니다. 이는 삼형을 채택하는 전승과 구별하여 읽을 자료입니다. <span class="classic-citation">[3]</span></p>
<p>그 비판을 채택한 삼형 체계의 내부 해설 대신 바로 적용하거나, 묵공의 관점과 다르다는 이유만으로 이미 논박되었다고 간주하지 않습니다. 고전의 진술, 연구자의 해석, 구체적인 작용 조건을 나누어 대조하는 것이 이 글의 검토 기준입니다.</p>
</section>
<section><h2 id="classic-context" tabindex="-1">6. 선행연구와 남은 검토</h2>
<h3>앞선 고전과 국내 선행연구</h3>
<p>『오행대의(五行大義)』 권2 「제십일논형(第十一論刑)」에도 해당 형의 방향과 삼합·방위의 대응이 나타납니다. 시령의 표현은 묵공의 시간·기운 관점과 대조할 자료가 됩니다. 다만 해당 편의 세 종류 분류를 후대의 무은·시세·무례 명칭 분류와 같다고 읽지는 않습니다. <span class="classic-citation">[4]</span></p>
<p>김만태의 2013년 논문 「십이지(十二支)의 상호작용 관계로서 충(衝)·형(刑)에 관한 근원 고찰」도 형의 생성 원리와 종류를 다룹니다. 삼합과 방합, 명칭의 전승과 내부 기운의 설명을 비교할 선행자료입니다. 관련 연구가 존재하므로 국내 연구의 부재를 전제로 삼지 않으며, 연구 축적의 범위는 추가 문헌 조사로 확인해야 합니다. <span class="classic-citation">[5]</span></p>
<h3>앞으로 구체화할 질문</h3>
<ol class="classic-questions"><li>같은 형 배열에 다른 명칭을 부여한 전승을 어떻게 구별할 것인가?</li><li>국·방위 배열의 대응과 국 사이의 생극 비교를 어떤 절차로 비교할 것인가?</li><li>개별 지장간의 극제와 삼형 전체의 작용을 연결하는 근거는 무엇인가?</li><li>시간·계절의 전개를 명조의 관계 해석에 적용할 때 필요한 조건은 무엇인가?</li></ol>
<h3>자료의 확인 범위</h3>
<p>기준 자료에서 대조한 것은 고전의 해당 전자 원문과 선행 논문의 관련 부분입니다. 모든 판본의 실물·영인 이미지, 간접 인용된 독립 원서, 국내 연구 전체를 조사한 결과는 아닙니다. 현대 서적에 관한 저자 제공 확인 기록도 판본·쪽수·실제 문안의 추가 대조가 남아 있습니다.</p>
<p>후속 연구에서는 판본과 인용 계통을 고정하고 명칭·방향·기운의 해설을 문헌별로 기록할 필요가 있습니다. 명조 사례를 사용할 때에도 문헌 설명의 재현과 작용에 관한 실증 주장을 구별해야 합니다. 이 글의 게시가 별도 장의 출간이나 논문 투고를 확정한 것은 아닙니다.</p>
</section>
<section class="classic-references"><h2 id="classic-references" tabindex="-1">참고문헌·전자 원문</h2>
<p class="classic-note">기준 자료: 묵공 주석 「삼형의 방향·전승·통변 검토」, 2026년 10월 8일. 웹 본문에서는 원고 교정용 각주와 작업 이력 대신 연구 내용의 흐름에 맞춰 순서를 정리했습니다.</p>
<ol><li>만민영(萬民英), 『삼명통회(三命通會)』 권2 「논삼형(論三刑)」, 하버드 옌칭도서관 소장본 PDF 92-98번째 이미지. <a href="${sanming.pdf}#page=92" target="_blank" rel="noopener noreferrer">권2 원문 PDF</a> · <a href="${sanming.collection}" target="_blank" rel="noopener noreferrer">전체 권 공개 목록</a> · <a href="https://www.shidianguji.com/zh/book/HY1521/chapter/1knwemh3lrtpj" target="_blank" rel="noopener noreferrer">식전고적 전자 원문</a> · <a href="https://zh.wikisource.org/zh-hant/欽定古今圖書集成/博物彙編/藝術典/第598卷" target="_blank" rel="noopener noreferrer">『고금도서집성』 수록 원문</a>. 원문 이미지 대조 시 권수·편명과 PDF 이미지 순번을 함께 기록하며 인쇄면의 장차와 구별합니다.</li>
<li>요중(廖中), 『오행정기(五行精紀)』 권25 「논삼형(論三刑)」. <a href="https://zh.wikisource.org/zh-hant/五行精紀" target="_blank" rel="noopener noreferrer">전자 원문</a>. 『옥소보감』은 해당 편의 인용 내용으로 참조합니다.</li>
<li>『적천수천미(滴天髓闡微)』 「통신론·지지」 및 「방국」, 임씨 주석. <a href="https://zh.wikisource.org/zh-hant/滴天髓闡微" target="_blank" rel="noopener noreferrer">전자 원문</a>.</li>
<li>소길(蕭吉), 『오행대의(五行大義)』 권2 「제십일논형(第十一論刑)」. <a href="https://zh.wikisource.org/zh-hant/五行大義/2" target="_blank" rel="noopener noreferrer">전자 원문</a>.</li>
<li>김만태, 「십이지(十二支)의 상호작용 관계로서 충(衝)·형(刑)에 관한 근원 고찰」, 2013, 36권 3호, 134–164쪽. DOI: 10.25024/ksq.36.3.201309.134. <a href="https://www.accesson.kr/ksq/assets/pdf/40880/journal-36-3-134.pdf" target="_blank" rel="noopener noreferrer">논문 원문</a> · <a href="https://www.kci.go.kr/kciportal/landing/article.kci?arti_id=ART001802048" target="_blank" rel="noopener noreferrer">KCI 서지</a>. 상세 인용은 원문 인쇄면의 쪽수를 기준으로 확인합니다.</li></ol>
<p class="classic-credit">연구 관점: 묵공(默空) · 자료 정리·분석 보조: GPT</p>
<p class="classic-image-rights">고서 이미지 이용 안내: 위 공개 파일의 퍼블릭 도메인 표시와 <a href="https://library.harvard.edu/about/policies/policy-access-digital-reproductions-works-public-domain" target="_blank" rel="noopener noreferrer">하버드 도서관의 공개 복제본 이용 정책</a>을 확인하여 출처와 함께 게재했습니다.</p>
</section>
<a class="classic-list-back" href="content.html#classics">← 고전연구 목록으로 돌아가기</a>
`
  }];
  const url = article => `content.html#classics/${encodeURIComponent(article.id)}`;
  function renderIndex(container) {
    const list=document.createElement('div');list.className='classic-list';
    articles.forEach(article=>{
      const card=document.createElement('article');card.className='classic-card';
      const label=document.createElement('p');label.className='app-eyebrow';label.textContent=article.status;
      const heading=document.createElement('h2');const title=document.createElement('a');title.href=url(article);title.textContent=article.title;heading.append(title);
      const summary=document.createElement('p');summary.textContent=article.summary;
      const bottom=document.createElement('div');bottom.className='classic-card-bottom';
      const date=document.createElement('time');date.dateTime=article.date;date.textContent=article.date.replaceAll('-','.');
      const read=document.createElement('a');read.className='teal-button';read.href=url(article);read.textContent='연구 글 읽기 →';
      bottom.append(date,read);card.append(label,heading,summary,bottom);list.append(card);
    });container.append(list);
  }
  function renderArticle(container,article) {
    const body=document.createElement('div');body.className='classic-body';body.innerHTML=article.body;
    body.querySelectorAll('[data-scroll-target]').forEach(button=>{
      button.addEventListener('click',()=>{
        const heading=body.querySelector('#'+button.dataset.scrollTarget);
        if(heading instanceof HTMLDetailsElement) heading.open=true;
        heading.scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
        heading.focus({preventScroll:true});
      });
    });container.append(body);
  }
  window.MukgongClassics=Object.freeze({articles,renderIndex,renderArticle});
})();
