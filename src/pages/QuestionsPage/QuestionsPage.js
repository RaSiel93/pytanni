import { useState } from 'react';
import './QuestionsPage.scss';
import { Questions } from 'components';

export const QuestionsPage = () => {
  let juniorCounter = 0;

  const [filters, setFilters] = useState({
    junior: false,
    middle: false,
    senior: false,
    general: false,
    core: false,
    function: false,
    frontend: false,
    design: false,
    angular: false,
    react: false,
    backend: false,
    database: false,
    tools: false,
    practice: false
  });

  const toggleFilter = (filter) => {
    setFilters({
      ...filters,
      [filter]: !filters[filter]
    });
  }

  return (
    <div className='QuestionsPage'>
      <div>
        <div>
          <h1>Сумоўе па JavaScript. 300+ пытаньняў для Junior, Middle, Senior
          </h1>
        </div>
        <p>
          <em>Шаноўныя сябры! Прапаную вашэцевай увазе пераклад артыкула, апублікаванага на DOU.ua 21 сьнежня 2021 года. Арыгінальная вэрсія на ўкрінскай мове ё даступнай
          </em>
          <a>
            <em>па спасылцы
            </em>
          </a>
          <em>.
          </em>
        </p>
        <p>Гэтым разам прапануем азнаёміцца з актуальнымі пытаньнямі, якія ставяць на тэхнічных інтэрв’ю па JavaScript. Натуральна, мы гаворым пра шырокі спэктар спэцалізацаў, а таму абірайце свой напрамак ды рыхтуйцеся.
        </p>
        <div className='Filters'>
          <a className={filters['junior'] ? 'active' : ''} onClick={() => toggleFilter('junior')}>Junior</a>
          <a className={filters['middle'] ? 'active' : ''} onClick={() => toggleFilter('middle')}>Middle</a>
          <a className={filters['senior'] ? 'active' : ''} onClick={() => toggleFilter('senior')}>Senior</a>
        </div>
        <div className='Filters'>
          <a  className={filters['general'] ? 'active' : ''} onClick={() => toggleFilter('general')}>Агульныя</a>
          <a  className={filters['core'] ? 'active' : ''} onClick={() => toggleFilter('core')}>JS Core</a>
          <a  className={filters['function'] ? 'active' : ''} onClick={() => toggleFilter('function')}>Хвункцыі</a>
          <a  className={filters['frontend'] ? 'active' : ''} onClick={() => toggleFilter('frontend')}>Front-end</a>
          <a  className={filters['design'] ? 'active' : ''} onClick={() => toggleFilter('design')}>Вёрстка</a>
          <a  className={filters['angular'] ? 'active' : ''} onClick={() => toggleFilter('angular')}>Angular</a>
          <a  className={filters['react'] ? 'active' : ''} onClick={() => toggleFilter('react')}>React</a>
          <a  className={filters['backend'] ? 'active' : ''} onClick={() => toggleFilter('backend')}>Back-end</a>
          <a  className={filters['database'] ? 'active' : ''} onClick={() => toggleFilter('database')}>Базы дадзеных</a>
          <a  className={filters['tools'] ? 'active' : ''} onClick={() => toggleFilter('tools')}>Інструмэнты</a>
          <a  className={filters['practice'] ? 'active' : ''} onClick={() => toggleFilter('practice')}>Практычныя зданьні</a>
        </div>
        {
          filters['junior'] && (
            <h1>
              <strong>Junior</strong>
            </h1>
          )
        }
        <Questions level='junior' topic='general' filters={filters}/>
        <Questions level='junior' topic='core' filters={filters} />
        <Questions level='junior' topic='function' filters={filters} />
        <Questions level='junior' topic='frontend' filters={filters} />
        <Questions level='junior' topic='design' filters={filters} />
        <Questions level='junior' topic='angular' filters={filters} />
        <Questions level='junior' topic='react' filters={filters} />
        <Questions level='junior' topic='backend' filters={filters} />
        <Questions level='junior' topic='database' filters={filters} />
        <Questions level='junior' topic='tools' filters={filters} />
        <Questions level='junior' topic='practice' filters={filters} />

        {
          filters['middle'] && (
            <h1>
              <strong>Middle</strong>
            </h1>
          )
        }
        <Questions level='middle' topic='general' filters={filters} />
        <Questions level='middle' topic='core' filters={filters} />
        <p>
          <strong>Хвункцыі:
          </strong>
        </p>
        <p>40. Патлумачце, што азначае currying. Прывядзіце прыклады выкарыстаньня на практыцы.
        </p>
        <p>41. Прявядзіце прыклад хфункцыі з мэмазацай. Калі варта дастасоўваць гэту тэхніку?
        </p>
        <p>42. Што такое чэйнінг хвункцаў? Напішыце прыклад з выкарыстаньнем гэтага падыходу.
        </p>
        <p>43. У чым розьніца паміж function і arrow function? Якім будзе рэзультат выкананьня
          <a>коду
          </a>?
        </p>
        <figure>
          <div role="button" tabindex="0">
            <div>
        <img alt="" class="cf tb tc" src="https://miro.medium.com/max/700/1*Dtm3ta_AH2TfrPyJQPabng.png" width="700" height="159" loading="lazy" role="presentation"/>            </div>
          </div>
        </figure>
        <p>
          <strong>Front-end:
          </strong>
        </p>
        <p>44. У чым прынцыповая розьніца паміж падзеямі mouseleave і mouseout?
        </p>
        <p>45. У якім парадку абрабляюцца прызначаныя для карыстальніка падзеі ў DOM (click, mouseover і г.д.)? FIFO ці LIFO?
        </p>
        <p>46. Што такое Event bubbling ды Event capturing?
        </p>
        <p>47. Параўнайце мэтады об’екта event stopPropagation ды stopImmediatePropagation.
        </p>
        <p>48. Якія ёсьцека падыходы аптымізацы прадуктыўнасьці вэбстаронкі?
        </p>
        <p>49. Як рэалізавана мэханізма same-origin policy ў браўзэры? На якія браўзэрныя API ён пашыраецца?
        </p>
        <p>50. Назавіце спосабы захоўваньня дадзеных у браўзэры. Параўнайце іх.
        </p>
        <p>51. Web worker’ы. Апішыце асаблівасьці перадачы дадзеных паміж worker’амі ды асноўным патокам, паміж разьдзеленымі worker’амі.
        </p>
        <p>52. Што такое Transferable-аб’екты?
        </p>
        <p>53. Раскажыце пра спосабы аптымізацы выкананьня рэсурсаёмістых апэрацаў JS для паляпшэньня прадуктыўнасьці рэндэрынгу кантэнту на старонцы.
        </p>
        <p>54. Чаму ResizeObserver выклікае падзеі зьмены памеру да ўзнаўленьня элемэнту, а не пасьля?
        </p>
        <p>55. Раскажыце, як самі разумееце Web Accessibility?
        </p>
        <p>56. Апішыце алгарытм стварэньня хвункцаналу, што забясьпечвае чытаньне зьмесьціва .txt-хвайлу пры перацягваньні яго з хвайлавае сыстэмы ў вакно браўзэра.
        </p>
        <p>57. Што такое Virtual DOM?
        </p>
        <p>
          <strong>Вёрстка:
          </strong>
        </p>
        <p>58. Патлумачце розьніцу паміж адзінкамі вымярэньня px, em, rem.
        </p>
        <p>59. Для чаго патрэбны CSS-пераменныя? Прывядзіце некалькі прыкладаў выкарыстаньня.
        </p>
        <p>60. Што адбудзецца пры дадаваньні наступнага
          <a>сэлектара
          </a>?
        </p>
        <figure>
          <div>
      <img alt="" class="cf tb tc" src="https://miro.medium.com/max/339/1*oa3JWsGSruMtYgyFU79jLQ.png" width="339" height="27" loading="lazy" role="presentation"/>          </div>
        </figure>
        <p>61. Як адаптаваць старонку для друку?
        </p>
        <p>62. Апішыце асаблівасьці кастамізацы стыляў стандартных элемэнтаў хорм.
        </p>
        <p>63. Што такое progressive рэндэрынг? Якія падыходы выкарыстоўваюцца?
        </p>
        <p>64. Назавіце некалькі спосабаў рэалізацы lazy-loading мэдыарэсурсаў на старонцы.
        </p>
        <p>65. Назавіце папулярныя шабланізатары для хрантэнд-распрацоўкі. Апішыце асаблівасьці іх выкарыстаньня.
        </p>
        <p>66. Назавіце папулярныя CSS-метадалёгіі ды іх адрозьненьні.
        </p>
        <p>67. Як працуе CSS Grid?
        </p>
        <p>68. Якія хварматы відарысаў падтрымліваюць анімацу?
        </p>
        <p>69. Як адсачыць прагрэс/заканчэньне CSS @keyframes анімацаў альбо плаўных пераходаў, рэалізаваных з дапамогай transition, у JS?
        </p>
        <p>70. Якія CSS-уласьцівасьці могуць быць аброблены непасрэдна праз GPU? Што такое кампазытныя слоі й чаму іх вялікая колькасьць можа прывесьці да аварыйнага завяршэньня работы браўзэра на мабільных прыладах?
        </p>
        <p>71. Як перавыкарыстаць інляйнавыя SVG-элементы на старонцы?
        </p>
        <p>72. Апішыце спосабы аптымізацы SVG-хвайлаў.
        </p>
        <p>73. Як рэалізаваць іконкавы шрыхт з пэўнага набору SVG-хвайлаў?
        </p>
        <p>74. Што такое ілжывае тлустае альбо ілжывае курсіўнае (Faux) напісаньне шрыхтоў?
        </p>
        <p>75. Што такое #shadow-root у інспэктары HTML-старонкі?
        </p>
        <p>76. Навошта патрэбны Custom Elements?
        </p>
        <p>77. Чаму выдаленьне лішніх сымбаляў прагалаў/сымбаляў пераносу ў HTML не адбіваецца на канчатковай прадукцыйнасьці загрузкі старонкі?
        </p>
        <p>78. Што такое кантэкст адвображэньня canvas? Якія існуюць тыпы кантэксту для рэндэрынгу дзьвюхмернае і трохмернае грахвікі?
        </p>
        <p>
          <strong>Angular:
          </strong>
        </p>
        <p>79. Як працуе Dependency injection? Навошта гэта патрэбна? Раскажыце пра выкарыстаньне кастамных інжэктараў.
        </p>
        <p>80. Што такое zone.js? Для чаго Angular выкарыстоўвае зоны? Зь якой мэтай можна выкарыстоўваць NgZone-сэрвіс?
        </p>
        <p>81. Як працуе Change detection? Як можна аптымізаваць кампанэнт з дапамогай схемаў Change detection? Якія шчэ прыёмы ёсьцека для аптымізацы рэндэрынгу (зьвязаныя з Change detection) ?
        </p>
        <p>82. Як выканаць канхвігурацу HTTP-сэрвісу? Навошта яна патрэбна? Абробка HTTP-памылак?
        </p>
        <p>83. Якія ёсьціка падыходы да арганізацы работы з дадзенымі?
        </p>
        <p>84. Як падрыхтаваць зборнік да дэплою?
        </p>
        <p>85. Што такое NgRx? Калі варта яго выкарыстоўваць?
        </p>
        <p>86. У якіх выпадках лепш выкарыстоўваць Renderer-сэрвіс замест натыўных мэтадаў? І наадварот?
        </p>
        <p>87. Як працуюць і для чаго патрэбны рэзолвэры? Як атрымаць дадзеныя, загружаныя рэзолвэрамі?
        </p>
        <p>88. Як працуюць і навошта патрэбны дынамічныя кампанэнты? Прывядзіце прыклады іх мэтазгоднага выкарыстаньня.
        </p>
        <p>89. Якая розьніца паміж @ViewChild і @ContentChild?
        </p>
        <p>90. Што робіць код і як інакш можна зьвязаць клясу кампанэнта зь пераменнай?
        </p>
        <figure>
          <div>
      <img alt="" class="cf tb tc" src="https://miro.medium.com/max/410/1*QzxqWt2lXjLt0hiJX6Q8PQ.png" width="410" height="29" loading="lazy" role="presentation"/>          </div>
        </figure>
        <p>91. Як можна кэшаваць дадзеныя, выкарыстоўваючы сэрвісы альбо RxJS?
        </p>
        <p>92. Што такое асінхронная валідаца хормаў? Калі дастасоўваецца й як рэалізуецца?
        </p>
        <p>93. Навошта патрэбна forRoot-хвункцыя модуля?
        </p>
        <p>94. Якая розьніца паміж дэкляраваньнем і экспартам кампанэнта з модуля?
        </p>
        <p>95. Чаму дрэнна “правайдзіць” сэрвіс з shared-модуля ў lazy-load модуль? (Пытаньне пра scope модуляў).
        </p>
        <p>96. Што такое ::ng-deep і для чаго выкарыстоўваецца?
        </p>
        <p>97. Якія тэсты можна запусьціць для Angular-прыкладаньня? Якія інструмэнты выкарыстоўваюць для тэставаньня Angular-прыкладаньня?
        </p>
        <p>98. Як пратэставаць Angular-сэрвіс?
        </p>
        <p>
          <strong>React:
          </strong>
        </p>
        <p>99. Што такое JSX? Што ляжыць у ягонай аснове?
        </p>
        <p>100. Як працуе алгарытма Virtual DOM?
        </p>
        <p>101. Для чаго патрэбна ўласьцівасьць key падчас рэндэрынгу сьпісаў?
        </p>
        <p>102. У чым розьніца паміж хвункцанальнымі ды клясавымі кампанэнтамі?
        </p>
        <p>103. Навошта й калі патрэбна перадаваць props у super() пры выкарыстоўваньні клясавых кампанэнтаў?
        </p>
        <p>104. Чаму патрэбна выкарыстоўваць setState() для абнаўленьня нутранага стану кампанэнта?
        </p>
        <p>105. У чым заключаецца прынцып “пад’ёму стану”?
        </p>
        <p>106. Якія бібліятэкі мэнэджмэнту стану React-прыкладаньня самі знаеце? Навошта яны?
        </p>
        <p>107. Калі варта выкарыстоўваць Redux? Якія ёсьцека альтэрнатывы?
        </p>
        <p>108. Redux vs Mobx?
        </p>
        <p>109. Раскажыце пра базавы прынцып работы React Hooks.
        </p>
        <p>110. У чым розьніца паміж createRef і useRef?
        </p>
        <p>111. Калі варта выкарыстоўваць React refs? Калі ня варта?
        </p>
        <p>112. Якія недалікі бібліятэкі React бачыце?
        </p>
        <p>113. Якія патэрны выкарыстоўваеце разам з React?
        </p>
        <p>114. Як ставіцеся ды тыпізацы разам з React?
        </p>
        <p>115. Як пабудаваць добрую архітэктуру React-праекту?
        </p>
        <p>116. Аптымізаца React-прыкладаньняў? Як вымераць прадукцыйнасьць праграмы?
        </p>
        <p>117. Ці можна прыкладаньне на React убадаваць у іншае прыкладаньне на React?
        </p>
        <p>
          <strong>Back-end:
          </strong>
        </p>
        <p>118. Чаму Node.js аднапатокавы, а не шматпатокавы?
        </p>
        <p>119. Што такое event driven development?
        </p>
        <p>120. Параўнайце fork() ды spawn() мэтады.
        </p>
        <p>121. Раскажыце пра Node.js хрэймворкі, якія выкарыстоўвалі. Якая паміж імі розьніца?
        </p>
        <p>122. Апішыце словамі код эндпойнта, які павінен захаваць з кліента хвайл памерам 4 гігабайты й пакласьці яго на S3 альбо іншы CDN.
        </p>
        <p>123. Што такое мікрасэрвісы, навошта іх выкарыстоўваюць?
        </p>
        <p>124. У якіх выпадках самі б абралі маналіт, а ў якіх — мікрасэрвісы?
        </p>
        <p>125. Як зразумець, што прыкладаньне ў пэўны момант працуе спраўна?
        </p>
        <p>126. Як зразумець, што прыкладаньне за апошнія тры дні працавала спраўна?
        </p>
        <p>127. Як адбываецца праверка правільнасьці паролю пры выкарыстаньні bcrypt?
        </p>
        <p>128. Што такое JWT?
        </p>
        <p>129. Джуніар даслаў код на рэўю. Што тут ня так? Як выправіць?
        </p>
        <figure>
          <div role="button" tabindex="0">
            <div>
        <img alt="" class="cf tb tc" src="https://miro.medium.com/max/700/1*1SEHqqjXZjAAn5YUEmP4LA.png" width="700" height="131" loading="lazy" role="presentation"/>            </div>
          </div>
        </figure>

        <Questions level='middle' topic='database' filters={filters} />
        <p>
          <strong>Інструмэнты ды іншае:
          </strong>
        </p>
        <p>134.Для чаго патрэбен package-lock.json?
        </p>
        <p>135. У чым розьніца паміж npm install і npm ci?
        </p>
        <p>136. Для чаго патрэбны бандлэры?
        </p>
        <p>137. Раскажыце пра модульнае падключэньне скрыптоў. Прывядзіце прыклады выкарыстаньня загрузчыкаў/бандлэраў модуляў.
        </p>
        <p>138. Чым адрозьніваюцца git merge і git rebase?
        </p>
        <p>139. Што такое staging area ў git?
        </p>
        <p>140. Апішыце працэс code review. Назавіце асноўныя правілы, спосабы вырашэння канхліктаў і спрэчак падчас яго правядзеньня.
        </p>
        <p>
          <strong>Практычныя заданьні:
          </strong>
        </p>
        <p>141. Напішыце хвункцыю Sleep (ms), якая спыняе выкананьне async-хвункцыі на зададзены прамежак часу.
        </p>
        <p>142. Рэалізуйце адзін з мэтадаў масіву (напрыклад splice).
        </p>
        <p>143. Напішыце хвункцыю з RefExp для знаходжаньня ўсіх HTML-спасылак у радку.
        </p>
        <p>144. Рэалізуйце хвункцыю, якая выканае callback для ўсіх элемэнтаў пэўнай галіны DOM-дрэва.
        </p>
        <p>145. Рэалізуйце табліцу зь віртуальным скролам.
        </p>
        <p>146. Рэалізуйце хвункцыю
          <a>ператварэньня
          </a> URL query радка ў JSON.
        </p>
        <figure>
          <div role="button" tabindex="0">
            <div>
        <img alt="" class="cf tb tc" src="https://miro.medium.com/max/700/1*sMZBsxRy5igbb3FrZOImFg.png" width="700" height="269" loading="lazy" role="presentation"/>            </div>
          </div>
        </figure>
        <p>147. Рэалізуйце хвункцыю
          <a>знаходжаньня
          </a> перасеку двух масіваў.
        </p>
        <figure>
          <div role="button" tabindex="0">
            <div>
        <img alt="" class="cf tb tc" src="https://miro.medium.com/max/700/1*6cb7wZ38QwWTouAmmjQCVA.png" width="700" height="120" loading="lazy" role="presentation"/>            </div>
          </div>
        </figure>
        <p>148. Рэалізуйце
          <a>хвункцыю/клясу
          </a> для гэнэрацы HTML.
        </p>
        <figure>
          <div role="button" tabindex="0">
            <div>
        <img alt="" class="cf tb tc" src="https://miro.medium.com/max/700/1*S-Hc4USa7j1ldG3hK6DZdA.png" width="700" height="132" loading="lazy" role="presentation"/>            </div>
          </div>
        </figure>
        <p>149. Як ёсьціка праект з абмежаванымі тэрмінамі ды некрытычнай прадукцыйнасьцю, чым кіравацьмецеся пры выбары бібліятэк, падыходаў? Ці ўсё ж зьвяртацьмеце ўвагу на прадукцыйнасьць? Альбо наадварот: тэрміны нелімітаваны, прадукцыйнасьць важна. Вашэцевы дзеяньні?
        </p>
        <h1>
        <strong>Senior
        </strong>
        </h1>
        <p>
          <strong>Агульныя:
          </strong>
        </p>
        <p>1. Раскажыце пра хвункцанальнае праграмаваньне.
        </p>
        <p>2. Што такое TDD (Test Driven Development)/BDD (Behavior Driven Development)?
        </p>
        <p>3. Раскажыце дэталёва пра работу HTTPS.
        </p>
        <p>4. Які стэк тэхналёгіяў можна абраць для рэалізацы клону якога-небудзь вядомага праекту й чаму?
        </p>
        <p>5. Ёсьцека праект на старых тэхналёгіях, неабходна ў яго ўносіць зьмены. Як гэта зрабіць найлепш?
        </p>
        <p>6. Як кандыдат мае досьвед работы зь некалькімі хрэймворкамі: які выкарыстоўвацьмеце для наступнага праекту? Якія хвактары ўплывацьмуць на выбар?
        </p>
        <p>7. Што такое V8 Engine?
        </p>
        <p>
          <strong>JS Core:
          </strong>
        </p>
        <p>8. Рэалізаца патэрну Class Free OOP (
          <a>https://observablehq.com/@bratter/class-free-oop
          </a>).
        </p>
        <p>9. Патэрн async disposer (
          <a>https://advancedweb.hu/what-is-the-async-disposer-pattern-in-javascript
          </a>).
        </p>
        <p>10. Выкарыстаньне рэгулярных выразаў. Калі прымальна/няпрымальна? Як яны працуюць? Як можна зрабіць чытэльным код?
        </p>
        <p>
          <strong>Front-end:
          </strong>
        </p>
        <p>11. Як браўзэр вызначае, ці можам стасавацца паміж укладкамі?
        </p>
        <p>12. Што такое Content Security Policy?
        </p>
        <p>13. Як пазбегнуць загрузкі кэшаваных хвайлаў скрыптаў і стыляў?
        </p>
        <p>14. Што такое requestAnimationFrame?
        </p>
        <p>15. Раскажыце пра мікрасэрвісную архітэктуру Front-end App.
        </p>
        <p>16. Што такое Shadow DOM?
        </p>
        <p>17. Параўнайце nextElementSibling ды nextSibling.
        </p>
        <p>18. Якія знаеце мэтрыкі вэбсайту?
        </p>
        <p>
          <strong>Angular:
          </strong>
        </p>
        <p>19. Як праводзіцца канхвігураца NgZone-модуля? Калі гэта неабходна?
        </p>
        <p>20. Што раздражняе ў хрэймворку? Што б самі зьмянілі?
        </p>
        <p>21. Як бы самі вырашалі, што дадаць у наступным рэлізе хрэймворку, якая б хвіча гэта была?
        </p>
        <p>22. Ці пісалі кастамныя дэкаратары? Як так, то навошта?
        </p>
        <p>23. Зрабіце рэўю
          <a>коду
          </a> ды дайце заўвагі што да архітэктуры.
        </p>
        <p>24. Раскажыце, як бы самі рабілі
          <a>такія
          </a> хвічы. Апішыце архітэктуру хвічы ў прыкладаньні.
        </p>
        <p>
          <strong>Back-end:
          </strong>
        </p>
        <p>25. Параўнайце Common.js з AMD Modules ды ES6 Imports.
        </p>
        <p>26. Які хрэймворк выбралі б для бэкэнду, чаму?
        </p>
        <p>27. Апішыце сваімі словамі, як працуе OAuth v2.
        </p>
        <p>28. Ёсьцека праект з крыніцамі выцёку памяці, як іх выявіць, адсунуць ды прадухіліць у будучыні?
        </p>
        <p>29. Ёсьцека праект з performance issues, як іх выявіць, адсунуць ды прадухіліць у будучыні?
        </p>
        <p>
          <strong>Базы дадзеных:
          </strong>
        </p>
        <Questions level='senior' topic='database' filters={filters} />
        <p>
          <strong>Інструмэнты:
          </strong>
        </p>
        <p>37. Ці можаце апісаць сутнасьць мэтадалёгіі git flow дзьвума словамі?
        </p>
        <p>38. Што азначае вымога рабіць squash commits падчас rebase?
        </p>
        <p>39. Якая вашэцева думка пра альтэрнатыўныя сыстэмы кантролю вэрсіяў (Version Control System)?
        </p>
        <p>40. Якія канвэнцыі знаеце й выкарыстоўваеце для git?
        </p>
        <p>41. Раскажыце пра свой досьвед выкарыстаньня/укарэньваньня CI/CD.
        </p>
        <p>42. Патрэбна наладзіць дэплой праекту на некалькі асяродзьдзяў. Раскажыце, як бы самі будавалі працэс? Якія інструмэнты выкарыстоўвалі б?
        </p>
        <p>
          <strong>Практычныя заданьні:
          </strong>
        </p>
        <p>43. Рэалізуйце асінхронны мэтад filter для Array (павінны працаваць await).
        </p>
        <p>44. Рэалізуйце хвункцыю reduce з дапамогай рэкурсіі.
        </p>
        <p>45. Як можна было б зрабіць toggle-кампанэнт, як у iPhone, бяз выкарыстаньня JS?
        </p>
        <p>Ацім за дапамогу ў падрыхтоўцы артыкулу
          <a>Вячаславу Калдоўскаму
          </a>, Івану Рыжэнку, Мікалаю Галкіну,
          <a>Аляксандру Бурмістраву
          </a>,
          <a>Уладу Балабашу
          </a>,
          <a>Андрэю Шумадзе
          </a>,
          <a>Івану Кувацкаму
          </a>,
          <a>Андрэю Кладачнаму
          </a>.
        </p>
      </div>
    </div>
  )
}
