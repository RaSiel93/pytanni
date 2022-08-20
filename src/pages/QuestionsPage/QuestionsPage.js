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
        <Questions level='middle' topic='general' filters={filters}/>
        <Questions level='middle' topic='core' filters={filters} />
        <Questions level='middle' topic='function' filters={filters} />
        <Questions level='middle' topic='frontend' filters={filters} />
        <Questions level='middle' topic='design' filters={filters} />
        <Questions level='middle' topic='angular' filters={filters} />
        <Questions level='middle' topic='react' filters={filters} />
        <Questions level='middle' topic='backend' filters={filters} />
        <Questions level='middle' topic='database' filters={filters} />
        <Questions level='middle' topic='tools' filters={filters} />
        <Questions level='middle' topic='practice' filters={filters} />


        {
          filters['senior'] && (
            <>
              <h1>
                <strong>Senior</strong>
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
          </>
          )
        }
      </div>
    </div>
  )
}
