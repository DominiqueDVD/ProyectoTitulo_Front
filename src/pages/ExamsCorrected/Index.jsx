import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  StartGetExamsCorrected,
  ChoosenExam,
} from "../../redux/actions/studentsActions";
import Page from "./Page";

const IndexExamsCorrected = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { jwt } = useSelector((s) => s?.authReducer);
  const { dataExam } = useSelector((s) => s?.studentReducer);
  const handleReadAnswer = (String) => {
    const speech = new SpeechSynthesisUtterance();
    speech.text = String;
    speech.volume = 1;
    speech.rate = 0.7;
    speech.pitch = 1;
 

    window.speechSynthesis.speak(speech);
  };
  const handleSeeCorrections = (data) => {
    dispatch(ChoosenExam(data));
    navigate(`/seeCorrections/${data.studentExam_id}`);
  };

  useEffect(() => {
    dispatch(StartGetExamsCorrected(jwt, id));
  }, []);

  return <Page data={dataExam} handleSeeCorrections={handleSeeCorrections}   handleReadAnswer={handleReadAnswer}/>;
};

export default IndexExamsCorrected;
