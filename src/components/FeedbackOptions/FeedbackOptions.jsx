import { Button } from '../FeedbackOptions/FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map((option) => {
    return (
      <Button key={option} onClick={() => onLeaveFeedback(option)} type="button">
        {capitalizeFirstLetter(option)}
            </Button>
         );
  });
};

function capitalizeFirstLetter(str) {
  return str[0].toUpperCase() + str.substring(1);
}