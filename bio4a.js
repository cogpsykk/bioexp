/**************** 
 * Bio4Rta *
 ****************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2025.2.3.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'bio4rta';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'Пол': ["\u0416", "\u041c", "\u041d\u0435 \u0445\u043e\u0447\u0443 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c"],
    'Полный возраст': '',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color((0.0000, 0.0000, 0.0000)),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instrRoutineBegin());
flowScheduler.add(instrRoutineEachFrame());
flowScheduler.add(instrRoutineEnd());
flowScheduler.add(instr2RoutineBegin());
flowScheduler.add(instr2RoutineEachFrame());
flowScheduler.add(instr2RoutineEnd());
flowScheduler.add(instr3RoutineBegin());
flowScheduler.add(instr3RoutineEachFrame());
flowScheduler.add(instr3RoutineEnd());
flowScheduler.add(Prob_instrRoutineBegin());
flowScheduler.add(Prob_instrRoutineEachFrame());
flowScheduler.add(Prob_instrRoutineEnd());
const test_trailLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(test_trailLoopBegin(test_trailLoopScheduler));
flowScheduler.add(test_trailLoopScheduler);
flowScheduler.add(test_trailLoopEnd);



flowScheduler.add(test_overRoutineBegin());
flowScheduler.add(test_overRoutineEachFrame());
flowScheduler.add(test_overRoutineEnd());
flowScheduler.add(Problem1RoutineBegin());
flowScheduler.add(Problem1RoutineEachFrame());
flowScheduler.add(Problem1RoutineEnd());
const bird_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(bird_trialsLoopBegin(bird_trialsLoopScheduler));
flowScheduler.add(bird_trialsLoopScheduler);
flowScheduler.add(bird_trialsLoopEnd);



flowScheduler.add(block_overRoutineBegin());
flowScheduler.add(block_overRoutineEachFrame());
flowScheduler.add(block_overRoutineEnd());
flowScheduler.add(Problem2RoutineBegin());
flowScheduler.add(Problem2RoutineEachFrame());
flowScheduler.add(Problem2RoutineEnd());
const bear_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(bear_trialsLoopBegin(bear_trialsLoopScheduler));
flowScheduler.add(bear_trialsLoopScheduler);
flowScheduler.add(bear_trialsLoopEnd);



flowScheduler.add(exitRoutineBegin());
flowScheduler.add(exitRoutineEachFrame());
flowScheduler.add(exitRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'Test2.xlsx', 'path': 'Test2.xlsx'},
    {'name': '3exp_st_bird.xlsx', 'path': '3exp_st_bird.xlsx'},
    {'name': '3exp_st_bear.xlsx', 'path': '3exp_st_bear.xlsx'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2025.2.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var instrClock;
var instr_text;
var key_resp;
var instr2Clock;
var instr_text3;
var key_resp_3;
var instr3Clock;
var instr_text4;
var key_resp_4;
var Prob_instrClock;
var instr_text5;
var key_resp_5;
var testClock;
var polygon;
var text;
var text_2;
var key_resp_6;
var test2Clock;
var text_4;
var text_5;
var key_resp_7;
var test_overClock;
var text_9;
var key_resp_10;
var Problem1Clock;
var text_problem;
var key_resp_problem;
var expClock;
var polygon_5;
var text_12;
var text_13;
var probel;
var exp1Clock;
var text_15;
var text_16;
var resp_first;
var block_overClock;
var text_21;
var key_resp_12;
var Problem2Clock;
var text_22;
var key_resp_13;
var exp3Clock;
var polygon_9;
var text_24;
var text_25;
var key_resp_14;
var exp4Clock;
var text_27;
var text_28;
var resp_first1;
var exitClock;
var text_3;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instr"
  instrClock = new util.Clock();
  instr_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_text',
    text: 'Спасибо, что принимаете участие в эксперименте!\n\nМы изучаем как происходит оценка истинности утверждений.\nПо ходу эксперимента Вам предстоит решить, является ли утверждение верным или нет.\nПеред началом эксперимента, ознакомимся с инструкцией :)\n\nПРОБЕЛ, чтобы продолжить',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instr2"
  instr2Clock = new util.Clock();
  instr_text3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_text3',
    text: 'Сначала пройдем тестовую серию, чтобы ознакомиться с процедурой. Перед началом основной серии, инструкции будут повторены.\n\n\nПРОБЕЛ, чтобы продолжить',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instr3"
  instr3Clock = new util.Clock();
  instr_text4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_text4',
    text: 'Внимание! \nСначала вы увидите утверждение с пропущенным последним словом.\nПример:\n«Буря мглою небо *****»\nПосле нажатия ПРОБЕЛ появится недостающее слово - «кроет».\n\nПосле у останется 5 секунд, чтобы решить, является ли утверждение верным (L на клавиатуре) или неверным (S на клавиатуре)\n\nПРОБЕЛ, чтобы продолжить',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Prob_instr"
  Prob_instrClock = new util.Clock();
  instr_text5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_text5',
    text: 'Утверждения будут касаться описания проблемной ситуации:\n\nСуществуют два одинаковых книжных магазина. В одном из них разместили популярную рекламную вывеску. Известно, что магазины с хорошей рекламой привлекают больше покупателей\n\n\nНажмите ПРОБЕЛ, чтобы продолжить',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "test"
  testClock = new util.Clock();
  polygon = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon', 
    vertices: 'cross', size:[0.5, 0.5],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  key_resp_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "test2"
  test2Clock = new util.Clock();
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "test_over"
  test_overClock = new util.Clock();
  text_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_9',
    text: 'Тестовая серия завершена!\n\nДалее Вам будет предъявляться утверждения основной серии.\nОбратите внимание, что утверждения будут касаться проблемной ситуации, с которой нужно ознакомиться далее.\nВаша задача: отвечать ДА (кнопка L), если утверждение верно и НЕТ (кнопка S), если утверждение неверно\n\nНажмите ПРОБЕЛ, чтобы продолжить',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_10 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Problem1"
  Problem1Clock = new util.Clock();
  text_problem = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_problem',
    text: 'Внимательно ознакомьтесь с описанием проблемы:\n\nСуществует популяция птиц, которую переместили из сухой местности в болотистую. Известно, что птицы с длинными лапками успешнее добывают пищу для выкармливания потомства в болотистой местности\n\n\nНажмите ПРОБЕЛ, чтобы продолжить',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_problem = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "exp"
  expClock = new util.Clock();
  polygon_5 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon_5', 
    vertices: 'cross', size:[0.5, 0.5],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  text_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_12',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_13',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  probel = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "exp1"
  exp1Clock = new util.Clock();
  text_15 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_15',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_16 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_16',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  resp_first = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "block_over"
  block_overClock = new util.Clock();
  text_21 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_21',
    text: 'Отлично, Вы завершили первый блок. Далее перейдем к следующей проблемной ситуации\n\nНажимте ПРОБЕЛ, чтобы продолжить',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_12 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Problem2"
  Problem2Clock = new util.Clock();
  text_22 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_22',
    text: 'Внимательно ознакомьтесь с описанием проблемы:\n\nВ месте обитания популяции калифорнийских медведей гризли резко повысилась среднегодовая температура. Известно, что медведи с более короткой шерстью успешнее переносят жару. \n\nНажмите ПРОБЕЛ, чтобы продолжить',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_13 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "exp3"
  exp3Clock = new util.Clock();
  polygon_9 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon_9', 
    vertices: 'cross', size:[0.5, 0.5],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  text_24 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_24',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_25 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_25',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  key_resp_14 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "exp4"
  exp4Clock = new util.Clock();
  text_27 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_27',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_28 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_28',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], draggable: false, height: 0.06,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  resp_first1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "exit"
  exitClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'Подождите, идет запись данных эксперимента..',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var instrMaxDurationReached;
var _key_resp_allKeys;
var instrMaxDuration;
var instrComponents;
function instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instrClock.reset();
    routineTimer.reset();
    instrMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    psychoJS.experiment.addData('instr.started', globalClock.getTime());
    instrMaxDuration = null
    // keep track of which components have finished
    instrComponents = [];
    instrComponents.push(instr_text);
    instrComponents.push(key_resp);
    
    for (const thisComponent of instrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr' ---
    // get current time
    t = instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr_text* updates
    if (t >= 0.0 && instr_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_text.tStart = t;  // (not accounting for frame time here)
      instr_text.frameNStart = frameN;  // exact frame index
      
      instr_text.setAutoDraw(true);
    }
    
    
    // if instr_text is active this frame...
    if (instr_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    // if key_resp is active this frame...
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instrComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr' ---
    for (const thisComponent of instrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instr.stopped', globalClock.getTime());
    key_resp.stop();
    // the Routine "instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instr2MaxDurationReached;
var _key_resp_3_allKeys;
var instr2MaxDuration;
var instr2Components;
function instr2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instr2Clock.reset();
    routineTimer.reset();
    instr2MaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    psychoJS.experiment.addData('instr2.started', globalClock.getTime());
    instr2MaxDuration = null
    // keep track of which components have finished
    instr2Components = [];
    instr2Components.push(instr_text3);
    instr2Components.push(key_resp_3);
    
    for (const thisComponent of instr2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instr2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr2' ---
    // get current time
    t = instr2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr_text3* updates
    if (t >= 0.0 && instr_text3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_text3.tStart = t;  // (not accounting for frame time here)
      instr_text3.frameNStart = frameN;  // exact frame index
      
      instr_text3.setAutoDraw(true);
    }
    
    
    // if instr_text3 is active this frame...
    if (instr_text3.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }
    
    // if key_resp_3 is active this frame...
    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        key_resp_3.duration = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instr2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr2' ---
    for (const thisComponent of instr2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instr2.stopped', globalClock.getTime());
    key_resp_3.stop();
    // the Routine "instr2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instr3MaxDurationReached;
var _key_resp_4_allKeys;
var instr3MaxDuration;
var instr3Components;
function instr3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr3' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instr3Clock.reset();
    routineTimer.reset();
    instr3MaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    psychoJS.experiment.addData('instr3.started', globalClock.getTime());
    instr3MaxDuration = null
    // keep track of which components have finished
    instr3Components = [];
    instr3Components.push(instr_text4);
    instr3Components.push(key_resp_4);
    
    for (const thisComponent of instr3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instr3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr3' ---
    // get current time
    t = instr3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr_text4* updates
    if (t >= 0.0 && instr_text4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_text4.tStart = t;  // (not accounting for frame time here)
      instr_text4.frameNStart = frameN;  // exact frame index
      
      instr_text4.setAutoDraw(true);
    }
    
    
    // if instr_text4 is active this frame...
    if (instr_text4.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_4* updates
    if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }
    
    // if key_resp_4 is active this frame...
    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        key_resp_4.duration = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instr3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr3' ---
    for (const thisComponent of instr3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instr3.stopped', globalClock.getTime());
    key_resp_4.stop();
    // the Routine "instr3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Prob_instrMaxDurationReached;
var _key_resp_5_allKeys;
var Prob_instrMaxDuration;
var Prob_instrComponents;
function Prob_instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Prob_instr' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    Prob_instrClock.reset();
    routineTimer.reset();
    Prob_instrMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    psychoJS.experiment.addData('Prob_instr.started', globalClock.getTime());
    Prob_instrMaxDuration = null
    // keep track of which components have finished
    Prob_instrComponents = [];
    Prob_instrComponents.push(instr_text5);
    Prob_instrComponents.push(key_resp_5);
    
    for (const thisComponent of Prob_instrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Prob_instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Prob_instr' ---
    // get current time
    t = Prob_instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr_text5* updates
    if (t >= 0.0 && instr_text5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_text5.tStart = t;  // (not accounting for frame time here)
      instr_text5.frameNStart = frameN;  // exact frame index
      
      instr_text5.setAutoDraw(true);
    }
    
    
    // if instr_text5 is active this frame...
    if (instr_text5.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_5* updates
    if (t >= 0.0 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }
    
    // if key_resp_5 is active this frame...
    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
        key_resp_5.duration = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Prob_instrComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Prob_instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Prob_instr' ---
    for (const thisComponent of Prob_instrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Prob_instr.stopped', globalClock.getTime());
    key_resp_5.stop();
    // the Routine "Prob_instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var test_trail;
function test_trailLoopBegin(test_trailLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    test_trail = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Test2.xlsx',
      seed: undefined, name: 'test_trail'
    });
    psychoJS.experiment.addLoop(test_trail); // add the loop to the experiment
    currentLoop = test_trail;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTest_trail of test_trail) {
      snapshot = test_trail.getSnapshot();
      test_trailLoopScheduler.add(importConditions(snapshot));
      test_trailLoopScheduler.add(testRoutineBegin(snapshot));
      test_trailLoopScheduler.add(testRoutineEachFrame());
      test_trailLoopScheduler.add(testRoutineEnd(snapshot));
      test_trailLoopScheduler.add(test2RoutineBegin(snapshot));
      test_trailLoopScheduler.add(test2RoutineEachFrame());
      test_trailLoopScheduler.add(test2RoutineEnd(snapshot));
      test_trailLoopScheduler.add(test_trailLoopEndIteration(test_trailLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function test_trailLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(test_trail);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function test_trailLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var bird_trials;
function bird_trialsLoopBegin(bird_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    bird_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: '3exp_st_bird.xlsx',
      seed: undefined, name: 'bird_trials'
    });
    psychoJS.experiment.addLoop(bird_trials); // add the loop to the experiment
    currentLoop = bird_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisBird_trial of bird_trials) {
      snapshot = bird_trials.getSnapshot();
      bird_trialsLoopScheduler.add(importConditions(snapshot));
      bird_trialsLoopScheduler.add(expRoutineBegin(snapshot));
      bird_trialsLoopScheduler.add(expRoutineEachFrame());
      bird_trialsLoopScheduler.add(expRoutineEnd(snapshot));
      bird_trialsLoopScheduler.add(exp1RoutineBegin(snapshot));
      bird_trialsLoopScheduler.add(exp1RoutineEachFrame());
      bird_trialsLoopScheduler.add(exp1RoutineEnd(snapshot));
      bird_trialsLoopScheduler.add(bird_trialsLoopEndIteration(bird_trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function bird_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(bird_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function bird_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var bear_trials;
function bear_trialsLoopBegin(bear_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    bear_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: '3exp_st_bear.xlsx',
      seed: undefined, name: 'bear_trials'
    });
    psychoJS.experiment.addLoop(bear_trials); // add the loop to the experiment
    currentLoop = bear_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisBear_trial of bear_trials) {
      snapshot = bear_trials.getSnapshot();
      bear_trialsLoopScheduler.add(importConditions(snapshot));
      bear_trialsLoopScheduler.add(exp3RoutineBegin(snapshot));
      bear_trialsLoopScheduler.add(exp3RoutineEachFrame());
      bear_trialsLoopScheduler.add(exp3RoutineEnd(snapshot));
      bear_trialsLoopScheduler.add(exp4RoutineBegin(snapshot));
      bear_trialsLoopScheduler.add(exp4RoutineEachFrame());
      bear_trialsLoopScheduler.add(exp4RoutineEnd(snapshot));
      bear_trialsLoopScheduler.add(bear_trialsLoopEndIteration(bear_trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function bear_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(bear_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function bear_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var testMaxDurationReached;
var _key_resp_6_allKeys;
var testMaxDuration;
var testComponents;
function testRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'test' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    testClock.reset(routineTimer.getTime());
    routineTimer.add(15.200000);
    testMaxDurationReached = false;
    // update component parameters for each repeat
    text.setText(StatementA);
    text_2.setText('Нажмите ПРОБЕЛ, чтобы появилось последнее слово');
    key_resp_6.keys = undefined;
    key_resp_6.rt = undefined;
    _key_resp_6_allKeys = [];
    psychoJS.experiment.addData('test.started', globalClock.getTime());
    testMaxDuration = null
    // keep track of which components have finished
    testComponents = [];
    testComponents.push(polygon);
    testComponents.push(text);
    testComponents.push(text_2);
    testComponents.push(key_resp_6);
    
    for (const thisComponent of testComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function testRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'test' ---
    // get current time
    t = testClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon* updates
    if (t >= 0.0 && polygon.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon.tStart = t;  // (not accounting for frame time here)
      polygon.frameNStart = frameN;  // exact frame index
      
      polygon.setAutoDraw(true);
    }
    
    
    // if polygon is active this frame...
    if (polygon.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (polygon.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      polygon.tStop = t;  // not accounting for scr refresh
      polygon.frameNStop = frameN;  // exact frame index
      // update status
      polygon.status = PsychoJS.Status.FINISHED;
      polygon.setAutoDraw(false);
    }
    
    
    // *text* updates
    if (t >= 0.2 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // if text is active this frame...
    if (text.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.2 + 15 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      text.tStop = t;  // not accounting for scr refresh
      text.frameNStop = frameN;  // exact frame index
      // update status
      text.status = PsychoJS.Status.FINISHED;
      text.setAutoDraw(false);
    }
    
    
    // *text_2* updates
    if (t >= 0.2 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    
    // if text_2 is active this frame...
    if (text_2.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.2 + 15 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      text_2.tStop = t;  // not accounting for scr refresh
      text_2.frameNStop = frameN;  // exact frame index
      // update status
      text_2.status = PsychoJS.Status.FINISHED;
      text_2.setAutoDraw(false);
    }
    
    
    // *key_resp_6* updates
    if (t >= 0.2 && key_resp_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_6.tStart = t;  // (not accounting for frame time here)
      key_resp_6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.clearEvents(); });
    }
    frameRemains = 0.2 + 15 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      key_resp_6.tStop = t;  // not accounting for scr refresh
      key_resp_6.frameNStop = frameN;  // exact frame index
      // update status
      key_resp_6.status = PsychoJS.Status.FINISHED;
      frameRemains = 0.2 + 15 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (key_resp_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        key_resp_6.tStop = t;  // not accounting for scr refresh
        key_resp_6.frameNStop = frameN;  // exact frame index
        // update status
        key_resp_6.status = PsychoJS.Status.FINISHED;
        key_resp_6.status = PsychoJS.Status.FINISHED;
          }
        
      }
      
      // if key_resp_6 is active this frame...
      if (key_resp_6.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_resp_6.getKeys({
          keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
          waitRelease: false
        });
        _key_resp_6_allKeys = _key_resp_6_allKeys.concat(theseKeys);
        if (_key_resp_6_allKeys.length > 0) {
          key_resp_6.keys = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].name;  // just the last key pressed
          key_resp_6.rt = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].rt;
          key_resp_6.duration = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of testComponents)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine && routineTimer.getTime() > 0) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function testRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'test' ---
      for (const thisComponent of testComponents) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('test.stopped', globalClock.getTime());
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(key_resp_6.corr, level);
      }
      psychoJS.experiment.addData('key_resp_6.keys', key_resp_6.keys);
      if (typeof key_resp_6.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('key_resp_6.rt', key_resp_6.rt);
          psychoJS.experiment.addData('key_resp_6.duration', key_resp_6.duration);
          routineTimer.reset();
          }
      
      key_resp_6.stop();
      if (routineForceEnded) {
          routineTimer.reset();} else if (testMaxDurationReached) {
          testClock.add(testMaxDuration);
      } else {
          testClock.add(15.200000);
      }
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var test2MaxDurationReached;
var _key_resp_7_allKeys;
var test2MaxDuration;
var test2Components;
function test2RoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'test2' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      test2Clock.reset(routineTimer.getTime());
      routineTimer.add(6.000000);
      test2MaxDurationReached = false;
      // update component parameters for each repeat
      text_4.setText(StatementB);
      text_5.setText('Неверно (S) / Верно (L)');
      key_resp_7.keys = undefined;
      key_resp_7.rt = undefined;
      _key_resp_7_allKeys = [];
      psychoJS.experiment.addData('test2.started', globalClock.getTime());
      test2MaxDuration = null
      // keep track of which components have finished
      test2Components = [];
      test2Components.push(text_4);
      test2Components.push(text_5);
      test2Components.push(key_resp_7);
      
      for (const thisComponent of test2Components)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function test2RoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'test2' ---
      // get current time
      t = test2Clock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *text_4* updates
      if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_4.tStart = t;  // (not accounting for frame time here)
        text_4.frameNStart = frameN;  // exact frame index
        
        text_4.setAutoDraw(true);
      }
      
      
      // if text_4 is active this frame...
      if (text_4.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + 6 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (text_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        text_4.tStop = t;  // not accounting for scr refresh
        text_4.frameNStop = frameN;  // exact frame index
        // update status
        text_4.status = PsychoJS.Status.FINISHED;
        text_4.setAutoDraw(false);
      }
      
      
      // *text_5* updates
      if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_5.tStart = t;  // (not accounting for frame time here)
        text_5.frameNStart = frameN;  // exact frame index
        
        text_5.setAutoDraw(true);
      }
      
      
      // if text_5 is active this frame...
      if (text_5.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + 6 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (text_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        text_5.tStop = t;  // not accounting for scr refresh
        text_5.frameNStop = frameN;  // exact frame index
        // update status
        text_5.status = PsychoJS.Status.FINISHED;
        text_5.setAutoDraw(false);
      }
      
      
      // *key_resp_7* updates
      if (t >= 0.0 && key_resp_7.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        key_resp_7.tStart = t;  // (not accounting for frame time here)
        key_resp_7.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { key_resp_7.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { key_resp_7.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { key_resp_7.clearEvents(); });
      }
      frameRemains = 0.0 + 6 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (key_resp_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        key_resp_7.tStop = t;  // not accounting for scr refresh
        key_resp_7.frameNStop = frameN;  // exact frame index
        // update status
        key_resp_7.status = PsychoJS.Status.FINISHED;
        frameRemains = 0.0 + 6 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (key_resp_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          key_resp_7.tStop = t;  // not accounting for scr refresh
          key_resp_7.frameNStop = frameN;  // exact frame index
          // update status
          key_resp_7.status = PsychoJS.Status.FINISHED;
          key_resp_7.status = PsychoJS.Status.FINISHED;
            }
          
        }
        
        // if key_resp_7 is active this frame...
        if (key_resp_7.status === PsychoJS.Status.STARTED) {
          let theseKeys = key_resp_7.getKeys({
            keyList: typeof ['s','l'] === 'string' ? [['s','l']] : ['s','l'], 
            waitRelease: false
          });
          _key_resp_7_allKeys = _key_resp_7_allKeys.concat(theseKeys);
          if (_key_resp_7_allKeys.length > 0) {
            key_resp_7.keys = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].name;  // just the last key pressed
            key_resp_7.rt = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].rt;
            key_resp_7.duration = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].duration;
            // was this correct?
            if (key_resp_7.keys == corrans) {
                key_resp_7.corr = 1;
            } else {
                key_resp_7.corr = 0;
            }
            // a response ends the routine
            continueRoutine = false;
          }
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of test2Components)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine && routineTimer.getTime() > 0) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function test2RoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'test2' ---
        for (const thisComponent of test2Components) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('test2.stopped', globalClock.getTime());
        // was no response the correct answer?!
        if (key_resp_7.keys === undefined) {
          if (['None','none',undefined].includes(corrans)) {
             key_resp_7.corr = 1;  // correct non-response
          } else {
             key_resp_7.corr = 0;  // failed to respond (incorrectly)
          }
        }
        // store data for current loop
        // update the trial handler
        if (currentLoop instanceof MultiStairHandler) {
          currentLoop.addResponse(key_resp_7.corr, level);
        }
        psychoJS.experiment.addData('key_resp_7.keys', key_resp_7.keys);
        psychoJS.experiment.addData('key_resp_7.corr', key_resp_7.corr);
        if (typeof key_resp_7.keys !== 'undefined') {  // we had a response
            psychoJS.experiment.addData('key_resp_7.rt', key_resp_7.rt);
            psychoJS.experiment.addData('key_resp_7.duration', key_resp_7.duration);
            routineTimer.reset();
            }
        
        key_resp_7.stop();
        if (routineForceEnded) {
            routineTimer.reset();} else if (test2MaxDurationReached) {
            test2Clock.add(test2MaxDuration);
        } else {
            test2Clock.add(6.000000);
        }
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var test_overMaxDurationReached;
var _key_resp_10_allKeys;
var test_overMaxDuration;
var test_overComponents;
function test_overRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'test_over' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        test_overClock.reset();
        routineTimer.reset();
        test_overMaxDurationReached = false;
        // update component parameters for each repeat
        key_resp_10.keys = undefined;
        key_resp_10.rt = undefined;
        _key_resp_10_allKeys = [];
        psychoJS.experiment.addData('test_over.started', globalClock.getTime());
        test_overMaxDuration = null
        // keep track of which components have finished
        test_overComponents = [];
        test_overComponents.push(text_9);
        test_overComponents.push(key_resp_10);
        
        for (const thisComponent of test_overComponents)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function test_overRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'test_over' ---
        // get current time
        t = test_overClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *text_9* updates
        if (t >= 0.0 && text_9.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_9.tStart = t;  // (not accounting for frame time here)
          text_9.frameNStart = frameN;  // exact frame index
          
          text_9.setAutoDraw(true);
        }
        
        
        // if text_9 is active this frame...
        if (text_9.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *key_resp_10* updates
        if (t >= 0.0 && key_resp_10.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          key_resp_10.tStart = t;  // (not accounting for frame time here)
          key_resp_10.frameNStart = frameN;  // exact frame index
          
          // keyboard checking is just starting
          psychoJS.window.callOnFlip(function() { key_resp_10.clock.reset(); });  // t=0 on next screen flip
          psychoJS.window.callOnFlip(function() { key_resp_10.start(); }); // start on screen flip
          psychoJS.window.callOnFlip(function() { key_resp_10.clearEvents(); });
        }
        
        // if key_resp_10 is active this frame...
        if (key_resp_10.status === PsychoJS.Status.STARTED) {
          let theseKeys = key_resp_10.getKeys({
            keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
            waitRelease: false
          });
          _key_resp_10_allKeys = _key_resp_10_allKeys.concat(theseKeys);
          if (_key_resp_10_allKeys.length > 0) {
            key_resp_10.keys = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].name;  // just the last key pressed
            key_resp_10.rt = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].rt;
            key_resp_10.duration = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].duration;
            // a response ends the routine
            continueRoutine = false;
          }
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of test_overComponents)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function test_overRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'test_over' ---
        for (const thisComponent of test_overComponents) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('test_over.stopped', globalClock.getTime());
        key_resp_10.stop();
        // the Routine "test_over" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var Problem1MaxDurationReached;
var _key_resp_problem_allKeys;
var Problem1MaxDuration;
var Problem1Components;
function Problem1RoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'Problem1' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        Problem1Clock.reset();
        routineTimer.reset();
        Problem1MaxDurationReached = false;
        // update component parameters for each repeat
        key_resp_problem.keys = undefined;
        key_resp_problem.rt = undefined;
        _key_resp_problem_allKeys = [];
        psychoJS.experiment.addData('Problem1.started', globalClock.getTime());
        Problem1MaxDuration = null
        // keep track of which components have finished
        Problem1Components = [];
        Problem1Components.push(text_problem);
        Problem1Components.push(key_resp_problem);
        
        for (const thisComponent of Problem1Components)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function Problem1RoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'Problem1' ---
        // get current time
        t = Problem1Clock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *text_problem* updates
        if (t >= 0.0 && text_problem.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_problem.tStart = t;  // (not accounting for frame time here)
          text_problem.frameNStart = frameN;  // exact frame index
          
          text_problem.setAutoDraw(true);
        }
        
        
        // if text_problem is active this frame...
        if (text_problem.status === PsychoJS.Status.STARTED) {
        }
        
        
        // *key_resp_problem* updates
        if (t >= 0.0 && key_resp_problem.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          key_resp_problem.tStart = t;  // (not accounting for frame time here)
          key_resp_problem.frameNStart = frameN;  // exact frame index
          
          // keyboard checking is just starting
          psychoJS.window.callOnFlip(function() { key_resp_problem.clock.reset(); });  // t=0 on next screen flip
          psychoJS.window.callOnFlip(function() { key_resp_problem.start(); }); // start on screen flip
          psychoJS.window.callOnFlip(function() { key_resp_problem.clearEvents(); });
        }
        
        // if key_resp_problem is active this frame...
        if (key_resp_problem.status === PsychoJS.Status.STARTED) {
          let theseKeys = key_resp_problem.getKeys({
            keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
            waitRelease: false
          });
          _key_resp_problem_allKeys = _key_resp_problem_allKeys.concat(theseKeys);
          if (_key_resp_problem_allKeys.length > 0) {
            key_resp_problem.keys = _key_resp_problem_allKeys[_key_resp_problem_allKeys.length - 1].name;  // just the last key pressed
            key_resp_problem.rt = _key_resp_problem_allKeys[_key_resp_problem_allKeys.length - 1].rt;
            key_resp_problem.duration = _key_resp_problem_allKeys[_key_resp_problem_allKeys.length - 1].duration;
            // a response ends the routine
            continueRoutine = false;
          }
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of Problem1Components)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function Problem1RoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'Problem1' ---
        for (const thisComponent of Problem1Components) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('Problem1.stopped', globalClock.getTime());
        // update the trial handler
        if (currentLoop instanceof MultiStairHandler) {
          currentLoop.addResponse(key_resp_problem.corr, level);
        }
        psychoJS.experiment.addData('key_resp_problem.keys', key_resp_problem.keys);
        if (typeof key_resp_problem.keys !== 'undefined') {  // we had a response
            psychoJS.experiment.addData('key_resp_problem.rt', key_resp_problem.rt);
            psychoJS.experiment.addData('key_resp_problem.duration', key_resp_problem.duration);
            routineTimer.reset();
            }
        
        key_resp_problem.stop();
        // the Routine "Problem1" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var expMaxDurationReached;
var _probel_allKeys;
var expMaxDuration;
var expComponents;
function expRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'exp' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        expClock.reset(routineTimer.getTime());
        routineTimer.add(15.200000);
        expMaxDurationReached = false;
        // update component parameters for each repeat
        text_12.setText(StatementA);
        text_13.setText('Нажмите ПРОБЕЛ, чтобы появилось последнее слово');
        probel.keys = undefined;
        probel.rt = undefined;
        _probel_allKeys = [];
        psychoJS.experiment.addData('exp.started', globalClock.getTime());
        expMaxDuration = null
        // keep track of which components have finished
        expComponents = [];
        expComponents.push(polygon_5);
        expComponents.push(text_12);
        expComponents.push(text_13);
        expComponents.push(probel);
        
        for (const thisComponent of expComponents)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function expRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'exp' ---
        // get current time
        t = expClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *polygon_5* updates
        if (t >= 0.0 && polygon_5.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          polygon_5.tStart = t;  // (not accounting for frame time here)
          polygon_5.frameNStart = frameN;  // exact frame index
          
          polygon_5.setAutoDraw(true);
        }
        
        
        // if polygon_5 is active this frame...
        if (polygon_5.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = 0.0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (polygon_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          polygon_5.tStop = t;  // not accounting for scr refresh
          polygon_5.frameNStop = frameN;  // exact frame index
          // update status
          polygon_5.status = PsychoJS.Status.FINISHED;
          polygon_5.setAutoDraw(false);
        }
        
        
        // *text_12* updates
        if (t >= 0.2 && text_12.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_12.tStart = t;  // (not accounting for frame time here)
          text_12.frameNStart = frameN;  // exact frame index
          
          text_12.setAutoDraw(true);
        }
        
        
        // if text_12 is active this frame...
        if (text_12.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = 0.2 + 15 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (text_12.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          text_12.tStop = t;  // not accounting for scr refresh
          text_12.frameNStop = frameN;  // exact frame index
          // update status
          text_12.status = PsychoJS.Status.FINISHED;
          text_12.setAutoDraw(false);
        }
        
        
        // *text_13* updates
        if (t >= 0.2 && text_13.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          text_13.tStart = t;  // (not accounting for frame time here)
          text_13.frameNStart = frameN;  // exact frame index
          
          text_13.setAutoDraw(true);
        }
        
        
        // if text_13 is active this frame...
        if (text_13.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = 0.2 + 15 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (text_13.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          text_13.tStop = t;  // not accounting for scr refresh
          text_13.frameNStop = frameN;  // exact frame index
          // update status
          text_13.status = PsychoJS.Status.FINISHED;
          text_13.setAutoDraw(false);
        }
        
        
        // *probel* updates
        if (t >= 0.2 && probel.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          probel.tStart = t;  // (not accounting for frame time here)
          probel.frameNStart = frameN;  // exact frame index
          
          // keyboard checking is just starting
          psychoJS.window.callOnFlip(function() { probel.clock.reset(); });  // t=0 on next screen flip
          psychoJS.window.callOnFlip(function() { probel.start(); }); // start on screen flip
          psychoJS.window.callOnFlip(function() { probel.clearEvents(); });
        }
        frameRemains = 0.2 + 15 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (probel.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          probel.tStop = t;  // not accounting for scr refresh
          probel.frameNStop = frameN;  // exact frame index
          // update status
          probel.status = PsychoJS.Status.FINISHED;
          frameRemains = 0.2 + 15 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
          if (probel.status === PsychoJS.Status.STARTED && t >= frameRemains) {
            // keep track of stop time/frame for later
            probel.tStop = t;  // not accounting for scr refresh
            probel.frameNStop = frameN;  // exact frame index
            // update status
            probel.status = PsychoJS.Status.FINISHED;
            probel.status = PsychoJS.Status.FINISHED;
              }
            
          }
          
          // if probel is active this frame...
          if (probel.status === PsychoJS.Status.STARTED) {
            let theseKeys = probel.getKeys({
              keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
              waitRelease: false
            });
            _probel_allKeys = _probel_allKeys.concat(theseKeys);
            if (_probel_allKeys.length > 0) {
              probel.keys = _probel_allKeys[_probel_allKeys.length - 1].name;  // just the last key pressed
              probel.rt = _probel_allKeys[_probel_allKeys.length - 1].rt;
              probel.duration = _probel_allKeys[_probel_allKeys.length - 1].duration;
              // a response ends the routine
              continueRoutine = false;
            }
          }
          
          // check for quit (typically the Esc key)
          if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
            return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
          }
          
          // check if the Routine should terminate
          if (!continueRoutine) {  // a component has requested a forced-end of Routine
            routineForceEnded = true;
            return Scheduler.Event.NEXT;
          }
          
          continueRoutine = false;  // reverts to True if at least one component still running
          for (const thisComponent of expComponents)
            if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
              continueRoutine = true;
              break;
            }
          
          // refresh the screen if continuing
          if (continueRoutine && routineTimer.getTime() > 0) {
            return Scheduler.Event.FLIP_REPEAT;
          } else {
            return Scheduler.Event.NEXT;
          }
        };
      }
      
      
function expRoutineEnd(snapshot) {
        return async function () {
          //--- Ending Routine 'exp' ---
          for (const thisComponent of expComponents) {
            if (typeof thisComponent.setAutoDraw === 'function') {
              thisComponent.setAutoDraw(false);
            }
          }
          psychoJS.experiment.addData('exp.stopped', globalClock.getTime());
          // update the trial handler
          if (currentLoop instanceof MultiStairHandler) {
            currentLoop.addResponse(probel.corr, level);
          }
          psychoJS.experiment.addData('probel.keys', probel.keys);
          if (typeof probel.keys !== 'undefined') {  // we had a response
              psychoJS.experiment.addData('probel.rt', probel.rt);
              psychoJS.experiment.addData('probel.duration', probel.duration);
              routineTimer.reset();
              }
          
          probel.stop();
          if (routineForceEnded) {
              routineTimer.reset();} else if (expMaxDurationReached) {
              expClock.add(expMaxDuration);
          } else {
              expClock.add(15.200000);
          }
          // Routines running outside a loop should always advance the datafile row
          if (currentLoop === psychoJS.experiment) {
            psychoJS.experiment.nextEntry(snapshot);
          }
          return Scheduler.Event.NEXT;
        }
      }
      
      
var exp1MaxDurationReached;
var _resp_first_allKeys;
var exp1MaxDuration;
var exp1Components;
function exp1RoutineBegin(snapshot) {
        return async function () {
          TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
          
          //--- Prepare to start Routine 'exp1' ---
          t = 0;
          frameN = -1;
          continueRoutine = true; // until we're told otherwise
          // keep track of whether this Routine was forcibly ended
          routineForceEnded = false;
          exp1Clock.reset(routineTimer.getTime());
          routineTimer.add(7.000000);
          exp1MaxDurationReached = false;
          // update component parameters for each repeat
          text_15.setText(StatementB);
          text_16.setText('Неверно (S) / Верно (L)');
          resp_first.keys = undefined;
          resp_first.rt = undefined;
          _resp_first_allKeys = [];
          psychoJS.experiment.addData('exp1.started', globalClock.getTime());
          exp1MaxDuration = null
          // keep track of which components have finished
          exp1Components = [];
          exp1Components.push(text_15);
          exp1Components.push(text_16);
          exp1Components.push(resp_first);
          
          for (const thisComponent of exp1Components)
            if ('status' in thisComponent)
              thisComponent.status = PsychoJS.Status.NOT_STARTED;
          return Scheduler.Event.NEXT;
        }
      }
      
      
function exp1RoutineEachFrame() {
        return async function () {
          //--- Loop for each frame of Routine 'exp1' ---
          // get current time
          t = exp1Clock.getTime();
          frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
          // update/draw components on each frame
          
          // *text_15* updates
          if (t >= 0.0 && text_15.status === PsychoJS.Status.NOT_STARTED) {
            // keep track of start time/frame for later
            text_15.tStart = t;  // (not accounting for frame time here)
            text_15.frameNStart = frameN;  // exact frame index
            
            text_15.setAutoDraw(true);
          }
          
          
          // if text_15 is active this frame...
          if (text_15.status === PsychoJS.Status.STARTED) {
          }
          
          frameRemains = 0.0 + 7 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
          if (text_15.status === PsychoJS.Status.STARTED && t >= frameRemains) {
            // keep track of stop time/frame for later
            text_15.tStop = t;  // not accounting for scr refresh
            text_15.frameNStop = frameN;  // exact frame index
            // update status
            text_15.status = PsychoJS.Status.FINISHED;
            text_15.setAutoDraw(false);
          }
          
          
          // *text_16* updates
          if (t >= 0.0 && text_16.status === PsychoJS.Status.NOT_STARTED) {
            // keep track of start time/frame for later
            text_16.tStart = t;  // (not accounting for frame time here)
            text_16.frameNStart = frameN;  // exact frame index
            
            text_16.setAutoDraw(true);
          }
          
          
          // if text_16 is active this frame...
          if (text_16.status === PsychoJS.Status.STARTED) {
          }
          
          frameRemains = 0.0 + 7 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
          if (text_16.status === PsychoJS.Status.STARTED && t >= frameRemains) {
            // keep track of stop time/frame for later
            text_16.tStop = t;  // not accounting for scr refresh
            text_16.frameNStop = frameN;  // exact frame index
            // update status
            text_16.status = PsychoJS.Status.FINISHED;
            text_16.setAutoDraw(false);
          }
          
          
          // *resp_first* updates
          if (t >= 0.0 && resp_first.status === PsychoJS.Status.NOT_STARTED) {
            // keep track of start time/frame for later
            resp_first.tStart = t;  // (not accounting for frame time here)
            resp_first.frameNStart = frameN;  // exact frame index
            
            // keyboard checking is just starting
            psychoJS.window.callOnFlip(function() { resp_first.clock.reset(); });  // t=0 on next screen flip
            psychoJS.window.callOnFlip(function() { resp_first.start(); }); // start on screen flip
            psychoJS.window.callOnFlip(function() { resp_first.clearEvents(); });
          }
          frameRemains = 0.0 + 7 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
          if (resp_first.status === PsychoJS.Status.STARTED && t >= frameRemains) {
            // keep track of stop time/frame for later
            resp_first.tStop = t;  // not accounting for scr refresh
            resp_first.frameNStop = frameN;  // exact frame index
            // update status
            resp_first.status = PsychoJS.Status.FINISHED;
            frameRemains = 0.0 + 7 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
            if (resp_first.status === PsychoJS.Status.STARTED && t >= frameRemains) {
              // keep track of stop time/frame for later
              resp_first.tStop = t;  // not accounting for scr refresh
              resp_first.frameNStop = frameN;  // exact frame index
              // update status
              resp_first.status = PsychoJS.Status.FINISHED;
              resp_first.status = PsychoJS.Status.FINISHED;
                }
              
            }
            
            // if resp_first is active this frame...
            if (resp_first.status === PsychoJS.Status.STARTED) {
              let theseKeys = resp_first.getKeys({
                keyList: typeof ['s','l'] === 'string' ? [['s','l']] : ['s','l'], 
                waitRelease: false
              });
              _resp_first_allKeys = _resp_first_allKeys.concat(theseKeys);
              if (_resp_first_allKeys.length > 0) {
                resp_first.keys = _resp_first_allKeys[_resp_first_allKeys.length - 1].name;  // just the last key pressed
                resp_first.rt = _resp_first_allKeys[_resp_first_allKeys.length - 1].rt;
                resp_first.duration = _resp_first_allKeys[_resp_first_allKeys.length - 1].duration;
                // was this correct?
                if (resp_first.keys == corrAns) {
                    resp_first.corr = 1;
                } else {
                    resp_first.corr = 0;
                }
                // a response ends the routine
                continueRoutine = false;
              }
            }
            
            // check for quit (typically the Esc key)
            if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
              return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
            }
            
            // check if the Routine should terminate
            if (!continueRoutine) {  // a component has requested a forced-end of Routine
              routineForceEnded = true;
              return Scheduler.Event.NEXT;
            }
            
            continueRoutine = false;  // reverts to True if at least one component still running
            for (const thisComponent of exp1Components)
              if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
                continueRoutine = true;
                break;
              }
            
            // refresh the screen if continuing
            if (continueRoutine && routineTimer.getTime() > 0) {
              return Scheduler.Event.FLIP_REPEAT;
            } else {
              return Scheduler.Event.NEXT;
            }
          };
        }
        
        
function exp1RoutineEnd(snapshot) {
          return async function () {
            //--- Ending Routine 'exp1' ---
            for (const thisComponent of exp1Components) {
              if (typeof thisComponent.setAutoDraw === 'function') {
                thisComponent.setAutoDraw(false);
              }
            }
            psychoJS.experiment.addData('exp1.stopped', globalClock.getTime());
            // was no response the correct answer?!
            if (resp_first.keys === undefined) {
              if (['None','none',undefined].includes(corrAns)) {
                 resp_first.corr = 1;  // correct non-response
              } else {
                 resp_first.corr = 0;  // failed to respond (incorrectly)
              }
            }
            // store data for current loop
            // update the trial handler
            if (currentLoop instanceof MultiStairHandler) {
              currentLoop.addResponse(resp_first.corr, level);
            }
            psychoJS.experiment.addData('resp_first.keys', resp_first.keys);
            psychoJS.experiment.addData('resp_first.corr', resp_first.corr);
            if (typeof resp_first.keys !== 'undefined') {  // we had a response
                psychoJS.experiment.addData('resp_first.rt', resp_first.rt);
                psychoJS.experiment.addData('resp_first.duration', resp_first.duration);
                routineTimer.reset();
                }
            
            resp_first.stop();
            if (routineForceEnded) {
                routineTimer.reset();} else if (exp1MaxDurationReached) {
                exp1Clock.add(exp1MaxDuration);
            } else {
                exp1Clock.add(7.000000);
            }
            // Routines running outside a loop should always advance the datafile row
            if (currentLoop === psychoJS.experiment) {
              psychoJS.experiment.nextEntry(snapshot);
            }
            return Scheduler.Event.NEXT;
          }
        }
        
        
var block_overMaxDurationReached;
var _key_resp_12_allKeys;
var block_overMaxDuration;
var block_overComponents;
function block_overRoutineBegin(snapshot) {
          return async function () {
            TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
            
            //--- Prepare to start Routine 'block_over' ---
            t = 0;
            frameN = -1;
            continueRoutine = true; // until we're told otherwise
            // keep track of whether this Routine was forcibly ended
            routineForceEnded = false;
            block_overClock.reset();
            routineTimer.reset();
            block_overMaxDurationReached = false;
            // update component parameters for each repeat
            key_resp_12.keys = undefined;
            key_resp_12.rt = undefined;
            _key_resp_12_allKeys = [];
            psychoJS.experiment.addData('block_over.started', globalClock.getTime());
            block_overMaxDuration = null
            // keep track of which components have finished
            block_overComponents = [];
            block_overComponents.push(text_21);
            block_overComponents.push(key_resp_12);
            
            for (const thisComponent of block_overComponents)
              if ('status' in thisComponent)
                thisComponent.status = PsychoJS.Status.NOT_STARTED;
            return Scheduler.Event.NEXT;
          }
        }
        
        
function block_overRoutineEachFrame() {
          return async function () {
            //--- Loop for each frame of Routine 'block_over' ---
            // get current time
            t = block_overClock.getTime();
            frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
            // update/draw components on each frame
            
            // *text_21* updates
            if (t >= 0.0 && text_21.status === PsychoJS.Status.NOT_STARTED) {
              // keep track of start time/frame for later
              text_21.tStart = t;  // (not accounting for frame time here)
              text_21.frameNStart = frameN;  // exact frame index
              
              text_21.setAutoDraw(true);
            }
            
            
            // if text_21 is active this frame...
            if (text_21.status === PsychoJS.Status.STARTED) {
            }
            
            
            // *key_resp_12* updates
            if (t >= 0.0 && key_resp_12.status === PsychoJS.Status.NOT_STARTED) {
              // keep track of start time/frame for later
              key_resp_12.tStart = t;  // (not accounting for frame time here)
              key_resp_12.frameNStart = frameN;  // exact frame index
              
              // keyboard checking is just starting
              psychoJS.window.callOnFlip(function() { key_resp_12.clock.reset(); });  // t=0 on next screen flip
              psychoJS.window.callOnFlip(function() { key_resp_12.start(); }); // start on screen flip
              psychoJS.window.callOnFlip(function() { key_resp_12.clearEvents(); });
            }
            
            // if key_resp_12 is active this frame...
            if (key_resp_12.status === PsychoJS.Status.STARTED) {
              let theseKeys = key_resp_12.getKeys({
                keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
                waitRelease: false
              });
              _key_resp_12_allKeys = _key_resp_12_allKeys.concat(theseKeys);
              if (_key_resp_12_allKeys.length > 0) {
                key_resp_12.keys = _key_resp_12_allKeys[_key_resp_12_allKeys.length - 1].name;  // just the last key pressed
                key_resp_12.rt = _key_resp_12_allKeys[_key_resp_12_allKeys.length - 1].rt;
                key_resp_12.duration = _key_resp_12_allKeys[_key_resp_12_allKeys.length - 1].duration;
                // a response ends the routine
                continueRoutine = false;
              }
            }
            
            // check for quit (typically the Esc key)
            if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
              return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
            }
            
            // check if the Routine should terminate
            if (!continueRoutine) {  // a component has requested a forced-end of Routine
              routineForceEnded = true;
              return Scheduler.Event.NEXT;
            }
            
            continueRoutine = false;  // reverts to True if at least one component still running
            for (const thisComponent of block_overComponents)
              if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
                continueRoutine = true;
                break;
              }
            
            // refresh the screen if continuing
            if (continueRoutine) {
              return Scheduler.Event.FLIP_REPEAT;
            } else {
              return Scheduler.Event.NEXT;
            }
          };
        }
        
        
function block_overRoutineEnd(snapshot) {
          return async function () {
            //--- Ending Routine 'block_over' ---
            for (const thisComponent of block_overComponents) {
              if (typeof thisComponent.setAutoDraw === 'function') {
                thisComponent.setAutoDraw(false);
              }
            }
            psychoJS.experiment.addData('block_over.stopped', globalClock.getTime());
            // update the trial handler
            if (currentLoop instanceof MultiStairHandler) {
              currentLoop.addResponse(key_resp_12.corr, level);
            }
            psychoJS.experiment.addData('key_resp_12.keys', key_resp_12.keys);
            if (typeof key_resp_12.keys !== 'undefined') {  // we had a response
                psychoJS.experiment.addData('key_resp_12.rt', key_resp_12.rt);
                psychoJS.experiment.addData('key_resp_12.duration', key_resp_12.duration);
                routineTimer.reset();
                }
            
            key_resp_12.stop();
            // the Routine "block_over" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset();
            
            // Routines running outside a loop should always advance the datafile row
            if (currentLoop === psychoJS.experiment) {
              psychoJS.experiment.nextEntry(snapshot);
            }
            return Scheduler.Event.NEXT;
          }
        }
        
        
var Problem2MaxDurationReached;
var _key_resp_13_allKeys;
var Problem2MaxDuration;
var Problem2Components;
function Problem2RoutineBegin(snapshot) {
          return async function () {
            TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
            
            //--- Prepare to start Routine 'Problem2' ---
            t = 0;
            frameN = -1;
            continueRoutine = true; // until we're told otherwise
            // keep track of whether this Routine was forcibly ended
            routineForceEnded = false;
            Problem2Clock.reset();
            routineTimer.reset();
            Problem2MaxDurationReached = false;
            // update component parameters for each repeat
            key_resp_13.keys = undefined;
            key_resp_13.rt = undefined;
            _key_resp_13_allKeys = [];
            psychoJS.experiment.addData('Problem2.started', globalClock.getTime());
            Problem2MaxDuration = null
            // keep track of which components have finished
            Problem2Components = [];
            Problem2Components.push(text_22);
            Problem2Components.push(key_resp_13);
            
            for (const thisComponent of Problem2Components)
              if ('status' in thisComponent)
                thisComponent.status = PsychoJS.Status.NOT_STARTED;
            return Scheduler.Event.NEXT;
          }
        }
        
        
function Problem2RoutineEachFrame() {
          return async function () {
            //--- Loop for each frame of Routine 'Problem2' ---
            // get current time
            t = Problem2Clock.getTime();
            frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
            // update/draw components on each frame
            
            // *text_22* updates
            if (t >= 0.0 && text_22.status === PsychoJS.Status.NOT_STARTED) {
              // keep track of start time/frame for later
              text_22.tStart = t;  // (not accounting for frame time here)
              text_22.frameNStart = frameN;  // exact frame index
              
              text_22.setAutoDraw(true);
            }
            
            
            // if text_22 is active this frame...
            if (text_22.status === PsychoJS.Status.STARTED) {
            }
            
            
            // *key_resp_13* updates
            if (t >= 0.0 && key_resp_13.status === PsychoJS.Status.NOT_STARTED) {
              // keep track of start time/frame for later
              key_resp_13.tStart = t;  // (not accounting for frame time here)
              key_resp_13.frameNStart = frameN;  // exact frame index
              
              // keyboard checking is just starting
              psychoJS.window.callOnFlip(function() { key_resp_13.clock.reset(); });  // t=0 on next screen flip
              psychoJS.window.callOnFlip(function() { key_resp_13.start(); }); // start on screen flip
              psychoJS.window.callOnFlip(function() { key_resp_13.clearEvents(); });
            }
            
            // if key_resp_13 is active this frame...
            if (key_resp_13.status === PsychoJS.Status.STARTED) {
              let theseKeys = key_resp_13.getKeys({
                keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
                waitRelease: false
              });
              _key_resp_13_allKeys = _key_resp_13_allKeys.concat(theseKeys);
              if (_key_resp_13_allKeys.length > 0) {
                key_resp_13.keys = _key_resp_13_allKeys[_key_resp_13_allKeys.length - 1].name;  // just the last key pressed
                key_resp_13.rt = _key_resp_13_allKeys[_key_resp_13_allKeys.length - 1].rt;
                key_resp_13.duration = _key_resp_13_allKeys[_key_resp_13_allKeys.length - 1].duration;
                // a response ends the routine
                continueRoutine = false;
              }
            }
            
            // check for quit (typically the Esc key)
            if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
              return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
            }
            
            // check if the Routine should terminate
            if (!continueRoutine) {  // a component has requested a forced-end of Routine
              routineForceEnded = true;
              return Scheduler.Event.NEXT;
            }
            
            continueRoutine = false;  // reverts to True if at least one component still running
            for (const thisComponent of Problem2Components)
              if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
                continueRoutine = true;
                break;
              }
            
            // refresh the screen if continuing
            if (continueRoutine) {
              return Scheduler.Event.FLIP_REPEAT;
            } else {
              return Scheduler.Event.NEXT;
            }
          };
        }
        
        
function Problem2RoutineEnd(snapshot) {
          return async function () {
            //--- Ending Routine 'Problem2' ---
            for (const thisComponent of Problem2Components) {
              if (typeof thisComponent.setAutoDraw === 'function') {
                thisComponent.setAutoDraw(false);
              }
            }
            psychoJS.experiment.addData('Problem2.stopped', globalClock.getTime());
            // update the trial handler
            if (currentLoop instanceof MultiStairHandler) {
              currentLoop.addResponse(key_resp_13.corr, level);
            }
            psychoJS.experiment.addData('key_resp_13.keys', key_resp_13.keys);
            if (typeof key_resp_13.keys !== 'undefined') {  // we had a response
                psychoJS.experiment.addData('key_resp_13.rt', key_resp_13.rt);
                psychoJS.experiment.addData('key_resp_13.duration', key_resp_13.duration);
                routineTimer.reset();
                }
            
            key_resp_13.stop();
            // the Routine "Problem2" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset();
            
            // Routines running outside a loop should always advance the datafile row
            if (currentLoop === psychoJS.experiment) {
              psychoJS.experiment.nextEntry(snapshot);
            }
            return Scheduler.Event.NEXT;
          }
        }
        
        
var exp3MaxDurationReached;
var _key_resp_14_allKeys;
var exp3MaxDuration;
var exp3Components;
function exp3RoutineBegin(snapshot) {
          return async function () {
            TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
            
            //--- Prepare to start Routine 'exp3' ---
            t = 0;
            frameN = -1;
            continueRoutine = true; // until we're told otherwise
            // keep track of whether this Routine was forcibly ended
            routineForceEnded = false;
            exp3Clock.reset(routineTimer.getTime());
            routineTimer.add(15.200000);
            exp3MaxDurationReached = false;
            // update component parameters for each repeat
            text_24.setText(StatementA);
            text_25.setText('Нажмите ПРОБЕЛ, чтобы появилось последнее слово');
            key_resp_14.keys = undefined;
            key_resp_14.rt = undefined;
            _key_resp_14_allKeys = [];
            psychoJS.experiment.addData('exp3.started', globalClock.getTime());
            exp3MaxDuration = null
            // keep track of which components have finished
            exp3Components = [];
            exp3Components.push(polygon_9);
            exp3Components.push(text_24);
            exp3Components.push(text_25);
            exp3Components.push(key_resp_14);
            
            for (const thisComponent of exp3Components)
              if ('status' in thisComponent)
                thisComponent.status = PsychoJS.Status.NOT_STARTED;
            return Scheduler.Event.NEXT;
          }
        }
        
        
function exp3RoutineEachFrame() {
          return async function () {
            //--- Loop for each frame of Routine 'exp3' ---
            // get current time
            t = exp3Clock.getTime();
            frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
            // update/draw components on each frame
            
            // *polygon_9* updates
            if (t >= 0.0 && polygon_9.status === PsychoJS.Status.NOT_STARTED) {
              // keep track of start time/frame for later
              polygon_9.tStart = t;  // (not accounting for frame time here)
              polygon_9.frameNStart = frameN;  // exact frame index
              
              polygon_9.setAutoDraw(true);
            }
            
            
            // if polygon_9 is active this frame...
            if (polygon_9.status === PsychoJS.Status.STARTED) {
            }
            
            frameRemains = 0.0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
            if (polygon_9.status === PsychoJS.Status.STARTED && t >= frameRemains) {
              // keep track of stop time/frame for later
              polygon_9.tStop = t;  // not accounting for scr refresh
              polygon_9.frameNStop = frameN;  // exact frame index
              // update status
              polygon_9.status = PsychoJS.Status.FINISHED;
              polygon_9.setAutoDraw(false);
            }
            
            
            // *text_24* updates
            if (t >= 0.2 && text_24.status === PsychoJS.Status.NOT_STARTED) {
              // keep track of start time/frame for later
              text_24.tStart = t;  // (not accounting for frame time here)
              text_24.frameNStart = frameN;  // exact frame index
              
              text_24.setAutoDraw(true);
            }
            
            
            // if text_24 is active this frame...
            if (text_24.status === PsychoJS.Status.STARTED) {
            }
            
            frameRemains = 0.2 + 15 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
            if (text_24.status === PsychoJS.Status.STARTED && t >= frameRemains) {
              // keep track of stop time/frame for later
              text_24.tStop = t;  // not accounting for scr refresh
              text_24.frameNStop = frameN;  // exact frame index
              // update status
              text_24.status = PsychoJS.Status.FINISHED;
              text_24.setAutoDraw(false);
            }
            
            
            // *text_25* updates
            if (t >= 0.2 && text_25.status === PsychoJS.Status.NOT_STARTED) {
              // keep track of start time/frame for later
              text_25.tStart = t;  // (not accounting for frame time here)
              text_25.frameNStart = frameN;  // exact frame index
              
              text_25.setAutoDraw(true);
            }
            
            
            // if text_25 is active this frame...
            if (text_25.status === PsychoJS.Status.STARTED) {
            }
            
            frameRemains = 0.2 + 15 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
            if (text_25.status === PsychoJS.Status.STARTED && t >= frameRemains) {
              // keep track of stop time/frame for later
              text_25.tStop = t;  // not accounting for scr refresh
              text_25.frameNStop = frameN;  // exact frame index
              // update status
              text_25.status = PsychoJS.Status.FINISHED;
              text_25.setAutoDraw(false);
            }
            
            
            // *key_resp_14* updates
            if (t >= 0.2 && key_resp_14.status === PsychoJS.Status.NOT_STARTED) {
              // keep track of start time/frame for later
              key_resp_14.tStart = t;  // (not accounting for frame time here)
              key_resp_14.frameNStart = frameN;  // exact frame index
              
              // keyboard checking is just starting
              psychoJS.window.callOnFlip(function() { key_resp_14.clock.reset(); });  // t=0 on next screen flip
              psychoJS.window.callOnFlip(function() { key_resp_14.start(); }); // start on screen flip
              psychoJS.window.callOnFlip(function() { key_resp_14.clearEvents(); });
            }
            frameRemains = 0.2 + 15 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
            if (key_resp_14.status === PsychoJS.Status.STARTED && t >= frameRemains) {
              // keep track of stop time/frame for later
              key_resp_14.tStop = t;  // not accounting for scr refresh
              key_resp_14.frameNStop = frameN;  // exact frame index
              // update status
              key_resp_14.status = PsychoJS.Status.FINISHED;
              frameRemains = 0.2 + 15 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
              if (key_resp_14.status === PsychoJS.Status.STARTED && t >= frameRemains) {
                // keep track of stop time/frame for later
                key_resp_14.tStop = t;  // not accounting for scr refresh
                key_resp_14.frameNStop = frameN;  // exact frame index
                // update status
                key_resp_14.status = PsychoJS.Status.FINISHED;
                key_resp_14.status = PsychoJS.Status.FINISHED;
                  }
                
              }
              
              // if key_resp_14 is active this frame...
              if (key_resp_14.status === PsychoJS.Status.STARTED) {
                let theseKeys = key_resp_14.getKeys({
                  keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
                  waitRelease: false
                });
                _key_resp_14_allKeys = _key_resp_14_allKeys.concat(theseKeys);
                if (_key_resp_14_allKeys.length > 0) {
                  key_resp_14.keys = _key_resp_14_allKeys[_key_resp_14_allKeys.length - 1].name;  // just the last key pressed
                  key_resp_14.rt = _key_resp_14_allKeys[_key_resp_14_allKeys.length - 1].rt;
                  key_resp_14.duration = _key_resp_14_allKeys[_key_resp_14_allKeys.length - 1].duration;
                  // a response ends the routine
                  continueRoutine = false;
                }
              }
              
              // check for quit (typically the Esc key)
              if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
                return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
              }
              
              // check if the Routine should terminate
              if (!continueRoutine) {  // a component has requested a forced-end of Routine
                routineForceEnded = true;
                return Scheduler.Event.NEXT;
              }
              
              continueRoutine = false;  // reverts to True if at least one component still running
              for (const thisComponent of exp3Components)
                if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
                  continueRoutine = true;
                  break;
                }
              
              // refresh the screen if continuing
              if (continueRoutine && routineTimer.getTime() > 0) {
                return Scheduler.Event.FLIP_REPEAT;
              } else {
                return Scheduler.Event.NEXT;
              }
            };
          }
          
          
function exp3RoutineEnd(snapshot) {
            return async function () {
              //--- Ending Routine 'exp3' ---
              for (const thisComponent of exp3Components) {
                if (typeof thisComponent.setAutoDraw === 'function') {
                  thisComponent.setAutoDraw(false);
                }
              }
              psychoJS.experiment.addData('exp3.stopped', globalClock.getTime());
              // update the trial handler
              if (currentLoop instanceof MultiStairHandler) {
                currentLoop.addResponse(key_resp_14.corr, level);
              }
              psychoJS.experiment.addData('key_resp_14.keys', key_resp_14.keys);
              if (typeof key_resp_14.keys !== 'undefined') {  // we had a response
                  psychoJS.experiment.addData('key_resp_14.rt', key_resp_14.rt);
                  psychoJS.experiment.addData('key_resp_14.duration', key_resp_14.duration);
                  routineTimer.reset();
                  }
              
              key_resp_14.stop();
              if (routineForceEnded) {
                  routineTimer.reset();} else if (exp3MaxDurationReached) {
                  exp3Clock.add(exp3MaxDuration);
              } else {
                  exp3Clock.add(15.200000);
              }
              // Routines running outside a loop should always advance the datafile row
              if (currentLoop === psychoJS.experiment) {
                psychoJS.experiment.nextEntry(snapshot);
              }
              return Scheduler.Event.NEXT;
            }
          }
          
          
var exp4MaxDurationReached;
var _resp_first1_allKeys;
var exp4MaxDuration;
var exp4Components;
function exp4RoutineBegin(snapshot) {
            return async function () {
              TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
              
              //--- Prepare to start Routine 'exp4' ---
              t = 0;
              frameN = -1;
              continueRoutine = true; // until we're told otherwise
              // keep track of whether this Routine was forcibly ended
              routineForceEnded = false;
              exp4Clock.reset(routineTimer.getTime());
              routineTimer.add(7.000000);
              exp4MaxDurationReached = false;
              // update component parameters for each repeat
              text_27.setText(StatementB);
              text_28.setText('Неверно (S) / Верно (L)');
              resp_first1.keys = undefined;
              resp_first1.rt = undefined;
              _resp_first1_allKeys = [];
              psychoJS.experiment.addData('exp4.started', globalClock.getTime());
              exp4MaxDuration = null
              // keep track of which components have finished
              exp4Components = [];
              exp4Components.push(text_27);
              exp4Components.push(text_28);
              exp4Components.push(resp_first1);
              
              for (const thisComponent of exp4Components)
                if ('status' in thisComponent)
                  thisComponent.status = PsychoJS.Status.NOT_STARTED;
              return Scheduler.Event.NEXT;
            }
          }
          
          
function exp4RoutineEachFrame() {
            return async function () {
              //--- Loop for each frame of Routine 'exp4' ---
              // get current time
              t = exp4Clock.getTime();
              frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
              // update/draw components on each frame
              
              // *text_27* updates
              if (t >= 0.0 && text_27.status === PsychoJS.Status.NOT_STARTED) {
                // keep track of start time/frame for later
                text_27.tStart = t;  // (not accounting for frame time here)
                text_27.frameNStart = frameN;  // exact frame index
                
                text_27.setAutoDraw(true);
              }
              
              
              // if text_27 is active this frame...
              if (text_27.status === PsychoJS.Status.STARTED) {
              }
              
              frameRemains = 0.0 + 7 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
              if (text_27.status === PsychoJS.Status.STARTED && t >= frameRemains) {
                // keep track of stop time/frame for later
                text_27.tStop = t;  // not accounting for scr refresh
                text_27.frameNStop = frameN;  // exact frame index
                // update status
                text_27.status = PsychoJS.Status.FINISHED;
                text_27.setAutoDraw(false);
              }
              
              
              // *text_28* updates
              if (t >= 0.0 && text_28.status === PsychoJS.Status.NOT_STARTED) {
                // keep track of start time/frame for later
                text_28.tStart = t;  // (not accounting for frame time here)
                text_28.frameNStart = frameN;  // exact frame index
                
                text_28.setAutoDraw(true);
              }
              
              
              // if text_28 is active this frame...
              if (text_28.status === PsychoJS.Status.STARTED) {
              }
              
              frameRemains = 0.0 + 7 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
              if (text_28.status === PsychoJS.Status.STARTED && t >= frameRemains) {
                // keep track of stop time/frame for later
                text_28.tStop = t;  // not accounting for scr refresh
                text_28.frameNStop = frameN;  // exact frame index
                // update status
                text_28.status = PsychoJS.Status.FINISHED;
                text_28.setAutoDraw(false);
              }
              
              
              // *resp_first1* updates
              if (t >= 0.0 && resp_first1.status === PsychoJS.Status.NOT_STARTED) {
                // keep track of start time/frame for later
                resp_first1.tStart = t;  // (not accounting for frame time here)
                resp_first1.frameNStart = frameN;  // exact frame index
                
                // keyboard checking is just starting
                psychoJS.window.callOnFlip(function() { resp_first1.clock.reset(); });  // t=0 on next screen flip
                psychoJS.window.callOnFlip(function() { resp_first1.start(); }); // start on screen flip
                psychoJS.window.callOnFlip(function() { resp_first1.clearEvents(); });
              }
              frameRemains = 0.0 + 7 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
              if (resp_first1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
                // keep track of stop time/frame for later
                resp_first1.tStop = t;  // not accounting for scr refresh
                resp_first1.frameNStop = frameN;  // exact frame index
                // update status
                resp_first1.status = PsychoJS.Status.FINISHED;
                frameRemains = 0.0 + 7 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
                if (resp_first1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
                  // keep track of stop time/frame for later
                  resp_first1.tStop = t;  // not accounting for scr refresh
                  resp_first1.frameNStop = frameN;  // exact frame index
                  // update status
                  resp_first1.status = PsychoJS.Status.FINISHED;
                  resp_first1.status = PsychoJS.Status.FINISHED;
                    }
                  
                }
                
                // if resp_first1 is active this frame...
                if (resp_first1.status === PsychoJS.Status.STARTED) {
                  let theseKeys = resp_first1.getKeys({
                    keyList: typeof ['s','l'] === 'string' ? [['s','l']] : ['s','l'], 
                    waitRelease: false
                  });
                  _resp_first1_allKeys = _resp_first1_allKeys.concat(theseKeys);
                  if (_resp_first1_allKeys.length > 0) {
                    resp_first1.keys = _resp_first1_allKeys[_resp_first1_allKeys.length - 1].name;  // just the last key pressed
                    resp_first1.rt = _resp_first1_allKeys[_resp_first1_allKeys.length - 1].rt;
                    resp_first1.duration = _resp_first1_allKeys[_resp_first1_allKeys.length - 1].duration;
                    // was this correct?
                    if (resp_first1.keys == corrAns) {
                        resp_first1.corr = 1;
                    } else {
                        resp_first1.corr = 0;
                    }
                    // a response ends the routine
                    continueRoutine = false;
                  }
                }
                
                // check for quit (typically the Esc key)
                if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
                  return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
                }
                
                // check if the Routine should terminate
                if (!continueRoutine) {  // a component has requested a forced-end of Routine
                  routineForceEnded = true;
                  return Scheduler.Event.NEXT;
                }
                
                continueRoutine = false;  // reverts to True if at least one component still running
                for (const thisComponent of exp4Components)
                  if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
                    continueRoutine = true;
                    break;
                  }
                
                // refresh the screen if continuing
                if (continueRoutine && routineTimer.getTime() > 0) {
                  return Scheduler.Event.FLIP_REPEAT;
                } else {
                  return Scheduler.Event.NEXT;
                }
              };
            }
            
            
function exp4RoutineEnd(snapshot) {
              return async function () {
                //--- Ending Routine 'exp4' ---
                for (const thisComponent of exp4Components) {
                  if (typeof thisComponent.setAutoDraw === 'function') {
                    thisComponent.setAutoDraw(false);
                  }
                }
                psychoJS.experiment.addData('exp4.stopped', globalClock.getTime());
                // was no response the correct answer?!
                if (resp_first1.keys === undefined) {
                  if (['None','none',undefined].includes(corrAns)) {
                     resp_first1.corr = 1;  // correct non-response
                  } else {
                     resp_first1.corr = 0;  // failed to respond (incorrectly)
                  }
                }
                // store data for current loop
                // update the trial handler
                if (currentLoop instanceof MultiStairHandler) {
                  currentLoop.addResponse(resp_first1.corr, level);
                }
                psychoJS.experiment.addData('resp_first1.keys', resp_first1.keys);
                psychoJS.experiment.addData('resp_first1.corr', resp_first1.corr);
                if (typeof resp_first1.keys !== 'undefined') {  // we had a response
                    psychoJS.experiment.addData('resp_first1.rt', resp_first1.rt);
                    psychoJS.experiment.addData('resp_first1.duration', resp_first1.duration);
                    routineTimer.reset();
                    }
                
                resp_first1.stop();
                if (routineForceEnded) {
                    routineTimer.reset();} else if (exp4MaxDurationReached) {
                    exp4Clock.add(exp4MaxDuration);
                } else {
                    exp4Clock.add(7.000000);
                }
                // Routines running outside a loop should always advance the datafile row
                if (currentLoop === psychoJS.experiment) {
                  psychoJS.experiment.nextEntry(snapshot);
                }
                return Scheduler.Event.NEXT;
              }
            }
            
            
var exitMaxDurationReached;
var exitMaxDuration;
var exitComponents;
function exitRoutineBegin(snapshot) {
              return async function () {
                TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
                
                //--- Prepare to start Routine 'exit' ---
                t = 0;
                frameN = -1;
                continueRoutine = true; // until we're told otherwise
                // keep track of whether this Routine was forcibly ended
                routineForceEnded = false;
                exitClock.reset(routineTimer.getTime());
                routineTimer.add(1.000000);
                exitMaxDurationReached = false;
                // update component parameters for each repeat
                // Disable downloading results to browser
                psychoJS._saveResults = 0;
                
                // Generate filename for results
                let filename = psychoJS._experiment._experimentName + '_' + psychoJS._experiment._datetime + '.csv';
                
                // Extract data object from experiment
                let dataObj = psychoJS._experiment._trialsData;
                
                // Convert data object to CSV
                let data = [Object.keys(databObj[0])].concat(databObj).map(it => {
                return Object.values(it).toString()
                }).join('\n')
                
                // Send data to OSF via DataPipe
                console.log('Saving data...');
                fetch('https://pipe.jspsych.org/api/data', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: '*/*',
                    },
                    body: JSON.stringify({
                    experimentID: 'dLMeXTiNUpy8', // * UPDATE WITH YOUR DATAPIPE EXPERIMENT ID *
                    filename: filename, 
                    data: data,
                    }),
                }).then(response => response.json()).then(data => {
                // Log response aud force experiment end
                console.log(data);
                quitPsychoJS();
                })
                psychoJS.experiment.addData('exit.started', globalClock.getTime());
                exitMaxDuration = null
                // keep track of which components have finished
                exitComponents = [];
                exitComponents.push(text_3);
                
                for (const thisComponent of exitComponents)
                  if ('status' in thisComponent)
                    thisComponent.status = PsychoJS.Status.NOT_STARTED;
                return Scheduler.Event.NEXT;
              }
            }
            
            
