import type { Question, QuestionType } from '../types/question';

const type: QuestionType[] = [
    ['E', 'I'],
    ['S', 'N'],
    ['T', 'F'],
    ['P', 'J'],
];

export const Questions: Question[] = [
    {
        id: 1,
        question: 'Your friend got you a new cat! What is your first reaction?',
        answerA: 'Aww! Look at this cutie!! (Aggressively cuddles the cat)',
        answerB:
            'Woah.. she is so cute...! (Loves her but too shy to get close)',
        questionType: type[0],
    },
    {
        id: 2,
        question:
            'You just got home from work. But your cat is nowhere to be found. Where do you think he is?',
        answerA:
            "Well, maybe below the bed or on the closet. I'm pretty sure he is somewhere.",
        answerB: 'Hmmm, I think he went on an adventure to find a new friend!',
        questionType: type[1],
    },
    {
        id: 3,
        question:
            'You saw an injured cat on the street. What is your first thought?',
        answerA:
            "Oh, that cat is hurt. Where's the closest vet hospital? (Takes out the phone and starts searching)",
        answerB: 'Ooohhh noooooo!!! Poor kittyyy!! WHat shoudl I do?! (Panics)',
        questionType: type[2],
    },
    {
        id: 4,
        question:
            'Tomorrow is a holiday, and you are going to spend the entire day with your cat. What would you do?',
        answerA: 'We are going to have an awesome day.',
        answerB:
            'First, cut her nails at 9:00 AM. Play with her until 11:00 AM. Watch a movie together at 1:30 PM. And ...',
        questionType: type[3],
    },
];
