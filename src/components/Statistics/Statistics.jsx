import { StatisticItem } from 'components';
import { StatisticsList, StatisticTitle } from './Statistics.styled';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';


export const Statistics = ({title, stats}) => {
  const arrIcon= [<FaRegThumbsUp/>,
  <MdPeople/>,
  <MdOutlineProductionQuantityLimits/>,
  <GiTreeDoor/>
]

  return (
    <>
      <StatisticTitle>{title}</StatisticTitle>

<StatisticsList>
  {stats.map(({id, title,total}, index) =>{
   return <StatisticItem
     key={id}
     title={title}
     total={total}
     icon={arrIcon[index]}
    />
  })}
</StatisticsList>
    </>
  );
};
