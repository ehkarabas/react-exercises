import LessonCard from "../components/LessonCard/LessonCard";

function Lesson({ id, name, age, image }) {
  return (
    <div
      id={id}
      className="cardWrapper col-md-6 col-lg-4 d-flex justify-content-center justify-content-md-start"
    >
      <LessonCard nameNested={name} ageNested={age} imageNested={image} />
    </div>
  );
}

export default Lesson;
