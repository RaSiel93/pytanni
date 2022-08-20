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
            </>
          )
        }
        <Questions level='senior' topic='general' filters={filters}/>
        <Questions level='senior' topic='core' filters={filters} />
        <Questions level='senior' topic='function' filters={filters} />
        <Questions level='senior' topic='frontend' filters={filters} />
        <Questions level='senior' topic='design' filters={filters} />
        <Questions level='senior' topic='angular' filters={filters} />
        <Questions level='senior' topic='react' filters={filters} />
        <Questions level='senior' topic='backend' filters={filters} />
        <Questions level='senior' topic='database' filters={filters} />
        <Questions level='senior' topic='tools' filters={filters} />
        <Questions level='senior' topic='practice' filters={filters} />
      </div>
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
  )
}
