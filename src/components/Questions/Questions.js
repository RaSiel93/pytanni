const topics = {
  general: 'Агульныя',
  core: 'JS Core',
  function: 'Хвункцыі',
  frontend: 'Front-end',
  design: 'Вёрстка',
  angular: 'Angular',
  react: 'React',
  backend: 'Back-end',
  database: 'Базы дадзеных',
  tools: 'Інструмэнты',
  practice: 'Практычныя зданьні'
};

const questions = [
  {
    text: 'Якія мэтады HTTP-запытаў самі знаеце?',
    level: 'junior',
    topic: 'general'
  },
  {
    text: 'Якія вэрсіі HTTP-пратаколу вашэці вядомы?',
    level: 'junior',
    topic: 'general'
  },
  {
    text: 'Якія знаеце коды адказу (стану) HTTP?',
    level: 'junior',
    topic: 'general'
  },
  {
    text: 'Што такое Cross-Origin Resource Sharing? Як пазбавіцца праблем з CORS?',
    level: 'junior',
    topic: 'general'
  },
  {
    text: 'Што такое cookie?',
    level: 'junior',
    topic: 'general'
  },
  {
    text: 'Які максымальны памер cookie?',
    level: 'junior',
    topic: 'general'
  },
  {
    text: 'Што азначае дырэктыва use strict?',
    level: 'junior',
    topic: 'general'
  },
  {
    text: 'Чым JS адрозьніваецца падчас работы на front-end і back-end?',
    level: 'junior',
    topic: 'general'
  },
  {
    text: 'Што такое статычная і дынамічная тыпізацыі?',
    level: 'junior',
    topic: 'general'
  },
  {
    text: 'Як кліент узаемадзейнічае з сэрвэрам?',
    level: 'junior',
    topic: 'general'
  },
  {
    text: 'Што такое REST?',
    level: 'junior',
    topic: 'general'
  },
  {
    text: 'Патлумачце паняцьце мутабэльнасьць/імутабэльнасьць? Якія тыпы ёсьцека мутабэльнымі й наадварот?',
    level: 'junior',
    topic: 'general'
  },
  {
    text: 'Як шукаць памылкі ў кодзе? Ці выкарыстоўваеце дэбагер?',
    level: 'junior',
    topic: 'general'
  },
  {
    text: 'Якіх вядомых людзей са сьвету JS знаеце?',
    level: 'junior',
    topic: 'general'
  },
  {
    text: 'Якія тыпы дадзеных існуюць у JS?',
    level: 'junior',
    topic: 'core'
  },
  {
    text: 'Як праверыць, ці аб’ект ёсьцека масівам?',
    level: 'junior',
    topic: 'core'
  },
  {
    text: 'Як праверыць, ці лік ё скончаным?',
    level: 'junior',
    topic: 'core'
  },
  {
    text: 'Як праверыць, што пераменная роўная NaN?',
    level: 'junior',
    topic: 'core'
  },
  {
    text: 'Чым адрозьніваюцца паводзіны isNaN() і Number.isNaN()?',
    level: 'junior',
    topic: 'core'
  },
  {
    text: 'Параўнайце ключавыя словы var, let, const.',
    level: 'junior',
    topic: 'core'
  },
  {
    text: 'Што такое вобласьць бачнасьці?',
    level: 'junior',
    topic: 'core'
  },
  {
    text: 'Што такое дэструктурызаца?',
    level: 'junior',
    topic: 'core'
  },
  {
    text: 'Для чаго прызначаны мэтады setTimeout і setInterval?',
    level: 'junior',
    topic: 'core'
  },
  {
    text: 'Параўнайце падыходы работы з асінхроным кодам: callbacks vs promises vs async/await.',
    level: 'junior',
    topic: 'core'
  },
  {
    text: 'Ці можна запісваць новыя ўласьцівасьці/хвункцыі ў прататыпы стандартных клясаў (Array, Object і г.д.)? Чаму не?',
    level: 'junior',
    topic: 'core'
  },
  {
    text: 'Назавіце мэтады масіваў, якія памятаеце, і скажыце, для чаго яны патрэбны.',
    level: 'junior',
    topic: 'core'
  },
  {
    text: 'Якія мэтады перабіраньня масіву знаеце? У чым іх адменнасьць?',
    level: 'junior',
    topic: 'core'
  },
  {
    text: 'Як працуюць апэратары прысвойваньня/параўнаньня/радковыя/арыхмэтычныя/бітавыя і г.д.?',
    level: 'junior',
    topic: 'core'
  },
  {
    text: 'Апішыце прызначэньне й прынцыпы работы з калекцамі Map і Set.',
    level: 'junior',
    topic: 'core'
  },
  {
    text: 'Што азначае глыбокая (deep) і павярхоўная (shallow) копія аб’екта? Як зрабіць кожную зь іх?',
    level: 'junior',
    topic: 'core'
  },
  {
    text: 'Якая розьніца паміж абвяшчэньнем хвункцыі (function declaration) ды хвункцанальным выразам?',
    level: 'junior',
    topic: 'function'
  },
  {
    text: 'Што такое ананімная хвункцыя?',
    level: 'junior',
    topic: 'function'
  },
  {
    text: 'Раскажыце пра стралковыя хвункцыі (arrow function). У чым складаюцца адменнасьці стралковых хвункцаў ад звычайных?',
    level: 'junior',
    topic: 'function'
  },
  {
    text: 'Што такое й для чаго выкарыстоўваюць IIFE (Immediately Invoked Function Expression)?',
    level: 'junior',
    topic: 'function'
  },
  {
    text: 'Што такое hoisting, як ён працуе для пераменных і хвункцый?',
    level: 'junior',
    topic: 'function'
  },
  {
    text: 'Што такое зачыненьне (closure) і якія сцэнары яго выкарыстаньня?',
    level: 'junior',
    topic: 'function'
  },
  {
    text: 'Як самі разумееце зачыненьне? Што мае быць выведзена ў кансолі ў гэтым выпадку?',
    level: 'junior',
    topic: 'function',
    image: 'https://miro.medium.com/max/700/1*EMujCTinWFxMCdotX4a3Yw.png'
  },
  {
    text: 'Што такое рэкурсія?',
    level: 'junior',
    topic: 'function'
  },
  {
    text: 'Што азначае ключавое слова this?',
    level: 'junior',
    topic: 'function'
  },
  {
    text: 'Што такое страта кантэксту, калі адбываецца й як яго пазьбегнуць?',
    level: 'junior',
    topic: 'function'
  },
  {
    text: 'Мэтады хвункцый bind/call/apply — навошта і ў чым розьніца?',
    level: 'junior',
    topic: 'function'
  },
  {
    text: 'Што такое DOM?',
    level: 'junior',
    topic: 'frontend'
  },
  {
    text: 'Параўнайце атрыбуты падключэньня скрыпту async і defer у HTML-дакумэнце.',
    level: 'junior',
    topic: 'frontend'
  },
  {
    text: 'Якая розьніца паміж уласьцівасьцямі HTML-элемэнтаў innerHTML і innerText?',
    level: 'junior',
    topic: 'frontend'
  },
  {
    text: 'Апішыце працэс усплываньня (bubbling) падзеяў у DOM.',
    level: 'junior',
    topic: 'frontend'
  },
  {
    text: 'Як спыніць усплываньне (bubbling) падзеі?',
    level: 'junior',
    topic: 'frontend'
  },
  {
    text: 'Як спыніць дэхволтную апрацоўку падзеяў?',
    level: 'junior',
    topic: 'frontend'
  },
  {
    text: 'Чаму ё роўным this у апрацоўшчыку падзей (event handler)?',
    level: 'junior',
    topic: 'frontend'
  },
  {
    text: 'Што такое LocalStorage і SessionStorage? Які максымальны памер LocalStorage?',
    level: 'junior',
    topic: 'frontend'
  },
  {
    text: 'Як атрымаць вышыню блёку? Яго стан адносна межаў дакумэнта?',
    level: 'junior',
    topic: 'frontend'
  },
  {
    text: 'Што такое webpack?',
    level: 'junior',
    topic: 'frontend'
  },
  {
    text: 'Чымся адрозьніваецца dev-зборка ад prod?',
    level: 'junior',
    topic: 'frontend'
  },
  {
    text: 'Што такое блёкавая мадэль CSS?',
    level: 'junior',
    topic: 'design'
  },
  {
    text: 'Якія спосабы цэнтраваньня блёкавага зьместу па гарызанталі ды вертыкалі самі знаеце?',
    level: 'junior',
    topic: 'design'
  },
  {
    text: 'Якія падыходы ў вёрстцы вашэці вядомыя (float, flex, grid, etc.)?',
    level: 'junior',
    topic: 'design'
  },
  {
    text: 'Як зрабіць дадатак responsive?',
    level: 'junior',
    topic: 'design'
  },
  {
    text: 'Якія ёсьціка прынцыпы сэмантычнае вёрсткі?',
    level: 'junior',
    topic: 'design'
  },
  {
    text: 'Навошта патрэбны прэхвіксы для некаторых CSS-уласьцівасьцяў (-webkit-, -moz- і г.д.)?',
    level: 'junior',
    topic: 'design'
  },
  {
    text: 'Як спрасьціць напісаньне кросбраўзерных стыляў?',
    level: 'junior',
    topic: 'design'
  },
  {
    text: 'Практычнае заданьне: пракамэнтаваць ды выправіць прыклад дрэннага CSS і HTML.',
    level: 'junior',
    topic: 'design'
  },
  {
    text: 'Што такое CSS-прэпрацэсары? Зь якімі працавалі? Што новага яны прыносяць у стандартны CSS?',
    level: 'junior',
    topic: 'design'
  },
  {
    text: 'Пералічыце асноўныя кампанэнты хрэймворку (модуль, роўт, дырэктыва і г.д.).',
    level: 'junior',
    topic: 'angular'
  },
  {
    text: 'У чым розьніца паміж кампанэнтам і дырэктываю?',
    level: 'junior',
    topic: 'angular'
  },
  {
    text: 'Раскажыце пра жыцьцёвы цыкл кампанэнта.',
    level: 'junior',
    topic: 'angular'
  },
  {
    text: 'Пералічыце хукі жыцьцёвага цыклу кампанэнта, якія часта выкарыстоўваюцца, ды раскажыце, для чаго яны патрэбны.',
    level: 'junior',
    topic: 'angular'
  },
  {
    text: 'У чым розьніца паміж канструктарам і ngOnInint-хукам?',
    level: 'junior',
    topic: 'angular'
  },
  {
    text: 'Як абараніць роўт ад несанкцанаванага доступу? Якія мэханізмы дае для гэтага хрэймворк?',
    level: 'junior',
    topic: 'angular'
  },
  {
    text: 'Што такое Lazy loading, як і для чаго выкарыстоўваецца?',
    level: 'junior',
    topic: 'angular'
  },
  {
    text: 'Якое прызначэньне RouterOutlet?',
    level: 'junior',
    topic: 'angular'
  },
  {
    text: 'Як кампанэнты могуць узаемадзейнічаць адно з адным?',
    level: 'junior',
    topic: 'angular'
  },
  {
    text: 'Як стварыць two-way binding уласьціывасьць для кампанэнта?',
    level: 'junior',
    topic: 'angular'
  },
  {
    text: 'Якія тыпы хорм мае хрэймворк? У якіх выпадках і што лепш выкарыстоўваць?',
    level: 'junior',
    topic: 'angular'
  },
  {
    text: 'Якія станы мае хорма і як гэта можна прыстасаваць?',
    level: 'junior',
    topic: 'angular'
  },
  {
    text: 'Навошта патрэбны сэрвісы? Як зь імі працаваць?',
    level: 'junior',
    topic: 'angular'
  },
  {
    text: 'Што такое singleton-сэрвісы? Якое іхняе прызначэньне? Спосаб стварэньня?',
    level: 'junior',
    topic: 'angular'
  },
  {
    text: 'Якія ё спосабы абвяшчэньня сэрвісаў?',
    level: 'junior',
    topic: 'angular'
  },
  {
    text: 'Для чаго патрэбны модулі? Колькі іх мае быць у праекце?',
    level: 'junior',
    topic: 'angular'
  },
  {
    text: 'Навошта патрэбны агульныя модулі (shared)?',
    level: 'junior',
    topic: 'angular'
  },
  {
    text: 'Якія перавагі тыпізацы ў TypeScript?',
    level: 'junior',
    topic: 'angular'
  },
  {
    text: 'Якія магчымасьці TypeScript можна выкарыстоўваць для тыпізацы (тут маюць на ўвазе інтэрхвэйсы, тыпы, enum і г.д.)?',
    level: 'junior',
    topic: 'angular'
  },
  {
    text: 'Якая розьніца паміж інтэрхвэйсам і клясай?',
    level: 'junior',
    topic: 'angular'
  },
  {
    text: 'У чым розьніца паміж інтэрхвэйсам і абстрактнай клясай?',
    level: 'junior',
    topic: 'angular'
  },
  {
    text: 'Якая розьніца паміж інтэрхвэйсам і тыпам?',
    level: 'junior',
    topic: 'angular'
  },
  {
    text: 'Што такое RxJS? Як ён выкарыстоўваецца ў хрэймворку? Якія кампанэнты хрэймворку шчыльна зьвязаныя зь ім?',
    level: 'junior',
    topic: 'angular'
  },
  {
    text: 'Чым адрозьніваюцца Observable і Pomise?',
    level: 'junior',
    topic: 'angular'
  },
  {
    text: 'Для чаго патрэбны Subjects? Якія тыпы Subjects існуюць?',
    level: 'junior',
    topic: 'angular'
  },
  {
    text: 'Як зрабіць некалькі пасьлядоўных запытаў да API з дапамогай HTTP-сэрвісу й RxJS?',
    level: 'junior',
    topic: 'angular'
  },
  {
    text: 'Якія розьніца паміж switchMap, concatMap, mergeMap?',
    level: 'junior',
    topic: 'angular'
  },
  {
    text: 'Як можна канхвігураваць Angular-дастасаваньне?',
    level: 'junior',
    topic: 'angular'
  },
  {
    text: 'Навошта патрэбны environment-хвайлы? Калі іх лепш не выкарыстоўваць?',
    level: 'junior',
    topic: 'angular'
  },
  {
    text: 'У чым розьніца паміж “разумным” (smart) і “дурным” (dumb) кампанэнтамі? У якіх выпадках прыстасоўваецца кожны зь іх?',
    level: 'junior',
    topic: 'angular'
  },
  {
    text: 'У чым розьніца паміж NgForm, FormGroup і FormControl і як іх прыстасоўваюць для пабудовы хорм?',
    level: 'junior',
    topic: 'angular'
  },
  {
    text: 'Навошта патрэбен і як працуе async pipe?',
    level: 'junior',
    topic: 'angular'
  },
  {
    text: 'Як сачыць за разьвіцьцём хрэймворку? Якіх вядомых людзей, зьвязаных з Angular, самі знаеце/чытаеце?',
    level: 'junior',
    topic: 'angular'
  },
  {
    text: 'Ці працавалі з клясавымі кампанэнтамі? У чым іхняя асаблівасьць?',
    level: 'junior',
    topic: 'react'
  },
  {
    text: 'Якія дадзеныя лепш зьберагаць у стане кампанэнта, а якія перадаваь цераз пропсы? Прывядзіце прыклад.',
    level: 'junior',
    topic: 'react'
  },
  {
    text: 'Ці знаёмыя з хукамі? У чым іхнія перавагі? Ці даводзілася рабіць свае і зь якой мэтай?',
    level: 'junior',
    topic: 'react'
  },
  {
    text: 'Ці знаёмыя з храгмэнтамі ды парталамі? Навошта яны патрэбны?',
    level: 'junior',
    topic: 'react'
  },
  {
    text: 'Калі й для чаго выкарыстоўваюць рэхвы?',
    level: 'junior',
    topic: 'react'
  },
  {
    text: 'Якія самі знаеце мэтады жыцьцёвага цыклу кампанэнта?',
    level: 'junior',
    topic: 'react'
  },
  {
    text: 'У якім мэтадзе жыцьцёвага цыклу кампанэнта лепш рабіць запыты на сэрвер? Чаму?',
    level: 'junior',
    topic: 'react'
  },
  {
    text: 'У якім мэтадзе жыцьцёвага цыклу кампанэнта лепш рабіць падпіску й адпіску ад лісэнэра? Чаму? Навошта адпісвацца?',
    level: 'junior',
    topic: 'react'
  },
  {
    text: 'Ці мелі досьвед работы з кантэкстам? Калі яго варта выкарыстоўваць?',
    level: 'junior',
    topic: 'react'
  },
  {
    text: 'У чым асаблівасьць PureComponent?',
    level: 'junior',
    topic: 'react'
  },
  {
    text: 'Ці працаваў з мэмаізаванымі сэлектарамі (memoized selectors)? Для чаго іх выкарыстоўваюць і які прынцып работы?',
    level: 'junior',
    topic: 'react'
  },
  {
    text: 'У чым бачыце перавагі бібліятэкі React?',
    level: 'junior',
    topic: 'react'
  },
  {
    text: 'Чаму бібліятэка React ё хуткай? Што такое Virtual DOM і Shadow DOM?',
    level: 'junior',
    topic: 'react'
  },
  {
    text: 'Навошта ў сьпісах ёсьць ключы? Ці можна рабіць ключамі індэксы элемэнтаў масіву? Калі гэта ёсьцека апраўданым?',
    level: 'junior',
    topic: 'react'
  },
  {
    text: 'У чым асноўная ідэя Redux?',
    level: 'junior',
    topic: 'react'
  },
  {
    text: 'Работа са стылямі ў React.',
    level: 'junior',
    topic: 'react'
  },
  {
    text: 'React — гэта бібліятэка ці хрэймворк? Якая розьніца паміж гэтымі дзьвюма паняткамі?',
    level: 'junior',
    topic: 'react'
  },
  {
    text: 'Ці можна выкарыстоўваць jQuery разам з React? Чому так/не?',
    level: 'junior',
    topic: 'react'
  },
  {
    text: 'Што такое codemod?',
    level: 'junior',
    topic: 'react'
  },
  {
    text: 'Ці даводзілася наладжваць праект React з нуля? З дапамогай якіх інструмэнтаў самі гэта рабілі?',
    level: 'junior',
    topic: 'react'
  },
  {
    text: 'Пералічыце ўсе бібліятэкі, якія выкарыстоўвалі ў зьвязку з React.',
    level: 'junior',
    topic: 'react'
  },
  {
    text: 'Што наскладнейшае даводзілася реалізоўваць з дапамогай React?',
    level: 'junior',
    topic: 'react'
  },
  {
    text: 'Што такое REPL?',
    level: 'junior',
    topic: 'backend'
  },
  {
    text: 'Што такое streams у Node.js?',
    level: 'junior',
    topic: 'backend'
  },
  {
    text: 'Што такое middleware?',
    level: 'junior',
    topic: 'backend'
  },
  {
    text: 'Для чаго выкарыстоўваюць хвункцыю setImmediate?',
    level: 'junior',
    topic: 'backend'
  },
  {
    text: 'Навошта патрэбен app.param() у express?',
    level: 'junior',
    topic: 'backend'
  },
  {
    text: 'Што такое token based authentication?',
    level: 'junior',
    topic: 'backend'
  },
  {
    text: 'Напішыце просты запыт для вылічэньня трох аўтараў, што маюць найбольш кнігаў.',
    level: 'junior',
    topic: 'database'
  },
  {
    text: 'Напішыце запыт, які абірае апошнія тры камэнтары для канкрэтнага карыстальніка для дзьвух табліцаў: камэнтары ды карыстальнікі.',
    level: 'junior',
    topic: 'database'
  },
  {
    text: 'Спраектуйце простую схему базы дадзеных для бібліятэкі.',
    level: 'junior',
    topic: 'database'
  },
  {
    text: 'Для чаго выкарыстоўваюць SQL-апэратар HAVING?',
    level: 'junior',
    topic: 'database'
  },
  {
    text: 'Навошта выкарыстоўваюць SQL-апэратар LEFT JOIN?',
    level: 'junior',
    topic: 'database'
  },
  {
    text: 'Чым адрозьніваецца embed- ад reference-сувязі ў MongoDB?',
    level: 'junior',
    topic: 'database'
  },
  {
    text: 'У адным праекце праграмісты захоўваюць дадзеныя ў MongoDB-калекцыі камэнтароў, выкарыстоўваючы такія тыпы дадзеных (глядзіце ніжэй). Што кепскага ў гэтым рашэньні?',
    level: 'junior',
    topic: 'database',
    image: 'https://miro.medium.com/max/700/1*jqO-cZDUa2fM_OSbhpRJUA.png'
  },
  {
    text: 'У праекце спатрэбілася ўнесьці зьмены ў структуру табліцаў, дадаць некалькі палёў і індэксаў. Як праграмісты рабіцьмуць гэта на прадакшэне?',
    level: 'junior',
    topic: 'database'
  },
  {
    text: 'Штораз, калі самі робіце pull, чамусьці трапляецца канхвлікт у апошнім радку ва ўсіх хвайлах, якія самі рэдагавалі. Што адбываецца?',
    level: 'junior',
    topic: 'tools'
  },
  {
    text: 'Што робіць каманда git fetch?',
    level: 'junior',
    topic: 'tools'
  },
  {
    text: 'Якія git hygiene падыходы самі знаеце?',
    level: 'junior',
    topic: 'tools'
  },
  {
    text: 'Што такое CI/CD? Для чаго гэта патрэбна?',
    level: 'junior',
    topic: 'tools'
  },
  {
    text: 'Раскажыце, якія ёсьціка спосабы капіяваньня простага аб’екту накшталт obj ={a:1, b:2, c:3}',
    level: 'junior',
    topic: 'practice'
  },
  {
    text: 'Напішыце deep clone для аб’екта.',
    level: 'junior',
    topic: 'practice'
  },
  {
    text: 'Назавіце розныя спосабы, як памяняць мейсцамі значэньні дзьвух пераменных.',
    level: 'junior',
    topic: 'practice'
  },
  {
    text: 'Мэнэджэр папрасіў у задачы памяняць статусы з “active, inactive” на “active, removed”, але ў кодзе хвігуруюць тыкеля лічбы й незразумела, які статус адпавядае якой лічбе. Як дапамагчы будучым праграмістам ня лезьці ў дакумэнтацыю з кодам? Пытаньне ставяць на канкрэтным прыкладзе з кодам.',
    level: 'junior',
    topic: 'practice'
  },
  {
    text: 'Неабходна зрабіць мініпраект — сьпіс карыстальнікаў з хвормай стварэньня/рэдагаваньня карыстальніка:',
    level: 'junior',
    topic: 'practice',
    items: [
      'Для зьбераганьня карыстальнікаў выкарыстоўвайце Firebase (гэта бескаштоўна).',
      'Для стылізацы выкарыстоўвайце Bootstrap.',
      'Мінімальны набор палёў карыстальніка: імя; прозьвішча; электронная пошта; ціліхвон (у хвармаце +375(ХХ)ХХХ-ХХ-ХХ); дата нараджэньня; будзе плюсам — дадаваньне аватара ды магчымасьць crop-карцінкі.',
      'Карыстальнікі павінны мець магчымасьць хвільтрацы ды пагінацы.',
      'Праект мае зьмяшчаць README-хвайл з крокамі для запуску.'
    ]
  },
  {
    text: 'Раскажыце пра піраміду тэставаньня.',
    level: 'middle',
    topic: 'general'
  },
  {
    text: 'Якія тыпы аўтаматызаваных тэстаў выпадала нагода пісаць? Якія бібліятэкі пры гэтым выкарыстоўвалі? Якім інструмэнтам аддаеце перавагу й чаму?',
    level: 'middle',
    topic: 'general'
  },
  {
    text: 'Што такое unit-тэсты? Якое мейсца ў пірамідзе тэставаньня займаюць unit-тэсты?',
    level: 'middle',
    topic: 'general'
  },
  {
    text: 'Што такое code coverage? Ці абавязковае 100% пакрываньне тэстамі коду?',
    level: 'middle',
    topic: 'general'
  },
  {
    text: 'Як забараніць браўзэру аддаваць кэш на HTTP-запыт?',
    level: 'middle',
    topic: 'general'
  },
  {
    text: 'Што такое XSS (Cross-Site Scripting)?',
    level: 'middle',
    topic: 'general'
  },
  {
    text: 'Раскажыце пра патэрны Observer, Pub/Sub. Якая паміж імі розьніца? Прывядзіце прыклады рэалізацы гэтых патэрнаў у вядомых хрэймворках/бібліятэках/браўзэрных API.',
    level: 'middle',
    topic: 'general'
  },
  {
    text: 'Зь якою мэтаю можа быць выкарыстаны event listener падзеі fetch self.addEventListener(‘fetch’, event =&gt; {})?',
    level: 'middle',
    topic: 'general'
  },
  {
    text: 'Што такое Event loop і як ён працуе? Раскажыце пра мікразадачы ды макразадачы.',
    level: 'middle',
    topic: 'general'
  },
  {
    text: 'Што такое Redis і для чаго яго выкарыстоўваюць?',
    level: 'middle',
    topic: 'database'
  },
  {
    text: 'Якія базы дадзеных выкарыстоўвалі? Якая розьніца паміж SQL і NoSQL?',
    level: 'middle',
    topic: 'database'
  },
  {
    text: 'Для дзьвюх табліцаў — камэнтары ды карыстальнікі — напішыце запыт, які абірае апошнія тры камэнтары для кожнага карыстальніка.',
    level: 'middle',
    topic: 'database'
  },
  {
    text: 'Я як заказчык прашу абраць вашэцю базу дадзеных для новага праекту. Вашэцевы дзеяньні?',
    level: 'middle',
    topic: 'database'
  },
  {
    text: 'Якія альтэрнатыўныя віды базаў дадзеных выкарыстоўваеце?',
    level: 'senior',
    topic: 'database'
  },
  {
    text: 'Што такое RDS і чаму ён часам не падыходзіць?',
    level: 'senior',
    topic: 'database'
  },
  {
    text: 'Што такое SQL Injections і як іх пазьбегнуць?',
    level: 'senior',
    topic: 'database'
  },
  {
    text: 'Чаму для запытаў у БД трэба выкарыстоўваць плэйсхолдэры?',
    level: 'senior',
    topic: 'database'
  },
  {
    text: 'Як спраектаваць кластэр на MongoDB?',
    level: 'senior',
    topic: 'database'
  },
  {
    text: 'Для чаго выкарыстоўваюць MongoDB Aggregation framework?',
    level: 'senior',
    topic: 'database'
  },
  {
    text: 'Раскажыце пра GraphQL.',
    level: 'senior',
    topic: 'database'
  },
  {
    text: 'Якія тыпы дадзеных бываюць у JavaScript? Які будзе рэзультат выкананьнякоду?',
    level: 'middle',
    topic: 'core',
    image: 'https://miro.medium.com/max/700/1*nIT9PmNvX9nhFCQkqbZ_yA.png'
  },
  {
    text: 'Што такое temporal dead zone?',
    level: 'middle',
    topic: 'core'
  },
  {
    text: 'Як працуе boxing/unboxing у JavaScript?',
    level: 'middle',
    topic: 'core'
  },
  {
    text: 'У чым розьніца паміж апэратарам in і мэтадам hasOwnProperty?',
    level: 'middle',
    topic: 'core'
  },
  {
    text: 'Апішыце, з дапамогай чаго ў JS рэалізуюцца такія ААП-парадыгмы, як інкапсуляца, палімархвізма, абстракца?',
    level: 'middle',
    topic: 'core'
  },
  {
    text: 'Што такое прататып? Як працуе прататыпнае спадкаемства ў JS? Патлумачце работу коду.',
    level: 'middle',
    topic: 'core',
    image: 'https://miro.medium.com/max/700/1*j7DlPpnoxcGzLMl-nLkF3g.png',
  },
  {
    text: 'Якая розьніца паміж кампазыцай ды спадкаемствам?',
    level: 'middle',
    topic: 'core'
  },
  {
    text: 'Чаму ня варта выкарыстоўваць канструктары тыпу new String?',
    level: 'middle',
    topic: 'core'
  },
  {
    text: 'Раскажыце пра базавае ўстройства й маханізму работы Event loop.',
    level: 'middle',
    topic: 'core'
  },
  {
    text: 'Што такое запісы (records) і картэжы (tuples). Чым яны адрозьніваюцца ад звычайных аб’ектаў?',
    level: 'middle',
    topic: 'core'
  },
  {
    text: 'Якія адрозьненьні ў паводзінах ES5 хвункцыі-канструктара ды ES2015 клясы?',
    level: 'middle',
    topic: 'core'
  },
  {
    text: 'Як рэалізаваць патэрн “Модуль”?',
    level: 'middle',
    topic: 'core'
  },
  {
    text: 'Чаму typeof null павяртае object?',
    level: 'middle',
    topic: 'core'
  },
  {
    text: 'Што такое прывядзеньне (пераўтварэньне) тыпаў у JS?',
    level: 'middle',
    topic: 'core'
  },
  {
    text: 'Што такое яўнае й няяўнае прывядзеньне (пераўтварэньне) тыпаў дадзеных у JS? Як адбываецца пераўтварэньне тыпаў у такіх прыкладах:',
    level: 'middle',
    topic: 'core',
    image: 'https://miro.medium.com/max/700/1*zHobkFTtoj8nWtsF-uSQ6w.png'
  },
  {
    text: 'Што такое Garbage Collector?',
    level: 'middle',
    topic: 'core'
  },
  {
    text: 'Апішыце асноўныя прынцыпы работы “зборцы сьмецьця” у JS-рухавічках (engines).',
    level: 'middle',
    topic: 'core'
  },
  {
    text: 'Апішыце прызначэньне й прынцыпы работы з калекцамі WeakMap і WeakSet? Чым яны адрозьніваюцца ад калекцаў Map і Set адпаведна?',
    level: 'middle',
    topic: 'core'
  },
  {
    text: 'Чым адрозьніваецца Observable ад Promise?',
    level: 'middle',
    topic: 'core'
  },
  {
    text: 'Што такое Promise? Назавіце парадак выкананьня then і catch у ланцужку.',
    level: 'middle',
    topic: 'core',
    image: 'https://miro.medium.com/max/700/1*A-pP0zLlw0DCRsQIzub-Tw.png'
  },
  {
    text: 'Раскажыце пра пасьлядоўнае й паралельнае выкананьне асінхронных хвункцаў. У чым розьніца паміж Promise.all() і Promise.allSettled()?',
    level: 'middle',
    topic: 'core'
  },
  {
    text: 'Што такое дэскрыптары ўласьцівасцяў аб’ектаў? Раскажыце пра іхняе практычнае дастасаваньне.',
    level: 'middle',
    topic: 'core'
  },
  {
    text: 'Назавіце некалькі спосабаў стварэньня нязменнага аб’екта ў JavaScript.',
    level: 'middle',
    topic: 'core'
  },
  {
    text: 'Як стварыць уласьцівасць у аб’екта, якую ня можна будзе зьмяніць?',
    level: 'middle',
    topic: 'core'
  },
  {
    text: 'Навошта патрэбен канструктар Proxy? Прывядзіце прыклад выкарыстаньня.',
    level: 'middle',
    topic: 'core'
  },
  {
    text: 'Што такое ArrayBuffer? У чым розьніца паміж Unit32Array і Float32Array? Які рэзультат выкананьня коду?',
    level: 'middle',
    topic: 'core',
    image: 'https://miro.medium.com/max/700/1*-_T6yFkiCooUAcNoRt0EFg.png',
  },
  {
    text: 'Якім будзе рэзультат параўнаньня?',
    level: 'middle',
    topic: 'core',
    image: 'https://miro.medium.com/max/700/1*H17vJMpy2cG4SGzA8U2kwA.png',
  },
  {
    text: 'Раскажыце пра генератары ды ітэратары.',
    level: 'middle',
    topic: 'core'
  },
  {
    text: 'Патлумачце, што робіць прыведзены ніжэй код.',
    level: 'middle',
    topic: 'core',
    image: 'https://miro.medium.com/max/700/1*7lVN4_q5TI5sKu0ko9ZRrw.png'
  },
  {
    text: 'Раскажыце пра тып дадзеных Symbol і яго практычнае дастасаваньне. Як перавесьці лік зь 10-разраднай сыстэмы ў 16(2,8)-разрадную сыстэму зьлічэньня?',
    level: 'middle',
    topic: 'core'
  }
]


export const Questions = ({ level, topic, filters }) => {
  let juniorCounter = 0;

  const renderQuestions = (selectedLevel, selectedTopic) => {
    return (
      questions
        .filter(({ level, topic }) => (level === selectedLevel && topic === selectedTopic))
        .map(({ text, image, items }) => {
          juniorCounter += 1;

          return (
            <>
              <p>{juniorCounter}. {text}</p>
              {
                image && (
                  <figure>
                    <div role="button" tabindex="0">
                      <div>
                        <img alt="" src={image} loading="lazy" role="presentation"/>
                      </div>
                    </div>
                  </figure>
                )
              }
              {
                items && (
                  <ul>
                    {
                      items.map((item, index) => {
                        return <li>{item}</li>
                      })
                    }
                  </ul>
                )
              }
            </>
          )
        }
      )
    )
  }

  if (filters[level] && filters[topic]) {
    return (
      <>
        <h2>{topics[topic]}</h2>
        {
          renderQuestions(level, topic)
        }
      </>
    )
  } else {
    return null;
  }
}
