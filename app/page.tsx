'use client';

import { useState, useReducer, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import questions from './questions';



const PRIZE_DATA = [
  {
    option: '.                         0',
    style: { backgroundColor: '#FF5252', textColor: '#FFFFFF' },
  },
  {
    option: '.                         1',
    style: { backgroundColor: '#FF6E40', textColor: '#FFFFFF' },
  },
  {
    option: '.                         0',
    style: { backgroundColor: '#FF4081', textColor: '#FFFFFF' },
  },
  {
    option: '.                         1',
    style: { backgroundColor: '#FF9800', textColor: '#FFFFFF' },
  },
  {
    option: '.                         0',
    style: { backgroundColor: '#E040FB', textColor: '#FFFFFF' },
  },
  {
    option: '     تثبيت ل 2 دقائق ',
    style: { backgroundColor: '#7C4DFF', textColor: '#FFFFFF' },
  },
  {
    option: '.                         6',
    style: { backgroundColor: '#3F51B5', textColor: '#FFFFFF' },
  },
  {
    option: '.                         0',
    style: { backgroundColor: '#536DFE', textColor: '#FFFFFF' },
  },
  {
    option: '.                         4',
    style: { backgroundColor: '#03A9F4', textColor: '#FFFFFF' },
  },
  {
    option: '.                         0',
    style: { backgroundColor: '#448AFF', textColor: '#FFFFFF' },
  },
  {
    option: '.                         1',
    style: { backgroundColor: '#FFC107', textColor: '#FFFFFF' },
  },
  {
    option: '.                         0',
    style: { backgroundColor: '#40C4FF', textColor: '#FFFFFF' },
  },
  {
    option: '.                         9',
    style: { backgroundColor: '#009688', textColor: '#FFFFFF' },
  },
  {
    option: '.                         0',
    style: { backgroundColor: '#18FFFF', textColor: '#FFFFFF' },
  },
  {
    option: '     تثبيت ل 5 دقائق ',
    style: { backgroundColor: '#7C4DFF', textColor: '#FFFFFF' },
  },
  {
    option: '.                         7',
    style: { backgroundColor: '#673AB7', textColor: '#FFFFFF' },
  },
  {
    option: '.                         1',
    style: { backgroundColor: '#FFC107', textColor: '#FFFFFF' },
  },
  {
    option: '.                         0',
    style: { backgroundColor: '#40C4FF', textColor: '#FFFFFF' },
  },
  {
    option: '.                         0',
    style: { backgroundColor: '#64FFDA', textColor: '#FFFFFF' },
  },
  {
    option: '.                         5',
    style: { backgroundColor: '#2196F3', textColor: '#FFFFFF' },
  },
  {
    option: '.                         0',
    style: { backgroundColor: '#69F0AE', textColor: '#FFFFFF' },
  },
  {
    option: '.                         1',
    style: { backgroundColor: '#FFEB3B', textColor: '#FFFFFF' },
  },
  {
    option: '.                         0',
    style: { backgroundColor: '#B2FF59', textColor: '#FFFFFF' },
  },
  {
    option: '.                         0',
    style: { backgroundColor: '#18FFFF', textColor: '#FFFFFF' },
  },
  {
    option: '.                        10',
    style: { backgroundColor: '#E91E63', textColor: '#FFFFFF' },
  },
  {
    option: '.                         0',
    style: { backgroundColor: '#EEFF41', textColor: '#FFFFFF' },
  },
  {
    option: '     تثبيت ل 8 دقائق ',
    style: { backgroundColor: '#7C4DFF', textColor: '#FFFFFF' },
  },
  {
    option: '.                         1',
    style: { backgroundColor: '#00BCD4', textColor: '#FFFFFF' },
  },
  {
    option: '.                         0',
    style: { backgroundColor: '#18FFFF', textColor: '#FFFFFF' },
  },
  {
    option: '.                         0',
    style: { backgroundColor: '#69F0AE', textColor: '#FFFFFF' },
  },
  {
    option: '.                         1',
    style: { backgroundColor: '#FFEB3B', textColor: '#FFFFFF' },
  },
  {
    option: '.                         3',
    style: { backgroundColor: '#FFFF00', textColor: '#FFFFFF' },
  },
  {
    option: '.                         0',
    style: { backgroundColor: '#18FFFF', textColor: '#FFFFFF' },
  },
  {
    option: '.                         8',
    style: { backgroundColor: '#9C27B0', textColor: '#FFFFFF' },
  },
  {
    option: '.                         0',
    style: { backgroundColor: '#69F0AE', textColor: '#FFFFFF' },
  },
  {
    option: '     تثبيت ل 10 دقائق ',
    style: { backgroundColor: '#7C4DFF', textColor: '#FFFFFF' },
  },
  {
    option: '.                         1',
    style: { backgroundColor: '#FFEB3B', textColor: '#FFFFFF' },
  },
  {
    option: '.                         0',
    style: { backgroundColor: '#FFD740', textColor: '#FFFFFF' },
  },
  {
    option: '.                         2',
    style: { backgroundColor: '#8BC34A', textColor: '#FFFFFF' },
  },
  {
    option: '.                         0',
    style: { backgroundColor: '#FFAB40', textColor: '#FFFFFF' },
  },
  {
    option: '.                         1',
    style: { backgroundColor: '#CDDC39', textColor: '#FFFFFF' },
  },
  {
    option: '.                         2',
    style: { backgroundColor: '#4CAF50', textColor: '#FFFFFF' },
  },
  {
    option: '.                         0',
    style: { backgroundColor: '#18FFFF', textColor: '#FFFFFF' },
  },
];
// Type definitions
type Question = {
  number: number;
  question: string;
  answer: string;
};

type PrizeData = {
  option: string;
  style: {
    backgroundColor: string;
    textColor: string;
  };
};

type AppState = {
  step: number;
  participants: number;
  selectedNumber: number | null;
  selectedQuestion: Question | null;
  prizeNumber: number;
  spinning: boolean;
  showAnswer: boolean;
  burnedQuestions: number[];
  prize: string | null;
};

type Action =
  | { type: 'NEXT_STEP' }
  | { type: 'PREVIOUS_STEP' }
  | { type: 'GO_TO_STEP'; payload: number }
  | { type: 'SET_PARTICIPANTS'; payload: number }
  | { type: 'SELECT_NUMBER'; payload: number }
  | { type: 'SELECT_QUESTION'; payload: Question }
  | { type: 'SHOW_ANSWER' }
  | { type: 'REMOVE_QUESTION' }
  | { type: 'START_SPIN' }
  | { type: 'STOP_SPIN' }
  | { type: 'SET_PRIZE_NUMBER'; payload: number }
  | { type: 'SET_PRIZE'; payload: string };

// Import Wheel component dynamically (client-side only)
const Wheel = dynamic(
  () => import('react-custom-roulette').then((mod) => mod.Wheel),
  { ssr: false }
);

// Rest of the code remains the same as the original, with these type modifications
const initialState: AppState = {
  step: 1,
  participants: 1,
  selectedNumber: null,
  selectedQuestion: null,
  prizeNumber: 0,
  spinning: false,
  showAnswer: false,
  burnedQuestions: [],
  prize: null,
};

function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'NEXT_STEP':
      return { ...state, step: Math.min(3, state.step + 1), showAnswer: false };
    case 'PREVIOUS_STEP':
      return { ...state, step: Math.max(1, state.step - 1), showAnswer: false };
    case 'GO_TO_STEP':
      return { ...state, step: action.payload, showAnswer: false };
    case 'SET_PARTICIPANTS':
      return { ...state, participants: action.payload };
    case 'SELECT_NUMBER':
      return { ...state, selectedNumber: action.payload };
    case 'SELECT_QUESTION':
      return { ...state, selectedQuestion: action.payload, showAnswer: false };
    case 'SHOW_ANSWER':
      return { ...state, showAnswer: true };
    case 'REMOVE_QUESTION':
      return {
        ...state,
        burnedQuestions: state.selectedQuestion
          ? [...state.burnedQuestions, state.selectedQuestion.number]
          : state.burnedQuestions,
        selectedQuestion: null,
        showAnswer: false,
      };
    case 'START_SPIN':
      return { ...state, spinning: true };
    case 'STOP_SPIN':
      return { ...state, spinning: false };
    case 'SET_PRIZE_NUMBER':
      return { ...state, prizeNumber: action.payload };
    case 'SET_PRIZE':
      return { ...state, prize: action.payload };
    default:
      return state;
  }
}

