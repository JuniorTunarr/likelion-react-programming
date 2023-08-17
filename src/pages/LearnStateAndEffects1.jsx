import { useState, useCallback, useMemo } from 'react';

const getFontWeight = (selectedFontWeight) => {
  let fontWeight = '';

  switch (selectedFontWeight) {
    default:
    case 400:
      fontWeight = 'font-normal';
      break;
    case 100:
      fontWeight = 'font-thin';
      break;
    case 200:
      fontWeight = 'font-extralight';
      break;
    case 300:
      fontWeight = 'font-light';
      break;
    case 500:
      fontWeight = 'font-medium';
      break;
    case 600:
      fontWeight = 'font-semibold';
      break;
    case 700:
      fontWeight = 'font-bold';
      break;
    case 800:
      fontWeight = 'font-extrabold';
      break;
    case 900:
      fontWeight = 'font-black';
  }

  return fontWeight;
};

const fontWeightList = Array(9)
  .fill(1)
  .map((n, i) => 100 * (i + 1));

function LearnStateAndEffects() {
  const [fontWeights] = useState(fontWeightList);
  const [selectedFontWeight, setSelectedFontWeight] = useState(
    fontWeightList[3] // 400
  );

  const handleChangeFontWeight = useCallback(
    (index) => () => {
      setSelectedFontWeight(fontWeightList[index]);
    },
    [fontWeightList, setSelectedFontWeight]
  );

  const fontWeight = getFontWeight(selectedFontWeight);

  const WeightButton = ({ weight, index, isActive, onClickHandler }) => {
    const className = useMemo(
      () => `
                py-0.5 px-1.5 bg-stone-100 rounded-full
                ${isActive ? 'bg-stone-950 text-stone-50' : ''}
                hover:bg-stone-800
                hover:text-stone-100
                transition-colors duration-200
            `,
      [isActive]
    );

    return (
      <button
        key={weight}
        type="button"
        onClick={onClickHandler(index)}
        className={className}
      >
        {weight}
      </button>
    );
  };

  return (
    <div className="m-10 flex flex-col gap-2 items-start">
      <h2
        className={`text-indigo-600 font-suit text-2xl ${fontWeight} uppercase`}
      >
        상태 및 이펙트 학습하기
      </h2>

      <h3>글자 두께 설정</h3>

      <div
        role="group"
        className="bg-stone-100 py-1 px-4 rounded-full shadow-lg shadow-indigo-300/40"
      >
        {fontWeightList.map((weight, index) => (
          <WeightButton
            key={index}
            weight={weight}
            index={index}
            isActive={selectedFontWeight === fontWeightList[index]}
            onClickHandler={handleChangeFontWeight}
          />
        ))}
      </div>
    </div>
  );
}

export default LearnStateAndEffects;
