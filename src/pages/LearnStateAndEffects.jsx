function LearnStateAndEffects() {
  const [fontWeights] = useState(fontWeightList);
  const [selectedFontWeight, setSelectedFontWeight] = useState(
    fontWeightList[3] // 400
  );

  const fontWeight = getFontWeight(selectedFontWeight);

  const handleChangeFontWeight = (index) => {
    setSelectedFontWeight(fontWeightList[index]);
  };

  return (
    <div className="m-10 flex flex-col gap-2 items-start">
      <h2
        className={`text-indigo-600 font-suit text-2xl ${fontWeight} uppercase`}
      >
        상태 및 이펙트 학습하기
      </h2>
    </div>
  );
}

export default LearnStateAndEffects;
