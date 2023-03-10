import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { StartGetAnswersCorrections } from "../../redux/actions/studentsActions";
import Page from "./Page";

const IndexSeeCorrections = () => {
  const { id } = useParams();
  const { jwt } = useSelector((s) => s?.authReducer);
  const [values, handleInputChange, data] = useForm({});
  const { dataAnswers, exam } = useSelector((s) => s?.studentReducer);
  const dispatch = useDispatch();
  const handleReadAnswer = (String) => {
    const speech = new SpeechSynthesisUtterance();
    speech.text = String;
    speech.volume = 1;
    speech.rate = 0.6;
    speech.pitch = 1;
 

    window.speechSynthesis.speak(speech);
  };


  const handleSeeExam = () => {
    window.open(exam.link);
  };

  useEffect(() => {
    dispatch(StartGetAnswersCorrections(jwt, id));
  }, []);

  return (
    <Page
    handleReadAnswer={handleReadAnswer}
      data={dataAnswers}
      exam={exam.link}
      nameExam={exam.name}
      score={exam.score}
      handleSeeExam={handleSeeExam}
    />
  );
};

export default IndexSeeCorrections;
