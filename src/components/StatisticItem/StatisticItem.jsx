import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from './StatisticItem.styled';
import { IconContext } from "react-icons";

export const StatisticItem = ({title,total,icon}) => {
  return <StatisticBox>
    
  <IconContext.Provider value={{size:26, color: 'red'}}>
      {icon}
  </IconContext.Provider>

  <StatisticCounter>{total}</StatisticCounter>
  <StatisticText>{title}</StatisticText>
</StatisticBox>;
};
