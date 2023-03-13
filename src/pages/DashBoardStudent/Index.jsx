import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { StartGetMyCourses } from "../../redux/actions/studentsActions";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import Page from "./Page";

const IndexStudent = () => {
  const dispatch = useDispatch();
  const { jwt } = useSelector((s) => s?.authReducer);
  const { dataCourses } = useSelector((s) => s?.studentReducer);
  const navigate = useNavigate();

  const handleSeeMaterial = (data) => {
    navigate(`/courseContent/${data.course_id}`);
  };

  useEffect(() => {
    dispatch(StartGetMyCourses(jwt));
  }, []);
  const handleReadAnswer = (String) => {
    const speech = new SpeechSynthesisUtterance();
    speech.text = String;
    speech.volume = 1;
    speech.rate = 0.8;
    speech.pitch = 1;
 

    window.speechSynthesis.speak(speech);
  };


  return <Page data={dataCourses} handleSeeMaterial={handleSeeMaterial }   handleReadAnswer={handleReadAnswer}/>;
};

export default IndexStudent;
