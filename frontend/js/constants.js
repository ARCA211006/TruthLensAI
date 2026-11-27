
const LANG_PATTERNS = [
    { pattern: /[\u0C00-\u0C7F]/, lang: 'Telugu detected' },
    { pattern: /[\u0900-\u097F]/, lang: 'Devanagari detected' },
    { pattern: /[\u0B80-\u0BFF]/, lang: 'Tamil detected' },
    { pattern: /[\u0C80-\u0CFF]/, lang: 'Kannada detected' },
    { pattern: /[\u0600-\u06FF]/, lang: 'Arabic script detected' },
    { pattern: /[a-zA-Z]/, lang: 'Latin script detected' }
];

const LANG_DEFAULT = 'Language not detected';

const SIDE_STEP_LABELS = [
    'Breaking down the claim',
    'Checking sources',
    'Consulting reviewers',
    'Weighing confidence',
    'Reaching a verdict'
];

const PIPELINE_STEPS = [
    {
        title: 'Breaking down the claim',
        agent: 'Decompose Agent',
        suffix: ' · Running...'
    },
    {
        title: 'Checking sources',
        agent: 'Credibility Agent',
        suffix: ' · Running...'
    },
    {
        title: 'Consulting reviewers',
        agent: 'Evidence Agent',
        suffix: ' · Running...'
    },
    {
        title: 'Weighing confidence',
        agent: 'Judge Agent',
        suffix: ' · Running...'
    },
    {
        title: 'Reaching a verdict',
        agent: 'Synthesis',
        suffix: ' · Running...'
    }
];
