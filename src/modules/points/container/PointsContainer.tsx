import React from 'react'
import usePointsLogic from '../hooks/usePointsLogic';
import PointsView from '../view/PointsView';

const PointsContainer = () => {
    const props = usePointsLogic();
  return (
    <PointsView {...props}/>
  )
}

export default PointsContainer