// Génération dynamique des couleurs pour la roue des participants
const generateWheelColors = (count: number) => {
  const colors = [
    '#FF5252',
    '#FF4081',
    '#E040FB',
    '#7C4DFF',
    '#536DFE',
    '#448AFF',
    '#40C4FF',
    '#18FFFF',
    '#64FFDA',
    '#69F0AE',
    '#B2FF59',
    '#EEFF41',
    '#FFFF00',
    '#FFD740',
    '#FFAB40',
    '#FF6E40',
  ];

  return Array.from({ length: count }, (_, i) => ({
    option: `${i + 1}`,
    style: {
      backgroundColor: colors[i % colors.length],
      textColor: '#FFFFFF',
    },
  }));
};

// Variantes d'animation pour les transitions de page
const pageVariants = {
  initial: { opacity: 0, y: 20, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.3 } },
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-200 to-blue-200 flex flex-col justify-center items-center text-gray-800 px-4 py-8">
      <motion.div
        className="w-full relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <AnimatePresence mode="wait">
          {state.step === 1 && <Page1 state={state} dispatch={dispatch} />}
          {state.step === 2 && (
            <Page2 state={state} dispatch={dispatch} questions={questions} />
          )}
          {state.step === 3 && <Page3 state={state} dispatch={dispatch} />}
        </AnimatePresence>
      </motion.div>

      <div className="mt-6 flex justify-between gap-4 w-full max-w-md">
        {state.step !== 1 && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => dispatch({ type: 'PREVIOUS_STEP' })}
            className="px-6 py-2 bg-gray-500 text-white rounded-lg shadow hover:bg-gray-400 transition-colors"
          >
            Précédent
          </motion.button>
        )}
        {state.step !== 3 ? (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => dispatch({ type: 'NEXT_STEP' })}
            className={`px-6 py-2 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-400 transition-colors ${
              state.step === 1 ? 'ml-auto' : ''
            }`}
          >
            Suivant
          </motion.button>
        ) : (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => dispatch({ type: 'GO_TO_STEP', payload: 1 })}
            className="px-6 py-2 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-400 transition-colors"
          >
            Recommencer
          </motion.button>
        )}
      </div>
    </div>
  );
};

