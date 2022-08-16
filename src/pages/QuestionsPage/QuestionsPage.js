import './QuestionsPage.css';

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
  }
]

export const QuestionsPage = () => {
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

  const toggle = (level, topic) => {
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
        <h1>
        <strong>Junior</strong>
        </h1>
        <h2 onClick={toggle('junior', 'general')}>Агульныя</h2>
        {
          renderQuestions('junior', 'general')
        }
        <h2 onClick={toggle('junior', 'core')}>JS Core</h2>
        {
          renderQuestions('junior', 'core')
        }
        <h2 onClick={toggle('junior', 'function')}>Хвункцыі</h2>
        {
          renderQuestions('junior', 'function')
        }
        <h2 onClick={toggle('junior', 'frontend')}>Front-end</h2>
        {
          renderQuestions('junior', 'frontend')
        }
        <h2 onClick={toggle('junior', 'design')}>Вёрстка</h2>
        {
          renderQuestions('junior', 'design')
        }
        <h2 onClick={toggle('junior', 'angular')}>Angular</h2>
        {
          renderQuestions('junior', 'angular')
        }
        <h2 onClick={toggle('junior', 'react')}>React</h2>
        {
          renderQuestions('junior', 'react')
        }
        <h2 onClick={toggle('junior', 'backend')}>Back-end</h2>
        {
          renderQuestions('junior', 'backend')
        }
        <h2 onClick={toggle('junior', 'database')}>Базы дадзеных</h2>
        {
          renderQuestions('junior', 'database')
        }
        <h2 onClick={toggle('junior', 'tools')}>Інструмэнты</h2>
        {
          renderQuestions('junior', 'tools')
        }
        <h2 onClick={toggle('junior', 'practice')}>Практычныя зданьні</h2>
        {
          renderQuestions('junior', 'practice')
        }
        <h1>Middle
        </h1>
        <p>
          <strong>Агульныя:
          </strong>
        </p>
        <p>1. Раскажыце пра піраміду тэставаньня.
        </p>
        <p>2. Якія тыпы аўтаматызаваных тэстаў выпадала нагода пісаць? Якія бібліятэкі пры гэтым выкарыстоўвалі? Якім інструмэнтам аддаеце перавагу й чаму?
        </p>
        <p>3. Што такое unit-тэсты? Якое мейсца ў пірамідзе тэставаньня займаюць unit-тэсты?
        </p>
        <p>4. Што такое code coverage? Ці абавязковае 100% пакрываньне тэстамі коду?
        </p>
        <p>5. Як забараніць браўзэру аддаваць кэш на HTTP-запыт?
        </p>
        <p>6. Што такое XSS (Cross-Site Scripting)?
        </p>
        <p>7. Раскажыце пра патэрны Observer, Pub/Sub. Якая паміж імі розьніца? Прывядзіце прыклады рэалізацы гэтых патэрнаў у вядомых хрэймворках/бібліятэках/браўзэрных API.
        </p>
        <p>8. Зь якою мэтаю можа быць выкарыстаны event listener падзеі fetch self.addEventListener(‘fetch’, event =&gt; {})?
        </p>
        <p>9. Што такое Event loop і як ён працуе? Раскажыце пра мікразадачы ды макразадачы.
        </p>
        <p>
          <strong>JS Core:
          </strong>
        </p>
        <p>10. Якія тыпы дадзеных бываюць у JavaScript? Які будзе рэзультат выкананьня
          <a>коду
          </a>?
        </p>
        <figure>
          <div role="button" tabindex="0">
            <div>
              <img alt="" class="cf tb tc" src="https://miro.medium.com/max/700/1*nIT9PmNvX9nhFCQkqbZ_yA.png" width="700" height="104" loading="lazy" role="presentation"/>
            </div>
          </div>
        </figure>
        <p>11. Што такое temporal dead zone?
        </p>
        <p>12. Як працуе boxing/unboxing у JavaScript?
        </p>
        <p>13. У чым розьніца паміж апэратарам in і мэтадам hasOwnProperty?
        </p>
        <p>14. Апішыце, з дапамогай чаго ў JS рэалізуюцца такія ААП-парадыгмы, як інкапсуляца, палімархвізма, абстракца?
        </p>
        <p>15. Што такое прататып? Як працуе прататыпнае спадкаемства ў JS? Патлумачце работу
          <a>коду
          </a>.
        </p>
        <figure>
          <div role="button" tabindex="0">
            <div>
              <img alt="" class="cf tb tc" src="https://miro.medium.com/max/700/1*j7DlPpnoxcGzLMl-nLkF3g.png" width="700" height="102" loading="lazy" role="presentation"/>
            </div>
          </div>
        </figure>
        <p>16. Якая розьніца паміж кампазыцай ды спадкаемствам?
        </p>
        <p>17. Чаму ня варта выкарыстоўваць канструктары тыпу new String?
        </p>
        <p>18. Раскажыце пра базавае ўстройства й маханізму работы Event loop.
        </p>
        <p>19. Што такое запісы (records) і картэжы (tuples). Чым яны адрозьніваюцца ад звычайных аб’ектаў?
        </p>
        <p>20. Якія адрозьненьні ў паводзінах ES5 хвункцыі-канструктара ды ES2015 клясы?
        </p>
        <p>21. Як рэалізаваць патэрн “Модуль”?
        </p>
        <p>22. Чаму typeof null павяртае object?
        </p>
        <p>23. Што такое прывядзеньне (пераўтварэньне) тыпаў у JS?
        </p>
        <p>24. Што такое яўнае й няяўнае прывядзеньне (пераўтварэньне) тыпаў дадзеных у JS? Як адбываецца пераўтварэньне тыпаў у такіх прыкладах:
        </p>
        <figure>
          <div role="button" tabindex="0">
            <div>
              <img alt="" class="cf tb tc" src="https://miro.medium.com/max/700/1*zHobkFTtoj8nWtsF-uSQ6w.png" width="700" height="51" loading="lazy" role="presentation"/>
            </div>
          </div>
        </figure>
        <p>25. Што такое Garbage Collector?
        </p>
        <p>26. Апішыце асноўныя прынцыпы работы “зборцы сьмецьця” у JS-рухавічках (engines).
        </p>
        <p>27. Апішыце прызначэньне й прынцыпы работы з калекцамі WeakMap і WeakSet? Чым яны адрозьніваюцца ад калекцаў Map і Set адпаведна?
        </p>
        <p>28. Чым адрозьніваецца Observable ад Promise?
        </p>
        <p>29. Што такое Promise? Назавіце парадак выкананьня then і catch у
          <a>ланцужку
          </a>.
        </p>
        <figure>
          <div role="button" tabindex="0">
            <div>
              <img alt="" class="cf tb tc" src="https://miro.medium.com/max/700/1*A-pP0zLlw0DCRsQIzub-Tw.png" width="700" height="274" loading="lazy" role="presentation"/>
            </div>
          </div>
        </figure>
        <p>30. Раскажыце пра пасьлядоўнае й паралельнае выкананьне асінхронных хвункцаў. У чым розьніца паміж Promise.all() і Promise.allSettled()?
        </p>
        <p>31. Што такое дэскрыптары ўласьцівасцяў аб’ектаў? Раскажыце пра іхняе практычнае дастасаваньне.
        </p>
        <p>32. Назавіце некалькі спосабаў стварэньня нязменнага аб’екта ў JavaScript.
        </p>
        <p>33. Як стварыць уласьцівасць у аб’екта, якую ня можна будзе зьмяніць?
        </p>
        <p>34. Навошта патрэбен канструктар Proxy? Прывядзіце прыклад выкарыстаньня.
        </p>
        <p>35. Што такое ArrayBuffer? У чым розьніца паміж Unit32Array і Float32Array? Які рэзультат выкананьня коду?
        </p>
        <figure>
          <div role="button" tabindex="0">
            <div>
              <img alt="" class="cf tb tc" src="https://miro.medium.com/max/700/1*-_T6yFkiCooUAcNoRt0EFg.png" width="700" height="36" loading="lazy" role="presentation"/>
            </div>
          </div>
        </figure>
        <p>36. Якім будзе рэзультат параўнаньня?
        </p>
        <figure>
          <div role="button" tabindex="0">
            <div>
              <img alt="" class="cf tb tc" src="https://miro.medium.com/max/700/1*H17vJMpy2cG4SGzA8U2kwA.png" width="700" height="32" loading="lazy" role="presentation"/>
            </div>
          </div>
        </figure>
        <p>37. Раскажыце пра генератары ды ітэратары.
        </p>
        <p>38. Патлумачце, што робіць прыведзены ніжэй код.
        </p>
        <figure>
          <div role="button" tabindex="0">
            <div>
              <img alt="" class="cf tb tc" src="https://miro.medium.com/max/700/1*7lVN4_q5TI5sKu0ko9ZRrw.png" width="700" height="120" loading="lazy" role="presentation"/>
            </div>
          </div>
        </figure>
        <p>39. Раскажыце пра тып дадзеных Symbol і яго практычнае дастасаваньне. Як перавесьці лік зь 10-разраднай сыстэмы ў 16(2,8)-разрадную сыстэму зьлічэньня?
        </p>
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
        <p>
          <strong>Базы дадзеных:
          </strong>
        </p>
        <p>130. Што такое Redis і для чаго яго выкарыстоўваюць?
        </p>
        <p>131. Якія базы дадзеных выкарыстоўвалі? Якая розьніца паміж SQL і NoSQL?
        </p>
        <p>132. Для дзьвюх табліцаў — камэнтары ды карыстальнікі — напішыце запыт, які абірае апошнія тры камэнтары для кожнага карыстальніка.
        </p>
        <p>133. Я як заказчык прашу абраць вашэцю базу дадзеных для новага праекту. Вашэцевы дзеяньні?
        </p>
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
        <p>30. Якія альтэрнатыўныя віды базаў дадзеных выкарыстоўваеце?
        </p>
        <p>31. Што такое RDS і чаму ён часам не падыходзіць?
        </p>
        <p>32. Што такое SQL Injections і як іх пазьбегнуць?
        </p>
        <p>33. Чаму для запытаў у БД трэба выкарыстоўваць плэйсхолдэры?
        </p>
        <p>34. Як спраектаваць кластэр на MongoDB?
        </p>
        <p>35. Для чаго выкарыстоўваюць MongoDB Aggregation framework?
        </p>
        <p>36. Раскажыце пра GraphQL.
        </p>
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