function exitRoutineEachFrame() {
              return async function () {
                //--- Loop for each frame of Routine 'exit' ---
                // get current time
                t = exitClock.getTime();
                frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
                // update/draw components on each frame
                
                // *text_3* updates
                if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
                  // keep track of start time/frame for later
                  text_3.tStart = t;  // (not accounting for frame time here)
                  text_3.frameNStart = frameN;  // exact frame index
                  
                  text_3.setAutoDraw(true);
                }
                
                
                // if text_3 is active this frame...
                if (text_3.status === PsychoJS.Status.STARTED) {
                }
                
                frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
                if (text_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
                  // keep track of stop time/frame for later
                  text_3.tStop = t;  // not accounting for scr refresh
                  text_3.frameNStop = frameN;  // exact frame index
                  // update status
                  text_3.status = PsychoJS.Status.FINISHED;
                  text_3.setAutoDraw(false);
                }
                
                // check for quit (typically the Esc key)
                if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
                  return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
                }
                
                // check if the Routine should terminate
                if (!continueRoutine) {  // a component has requested a forced-end of Routine
                  routineForceEnded = true;
                  return Scheduler.Event.NEXT;
                }
                
                continueRoutine = false;  // reverts to True if at least one component still running
                for (const thisComponent of exitComponents)
                  if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
                    continueRoutine = true;
                    break;
                  }
                
                // refresh the screen if continuing
                if (continueRoutine && routineTimer.getTime() > 0) {
                  return Scheduler.Event.FLIP_REPEAT;
                } else {
                  return Scheduler.Event.NEXT;
                }
              };
            }
            
            
