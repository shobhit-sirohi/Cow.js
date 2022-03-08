const chalk = require("chalk");
var readLineSync = require("readline-sync");
var figlet = require("figlet");
const gradient = require("gradient-string");
let score = -1;
console.log(
  gradient.pastel(
    figlet.textSync("SAVE THE COW !", {
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 80,
      whitespaceBreak: true,
    })
  )
);

console.log("");
let cow = `                                       ________________
                                     ,'  Hello! Human, \`.
                                    /   Please Help me!  \\
                                   |  You can Save Me by  |
                \\||/               |  doing the Dragon's  |
                |  @___oo           \\  school homework.  /
      /\\  /\\   / (__,,,,|            \`._______   ______,' 
     ) /^\\) ^\\/ _)                            ', \\    
     )   /^\\/   _)                              ',\\
     )   _ /  / _)                                '\\
 /\\  )/\\/ ||  | )_)                                   ^__^ 
<  >      |(,,) )__)                                  (oo)\\_______
 ||      /    \\)___)\\                                 (__)\\       )\\/\\
 | \\____(      )___) )___                                ||----w |
  \\______(_______;;; __;;;                               ||     ||
`;
let wincow = `
       ____________
     ,'  Thankyou! \`.
    /    Here is a   \\
   |      Present     |
    \\     for you.   /
     \`._____   ___,' 
             ', \\    
               ',\\
                 '\\
                      ^__^ 
                      (oo)\\_______
                      (__)\\       )\\/\\
                          ||----w |
                          ||     ||
`;

let animal1 = `
     _.-- ,.--.
   .'   .'    /
   | @       |'..--------._
  /      \\._/              '.
 /  .-.-                     \\
(  /    \\                     \\
 \\\\      '.                  | #
  \\\\       \\   -.           /
   :\\       |    )._____.'   \\
    "       |   /  \\  |  \\    )
            |   |./'  :__ \\.-'
            '--'

`;

let animal2 = `
 _________         .    .
(..       \\_    ,  |\\  /|
 \\       O  \\  /|  \\ \\/ /
  \\______    \\/ |   \\  / 
     vvvv\\    \\ |   /  |
     \\^^^^  ==   \\_/   |
      \`\\_   ===    \\.  |
      / /\\_   \\ /      |
      |/   \\_  \\|      /
             \\________/

`;

let animal3 = `
        _
    .--' |
   /___^ |     .--.
       ) |    /    \\
      /  |  /\`      '.
     |   '-'    /     \\
     \\         |      |\\
      \\    /   \\      /\\|
       \\  /'----\`\\   /
       |||       \\\\ |
       ((|        ((|
       |||        |||
      //_(       //_( 

`;

let animal4 = `

       .="=.
     _/.-.-.\\_     _
    ( ( o o ) )    ))
     |/  "  \\|    //
      \\'---'/    //
      /\`"""\`\\\\  ((
     / /_,_\\ \\\\  \\\\
     \\_\\\\_'__/ \\  ))
     /\`  /\`~\\  |//
    /   /    \\  /
,--\`,--'\\/\\    /
 '-- "--'  '--'

`;

let animal5 = `
                              __
                     /\\    .-" /
                    /  ; .'  .' 
                   :   :/  .'   
                    \\  ;-.'     
       .--""""--..__/     \`.    
     .'           .'    \`o  \\   
    /                    \`   ;  
   :                  \\      :  
 .-;        -.         \`.__.-'  
:  ;          \\     ,   ;       
'._:           ;   :   (        
    \\/  .__    ;    \\   \`-.     
     ;     "-,/_..--"\`-..__)    
     '""--.._:

`;
let dragon = `
                          /                            )
                          (                             |\\
                         /|                              \\\\
                        //                                \\\\
                       ///                                 \\|
                      /( \\                                  )\\
                      \\\\  \\_                               //)
                       \\\\  :\\__                           ///
                        \\\\     )                         // \\
                         \\\\:  /                         // |/
                          \\\\ / \\                       //  \\
                           /)   \\   ___..-'           (|  \\_|
                          //     /   _.'              \\ \\  \\
                         /|       \\ \\________          \\ | /
                        (| _ _  __/          '-.       ) /.'
                         \\\\ .  '-.__            \\_    / / \\
                          \\\\_'.     > --._ '.     \\  / / /
                           \\ \\      \\     \\  \\     .' /.'
                            \\ \\  '._ /     \\ )    / .' |
                             \\ \\_     \\_   |    .'_/ __/
                              \\  \\      \\_ |   / /  _/ \\_
                               \\  \\       / _.' /  /     \\
                               \\   |     /.'   / .'       '-,_
                                \\   \\  .'   _.'_/             \\
                   /\\    /\\      ) ___(    /_.'           \\    |
                  | _\\__// \\    (.'      _/               |    |
                  \/_  __  /--'\`    ,                   __/    /
                  (_ ) /b)  \\  '.   :            \\___.-'_/ \\__/
                  /:/:  ,     ) :        (      /_.'__/-'|_ _ /
                 /:/: __/\\ >  __,_.----.__\\    /        (/(/(/
                (_(,_/V .'/--'    _/  __/  \\  /_,,, 
                 VvvV  //\`    _.-' _.'      \\  \\  /
                   n_n//     (((/->/         '.__)
                   '--'         ~='`;
let fire = `                 ,//('(         
                ( ( '))        
             \`-)) )) (          
            ,/,'//( (            
          ,( ( ((, ))             
        \`~/  )\` ) ,/|              
      ._-~//( )/ )) \`               
       ;'( ')/ ,)(                    
      ' ') '( (/`;

let ripcow = `
           (__)
 *---------(**)
    ^^----^^\\/   \\__ Rip!
    `;

let animals = [
  (startGame = {
    animal: cow,
    question:
      "Press " +
      chalk.hex("#26eb17")("ENTER") +
      " to Play ",
    answer: "",
  }),
  (elephant = {
    animal: animal1,
    question: "What Animal is this? ",
    answer: "ELEPHANT",
  }),
  (shark = {
    animal: animal2,
    question: "What Animal is this? ",
    answer: "SHARK",
  }),
  (camel = {
    animal: animal3,
    question: "What Animal is this? ",
    answer: "CAMEL",
  }),
  (monkey = {
    animal: animal4,
    question: "What Animal is this? ",
    answer: "MONKEY",
  }),
  (rabbit = {
    animal: animal5,
    question: "What Animal is this? ",
    answer: "RABBIT",
  }),
];

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i].animal);
  let userAnswer = readLineSync.question(
    animals[i].question
  );
  let userAnswerUpper = userAnswer.toUpperCase();
  if (userAnswerUpper === animals[i].answer) {
    score++;
  }
}

if (score === 5) {
  console.log(
    chalk.hex("#26eb17")("YOU SCORED: " + score + "/5")
  );
  console.log(wincow);
  console.log(
    chalk.hex("#26eb17")(`
      ____________ 
      |__________|
      /           /\\
     /    MILK   /  \\
    /___________/___/|
    |          |     |
    |  ==\\ /== |     |
    |   O   O  | \\ \\ |
    |     <    |  \\ \\|
   /|          |   \\ \\
  / |  \\_____/ |   / /
 / /|          |  / /|
/||\\|          | /||\\/
    -------------|   
        | |    | | 
       <__/    \\__>
`)
  );
} else {
  console.log(
    chalk.hex("#ff0000")("TOTAL SCORED: " + score + "/5")
  );

  console.log(dragon);
  console.log(chalk.hex("#faed27")(fire));
  console.log(chalk.hex("#ff0000")(ripcow));
}