const Page1 = ({
  state,
  dispatch,
}: {
  state: AppState;
  dispatch: React.Dispatch<Action>;
}) => {
  const wheelData = generateWheelColors(Math.max(1, state.participants));

  const handleSpinClick = () => {
    if (state.participants < 1) {
      dispatch({ type: 'SET_PARTICIPANTS', payload: 1 });
      return;
    }
    const randomNumber = Math.floor(Math.random() * state.participants);
    dispatch({ type: 'SET_PRIZE_NUMBER', payload: randomNumber });
    dispatch({ type: 'START_SPIN' });
    dispatch({ type: 'SELECT_NUMBER', payload: randomNumber + 1 });
  };

  const handleStopSpinning = () => {
    dispatch({ type: 'STOP_SPIN' });
  };

  return (
    <motion.div
      className="w-full max-w-md flex flex-col items-center"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.h2
        className="text-3xl font-bold mb-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, type: 'spring' }}
      >
        TikTok live : Red_One : @redone10101
      </motion.h2>
      <motion.h1
        className="text-3xl font-bold mb-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, type: 'spring' }}
      >
        اختيار المشاركين من العين
      </motion.h1>

      <motion.div
        className="flex items-center mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <label htmlFor="participants" className="mr-2">
          Nombre de participants:
        </label>
        <input
          id="participants"
          type="number"
          min="1"
          max="50"
          value={state.participants}
          placeholder="1"
          onChange={(e) => {
            // Si la valeur est vide ou 0, on remplace par 1
            const value = parseInt(e.target.value) || 1;
            dispatch({ type: 'SET_PARTICIPANTS', payload: Math.max(1, value) });
          }}
          className="border p-2 w-20 text-gray-800 rounded"
        />
      </motion.div>

      <motion.div
        className="relative w-full aspect-square max-w-sm mb-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, type: 'spring' }}
      >
        <Wheel
          mustStartSpinning={state.spinning}
          prizeNumber={state.prizeNumber}
          data={wheelData}
          onStopSpinning={handleStopSpinning}
          backgroundColors={['#e0e0e0', '#f5f5f5']}
          textDistance={60}
          radiusLineWidth={1}
          outerBorderWidth={3}
          outerBorderColor="#f9dd50"
          innerBorderColor="#f9dd50"
          innerBorderWidth={0}
          radiusLineColor="#bdbdbd"
          fontSize={16}
        />
      </motion.div>

      <div className="flex flex-col gap-4 items-center w-full">
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: '#22c55e' }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSpinClick}
          disabled={state.spinning}
          className={`px-6 py-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-400 transition-colors w-full ${
            state.spinning ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Tourner la roue
        </motion.button>

        {!state.spinning && state.selectedNumber && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="text-lg font-bold bg-white text-purple-600 px-6 py-2 rounded-lg"
          >
            Participant sélectionné : {state.selectedNumber}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const Page2 = ({
  state,
  dispatch,
  questions,
}: {
  state: AppState;
  dispatch: React.Dispatch<Action>;
  questions: Question[];
}) => {
  // Nouvelles couleurs douces pour les dégradés
  const getGradient = (index: number) => {
    const gradients = [
      'from-blue-100 to-indigo-200',
      'from-pink-100 to-purple-200',
      'from-green-100 to-teal-200',
      'from-yellow-100 to-orange-200',
      'from-indigo-100 to-purple-200',
      'from-red-100 to-pink-200',
      'from-teal-100 to-blue-200',
      'from-orange-100 to-red-200',
    ];
    return gradients[index % gradients.length];
  };

  const selectQuestion = (num: number) => {
    const selectedQuestion = questions.find((q) => q.number === num);
    if (selectedQuestion) {
      dispatch({ type: 'SELECT_QUESTION', payload: selectedQuestion });
    }
  };

  return (
    <motion.div
      className="w-full max-w-lg flex flex-col items-center p-4"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.h1
        className="text-3xl font-bold mb-6"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        اختيار الأسئلة
      </motion.h1>

      <motion.div
        className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-10 gap-2 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, staggerChildren: 0.05 }}
      >
        {questions.map((q, index) => {
          const isBurned = (state.burnedQuestions || []).includes(q.number);
          return (
            <motion.div
              key={q.number}
              whileHover={!isBurned ? { scale: 1.1, rotate: 3 } : {}}
              whileTap={!isBurned ? { rotate: 360, scale: 1.2 } : {}}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { delay: index * 0.02 },
              }}
              className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center rounded-lg cursor-pointer text-sm font-bold shadow-lg ${
                isBurned
                  ? 'bg-[#424242] opacity-75'
                  : `bg-gradient-to-r ${getGradient(index)}`
              }`}
              onClick={() => !isBurned && selectQuestion(q.number)}
            >
              {q.number}
            </motion.div>
          );
        })}
      </motion.div>

      {state.selectedQuestion &&
        !(state.burnedQuestions || []).includes(
          state.selectedQuestion.number
        ) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="bg-white text-purple-800 p-6 rounded-lg shadow-lg w-full"
          >
            <p className="text-xl font-semibold mb-4">
              {state.selectedQuestion.question}
            </p>

            {!state.showAnswer ? (
              <motion.button
                whileHover={{ scale: 1.03, backgroundColor: '#22c55e' }}
                whileTap={{ scale: 0.97 }}
                onClick={() => dispatch({ type: 'SHOW_ANSWER' })}
                className="w-full px-6 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-400 transition-colors"
              >
                Afficher la réponse
              </motion.button>
            ) : (
              <>
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.5 }}
                  className="mt-4 p-4 bg-yellow-100 text-purple-800 rounded-lg"
                >
                  <span className="font-bold">Réponse:</span>{' '}
                  {state.selectedQuestion.answer}
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.03, backgroundColor: '#ef4444' }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => dispatch({ type: 'REMOVE_QUESTION' })}
                  className="w-full px-6 py-2 mt-4 bg-red-500 text-white rounded-lg shadow hover:bg-red-400 transition-colors"
                >
                  Supprimer cette question
                </motion.button>
              </>
            )}
          </motion.div>
        )}
    </motion.div>
  );
};

