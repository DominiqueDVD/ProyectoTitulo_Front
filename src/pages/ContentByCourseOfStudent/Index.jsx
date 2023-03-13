import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { ChoosenExam } from "../../redux/actions/studentsActions";
import { startGetDocumentsByCourse } from "../../redux/actions/studentsActions";
import { StartGetCourseById } from "../../redux/actions/studentsActions";
import Page from "./Page";

const IndexContensByCourseOfStudent = () => {
  const { jwt } = useSelector((s) => s?.authReducer);
  const { dataDocuments } = useSelector((s) => s?.studentReducer);
  const [values, handleInputChange] = useForm({});
  const { dataCourses} = useSelector((s) => s?.studentReducer);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleReadAnswer = (String) => {
    const speech = new SpeechSynthesisUtterance();
    speech.text = String;
    speech.volume = 1;
    speech.rate = 0.7;
    speech.pitch = 1;
 

    window.speechSynthesis.speak(speech);
  };

  const handleSeeContens = (link) => {
    window.open(link);
  };

  const handleTakeExam = (data) => {
    dispatch(ChoosenExam(data));
    navigate(`/takeExam/${data.exam_id}`);
  };

  useEffect(() => {
    dispatch(startGetDocumentsByCourse(jwt, id));
    dispatch(StartGetCourseById(jwt, id));
  }, []);

  return (
    <Page
      cours={dataCourses}
      data={dataDocuments}
      handleSeeContens={handleSeeContens}
      handleTakeExam={handleTakeExam}
      handleReadAnswer={handleReadAnswer}
      fragmentModals={<></>}
    />
  );
};

export default IndexContensByCourseOfStudent;
