import 'normalize.css';
import './scss/main.scss';


import {fromEvent } from 'rxjs';
import {map, pairwise, switchMap, takeUntil, withLatestFrom, startWith} from 'rxjs/operators'


const canvas = document.querySelector("#canvas");
const range = document.querySelector("#range");
const color = document.querySelector("#color");


const ctx = canvas.getContext('2d');

const rect = canvas.getBoundingClientRect();

const scale = window.devicePixelRatio 

canvas.width = rect.width * scale;
canvas.height = rect.height * scale;

ctx.scale(scale,scale);

const mouseMove$ = fromEvent(canvas, 'mousemove'); //fromEvent  для сщздания стрима с евента
const mouseDown$ = fromEvent(canvas, 'mousedown');
const mouseUp$ = fromEvent(canvas, 'mouseup');
const mouseOut$ = fromEvent(canvas, 'mouseout');

const lineWidth$ = fromEvent(range, 'input')
.pipe(  // метод в котором можна обработать параметри стрима разними операторами rxjs
    map(e => e.target.value), //  вернет только значение value
    startWith(range.value) // для получения базового значения с елемента до начала собития
)

const color$ = fromEvent(color, 'input')
.pipe(
    map(e => e.target.value),
    startWith(color.value)
)


const streem$ = mouseDown$
 .pipe(
    withLatestFrom(lineWidth$,color$,(_,lineWidth, color)=>{ // для совмещения собития с стримов line и color  и передать их далее в стрим mousemov
        return {
            lineWidth,
            color
        }
    }),
     switchMap((options)=>{ // позволяет переключиться с текущегострима на другой (mouseMove)
         return mouseMove$
         .pipe(
             map(e=> ({
                 x: e.offsetX,
                 y: e.offsetY,
                 options
             })),
             pairwise(), //сщвмещает предидущее собитие с текущим у стриме
             takeUntil(mouseUp$), // преривает текущий стрим при старте стрима mouseUp
             takeUntil(mouseOut$)
             )
     })
     
 )


 streem$.subscribe(([from, to]) => {  // подписуемся на стрим
          const {lineWidth ,color} = from.options
          ctx.lineWidth = lineWidth
          ctx.strokeStyle = color
           console.log(from);
           ctx.beginPath()
           ctx.moveTo(from.x, from.y)
           ctx.lineTo(to.x, to.y)
           ctx.stroke()
       })