const Page3 = ({ 
  state, 
  dispatch 
}: { 
  state: AppState, 
  dispatch: React.Dispatch<Action> 
}) => {
  const handleSpinClick = () => {
    const randomPrizeNumber = Math.floor(Math.random() * PRIZE_DATA.length);
    dispatch({ type: 'SET_PRIZE_NUMBER', payload: randomPrizeNumber });
    dispatch({ type: 'START_SPIN' });
    dispatch({
      type: 'SET_PRIZE',
      payload: PRIZE_DATA[randomPrizeNumber].option,
    });
  };

  const handleStopSpinning = () => {
    dispatch({ type: 'STOP_SPIN' });
  };

  return (
    <motion.div
      className="w-full max-w-md flex flex-col items-center p-4"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.h1
        className="text-3xl font-bold mb-6"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        اختيار الجائزة
      </motion.h1>

      <motion.div
        className="relative w-full aspect-square max-w-sm mb-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, type: 'spring' }}
      >
        <Wheel
          mustStartSpinning={state.spinning}
          prizeNumber={state.prizeNumber}
          data={PRIZE_DATA}
          onStopSpinning={handleStopSpinning}
          backgroundColors={['#e0e0e0', '#f5f5f5']}
          textDistance={60}
          radiusLineWidth={1}
          outerBorderWidth={3}
          outerBorderColor="#f9dd50"
          innerBorderColor="#f9dd50"
          innerBorderWidth={0}
          radiusLineColor="#bdbdbd"
          fontSize={16}
        />
      </motion.div>

      <div className="flex flex-col gap-4 items-center w-full">
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: '#eab308' }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSpinClick}
          disabled={state.spinning}
          className={`px-6 py-3 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-400 transition-colors w-full ${
            state.spinning ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Tourner la roue
        </motion.button>

        {!state.spinning && state.prize !== null && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="text-xl font-bold bg-white text-purple-600 px-6 py-2 rounded-lg"
          >
            {state.prize.includes('تثبيت') ? (
              <span>Prix gagné : {state.prize}</span>
            ) : (
              <span>Prix gagné : {state.prize} coins</span>
            )}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default App;
