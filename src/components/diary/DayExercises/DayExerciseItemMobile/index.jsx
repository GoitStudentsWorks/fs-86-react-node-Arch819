import { useDispatch } from 'react-redux';

import {
  Container,
  DayExerciseItem,
  DeleteButton,
  ExercisesText,
  ExercisesTextCalories,
  ExercisesTitle,
  ExercisesTextTarget,
  ExercisesTextTime,
  ExerciseItemContainer,
} from './index.styled';
import sprite from '../../../../images/sprite.svg';
import { getDeleteExerciseThunk } from 'store/diary/diaryThunk';
import { notiflixConfirmLogout } from 'helpers/notiflixMessage';

const DayExerciseItemMobile = ({ exercises }) => {
  const dispatch = useDispatch();
  const deleteExercise = async id => {
    try {
      await notiflixConfirmLogout('delete');
      dispatch(getDeleteExerciseThunk(id));
    } catch (error) {
      return;
    }
  };
  return exercises.map(
    ({
      idExercise,
      exercise: { name, bodyPart, equipment, target },
      time,
      burnedCalories,
    }) => (
      <DayExerciseItem key={idExercise}>
        <ExercisesTitle>Body Part</ExercisesTitle>
        <ExercisesText>{bodyPart}</ExercisesText>
        <ExercisesTitle>Equipment</ExercisesTitle>
        <ExercisesText>{equipment}</ExercisesText>
        <ExercisesTitle>Name</ExercisesTitle>
        <ExercisesText>{name}</ExercisesText>
        <Container>
          <ExerciseItemContainer>
            <ExercisesTitle>Target</ExercisesTitle>
            <ExercisesTextTarget>{target}</ExercisesTextTarget>
          </ExerciseItemContainer>
          <ExerciseItemContainer>
            <ExercisesTitle>Burned Calories</ExercisesTitle>
            <ExercisesTextCalories>{burnedCalories}</ExercisesTextCalories>
          </ExerciseItemContainer>
          <div>
            <ExercisesTitle>Time</ExercisesTitle>
            <ExercisesTextTime>{time}</ExercisesTextTime>
          </div>
          <DeleteButton
            type="button"
            onClick={() => deleteExercise(idExercise)}
          >
            <svg width="20px" height="20px">
              <use href={`${sprite}#icon-trash`}></use>
            </svg>
          </DeleteButton>
        </Container>
      </DayExerciseItem>
    )
  );
};

export default DayExerciseItemMobile;