function exitRoutineEnd(snapshot) {
              return async function () {
                //--- Ending Routine 'exit' ---
                for (const thisComponent of exitComponents) {
                  if (typeof thisComponent.setAutoDraw === 'function') {
                    thisComponent.setAutoDraw(false);
                  }
                }
                psychoJS.experiment.addData('exit.stopped', globalClock.getTime());
                if (routineForceEnded) {
                    routineTimer.reset();} else if (exitMaxDurationReached) {
                    exitClock.add(exitMaxDuration);
                } else {
                    exitClock.add(1.000000);
                }
                // Routines running outside a loop should always advance the datafile row
                if (currentLoop === psychoJS.experiment) {
                  psychoJS.experiment.nextEntry(snapshot);
                }
                return Scheduler.Event.NEXT;
              }
            }
            
            
function importConditions(currentLoop) {
              return async function () {
                psychoJS.importAttributes(currentLoop.getCurrentTrial());
                return Scheduler.Event.NEXT;
                };
            }
            
            
async function quitPsychoJS(message, isCompleted) {
              // Check for and save orphaned data
              if (psychoJS.experiment.isEntryEmpty()) {
                psychoJS.experiment.nextEntry();
              }
              psychoJS.window.close();
              psychoJS.quit({message: message, isCompleted: isCompleted});
              
              return Scheduler.Event.QUIT;
            }
